import { useState, useEffect } from "react";

const CAT_IMAGE_ENDPOINT = "https://cataas.com/cat/says/";

//const CAT_IMAGE_ENDPOINT_ALT = "https://api.thecatapi.com/v1/images/search";

export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (!fact) return;

    const firstThreeWords = fact.split(" ", 3).join(" ");
    const URL = `${CAT_IMAGE_ENDPOINT}${firstThreeWords}`;
    fetch(URL).then((res) => setImageUrl(res.url));

    /* fetch(CAT_IMAGE_ENDPOINT_ALT)
      .then((res) => res.json())
      .then((data) => setImageUrl(data[0].url)); */
  }, [fact]);

  return { imageUrl };
}
