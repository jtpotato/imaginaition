import React from "react";

function Home() {
  return (
    <>
      <div className="hero w-screen h-screen flex items-center justify-center">
        <div>
          <h1
            style={{
              backgroundImage:
                "linear-gradient(0deg, rgba(255,167,64,1) 20%, rgba(255,255,255,1) 60%)",
            }}
            className="text-transparent bg-clip-text m-0 text-6xl p-4"
          >
            Imaginaition
          </h1>
          <div className="-z-10 relative" style={{ filter: "blur(40px)", top: "-8em" }}>
            <div className="w-48 h-48 bg-orange-400">

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
