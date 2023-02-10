import { useReducer } from 'react';
import TrafficLightsContext from './TrafficLightsContext';
import { LIGHTS } from '../utils/const';

const { red, yellow, green } = LIGHTS;

const defaultState = {
  isOn: false,
  color: '',
};

function trafficLightsReducer(state, action) {
  switch (action.type) {
    case 'toggle':
      return { ...state, isOn: !state.isOn };
    case 'clear':
      if (!state.isOn) return { ...state, color: '' };
      throw new Error(`Cannot perform that action: ${action}`);
    case red:
      return { ...state, color: red };
    case yellow:
      return { ...state, color: yellow };
    case green:
      return { ...state, color: green };
    default:
      throw new Error(`Unknown action: ${action}`);
  }
} 

function TrafficLightsProvider({ children }) {
  const [state, dispatch] = useReducer(trafficLightsReducer, defaultState);

  const toggleTrafficLights = () => dispatch({ type: 'toggle'});
  const clearTrafficLights = () => dispatch({ type: 'clear'});
  const turnRed = () => dispatch({ type: red });
  const turnYellow = () => dispatch({ type: yellow });
  const turnGreen = () => dispatch({ type: green });

  const trafficLightsContext = {
    isOn: state.isOn,
    color: '',
    toggle : toggleTrafficLights,
    clear: clearTrafficLights,
    red: turnRed,
    yellow: turnYellow,
    green: turnGreen,  
  };  

  return (
    <TrafficLightsContext.Provider value={trafficLightsContext}>
      {children}
    </TrafficLightsContext.Provider>
  );
}

export default TrafficLightsProvider;

