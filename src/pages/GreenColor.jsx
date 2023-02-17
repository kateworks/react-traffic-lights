import React from 'react';
import { TrafficLights } from '../components';
import { LIGHTS } from '../utils/const';

function GreenColorPage() {
  return (
    <TrafficLights activeColor={LIGHTS.green} />
  );
}

export default GreenColorPage;
