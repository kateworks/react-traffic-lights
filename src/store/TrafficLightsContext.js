import { useReducer, createContext, useContext, useState, useEffect, useCallback } from 'react';
import { LIGHTS, SCHEDULE } from '../utils/const';

const { red, yellow, green } = LIGHTS;

const TrafficLightsContext = createContext(null);

export function useTrafficLights() {
  return useContext(TrafficLightsContext);
}

export function TrafficLightsProvider({ children }) {
  const [ state, dispatch ] = useReducer(trafficLightsReducer, initialState);
  const [ duration, setDuration ] = useState(0);

  const changeColor = useCallback((colorName) => {
    if (colorName in LIGHTS) {
      dispatch({ type: colorName });
      setDuration(SCHEDULE[colorName].duration || 0);  
    }
  }, []);

  useEffect(() => {
    let id;
    if (duration > 0) {
      id = setTimeout(() => {
        setDuration((x) => (x - 1));
      }, 1000);  
    }

    if (duration === 0 && state.isOn && state.color in LIGHTS) {
      changeColor(SCHEDULE[state.color].next || '');
    }

    return () => {
      if (id) clearTimeout(id);
    }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [duration]);

  const start = useCallback(() => {
    changeColor(red);
  }, [changeColor]);

  const stop = useCallback(() => {
    dispatch({ type: 'clear'});
    setDuration(0);
  }, []);

  const toggle = () => dispatch({ type: 'toggle'});

  const trafficLightsContext = { 
    isOn: state.isOn,
    color: state.color, 
    wink: state.wink,
    counter: duration,
    toggle,
    start,
    stop,
  };  

  return (
    <TrafficLightsContext.Provider value={trafficLightsContext}>
      {children}
    </TrafficLightsContext.Provider>
  );
}

function trafficLightsReducer(state, action) {
  switch (action.type) {
    case 'toggle':
      return { 
        ...state, 
        isOn: !state.isOn 
      };
    case 'clear':
      return { 
        ...state, 
        color: '',
        wink: 0,
      };
    case red:
    case yellow:
    case green:
      const colorName = action.type;
      return { 
        ...state, 
        color: colorName,
        wink: SCHEDULE[colorName].wink || 0,
      };
    default:
      throw new Error(`Unknown action: ${action}`);
  }
} 

const initialState = {
  isOn: false,
  color: '',
  wink: 0,
};


