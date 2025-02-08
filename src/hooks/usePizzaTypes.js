import { useState, useEffect } from "react";

export default function usePizzaTypes() {
  const [pizzaTypes, setPizzaTypes] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchPizzaTypes() {
    const pizzaResponse = await fetch("/api/pizzas");
    const pizzaJson = await pizzaResponse.json();
    setPizzaTypes(pizzaJson);
    setLoading(false);
  }

  useEffect(() => {
    fetchPizzaTypes();
  }, []);

  return { pizzaTypes, loading };
}
