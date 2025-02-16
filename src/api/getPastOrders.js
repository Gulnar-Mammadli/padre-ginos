const apiUrl = import.meta.env.VITE_API_URL;

export default async function getPastOrders(page) {
  const response = await fetch(`${apiUrl}/api/past-orders?page=${page}`);
  return await response.json();
}
