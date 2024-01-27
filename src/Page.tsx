import { useAlert } from './alert';

export default function Page() {
  // Alert
  const { addAlert } = useAlert();

  const handleShowAlert = () => {
    const message = 'This is Normal Alert';
    addAlert(message);
  };

  const handleShow10sTimeoutAlert = () => {
    const message = 'This is 10 second timeout Alert';
    addAlert(message, 10);
  };

  const handleShow1sTimeoutAlert = () => {
    const message = 'This is 1 second timeout Alert';
    addAlert(message, 1);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-gray-800 text-4xl font-bold mb-4">Alert in React</h1>
      <p className="text-gray-500">
        Creating a custom Alert/Toast component in React without an external UI
        library involves using useState and useEffect hooks to manage visibility
        and duration. To ensure proper rendering, leverage React Portals with
        ReactDOM.createPortal for flexibility. Tailwind CSS can be integrated
        for quick and easy styling, allowing seamless customization based on
        specific design and functionality requirements. This approach provides a
        lightweight and customizable solution, tailored to your project's needs.
      </p>
      <div className="flex flex-wrap gap-8 mt-8">
        <button
          type="button"
          onClick={handleShowAlert}
          className="bg-blue-500 hover:bg-blue-700 text-white font-medium rounded-xl py-1.5 px-3"
        >
          Show Normal Alert
        </button>
        <button
          type="button"
          onClick={handleShow10sTimeoutAlert}
          className="bg-blue-500 hover:bg-blue-700 text-white font-medium rounded-xl py-1.5 px-3"
        >
          Show Timeout 10s Alert
        </button>
        <button
          type="button"
          onClick={handleShow1sTimeoutAlert}
          className="bg-blue-500 hover:bg-blue-700 text-white font-medium rounded-xl py-1.5 px-3"
        >
          Show Timeout 1s Alert
        </button>
      </div>
    </div>
  );
}
