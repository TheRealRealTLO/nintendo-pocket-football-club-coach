
import React, { useState } from 'react';

interface TabsProps {
  defaultValue: string;
  className?: string;
  children: React.ReactNode;
  onValueChange?: (value: string) => void;
}

interface TabsListProps {
  className?: string;
  children: React.ReactNode;
}

interface TabsTriggerProps {
  value: string;
  className?: string;
  children: React.ReactNode;
}

interface TabsContentProps {
  value: string;
  className?: string;
  children: React.ReactNode;
}

interface TabsContextType {
  activeTab: string;
  setActiveTab: (value: string) => void;
}

const TabsContext = React.createContext<TabsContextType | undefined>(undefined);

export const Tabs: React.FC<TabsProps> = ({ defaultValue, className = "", children, onValueChange }) => {
  const [activeTab, setActiveTab] = useState<string>(defaultValue);
  
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    if (onValueChange) {
      onValueChange(value);
    }
  };
  
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab: handleTabChange }}>
      <div className={`w-full ${className}`}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

export const TabsList: React.FC<TabsListProps> = ({ className = "", children }) => {
  return (
    <div className={`grid h-10 items-center justify-center rounded-md bg-muted p-1 ${className}`}>
      {children}
    </div>
  );
};

export const TabsTrigger: React.FC<TabsTriggerProps> = ({ value, className = "", children }) => {
  const context = React.useContext(TabsContext);
  
  if (!context) {
    throw new Error("TabsTrigger must be used within a Tabs component");
  }
  
  const { activeTab, setActiveTab } = context;
  const isActive = activeTab === value;
  
  return (
    <button
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus:outline-none disabled:opacity-50 ${
        isActive 
          ? "bg-white text-black shadow-sm" 
          : "hover:bg-white/50 hover:text-black"
      } ${className}`}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </button>
  );
};

export const TabsContent: React.FC<TabsContentProps> = ({ value, className = "", children }) => {
  const context = React.useContext(TabsContext);
  
  if (!context) {
    throw new Error("TabsContent must be used within a Tabs component");
  }
  
  const { activeTab } = context;
  
  if (activeTab !== value) {
    return null;
  }
  
  return (
    <div className={`mt-2 ${className}`}>
      {children}
    </div>
  );
};
