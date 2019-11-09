import React from 'react';
import Button from './Button.component'

export default {
  title: 'Button',
};

export const text = () => <Button label={'Button Label'} />;
export const outline = () => <Button type={'outline'} label={'Button Label'} />;
