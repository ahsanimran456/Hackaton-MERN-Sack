import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Containers/Home/Home';
import Profile from '../Containers/Profile/Profile';
import Users from '../Containers/Users/Users';
import AddMenulist from '../Containers/MenuList/AddMenuList';
import AllMenulist from '../Containers/MenuList/AllMenuList';
import Signup from '../Containers/Signup/Signup';
import Login from '../Containers/Login/Login';
import Withimg from '../Containers/MenuList/addmenuimg';
function Router() {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path={"/"} element={<Signup />} />
                <Route path={"/login"} element={<Login />} /> */}
                <Route path={"/"} element={<Home />} />
                <Route path={"/img"} element={<Withimg />} />
                <Route path={"/profile"} element={<Profile />} />
                <Route path={"/users"} element={<Users />} />
                <Route path={"/addmenu"} element={<AddMenulist />} />
                <Route path={"/allmenulist"} element={<AllMenulist />} />

            </Routes>
        </BrowserRouter>
    );
}

export default Router;