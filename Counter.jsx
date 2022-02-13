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



      {/* <div className="container my-5">
        <div className="card text-center my-5" >
          <div className="card-body">
            <h1>My counter App</h1>
            <div className="my-2">
              <h3 className="my-3">{counter}</h3>
              <Button
                className="mx-2" variant='success'

                onClick={() => setCounter(counter + 1)}
              >
                Increment
              </Button>

              <Button
                className="mx-2" variant='danger'
                onClick={() => setCounter(counter - 1)}
                disabled={counter===0}
              >
                Decrement
              </Button>
              <Button
                className="btn-btn-info mx-2"
                onClick={() => setCounter(0)}
                disabled={counter===0}
              >
                Reset
              </Button>
            </div>
          </div>
        </div>
      </div> */}

      

      {/* <h1>Counter App</h1>
      <div>
        <h2>{counter}</h2>
        <Button onClick={() => setCounter(counter + 1)}>increment </Button>
        <button
          onClick={() => setCounter(counter - 1)}
          disabled={counter === 0}
        >
          decrement{" "}
        </button>
        <button onClick={() => setCounter(0)}
         disabled={counter === 0}>
          Reset
        </button>
      </div> */}
    </>
  );
};

export default Counter;
