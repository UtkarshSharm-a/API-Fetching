import { Link,Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import Servise from "./components/Servise";
import Show from "./components/Show";
function App() {
 
  // const addInDataBaseFetching=()=>{
  //   const api="https://fakestoreapi.com/products";

  //   axios.post(api,{
  //     title: 'test product',
  //     price: 13.5,
  //     description: 'lorem ipsum set',
  //     image: 'https://i.pravatar.cc',
  //     category: 'electronic'
  //   }).then((res)=>{
  //     console.log(res)
  //   }).catch((err)=>console.log(err));
  // }

  return (
    <>
    <div className="p-10">
      <nav className="flex items-center justify-center gap-5">
        <Link  to="/">Home</Link>
        <Link to="/servise">Service</Link>
        <Link to="/Show">Show</Link>

      </nav>
      <Routes >
        <Route  path="/" element={<Home/>}></Route>
        <Route path="/servise" element={<Servise/>}></Route>
        <Route path="/show" element={<Show/>}></Route>

      </Routes>
      {/* <button onClick={addInDataBaseFetching} className="px-5 py-2  ml-4 bg-blue-500 text-white">add api</button> */}
    </div>

    </>
  )
}

export default App
