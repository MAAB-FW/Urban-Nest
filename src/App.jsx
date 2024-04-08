import { Outlet } from "react-router-dom"
import "./App.css"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"

function App() {
    return (
        <div className="font-open-sans">
            <Navbar></Navbar>
            <h2 className="text-2xl text-center">This is Template Project</h2>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}

export default App
