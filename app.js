// SPA Router and Page Templates
(() => {
  // Page Templates
  const pages = {
    onboarding: () => `
      <div class="app">
        <header class="topbar">
          <div class="logo-box">лого</div>
          <div class="app-title">Название</div>
        </header>

        <main class="screen">
          <section class="hero">
            <div class="hero-banner">Просто сделай</div>
            <div class="hero-sub">свайп вправо</div>
            <div class="hero-actions">
              <button class="btn-primary wide" type="button" data-link="/register">
                Регистрация
              </button>
              <a class="link-muted" href="#" data-link="/login">Войти в аккаунт</a>
            </div>
          </section>
        </main>
      </div>
    `,

    login: () => `
      <div class="app">
        <header class="topbar">
          <div class="logo-box">лого</div>
          <div class="app-title">Название</div>
        </header>

        <main class="screen">
          <div class="section-title">Вход</div>
          <form class="form">
            <div>
              <label for="login-email">Введите вашу почту</label>
              <input id="login-email" class="input-field" type="email" placeholder="email" />
            </div>
            <div>
              <label for="login-pass">Введите пароль</label>
              <input id="login-pass" class="input-field" type="password" placeholder="password" />
            </div>
            <a class="link-muted" href="#">Забыли пароль?</a>
            <div class="form-actions">
              <button class="btn-primary wide" type="button" data-link="/feed">
                Войти
              </button>
            </div>
          </form>
        </main>
      </div>
    `,

    register: () => `
      <div class="app">
        <header class="topbar">
          <div class="logo-box">лого</div>
          <div class="app-title">Название</div>
        </header>

        <main class="screen auth-screen">
          <div class="auth-layout">
            <section class="auth-hero">
              <div class="auth-badge">T‑style matching</div>
              <h1>Регистрация</h1>
              <p>
                Создайте профиль и получите персональную выдачу по безопасным поведенческим сигналам.
                Приватные данные не раскрываются.
              </p>
              <div class="auth-features">
                <div class="auth-feature">Персональные рекомендации</div>
                <div class="auth-feature">Защита от абьюза</div>
                <div class="auth-feature">Прозрачные объяснения</div>
              </div>
            </section>

            <section class="auth-card">
              <div class="auth-card-head">
                <div>
                  <div class="auth-title">Создать аккаунт</div>
                  <div class="auth-subtitle">Заполните минимальный профиль</div>
                </div>
                <div class="auth-step">1/2</div>
              </div>

              <form class="form auth-form">
                <div>
                  <label for="reg-email">Введите вашу почту</label>
                  <input id="reg-email" class="input-field" type="email" placeholder="email" />
                </div>
                <div>
                  <label for="reg-pass">Придумайте пароль</label>
                  <input id="reg-pass" class="input-field" type="password" placeholder="password" />
                </div>
                <div>
                  <label for="reg-pass-confirm">Подтвердите пароль</label>
                  <input
                    id="reg-pass-confirm"
                    class="input-field"
                    type="password"
                    placeholder="password confirm"
                  />
                </div>
                <div class="form-actions auth-actions">
                  <button class="btn-primary wide" type="button" data-link="/feed">
                    Зарегистрироваться
                  </button>
                  <div class="auth-alt">
                    Уже есть аккаунт? <a href="#" data-link="/login">Войти</a>
                  </div>
                </div>
              </form>
            </section>
          </div>
        </main>
      </div>
    `,

    feed: () => `
      <div class="app">
        <header class="topbar">
          <div class="logo-box">лого</div>
          <div class="app-title">Название</div>
        </header>

        <main class="screen has-bottom-nav">
          <div class="section-title">Найди себе пару</div>
          <div class="card-stack">
            <div class="match-card back-2 ghost">
              <div class="card-photo"></div>
              <div class="profile-row">
                <div class="profile-name">Анастасия 23</div>
                <div class="profile-meta">Имя возраст</div>
              </div>
              <div class="profile-desc">Люблю гулять с собакой и ездить на пикники</div>
              <div class="card-actions">
                <div class="action-circle">&times;</div>
                <div class="action-hint">Влево - пропустить<br />вправо - лайк</div>
                <div class="action-circle">&#10003;</div>
              </div>
            </div>
            <div class="match-card back-1 ghost">
              <div class="card-photo"></div>
              <div class="profile-row">
                <div class="profile-name">Анастасия 23</div>
                <div class="profile-meta">Имя возраст</div>
              </div>
              <div class="profile-desc">Люблю гулять с собакой и ездить на пикники</div>
              <div class="card-actions">
                <div class="action-circle">&times;</div>
                <div class="action-hint">Влево - пропустить<br />вправо - лайк</div>
                <div class="action-circle">&#10003;</div>
              </div>
            </div>
            <div class="match-card main">
              <img class="card-photo" src="assets/card-photo.svg" alt="Фото" />
              <div class="profile-row">
                <div class="profile-name">Анастасия 23</div>
                <div class="profile-meta">Имя возраст</div>
              </div>
              <div class="profile-desc">Люблю гулять с собакой и ездить на пикники</div>
              <div class="compatibility-badge" data-tooltip="Почему мы подходим">
                <span class="match-score">92%</span>
                <span class="match-label">совпадение</span>
              </div>
              <div class="card-actions">
                <div class="action-circle">&times;</div>
                <div class="action-hint">Влево - пропустить<br />вправо - лайк</div>
                <div class="action-circle">&#10003;</div>
              </div>
            </div>
          </div>
        </main>

        <nav class="bottom-nav">
          <a class="nav-item" data-nav="feed" href="#" data-link="/feed" aria-label="Лайки">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12 21s-6.7-4.35-9.33-8.28C.5 9.1 2.4 5.5 6 5.5c2 0 3.4 1.1 4 2 0.6-.9 2-2 4-2 3.6 0 5.5 3.6 3.33 7.22C18.7 16.65 12 21 12 21z"
              />
            </svg>
            <span class="badge">3</span>
          </a>
          <a class="nav-item" data-nav="alerts" href="#" data-link="/chats" aria-label="Уведомления">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6V11c0-3.1-1.6-5.6-4.5-6.3V4a1.5 1.5 0 0 0-3 0v.7C7.6 5.4 6 7.9 6 11v5l-2 2v1h16v-1l-2-2z"
              />
            </svg>
            <span class="badge">3</span>
          </a>
          <a class="nav-item" data-nav="chats" href="#" data-link="/chats" aria-label="Чаты">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 4h16v12H7l-3 3V4z" />
            </svg>
            <span class="badge">3</span>
          </a>
          <a class="nav-item" data-nav="profile" href="#" data-link="/profile" aria-label="Профиль">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0 2c-4.4 0-8 2.2-8 5v1h16v-1c0-2.8-3.6-5-8-5z"
              />
            </svg>
          </a>
        </nav>
      </div>
    `,

    chats: () => `
      <div class="app">
        <header class="topbar">
          <div class="logo-box">лого</div>
          <div class="app-title">Название</div>
        </header>

        <main class="screen has-bottom-nav">
          <div class="section-title">Чаты</div>
          <div class="chat-list">
            <a class="chat-card" href="#" data-link="/chat">
              <img class="avatar-img" src="assets/avatar.svg" alt="" />
              <div>
                <div class="chat-title">Анастасия 23</div>
                <div class="chat-snippet">Привет, тебе темное или све...</div>
              </div>
            </a>
            <a class="chat-card" href="#" data-link="/chat">
              <img class="avatar-img" src="assets/avatar.svg" alt="" />
              <div>
                <div class="chat-title">Анастасия 23</div>
                <div class="chat-snippet">Привет, тебе темное или све...</div>
              </div>
            </a>
            <a class="chat-card" href="#" data-link="/chat">
              <img class="avatar-img" src="assets/avatar.svg" alt="" />
              <div>
                <div class="chat-title">Анастасия 23</div>
                <div class="chat-snippet">Привет, тебе темное или све...</div>
              </div>
            </a>
            <a class="chat-card" href="#" data-link="/chat">
              <img class="avatar-img" src="assets/avatar.svg" alt="" />
              <div>
                <div class="chat-title">Анастасия 23</div>
                <div class="chat-snippet">Привет, тебе темное или све...</div>
              </div>
            </a>
            <a class="chat-card" href="#" data-link="/chat">
              <img class="avatar-img" src="assets/avatar.svg" alt="" />
              <div>
                <div class="chat-title">Анастасия 23</div>
                <div class="chat-snippet">Привет, тебе темное или све...</div>
              </div>
            </a>
          </div>
          <div class="chat-note">Чаты с людьми, у которых с вами взаимный лайк</div>
        </main>

        <nav class="bottom-nav">
          <a class="nav-item" data-nav="feed" href="#" data-link="/feed" aria-label="Лайки">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12 21s-6.7-4.35-9.33-8.28C.5 9.1 2.4 5.5 6 5.5c2 0 3.4 1.1 4 2 0.6-.9 2-2 4-2 3.6 0 5.5 3.6 3.33 7.22C18.7 16.65 12 21 12 21z"
              />
            </svg>
            <span class="badge">3</span>
          </a>
          <a class="nav-item" data-nav="alerts" href="#" data-link="/chats" aria-label="Уведомления">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6V11c0-3.1-1.6-5.6-4.5-6.3V4a1.5 1.5 0 0 0-3 0v.7C7.6 5.4 6 7.9 6 11v5l-2 2v1h16v-1l-2-2z"
              />
            </svg>
            <span class="badge">3</span>
          </a>
          <a class="nav-item" data-nav="chats" href="#" data-link="/chats" aria-label="Чаты">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 4h16v12H7l-3 3V4z" />
            </svg>
            <span class="badge">3</span>
          </a>
          <a class="nav-item" data-nav="profile" href="#" data-link="/profile" aria-label="Профиль">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0 2c-4.4 0-8 2.2-8 5v1h16v-1c0-2.8-3.6-5-8-5z"
              />
            </svg>
          </a>
        </nav>
      </div>
    `,

    chat: () => `
      <div class="app">
        <header class="topbar">
          <div class="logo-box">лого</div>
          <div class="app-title">Название</div>
        </header>

        <main class="screen has-bottom-nav has-chat-input">
          <div class="profile-card">
            <img class="avatar-img" src="assets/avatar.svg" alt="" />
            <div class="profile-name">Анастасия 23</div>
            <a class="profile-link" href="#" data-link="/profile">В профиль</a>
          </div>

          <div class="message-list">
            <div class="message incoming">Привет, тебе темное или светлое??</div>
            <div class="message outgoing">Давай светлое, а ты какое любишь?</div>
            <div class="message outgoing">Давай светлое, а ты какое любишь?</div>
            <div class="message incoming">Привет, тебе темное или светлое??</div>
            <div class="message outgoing">Давай светлое, а ты какое любишь?</div>
            <div class="message outgoing">Давай светлое, а ты какое любишь?</div>
            <div class="message outgoing">Давай светлое, а ты какое любишь?</div>
            <div class="message incoming">Привет, тебе темное или светлое??</div>
            <div class="message incoming">Привет, тебе темное или светлое??</div>
          </div>
        </main>

        <div class="chat-input">
          <input class="message-input" type="text" placeholder="your message" />
          <button class="send-btn" type="button">send</button>
        </div>

        <nav class="bottom-nav">
          <a class="nav-item" data-nav="feed" href="#" data-link="/feed" aria-label="Лайки">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12 21s-6.7-4.35-9.33-8.28C.5 9.1 2.4 5.5 6 5.5c2 0 3.4 1.1 4 2 0.6-.9 2-2 4-2 3.6 0 5.5 3.6 3.33 7.22C18.7 16.65 12 21 12 21z"
              />
            </svg>
            <span class="badge">3</span>
          </a>
          <a class="nav-item" data-nav="alerts" href="#" data-link="/chats" aria-label="Уведомления">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6V11c0-3.1-1.6-5.6-4.5-6.3V4a1.5 1.5 0 0 0-3 0v.7C7.6 5.4 6 7.9 6 11v5l-2 2v1h16v-1l-2-2z"
              />
            </svg>
            <span class="badge">3</span>
          </a>
          <a class="nav-item" data-nav="chats" href="#" data-link="/chats" aria-label="Чаты">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 4h16v12H7l-3 3V4z" />
            </svg>
            <span class="badge">3</span>
          </a>
          <a class="nav-item" data-nav="profile" href="#" data-link="/profile" aria-label="Профиль">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0 2c-4.4 0-8 2.2-8 5v1h16v-1c0-2.8-3.6-5-8-5z"
              />
            </svg>
          </a>
        </nav>
      </div>
    `,

    profile: () => `
      <div class="app">
        <header class="topbar">
          <div class="logo-box">лого</div>
          <div class="app-title">Название</div>
        </header>

        <main class="screen has-bottom-nav">
          <div class="section-title">Профиль</div>
          <div class="profile-view">
            <img class="profile-avatar" src="assets/avatar.svg" alt="" />
            <div class="profile-name large">Анастасия 23</div>
            <div class="profile-desc muted">
              Люблю прогулки, пикники и спокойные вечера. Ищу общение без спама и абьюза.
            </div>
            <div class="profile-actions">
              <button class="btn-soft" type="button">Пожаловаться</button>
              <button class="btn-soft danger" type="button">Заблокировать</button>
            </div>
          </div>
        </main>

        <nav class="bottom-nav">
          <a class="nav-item" data-nav="feed" href="#" data-link="/feed" aria-label="Лайки">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12 21s-6.7-4.35-9.33-8.28C.5 9.1 2.4 5.5 6 5.5c2 0 3.4 1.1 4 2 0.6-.9 2-2 4-2 3.6 0 5.5 3.6 3.33 7.22C18.7 16.65 12 21 12 21z"
              />
            </svg>
            <span class="badge">3</span>
          </a>
          <a class="nav-item" data-nav="alerts" href="#" data-link="/chats" aria-label="Уведомления">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6V11c0-3.1-1.6-5.6-4.5-6.3V4a1.5 1.5 0 0 0-3 0v.7C7.6 5.4 6 7.9 6 11v5l-2 2v1h16v-1l-2-2z"
              />
            </svg>
            <span class="badge">3</span>
          </a>
          <a class="nav-item" data-nav="chats" href="#" data-link="/chats" aria-label="Чаты">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 4h16v12H7l-3 3V4z" />
            </svg>
            <span class="badge">3</span>
          </a>
          <a class="nav-item" data-nav="profile" href="#" data-link="/profile" aria-label="Профиль">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0 2c-4.4 0-8 2.2-8 5v1h16v-1c0-2.8-3.6-5-8-5z"
              />
            </svg>
          </a>
        </nav>
      </div>
    `,
  };

  // Routes configuration
  const routes = [
    { path: '/', page: 'onboarding' },
    { path: '/login', page: 'login' },
    { path: '/register', page: 'register' },
    { path: '/feed', page: 'feed' },
    { path: '/chats', page: 'chats' },
    { path: '/chat', page: 'chat' },
    { path: '/profile', page: 'profile' },
  ];

  // Router class
  class Router {
    constructor(routes, pages) {
      this.routes = routes;
      this.pages = pages;
      this.appContainer = document.getElementById('app');
      
      // Initialize routing
      this.init();
    }

    init() {
      // Handle initial page load
      this.loadPage(window.location.pathname);

      // Handle browser back/forward buttons
      window.addEventListener('popstate', () => {
        this.loadPage(window.location.pathname);
      });

      // Handle link clicks
      document.addEventListener('click', (e) => {
        const link = e.target.closest('[data-link]');
        if (link) {
          e.preventDefault();
          const path = link.getAttribute('data-link');
          this.navigate(path);
        }
      });
    }

    navigate(path) {
      window.history.pushState({}, '', path);
      this.loadPage(path);
    }

    loadPage(path) {
      // Find matching route
      const route = this.routes.find(r => r.path === path);
      
      if (route && this.pages[route.page]) {
        // Render page
        this.appContainer.innerHTML = this.pages[route.page]();
        
        // Initialize page-specific components
        this.initPageComponents(route.page);
        
        // Update active nav items
        this.updateActiveNav(route.page);
        
        // Update document title
        this.updateTitle(route.page);
        
        // Scroll to top
        window.scrollTo(0, 0);
      } else {
        // 404 - redirect to home
        this.navigate('/');
      }
    }

    initPageComponents(page) {
      // Initialize components based on page
      if (page === 'feed') {
        this.initFeedPage();
      } else if (page === 'chat') {
        this.initChatPage();
      }
    }

    initFeedPage() {
      const cardStack = document.querySelector('.card-stack');
      if (cardStack && window.SwipeCards) {
        const swipeCards = new window.SwipeCards(cardStack);
        
        // Attach button handlers
        const actionButtons = document.querySelectorAll('.action-circle');
        actionButtons.forEach((btn, index) => {
          btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (index === 0) {
              swipeCards.programmaticSwipe('left');
            } else if (index === 1) {
              swipeCards.programmaticSwipe('right');
            }
          });
        });
        
        // Attach compatibility badge handler
        const compatibilityBadge = document.querySelector('.compatibility-badge');
        if (compatibilityBadge && window.Modal) {
          compatibilityBadge.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            window.Modal.showExplanation('user123');
          });
        }
      }
    }

    initChatPage() {
      // Initialize chat functionality if needed
      const messageInput = document.querySelector('.message-input');
      const sendBtn = document.querySelector('.send-btn');
      
      if (messageInput && sendBtn) {
        sendBtn.addEventListener('click', () => {
          const message = messageInput.value.trim();
          if (message) {
            // Send message logic
            console.log('Sending message:', message);
            messageInput.value = '';
          }
        });
        
        messageInput.addEventListener('keypress', (e) => {
          if (e.key === 'Enter') {
            sendBtn.click();
          }
        });
      }
    }

    updateActiveNav(currentPage) {
      const navItems = document.querySelectorAll('[data-nav]');
      navItems.forEach(item => {
        if (item.getAttribute('data-nav') === currentPage) {
          item.classList.add('is-active');
        } else {
          item.classList.remove('is-active');
        }
      });
    }

    updateTitle(page) {
      const titles = {
        onboarding: 'Название — Онбординг',
        login: 'Название — Вход',
        register: 'Название — Регистрация',
        feed: 'Название — Подбор',
        chats: 'Название — Чаты',
        chat: 'Название — Диалог',
        profile: 'Название — Профиль',
      };
      document.title = titles[page] || 'Название';
    }
  }

  // Initialize router
  const router = new Router(routes, pages);
})();
