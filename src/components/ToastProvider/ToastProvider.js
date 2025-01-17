import React, { createContext, useMemo, useState } from "react";
import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastContext = createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  useEscapeKey(() => setToasts([]));

  function addToast(message, variant) {
    const newToast = {
      id: crypto.randomUUID(),
      message,
      variant,
    };
    setToasts((toasts) => [...toasts, newToast]);
  }

  function removeToast(id) {
    setToasts((toasts) => toasts.filter((t) => t.id !== id));
  }

  const value = useMemo(
    () => ({
      toasts,
      addToast,
      removeToast,
    }),
    [toasts]
  );

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
