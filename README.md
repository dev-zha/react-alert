# React Alert

## Overview

This project provides a simple and customizable solution for displaying toast notifications in `React` using `Vite` written with `TypeScript`, without relying on external UI libraries. The implementation utilizes React hooks, such as `useState` and `useEffect`, to manage the toast's visibility and duration. Additionally, `React Portals` are employed to render the alert/toast component outside the normal DOM hierarchy, ensuring flexibility and seamless integration.

## Features

1. **Customizable Toast:** Display non-intrusive notifications with control over appearance and behavior.

2. **React Portals Integration:** Utilize ReactDOM.createPortal for rendering the toast at a higher DOM level, avoiding potential conflicts.

3. **Tailwind CSS Styling:** Easily customize the toast component appearance using Tailwind CSS for quick and efficient styling.

4. **Global Alert Context:** Integration with `AlertContext` for managing global alert states.

## Getting Started

### Installation

To use this alert/toast component in your React project, clone or download the project repository. Copy the `alert` directory into your project. Ensure Tailwind CSS is integrated into your project for styling.

Import the `AlertProvider` in your main application file (e.g., `index.tsx` or `App.tsx`):

```tsx
import { AlertsProvider } from './alert';
import Page from './Page';

export default function App() {
  return (
    <AlertsProvider>
      <Page />
    </AlertsProvider>
  );
}
```

### Usage

Import `useAlert` hook in your React component file and call `addAlert` function:

```tsx
import { useAlert } from './alert';

export default function Page() {
  // Alert
  const { addAlert } = useAlert();

  const handleShowAlert = () => {
    const message = 'This is My Alert';
    addAlert(message);
  };

  const handleShowTimeoutAlert = () => {
    const message = 'This is 10 second Alert';
    const timeout = 10;
    addAlert(message, timeout);
  };

  return (
    <div>
      {/* Your other components and content */}
      <button onClick={handleShowAlert}>Show Alert</button>
      <button onClick={handleShowTimeoutAlert}>Show 10s Alert</button>
    </div>
  );
}
```

## Styling

Customize the appearance and behavior of the Alert component by modifying the corresponding React component file and adjusting styles using Tailwind CSS.

## Contributing

If you encounter any issues or have suggestions for improvements, please open an issue on the GitHub repository. Contributions are welcome!
