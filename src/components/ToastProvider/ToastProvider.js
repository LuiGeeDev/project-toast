import React, { createContext, useMemo, useState } from "react";

export const ToastContext = createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  function addToast(newToast) {
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
