'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';

interface BookingModalContextType {
  isOpen: boolean;
  openBookingModal: (initialConfig?: string) => void;
  closeBookingModal: () => void;
  selectedConfig: string;
}

const BookingModalContext = createContext<BookingModalContextType>({
  isOpen: false,
  openBookingModal: () => {},
  closeBookingModal: () => {},
  selectedConfig: '3 BHK Sanctuary',
});

export const useBookingModal = () => useContext(BookingModalContext);

export function BookingModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedConfig, setSelectedConfig] = useState('3 BHK Sanctuary');

  const openBookingModal = (config?: string) => {
    if (config) setSelectedConfig(config);
    setIsOpen(true);
  };

  const closeBookingModal = () => {
    setIsOpen(false);
  };

  return (
    <BookingModalContext.Provider
      value={{
        isOpen,
        openBookingModal,
        closeBookingModal,
        selectedConfig,
      }}
    >
      {children}
    </BookingModalContext.Provider>
  );
}
