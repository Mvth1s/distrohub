// Typewriter: resolves after text finishes typing
function typewriter(el, text, speed) {
  return new Promise(resolve => {
    el.textContent = '';
    let i = 0;
    const tick = () => {
      if (i >= text.length) { resolve(); return; }
      el.textContent += text[i++];
      setTimeout(tick, speed);
    };
    tick();
  });
}

function delay(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function animateHero() {
  const cmdEl    = document.getElementById('hero-cmd');
  const titleEl  = document.getElementById('hero-title');
  const introEl  = document.getElementById('hero-intro');
  const cursorEl = document.getElementById('hero-cursor');

  await typewriter(cmdEl, './distrohub.sh --year 2025-2026', 45);
  await delay(180);

  await typewriter(
    titleEl,
    'Linux Distribution & Desktop Environment Reviews',
    18
  );
  await delay(100);

  await typewriter(
    introEl,
    'Personal Linux experiences collected across 2025–2026 while testing different distributions and desktop environments.',
    8
  );

  // Move cursor to end of intro after animation
  introEl.appendChild(cursorEl);
}

// Build a terminal-window card (works for both distros and DEs)
function buildCard(entry, type) {
  const article = document.createElement('article');
  article.className = 'card';
  article.setAttribute('role', 'listitem');

  // ── Title bar ──
  const titlebar = document.createElement('div');
  titlebar.className = 'card-titlebar';

  ['dot-r', 'dot-y', 'dot-g'].forEach(cls => {
    const dot = document.createElement('span');
    dot.className = `dot ${cls}`;
    titlebar.appendChild(dot);
  });

  const cmd = document.createElement('span');
  cmd.className = 'card-cmd';

  const verb = document.createElement('span');
  verb.textContent = '$ cat ';

  const file = document.createElement('span');
  file.className = 'cmd-file';
  file.textContent = `${type}/${entry.slug}.log`;

  cmd.append(verb, file);
  titlebar.appendChild(cmd);
  article.appendChild(titlebar);

  // ── Body ──
  const body = document.createElement('div');
  body.className = 'card-body';

  if (entry.ascii) {
    const pre = document.createElement('pre');
    pre.className = 'ascii-art';
    pre.setAttribute('aria-hidden', 'true');
    pre.textContent = entry.ascii;
    body.appendChild(pre);
  }

  const info = document.createElement('div');
  info.className = 'card-info';

  // Build info rows based on card type
  const rows = type === 'distros'
    ? [
        ['name    ', entry.name],
        ['duration', entry.duration],
        ['dates   ', entry.dateRange],
      ]
    : [
        ['de      ', entry.name],
        ['used on ', entry.usedOn],
      ];

  rows.forEach(([key, val]) => addInfoRow(info, key, val));

  if (entry.rating) {
    const row = document.createElement('div');
    row.className = 'info-row';

    const keyEl = document.createElement('span');
    keyEl.className = 'ikey';
    keyEl.textContent = 'rating  ';

    const sep = document.createElement('span');
    sep.className = 'isep';
    sep.textContent = ':';

    const badge = document.createElement('span');
    badge.className = `badge rating-${entry.rating.toLowerCase()}`;
    badge.textContent = entry.rating;

    row.append(keyEl, sep, badge);
    info.appendChild(row);
  }

  const comment = entry.comments ?? (type === 'distros' ? 'Testing in progress…' : null);
  if (comment) {
    addInfoRow(info, 'comments', comment);
  }

  body.appendChild(info);
  article.appendChild(body);

  return article;
}

function addInfoRow(parent, key, val) {
  const row = document.createElement('div');
  row.className = 'info-row';

  const keyEl = document.createElement('span');
  keyEl.className = 'ikey';
  keyEl.textContent = key;

  const sep = document.createElement('span');
  sep.className = 'isep';
  sep.textContent = ':';

  const valEl = document.createElement('span');
  valEl.className = 'ival';
  valEl.textContent = val;

  row.append(keyEl, sep, valEl);
  parent.appendChild(row);
}

// ── Animation terminale ligne par ligne ──

function resetCard(card) {
  const titlebar = card.querySelector('.card-titlebar');
  const ascii    = card.querySelector('.ascii-art');
  const rows     = card.querySelectorAll('.info-row');

  if (titlebar) {
    titlebar.style.transition = 'none';
    titlebar.style.opacity    = '0';
  }
  if (ascii) {
    ascii.style.transition = 'none';
    ascii.style.clipPath   = 'inset(0 0 100% 0)';
    ascii.style.opacity    = '1';
  }
  rows.forEach(row => {
    row.style.transition  = 'none';
    row.style.opacity     = '0';
    row.style.transform   = 'translateX(-8px)';
  });
}

function animateCardIn(card) {
  resetCard(card);

  // Double rAF pour que le reset soit peint avant de lancer les transitions
  requestAnimationFrame(() => requestAnimationFrame(() => {
    const titlebar = card.querySelector('.card-titlebar');
    const ascii    = card.querySelector('.ascii-art');
    const rows     = card.querySelectorAll('.info-row');

    if (titlebar) {
      titlebar.style.transition      = 'opacity 0.12s ease';
      titlebar.style.transitionDelay = '0ms';
      titlebar.style.opacity         = '1';
    }

    if (ascii) {
      ascii.style.transition      = 'clip-path 0.55s ease';
      ascii.style.transitionDelay = '80ms';
      ascii.style.clipPath        = 'inset(0 0 0% 0)';
    }

    rows.forEach((row, i) => {
      const delay = 140 + i * 70;
      row.style.transition      = 'opacity 0.18s ease, transform 0.18s ease';
      row.style.transitionDelay = `${delay}ms`;
      row.style.opacity         = '1';
      row.style.transform       = 'translateX(0)';
    });
  }));
}

function animateCardOut(card) {
  const titlebar = card.querySelector('.card-titlebar');
  const ascii    = card.querySelector('.ascii-art');
  const rows     = card.querySelectorAll('.info-row');

  const hide = el => {
    if (!el) return;
    el.style.transition      = 'opacity 0.15s ease';
    el.style.transitionDelay = '0ms';
    el.style.opacity         = '0';
  };

  hide(titlebar);
  rows.forEach(hide);

  if (ascii) {
    ascii.style.transition      = 'clip-path 0.25s ease';
    ascii.style.transitionDelay = '0ms';
    ascii.style.clipPath        = 'inset(0 0 100% 0)';
  }
}

function observeEntrance() {
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const rect = entry.boundingClientRect;
      if (entry.isIntersecting) {
        animateCardIn(entry.target);
      } else if (rect.top > 0) {
        // Carte sous le viewport → l'utilisateur est remonté : efface
        animateCardOut(entry.target);
      }
      // Carte au-dessus du viewport (déjà scrollée) → on ne touche pas
    });
  }, { threshold: 0.05 });

  const headObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else if (entry.boundingClientRect.top > 0) {
        entry.target.classList.remove('visible');
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.card').forEach(card => {
    resetCard(card);
    cardObserver.observe(card);
  });
  document.querySelectorAll('.section-head').forEach(el => headObserver.observe(el));
}

// ── Render ──
(function renderPortfolio(data) {
  const distroGrid = document.getElementById('distro-grid');
  const deGrid     = document.getElementById('de-grid');

  if (!distroGrid || !deGrid || !data) return;

  data.distroReviews.forEach(d => distroGrid.appendChild(buildCard(d, 'distros')));
  data.deRankings.forEach(d   => deGrid.appendChild(buildCard(d, 'de')));

  observeEntrance();
  animateHero();
})(portfolioData);
