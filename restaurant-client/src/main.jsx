import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./Routes/Routes";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Provider/AuthProvider";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient(); // ✅ Renamed to queryClient

createRoot(document.getElementById("root")).render(
  <section className="max-w-screen-xl mx-auto">
    <StrictMode>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          {/* ✅ Used queryClient */}
          <RouterProvider router={router} />
        </QueryClientProvider>
      </AuthProvider>
    </StrictMode>
  </section>
);
