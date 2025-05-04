import React, { useState } from 'react';
import { PlusCircle, X } from 'lucide-react';
import { Incident } from '../types/incident';

interface IncidentFormProps {
  onAddIncident: (incident: Omit<Incident, 'id'>) => void;
}

const IncidentForm: React.FC<IncidentFormProps> = ({ onAddIncident }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [severity, setSeverity] = useState<'Low' | 'Medium' | 'High'>('Medium');
  const [errors, setErrors] = useState<{title?: string; description?: string}>({});

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
    // Reset form and errors when hiding
    if (isFormVisible) {
      resetForm();
    }
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setSeverity('Medium');
    setErrors({});
  };

  const validateForm = (): boolean => {
    const newErrors: {title?: string; description?: string} = {};
    
    if (!title.trim()) {
      newErrors.title = 'Title is required';
    }
    
    if (!description.trim()) {
      newErrors.description = 'Description is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    const newIncident: Omit<Incident, 'id'> = {
      title,
      description,
      severity,
      reported_at: new Date().toISOString(),
    };
    
    onAddIncident(newIncident);
    resetForm();
    setIsFormVisible(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300">
      <div className="p-4">
        <button
          onClick={toggleForm}
          className={`w-full flex items-center justify-center px-4 py-2 border ${
            isFormVisible ? 'border-red-300 text-red-700 hover:bg-red-50' : 'border-blue-300 text-blue-700 hover:bg-blue-50'
          } rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200`}
        >
          {isFormVisible ? (
            <>
              <X size={18} className="mr-2" />
              Cancel Report
            </>
          ) : (
            <>
              <PlusCircle size={18} className="mr-2" />
              Report New Incident
            </>
          )}
        </button>
      </div>

      {isFormVisible && (
        <div className="px-4 pb-4 animate-slideDown">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={`mt-1 block w-full border ${
                  errors.title ? 'border-red-300' : 'border-gray-300'
                } rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                placeholder="Enter incident title"
              />
              {errors.title && (
                <p className="mt-1 text-sm text-red-600">{errors.title}</p>
              )}
            </div>

            <div>
              <label htmlFor="severity" className="block text-sm font-medium text-gray-700">
                Severity
              </label>
              <select
                id="severity"
                value={severity}
                onChange={(e) => setSeverity(e.target.value as 'Low' | 'Medium' | 'High')}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                id="description"
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className={`mt-1 block w-full border ${
                  errors.description ? 'border-red-300' : 'border-gray-300'
                } rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                placeholder="Provide detailed information about the incident"
              ></textarea>
              {errors.description && (
                <p className="mt-1 text-sm text-red-600">{errors.description}</p>
              )}
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
              >
                Submit Report
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default IncidentForm;