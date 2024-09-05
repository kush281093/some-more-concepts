import React, { useState } from 'react';

function AddConcept({ addConcept }) {
  const [newConcept, setNewConcept] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newConcept.trim()) {
      addConcept(newConcept);
      setNewConcept('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newConcept}
        onChange={(e) => setNewConcept(e.target.value)}
        placeholder="Enter a new concept"
      />
      <button type="submit">Add Concept</button>
    </form>
  );
}

export default AddConcept;