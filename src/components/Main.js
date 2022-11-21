import React from 'react';
import signs from '../data';
import './Main.css';
import background from '../../src/background.png';
import Sign from '../Sign/Sign';


export default function Main() {
  return (
    <main className="main" style={{ backgroundImage: `url(${background})` }}>
      {signs.map((sign) => (
        <Sign key={sign.id} name={sign.name} dates={sign.dates} />
      ))}

    </main>
  );
}