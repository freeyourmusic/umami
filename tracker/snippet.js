(window => {
  const umami = window.umami = window.umami || [];
  if (!umami.registerAutoEvents) {
    if (umami.invoked) {
      window.console && console.error && console.error('Umami snippet included twice.');
    } else {
      umami.invoked = true;
      umami.calls = [];
      umami.methods = ['trackView', 'trackEvent'];
      umami.factory = t => {
        return function() {
          const e = Array.prototype.slice.call(arguments);
          e.unshift(t);
          umami.calls.push(e);
          return umami;
        };
      };
      for (let t = 0; t < umami.methods.length; t++) {
        let e = umami.methods[t];
        umami[e] = umami.factory(e);
      }
      umami.load = function(umamiScript, umamiUUID, skipAuto) {
        const scriptElement = document.createElement('script');
        scriptElement.type = 'text/javascript';
        scriptElement.defer = true;
        scriptElement.async = true;
        scriptElement.setAttribute('data-website-id', umamiUUID);
        if (skipAuto) {
          scriptElement.setAttribute('data-auto-track', 'false');
        }
        scriptElement.src = umamiScript;
        const otherScript = document.getElementsByTagName('script')[0];
        otherScript.parentNode.insertBefore(scriptElement, otherScript);
      };

      umami.load('${document.location.origin}/umami.js', '${values.website_uuid}', false);
    }
  }
})(window);
// !!!!!!!!!!!!!!!
// If you change this code, remember to compile it and paste it to ./components/forms/TrackingCodeForm.js
