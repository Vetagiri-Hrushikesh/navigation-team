import React, { ChangeEvent } from 'react';
import { useGlobalState } from '../../../providers/GlobalContext';

const MenuText: React.FC = () => {
  const { state, dispatch } = useGlobalState();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newText = event.target.value;
    dispatch({ type: 'SET_MENU_TEXT', payload: newText });
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
