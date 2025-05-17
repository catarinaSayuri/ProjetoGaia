import { useRef } from "react";
import { PhaserGame } from "./PhaserGame";
import "./sectionGame.css"; 

export const SectionGame = () => {
  const phaserRef = useRef();

  return (
    <section id="sectionGame">
      <div className="game-container">
        <PhaserGame ref={phaserRef} />
      </div>
    </section>
  );
};
