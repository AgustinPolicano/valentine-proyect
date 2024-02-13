'use client'
import Image from "next/image";
import myGif from './assets/6ccc8e9a6904b8b8858c69a056cd9667.gif';
import myGif2 from './assets/375fef6dbb1d5f8c69e198bce7aefacd.gif';
import { useEffect, useState } from "react";

export default function Home() {
  const [showOtraVista, setShowOtraVista] = useState(false);
  const randomPosition = () => {
    const buttonsNo = document.getElementsByClassName('button-novio-no') as HTMLCollectionOf<HTMLElement>;
    Array.from(buttonsNo).forEach(buttonNo => {
      const newPosition = {
        top: Math.random() * window.innerHeight,
        left: Math.random() * window.innerWidth,
      };
      buttonNo.style.marginTop = '5px';
      buttonNo.style.position = 'absolute';
      buttonNo.style.top = newPosition.top + "px";
      buttonNo.style.left = newPosition.left + "px";
    });
  };

  const changeScreen = () => {
    setShowOtraVista(true);
  };

  if (showOtraVista) {
    return (
      <main className="center-container">
      <div>
        <h1>Te amo sos lo mejor que me paso</h1>
          <Image src={myGif2} alt="teamovicky" className="gif-enamorado" height={100} width={100} />
          <span className="span-text">PD: chequea tu cartera ;)</span>
      </div>
    </main>
    );
  }

  return (
    <main className="center-container">
      <div>
        <h1>¿Quieres ser mi novia?</h1>
          <Image src={myGif} alt="teamovicky" className="gif-enamorado" height={100} width={100} />
        <div className="flex-buttons">
          <button className="button-novio-si" onClick={changeScreen}>Si</button>
          <button className="button-novio-no" onClick={randomPosition}>No</button>
        </div>
      </div>
    </main>
  );
}
