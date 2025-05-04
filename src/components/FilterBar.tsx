import React from 'react';
import { SeverityFilter, SortDirection } from '../types/incident';
import { Filter, SortDesc, SortAsc } from 'lucide-react';

interface FilterBarProps {
  severityFilter: SeverityFilter;
  setSeverityFilter: (filter: SeverityFilter) => void;
  sortDirection: SortDirection;
  setSortDirection: (direction: SortDirection) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  severityFilter,
  setSeverityFilter,
  sortDirection,
  setSortDirection,
}) => {
  const severityOptions: SeverityFilter[] = ['All', 'Low', 'Medium', 'High'];

  const handleFilterChange = (filter: SeverityFilter) => {
    setSeverityFilter(filter);
  };

  const toggleSortDirection = () => {
    setSortDirection(sortDirection === 'newest' ? 'oldest' : 'newest');
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-3 sm:space-y-0 p-4 bg-white rounded-lg shadow-sm">
      <div className="flex items-center space-x-2">
        <Filter size={18} className="text-gray-500" />
        <span className="text-sm font-medium text-gray-700">Filter by Severity:</span>
        <div className="flex space-x-1">
          {severityOptions.map((option) => (
            <button
              key={option}
              onClick={() => handleFilterChange(option)}
              className={`px-3 py-1.5 text-sm rounded-md transition-colors duration-200 ${
                severityFilter === option
                  ? 'bg-blue-100 text-blue-700 font-medium'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      <button
        onClick={toggleSortDirection}
        className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors duration-200"
      >
        {sortDirection === 'newest' ? (
          <>
            <SortDesc size={18} />
            <span className="text-sm font-medium">Newest First</span>
          </>
        ) : (
          <>
            <SortAsc size={18} />
            <span className="text-sm font-medium">Oldest First</span>
          </>
        )}
      </button>
    </div>
  );
};

export default FilterBar;