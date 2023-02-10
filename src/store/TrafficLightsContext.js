import React from 'react';

const TrafficLightsContext = React.createContext({
  isOn: false,
  color: '',
  toggle: () => {},
  clear: () => {},
  red: () => {},
  yellow: () => {},
  green: () => {},
});

export default TrafficLightsContext;
