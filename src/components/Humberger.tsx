import { createSignal } from 'solid-js';

import "./CSS/Humberger.css";

function Humberger() {
  const [isOpen, setIsOpen] = createSignal(false);
  console.log(isOpen());
  return (
    <>
      <button
        onClick={() => {
          setIsOpen(!isOpen());
          window.navigator.vibrate([100]);
        }}
        class={`humberger ${isOpen() ? "open" : ""}`}
        aria-label="humberger-menu"
      >
        <div class={`line ${isOpen() ? "open" : ""}`} id="upperline"></div>
        <div class={`line ${isOpen() ? "open" : ""}`} id="centerline"></div>
        <div class={`line ${isOpen() ? "open" : ""}`} id="lowerline"></div>
      </button>
    </>
  );
}

export default Humberger;