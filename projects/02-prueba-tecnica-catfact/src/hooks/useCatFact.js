import { useState, useEffect } from "react";

const CAT_FACT_ENDPOINT = "https://catfact.ninja/fact";

export function useCatFact() {
  const [fact, setFact] = useState("");

  const getFact = () => {
    fetch(CAT_FACT_ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);
      });
  };

  useEffect(getFact, []);

  return { fact, getFact };
}
