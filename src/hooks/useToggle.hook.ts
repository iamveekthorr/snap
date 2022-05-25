import { useState, useCallback } from 'react';

const useToggle = (): [boolean, () => void] => {
  const [toggle, setToggle] = useState<boolean>(false);

  const doToggle = useCallback((): void => setToggle((prev) => !prev), []);

  return [toggle, doToggle];
};
export default useToggle;
