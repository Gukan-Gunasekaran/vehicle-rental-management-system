import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Navbar from "./Navbar";
import Body from "./Body";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar/>
              <Body/>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
