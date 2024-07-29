import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const customDictionary = {
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example",
  };

  const handleSpell = (e) => {
    e.preventDefault();
    const val = e.target.value;
    setInput(val);

    const words = val.split(" ");
    const newSuggestions = words
      .map((word) => {
        if (customDictionary[word]) {
          return { incorrect: word, correct: customDictionary[word] };
        }
        return null;
      })
      .filter((suggestion) => suggestion !== null);

    setSuggestions(newSuggestions);
  };

  return (
    <div className="main-container">
      <div className="head-text">
        <h1>Spell Check and Auto-Correction</h1>
      </div>
      <textarea
        className="text-Area"
        onChange={handleSpell}
        placeholder="enter text..."
        value={input}
      ></textarea>
      <div>
        {suggestions.length > 0 && (
          <p>
            Did you mean:
            {suggestions.map((suggestion, index) => (
              <span key={index}>
                {" "}
                {suggestion.correct}
                {index < suggestions.length - 1 ? ", " : ""}
              </span>
            ))}
            ?
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
