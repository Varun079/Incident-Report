import React from 'react';
import { Incident, SeverityFilter, SortDirection } from '../types/incident';
import IncidentItem from './IncidentItem';

interface IncidentListProps {
  incidents: Incident[];
  severityFilter: SeverityFilter;
  sortDirection: SortDirection;
}

const IncidentList: React.FC<IncidentListProps> = ({ 
  incidents, 
  severityFilter, 
  sortDirection 
}) => {
  // Apply filters
  const filteredIncidents = incidents.filter(incident => 
    severityFilter === 'All' || incident.severity === severityFilter
  );

  // Apply sorting
  const sortedIncidents = [...filteredIncidents].sort((a, b) => {
    const dateA = new Date(a.reported_at).getTime();
    const dateB = new Date(b.reported_at).getTime();
    return sortDirection === 'newest' ? dateB - dateA : dateA - dateB;
  });

  if (sortedIncidents.length === 0) {
    return (
      <div className="text-center py-10 bg-white rounded-lg shadow-sm">
        <p className="text-gray-500">No incidents found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {sortedIncidents.map(incident => (
        <IncidentItem key={incident.id} incident={incident} />
      ))}
    </div>
  );
};

export default IncidentList;