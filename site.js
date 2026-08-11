/**
 * nigxam.com / GitHub Pages 連携設定
 */
window.SITE = {
  basePath: '/sigoto/',
  autoLocalBase: true,

  nigxam: {
    name: 'たまたまにのPostgreSQLメモ',
    home: 'https://nigxam.com/',
    nav: [
      { label: 'トップ', href: 'https://nigxam.com/' },
      { label: 'SQL補助', href: 'https://nigxam.com/#sql-assist' },
      { label: '講義', href: 'https://nigxam.com/#lectures' },
      { label: 'SQL生成', href: 'https://nigxam.com/#sql-generate' },
      { label: 'SQL整形', href: 'https://nigxam.com/#sql-format' },
      { label: 'エラー辞典', href: 'https://nigxam.com/#error-dict' }
    ]
  },

  course: {
    short: 'CakePHP講義',
    title: 'CakePHP 0から実務まで',
    subtitle: 'たまたまに · 初心者向け全14章'
  }
};

window.SITE.resolveBase = function () {
  const conf = window.SITE;
  const host = location.hostname;
  const local = host === 'localhost' || host === '127.0.0.1' || location.protocol === 'file:';

  if (conf.autoLocalBase && local) return './';

  if (host === 'nigxam.com' || host === 'www.nigxam.com') {
    return '/cakephp/';
  }

  if (host.endsWith('github.io')) {
    return '/sigoto/';
  }

  return conf.basePath.endsWith('/') ? conf.basePath : conf.basePath + '/';
};
