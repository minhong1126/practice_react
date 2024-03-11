import react from 'react';
import useStore from './state.js';
import './App.css';

function App() {
  const {cnt, setCnt, setZero} = useStore(state => state);

  return (
    <div>
      <h3> Clicked {cnt} times</h3>
      <button onClick={setCnt}> Click for + 1 </button>
      <button onClick={setZero}> Click for 0</button>
    </div>
  );
}

export default App;
