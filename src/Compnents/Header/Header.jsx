import logo from "../../Assests/images/logo.png"
import "./Header.css"
import { DownOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import type { MenuProps } from 'antd';
import { Dropdown, Space, Typography } from 'antd';
import {
    HomeOutlined,
    UsergroupAddOutlined,
    FormOutlined,
    FileAddOutlined
} from "@ant-design/icons"
function Header() {
    const navigate = useNavigate()

    const Goprofile = () => {
        navigate("/profile")
    }
    const items: MenuProps['items'] = [
        {
            key: '1',
            label: "Profile",
            icon:<UsergroupAddOutlined/>,
            onClick: Goprofile,
        },
        {
            key: '2',
            label: 'Logout',
        },
    ];
    return (
        <div className="Header">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="header-icon">
                <div>
                    <span style={{ color: "#7e37d8" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>
                    </span>
                </div>
                <div>
                    <img src={require("../../Assests/images/headericon1.png")} alt="" />
                </div>
                <div>
                    <img src={require("../../Assests/images/headericon2.png")} alt="" />
                </div>
                <div>
                    <img src={require("../../Assests/images/headericon3.png")} alt="" />
                </div>
                <div>
                    <img src={require("../../Assests/images/headericon4.png")} alt="" />
                </div>
                <div>
                    <Dropdown
                        menu={{
                            items,
                            selectable: true,
                            defaultSelectedKeys: ['1'],
                        }}
                    >
                        <Typography.Link>
                            <Space>
                                <img src={require("../../Assests/images/headericon5.png")} alt="" width={100} />
                            </Space>
                        </Typography.Link>
                    </Dropdown>
                </div>
            </div>

        </div>
    );
}

export default Header
