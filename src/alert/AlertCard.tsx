import { useEffect } from 'react';

interface AlertCardProps {
  message: string;
  timeout: number;
  onDismiss: () => void;
}

export default function AlertCard({
  message,
  timeout,
  onDismiss,
}: AlertCardProps) {
  useEffect(() => {
    if (timeout > 0 && onDismiss) {
      const timer = setTimeout(() => {
        onDismiss();
      }, timeout * 1000);

      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCloseClick = () => {
    onDismiss();
  };

  return (
    <div className="inline-flex justify-between gap-1 bg-blue-500/20 backdrop-blur border border-blue-300 rounded-lg px-4 py-3 shadow-md transition ease-in-out delay-1000">
      <p className="text-sm">{message}</p>
      <button
        onClick={handleCloseClick}
        className="text-gray-500 hover:text-gray-700 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}
