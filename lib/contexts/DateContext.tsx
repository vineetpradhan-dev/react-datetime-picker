import React, { createContext, useContext } from "react";

interface DateContextType {
  date: Date;
  setDate: (val: Date) => void;
}
interface Props {
  date: Date;
  setDate: (val: Date) => void;
  children: React.ReactNode;
}
const DateContext = createContext<DateContextType | undefined>(undefined);

export const DateProvider = ({ date, setDate, children }: Props) => {
  return (
    <DateContext.Provider value={{ date, setDate }}>
      {children}
    </DateContext.Provider>
  );
};

export const useDateContext = (): DateContextType => {
  const context = useContext(DateContext);
  if (!context) {
    throw new Error("useDate must be used within a DateProvider");
  }
  return context;
};
