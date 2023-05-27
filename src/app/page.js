import React from "react";
import "./hero.css";

function Home() {
  return (
    <>
      <div className="bg-gradient-to-r from-red-400 to-black">
        <div className="w-screen h-screen flex items-center justify-center text-center">
          <div>
            <h1 className="text-9xl font-bold m-0 p-4 imaginaition-glow">
              Imaginaition
            </h1>
            <p className="text-2xl text-white">
              The product suite <b className="imaginaition-glow">for you</b>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
