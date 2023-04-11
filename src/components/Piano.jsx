import React, { useState } from "react";
import * as Tone from "tone";

const Piano = () => {
  const [currentNote, setCurrentNote] = useState(null);

  const playNote = (note) => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(note, "8n");
    setCurrentNote(note);
  };

  return (
    <div className="piano">
      <button className="white" onMouseEnter={() => playNote("C4")}>
        C
      </button>
      <button className="black" onMouseEnter={() => playNote("C#4")}>
        C#
      </button>
      <button className="white" onMouseEnter={() => playNote("D4")}>
        D
      </button>
      <button className="black" onMouseEnter={() => playNote("D#4")}>
        D#
      </button>
      <button className="white" onMouseEnter={() => playNote("E4")}>
        E
      </button>
      <button className="white" onMouseEnter={() => playNote("F4")}>
        F
      </button>
      <button className="black" onMouseEnter={() => playNote("F#4")}>
        F#
      </button>
      <button className="white" onMouseEnter={() => playNote("G4")}>
        G
      </button>
      <button className="black" onMouseEnter={() => playNote("G#4")}>
        G#
      </button>
      <button className="white" onMouseEnter={() => playNote("A4")}>
        A
      </button>
      <button className="black" onMouseEnter={() => playNote("A#4")}>
        A#
      </button>
      <button className="white" onMouseEnter={() => playNote("B4")}>
        B
      </button>
      <button className="white" onMouseEnter={() => playNote("C5")}>
        C
      </button>
      <button className="black" onMouseEnter={() => playNote("C#5")}>
        C#
      </button>
      <button className="white" onMouseEnter={() => playNote("D5")}>
        D
      </button>
      <button className="black" onMouseEnter={() => playNote("D#5")}>
        D#
      </button>
      <button className="white" onMouseEnter={() => playNote("E5")}>
        E
      </button>
      <button className="white" onMouseEnter={() => playNote("F5")}>
        F
      </button>
      <button className="black" onMouseEnter={() => playNote("F#5")}>
        F#
      </button>
      <button className="white" onMouseEnter={() => playNote("G5")}>
        G
      </button>
      <button className="black" onMouseEnter={() => playNote("G#5")}>
        G#
      </button>
      <button className="white" onMouseEnter={() => playNote("A5")}>
        A
      </button>
      <button className="black" onMouseEnter={() => playNote("A#5")}>
        A#
      </button>
      <button className="white" onMouseEnter={() => playNote("B5")}>
        B
      </button>
    </div>
  );
};

export default Piano;
