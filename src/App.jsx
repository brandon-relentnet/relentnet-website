/* ./src/App.jsx */
import React from 'react'
import useStore from './store'

const Counter = () => {
  const { count, increment, decrement, reset } = useStore();

  return (
    <div className='text-subtext0 flex-1 text-center'>
      <h1 className='mb-2 text-text text-2xl'>Count: {count}</h1>
      <div className='mb-2'>
        <button className='mx-2 hover:text-yellow rounded text-2xl bg-surface0 w-8 hover:bg-surface1 hover:scale-105 transition duration-100' onClick={decrement}>-</button>
        <button className='mr-2 hover:text-green rounded text-2xl bg-surface0 w-8 hover:bg-surface1 hover:scale-105 transition duration-100' onClick={increment}>+</button>
      </div>
      <button className='p-4 hover:text-red bg-surface0 rounded text-lg hover:bg-surface1 hover:scale-105 transition duration-100' onClick={reset}>Reset</button>
    </div>
  );
};

function App() {
  return (
    <>
      <div className='container mx-auto text-text'>
        <h1>RelentNet</h1>
        <Counter />

      </div>
    </>
  )
}

export default App
