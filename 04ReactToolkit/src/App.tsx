import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Router from "./router";

function App() {

  return (
    <AuthProvider>
      <RouterProvider router={Router} />
    </AuthProvider>
  )
}

export default App
