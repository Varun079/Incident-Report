import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Incident } from '../types/incident';
import SeverityBadge from './SeverityBadge';

interface IncidentItemProps {
  incident: Incident;
}

const IncidentItem: React.FC<IncidentItemProps> = ({ incident }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 ${
        expanded ? 'shadow-md' : ''
      }`}
    >
      <div 
        className="p-4 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
        onClick={toggleExpanded}
      >
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-medium text-gray-900">{incident.title}</h3>
              <SeverityBadge severity={incident.severity} />
            </div>
            <p className="mt-1 text-sm text-gray-500">
              {formatDate(incident.reported_at)}
            </p>
          </div>
          <div className="flex items-center mt-3 sm:mt-0 sm:ml-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleExpanded();
              }}
              className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {expanded ? (
                <>
                  <ChevronUp size={16} className="mr-1" />
                  Hide Details
                </>
              ) : (
                <>
                  <ChevronDown size={16} className="mr-1" />
                  View Details
                </>
              )}
            </button>
          </div>
        </div>
      </div>
      {expanded && (
        <div className="p-4 bg-gray-50 border-t border-gray-100 animate-fadeIn">
          <p className="text-sm text-gray-700">{incident.description}</p>
        </div>
      )}
    </div>
  );
};

export default IncidentItem;