import Header from "../componets/Header";
import Footer from "../componets/Footer";

import { Outlet } from "react-router-dom";
function App() {
 
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  );
}

export default App;
