import { neon } from '@neondatabase/serverless';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'fuelpulse_pro_secret_key_change_in_prod';

function getDb() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error('DATABASE_URL environment variable is not configured.');
  }
  return neon(connectionString);
}

function jsonResponse(statusCode, body) {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
    },
    body: JSON.stringify(body)
  };
}

export async function handler(event, context) {
  // CORS Preflight
  if (event.httpMethod === 'OPTIONS') {
    return jsonResponse(200, { ok: true });
  }

  const path = event.path.replace(/\.netlify\/functions\/auth\/?/, '').replace(/^\/api\/auth\/?/, '');

  try {
    const sql = getDb();

    // 1. POST /signup
    if (path.includes('signup') && event.httpMethod === 'POST') {
      const { email, password } = JSON.parse(event.body || '{}');

      if (!email || !password || password.length < 6) {
        return jsonResponse(400, { error: 'Email and a password of at least 6 characters are required.' });
      }

      const existing = await sql`SELECT id FROM users WHERE LOWER(email) = LOWER(${email.trim()})`;
      if (existing.length > 0) {
        return jsonResponse(400, { error: 'An account with this email already exists.' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const [user] = await sql`
        INSERT INTO users (email, password_hash)
        VALUES (LOWER(${email.trim()}), ${hashedPassword})
        RETURNING id, email, created_at
      `;

      // Initialize default settings for user
      await sql`
        INSERT INTO user_settings (user_id)
        VALUES (${user.id})
        ON CONFLICT (user_id) DO NOTHING
      `;

      const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, { expiresIn: '30d' });

      return jsonResponse(201, {
        user: { id: user.id, email: user.email },
        token
      });
    }

    // 2. POST /login
    if (path.includes('login') && event.httpMethod === 'POST') {
      const { email, password } = JSON.parse(event.body || '{}');

      if (!email || !password) {
        return jsonResponse(400, { error: 'Please enter both email and password.' });
      }

      const [user] = await sql`SELECT * FROM users WHERE LOWER(email) = LOWER(${email.trim()})`;
      if (!user) {
        return jsonResponse(401, { error: 'Invalid email or password.' });
      }

      const isMatch = await bcrypt.compare(password, user.password_hash);
      if (!isMatch) {
        return jsonResponse(401, { error: 'Invalid email or password.' });
      }

      const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, { expiresIn: '30d' });

      return jsonResponse(200, {
        user: { id: user.id, email: user.email },
        token
      });
    }

    // 3. GET /me (Verify session)
    if (path.includes('me') && event.httpMethod === 'GET') {
      const authHeader = event.headers.authorization || event.headers.Authorization;
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return jsonResponse(401, { error: 'Unauthorized.' });
      }

      const token = authHeader.split(' ')[1];
      const decoded = jwt.verify(token, JWT_SECRET);

      const [user] = await sql`SELECT id, email, created_at FROM users WHERE id = ${decoded.userId}`;
      if (!user) {
        return jsonResponse(401, { error: 'User account not found.' });
      }

      return jsonResponse(200, { user });
    }

    return jsonResponse(404, { error: 'Auth route not found.' });
  } catch (error) {
    console.error('Auth Error:', error);
    return jsonResponse(500, { error: error.message || 'Internal server error' });
  }
}
