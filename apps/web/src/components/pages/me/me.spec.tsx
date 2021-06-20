import { render } from '@testing-library/react';

import Me from './me';

describe('Me', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Me />);
    expect(baseElement).toBeTruthy();
  });
});
