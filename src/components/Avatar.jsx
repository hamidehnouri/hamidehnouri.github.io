import React, { useState } from 'react';
import character from '../assets/pixel-character.webp';

export default function Avatar() {
  const [greeting, setGreeting] = useState(false);

  return (
    <div className="arc-character">
      <button
        type="button"
        className="arc-character-button"
        aria-label="Say hello to Hamideh’s pixel character"
        aria-expanded={greeting}
        aria-controls="arc-character-greeting"
        onClick={() => setGreeting((current) => !current)}
      >
        <img src={character} alt="" width="328" height="492" decoding="async" />
      </button>
      <div
        id="arc-character-greeting"
        className={`arc-greeting${greeting ? '' : ' is-quiet'}`}
        aria-live="polite"
      >
        {greeting ? 'Hi, I’m Hamideh! 👋' : 'Click to say hello'}
      </div>
    </div>
  );
}
