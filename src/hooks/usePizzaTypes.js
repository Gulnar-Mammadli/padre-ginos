import { useState, useEffect } from "react";

const apiUrl = import.meta.env.VITE_API_URL;

export default function usePizzaTypes() {
  const [pizzaTypes, setPizzaTypes] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchPizzaTypes() {
    const pizzaResponse = await fetch(`${apiUrl}/api/pizzas`);
    const pizzaJson = await pizzaResponse.json();
    setPizzaTypes(pizzaJson);
    setLoading(false);
  }

  useEffect(() => {
    fetchPizzaTypes();
  }, []);

  return { pizzaTypes, loading };
}
