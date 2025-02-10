export default async function getPastOrder(order) {
  const response = await fetch(`/api/past-order/${order}`);
  return await response.json();
}
