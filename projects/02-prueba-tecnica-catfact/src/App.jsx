import { useState, useEffect } from "react";

const URL_API_FACT = "https://catfact.ninja/fact";
//const URL_API_IMG = "https://cataas.com/cat/says/";

//Estoy usando otra API por que cataas no esta funcionando...
const URL_API_IMG_ALT = "https://api.thecatapi.com/v1/images/search";

export default function App() {
  const [fact, setFact] = useState("");
  const [firstWord, setFirstWord] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    fetch(URL_API_FACT)
      .then((res) => res.json())
      .then((data) => {
        const newFact = data.fact;
        setFact(newFact);
        setFirstWord(newFact.split(" ")[0]);
      });
  }, []);

  useEffect(() => {
    //const URL = URL_API_IMG + firstWord;
    const URL = URL_API_IMG_ALT;

    if (fact) {
      fetch(URL)
        .then((res) => res.json())
        .then((data) => setImage(data[0].url));
    }
  }, [fact]);

  return (
    <main>
      <h1>CAT FATCS</h1>
      <p>
        <u>Fact:</u> {fact}
      </p>
      <p>
        <u>First word:</u> {firstWord}
      </p>
      {image && <img src={image} alt="Foto de un gato random" />}
    </main>
  );
}
