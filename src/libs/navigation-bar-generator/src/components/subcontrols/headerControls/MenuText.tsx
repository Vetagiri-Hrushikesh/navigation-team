import React, { ChangeEvent } from 'react';
import { useGlobalState } from '../../../providers/GlobalContext';
/**
 * MenuText Component
 * 
 * This component provides an input field for the user to enter menu text.
 * It uses the global state to manage the current value of the menu text and dispatches changes when the user types.
 * 
 * @returns JSX.Element - An input field to modify the menu text in the global state.
 */
const MenuText: React.FC = () => {
  const { state, dispatch } = useGlobalState(); // Access global state and dispatch function via custom hook.

  // Handles input change events by dispatching the updated text to the global state.
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newText = event.target.value;
    dispatch({ type: 'SET_MENU_TEXT', payload: newText });  // Dispatch an action to update the global state with the new menu text.

  };

  return (
    <div>
      <label htmlFor="menu-text-input">Menu Text: </label>
      <input
        id="menu-text-input"
        type="text"
        value={state.menuTextValue}
        onChange={handleInputChange}
        placeholder="Enter menu text"
      />
    </div>
  );
};

export default MenuText;
