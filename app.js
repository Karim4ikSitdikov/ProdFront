// SPA Router and Page Templates
(() => {
  // Page Templates
  const pages = {
    onboarding: () => `
      <div class="app">
        <header class="topbar">
          <a href="#" class="topbar-brand" data-link="/">
            <div class="logo-box">Т</div>
            <div class="app-title">Мэтч</div>
          </a>
        </header>

        <main class="screen">
          <section class="hero">
            <div class="hero-text">
              <div class="hero-left">Просто сделай</div>
              <div class="hero-right">свайп вправо</div>
            </div>
            
            <div class="hero-description">
              Знакомства на основе реального образа жизни, транзакций <br/>и поведенческих сигналов. Без спама и низкокачественных мэтчей.
            </div>

            <div class="hero-features">
              <div class="hero-feature-item">
                <div class="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg></div>
                <div class="feature-text-content">
                  <div class="feature-text">Умный мэтчинг</div>
                  <div class="feature-desc">Анализ поведенческих сигналов и реальных интересов подберёт пару с высокой вероятностью диалога.</div>
                </div>
              </div>
              <div class="hero-feature-item">
                <div class="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></div>
                <div class="feature-text-content">
                  <div class="feature-text">Без абьюза</div>
                  <div class="feature-desc">Умная проверка профилей исключает токсичных пользователей, спам и фейковые аккаунты.</div>
                </div>
              </div>
              <div class="hero-feature-item">
                <div class="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg></div>
                <div class="feature-text-content">
                  <div class="feature-text">Понятная совместимость</div>
                  <div class="feature-desc">Прозрачное объяснение от нейросети, почему именно этот человек вам подходит.</div>
                </div>
              </div>
            </div>

            <div class="hero-actions">
              <button class="btn-primary wide pulse-animation" type="button" data-link="/register">
                Создать профиль
              </button>
              <a class="link-muted" href="#" data-link="/login">Уже есть аккаунт? Войти</a>
            </div>
          </section>
        </main>
      </div>
    `,

    login: () => `
      <div class="app">
        <header class="topbar">
          <a href="#" class="topbar-brand" data-link="/">
            <div class="logo-box">Т</div>
            <div class="app-title">Мэтч</div>
          </a>
        </header>

        <main class="screen auth-screen">
          <div class="auth-layout auth-layout-reversed">
            
            <section class="auth-card">
              <div class="auth-card-head">
                <div>
                  <div class="auth-title">Вход</div>
                  <div class="auth-subtitle">Войдите в свой профиль</div>
                </div>
              </div>

              <form class="form auth-form">
                <div>
                  <label for="login-email">Введите вашу почту</label>
                  <input id="login-email" class="input-field" type="email" placeholder="email" />
                </div>
                <div>
                  <label for="login-pass">Введите пароль</label>
                  <input id="login-pass" class="input-field" type="password" placeholder="password" />
                </div>
                <a class="link-muted" style="margin-top:-6px;display:inline-block;font-size:14px;" href="#">Забыли пароль?</a>
                <div class="form-actions auth-actions mt-3" style="margin-top: 24px;">
                  <button class="btn-primary wide pulse-animation" type="button" data-link="/feed">
                    Войти
                  </button>
                  <div class="auth-alt mt-3" style="margin-top: 16px; text-align: center;">
                    Нет аккаунта? <a href="#" data-link="/register">Создать профиль</a>
                  </div>
                </div>
              </form>
            </section>

            <section class="auth-hero auth-hero-login">
              <div class="auth-badge">С возвращением!</div>
              <h1>Добро пожаловать</h1>
              <p>
                Рады видеть вас снова. Продолжите поиск идеального партнера с помощью поведенческого мэтчинга.
              </p>
            </section>
          </div>
        </main>
      </div>
    `,

        register: () => `
      <div class="app">
        <header class="topbar">
          <a href="#" class="topbar-brand" data-link="/">
            <div class="logo-box">Т</div>
            <div class="app-title">Мэтч</div>
          </a>
        </header>

        <main class="screen auth-screen">
          <div class="auth-layout">
            <section class="auth-hero">
              <div class="auth-badge" style="background: var(--primary); color: #000;">T-style matching</div>
              <h1>Регистрация</h1>
              <p>Создайте профиль и получите персональную выдачу по безопасным поведенческим сигналам. Приватные данные не раскрываются.</p>
              
              <div class="auth-features" style="margin-top: 32px; display: flex; flex-direction: column; gap: 20px;">
                <div style="font-weight: 500; font-size: 16px; display: flex; align-items: center; gap: 12px;">
                  <div style="width: 24px; display: flex; justify-content: center; color: var(--text);">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:20px;height:20px;"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
                  </div>
                  Персональные рекомендации
                </div>
                <div style="font-weight: 500; font-size: 16px; display: flex; align-items: center; gap: 12px;">
                  <div style="width: 24px; display: flex; justify-content: center; color: var(--text);">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:20px;height:20px;"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                  </div>
                  Защита от абьюза
                </div>
                <div style="font-weight: 500; font-size: 16px; display: flex; align-items: center; gap: 12px;">
                  <div style="width: 24px; display: flex; justify-content: center; color: var(--text);">
                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:20px;height:20px;"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                  </div>
                  Прозрачные объяснения
                </div>
              </div>
            </section>

            <section class="auth-card" style="padding: 0; overflow: hidden; position: relative;">
              <div id="register-slider" style="display: flex; width: 200%; transition: transform 0.4s ease;">
                
                <!-- STEP 1 -->
                <div style="width: 50%; padding: 22px 22px 18px; box-sizing: border-box; display: flex; flex-direction: column;">
                  <div class="auth-card-head" style="margin-bottom: 24px; display: flex; justify-content: space-between; align-items: flex-start;">
                    <div>
                      <div class="auth-title">Создать аккаунт</div>
                      <div class="auth-subtitle">Заполните минимальный профиль</div>
                    </div>
                    <div style="background: var(--bg-secondary); padding: 4px 12px; border-radius: 12px; font-size: 13px; font-weight: 600; display: flex; align-items: center; margin-top: 4px;">1/2</div>
                  </div>

                  <form class="form auth-form" style="display: flex; flex-direction: column; flex: 1;">
                    <div style="margin-bottom: 12px;">
                      <label for="reg-email" style="font-size: 14px; font-weight: 600;">Введите вашу почту</label>
                      <input id="reg-email" class="input-field" type="email" placeholder="email" />
                    </div>
                    <div style="margin-bottom: 12px;">
                      <label for="reg-pass" style="font-size: 14px; font-weight: 600;">Придумайте пароль</label>
                      <input id="reg-pass" class="input-field" type="password" placeholder="password" />
                    </div>
                    <div style="margin-bottom: 12px;">
                      <label for="reg-pass-confirm" style="font-size: 14px; font-weight: 600;">Подтвердите пароль</label>
                      <input id="reg-pass-confirm" class="input-field" type="password" placeholder="password confirm" />
                    </div>
                    
                    <div class="form-actions auth-actions mt-3" style="margin-top: auto; padding-top: 16px;">
                      <button class="btn-primary wide pulse-animation" style="margin-bottom: 16px;" type="button" onclick="document.getElementById('register-slider').style.transform = 'translateX(-50%)'">
                        Создать профиль
                      </button>
                      <div class="auth-alt" style="text-align: center;">
                        Уже есть аккаунт? <a href="#" data-link="/login">Войти</a>
                      </div>
                    </div>
                  </form>
                </div>

                <!-- STEP 2 -->
                <div style="width: 50%; padding: 22px 22px 18px; box-sizing: border-box; display: flex; flex-direction: column;">
                  <div class="auth-card-head" style="margin-bottom: 24px; display: flex; justify-content: space-between; align-items: flex-start;">
                    <div>
                      <div class="auth-title">О себе</div>
                      <div class="auth-subtitle">Расскажите подробнее</div>
                    </div>
                    <div style="background: var(--bg-secondary); padding: 4px 12px; border-radius: 12px; font-size: 13px; font-weight: 600; display: flex; align-items: center; margin-top: 4px;">2/2</div>
                  </div>

                  <form class="form auth-form" style="display: flex; flex-direction: column; flex: 1;">
                    <div class="photo-upload-placeholder" style="margin-bottom: 16px; text-align: center; border: 2px dashed var(--border); padding: 14px; border-radius: 12px; cursor: pointer; transition: background 0.2s ease;">
                      <div style="margin-bottom: 6px; color: var(--text);">
                        <svg style="width:32px;height:32px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                          <circle cx="8.5" cy="8.5" r="1.5"></circle>
                          <polyline points="21 15 16 10 5 21"></polyline>
                        </svg>
                      </div>
                      <div style="font-size: 13px; color: var(--text); font-weight: 500;">Загрузить фото</div>
                      <input type="file" style="display: none;" accept="image/*" />
                    </div>

                    <div style="margin-bottom: 12px;">
                      <label for="reg-name" style="font-size: 14px; font-weight: 600;">Ваше имя</label>
                      <input id="reg-name" class="input-field" type="text" placeholder="Алексей" style="padding: 10px;" />
                    </div>

                    <div style="margin-bottom: 12px;">
                      <label for="reg-desc" style="font-size: 14px; font-weight: 600;">Пару слов о вас</label>
                      <textarea id="reg-desc" class="input-field" style="resize: none; min-height: 54px; padding: 10px;" placeholder="Чем увлекаетесь?"></textarea>
                    </div>

                    <div class="form-actions auth-actions" style="margin-top: auto;">
                      <button class="btn-primary wide pulse-animation" style="margin-bottom: 16px;" type="button" data-link="/feed">
                        Завершить регистрацию
                      </button>
                      <div class="auth-alt" style="text-align: center;">
                        <a href="#" onclick="document.getElementById('register-slider').style.transform = 'translateX(0)'; return false;">Вернуться назад</a>
                      </div>
                    </div>
                  </form>
                </div>

              </div>
            </section>
          </div>
        </main>
      </div>
    `,

    feed: () => `
      <div class="app">
        <header class="topbar">
          <a href="#" class="topbar-brand" data-link="/">
            <div class="logo-box">Т</div>
            <div class="app-title">Мэтч</div>
          </a>
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
          <a href="#" class="topbar-brand" data-link="/">
            <div class="logo-box">Т</div>
            <div class="app-title">Мэтч</div>
          </a>
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
          <a href="#" class="topbar-brand" data-link="/">
            <div class="logo-box">Т</div>
            <div class="app-title">Мэтч</div>
          </a>
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
          <a href="#" class="topbar-brand" data-link="/">
            <div class="logo-box">Т</div>
            <div class="app-title">Мэтч</div>
          </a>
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
  const routes = [{ path: '/', page: 'onboarding' }, { path: '/login', page: 'login' }, { path: '/register', page: 'register' }, { path: '/feed', page: 'feed' }, { path: '/chats', page: 'chats' }, { path: '/chat', page: 'chat' }, { path: '/profile', page: 'profile' }];

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
      // Handle initial page load, checking both pathname (for legacy support or direct root) and hash
      let currentPath = window.location.hash.replace('#', '');
      if (!currentPath || currentPath === '') {
          currentPath = window.location.pathname === '/' ? '/' : window.location.pathname;
          // If they land on a non-root path that isn't found (which won't happen here due to 404, 
          // but just in case), they'll be redirected to / by loadPage.
      }
      
      // Auto-correct to hash based URL if we landed on root without hash
      if (currentPath === '/' && !window.location.hash) {
          window.history.replaceState(null, '', '#/');
      }

      this.loadPage(currentPath);

      // Handle browser back/forward buttons
      window.addEventListener('hashchange', () => {
        this.loadPage(window.location.hash.replace('#', '') || '/');
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
      window.location.hash = path;
    }

    loadPage(path) {
      const route = this.routes.find(r => r.path === path);
      if (route && this.pages[route.page]) {
        const updateDOM = () => {
          this.appContainer.innerHTML = this.pages[route.page]();
          this.initPageComponents(route.page);
          this.updateActiveNav(route.page);
          this.updateTitle(route.page);
          window.scrollTo(0, 0);
        };
        if (document.startViewTransition) {
          document.startViewTransition(updateDOM);
        } else {
          updateDOM();
        }
      } else {
        window.location.hash = "/";
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
        
        // Attach button handlers using event delegation
        cardStack.addEventListener('click', (e) => {
          const btn = e.target.closest('.action-circle');
          if (!btn) return;
          e.preventDefault();
          e.stopPropagation();
          
          // Check what type of button it is based on content
          if (btn.innerHTML.includes('&times;') || btn.textContent.includes('×')) {
            swipeCards.programmaticSwipe('left');
          } else {
            swipeCards.programmaticSwipe('right');
          }
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

  const fetchWithAuth = async (url, options = {}) => {
    try {
      const response = await fetch(`http://localhost:3000${url}`, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...(options.headers || {})
        }
      });
      return await response.json();
    } catch (e) {
      console.error('Fetch error:', e);
      return null;
    }
  };

  // Initialize router
  const router = new Router(routes, pages);
})();
