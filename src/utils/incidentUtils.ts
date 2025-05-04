import { Incident } from '../types/incident';

export const generateIncidentId = (incidents: Incident[]): number => {
  if (incidents.length === 0) return 1;
  return Math.max(...incidents.map(incident => incident.id)) + 1;
};