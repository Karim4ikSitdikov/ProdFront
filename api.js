// API Service для работы с бекендом
class APIService {
  constructor(baseURL = '/api') {
    this.baseURL = baseURL;
    this.token = localStorage.getItem('auth_token');
  }

  // Утилита для HTTP запросов
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // Auth endpoints
  async register(data) {
    const result = await this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    if (result.token) {
      this.setToken(result.token);
    }
    return result;
  }

  async login(data) {
    const result = await this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    if (result.token) {
      this.setToken(result.token);
    }
    return result;
  }

  logout() {
    this.token = null;
    localStorage.removeItem('auth_token');
  }

  setToken(token) {
    this.token = token;
    localStorage.setItem('auth_token', token);
  }

  // Profile endpoints
  async getProfile() {
    return await this.request('/profile');
  }

  async updateProfile(data) {
    return await this.request('/profile', {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async uploadPhoto(file) {
    const formData = new FormData();
    formData.append('photo', file);
    
    return await this.request('/profile/photo', {
      method: 'POST',
      body: formData,
      headers: {}, // Let browser set Content-Type with boundary
    });
  }

  // Recommendations endpoints
  async getRecommendations(limit = 10) {
    return await this.request(`/recommendations?limit=${limit}`);
  }

  async getExplanation(userId) {
    return await this.request(`/recommendations/${userId}/explanation`);
  }

  // Interactions endpoints
  async sendInteraction(userId, action) {
    // action: 'like', 'pass', 'superlike'
    return await this.request('/interactions', {
      method: 'POST',
      body: JSON.stringify({ userId, action }),
    });
  }

  // Matches endpoints
  async getMatches() {
    return await this.request('/matches');
  }

  async getMatch(matchId) {
    return await this.request(`/matches/${matchId}`);
  }

  // Conversations endpoints
  async getConversations() {
    return await this.request('/conversations');
  }

  async getMessages(conversationId, limit = 50) {
    return await this.request(`/conversations/${conversationId}/messages?limit=${limit}`);
  }

  async sendMessage(conversationId, message) {
    return await this.request(`/conversations/${conversationId}/messages`, {
      method: 'POST',
      body: JSON.stringify({ message }),
    });
  }

  // Safety endpoints
  async blockUser(userId, reason = '') {
    return await this.request('/safety/block', {
      method: 'POST',
      body: JSON.stringify({ userId, reason }),
    });
  }

  async reportUser(userId, reason, details = '') {
    return await this.request('/safety/report', {
      method: 'POST',
      body: JSON.stringify({ userId, reason, details }),
    });
  }

  async unblockUser(userId) {
    return await this.request(`/safety/block/${userId}`, {
      method: 'DELETE',
    });
  }

  // Audit endpoints
  async getAuditLog() {
    return await this.request('/audit');
  }
}

// Экспорт глобального экземпляра
window.api = new APIService();
