import { Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import CreatData from "./CreatData";
import ReadData from "./ReadData";
import EditData from "./EditData";
import DeletData from "./DeletData";
import Homes from "./Homes";
import TodoList from "./TodoList";
import ViewCart from "./ViewCart";
import ShoppingCartModal from "./ShoppingCartModal";
import About from "./About";
import Contact from "./Contact";
import Privacy from "./Privacy";
import ChatSupport from "./ChatSupport";
import Footer from "./Footer";

function App() {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path="/creatdata" element={<CreatData/>}></Route>
      <Route path="/readdata" element={<ReadData/>}></Route>
      <Route path="/editdata/:id" element={<EditData/>}></Route>
      <Route path="/deletdata" element={<DeletData/>}></Route>
      <Route path="/homes" element={<Homes/>}></Route>
      <Route path="/todolist" element={<TodoList/>}></Route>
      <Route path="/viewcard/:id" element={<ViewCart/>}></Route>
      <Route path="/about/" element={<About/>}></Route>
      <Route path="/contact/" element={<Contact/>}></Route>
      <Route path="/privacy/" element={<Privacy/>}></Route>
      <Route path="/chatsuport/" element={<ChatSupport/>}></Route>
      <Route path="/shoppingcartmodal/:id" element={<ShoppingCartModal/>}></Route>
    </Routes>
    <Footer/>
    </>
  )
}

export default App;
