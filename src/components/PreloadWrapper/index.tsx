'use client';

import { useEffect, useState } from 'react';
import Preloader from '@/components/Preloader';

export const PreloadWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return <>{isLoading ? <Preloader /> : children}</>;
};
