import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import Navbar from "./Navbar";
import Body from "./Body";
import Booking from "./Booking";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Body/>
            </>
          }
        />
        <Route path="/booking" element={<Booking/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
