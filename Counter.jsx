import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div className="container my-5">
        <div className="card text-center my-4">
          <h1>Counter</h1>
          <div className="card-body">
            <div className=" my-2">
              <h3 className="my-3">{counter}</h3>
              <Button
                className="mx-2"
                variant="success"
                onClick={() => setCounter(counter + 1)}
              >
                Increment
              </Button>
              <Button
                className="mx-2"
                variant="danger"
                onClick={() => setCounter(counter - 1)}
                disabled={counter === 0}
              >
                Decrement
              </Button>
              <Button
                className="mx-2"
                variant="info"
                onClick={() => setCounter(0)}
                disabled={counter === 0} 
              >
                Reset
              </Button>
            </div>
          </div>
        </div>
      </div>

export default Counter;
