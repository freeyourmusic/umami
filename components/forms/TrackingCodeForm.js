import React, { useRef } from 'react';
import { FormattedMessage } from 'react-intl';
import Button from 'components/common/Button';
import FormLayout, { FormButtons, FormRow } from 'components/layout/FormLayout';
import CopyButton from 'components/common/CopyButton';

export default function TrackingCodeForm({ values, onClose }) {
  const ref = useRef();

  return (
    <FormLayout>
      <p>
        <FormattedMessage
          id="message.track-stats"
          defaultMessage="To track stats for {target}, place the following code in the {head} section of your website."
          values={{ head: '<head>', target: <b>{values.name}</b> }}
        />
      </p>
      <FormRow>
        <textarea
          ref={ref}
          rows={3}
          cols={60}
          spellCheck={false}
          defaultValue={`!function(){"use strict";!function(e){var t=e.umami=e.umami||[];if(!t.registerAutoEvents)if(t.invoked)e.console&&console.error&&console.error("Umami snippet included twice.");else{t.invoked=!0,t.calls=[],t.methods=["trackView","trackEvent"],t.factory=function(e){return function(){var r=Array.prototype.slice.call(arguments);return r.unshift(e),t.calls.push(r),t}};for(var r=0;r<t.methods.length;r++){var a=t.methods[r];t[a]=t.factory(a)}t.load=function(e,t,r){var a=document.createElement("script");a.type="text/javascript",a.defer=!0,a.async=!0,a.setAttribute("data-website-id",t),r&&a.setAttribute("data-auto-track","false"),a.src=e;var o=document.getElementsByTagName("script")[0];o.parentNode.insertBefore(a,o)},t.load("${document.location.origin}/umami.js","${values.website_uuid}",!1)}}(window)}();`}
          readOnly
        />
      </FormRow>
      <FormButtons>
        <CopyButton type="submit" variant="action" element={ref} />
        <Button onClick={onClose}>
          <FormattedMessage id="button.cancel" defaultMessage="Cancel" />
        </Button>
      </FormButtons>
    </FormLayout>
  );
}
