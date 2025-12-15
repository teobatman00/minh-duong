
import siteConfig from '@generated/docusaurus.config';
import mediumZoom from 'medium-zoom'

const { themeConfig } = siteConfig;

export default (function () {

  if ( typeof window === 'undefined' ) {
    return null;
  }
  // Backwards compatibility
  const zoomSelector = '.markdown img';




  return {
    onRouteUpdate({ location , previousLocation}) {
      if( location?.hash && location.hash.length ) {
        return;
      }

      if (!previousLocation || location.pathname === previousLocation.pathname) {
        return;
      }

      setTimeout(() => {
        mediumZoom(zoomSelector, {
          margin: 72,
          scrollOffset: 0,
        });
      }, 1000);

    },
  };
})();