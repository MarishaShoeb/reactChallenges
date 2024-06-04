// import { useState } from "react/cjs/react.production.min";
import react, { useState } from "react";
import "./styles.css";

export default function Buttontext() {
  const [hideText, setHideText] = useState(false);
  let text = " ";
  if (hideText) {
    text = "Start editing to see some magic happen!";
  }
  return (
    <div className="App">
      <button onClick={() => setHideText(!hideText)}>
        <h2>Show/Hide</h2>
      </button>
      {hideText ? <h1>hi there</h1> : null}
      <h1>{text}</h1>
    </div>
  );
}
