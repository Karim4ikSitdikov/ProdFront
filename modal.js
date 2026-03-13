// Modal Component for showing match explanations
class Modal {
  constructor() {
    this.overlay = null;
    this.modal = null;
    this.isOpen = false;
  }

  show(content) {
    if (this.isOpen) return;
    
    // Create overlay
    this.overlay = document.createElement('div');
    this.overlay.className = 'modal-overlay';
    
    // Create modal
    this.modal = document.createElement('div');
    this.modal.className = 'modal';
    this.modal.innerHTML = `
      <div class="modal-header">
        <h2 class="modal-title">Объяснение совместимости</h2>
        <button class="modal-close" aria-label="Закрыть">&times;</button>
      </div>
      <div class="modal-content">${content}</div>
    `;
    
    this.overlay.appendChild(this.modal);
    document.body.appendChild(this.overlay);
    
    // Attach event listeners
    this.attachListeners();
    
    // Trigger animation
    requestAnimationFrame(() => {
      this.overlay.classList.add('active');
    });
    
    this.isOpen = true;
  }

  hide() {
    if (!this.isOpen) return;
    
    this.overlay.classList.remove('active');
    
    setTimeout(() => {
      if (this.overlay && this.overlay.parentNode) {
        document.body.removeChild(this.overlay);
      }
      this.overlay = null;
      this.modal = null;
      this.isOpen = false;
    }, 300);
  }

  attachListeners() {
    const closeBtn = this.modal.querySelector('.modal-close');
    closeBtn.addEventListener('click', () => this.hide());
    
    this.overlay.addEventListener('click', (e) => {
      if (e.target === this.overlay) {
        this.hide();
      }
    });
    
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.hide();
      }
    });
  }

  static showExplanation(userId) {
    const modal = new Modal();
    
    // Mock explanation data (будет заменено на реальный API вызов)
    const explanationHTML = `
      <div class="explanation-section">
        <div class="explanation-item">
          <div class="explanation-icon">🎯</div>
          <div class="explanation-text">
            <div class="explanation-title">Похожие интересы</div>
            <div class="explanation-desc">Вы оба любите активный отдых и путешествия</div>
          </div>
        </div>
        
        <div class="explanation-item">
          <div class="explanation-icon">📍</div>
          <div class="explanation-text">
            <div class="explanation-title">Общие места</div>
            <div class="explanation-desc">Часто бываете в похожих районах города</div>
          </div>
        </div>
        
        <div class="explanation-item">
          <div class="explanation-icon">⏰</div>
          <div class="explanation-text">
            <div class="explanation-title">Время активности</div>
            <div class="explanation-desc">Схожий ритм жизни и распорядок дня</div>
          </div>
        </div>
        
        <div class="explanation-item">
          <div class="explanation-icon">🍽️</div>
          <div class="explanation-text">
            <div class="explanation-title">Вкусовые предпочтения</div>
            <div class="explanation-desc">Похожие предпочтения в заведениях и кухне</div>
          </div>
        </div>
      </div>
      
      <div class="explanation-note">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
        </svg>
        <span>Объяснения построены на анонимизированных данных без раскрытия личной информации</span>
      </div>
    `;
    
    modal.show(explanationHTML);
    
    // TODO: Fetch real explanation from API
    // window.api.getExplanation(userId).then(data => {
    //   modal.show(generateExplanationHTML(data));
    // });
  }
}

// Export
window.Modal = Modal;
