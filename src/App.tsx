import { decrement, increment } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

export default function App() {
  const count = useAppSelector((state) => state.counter.count)
  const dispatch = useAppDispatch();
  const boxes = Array.from({ length: Math.floor(count / 5) }, (_, i) => i + 1);

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="border border-purple-600 p-10 flex gap-10 items-center rounded-2xl bg-gray-200 ">
      <button onClick={() => dispatch(increment())} className="px-6 py-2 bg-green-300 rounded-2xl">
        Increment
      </button>
      <h1>{count}</h1>
      <button onClick={() => dispatch(decrement())} className="px-6 py-2 bg-red-400 rounded-2xl">
        Decrement
        </button>
      </div>
      {/* Render boxes dynamically */}
      <div className="flex flex-wrap gap-4">
        {boxes.map((box) => (
          <div
            key={box}
            className="w-16 h-16 flex justify-center items-center bg-blue-300 rounded-lg text-white"
          >
            {box}
          </div>
        ))}
        </div>
    </div>
  )
}