// function App () {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//     </div>
//   );
// };

// export default App;


import React from "react";
// import { useState } from "react";
import birdData from "./data/birds";
// import bonusItems from "./data/bonusItems"
import BirdCard from "./component/BirdCard";
import Cart from "./component/Cart";
import Checkout from "./component/Checkout";

function App () {

  return (
    <>
    <main>
    <div className="cart-checkout">
      <Cart />
      <Checkout />
    </div>

    <div className="birds">
      {birdData.map((bird) => {
        return (
        <BirdCard 
        key={bird.id}
        bird = {bird}
        />
        )
      })}
    </div>
    </main>
    </>
  );
};

export default App;
