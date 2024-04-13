import { Outlet } from "react-router-dom"
import "./App.css"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function App() {
    return (
        <div className="font-open-sans max-w-[1440px] mx-auto relative">
            {/* <div className="w-[83%] mx-auto"> */}
            <Navbar></Navbar>
            <Outlet></Outlet>
            {/* </div> */}
            <Footer></Footer>
        </div>
    )
}

export default App
