import React, { useState } from 'react';
import './App.css';
import ConceptsList from './components/ConceptsList';
import AddConcept from './components/AddConcept';

function App() {
  const [concepts, setConcepts] = useState([
    'State Management with useState',
    'Props for Passing Data',
    'Effect Hook for Side Effects',
  ]);

  const addConcept = (newConcept) => {
    setConcepts([...concepts, newConcept]);
  };

  return (
    <div className="App">
      <h1>React Concepts</h1>
      <AddConcept addConcept={addConcept} />
      <ConceptsList concepts={concepts} />
    </div>
  );
}

export default App;
