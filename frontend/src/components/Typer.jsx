import React, { useEffect, useState } from "react";
import "./Typer.css";

const texts = ["Your", "Personal HR assistant", "ready to help", "24 x 7"];

const Typer = () => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let typingTimeout;

    const typeNextChar = () => {
      if (charIndex < texts[textIndex].length) {
        setDisplayText((prev) => prev + texts[textIndex][charIndex]);
        setCharIndex(charIndex + 1);
      } else {
        // Pause before next text
        typingTimeout = setTimeout(() => {
          setCharIndex(0);
          setDisplayText("");
          setTextIndex((textIndex + 1) % texts.length);
        }, 1000);
        return;
      }
    };

    typingTimeout = setTimeout(typeNextChar, 100);

    return () => clearTimeout(typingTimeout);
  }, [charIndex, textIndex]);

  return (
    <h1 className="typer-h1 font-sans text-7xl text-white uppercase text-center">
      {displayText}
      <span className="typer-caret" aria-hidden="true"></span>
    </h1>
  );
};

export default Typer;
