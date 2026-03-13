// State Management для приложения
class AppState {
  constructor() {
    this.state = {
      user: null,
      isAuthenticated: false,
      recommendations: [],
      currentRecommendationIndex: 0,
      matches: [],
      conversations: [],
      currentConversation: null,
    };
    
    this.listeners = new Map();
  }

  // Получить текущее состояние
  get(key) {
    return key ? this.state[key] : this.state;
  }

  // Обновить состояние
  set(key, value) {
    const oldValue = this.state[key];
    this.state[key] = value;
    this.notify(key, value, oldValue);
  }

  // Обновить несколько значений
  update(updates) {
    Object.keys(updates).forEach(key => {
      this.set(key, updates[key]);
    });
  }

  // Подписаться на изменения
  subscribe(key, callback) {
    if (!this.listeners.has(key)) {
      this.listeners.set(key, []);
    }
    this.listeners.get(key).push(callback);
    
    // Вернуть функцию для отписки
    return () => {
      const callbacks = this.listeners.get(key);
      const index = callbacks.indexOf(callback);
      if (index > -1) {
        callbacks.splice(index, 1);
      }
    };
  }

  // Уведомить подписчиков
  notify(key, newValue, oldValue) {
    if (this.listeners.has(key)) {
      this.listeners.get(key).forEach(callback => {
        callback(newValue, oldValue);
      });
    }
  }

  // Методы для работы с рекомендациями
  getCurrentRecommendation() {
    const index = this.state.currentRecommendationIndex;
    return this.state.recommendations[index] || null;
  }

  nextRecommendation() {
    const nextIndex = this.state.currentRecommendationIndex + 1;
    if (nextIndex < this.state.recommendations.length) {
      this.set('currentRecommendationIndex', nextIndex);
      return this.getCurrentRecommendation();
    }
    return null;
  }

  hasMoreRecommendations() {
    return this.state.currentRecommendationIndex < this.state.recommendations.length - 1;
  }

  // Загрузить рекомендации
  async loadRecommendations() {
    try {
      const recommendations = await window.api.getRecommendations();
      this.update({
        recommendations,
        currentRecommendationIndex: 0,
      });
      return recommendations;
    } catch (error) {
      console.error('Failed to load recommendations:', error);
      return [];
    }
  }

  // Обработка взаимодействия с карточкой
  async handleInteraction(action) {
    const current = this.getCurrentRecommendation();
    if (!current) return;

    try {
      const result = await window.api.sendInteraction(current.id, action);
      
      // Если это match, добавляем в список matches
      if (result.matched) {
        const matches = [...this.state.matches, result.match];
        this.set('matches', matches);
      }

      // Переходим к следующей рекомендации
      this.nextRecommendation();
      
      return result;
    } catch (error) {
      console.error('Failed to send interaction:', error);
      throw error;
    }
  }

  // Аутентификация
  async login(credentials) {
    try {
      const result = await window.api.login(credentials);
      this.update({
        user: result.user,
        isAuthenticated: true,
      });
      return result;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  }

  async register(data) {
    try {
      const result = await window.api.register(data);
      this.update({
        user: result.user,
        isAuthenticated: true,
      });
      return result;
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    }
  }

  logout() {
    window.api.logout();
    this.update({
      user: null,
      isAuthenticated: false,
      recommendations: [],
      matches: [],
      conversations: [],
    });
  }

  // Загрузить matches
  async loadMatches() {
    try {
      const matches = await window.api.getMatches();
      this.set('matches', matches);
      return matches;
    } catch (error) {
      console.error('Failed to load matches:', error);
      return [];
    }
  }

  // Загрузить conversations
  async loadConversations() {
    try {
      const conversations = await window.api.getConversations();
      this.set('conversations', conversations);
      return conversations;
    } catch (error) {
      console.error('Failed to load conversations:', error);
      return [];
    }
  }
}

// Экспорт глобального экземпляра
window.appState = new AppState();
