import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { usePastOrders } from "../hooks/usePastOrders";

export const Route = createLazyFileRoute("/past")({
  component: PastOrdersRoute,
});

function PastOrdersRoute() {
  const [page, setPage] = useState(1);

  const { data: pastOrders, isLoading } = usePastOrders(page);

  if (isLoading) {
    return (
      <div className="past-orders">
        <h2>LOADING …</h2>
      </div>
    );
  }

  return (
    <div className="past-orders">
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Date</td>
            <td>Time</td>
          </tr>
        </thead>
        <tbody>
          {pastOrders.map((order) => (
            <tr key={order.order_id}>
              <td>{order.order_id}</td>
              <td>{order.date}</td>
              <td>{order.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pages">
        <button disabled={page <= 1} onClick={() => setPage(page - 1)}>
          Previous
        </button>
        <div>{page}</div>
        <button
          disabled={pastOrders.length < 10}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
