import React from 'react';
import { useParams } from 'react-router-dom';

const SubjectPage = () => {
  const { subjectName } = useParams();

  const renderContent = () => {
    switch (subjectName) {
      case 'math':
        return <p>Welcome to Math! Let's learn numbers and formulas.</p>;
      case 'biology':
        return <p>Welcome to Biology! Let's explore the living world.</p>;
      default:
        return <p>Select a subject to learn!</p>;
    }
  };

  return (
    <div>
      <h1>{subjectName.charAt(0).toUpperCase() + subjectName.slice(1)} Page</h1>
      {renderContent()}
    </div>
  );
};

export default SubjectPage;
