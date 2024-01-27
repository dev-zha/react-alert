import React, { useState } from 'react';
import AlertsContext from './AlertContext';
import AlertsWrapper from './AlertsWrapper';
import AlertCard from './AlertCard';
import { TAlert } from './type';

interface AlertsProviderProps {
  children: React.ReactNode;
}

export default function AlertsProvider({ children }: AlertsProviderProps) {
  const [alerts, setAlerts] = useState<TAlert[]>([]);

  const addAlert = (message: string, timeout?: number) => {
    const id = new Date().getTime().toString();
    const alert: TAlert = {
      id,
      message: message,
      timeout: timeout || 3,
    };

    setAlerts((prev) => [alert, ...prev]);
    return id;
  };

  const dismissAlert = (id: string) => {
    setAlerts((prev) => prev.filter((alert) => alert.id !== id));
  };

  return (
    <AlertsContext.Provider value={{ addAlert }}>
      {children}
      <AlertsWrapper>
        {alerts.map((alert) => (
          <AlertCard
            key={alert.id}
            message={alert.message}
            timeout={alert.timeout}
            onDismiss={() => {
              dismissAlert(alert.id);
            }}
          />
        ))}
      </AlertsWrapper>
    </AlertsContext.Provider>
  );
}
