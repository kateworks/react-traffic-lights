import { useReducer } from "react";
import TrafficLightsContext from "./TrafficLightsContext";

const defaultState = {
  isOn: false,
};

function trafficLightsReducer(state, action) {
  switch (action.type) {
    case 'toggle':
      return { ...state, isOn: !state.isOn}
    default:
      throw new Error(`Unknown action: ${action}`);
  }
} 

function TrafficLightsProvider({ children }) {
  const [state, dispatch] = useReducer(trafficLightsReducer, defaultState);

  const toggleTrafficLights = () => {
    dispatch({ type: 'toggle'});
  }

  const trafficLightsContext = {
    isOn: state.isOn,
    toggle : toggleTrafficLights,
    };  

  return (
    <TrafficLightsContext.Provider value={trafficLightsContext}>
      {children}
    </TrafficLightsContext.Provider>
  );
}

export default TrafficLightsProvider;

