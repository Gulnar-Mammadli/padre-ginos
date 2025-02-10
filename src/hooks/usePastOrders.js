import { useQuery } from "@tanstack/react-query";
import getPastOrders from "../api/getPastOrders";

export const usePastOrders = (page) => {
  return useQuery({
    queryKey: ["past-orders", page],
    queryFn: () => getPastOrders(page),
  });
};
