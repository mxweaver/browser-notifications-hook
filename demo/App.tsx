import React from 'react';
import { useBrowserNotifications } from '../lib';

export function App () {
  const browserNotifications = useBrowserNotifications();
  console.log(browserNotifications);

  return <h1>Hello world!</h1>
}