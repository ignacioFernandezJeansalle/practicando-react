import { useCatFact } from "./hooks/useCatFact";
import { useCatImage } from "./hooks/useCatImage";

export default function App() {
  const { fact, getFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });

  const handleClick = async () => {
    getFact();
  };

  return (
    <main>
      <h1>CAT FATCS</h1>
      <button onClick={handleClick}>New Fact</button>
      <section>
        <p>
          <u>Fact:</u> {fact}
        </p>
        {imageUrl && <img src={imageUrl} alt="Foto de un gato extraida de una API aleatoreamente" />}
      </section>
    </main>
  );
}
