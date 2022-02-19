import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic.audio) {
    return (
      <div className="Phonetic">
        <a
          href={props.phonetic.audio}
          target="_blank"
          rel="noreferrer noopener"
          className="Phonetic-true"
          alt="audio-icon"
        >
          🔊
        </a>{" "}
        {props.phonetic.text}
      </div>
    );
  } else {
    return (
      <div className="Phonetic">
        <span className="Phonetic-false">🔇</span> {props.phonetic.text}
      </div>
    );
  }
}
