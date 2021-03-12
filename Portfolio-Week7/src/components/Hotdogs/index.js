import React, {useState} from 'react';

function Hotdogs() {
    const [sets, setSets] = useState(0);
    const [reps, setReps] = useState(0);
    return (
      <div>
        <h2>Hotdogs</h2>
        <h3>Eaten: {sets}</h3>
        <h3>Remaining: {reps}</h3>
        <button onClick={() => setSets(sets + 1)}>Eaten</button>
        <button onClick={() => setReps(reps + 1)}>Remaining</button>
        <button onClick={() => setSets(0) + setReps(0)}>Reset Counter</button>
      </div>
    );
  }

  export default Hotdogs;