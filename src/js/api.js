/**
 * FuelPulse Pro API Client & Auth Manager
 */

const TOKEN_KEY = 'fuelpulse_auth_token';
const USER_KEY = 'fuelpulse_auth_user';

export class Api {
  static getToken() {
    return localStorage.getItem(TOKEN_KEY);
  }

  static setToken(token) {
    if (token) {
      localStorage.setItem(TOKEN_KEY, token);
    } else {
      localStorage.removeItem(TOKEN_KEY);
    }
  }

  static getUser() {
    try {
      const data = localStorage.getItem(USER_KEY);
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  }

  static setUser(user) {
    if (user) {
      localStorage.setItem(USER_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(USER_KEY);
    }
  }

  static isAuthenticated() {
    return !!this.getToken() && !!this.getUser();
  }

  static logout() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  }

  static async request(endpoint, options = {}) {
    const token = this.getToken();
    const headers = {
      'Content-Type': 'application/json',
      ...(options.headers || {})
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    // Adapt endpoint path depending on host environment
    const baseUrl = window.location.origin;
    const url = endpoint.startsWith('http') 
      ? endpoint 
      : `${baseUrl}/.netlify/functions/${endpoint.replace(/^\/(api\/)?/, '')}`;

    try {
      const res = await fetch(url, { ...options, headers });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || `HTTP error ${res.status}`);
      }

      return data;
    } catch (err) {
      console.warn(`API Request failed for ${endpoint}:`, err.message);
      throw err;
    }
  }

  // Auth Endpoints
  static async signup(email, password) {
    const res = await this.request('auth/signup', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    });
    if (res.token && res.user) {
      this.setToken(res.token);
      this.setUser(res.user);
    }
    return res;
  }

  static async login(email, password) {
    const res = await this.request('auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    });
    if (res.token && res.user) {
      this.setToken(res.token);
      this.setUser(res.user);
    }
    return res;
  }

  static async checkSession() {
    if (!this.getToken()) return null;
    try {
      const res = await this.request('auth/me', { method: 'GET' });
      if (res.user) {
        this.setUser(res.user);
        return res.user;
      }
    } catch {
      this.logout();
    }
    return null;
  }

  // Sync Endpoints
  static async fetchCloudData() {
    if (!this.isAuthenticated()) return null;
    return await this.request('sync', { method: 'GET' });
  }

  static async pushCloudData(payload) {
    if (!this.isAuthenticated()) return null;
    return await this.request('sync', {
      method: 'POST',
      body: JSON.stringify(payload)
    });
  }
}
