import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [task, setTask] = useState("");
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);
  const [stop, setStop] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    let timer;
    if (start) {
      timer = setTimeout(() => {
        setTime(time + 1);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [start, time]);

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(Number(e.target.value));
  };

  const handleStartClick = () => {
    setStart(true);
  };

  const handleStopClick = () => {
    setStop(true);
    setStart(false);
    setTime(0);
    let tem = [...list],
      check = false;
    tem = tem.map((ele) => {
      const temp = ele.split(" ");
      if (temp[1] === task) {
        temp[2] = Number(temp[2]) + Number(time);
        check = true;
      }
      return temp.join(" ");
    });
    if (!check) {
      setList([...tem, tem.length + 1 + " " + task + " " + time]);
    } else {
      setList(tem);
    }
  };

  return (
    <div className="App">
      Task Name: <input value={task} onChange={handleTaskChange} />
      Time elapsed:
      <input value={time} onChange={handleTimeChange} />
      <button onClick={handleStartClick}>start</button>
      <button onClick={handleStopClick}>stop</button>
      <div>
        Amount:
        {list.reduce((acc, cur) => {
          return (acc += Number(cur.split(" ")[2]));
        }, 0)}
        {list.length !== 0 &&
          list.map((ele, idx) => {
            return <li key={idx}>{ele}</li>;
          })}
      </div>
    </div>
  );
}
