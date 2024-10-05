import React, { useEffect, useState } from "react";
import {
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";

interface AlertProps {
  message: string;
  onClose: () => void;
  level: "error" | "warning" | "success"; // Updated from color to level
  duration?: number; // Duration in milliseconds
}

const Alert: React.FC<AlertProps> = ({
  message,
  onClose,
  level,
  duration = 3000, // Default duration is 3000 ms (3 seconds)
}) => {
  const [visible, setVisible] = useState(true);

  // Use effect to handle auto-hide
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose(); // Call the onClose prop after fading out
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  // Return early if the alert is not visible
  if (!visible) return null;

  // Mapping levels to class names
  const levelClasses = {
    error: {
      background: "bg-red-50",
      text: "text-red-800",
      icon: "text-red-400",
      button: "text-red-500 hover:bg-red-100 focus:ring-red-600",
      focusRingOffset: "focus:ring-offset-red-50",
    },
    success: {
      background: "bg-green-50",
      text: "text-green-800",
      icon: "text-green-400",
      button: "text-green-500 hover:bg-green-100 focus:ring-green-600",
      focusRingOffset: "focus:ring-offset-green-50",
    },
    warning: {
      background: "bg-yellow-50",
      text: "text-yellow-800",
      icon: "text-yellow-400",
      button: "text-yellow-500 hover:bg-yellow-100 focus:ring-yellow-600",
      focusRingOffset: "focus:ring-offset-yellow-50",
    },
  };

  const { background, text, icon, button, focusRingOffset } =
    levelClasses[level];

  return (
    <div
      className={`fixed top-4 right-4 transition-opacity duration-300 ease-in-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className={`${background} rounded-md p-4 shadow-lg max-w-xs w-full`}>
        <div className="flex">
          <div className="flex-shrink-0">
            {level === "error" ? (
              <ExclamationTriangleIcon
                aria-hidden="true"
                className={`h-5 w-5 ${icon}`}
              />
            ) : level === "success" ? (
              <CheckCircleIcon
                aria-hidden="true"
                className={`h-5 w-5 ${icon}`}
              />
            ) : (
              <ExclamationCircleIcon
                aria-hidden="true"
                className={`h-5 w-5 ${icon}`}
              />
            )}
          </div>
          <div className="ml-3 flex-1">
            <p className={`text-sm font-medium ${text}`}>{message}</p>
          </div>
          <div className="ml-auto pl-3">
            <div className="-mx-1.5 -my-1.5">
              <button
                onClick={() => {
                  setVisible(false);
                  onClose();
                }}
                type="button"
                className={`inline-flex rounded-md ${background} p-1.5 ${button} focus:outline-none focus:ring-2 ${focusRingOffset}`}
              >
                <span className="sr-only">Dismiss</span>
                <XMarkIcon aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
