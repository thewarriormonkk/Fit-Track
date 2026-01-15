import { useEffect, useState } from 'react';
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';


const Home = () => {
    const { workouts, dispatch } = useWorkoutsContext();
    const API_URL = import.meta.env.VITE_API_URL;

    useEffect(() => {
        async function fetchWorkouts() {
            const response = await fetch(API_URL);
            const data = await response.json();
            if (response.ok) {
                dispatch({ type: 'SET_WORKOUTS', payload: data });
            }
        }
        fetchWorkouts();
    }, [dispatch, API_URL]);

    return (
            <div className="home">
                <div className="workouts">
                    {workouts && workouts.map((workout) => (
                        <WorkoutDetails key={workout._id} workout={workout} />
                    ))}
                </div>
                <WorkoutForm />
            </div>
    );
}

export default Home;