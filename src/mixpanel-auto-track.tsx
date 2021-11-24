import React from 'react';
import { useMixPanel } from './mixpanel-provider';

// Click Event Tracking Handler
export const MixPanelClickTracker = (props: any) => {
  const { mixpanel } = useMixPanel();
  const { children, onClick, trackingEventName, trackingEventData } = props;
  const handleOnClick = (e: any) => {
    const { data, event, onClick } = props;
    if (trackingEventName && trackingEventData) {
      mixpanel.track(trackingEventName, trackingEventData);
    }
    if (onClick && typeof onClick === 'function') {
      onClick(e);
    }
  };
  return (
    <React.Fragment>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          onClick: handleOnClick,
          ...props
        })
      )}
    </React.Fragment>
  );
};

// Todos
// Mouse Enter Event Tracking Handler
// Page Scroll Event Tracking Handler
// max-scroll-tracker
// impression-tracker
// media-query-tracker
// outbound-form-tracker
// outbound-link-tracker
// page-visibility-tracker
// url-change-tracker
