import { useState } from 'react';

function WorkoutForm() {
    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState(null);

    const API_URL = import.meta.env.VITE_API_URL;

    async function handleSubmit(e) {
        e.preventDefault();
        const payload = { title, reps, load };
        const headers = {'Content-Type': 'application/json'};
        const response = await fetch(API_URL, {       
            method: 'POST', 
            headers,
            body: JSON.stringify(payload) 
        });
        const data = await response.json();

        if (!response.ok) {
            setError(data.message);
        }

        if (response.ok) {
            setError(null);
            setTitle('');
            setReps('');
            setLoad('');
            console.log('New Workout Added: ', data);
        }
        


    }
    return (
            <form className="create" onSubmit={handleSubmit}>
                <h3>Add a New Workout</h3>

                <label>Workout Title: </label>
                <input 
                    type="text" 
                    onChange={(e) => setTitle(e.target.value)} 
                    value={title} 
                />
                <label>Number of Reps: </label>
                <input 
                    type="number" 
                    onChange={(e) => setReps(e.target.value)} 
                    value={reps}
                />
                <label>Load (in kg): </label>
                <input 
                    type="number" 
                    onChange={(e) => setLoad(e.target.value)}
                    value={load}
                />
                <button>Add Workout</button>
                {error && <div className='error'>{error}</div>}
            </form>
    );
}

export default WorkoutForm;