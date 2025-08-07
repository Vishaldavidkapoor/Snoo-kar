import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';

test('Snapshot', () => {
  const tree = render(<App />);
  expect(tree.toJSON()).toMatchSnapshot();
});