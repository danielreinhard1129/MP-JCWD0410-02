import React, { createContext, useContext, useState } from 'react';

interface DialogContextType {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const DialogContext = createContext<DialogContextType | undefined>(undefined);

export const Dialog: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DialogContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </DialogContext.Provider>
  );
};

export const DialogTrigger: React.FC<{ children: React.ReactNode; asChild?: boolean }> = ({ children, asChild }) => {
  const context = useContext(DialogContext);
  if (!context) throw new Error('DialogTrigger must be used within Dialog');

  const { setIsOpen } = context;

  if (asChild) {
    return React.cloneElement(children as React.ReactElement, {
      onClick: () => setIsOpen(true),
    });
  }

  return <button onClick={() => setIsOpen(true)}>{children}</button>;
};

export const DialogContent: React.FC<React.HTMLProps<HTMLDivElement>> = ({ className, children, ...props }) => {
  const context = useContext(DialogContext);
  if (!context) throw new Error('DialogContent must be used within Dialog');

  const { isOpen, setIsOpen } = context;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div
        className={`bg-white rounded-lg shadow-xl p-6 w-full max-w-md ${className}`}
        {...props}
      >
        {children}
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          onClick={() => setIsOpen(false)}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export const DialogHeader: React.FC<React.HTMLProps<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={`mb-4 ${className}`} {...props} />
);

export const DialogTitle: React.FC<React.HTMLProps<HTMLHeadingElement>> = ({ className, ...props }) => (
  <h3 className={`text-lg font-medium leading-6 text-gray-900 ${className}`} {...props} />
);