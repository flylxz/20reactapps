import React, { useCallback, useEffect, useState } from 'react';
import { useStopwatch } from 'react-timer-hook';
import { useSpeechSynthesis } from 'react-speech-kit';

import './WebSpeech.scss';

export const WebSpeech = () => {
  const [timers, setTimers] = useState([
    { time: 2, text: 'this is my message' },
    { time: 5, text: 'hello' },
    { time: 8, text: 'whats up' },
  ]);

  const { seconds, isRunning, start, reset } = useStopwatch();

  const { speak, speaking, supported, voices } = useSpeechSynthesis();

  const doReset = useCallback(() => reset(), []);
  const doSpeak = useCallback((...args) => speak(...args), []);

  useEffect(() => {
    timers.find((timer) =>
      timer.time === seconds
        ? speak({ text: timer.text, voice: voices[3] })
        : null
    );

    if (seconds > timers[timers.length - 1].time) reset();

    // return () => cancel();
  }, [seconds, timers, doReset, doSpeak]);

  const updateTimers = (idx, time, text) => {
    const newTimers = [...timers];
    newTimers[idx] = {
      time,
      text,
    };

    setTimers(newTimers);
  };

  const addTimer = () => {
    const newTimers = [...timers, { time: 100, text: 'world' }];
    setTimers(newTimers);
  };

  if (!supported) {
    return <div>Your browser is not supported</div>;
  }

  return (
    <div className='web-speech-app'>
      <h2>Talk the Talk</h2>

      <div className='timers'>
        {/* timers go here */}
        {timers.map((timer, idx) => (
          <TimerSlot
            key={timer.text}
            timer={timer}
            idx={idx}
            updateTimers={updateTimers}
          />
        ))}

        <button className='add-button' onClick={addTimer}>
          Add
        </button>
      </div>

      {/* seconds */}
      <h2>{seconds}</h2>

      {/* buttons */}
      <div className='buttons'>
        {!isRunning && (
          <button className='start-button' onClick={start}>
            Start
          </button>
        )}

        {isRunning && (
          <button className='stop-button' onClick={reset}>
            Stop
          </button>
        )}

        {speaking && <p>I am speaking...</p>}
      </div>
    </div>
  );
};

const TimerSlot = ({ timer, idx, updateTimers }) => {
  const [time, setTime] = useState(timer.time);
  const [text, setText] = useState(timer.text);

  const handleBlur = () => {
    updateTimers(idx, time, text);
  };

  return (
    <form className='timer' key={idx}>
      <input
        type='number'
        value={time}
        onChange={(e) => setTime(+e.target.value)}
        onBlur={handleBlur}
      />
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
        onBlur={handleBlur}
      />
    </form>
  );
};
