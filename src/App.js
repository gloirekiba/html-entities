import React from "react";
import { encode } from "html-entities";

import "./App.css";

const App = () => {
  const [encoded, setEncoded] = React.useState("");

  function handleChange(event) {
    setEncoded(encode(event.target.value));
  }

  return (
    <form>
      <textarea
        spellCheck="false"
        onChange={handleChange}
        type="text"
      ></textarea>
      <textarea spellCheck="false" value={encoded} type="text"></textarea>
    </form>
  );
};

export default App;
