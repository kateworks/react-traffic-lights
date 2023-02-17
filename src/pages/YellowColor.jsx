import React from 'react';
import { TrafficLights  } from '../components';
import { LIGHTS } from '../utils/const';

function YellowColorPage() {
  return (
    <TrafficLights activeColor={LIGHTS.yellow} />
  );
}

export default YellowColorPage;
