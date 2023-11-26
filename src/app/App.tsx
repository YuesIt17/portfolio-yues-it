import { useState } from "react";
import { Button } from "@mui/material";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      {import.meta.env.REACT_APP_TEST}
      <div className="card">
        <Button
          onClick={() => setCount((count) => count + 1)}
          variant="contained"
        >
          count is {count}
        </Button>
        ;
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
