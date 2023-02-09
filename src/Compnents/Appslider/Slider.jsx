import "./Slider.css"
import {
    CaretUpOutlined,
    CaretDownOutlined

} from "@ant-design/icons"
import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faClipboard,
    faHouse,
    faArchive,
    faTasks,
    faUsers,
    faCartPlus,
    faPlateUtensils,
} from '@fortawesome/free-solid-svg-icons'


function Appslider() {
    const navigate = useNavigate()
    const [render, setrender] = useState(false);
    const allusers = () => {
        navigate("/users")
    }
    const gohome = () => {
        navigate("/")
    }
    const dropdown = () => {
        setrender(!render)
    }
    const goAddmenulist = ()=>{
        navigate("/addmenu")
    }
    const AllMenulist = ()=>{
        navigate("/allmenulist")
    }
    return (
        <div className="slider-main">
            <div className="item-list" onClick={gohome}>
                <div className="items-arrange">
                    <FontAwesomeIcon icon={faHouse} />
                </div>
                <div>
                    <span>General</span>
                </div>
            </div>

            <div className="item-list" onClick={dropdown} >
                <div className="items-arrange">
                    <FontAwesomeIcon icon={faArchive} />
                </div>
                <div>
                    <span>Menus</span>
                </div>
                <div className="drop">
                    {render ? <CaretDownOutlined /> : <CaretUpOutlined />}
                </div>
            </div>
            {render &&
                <div className="item-list-drop">
                    <div onClick={goAddmenulist}>

                        <span>◍ Add New Menu</span>
                    </div>
                    <div onClick={AllMenulist}>
                        <span>◍ Menu List</span>
                    </div>
                </div>
            }

            <div className="item-list">
                <div className="items-arrange">
                    <FontAwesomeIcon icon={faClipboard} />
                </div>
                <div >
                    <span>Oders</span>
                </div>
            </div>

            <div className="item-list">
                <div className="items-arrange">
                    <FontAwesomeIcon icon={faTasks} />
                </div>
                <div>
                    <span>Restaurants List</span>
                </div>
            </div>

            <div className="item-list">
                <div className="items-arrange">
                    <FontAwesomeIcon icon={faCartPlus} />
                </div>
                <div>
                    <span>Add Product</span>
                </div>
            </div>
            <div className="item-list" onClick={allusers}>
                <div className="items-arrange">
                    <FontAwesomeIcon icon={faUsers} />
                </div>
                <div>
                    <span>Users</span>
                </div>
            </div>
        </div>
    )
}

export default Appslider;


{/* <ul className="slider-list">
                <li className="active" onClick={gohome}>
                    <HomeOutlined /><br />
                    <span>General</span>
                </li>
                <li>
                    <FormOutlined /><br />
                    <span>Menu</span>
                </li>
                <li >
                    <FontAwesomeIcon icon={faClipboard} /><br />
                    <span>Orders</span>
                </li>
                <li >
                    <FontAwesomeIcon icon={faTasks} /><br />
                    <span>Restaurants List</span>
                </li>
                <li onClick={allusers}>
                    <UsergroupAddOutlined />  <br />
                    <span>Users</span>
                </li>
            </ul> */}