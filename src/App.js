// import Layout from "./components/Layout/Layout";

// function App() {
//   return <Layout />;
// }

// export default App;


import React from "react";
import Layout from "./components/Layout/Layout";
import { AuthProvider } from "../src/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Layout />
    </AuthProvider>
  );
}

export default App;
