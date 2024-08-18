import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ className, children, ...props }) => (
  <div className={`bg-white rounded-lg border border-gray-200 shadow-md ${className}`} {...props}>
    {children}
  </div>
);

export const CardHeader: React.FC<CardProps> = ({ className, children, ...props }) => (
  <div className={`p-5 border-b border-gray-200 ${className}`} {...props}>
    {children}
  </div>
);

export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ className, children, ...props }) => (
  <h5 className={`text-xl font-bold tracking-tight text-gray-900 ${className}`} {...props}>
    {children}
  </h5>
);

export const CardContent: React.FC<CardProps> = ({ className, children, ...props }) => (
  <div className={`p-5 ${className}`} {...props}>
    {children}
  </div>
);