import React from 'react';
import './Letters.css';
import Flip from './Flip';

import {
  Navigate,
  Link,
  useParams,
} from "react-router-dom";

const alphabet = {
  en: Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ"),
  de: Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜẞ"),
  ru: Array.from("АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ"),
};

function Large({ children }) {
  return <div className="large">{children}</div>;
}

function ButtonLink({ children, onClick }) {
  return <button className="link" onClick={onClick}>{children}</button>;
}

function Letters() {
  const { lang } = useParams();
  const [currentLetter, setCurrentLetter] = React.useState(null);
  const [capital, setCapital] = React.useState(true);
  const toggleCase = (e) => {
    setCapital(!capital);
    e.stopPropagation();
  };
  if (!lang) {
    return <Navigate to="/letters/en"/>;
  }
  if (!(lang in alphabet)) {
    throw new Error("Unknown alphabet!");
  }
  let letters = alphabet[lang];
  if (!capital) {
    letters = letters.map(s => s.toLowerCase());
  }
  return (
    <Flip
      front={
        <div className="letters">
          <header>
            <ul>
              <li><Link to={"/"}>←</Link></li>
              <li><ButtonLink onClick={toggleCase}>Aa</ButtonLink></li>
            </ul>
          </header>
          <ul className="letters">
            {letters.map(x => 
              <li key={x} onClick={() => setCurrentLetter(x)}>{x}</li>)}
          </ul>
        </div>
      }
      back={<Large>{currentLetter}</Large>}
    />
  );
}

export default Letters;
