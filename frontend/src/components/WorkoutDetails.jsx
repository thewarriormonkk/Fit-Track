import {useWorkoutsContext} from '../hooks/useWorkoutsContext';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({ workout }) => {
    const { dispatch } = useWorkoutsContext();

    const API_URL = import.meta.env.VITE_API_URL;
    const workout_id = workout._id;

    // delete workout
    const handleDelete = async () => {
        const response = await fetch(`${API_URL}/${workout_id}`, {
            method: 'DELETE'
        });
        if (response.ok) {
            dispatch({ type: 'DELETE_WORKOUT', payload: workout_id });
        }
    }
    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load (kg): </strong>{workout.load}</p>
            <p><strong>Number of reps: </strong>{workout.reps}</p>
            <p>{formatDistanceToNow(new Date(workout.createdAt), { addSufix: true })}</p>
            <span className='material-symbols-outlined' onClick={handleDelete}>
                delete
            </span>
        </div>
    );
}

export default WorkoutDetails;