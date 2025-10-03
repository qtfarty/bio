/**
 * Swap the Twitter link for Japanese visitors while keeping the default (English) href
 * for everyone else. Non-JavaScript visitors still get the default link.
 */
(function () {
  function updateTwitterLink() {
    var link = document.querySelector('.js-twitter-link');
    if (!link) {
      return;
    }

    var fallbackUrl = link.dataset.twitterDefault || link.getAttribute('href') || '';
    var langAttr = document.documentElement.getAttribute('lang') || '';
    var lang = langAttr.toLowerCase();

    var nextUrl = fallbackUrl;
    if (lang.startsWith('ja') && link.dataset.twitterJa) {
      nextUrl = link.dataset.twitterJa;
    }

    if (nextUrl && link.href !== nextUrl) {
      link.href = nextUrl;
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateTwitterLink);
  } else {
    updateTwitterLink();
  }
})();
