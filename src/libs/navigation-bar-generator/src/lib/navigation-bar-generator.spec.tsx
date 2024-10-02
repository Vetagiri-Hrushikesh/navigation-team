import { render } from '@testing-library/react';

import NavigationBarGenerator from './navigation-bar-generator';

describe('NavigationBarGenerator', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavigationBarGenerator />);
    expect(baseElement).toBeTruthy();
  });
});
