import { Footer } from "./MyComponents/Footer";
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";

export default function App() {
  let todos = [
    {
    sno: 1,
    title: "go to the market 1 ",
    desc: "Tou need to go to  the market to get this job done"
    },
    {
      sno: 2,
      title: "go to the market 2",
      desc: "Tou need to go to  the shop to get this job done"
    },
    {
      sno: 3,
      title: "go to the market 3",
      desc: "Tou need to go to  the graund to get this job done"
    }
  ]
  return (
    <>
    <Header title="My Todos List" searchBar={true}/>
    {/* <Header/> */}
    <Todos todos={todos}/>
    <Footer />
    </>
  );
}



 