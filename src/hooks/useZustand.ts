import useZustandStore from "../store/zustand/zustandStore";

const useZustand = () => {
  const zustandStore = useZustandStore();
  return zustandStore;
};

export default useZustand;
