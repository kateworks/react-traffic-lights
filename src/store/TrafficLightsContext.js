import React from 'react';

const TrafficLightsContext = React.createContext({
  isOn: false,
  toggle: () => {},
});

export default TrafficLightsContext;
