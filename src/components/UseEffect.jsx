import { useEffect, useState } from "react";
import Button from "./Button";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  // No dependency
  useEffect(() => {
    console.log("Runs after every render");
  });

  // 2) Empty dependency
  //   Working with timer
  useEffect( () => {
    const timer = setInterval(() => {
        console.log('Ticking')
    }, 2000) //Time interval

    return () => {
        clearInterval(timer);
        console.log('Timer cleared');
    }
  }, []);

  // 3) specific dependency
  //   Working with state
  useEffect(() => {
    console.log("Count changed: ${count} times");
  }, [count]);

  const handleChange = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };
  return (
    <div className="m-5">
      <h1 className="font-bold">Counter</h1>
      <p>You clicked {count} times</p>
      <div className="flex gap-3">
        <Button
          text={"Click me"}
          className="bg-cyan-500 text-black"
          onClick={handleChange}
        />
        <Button
          text={"Reset"}
          className="bg-cyan-500 text-black"
          onClick={handleReset}
        />
      </div>
    </div>
  );
};

export default UseEffect;
