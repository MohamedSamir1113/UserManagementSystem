import { Link } from "react-router-dom";
import styles from "./SideBar.module.css"
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import profileImg from "../../assets/pexels-photo-2379004 1.png"
import { useState } from "react";
const SideBar = () => {
    const [isCollapsed,setIsCollapsed]=useState(false);
    return <>
        <div className={`${styles['sidebar-container']} vh-100`}>
            <Sidebar collapsed={isCollapsed}>
                <Menu style={{ backgroundColor: "#F2EAE1" }}>
                    <i onClick={()=>setIsCollapsed(!isCollapsed)} className="fa-solid fa-arrow-left px-5"></i>
                    <div className="text-center pt-5">
                        <img src={profileImg} className={`${isCollapsed&&"w-100"}`} style={{ borderRadius: "50%", backgroundColor: "transparent" }} alt="" />
                        <h4 className={`${isCollapsed&&"fs-6"}`}>Mohamed Samir</h4>
                    </div>

                    <MenuItem icon={<i className="fa-solid fa-home"></i>} component={<Link to={"home"} />}> Home</MenuItem>
                    <MenuItem icon={<i className="fa fa-users"></i>} component={<Link to={"users"} />}>Users</MenuItem>
                    <MenuItem icon={<i className="fa fa-user"></i>} component={<Link to={"user-data"} />}> Add User </MenuItem>
                    <MenuItem icon={<i className="fa-solid fa-person-rifle"></i>} component={<Link to={"profile"} />}> Profile </MenuItem>



                </Menu>
            </Sidebar>
        </div>
    </>;
}

export default SideBar;