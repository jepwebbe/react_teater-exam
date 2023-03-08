import { create } from "zustand";
import { persist } from "zustand/middleware";
// zustand global state hook that sets information to localStorage (persist) via the set function
export const useOrderStore = create(
  persist(
    (set) => ({
      OrderInfo: {
        event_id: "",
        firstname: "",
        lastname: "",
        address: "",
        zipcode: "",
        city: "",
        email: "",
        seats: [],
      },
      setOrder: (OrderInfo) =>
        set(() => ({
            OrderInfo: {
            ...OrderInfo,
          },
        })),
    }),
    { name: "teaterOrder", createJSONStorage: () => localStorage }
  )
);
