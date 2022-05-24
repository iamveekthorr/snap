import { useCallback, useEffect, useState } from 'react';

const useMediaQuery = (query: string): boolean => {
  const mediaQueryList = window.matchMedia(`(min-width: ${query})`);
  const [match, setMatch] = useState<boolean>(mediaQueryList.matches);

  const doChange = useCallback(
    () => setMatch(mediaQueryList.matches),
    [mediaQueryList.matches]
  );

  useEffect(() => {
    setMatch(match);
    mediaQueryList.addEventListener('change', doChange);

    return () => mediaQueryList.removeEventListener('change', doChange);
  }, [mediaQueryList, doChange, match]);
  return match;
};

export default useMediaQuery;
