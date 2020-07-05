import { useState } from 'react';

export interface Options {
  automaticallyRequestPermission?: boolean;
}

const defaultOptions: Partial<Options> = {
  automaticallyRequestPermission: true,
}

export interface State {
  supported: boolean;
  permission?: NotificationPermission;
  maxActions?: number;
}

const getInitialState = (): State => 'Notification' in window
  ? {
    supported: true,
    permission: Notification.permission,
    maxActions: Notification.maxActions,
  }
  : {
    supported: false
  };

export function useBrowserNotifications(options: Options = {}): State {
  const [state, setState] = useState(getInitialState());

  const mergedOptions = {
    ...defaultOptions,
    ...options,
  };

  if (mergedOptions.automaticallyRequestPermission) {
    if (state.permission === 'default') {
      Notification.requestPermission().then((permission) => setState({ ...state, permission }));
    }
  }

  return state;
}