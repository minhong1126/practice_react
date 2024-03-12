import { useEffect } from "react";
import { useLoadingStore, useCoinsStore } from './state.js';

function App() {
  const { loading, setLoading } = useLoadingStore();
  const { coins, setCoins } = useCoinsStore();

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((res) => res.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <ul>
          {coins.map((coin) => (
            <li>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;



// import { useState, useEffect } from 'react';
// import './App.css';
// import useStore from './state.js'

// function App() {
//   const { loading, setLoading, coins, setCoins} = useStore(state => state);
//   useEffect(() => {
//     fetch("https://api.coinpaprika.com/v1/tickers")
//     .then((res) => {
//       res.json()
//       console.log(res.json())
//     })
//     .then((json) => {
//       setCoins(json);
//       setLoading(false);
//     });
//   }, []);

//   return (
//     <>
//     <h1> Coins </h1>
//     {loading? (<strong> loading </strong>) : (
//       <ul>
//         {coins.map((coin) => {
//           <li> {coin.name} : {coin.symbol}</li>
//         })}
//       </ul>
//     )}
//     </>
//   );
// }

// export default App;
