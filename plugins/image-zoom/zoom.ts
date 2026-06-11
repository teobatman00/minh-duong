
import siteConfig from '@generated/docusaurus.config';
import mediumZoom from 'medium-zoom'

const { themeConfig } = siteConfig;

// Mark all markdown (docs/blog) images as lazy-loaded so the browser defers
// fetching them until they're near the viewport.
function applyLazyLoading() {
  document.querySelectorAll('.markdown img').forEach((img) => {
    if (!img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }
    if (!img.hasAttribute('decoding')) {
      img.setAttribute('decoding', 'async');
    }
  });
}

export default (function () {

  if ( typeof window === 'undefined' ) {
    return null;
  }
  // Backwards compatibility
  const zoomSelector = '.markdown img';

  setTimeout(applyLazyLoading, 1000);

  return {
    onRouteUpdate({ location , previousLocation}) {
      if( location?.hash && location.hash.length ) {
        return;
      }

      if (!previousLocation || location.pathname === previousLocation.pathname) {
        return;
      }

      setTimeout(() => {
        applyLazyLoading();
        mediumZoom(zoomSelector, {
          margin: 72,
          scrollOffset: 0,
        });
      }, 1000);

    },
  };
})();