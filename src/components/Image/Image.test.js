import React from 'react';
import ReactDOM from 'react-dom'
import Image from './Image.component'

it('render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Image />, div);
  ReactDOM.unmountComponentAtNode(div);

})