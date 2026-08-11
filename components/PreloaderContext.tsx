"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface PreloaderContextType {
  isLoaded: boolean;
  setIsLoaded: (loaded: boolean) => void;
  shouldPlay: boolean;
  setShouldPlay: (play: boolean) => void;
}

const PreloaderContext = createContext<PreloaderContextType | undefined>(undefined);

export const PreloaderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldPlay, setShouldPlay] = useState(true);

  return (
    <PreloaderContext.Provider value={{ isLoaded, setIsLoaded, shouldPlay, setShouldPlay }}>
      {children}
    </PreloaderContext.Provider>
  );
};

export const usePreloader = () => {
  const context = useContext(PreloaderContext);
  if (!context) {
    throw new Error("usePreloader must be used within a PreloaderProvider");
  }
  return context;
};
