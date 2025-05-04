import React from 'react';

interface SeverityBadgeProps {
  severity: 'Low' | 'Medium' | 'High';
}

const SeverityBadge: React.FC<SeverityBadgeProps> = ({ severity }) => {
  const badgeClasses = {
    Low: 'bg-yellow-100 text-yellow-800 border border-yellow-200',
    Medium: 'bg-orange-100 text-orange-800 border border-orange-200',
    High: 'bg-red-100 text-red-800 border border-red-200',
  }[severity];

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${badgeClasses}`}>
      {severity}
    </span>
  );
};

export default SeverityBadge;