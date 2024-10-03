// src/controllers/DisplayController.tsx

import React, { useEffect, useState } from 'react';
import { getAllowedFeatures } from '../handlers/featureHandler';
import { generateControls } from '../handlers/controlHandler';
import { generateSubControls } from '../handlers/subcontrolHandler';
import { useGlobalState } from '../providers/GlobalContext';
import FeatureController from './FeatureController';
import ControlController from './ControlController';
import { ControlName } from '../types';
/**
 * DisplayController Component
 * 
 * This component is responsible for displaying the set of features and controls available to the user.
 * It fetches allowed features and controls based on the user's `packageType` and `role` and renders them using
 * the `FeatureController` and `ControlController` components.
 * 
 * @returns JSX.Element - A container rendering the feature and control components.
 */

const DisplayController: React.FC = () => {
  const { state, dispatch } = useGlobalState(); // Access global state and dispatch from context.
  const { isAuthenticated, role, packageType } = state; // Destructure necessary values from the state.

  // Effect to fetch allowed features and controls based on user's package and role.
  useEffect(() => {
    if (!isAuthenticated) return;

    // Get the features allowed for the current user based on their package type and role.
    const allowedFeatures = getAllowedFeatures(packageType, role);
    // Generate controls based on the allowed features and current user role.
    const allowedControls = generateControls(allowedFeatures, packageType, role);
    // Generate subcontrols for the allowed controls.
    const allowedSubControls = generateSubControls(allowedControls as ControlName[], packageType, role);

    // Dispatch actions to update the global state with the fetched features, controls, and subcontrols.
    dispatch({ type: 'SET_FEATURES', payload: allowedFeatures });
    dispatch({ type: 'SET_CONTROLS', payload: allowedControls });
    dispatch({ type: 'SET_SUBCONTROLS', payload: allowedSubControls });
  }, [isAuthenticated, role, packageType]); // Dependencies for re-running the effect when these values change.

  // If the user is not authenticated, do not render anything.
  if (!isAuthenticated) {
    return null;
  }

  // Render the feature controller with the allowed features and the control controller with the allowed controls.
  return (
    <>
      {/* Renders the set of available features */}
      <FeatureController features={state.features}/>
      {/* Renders the set of available controls */}
      <ControlController controls={state.controls} subControls={state.subControls} />
    </>
  );
};

export default DisplayController;
