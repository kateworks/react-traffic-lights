import { useReducer, createContext, useContext, useState, useEffect, useCallback } from 'react';
import { LIGHTS, DURATIONS } from '../utils/const';

const { red, yellow, green } = LIGHTS;

const TrafficLightsContext = createContext(null);

export function useTrafficLights() {
  return useContext(TrafficLightsContext);
}

export function TrafficLightsProvider({ children }) {
  const [ state, dispatch ] = useReducer(trafficLightsReducer, initialState);
  const [ value, setValue ] = useState(0);

  const setNextColor = useCallback((currentColor) => {
    switch (currentColor) {
      case LIGHTS.red:
        dispatch({ type: LIGHTS.yellow });
        setValue(DURATIONS[yellow][0] || 0);
        break;
      case LIGHTS.yellow:
        dispatch({ type: LIGHTS.green });
        setValue(DURATIONS[green][0] || 0);
        break;
      case LIGHTS.green:
        dispatch({ type: LIGHTS.red });
        setValue(DURATIONS[red][0] || 0);
        break;
      default:
    }
  }, []);


  useEffect(() => {
    let id;
    if (value > 0) {
      id = setTimeout(() => {
        setValue((x) => (x - 1));
      }, 1000);  
    }

    if (value === 0) {
      setNextColor(state.color);
    }

    return () => {
      if (id) clearTimeout(id);
    }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [value]);

  const start = useCallback(() => {
    dispatch({ type: LIGHTS.red });
    setValue(DURATIONS[red][0]);
  }, []);

  const stop = useCallback(() => {
    dispatch({ type: 'clear'});
    setValue(0);
  }, []);

  const toggle = () => dispatch({ type: 'toggle'});

  const trafficLightsContext = { 
    isOn: state.isOn,
    color: state.color, 
    wink: state.wink,
    counter: value,
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
      return { ...state, isOn: !state.isOn };
    case 'clear':
      return { 
        ...state, 
        color: '',
        wink: 0,
      };
    case red:
      return { 
        ...state, 
        color: red,
        wink: DURATIONS[red][1] || 0,
      };
    case yellow:
      return { 
        ...state, 
        color: yellow,
        wink: DURATIONS[yellow][1] || 0,
      };
    case green:
      return { 
        ...state, 
        color: green,
        wink: DURATIONS[green][1] || 0,
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


