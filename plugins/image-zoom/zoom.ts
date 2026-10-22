import mediumZoom from 'medium-zoom'

// Mark markdown (docs/blog) images as lazy-loaded so the browser defers
// fetching them until they're near the viewport. Skip the first content image
// (often LCP on post pages) when it sits near the top of the article.
function applyLazyLoading() {
  const images = document.querySelectorAll<HTMLImageElement>('.markdown img');
  images.forEach((img, index) => {
    const nearTop =
      index === 0 && img.getBoundingClientRect().top < window.innerHeight * 0.85;

    if (nearTop) {
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'eager');
      }
      if (!img.hasAttribute('fetchpriority')) {
        img.setAttribute('fetchpriority', 'high');
      }
    } else if (!img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }

    if (!img.hasAttribute('decoding')) {
      img.setAttribute('decoding', 'async');
    }
  });
}

function initZoom() {
  applyLazyLoading();
  mediumZoom('.markdown img', {
    margin: 72,
    scrollOffset: 0,
  });
}

export default (function () {
  if (typeof window === 'undefined') {
    return null;
  }

  // Apply as soon as the client module loads; short fallback for late MDX.
  applyLazyLoading();
  setTimeout(applyLazyLoading, 300);

  return {
    onRouteUpdate({ location, previousLocation }) {
      if (location?.hash && location.hash.length) {
        return;
      }

      if (!previousLocation || location.pathname === previousLocation.pathname) {
        return;
      }

      setTimeout(initZoom, 300);
    },
  };
})();
