import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style/style.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./pages/home/home.jsx";
import Header from "./features/header/header.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

const queryClient = new QueryClient();
// react query

<QueryClientProvider client={queryClient}>
  <App />
</QueryClientProvider>;

// export default function ReactQueryProvider({ children }) {
//   const queryClient = new QueryClient();

//   return (
//     <QueryClientProvider client={queryClient}>
//       <ReactQueryDevtools initialIsOpen={false} />
//       {children}
//     </QueryClientProvider>
//   );
// }
