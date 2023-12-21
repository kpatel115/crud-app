// src/components/ExampleComponent.js
import React, { useEffect } from 'react';

const ExampleComponent = () => {
  useEffect(() => {
    // Example API request in a React component
    fetch('/api/test')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }, []); // Empty dependency array means this effect runs once after the component mounts

  return (
    <div>
      <h2>Example Component</h2>
    </div>
  );
};

export default ExampleComponent;
