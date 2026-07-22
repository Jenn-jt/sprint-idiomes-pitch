(function () {

  const style = document.createElement('style');
  style.textContent = `
    .nav{
      position:sticky;top:0;z-index:200;
      background:rgba(255,255,255,.95);
      backdrop-filter:blur(14px);
      -webkit-backdrop-filter:blur(14px);
      border-bottom:1px solid rgba(21,32,61,.1);
    }
    .nav-inner{
      max-width:1320px;margin:0 auto;
      padding:18px 32px;
      display:flex;align-items:center;justify-content:space-between;gap:24px;
    }
    .nav .logo{
      display:inline-flex;flex-direction:column;align-items:stretch;
      font-family:"Bricolage Grotesque",ui-sans-serif,system-ui,sans-serif;
      font-weight:500;font-size:13px;letter-spacing:.12em;line-height:1;
      color:#15203D;text-transform:uppercase;padding:2px 0;
      text-decoration:none;
    }
    .nav .logo .lw{display:block;text-align:center}
    .nav .logo .lr{display:block;height:3px;background:#15203D;margin:4px 0;border-radius:1px;transition:background .2s}
    .nav .logo:hover{color:#2547D9}
    .nav .logo:hover .lr{background:#2547D9}
    .nav-links{
      display:flex;align-items:center;gap:30px;
      font-size:15px;font-weight:600;
    }
    .nav-links a{
      position:relative;padding:4px 0;
      color:#4A5878;
      transition:color .2s;
      text-decoration:none;
    }
    .nav-links a:hover{color:#2547D9}
    .nav-links a::after{
      content:"";position:absolute;left:0;bottom:-2px;
      width:0;height:3px;background:#FFB800;border-radius:3px;
      transition:width .3s ease;
    }
    .nav-links a:hover::after,
    .nav-links a.active::after{width:100%}
    .nav-links a.active{color:#15203D}

    /* ── DROPDOWN CURSOS ── */
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
    .nav-dropdown-wrap.open .nav-dropdown{
      opacity:1;pointer-events:auto;
      transform:translateX(-50%) translateY(0);
    }
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

    .nav-cta{display:flex;gap:12px;align-items:center}
    .nav .btn-lang{
      font-size:12px;font-weight:700;letter-spacing:.08em;
      color:#4A5878;padding:8px 14px;border-radius:8px;
      border:1px solid rgba(21,32,61,.22);
      background:none;cursor:pointer;font-family:inherit;
      transition:all .2s;
    }
    .nav .btn-lang:hover{border-color:#15203D;color:#15203D}
    .nav .btn-nivel{
      display:inline-flex;align-items:center;gap:8px;
      background:#FFB800;color:#15203D;
      font-family:"Nunito",ui-sans-serif,system-ui,sans-serif;
      font-size:14.5px;font-weight:700;
      padding:12px 22px;border-radius:100px;
      border:1px solid transparent;
      text-decoration:none;
      box-shadow:0 4px 16px rgba(255,184,0,.3);
      transition:transform .2s,box-shadow .2s,background .2s;
    }
    .nav .btn-nivel::before{
      content:'';display:inline-block;
      width:7px;height:7px;border-radius:50%;
      background:#15203D;opacity:.5;flex-shrink:0;
      animation:nav-nivel-pulse 2s ease-in-out infinite;
    }
    @keyframes nav-nivel-pulse{
      0%,100%{opacity:.5;transform:scale(1)}
      50%{opacity:1;transform:scale(1.3)}
    }
    .nav .btn-nivel:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(255,184,0,.45);background:#FFD000}
    .nav .btn-primary{
      display:inline-flex;align-items:center;gap:10px;
      background:#2547D9;color:#fff;
      font-family:"Nunito",ui-sans-serif,system-ui,sans-serif;
      font-size:14.5px;font-weight:600;
      padding:12px 22px;border-radius:100px;
      border:1px solid transparent;
      text-decoration:none;
      box-shadow:0 6px 18px rgba(37,71,217,.18);
      transition:all .25s ease;
    }
    .nav .btn-primary:hover{transform:translateY(-2px);box-shadow:0 12px 28px rgba(37,71,217,.28);background:#3B5DE8}
    .nav .btn-primary svg{width:16px;height:16px;flex-shrink:0;transition:transform .2s}
    .nav .btn-primary:hover svg{transform:translateX(3px)}
    @media(max-width:960px){
      .nav-links{display:none}
      .nav .btn-nivel{display:none}
      .nav-inner{padding:14px 20px}
    }
  `;
  document.head.appendChild(style);

  const page = location.pathname.split('/').pop() || 'index.html';
  const home = page === 'index.html' || page === '';
  const contactHref = home ? '#contacte' : 'index.html#contacte';

  const cursosPages = ['cursos.html','kids-planet.html','kids.html','teens.html','cambridge.html','adults.html','frances.html','business.html','summer.html'];
  const cursosActive = cursosPages.includes(page);

  const cursosDropdown = `
    <div class="nav-dropdown-wrap">
      <a href="cursos.html"${cursosActive ? ' class="active"' : ''}>
        Cursos
        <svg class="nav-chevron" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 5l4 4 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
      <div class="nav-dropdown">
        <a href="kids-planet.html"${page==='kids-planet.html'?' class="active"':''}>
          <span class="nav-dd-dot" style="background:#FF80AB"></span>Kids Planet <span style="font-size:11px;opacity:.55;font-weight:600">3–6 anys</span>
        </a>
        <a href="kids.html"${page==='kids.html'?' class="active"':''}>
          <span class="nav-dd-dot" style="background:#FF6B35"></span>Kids <span style="font-size:11px;opacity:.55;font-weight:600">7–12 anys</span>
        </a>
        <a href="teens.html"${page==='teens.html'?' class="active"':''}>
          <span class="nav-dd-dot" style="background:#4FC3F7"></span>Teens <span style="font-size:11px;opacity:.55;font-weight:600">13–17 anys</span>
        </a>
        <a href="cambridge.html"${page==='cambridge.html'?' class="active"':''}>
          <span class="nav-dd-dot" style="background:#9B72CF"></span>Cambridge &amp; IELTS
        </a>
        <a href="adults.html"${page==='adults.html'?' class="active"':''}>
          <span class="nav-dd-dot" style="background:#5CBA6A"></span>Adults <span style="font-size:11px;opacity:.55;font-weight:600">18+</span>
        </a>
        <div class="nav-dd-sep"></div>
        <a href="frances.html"${page==='frances.html'?' class="active"':''}>
          <span class="nav-dd-dot" style="background:#2547D9"></span>L'École de Français
        </a>
        <a href="business.html"${page==='business.html'?' class="active"':''}>
          <span class="nav-dd-dot" style="background:#8B1A4A"></span>BLA Business
        </a>
        <div class="nav-dd-sep"></div>
        <a href="summer.html"${page==='summer.html'?' class="active"':''}>
          <span class="nav-dd-dot" style="background:#EA580C"></span>Summer 2026 <span style="font-size:11px;opacity:.55;font-weight:600">&#9728; Estiu</span>
        </a>
      </div>
    </div>
  `;

  const nav = document.createElement('nav');
  nav.className = 'nav';
  nav.innerHTML = `
    <div class="nav-inner">
      <a href="index.html" class="logo" aria-label="Sprint Idiomes">
        <span class="lw">Sprint</span>
        <span class="lr"></span>
        <span class="lw">Idiomes</span>
      </a>
      <div class="nav-links">
        <a href="index.html"${page==='index.html'||page===''?' class="active"':''}>Home</a>
        <a href="qui-som.html"${page==='qui-som.html'?' class="active"':''}>Qui som</a>
        ${cursosDropdown}
      </div>
      <div class="nav-cta">
        <a href="${contactHref}" class="btn-nivel">Descobreix el teu nivell</a>
        <a href="${contactHref}" class="btn-primary">
          Matricula't
          <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  `;

  document.body.insertBefore(nav, document.body.firstChild);

  /* ── DROPDOWN amb delay per no tancar-se al instant ── */
  const wrap = nav.querySelector('.nav-dropdown-wrap');
  if (wrap) {
    let closeTimer;
    wrap.addEventListener('mouseenter', function () {
      clearTimeout(closeTimer);
      wrap.classList.add('open');
    });
    wrap.addEventListener('mouseleave', function () {
      closeTimer = setTimeout(function () {
        wrap.classList.remove('open');
      }, 200);
    });
  }

})();
