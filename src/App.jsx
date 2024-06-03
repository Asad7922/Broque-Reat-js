import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layouts from "./components/Layouts"
// import Home from "./Pages/Home"
import Product from "./Pages/Product"
import Purchase from "./Pages/Purchase"
import Login from "./Pages/Login"
// import Chat from "./Pages/Chat"
import Facebook from "./Pages/Facebook"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layouts/>}>
          {/* <Route path="/" element={<Chat/>}/> */}
            <Route path="/" element={<Facebook/>}/>
            {/* <Route path="/" element={<Home/>} /> */}
            
            <Route path="/product" element={<Product/>} />
            <Route path="/purchase" element={<Purchase/>} />
          </Route>
            <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
