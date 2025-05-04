import React from 'react';
import { AlertTriangle } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 shadow-md">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center">
          <AlertTriangle className="text-white h-8 w-8 mr-3" />
          <div>
            <h1 className="text-2xl font-bold text-white">AI Safety Incident Dashboard</h1>
            <p className="text-blue-100 mt-1">
              HumanChain's central hub for monitoring and reporting AI safety issues
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;