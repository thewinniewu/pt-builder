'use client'

import ExerciseItem, { Exercise, EXERCISE_TYPES } from './components/ExerciseItem'
import { useState } from 'react';

const EXERCISES = [
  {
    type: EXERCISE_TYPES.heelSlides,
    nReps: 10,
    nSets: 2,
    secsPerRep: 10,
    secsRest: 5,
    week: 2,
  },
  {
    type: EXERCISE_TYPES.hamstringCurls,
    nReps: 12,
    nSets: 2,
    secsPerRep: 8,
    secsRest: 5,
    week: 2,
  },
  {
    type: EXERCISE_TYPES.calfRaise,
    nReps: 15,
    nSets: 2,
    secsPerRep: 6,
    secsRest: 5,
    week: 3,
  },
  {
    type: EXERCISE_TYPES.sideLyingHipAbduction,
    nReps: 12,
    nSets: 2,
    secsPerRep: 8,
    secsRest: 5,
    week: 2,
  },
  {
    type: EXERCISE_TYPES.gluteBridges,
    nReps: 10,
    nSets: 2,
    secsPerRep: 10,
    secsRest: 5,
    week: 2,
  },
  {
    type: EXERCISE_TYPES.quadSets,
    nReps: 10,
    nSets: 3,
    secsPerRep: 5,
    secsRest: 5,
    week: 1,
  },
  {
    type: EXERCISE_TYPES.legRaise,
    nReps: 10,
    nSets: 3,
    secsPerRep: 8,
    secsRest: 10,
    week: 2,
  },
  {
    type: EXERCISE_TYPES.kneeExtension,
    nReps: 12,
    nSets: 2,
    secsPerRep: 6,
    secsRest: 10,
    week: 1,
  },
  {
    type: EXERCISE_TYPES.miniSquat,
    nReps: 10,
    nSets: 3,
    secsPerRep: 8,
    secsRest: 10,
    week: 3,
  },
  {
    type: EXERCISE_TYPES.stepUp,
    nReps: 12,
    nSets: 2,
    secsPerRep: 6,
    secsRest: 10,
    week: 3,
  },
  {
    type: EXERCISE_TYPES.stationaryBike,
    nReps: 0, // Set to 0 as it is a duration-based exercise
    nSets: 1, // Only one set for stationary bike exercise
    secsPerRep: 0, // No reps for stationary bike exercise
    secsRest: 0, // No rest for stationary bike exercise
    week: 4,
  },
  {
    type: EXERCISE_TYPES.anklePumps,
    nReps: 10,
    nSets: 5,
    secsPerRep: 3,
    secsRest: 10,
    week: 1
  }
] as Exercise[]

export default function Home() {
  const [selectedWeek, setSelectedWeek] = useState<number>(1);

  const exerciseItems = EXERCISES.filter((e) => e.week && e.week <= selectedWeek).map((e, i) => {
   return (<div key={i} className="mb-4"><ExerciseItem {...e} /></div>)
  });
  const handleWeekToggle = (week: number) => {
    setSelectedWeek(week);
  };


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

 
      <div className="main-body">
      <div>
        <button className="m-2 bg-blue-500 rounded-lg px-4 py-2 text-white font-semibold" onClick={() => handleWeekToggle(1)}>Week 1</button>
        <button className="m-2 bg-blue-500 rounded-lg px-4 py-2 text-white font-semibold"  onClick={() => handleWeekToggle(2)}>Week 2</button>
        <button className="m-2 bg-blue-500 rounded-lg px-4 py-2 text-white font-semibold"  onClick={() => handleWeekToggle(3)}>Week 3</button>
        <button className="m-2 bg-blue-500 rounded-lg px-4 py-2 text-white font-semibold"  onClick={() => handleWeekToggle(4)}>Week 4</button>
      </div>
      {exerciseItems}
      </div>

    </main>
  )
}
