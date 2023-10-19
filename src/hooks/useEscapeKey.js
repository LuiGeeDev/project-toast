import useKey from "./useKey";

export default function useEscapeKey(callback) {
  useKey("Escape", callback);
}
