/* ============================================================
   ROUTER + UI
============================================================ */
(function(){
  const PAGES = ['home','instituto','nosotros','made','manifiesto','blog','aplicar','contacto'];
  const TITLES = {
    home:       'LAIAX — Latin American Institute for AI & eXponential Organizations',
    instituto:  'LAIAX — Instituto · Para la era exponencial',
    nosotros:   'LAIAX — Nosotros · Equipo & origen institucional',
    made:       'LAIAX — MADE · Maestría en Alta Dirección',
    manifiesto: 'LAIAX — Manifiesto · La velocidad es la ventaja',
    blog:       'LAIAX — Editorial · Análisis institucional',
    aplicar:    'LAIAX — Aplicar · Cohorte 01 abierta',
    contacto:   'LAIAX — Contacto · Vías institucionales'
  };

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
          const img = new Image();
          img.onload = () => {
            el.style.backgroundImage = `url('${url}')`;
            el.removeAttribute('data-bg');
          };
          img.onerror = () => {
            el.removeAttribute('data-bg');
          };
          img.src = url;
          bgObserver.unobserve(el);
        });
      }, {threshold:0.05, rootMargin:'200px 0px'})
    : { observe(){}, unobserve(){} };

  function attachBg(){
    document.querySelectorAll('[data-bg]').forEach(el => bgObserver.observe(el));
  }

  function go(name, opts){
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
    var h = (location.hash || '').replace('#','').trim().toLowerCase();
    if(!h){ go('home'); return; }
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
    if(e.target.closest('#js-contact-mailto')){
      e.preventDefault();
      const mail = document.getElementById('js-contact-dest')?.value || 'hola@laiax.org';
      const subEl = document.getElementById('js-contact-subject');
      const bodyEl = document.getElementById('js-contact-body');
      const sub = (subEl && subEl.value.trim()) || 'Consulta LAIAX';
      const bodyTxt = (bodyEl && bodyEl.value.trim()) || '';
      window.location.href = 'mailto:' + mail +
        '?subject=' + encodeURIComponent(sub) +
        '&body=' + encodeURIComponent(bodyTxt);
    }
  });
  window.addEventListener('scroll', () => {
    nav?.classList.toggle('is-scrolled', window.scrollY > 30);
  }, {passive:true});

  document.addEventListener('click', e => {
    const a = e.target.closest('[data-route]');
    if(!a) return;
    const route = a.dataset.route;
    if(!PAGES.includes(route)) return;
    e.preventDefault();
    if('#'+route === location.hash){ go(route); return; }
    history.pushState({page:route}, '', '#'+route);
    go(route);
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

