import React, { useState } from 'react';

export default function ExerciseInput({ onAddExercise }: {onAddExercise: any}): React.JSX.Element {
    const [exercise, setExercise] = useState({
      type: { title: '', description: '' },
      nReps: 0,
      nSets: 0,
      secsPerRep: 0,
      secsRest: 0,
      week: 1
    });
  
    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
      const { name, value } = e.target;
      if (['title', 'description'].includes(name)) {
        setExercise((prevExercise: any) => ({
            ...prevExercise,
            type: {
                ...prevExercise.type,
                [name]: value
            }
        }));
      } else {
        setExercise((prevExercise: any) => ({
            ...prevExercise,
            [name]: value,
        }));
      }
    };
  
    const handleSubmit = (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      onAddExercise(exercise);
      setExercise({
        type: { title: '', description: '' },
        nReps: 0,
        nSets: 0,
        secsPerRep: 0,
        secsRest: 0,
        week: 1
      });
    };
  
    return (
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Add New Exercise</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">
            Title:
            <input
              type="text"
              name="title"
              value={exercise.type.title}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </label>
          <label className="block mb-2">
            Description:
            <input
              type="text"
              name="description"
              value={exercise.type.description}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </label>
          <label className="block mb-2">
            Reps:
            <input
              type="number"
              name="nReps"
              value={exercise.nReps}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </label>
          <label className="block mb-2">
            Sets:
            <input
              type="number"
              name="nSets"
              value={exercise.nSets}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </label>
          <label className="block mb-2">
            Seconds per Rep:
            <input
              type="number"
              name="secsPerRep"
              value={exercise.secsPerRep}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </label>
          <label className="block mb-2">
            Seconds Rest:
            <input
              type="number"
              name="secsRest"
              value={exercise.secsRest}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </label>
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
            Add Exercise
          </button>
        </form>
      </div>
    );
  }
  