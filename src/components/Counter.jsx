
import { useState } from "react";

function Counter() {
  const [value, setValue] = useState(5);
  const [message, setMessage] = useState("");

  function increment() {
    if (value < 20) {
      setValue(value + 1);
      setMessage("");
    } else {
      setMessage("Maximum value is 20");
    }
  }

  function decrement() {
    if (value > 0) {
      setValue(value - 1);
      setMessage("");
    } else {
      setMessage("Minimum value is 0");
    }
  }

  return (
    <div className="text-white border p-8 max-w-md mx-auto mt-20 bg-gray-800 rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-6">React Counter</h1>
      <h2 className="text-2xl text-center mb-4">Counter: {value}</h2>

      <div className="flex justify-center gap-4">
        <button
          onClick={decrement}
          className="px-4 py-2 rounded-md font-semibold bg-red-600 hover:bg-red-700"
        >
          Remove
        </button>

        <button
          onClick={increment}
          className="px-4 py-2 rounded-md font-semibold bg-green-600 hover:bg-green-700"
        >
          Add
        </button>
      </div>

      {message && (
        <p className="mt-4 text-center text-yellow-400 font-medium">{message}</p>
      )}
    </div>
  );
}

export default Counter;
