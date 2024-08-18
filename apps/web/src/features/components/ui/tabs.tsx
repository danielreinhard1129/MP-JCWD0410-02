import React, { createContext, useContext, useState } from 'react';

interface TabsContextType {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

export const Tabs: React.FC<{ children: React.ReactNode; defaultValue: string }> = ({ children, defaultValue }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div>{children}</div>
    </TabsContext.Provider>
  );
};

export const TabsList: React.FC<React.HTMLProps<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={`flex space-x-1 rounded-xl bg-blue-900/20 p-1 ${className}`} {...props} />
);

export const TabsTrigger: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { value: string }> = ({ className, value, ...props }) => {
  const context = useContext(TabsContext);
  if (!context) throw new Error('TabsTrigger must be used within Tabs');

  const { activeTab, setActiveTab } = context;

  return (
    <button
      className={`w-full rounded-lg py-2.5 text-sm font-medium leading-5 ${
        activeTab === value
          ? 'bg-white text-blue-700 shadow'
          : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
      } ${className}`}
      onClick={() => setActiveTab(value)}
      {...props}
    />
  );
};

export const TabsContent: React.FC<React.HTMLProps<HTMLDivElement> & { value: string }> = ({ value, className, ...props }) => {
  const context = useContext(TabsContext);
  if (!context) throw new Error('TabsContent must be used within Tabs');

  const { activeTab } = context;

  if (activeTab !== value) return null;

  return <div className={className} {...props} />;
};