// Swipe Card Animation Component
class SwipeCards {
  constructor(container) {
    this.container = container;
    this.cards = [];
    this.currentCard = null;
    this.startX = 0;
    this.startY = 0;
    this.isDragging = false;
    this.threshold = 100; // Минимальное расстояние для свайпа
    
    this.init();
  }

  init() {
    if (!this.container) return;
    
    this.cards = Array.from(this.container.querySelectorAll('.match-card'));
    this.currentCard = this.cards.find(card => card.classList.contains('main'));
    
    if (this.currentCard) {
      this.attachEventListeners(this.currentCard);
    }
  }

  attachEventListeners(card) {
    // Touch events
    card.addEventListener('touchstart', this.onStart.bind(this), { passive: true });
    card.addEventListener('touchmove', this.onMove.bind(this), { passive: false });
    card.addEventListener('touchend', this.onEnd.bind(this));
    
    // Mouse events
    card.addEventListener('mousedown', this.onStart.bind(this));
    card.addEventListener('mousemove', this.onMove.bind(this));
    card.addEventListener('mouseup', this.onEnd.bind(this));
    card.addEventListener('mouseleave', this.onEnd.bind(this));
  }

  onStart(e) {
    this.isDragging = true;
    this.currentCard.style.transition = 'none';
    
    const touch = e.type.includes('touch') ? e.touches[0] : e;
    this.startX = touch.clientX;
    this.startY = touch.clientY;
  }

  onMove(e) {
    if (!this.isDragging) return;
    
    const touch = e.type.includes('touch') ? e.touches[0] : e;
    const deltaX = touch.clientX - this.startX;
    const deltaY = touch.clientY - this.startY;
    
    // Предотвращаем скролл при свайпе
    if (Math.abs(deltaX) > 10) {
      e.preventDefault();
    }
    
    // Вычисляем угол поворота
    const deg = deltaX / 10;
    
    // Применяем трансформации
    this.currentCard.style.transform = `translate(${deltaX}px, ${deltaY}px) rotate(${deg}deg)`;
    
    // Добавляем визуальные индикаторы
    const opacity = Math.abs(deltaX) / this.threshold;
    
    if (deltaX > 0) {
      this.showLikeIndicator(Math.min(opacity, 1));
    } else if (deltaX < 0) {
      this.showPassIndicator(Math.min(opacity, 1));
    }
  }

  onEnd(e) {
    if (!this.isDragging) return;
    this.isDragging = false;
    
    const touch = e.type.includes('touch') ? e.changedTouches[0] : e;
    const deltaX = touch.clientX - this.startX;
    
    this.currentCard.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
    
    // Определяем действие пользователя
    if (Math.abs(deltaX) > this.threshold) {
      if (deltaX > 0) {
        this.swipeRight();
      } else {
        this.swipeLeft();
      }
    } else {
      // Возвращаем карточку на место
      this.resetCard();
    }
    
    this.hideIndicators();
  }

  swipeRight() {
    this.showLikeIndicator(1);
    this.animateOut('right', () => {
      this.handleAction('like');
    });
  }

  swipeLeft() {
    this.showPassIndicator(1);
    this.animateOut('left', () => {
      this.handleAction('pass');
    });
  }

  animateOut(direction, callback) {
    const multiplier = direction === 'right' ? 1 : -1;
    this.currentCard.style.transform = `translate(${multiplier * 1000}px, ${-100}px) rotate(${multiplier * 30}deg)`;
    this.currentCard.style.opacity = '0';
    
    setTimeout(() => {
      if (callback) callback();
      this.showNextCard();
    }, 300);
  }

  resetCard() {
    this.currentCard.style.transform = 'translate(0, 0) rotate(0deg)';
  }

  showNextCard() {
    if (!this.currentCard) return;
    
    // Удаляем текущую карточку
    this.currentCard.remove();
    
    // Обновляем список карточек
    this.cards = Array.from(this.container.querySelectorAll('.match-card'));
    
    if (this.cards.length > 0) {
      // Обновляем классы для следующих карточек
      this.cards.forEach((card, index) => {
        card.classList.remove('main', 'back-1', 'back-2', 'ghost');
        
        if (index === 0) {
          card.classList.add('main');
          this.currentCard = card;
          this.attachEventListeners(card);
        } else if (index === 1) {
          card.classList.add('back-1', 'ghost');
        } else if (index === 2) {
          card.classList.add('back-2', 'ghost');
        }
      });
      
      // Триггерим анимацию появления
      requestAnimationFrame(() => {
        this.currentCard.style.transform = 'scale(1)';
        this.currentCard.style.opacity = '1';
      });
    } else {
      // Все карточки закончились
      this.showEmptyState();
    }
  }

  showEmptyState() {
    this.container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">💫</div>
        <div class="empty-title">Все просмотрено!</div>
        <div class="empty-subtitle">Возвращайтесь позже для новых рекомендаций</div>
      </div>
    `;
  }

  showLikeIndicator(opacity) {
    const indicator = this.currentCard.querySelector('.like-indicator') || this.createIndicator('like');
    indicator.style.opacity = opacity;
  }

  showPassIndicator(opacity) {
    const indicator = this.currentCard.querySelector('.pass-indicator') || this.createIndicator('pass');
    indicator.style.opacity = opacity;
  }

  createIndicator(type) {
    const indicator = document.createElement('div');
    indicator.className = `swipe-indicator ${type}-indicator`;
    indicator.textContent = type === 'like' ? '❤️' : '✕';
    this.currentCard.appendChild(indicator);
    return indicator;
  }

  hideIndicators() {
    const indicators = this.currentCard.querySelectorAll('.swipe-indicator');
    indicators.forEach(ind => ind.style.opacity = '0');
  }

  handleAction(action) {
    // Интеграция с состоянием приложения
    if (window.appState) {
      window.appState.handleInteraction(action).catch(err => {
        console.error('Failed to handle interaction:', err);
      });
    }
    
    // Вызываем кастомное событие
    const event = new CustomEvent('cardSwiped', {
      detail: { action, card: this.currentCard }
    });
    document.dispatchEvent(event);
  }

  // Программные методы для кнопок
  programmaticSwipe(direction) {
    if (direction === 'left') {
      this.swipeLeft();
    } else if (direction === 'right') {
      this.swipeRight();
    }
  }
}

// Экспорт
window.SwipeCards = SwipeCards;
