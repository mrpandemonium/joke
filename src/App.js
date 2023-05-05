import { useState } from "react";
import searchJoke from "./api";

function App() {
  const [joke, setJoke] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = async () => {
    const result = await searchJoke();
    setJoke(result.setup);
    setAnswer(result.delivery);
    console.log("search joke response result:", joke);
  };

  return (
    <div>
      <button onClick={handleSubmit}>Get a Joke</button>
      <h3>{joke}</h3>
      <h3>{answer}</h3>
    </div>
  );
}
export default App;
