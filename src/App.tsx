import React, { useState } from 'react';
import { mockIncidents } from './data/mockIncidents';
import { Incident, SeverityFilter, SortDirection } from './types/incident';
import { generateIncidentId } from './utils/incidentUtils';

import Header from './components/Header';
import FilterBar from './components/FilterBar';
import IncidentList from './components/IncidentList';
import IncidentForm from './components/IncidentForm';

function App() {
  const [incidents, setIncidents] = useState<Incident[]>(mockIncidents);
  const [severityFilter, setSeverityFilter] = useState<SeverityFilter>('All');
  const [sortDirection, setSortDirection] = useState<SortDirection>('newest');

  const handleAddIncident = (incidentData: Omit<Incident, 'id'>) => {
    const newIncident: Incident = {
      ...incidentData,
      id: generateIncidentId(incidents)
    };
    
    setIncidents([newIncident, ...incidents]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          <IncidentForm onAddIncident={handleAddIncident} />
          
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Reported Incidents ({incidents.length})
            </h2>
            
            <FilterBar 
              severityFilter={severityFilter}
              setSeverityFilter={setSeverityFilter}
              sortDirection={sortDirection}
              setSortDirection={setSortDirection}
            />
            
            <div className="mt-4">
              <IncidentList 
                incidents={incidents}
                severityFilter={severityFilter}
                sortDirection={sortDirection}
              />
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-white mt-12 py-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} HumanChain AI Safety Initiative
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;