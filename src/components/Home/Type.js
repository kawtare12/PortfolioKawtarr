import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Bienvenue sur mon portfolio ."
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 80,
   
      }}
      style={{ color: "white" }} 
    />
  );
}

export default Type;
