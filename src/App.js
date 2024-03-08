import react from 'react';
import './App.css';

function App() {
  const [data, setData] = react.useState(0);
  const btnClick = () => {
    setData(data + 1);
  }
  return (
    <div>
      <h3> Clicked {data} times</h3>
      <button onClick={btnClick}> Click </button>
    </div>
  );
}

export default App;
