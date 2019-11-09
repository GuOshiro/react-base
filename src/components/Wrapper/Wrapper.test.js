import React from 'react';
import ReactDOM from 'react-dom'
import Wrapper from './Wrapper.component'

it('render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Wrapper>Wrapper</Wrapper>, div);
  ReactDOM.unmountComponentAtNode(div);
})