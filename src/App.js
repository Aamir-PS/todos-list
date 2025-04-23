import { Footer } from "./MyComponents/Footer";
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";

function App() {

  return (
    <>
    {/* <Header titel="My Todos List" searchBar={false}/> */}
    <Header />
    <Todos />
    <Footer />
    </>
  );
}

export default App;
