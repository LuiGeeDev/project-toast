import React, { createContext, useMemo, useState } from "react";

export const ToastContext = createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

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

  function dismissAllToasts() {
    setToasts([]);
  }

  const value = useMemo(
    () => ({
      toasts,
      addToast,
      removeToast,
      dismissAllToasts,
    }),
    [toasts]
  );

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
