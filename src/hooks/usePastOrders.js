import { useQuery } from "@tanstack/react-query";
import getPastOrder from "../api/getPastOrder";
import getPastOrders from "../api/getPastOrders";

export const usePastOrders = (page) => {
  return useQuery({
    queryKey: ["past-orders", page],
    queryFn: () => getPastOrders(page),
    staleTime: 30000,
  });
};

export const usePastOrder = (focusedOrder) => {
  return useQuery({
    queryKey: ["past-order", focusedOrder],
    queryFn: () => getPastOrder(focusedOrder),
    staleTime: 86400000,
    enabled: !!focusedOrder,
  });
};
