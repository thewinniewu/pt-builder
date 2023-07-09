
'use client'

import React, { useState, useEffect } from 'react';

type TimerProps = {
  reps: number;
  seconds: number;
  sets: number;
  rest: number;
};

const Timer: React.FC<TimerProps> = ({ reps, seconds, sets, rest }) => {
  const [currentSet, setCurrentSet] = useState<number>(1);
  const [currentRep, setCurrentRep] = useState<number>(1);
  const [timerSeconds, setTimerSeconds] = useState<number>(seconds);
  const [restSeconds, setRestSeconds] = useState<number>(rest);
  const [isResting, setIsResting] = useState<boolean>(false);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isDone, setIsDone] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isRunning) {
      if (isResting) {
        interval = setInterval(() => {
          setRestSeconds((prevSeconds) => prevSeconds - 1);
        }, 1000);
      } else {
        interval = setInterval(() => {
          setTimerSeconds((prevSeconds) => prevSeconds - 1);
        }, 1000);
      }
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning, isResting]);

  useEffect(() => {
    if (timerSeconds === 0) {
      if (isResting) {
        if (currentSet === sets && currentRep === reps) {
          setIsDone(true);
        } else {
          setIsResting(false);
          setCurrentRep((prevRep) => prevRep + 1);
          setTimerSeconds(seconds);
        }
      } else if (currentRep === reps) {
        setIsResting(true);
        setCurrentRep(1);
        setRestSeconds(rest);
      } else {
        setCurrentRep((prevRep) => prevRep + 1);
        setTimerSeconds(seconds);
      }
    }
  }, [timerSeconds]);

  const handleButtonClick = () => {
    if (!isDone) {
      setIsRunning((prevRunning) => !prevRunning);
    }
  };

  const formatTime = (seconds: number): string => {
    const mins: number = Math.floor(seconds / 60);
    const secs: number = seconds % 60;

    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      {!isDone ? (
        <div>
          <div>Set: {currentSet} / {sets}</div>
          <div>Rep: {isResting ? 'REST' : `${currentRep} / ${reps}`}</div>
          <div>Time: {isResting ? formatTime(restSeconds) : formatTime(timerSeconds)}</div>
          <button className="bg-green-500 rounded-lg px-4 py-2 text-white font-semibold"
 onClick={handleButtonClick}>{isRunning ? 'Pause' : 'Start'}</button>
        </div>
      ) : (
        <div>Done!</div>
      )}
    </div>
  );
};

export default Timer;