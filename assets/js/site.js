/* ============================================================
   ROUTER + UI
============================================================ */
(function(){
  const PAGES = ['home','instituto','nosotros','made','manifiesto','blog','contacto'];
  const TITLES = {
    home:       'LAIAX — Latin American Institute for AI (Artificial Intelligence) and eXponential organizations',
    instituto:  'LAIAX — Instituto · Para la era exponencial',
    nosotros:   'LAIAX — Nosotros · Equipo & origen institucional',
    made:       'LAIAX — MADE · Maestría en Alta Dirección de Empresas Exponenciales',
    manifiesto: 'LAIAX — Manifiesto · La velocidad es la ventaja',
    blog:       'LAIAX — Editorial · Análisis institucional',
    contacto:   'LAIAX — Contacto y admisión'
  };

  const PLATFORM_MODAL = {
    fondeo: {
      title: 'Curaduría y fondeo de startups',
      body: 'Plataforma en construcción.'
    },
    mentoria: {
      title: 'Mentoría y consultoría',
      body: 'Plataforma en construcción.'
    }
  };

  function closePlatformModal(){
    const m = document.getElementById('js-platform-modal');
    if(!m) return;
    m.classList.remove('is-open');
    m.setAttribute('aria-hidden', 'true');
    if(m._autoHide){ clearTimeout(m._autoHide); m._autoHide = null; }
  }

  function openPlatformModal(key){
    const cfg = PLATFORM_MODAL[key] || PLATFORM_MODAL.fondeo;
    const m = document.getElementById('js-platform-modal');
    const t = document.getElementById('js-platform-modal-title');
    const b = document.getElementById('js-platform-modal-body');
    if(!m || !t || !b) return;
    t.textContent = cfg.title;
    b.textContent = cfg.body;
    m.classList.add('is-open');
    m.setAttribute('aria-hidden', 'false');
    m.querySelector('.js-platform-modal-close--btn')?.focus();
    if(m._autoHide) clearTimeout(m._autoHide);
    m._autoHide = setTimeout(() => closePlatformModal(), 6000);
  }

  /* Reveal observer */
  const observer = ('IntersectionObserver' in window)
    ? new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if(entry.isIntersecting){
            entry.target.classList.add('is-in');
            observer.unobserve(entry.target);
          }
        });
      }, {threshold:0.1, rootMargin:'0px 0px -6% 0px'})
    : { observe(el){ el.classList.add('is-in'); }, unobserve(){} };

  /* Lazy background images: only load if file exists, otherwise keep gradient */
  const bgObserver = ('IntersectionObserver' in window)
    ? new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if(!entry.isIntersecting) return;
          const el = entry.target;
          const url = el.dataset.bg;
          if(!url) { bgObserver.unobserve(el); return; }
          const loadUrl = url.includes(' ') ? url.replace(/ /g, '%20') : url;
          const img = new Image();
          img.onload = () => {
            let pos = 'center';
            if(el.dataset.bgPos === 'top' || el.classList.contains('fs__bg--anchor-top')) pos = 'center top';
            else if(el.dataset.bgPos === 'bottom') pos = 'center bottom';
            else if(el.dataset.bgPos === 'faces') pos = 'center 28%';
            /* Full shorthand on layered hero/figure backgrounds so CSS gradients do not stack under the photo */
            const bgSh =
              el.classList.contains('fs__bg') ||
              el.classList.contains('cta-strip__figure') ||
              el.classList.contains('quote-band__bg') ||
              el.classList.contains('quote-band__split-visual') ||
              el.classList.contains('ed-cover__media') ||
              el.classList.contains('page-cta__photo-band') ||
              el.classList.contains('made-synthesis__dark-bg');
            if(bgSh){
              const fb =
                el.classList.contains('page-cta__photo-band') ? '#e8e8ea'
                : el.classList.contains('made-synthesis__dark-bg') ? '#121218'
                : '#060608';
              el.style.background = `url('${loadUrl}') ${pos} / cover no-repeat ${fb}`;
            }else{
              el.style.backgroundImage = `url('${loadUrl}')`;
              el.style.backgroundSize = 'cover';
              el.style.backgroundPosition = pos;
              el.style.backgroundRepeat = 'no-repeat';
            }
            el.removeAttribute('data-bg');
          };
          img.onerror = () => {
            el.removeAttribute('data-bg');
          };
          img.src = loadUrl;
          bgObserver.unobserve(el);
        });
      }, {threshold:0.05, rootMargin:'200px 0px'})
    : { observe(){}, unobserve(){} };

  function attachBg(){
    document.querySelectorAll('[data-bg]').forEach(el => bgObserver.observe(el));
  }

  function go(name, opts){
    closePlatformModal();
    var skipScroll = opts && opts.skipScroll;
    if(!PAGES.includes(name)) name = 'home';
    document.querySelectorAll('.page').forEach(p => {
      p.classList.toggle('is-active', p.dataset.page === name);
    });
    document.querySelectorAll('[data-route]').forEach(a => {
      a.classList.toggle('is-active', a.dataset.route === name);
    });
    document.title = TITLES[name] || TITLES.home;
    if(!skipScroll) window.scrollTo({top:0, behavior:'instant'});
    requestAnimationFrame(() => {
      document.querySelectorAll('.page.is-active .reveal').forEach(el => observer.observe(el));
      document.querySelectorAll('.page.is-active [data-bg]').forEach(el => bgObserver.observe(el));
      updateNavSurface();
    });
    document.getElementById('js-nav-links')?.classList.remove('is-open');
    document.getElementById('js-menu')?.setAttribute('aria-expanded', 'false');
  }

  function fromHash(){
    closePlatformModal();
    var h = (location.hash || '').replace('#','').trim().toLowerCase();
    if(!h){ go('home'); return; }
    if(h === 'aplicar'){
      go('contacto', {skipScroll:true});
      requestAnimationFrame(function(){
        document.getElementById('contacto-admision')?.scrollIntoView({behavior:'instant', block:'start'});
      });
      return;
    }
    if(!PAGES.includes(h)){
      var el = document.getElementById(h);
      if(el){
        var pageSection = el.closest('[data-page]');
        var pageName = pageSection && pageSection.dataset.page;
        if(pageName && PAGES.includes(pageName)){
          go(pageName, {skipScroll:true});
          requestAnimationFrame(function(){
            el.scrollIntoView({behavior:'instant', block:'start'});
          });
          return;
        }
      }
    }
    go(h);
  }

  /* Nav state: dark transparent over hero, white on scroll OR when first section is light */
  const nav = document.getElementById('js-nav');
  function updateNavSurface(){
    const active = document.querySelector('.page.is-active');
    const firstSection = active?.firstElementChild;
    const isHeroDark = firstSection?.classList.contains('fs--dark')
      || firstSection?.classList.contains('fs--video-hero');
    nav?.classList.toggle('is-light', !isHeroDark);
  }

  document.addEventListener('click', e => {
    if(e.target.closest('#js-apply-send')){
      e.preventDefault();
      const f = document.getElementById('js-apply-form');
      if(!f) return;
      const nombre = (f.nombre && f.nombre.value.trim()) || '—';
      const email = (f.email && f.email.value.trim()) || '—';
      const contexto = (f.contexto && f.contexto.value.trim()) || '—';
      const motivo = (f.motivo && f.motivo.value) || 'Consulta admisiones';
      const mensaje = (f.mensaje && f.mensaje.value.trim()) || '—';
      const subject = encodeURIComponent('[MADE · cohorte 01] ' + motivo);
      const body = encodeURIComponent(
        'Nombre: ' + nombre + '\nCorreo: ' + email + '\nEmpresa · ciudad: ' + contexto + '\nMotivo: ' + motivo + '\n\nMensaje:\n' + mensaje + '\n'
      );
      window.location.href = 'mailto:hola@laiax.org?subject=' + subject + '&body=' + body;
      return;
    }
  });
  window.addEventListener('scroll', () => {
    nav?.classList.toggle('is-scrolled', window.scrollY > 30);
  }, {passive:true});

  document.addEventListener('click', e => {
    if(e.target.closest('.js-platform-modal-close')){
      e.preventDefault();
      closePlatformModal();
      return;
    }
    const pm = e.target.closest('.js-platform-modal');
    if(pm){
      e.preventDefault();
      openPlatformModal(pm.dataset.platform || 'fondeo');
      return;
    }
    const a = e.target.closest('[data-route]');
    if(!a) return;
    const route = a.dataset.route;
    if(!PAGES.includes(route)) return;
    e.preventDefault();
    closePlatformModal();
    if('#'+route === location.hash){ go(route); return; }
    history.pushState({page:route}, '', '#'+route);
    go(route);
  });

  document.addEventListener('keydown', e => {
    if(e.key === 'Escape') closePlatformModal();
  });

  window.addEventListener('hashchange', fromHash);
  window.addEventListener('popstate',  fromHash);

  /* FAQ accordion */
  document.querySelectorAll('.faq__item').forEach(item => {
    item.addEventListener('click', () => item.classList.toggle('is-open'));
  });

  /* Lang toggle (placeholder) */
  document.querySelectorAll('.nav__lang button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.nav__lang button').forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
    });
  });

  /* Mobile nav menu */
  const menuBtn = document.getElementById('js-menu');
  const menu    = document.getElementById('js-nav-links');
  menuBtn?.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  document.addEventListener('DOMContentLoaded', () => {
    attachBg();
    document.querySelectorAll('.page.is-active .reveal').forEach(el => observer.observe(el));
    fromHash();
    initHeroVideo();
  });

  function initHeroVideo(){
    const video = document.getElementById('js-hero-video');
    const landing = document.getElementById('js-hero-landing');
    if(!video || !landing) return;

    let heroReadyOnce = false;
    function markHeroReady(){
      if(heroReadyOnce) return;
      heroReadyOnce = true;
      landing.classList.add('hero-ready');
    }

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(reduced){
      video.removeAttribute('autoplay');
      video.pause();
      markHeroReady();
      return;
    }

    function fadeIn(){
      video.classList.add('is-ready');
      markHeroReady();
    }

    video.addEventListener('loadeddata', fadeIn, { once: true });

    const play = () => {
      video.play().catch(() => {});
      fadeIn();
    };

    if(video.readyState >= 2){
      play();
    } else {
      video.addEventListener('canplay', () => play(), { once: true });
    }

    /* Si el vídeo no dispara eventos (bloqueo / red), igual mostrar animaciones de copy */
    window.setTimeout(markHeroReady, 2800);

    let lastScroll = -1;
    function onHeroScroll(){
      const rect = landing.getBoundingClientRect();
      const total = rect.height || window.innerHeight;
      const p = Math.min(1, Math.max(0, -rect.top / total));
      if(p === lastScroll) return;
      lastScroll = p;
      landing.style.setProperty('--hero-video-scale', (1 + p * 0.06).toFixed(3));
    }
    window.addEventListener('scroll', onHeroScroll, { passive: true });
    onHeroScroll();
  }
})();

