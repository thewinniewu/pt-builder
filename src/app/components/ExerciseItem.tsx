import Timer from "./Timer"

export const EXERCISE_TYPES = {
   heelSlides: {
     title: 'Heel Slides (Knee Flexion)',
     description: 'Rehab exercise for knee flexion'
   },
      hamstringCurls: {
        title: 'Hamstring Curls (Hamstring Strengthening)',
        description: 'Rehab exercise for hamstring strengthening',
   
      },
      calfRaise: {
        title: 'Standing Calf Raises (Calf Strengthening)',
        description: 'Rehab exercise for calf strengthening',  
      },
      sideLyingHipAbduction: {
        title: 'Side-Lying Hip Abduction (Hip Strengthening)',
        description: 'Rehab exercise for hip strengthening',
   
      },
      gluteBridges: {
        title: 'Glute Bridges (Glute Strengthening)',
        description: 'Rehab exercise for glute strengthening',
      },
      quadSets: {
        title: 'Quad Sets',
        description: 'Contract and engage the quadriceps muscles while sitting or lying down.',
      },
      legRaise: {
        title: 'Straight Leg Raises (Supine)',
        description: 'Lift the leg straight while lying on your back, engaging the quadriceps muscles.',
      },
      kneeExtension: {
        title: 'Terminal Knee Extension',
        description: 'Sit on a chair with your feet resting on the floor. Extend your knee as much as possible.',
      },
      miniSquat: {
        title: 'Mini Squats (Partial Squats)',
        description: 'Stand with feet shoulder-width apart, perform a partial squat by bending your knees and hips.',
      },
      stepUp: {
        title: 'Step-Ups',
        description: 'Step up onto a sturdy platform or step with the operated leg, then step back down.',
      },
      stationaryBike: {
        title: 'Stationary Bike (Low Resistance)',
        description: 'Perform a controlled cycling motion on a stationary bike with low resistance.',
      },
      anklePumps: {
        title: 'Ankle Pumps',
        description: 'While lying down, move your ankle up and down, flexing and extending the foot.'
      }
    
}

export type ExerciseType = {
    title: string,
    description: string,
}

export type Exercise = {
    type: ExerciseType,
    nReps: number,
    nSets: number,
    secsPerRep: number,
    secsRest: number,
    week: number | null
}

export default function ExerciseItem(exercise : Exercise) {
    const {
        type,
        nReps,
        nSets,
        secsPerRep,
        secsRest 
    } = exercise

    return (
        <div className="bg-white rounded-lg shadow-md p-4">
        <h4 className="text-xl font-semibold mb-2">{type.title}</h4>
        <p className="text-gray-600 mb-4">{type.description}</p>
          {/* <button onClick={() => startExercise(exercise)} /> */}
        <Timer reps={nReps} seconds={secsPerRep} sets={nSets} rest={secsRest} />
    </div>
    )
}