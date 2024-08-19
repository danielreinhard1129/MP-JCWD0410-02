import React from 'react';

export const Table: React.FC<React.HTMLProps<HTMLTableElement>> = ({ className, ...props }) => (
  <table className={`w-full text-sm text-left text-gray-500 ${className}`} {...props} />
);

export const TableHeader: React.FC<React.HTMLProps<HTMLTableSectionElement>> = ({ className, ...props }) => (
  <thead className={`text-xs text-gray-700 uppercase bg-gray-50 ${className}`} {...props} />
);

export const TableBody: React.FC<React.HTMLProps<HTMLTableSectionElement>> = ({ className, ...props }) => (
  <tbody className={className} {...props} />
);

export const TableRow: React.FC<React.HTMLProps<HTMLTableRowElement>> = ({ className, ...props }) => (
  <tr className={`bg-white border-b ${className}`} {...props} />
);

export const TableHead: React.FC<React.HTMLProps<HTMLTableCellElement>> = ({ className, ...props }) => (
  <th scope="col" className={`px-6 py-3 ${className}`} {...props} />
);

export const TableCell: React.FC<React.HTMLProps<HTMLTableCellElement>> = ({ className, ...props }) => (
  <td className={`px-6 py-4 ${className}`} {...props} />
);