
import siteConfig from '@generated/docusaurus.config';
import mediumZoom from 'medium-zoom'

const { themeConfig } = siteConfig;

export default (function () {

  if ( typeof window === 'undefined' ) {
    return null;
  }

  // Backwards compatibility
  const zoomSelector = '.markdown img';

  // Allow medium-zoom options: https://www.npmjs.com/package/medium-zoom#options
  const {
    imageZoom: {
      selector = zoomSelector,
      options,
    } = {},
  } = themeConfig;

  setTimeout(() => {
    mediumZoom(selector, options);
  }, 1000);


  return {
    onRouteUpdate({ location , previousLocation}) {
      if( location?.hash && location.hash.length ) {
        return;
      }

      if (!previousLocation || location.pathname === previousLocation.pathname) {
        return;
      }

      setTimeout(() => {
        mediumZoom(selector, options);
      }, 1000);

    },
  };
})();