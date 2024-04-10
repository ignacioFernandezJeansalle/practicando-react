import { useState, useEffect } from "react";

const CAT_FACT_ENDPOINT = "https://catfact.ninja/fact";
//const URL_API_IMG = "https://cataas.com/cat/says/";
//Estoy usando otra API por que cataas no esta funcionando...
const CAT_IMAGE_ENDPOINT_ALT = "https://api.thecatapi.com/v1/images/search";

export default function App() {
  const [fact, setFact] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [newFact, setNewFact] = useState(false);

  const handleClick = () => {
    setNewFact(!newFact);
  };

  useEffect(() => {
    fetch(CAT_FACT_ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);
      });
  }, [newFact]);

  useEffect(() => {
    if (!fact) return;

    /* const firstWord = fact.split(" ")[0];
    const URL = `${URL_API_IMG}${firstWord}`; */
    const URL = CAT_IMAGE_ENDPOINT_ALT;

    fetch(URL)
      .then((res) => res.json())
      .then((data) => setImageUrl(data[0].url));
  }, [fact]);

  return (
    <main>
      <h1>CAT FATCS</h1>
      <button onClick={handleClick}>New Fact</button>
      <section>
        <p>
          <u>Fact:</u> {fact}
        </p>
        {imageUrl && <img src={imageUrl} alt="Foto de un gato aleatorio" />}
      </section>
    </main>
  );
}
