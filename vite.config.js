import { defineConfig, loadEnv } from 'vite';
import { handler as authHandler } from './netlify/functions/auth.js';
import { handler as syncHandler } from './netlify/functions/sync.js';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  Object.assign(process.env, env);

  return {
    plugins: [
      {
        name: 'netlify-functions-dev-middleware',
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            if (req.url && req.url.includes('/.netlify/functions/')) {
              let body = '';
              req.on('data', chunk => {
                body += chunk;
              });
              req.on('end', async () => {
                const event = {
                  httpMethod: req.method,
                  path: req.url,
                  headers: req.headers,
                  body
                };

                let result;
                try {
                  if (req.url.includes('/auth')) {
                    result = await authHandler(event, {});
                  } else if (req.url.includes('/sync')) {
                    result = await syncHandler(event, {});
                  } else {
                    result = { statusCode: 404, body: JSON.stringify({ error: 'Function endpoint not found.' }) };
                  }
                } catch (err) {
                  result = { statusCode: 500, body: JSON.stringify({ error: err.message || 'Server error' }) };
                }

                res.statusCode = result.statusCode || 200;
                if (result.headers) {
                  Object.entries(result.headers).forEach(([key, value]) => {
                    res.setHeader(key, value);
                  });
                }
                res.end(result.body);
              });
              return;
            }
            next();
          });
        }
      }
    ]
  };
});
