import React from 'react';
import { PomodotoTimer } from './components/pomodoro-timer';

function App(): JSX.Element {
  return (
    <div className="container">
      <PomodotoTimer
        pomodoroTime={10}
        shortRestTime={2}
        longRestTime={5}
        cycles={4}
      />
    </div>
  );
}

export default App;
