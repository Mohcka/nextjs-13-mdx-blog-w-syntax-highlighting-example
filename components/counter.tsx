"use client"
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button className="rounded bg-cyan-700 text-white px-2" onClick={() => setCount(count + 1)}>Increment</button>
      <div>Count: {count}</div>
    </div>
  );
}
