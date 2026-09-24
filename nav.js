(function () {

  const style = document.createElement('style');
  style.textContent = `
    .nav{
      position:sticky;top:0;z-index:200;
      background:#fff;
      border-bottom:1px solid rgba(21,32,61,.1);
    }
    .nav-inner{
      max-width:1480px;margin:0 auto;
      padding:18px 32px;
      display:flex;align-items:center;gap:44px;
    }
    .nav .logo{
      display:inline-flex;align-items:center;
      text-decoration:none;
      transition:opacity .2s;
    }
    .nav .logo img{display:block;height:38px;width:auto}
    .nav .logo:hover{opacity:.75}
    .nav-links{
      display:flex;align-items:center;gap:6px;
      font-size:16px;font-weight:700;
    }
    .nav-links a{
      position:relative;padding:8px 14px;border-radius:8px;
      color:#4A5878;
      transition:background .2s,color .2s;
      text-decoration:none;
    }
    .nav-links a:hover,
    .nav-links a.active{background:#FAF5EA;color:#15203D}

    /* ── DROPDOWN CURSOS (escriptori) ── */
    .nav-dropdown-wrap{position:relative}
    .nav-dropdown-wrap > a{display:flex;align-items:center;gap:6px}
    .nav-chevron{
      display:inline-block;width:14px;height:14px;flex-shrink:0;
      transition:transform .25s ease;
      color:#4A5878;
    }
    .nav-dropdown-wrap.open .nav-chevron{transform:rotate(180deg);color:#2547D9}
    .nav-dropdown{
      position:absolute;top:calc(100% + 6px);left:50%;transform:translateX(-50%) translateY(-4px);
      background:#fff;
      border-radius:18px;
      box-shadow:0 8px 40px rgba(21,32,61,.13), 0 1px 4px rgba(21,32,61,.07);
      border:1px solid rgba(21,32,61,.08);
      padding:10px;
      min-width:240px;
      opacity:0;pointer-events:none;
      transition:opacity .18s ease, transform .18s ease;
      z-index:300;
    }
    .nav-dropdown::before{
      content:'';position:absolute;
      top:-14px;left:0;right:0;height:14px;
    }
    .nav-dropdown-wrap.open .nav-dropdown,
    .nav-dropdown-wrap:focus-within .nav-dropdown{
      opacity:1;pointer-events:auto;
      transform:translateX(-50%) translateY(0);
    }
    .nav-dropdown-wrap:focus-within .nav-chevron{transform:rotate(180deg);color:#2547D9}
    .nav-dropdown a{
      display:flex;align-items:center;gap:11px;
      padding:10px 14px;border-radius:10px;
      font-size:14px;font-weight:700;
      color:#4A5878;text-decoration:none;
      transition:background .15s, color .15s;
      white-space:nowrap;
    }
    .nav-dropdown a:hover{background:#FAF5EA;color:#15203D}
    .nav-dropdown a.active{background:#FAF5EA;color:#15203D}
    .nav-dd-dot{width:9px;height:9px;border-radius:50%;flex-shrink:0}
    .nav-dd-sep{height:1px;background:rgba(21,32,61,.08);margin:6px 4px}

    .nav-cta{display:flex;gap:12px;align-items:center;margin-left:auto}
    .nav .btn-lang{
      font-size:12px;font-weight:700;letter-spacing:.08em;
      color:#4A5878;padding:8px 14px;border-radius:8px;
      border:1px solid rgba(21,32,61,.22);
      background:none;cursor:pointer;font-family:inherit;
      transition:all .2s;
    }
    .nav .btn-lang:hover{border-color:#15203D;color:#15203D}
    .nav .btn-nivel,
    .nav-mobile-panel .btn-nivel{
      display:inline-flex;align-items:center;gap:10px;
      background:#FFB800;color:#15203D;
      font-family:"Nunito",ui-sans-serif,system-ui,sans-serif;
      font-size:14.5px;font-weight:600;
      padding:12px 22px;border-radius:100px;
      border:none;
      text-decoration:none;
      transition:background .15s;
    }
    .nav .btn-nivel:hover,
    .nav-mobile-panel .btn-nivel:hover{background:#FFD000}
    .nav .btn-primary,
    .nav-mobile-panel .btn-primary{
      display:inline-flex;align-items:center;gap:10px;
      background:#2547D9;color:#fff;
      font-family:"Nunito",ui-sans-serif,system-ui,sans-serif;
      font-size:14.5px;font-weight:600;
      padding:12px 22px;border-radius:100px;
      border:none;
      text-decoration:none;
      white-space:nowrap;
      transition:background .15s;
    }
    .nav .btn-primary:hover,
    .nav-mobile-panel .btn-primary:hover{background:#1B36AD}
    .nav .btn-primary svg,
    .nav-mobile-panel .btn-primary svg{width:16px;height:16px;flex-shrink:0;transition:transform .2s}
    .nav .btn-primary:hover svg,
    .nav-mobile-panel .btn-primary:hover svg{transform:translateX(3px)}

    /* ── BOTÓ HAMBURGUESA (només mòbil) ── */
    .nav-burger{
      display:none;
      width:40px;height:40px;border-radius:10px;
      border:1px solid rgba(21,32,61,.18);
      background:#fff;
      align-items:center;justify-content:center;
      cursor:pointer;flex-shrink:0;padding:0;
    }
    .nav-burger svg{width:20px;height:20px;color:#15203D}

    /* ── PANEL MÒBIL ── */
    .nav-mobile-backdrop{
      display:none;position:fixed;inset:0;
      background:rgba(21,32,61,.4);z-index:399;
      opacity:0;transition:opacity .25s ease;
    }
    .nav-mobile-backdrop.open{opacity:1}
    .nav-mobile-panel{
      display:none;position:fixed;top:0;right:0;bottom:0;
      width:min(320px,86vw);background:#fff;
      box-shadow:-16px 0 48px rgba(21,32,61,.2);
      z-index:400;padding:20px 22px 32px;overflow-y:auto;
      transform:translateX(100%);transition:transform .3s ease;
    }
    .nav-mobile-panel.open{transform:translateX(0)}
    .nav-mobile-close{
      width:36px;height:36px;border-radius:50%;
      border:1px solid rgba(21,32,61,.18);background:#fff;
      display:flex;align-items:center;justify-content:center;
      margin-left:auto;margin-bottom:14px;cursor:pointer;
    }
    .nav-mobile-panel a{
      display:block;padding:12px 4px;
      font-size:16px;font-weight:700;color:#15203D;
      text-decoration:none;border-bottom:1px solid rgba(21,32,61,.08);
    }
    .nav-mobile-heading{
      font-size:12px;font-weight:700;text-transform:uppercase;
      letter-spacing:.06em;color:#4A5878;
      padding:16px 4px 4px;
    }
    .nav-mobile-sub{padding-left:4px}
    .nav-mobile-sub a{
      font-size:14.5px;font-weight:600;color:#4A5878;
      display:flex;align-items:center;gap:10px;
      border-bottom:none;padding:9px 4px;
    }
    .nav-mobile-cta{margin-top:20px;display:flex;flex-direction:column;gap:10px}
    .nav-mobile-cta a{border-bottom:none;padding:0}
    .nav-mobile-cta .btn-primary,
    .nav-mobile-cta .btn-nivel{
      display:flex;justify-content:center;width:100%;box-sizing:border-box;
    }

    @media(max-width:960px){
      .nav-links{display:none}
      .nav > .nav-inner > .nav-cta > .btn-nivel{display:none}
      .nav-inner{padding:14px 22px}
      .nav-burger{display:flex}
    }
    @media(max-width:400px){
      .nav .btn-primary{padding:11px 16px;font-size:13.5px}
    }

    /* ── FOOTER (compartit a totes les pagines) ── */
    footer{
      background:#15203D;padding:72px 32px 32px;
      color:#FAF5EA;
      position:relative;overflow:hidden;
    }
    .footer-inner{max-width:1480px;margin:0 auto;position:relative;z-index:1}
    .footer-cols{display:grid;grid-template-columns:repeat(4,1fr);gap:40px;margin-bottom:48px}
    .footer-huge{
      font-family:"Bricolage Grotesque",ui-sans-serif,system-ui,sans-serif;
      font-size:clamp(48px,9vw,120px);
      font-weight:800;letter-spacing:-0.05em;line-height:1;
      color:rgba(255,246,228,.07);
      margin-bottom:40px;user-select:none;
    }
    .footer-col h6{
      font-family:"Bricolage Grotesque",ui-sans-serif,system-ui,sans-serif;font-size:14px;font-weight:700;
      letter-spacing:.04em;text-transform:uppercase;
      color:#FAF5EA;margin-bottom:16px;
    }
    .footer-col p{font-size:14.5px;color:rgba(255,246,228,.7);line-height:1.55}
    .footer-col ul{list-style:none}
    .footer-col ul li{margin-bottom:9px;font-size:14.5px;font-weight:600}
    .footer-col ul li a{color:rgba(255,246,228,.75);text-decoration:none;transition:color .2s}
    .footer-col ul li a:hover{color:#FFB800}
    .footer-col ul li:not(:has(a)){color:rgba(255,246,228,.5)}
    .footer-socials{display:flex;gap:10px;margin-top:14px}
    .footer-socials a{
      width:38px;height:38px;border-radius:10px;
      background:rgba(255,255,255,.06);
      display:flex;align-items:center;justify-content:center;
      transition:background .2s,transform .2s;
    }
    .footer-socials a:hover{background:#FFB800;transform:translateY(-2px)}
    .footer-bottom{
      border-top:1px solid rgba(255,246,228,.1);
      padding-top:24px;
      display:flex;justify-content:space-between;align-items:center;
      font-size:13px;color:rgba(255,246,228,.6);font-weight:600;
      flex-wrap:wrap;gap:12px;
    }
    .footer-proto{
      margin-top:18px;text-align:center;font-size:11px;
      color:rgba(255,246,228,.35);font-weight:600;letter-spacing:.05em;
    }
    .footer-proto a{color:rgba(255,246,228,.5);text-decoration:underline}
    @media(max-width:960px){
      .footer-cols{grid-template-columns:1fr 1fr;gap:28px}
    }
    @media(max-width:540px){
      .footer-cols{grid-template-columns:1fr}
    }
  `;
  document.head.appendChild(style);

  const page = location.pathname.split('/').pop() || 'index.html';
  const home = page === 'index.html' || page === '';
  const contactHref = home ? '#contacte' : 'index.html#contacte';
  const nivellHref = home ? '#contacte-nivell' : 'index.html#contacte-nivell';

  const cursosPages = ['cursos.html','kids-planet.html','kids.html','teens.html','cambridge.html','adults.html','frances.html','business.html','particular.html'];
  const cursosActive = cursosPages.includes(page);

  const cursosDropdown = `
    <div class="nav-dropdown-wrap">
      <a href="cursos.html"${cursosActive ? ' class="active"' : ''} aria-haspopup="true" aria-expanded="false">
        Cursos
        <svg class="nav-chevron" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 5l4 4 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
      <div class="nav-dropdown">
        <a href="kids-planet.html"${page==='kids-planet.html'?' class="active"':''}>
          <span class="nav-dd-dot" style="background:#EC1E8C"></span>Kids Planet <span style="font-size:11px;opacity:.55;font-weight:600">3–6 anys</span>
        </a>
        <a href="kids.html"${page==='kids.html'?' class="active"':''}>
          <span class="nav-dd-dot" style="background:#FF6B35"></span>Kids <span style="font-size:11px;opacity:.55;font-weight:600">7–12 anys</span>
        </a>
        <a href="teens.html"${page==='teens.html'?' class="active"':''}>
          <span class="nav-dd-dot" style="background:#26A69A"></span>Teens <span style="font-size:11px;opacity:.55;font-weight:600">13–17 anys</span>
        </a>
        <a href="cambridge.html"${page==='cambridge.html'?' class="active"':''}>
          <span class="nav-dd-dot" style="background:#E1000F"></span>Cambridge &amp; IELTS
        </a>
        <a href="adults.html"${page==='adults.html'?' class="active"':''}>
          <span class="nav-dd-dot" style="background:#1B5E3A"></span>Adults <span style="font-size:11px;opacity:.55;font-weight:600">18+</span>
        </a>
        <div class="nav-dd-sep"></div>
        <a href="frances.html"${page==='frances.html'?' class="active"':''}>
          <span class="nav-dd-dot" style="background:#FFB800"></span>L'École de Français
        </a>
        <a href="business.html"${page==='business.html'?' class="active"':''}>
          <span class="nav-dd-dot" style="background:#9B72CF"></span>BLA Business
        </a>
        <a href="particular.html"${page==='particular.html'?' class="active"':''}>
          <span class="nav-dd-dot" style="background:#036896"></span>Classes Particulars
        </a>
      </div>
    </div>
  `;

  const nav = document.createElement('nav');
  nav.className = 'nav';
  nav.innerHTML = `
    <div class="nav-inner">
      <a href="index.html" class="logo" aria-label="Sprint Idiomes">
        <img src="logo-sprint-idiomes.png" alt="Sprint Idiomes" width="112" height="57">
      </a>
      <div class="nav-links">
        <a href="index.html"${page==='index.html'||page===''?' class="active"':''}>Home</a>
        <a href="qui-som.html"${page==='qui-som.html'?' class="active"':''}>Qui som</a>
${cursosDropdown}
      </div>
      <div class="nav-cta">
        <button class="nav-burger" type="button" aria-label="Obrir menú" aria-expanded="false">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
        </button>
        <a href="${nivellHref}" class="btn-nivel">Descobreix el teu nivell</a>
        <a href="${contactHref}" class="btn-primary">
          Prova gratuïta
          <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  `;

  document.body.insertBefore(nav, document.body.firstChild);

  /* ── BARRA DE CURSOS + SUBNAV (menu generic, compartit a totes les pagines) ──
     Es munta ara mateix (no en DOMContentLoaded) perque ha d'anar just despres
     del <nav>, que es on ja hi es en aquest punt de l'execucio. Els scripts
     locals de cada pagina (scroll-spy de .subnav-link) s'executen mes tard,
     al final del body, aixi que ja trobaran aquests elements al DOM. */
  const COURSES = [
    { href:'kids-planet.html', dot:'#EC1E8C', label:'Kids Planet' },
    { href:'kids.html',        dot:'#FF6B35', label:'Kids 7–12' },
    { href:'teens.html',       dot:'#26A69A', label:'Teens' },
    { href:'cambridge.html',   dot:'#E1000F', label:'Cambridge' },
    { href:'adults.html',      dot:'#1B5E3A', label:'Adults' },
    { href:'frances.html',     dot:'#FFB800', label:"L'École de Français" },
    { href:'business.html',    dot:'#9B72CF', label:'Business' },
    { href:'particular.html',  dot:'#036896', label:'Particulars' },
  ];

  const SUBNAV = {
    'kids-planet.html': [
      { href:'#rainbow', text:'Aula Rainbow' },
      { href:'#nivells', text:'2 grups' },
      { href:'#horaris', text:'Horaris' },
    ],
    'kids.html': [
      { href:'#kids-712', text:'Els nivells' },
      { href:'#horaris', text:'Horaris' },
    ],
    'teens.html': [
      { href:'#nivells', text:'Els nivells' },
      { href:'#horaris', text:'Horaris' },
    ],
    'cambridge.html': [
      { href:'#titols', text:'Els títols' },
      { href:'#perque', text:'Per què Sprint?' },
      { href:'#examens', text:'Examens 2026' },
      { href:'#horaris', text:'Horaris' },
    ],
    'adults.html': [
      { href:'#nivells', text:'Els nivells' },
      { href:'#modalitats', text:'Com fer-ho' },
      { href:'#horaris', text:'Horaris' },
    ],
    'frances.html': [
      { href:'#nivells', text:'Els nivells' },
      { href:'#delf', text:'DELF &amp; DALF' },
      { href:'#professors', text:'Professors nadius' },
      { href:'#horaris', text:'Horaris' },
    ],
    'business.html': [
      { href:'#bla', text:'BLA Business' },
      { href:'#programes', text:'Programes' },
      { href:'#fundae', text:'FUNDAE' },
      { href:'#sectors', text:'Sectors' },
      { href:'#horaris', text:'Horaris' },
    ],
    'particular.html': [
      { href:'#perque-particular', text:'Per què nosaltres' },
      { href:'#com-funciona', text:'Com funciona' },
    ],
  };

  let courseNavEl = null;
  if (COURSES.some(function(c){ return c.href === page; })) {
    courseNavEl = document.createElement('div');
    courseNavEl.className = 'course-nav';
    courseNavEl.innerHTML = `
      <div class="course-nav-inner">
        ${COURSES.map(function(c){
          return `<a class="course-nav-link${c.href===page?' active':''}" href="${c.href}"><span class="course-nav-dot" style="background:${c.dot}"></span>${c.label}</a>`;
        }).join('\n        ')}
      </div>
    `;
  }

  let subnavEl = null;
  if (SUBNAV[page]) {
    subnavEl = document.createElement('div');
    subnavEl.className = 'subnav';
    subnavEl.innerHTML = `
      <div class="subnav-inner">
        ${SUBNAV[page].map(function(t, i){
          return `<a class="subnav-link${i===0?' active':''}" href="${t.href}">${t.text}</a>`;
        }).join('\n        ')}
      </div>
    `;
  }

  nav.after.apply(nav, [courseNavEl, subnavEl].filter(Boolean));

  /* ── DROPDOWN escriptori amb delay per no tancar-se al instant ── */
  const wrap = nav.querySelector('.nav-dropdown-wrap');
  if (wrap) {
    const trigger = wrap.querySelector(':scope > a');
    let closeTimer;
    function openDropdown() {
      clearTimeout(closeTimer);
      wrap.classList.add('open');
      trigger.setAttribute('aria-expanded', 'true');
    }
    function closeDropdown() {
      wrap.classList.remove('open');
      trigger.setAttribute('aria-expanded', 'false');
    }
    wrap.addEventListener('mouseenter', openDropdown);
    wrap.addEventListener('mouseleave', function () {
      closeTimer = setTimeout(closeDropdown, 200);
    });
    wrap.addEventListener('focusin', openDropdown);
    wrap.addEventListener('focusout', function (e) {
      if (!wrap.contains(e.relatedTarget)) closeDropdown();
    });
    wrap.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeDropdown();
        trigger.focus();
      }
    });
  }

  /* ── MENÚ MÒBIL ── */
  const backdrop = document.createElement('div');
  backdrop.className = 'nav-mobile-backdrop';

  const mobilePanel = document.createElement('div');
  mobilePanel.className = 'nav-mobile-panel';
  mobilePanel.innerHTML = `
    <div class="nav-mobile-close" role="button" aria-label="Tancar menú">
      <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 3l10 10M13 3L3 13" stroke="#15203D" stroke-width="1.8" stroke-linecap="round"/></svg>
    </div>
    <a href="index.html"${page==='index.html'||page===''?' class="active"':''}>Home</a>
    <a href="qui-som.html"${page==='qui-som.html'?' class="active"':''}>Qui som</a>
    <div class="nav-mobile-heading">Cursos</div>
    <div class="nav-mobile-sub">
      <a href="kids-planet.html"><span class="nav-dd-dot" style="background:#EC1E8C"></span>Kids Planet · 3–6 anys</a>
      <a href="kids.html"><span class="nav-dd-dot" style="background:#FF6B35"></span>Kids · 7–12 anys</a>
      <a href="teens.html"><span class="nav-dd-dot" style="background:#26A69A"></span>Teens · 13–17 anys</a>
      <a href="cambridge.html"><span class="nav-dd-dot" style="background:#E1000F"></span>Cambridge &amp; IELTS</a>
      <a href="adults.html"><span class="nav-dd-dot" style="background:#1B5E3A"></span>Adults · 18+</a>
      <a href="frances.html"><span class="nav-dd-dot" style="background:#FFB800"></span>L'École de Français</a>
      <a href="business.html"><span class="nav-dd-dot" style="background:#9B72CF"></span>BLA Business</a>
      <a href="particular.html"><span class="nav-dd-dot" style="background:#036896"></span>Classes Particulars</a>
    </div>
    <a href="${contactHref}">Contacte</a>
    <div class="nav-mobile-cta">
      <a href="${nivellHref}" class="btn-nivel">Descobreix el teu nivell</a>
      <a href="${contactHref}" class="btn-primary">Prova gratuïta</a>
    </div>
  `;

  document.body.appendChild(backdrop);
  document.body.appendChild(mobilePanel);

  const burgerBtn = nav.querySelector('.nav-burger');

  function openMobileMenu(){
    backdrop.style.display = 'block';
    mobilePanel.style.display = 'block';
    requestAnimationFrame(function(){
      backdrop.classList.add('open');
      mobilePanel.classList.add('open');
    });
    burgerBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeMobileMenu(){
    backdrop.classList.remove('open');
    mobilePanel.classList.remove('open');
    burgerBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    setTimeout(function(){
      backdrop.style.display = 'none';
      mobilePanel.style.display = 'none';
    }, 300);
  }

  burgerBtn.addEventListener('click', openMobileMenu);
  mobilePanel.querySelector('.nav-mobile-close').addEventListener('click', closeMobileMenu);
  backdrop.addEventListener('click', closeMobileMenu);
  mobilePanel.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', closeMobileMenu);
  });
  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape') closeMobileMenu();
  });

  /* ── FOOTER (compartit a totes les pagines) ── */
  /* Es munta en DOMContentLoaded perque aquest script s'executa
     abans que la resta del <body>; si s'afegis ara, quedaria
     enganxat just despres del nav en lloc d'al final de la pagina. */
  function mountFooter(){
  const footer = document.createElement('footer');
  footer.innerHTML = `
    <div class="footer-inner">
      <div class="footer-huge"><span class="y">Hello,</span> <span class="p">Hi,</span> <span class="s">Hola</span><span class="c">.</span></div>
      <div class="footer-cols">
        <div class="footer-col">
          <h6>Sprint Idiomes</h6>
          <p>Escola d'anglès i de francès a Sant Cugat des de 1973. Cambridge oficial des de 1992. DELF/DALF amb professors nadius.</p>
          <div class="footer-socials">
            <a href="https://www.instagram.com/sprintidiomes" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="5" stroke="#FFF6E4" stroke-width="1.8"/><circle cx="12" cy="12" r="4" stroke="#FFF6E4" stroke-width="1.8"/><circle cx="17.5" cy="6.5" r="1.2" fill="#FFF6E4"/></svg></a>
            <a href="https://www.facebook.com/EscolaSprintIdiomes" aria-label="Facebook"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15 4h-2.5C10 4 9 5.5 9 8v2H6.5v3H9v8h3v-8h2.5l.5-3H12V8c0-.7.3-1 1-1h2V4z" fill="#FFF6E4"/></svg></a>
            <a href="https://wa.me/34935892264" aria-label="WhatsApp"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 20l1.5-4.5A8 8 0 1 1 9 19.5L4 20z" stroke="#FFF6E4" stroke-width="1.8" stroke-linejoin="round"/></svg></a>
          </div>
        </div>
        <div class="footer-col">
          <h6>Cursos</h6>
          <ul>
            <li><a href="cursos.html#kids-planet">Kids Planet (3–6)</a></li>
            <li><a href="cursos.html#kids">Kids 1–6 (7–12)</a></li>
            <li><a href="cursos.html#teens">Teens (12+)</a></li>
            <li><a href="cursos.html#cambridge">Cambridge &amp; IELTS</a></li>
            <li><a href="cursos.html#adults">Adults (18+)</a></li>
            <li><a href="cursos.html#business">BLA Business</a></li>
            <li><a href="cursos.html#frances">L'École de Français</a></li>
            <li><a href="particular.html">Classes Particulars</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h6>L'escola</h6>
          <ul>
            <li><a href="qui-som.html">Qui som</a></li>
            <li><a href="index.html#perque">Per què Sprint?</a></li>
            <li><a href="index.html#metode">El nostre mètode</a></li>
            <li><a href="qui-som.html#historia">Història des de 1973</a></li>
            <li><a href="qui-som.html#equip">Equip docent</a></li>
            <li><a href="index.html#opinions">Opinions</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h6>Contacte</h6>
          <ul>
            <li>C/ Francesc Moragas 4 i 8</li>
            <li>08172 Sant Cugat del Vallès</li>
            <li><a href="tel:+34935892264">93 589 22 64</a></li>
            <li><a href="tel:+34936746635">93 674 66 35</a></li>
            <li><a href="mailto:info@sprintidiomes.com">info@sprintidiomes.com</a></li>
            <li>L–V · 9h–21h</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 1973 – 2026 Sprint Idiomes · Sant Cugat del Vallès</span>
        <span>Avís legal · Privacitat · Cookies</span>
      </div>
      <div class="footer-proto">
        Prototip confidencial · Disseny i desenvolupament <a href="https://sheisdigitalab.com">She's Digital</a> · Tots els drets reservats
      </div>
    </div>
  `;
  document.body.appendChild(footer);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountFooter);
  } else {
    mountFooter();
  }

})();
