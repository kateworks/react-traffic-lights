import React from 'react';
import { TrafficLights } from '../components';
import { LIGHTS } from '../utils/const';

function RedColorPage() {
  return (
    <TrafficLights activeColor={LIGHTS.red} />
  );
}

export default RedColorPage;
