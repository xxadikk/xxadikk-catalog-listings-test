import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 1000 * 60, retry: 2, refetchOnWindowFocus: false },
  },
});

export default function QuaryProvider({ children }) {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
