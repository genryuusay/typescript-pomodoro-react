import React from 'react';
import { useInterval } from '../hooks/use-interval';
import { Button } from './button';
import { Timer } from './timer';

interface Props {
  pomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}

export function PomodotoTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = React.useState(props.pomodoroTime);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return (
    <div className="pomodoro">
      <h2>You are: Working</h2>
      <Timer mainTime={mainTime} />
      <div className="controls">
        <Button text="teste" onClick={() => console.log(1)}></Button>
        <Button text="teste" onClick={() => console.log(1)}></Button>
        <Button text="teste" onClick={() => console.log(1)}></Button>
      </div>
      <div className="details">
        <p> Testando: ashuashu aushuah sauhsuasu husha</p>
        <p> Testando: ashuashu aushuah sauhsuasu husha</p>
        <p> Testando: ashuashu aushuah sauhsuasu husha</p>
        <p> Testando: ashuashu aushuah sauhsuasu husha</p>
      </div>
    </div>
  );
}
