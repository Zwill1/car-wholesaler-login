import { Outlet } from "react-router-dom"
import Nav from "../components/Nav"

export default function Homepage() {
return (      
    <>
    <Nav />
    <Outlet />
    <p>dff</p>
    </>
)
}
