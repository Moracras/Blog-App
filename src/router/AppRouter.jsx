import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import About from "../pages/About"
import Dashboard from "../pages/Dashboard"
import Detail from "../pages/Detail"
import Login from "../pages/Login"
import NewBlog from "../pages/NewBlog"
import Notfound from "../pages/Notfound"
import Profile from "../pages/Profile"
import Register from "../pages/Register"
import PrivateRouter from "./PrivateRouter"


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="" element={<Dashboard/>}/>
        <Route path="about" element={<About/>}/>
        <PrivateRouter>
          <Route path="new-blog" element={<NewBlog/>}/>
          <Route path="detail" element={<Detail/>}/>
          <Route path="profile" element={<Profile/>}/>
        </PrivateRouter>
        <Route path="*" element={<Login/>}/>
      </Routes>
    </Router>
  )
}

export default AppRouter