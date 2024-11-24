/* ./src/App.jsx */
import React from 'react'
import useStore from './store'
import ThemeProvider from './components/ThemeProvider';
import Navbar from './components/Navbar';

const Counter = () => {
  const { count, increment, decrement, reset } = useStore();

  return (
    <div className='text-subtext0 shadow rounded flex-1 text-center bg-surface0 w-1/12 mx-auto p-2'>
      <h1 className='mb-2 text-text text-2xl'>Count: {count}</h1>
      <div className='mb-2'>
        <button className='mx-2 shadow hover:shadow-lg hover:text-yellow rounded text-2xl bg-surface1 w-8 hover:bg-surface2 hover:scale-105 transition duration-100' onClick={decrement}>-</button>
        <button className='mr-2 shadow hover:shadow-lg hover:text-green rounded text-2xl bg-surface1 w-8 hover:bg-surface2 hover:scale-105 transition duration-100' onClick={increment}>+</button>
      </div>
      <button className='p-4 shadow hover:shadow-lg hover:text-red bg-surface1 rounded text-lg hover:bg-surface2 hover:scale-105 transition duration-100 mb-2' onClick={reset}>Reset</button>
    </div>
  );
};

function App() {
  return (
    <>
      <ThemeProvider >
        <Navbar />
        <div className='container mx-auto text-text my-10'>       
          <Counter />
        </div>
      </ThemeProvider >
    </>
  )
}

export default App
