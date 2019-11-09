import React from 'react';
import ReactDOM from 'react-dom';
import DynamicType from './DynamicType.component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DynamicType />, div);
  ReactDOM.unmountComponentAtNode(div);
});