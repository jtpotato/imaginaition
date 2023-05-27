import React from "react";
import "./hero.css"

function Home() {
  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center text-center">
        <div>
          <h1 className="text-9xl font-bold m-0 p-4" id="imaginaition-title">Imaginaition</h1>
          <p className="text-2xl text-white">
            The product suite <b>for you</b>.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
