import { useState, useEffect } from 'react';

const THRESHOLD = 160;

function isWindowYOffsetBelowThreshold() {
  const isBelow = window.pageYOffset >= THRESHOLD;

  return {
    isBelow
  };
}

export default function useIsBelow() {
  const [isBelow, setIsBelow] = useState(isWindowYOffsetBelowThreshold());

  useEffect(() => {
    function handleUserScroll() {
      setIsBelow(isWindowYOffsetBelowThreshold());
    }

    window.addEventListener('scroll', handleUserScroll);
    return () => window.removeEventListener('scroll', handleUserScroll);
  }, []);

  return isBelow;
}