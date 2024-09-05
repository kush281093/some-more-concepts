import React, { useEffect } from 'react';

function ConceptsList({ concepts }) {
  useEffect(() => {
    console.log("ConceptsList component rendered or updated");
  }, [concepts]);

  return (
    <div>
      <h2>Learned Concepts</h2>
      <ul>
        {concepts.length === 0 ? (
          <li>No concepts learned yet.</li>
        ) : (
          concepts.map((concept, index) => (
            <li key={index}>{concept}</li>
          ))
        )}
      </ul>
    </div>
  );
}

export default ConceptsList;