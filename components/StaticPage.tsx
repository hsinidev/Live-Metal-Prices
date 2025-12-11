import React from 'react';

interface StaticPageProps {
  title: string;
  children: React.ReactNode;
}

const StaticPage: React.FC<StaticPageProps> = ({ title, children }) => {
  return (
    <div className="max-w-4xl mx-auto bg-gray-800/50 border border-gray-700 rounded-xl p-6 md:p-8 shadow-lg backdrop-blur-sm">
      <h1 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-gray-200 to-yellow-500 mb-6">
        {title}
      </h1>
      <div className="text-gray-300 text-lg leading-relaxed space-y-6">
        {children}
      </div>
    </div>
  );
};

export default StaticPage;
