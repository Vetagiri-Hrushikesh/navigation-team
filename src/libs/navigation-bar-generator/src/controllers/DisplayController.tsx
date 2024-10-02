// src/controllers/DisplayController.tsx

import React, { useEffect, useState } from 'react';
import { getAllowedFeatures } from '../handlers/featureHandler';
import { generateControls } from '../handlers/controlHandler';
import { generateSubControls } from '../handlers/subcontrolHandler';
import { useGlobalState } from '../providers/GlobalContext';
import FeatureController from './FeatureController';
import ControlController from './ControlController';
import { ControlName } from '../types';

const DisplayController: React.FC = () => {
  const { state, dispatch } = useGlobalState();
  const { isAuthenticated, role, packageType } = state;

  useEffect(() => {
    if (!isAuthenticated) return;

    const allowedFeatures = getAllowedFeatures(packageType, role);
    const allowedControls = generateControls(allowedFeatures, packageType, role);
    const allowedSubControls = generateSubControls(allowedControls as ControlName[], packageType, role);

    dispatch({ type: 'SET_FEATURES', payload: allowedFeatures });
    dispatch({ type: 'SET_CONTROLS', payload: allowedControls });
    dispatch({ type: 'SET_SUBCONTROLS', payload: allowedSubControls });
  }, [isAuthenticated, role, packageType]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <>
      <FeatureController features={state.features}/>
      <ControlController controls={state.controls} subControls={state.subControls} />
    </>
  );
};

export default DisplayController;
