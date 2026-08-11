(function () {
  const COPY_SVG =
    '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>';
  const CHECK_SVG =
    '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 13l4 4L19 7"/></svg>';
  const CODE_SVG =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>';

  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function highlightPhp(code) {
    let s = escapeHtml(code);

    // comments
    s = s.replace(/(\/\/.*$)/gm, '<span class="tok-cm">$1</span>');
    s = s.replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="tok-cm">$1</span>');

    // strings (rough)
    s = s.replace(/('(?:\\'|[^'])*'|"(?:\\"|[^"])*")/g, '<span class="tok-str">$1</span>');

    // keywords
    s = s.replace(
      /\b(class|public|protected|private|function|return|echo|new|extends|parent|static|const|if|else|elseif|endif|foreach|as|while|for|try|catch|throw|use|namespace|true|false|null|array|isset|empty|unset|continue|break|switch|case|default|yield|match|fn)\b/g,
      '<span class="tok-kw">$1</span>'
    );

    // numbers
    s = s.replace(/\b(\d+(?:\.\d+)?)\b/g, '<span class="tok-num">$1</span>');

    // function calls
    s = s.replace(/\b([a-zA-Z_][a-zA-Z0-9_]*)\s*(?=\()/g, '<span class="tok-fn">$1</span>');

    return s;
  }

  function highlightGeneric(code, lang) {
    if (lang === 'php' || lang === 'cakephp' || !lang) return highlightPhp(code);
    if (lang === 'sql') {
      let s = escapeHtml(code);
      s = s.replace(
        /\b(SELECT|FROM|WHERE|AND|OR|ORDER|BY|LIMIT|INSERT|INTO|VALUES|UPDATE|SET|DELETE|BEGIN|COMMIT|ROLLBACK|JOIN|LEFT|RIGHT|INNER|ON|AS|NULL|NOT|IN|LIKE|DESC|ASC|COUNT|DISTINCT)\b/gi,
        '<span class="tok-kw">$1</span>'
      );
      s = s.replace(/('(?:\\'|[^'])*')/g, '<span class="tok-str">$1</span>');
      return s;
    }
    if (lang === 'html' || lang === 'ctp') {
      let s = escapeHtml(code);
      s = s.replace(/(&lt;\/?[a-zA-Z0-9:-]+)/g, '<span class="tok-kw">$1</span>');
      s = s.replace(/(&lt;\?=|&lt;\?php|\?&gt;)/g, '<span class="tok-num">$1</span>');
      return s;
    }
    return escapeHtml(code);
  }

  function enhanceCodeBlocks(root) {
    root.querySelectorAll('pre[data-lang]').forEach(function (pre) {
      if (pre.closest('.code-block')) return;

      const lang = (pre.getAttribute('data-lang') || 'php').toLowerCase();
      const raw = pre.textContent.replace(/^\n/, '').replace(/\n$/, '');
      const label = pre.getAttribute('data-label') || lang.toUpperCase();

      const wrap = document.createElement('div');
      wrap.className = 'code-block';

      const header = document.createElement('div');
      header.className = 'code-block-header';
      header.innerHTML =
        '<span class="code-lang">' +
        CODE_SVG +
        ' ' +
        escapeHtml(label) +
        '</span>';

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'copy-btn';
      btn.setAttribute('aria-label', 'コードをコピー');
      btn.innerHTML = COPY_SVG;
      btn.addEventListener('click', function () {
        navigator.clipboard.writeText(raw).then(function () {
          btn.classList.add('copied');
          btn.innerHTML = CHECK_SVG;
          setTimeout(function () {
            btn.classList.remove('copied');
            btn.innerHTML = COPY_SVG;
          }, 1400);
        });
      });
      header.appendChild(btn);

      const newPre = document.createElement('pre');
      const code = document.createElement('code');
      code.innerHTML = highlightGeneric(raw, lang);
      newPre.appendChild(code);

      wrap.appendChild(header);
      wrap.appendChild(newPre);
      pre.replaceWith(wrap);
    });
  }

  function siteBase() {
    const host = location.hostname;
    if (host === 'localhost' || host === '127.0.0.1' || location.protocol === 'file:') {
      return './';
    }
    if (host.endsWith('github.io')) return '/sigoto/';
    if (host === 'nigxam.com' || host === 'www.nigxam.com') return '/';
    return './';
  }

  function renderSidebar(currentId) {
    const mount = document.getElementById('sidebar-nav');
    if (!mount || !window.CURRICULUM) return;

    const base = siteBase();
    let html = '';

    window.CURRICULUM.forEach(function (ch) {
      const active = ch.id === currentId;
      html +=
        '<div class="nav-chapter' +
        (active ? ' active open' : '') +
        '" data-id="' +
        ch.id +
        '">';
      html +=
        '<button type="button" class="nav-chapter-btn" data-file="' +
        base +
        ch.file +
        '"><span class="nav-num">' +
        ch.id +
        '</span><span>' +
        escapeHtml(ch.title) +
        '</span></button>';
      html += '<div class="nav-sections">';
      ch.sections.forEach(function (sec) {
        const href = active ? '#' + sec.id : base + ch.file + '#' + sec.id;
        html +=
          '<a href="' +
          href +
          '" data-section="' +
          sec.id +
          '">' +
          escapeHtml(sec.title) +
          '</a>';
      });
      html += '</div></div>';
    });

    mount.innerHTML = html;

    mount.querySelectorAll('.nav-chapter-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const parent = btn.closest('.nav-chapter');
        const file = btn.getAttribute('data-file');
        if (parent && parent.classList.contains('active')) {
          parent.classList.toggle('open');
          return;
        }
        if (file) window.location.href = file;
      });
    });
  }

  function setupMobileNav() {
    const btn = document.getElementById('menu-btn');
    const overlay = document.getElementById('sidebar-overlay');
    if (!btn) return;

    function close() {
      document.body.classList.remove('sidebar-open');
    }

    btn.addEventListener('click', function () {
      document.body.classList.toggle('sidebar-open');
    });
    if (overlay) overlay.addEventListener('click', close);

    document.querySelectorAll('.nav-sections a').forEach(function (a) {
      a.addEventListener('click', close);
    });
  }

  function setupSectionHighlight() {
    const links = document.querySelectorAll('.nav-sections a[data-section]');
    if (!links.length) return;

    const lessons = document.querySelectorAll('.lesson[id]');
    if (!lessons.length || !('IntersectionObserver' in window)) return;

    const io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          links.forEach(function (a) {
            a.classList.toggle('active', a.getAttribute('data-section') === id);
          });
        });
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: 0 }
    );

    lessons.forEach(function (el) {
      io.observe(el);
    });
  }

  function renderHomeToc() {
    const mount = document.getElementById('home-toc');
    if (!mount || !window.CURRICULUM) return;

    const base = siteBase();
    mount.innerHTML = window.CURRICULUM.map(function (ch) {
      return (
        '<a class="toc-card" href="' +
        base +
        ch.file +
        '">' +
        '<div class="toc-card-num">第' +
        parseInt(ch.id, 10) +
        '章</div>' +
        '<h2>' +
        escapeHtml(ch.title) +
        '</h2>' +
        '<p>' +
        escapeHtml(ch.blurb) +
        '</p>' +
        (ch.note
          ? '<span class="toc-note">重点章 · ' +
            ch.sections.length +
            ' トピック</span>'
          : '') +
        '</a>'
      );
    }).join('');
  }

  function fixPagerLinks() {
    const base = siteBase();
    document.querySelectorAll('.pager a[href]').forEach(function (a) {
      const href = a.getAttribute('href');
      if (!href || href.startsWith('http') || href.startsWith('#')) return;
      if (href === '../index.html' || href === 'index.html') {
        a.setAttribute('href', base + 'index.html');
        return;
      }
      if (/^ch\d+\.html/.test(href)) {
        a.setAttribute('href', base + href);
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    const chapterId = document.body.dataset.chapter || null;
    renderSidebar(chapterId);
    renderHomeToc();
    fixPagerLinks();
    enhanceCodeBlocks(document);
    setupMobileNav();
    setupSectionHighlight();
  });
})();
