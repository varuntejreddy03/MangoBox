import React, { createContext, useContext, useState, useEffect } from 'react';

export type Order = {
  id: string;
  stage: string;
  variety: string;
  yield: string;
  price: string;
  customerDetails: {
    name: string;
    phone: string;
    area: string;
    gifting: boolean;
  };
};

interface OrderContextProps {
  order: Order | null;
  setOrder: (order: Order | null) => void;
}

const OrderContext = createContext<OrderContextProps | undefined>(undefined);

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [order, setOrder] = useState<Order | null>(() => {
    const saved = localStorage.getItem('mangobox_order');
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (order) {
      localStorage.setItem('mangobox_order', JSON.stringify(order));
    } else {
      localStorage.removeItem('mangobox_order');
    }
  }, [order]);

  return (
    <OrderContext.Provider value={{ order, setOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useOrder = () => {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};
