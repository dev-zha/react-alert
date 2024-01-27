import { createContext } from 'react';

export type AlertsContextType = {
  addAlert: (message: string, timeout?: number) => void;
};

const AlertsContext = createContext<AlertsContextType | null>(null);

export default AlertsContext;
