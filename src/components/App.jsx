import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        <Entry
          emoji={emojipedia[0].emoji}
          name={emojipedia[0].name}
          content={emojipedia[0].meaning}
        />
        <Entry
          emoji={emojipedia[1].emoji}
          name={emojipedia[1].name}
          content={emojipedia[1].meaning}
        />
        <Entry
          emoji={emojipedia[1].emoji}
          name={emojipedia[1].name}
          content={emojipedia[1].meaning}
        />
      </dl>
    </div>
  );
}

export default App;
