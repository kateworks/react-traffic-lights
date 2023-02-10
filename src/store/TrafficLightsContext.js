import React from 'react';

const TrafficLightsContext = React.createContext({
  isOn: false,
  colour: '',
  duration: 0,
  wink: 0,
  toggle: () => {},
  clear: () => {},
  red: () => {},
  yellow: () => {},
  green: () => {},
});

export default TrafficLightsContext;
