import { useEffect } from "react";

export default function useKey(keyCode, callback) {
  useEffect(() => {
    function handleKeydown(event) {
      if (event.code !== keyCode) {
        return;
      }
      callback();
    }

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [keyCode, callback]);
}
