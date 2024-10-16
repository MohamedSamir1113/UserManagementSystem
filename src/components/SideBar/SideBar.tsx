import { Link } from "react-router-dom";
import styles from "./SideBar.module.css"
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import profileImg from "../../assets/pexels-photo-2379004 1.png"
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
const SideBar = ({setIsCollapsed,isCollapsed}) => {

 
  const isScreenSmall = useMediaQuery({ query: "(max-width: 678px)" });
  const [toggled, setToggled] = useState(false);
  return <>
    {isScreenSmall ? <>
      <div >

        <Sidebar onBackdropClick={() => setToggled(false)} toggled={toggled} breakPoint="always" collapsed={isCollapsed}>

          <Menu className="vh-100" style={{ backgroundColor: "#F2EAE1" }}>

          <i onClick={() => setIsCollapsed(!isCollapsed)} className="fa-solid fa-arrow-left px-5"></i>

            <div className="text-center pt-5">
              <img src={profileImg} className={`${isCollapsed && "w-100"}`} style={{ borderRadius: "50%", backgroundColor: "transparent" }} alt="" />
              {isCollapsed?"":<h4 >Mohamed Samir</h4>}
            </div>

            <div>
              <MenuItem icon={<i className="fa-solid fa-home"></i>} component={<Link to={"home"} />}> Home</MenuItem>
              <MenuItem icon={<i className="fa fa-users"></i>} component={<Link to={"users"} />}>Users</MenuItem>
              <MenuItem icon={<i className="fa fa-user-plus"></i>} component={<Link to={"user-data"} />}> Add User </MenuItem>
              <MenuItem icon={<i className="fa-solid fa-id-card"></i>} component={<Link to={"profile"} />}> Profile </MenuItem>
            </div>

            <div>
              <MenuItem icon={<i className="fa-solid fa-right-from-bracket"></i>} component={<Link to={"/"} />}> Log Out </MenuItem>
            </div>
          </Menu>
        </Sidebar>

       
          <div className="sb-button position-fixed top-0 start-0 p-4" onClick={() => setToggled(!toggled)}>
          <i className="fa-solid fs-2 fa-bars"></i>
          </div>
        
      </div>

    </> : <>
      <div className={`${styles['sidebar-container']} vh-100`}>

        <Sidebar collapsed={isCollapsed}>

          <Menu style={{ backgroundColor: "#F2EAE1" }}>

           

            <div className="text-center pt-5">
              <img src={profileImg} className={`${isCollapsed && "w-100"}`} style={{ borderRadius: "50%", backgroundColor: "transparent" }} alt="" />
              {isCollapsed?"":<h4 >Mohamed Samir</h4>}
            </div>

            <div>
              <MenuItem icon={<i className="fa-solid fa-home"></i>} component={<Link to={"home"} />}> Home</MenuItem>
              <MenuItem icon={<i className="fa fa-users"></i>} component={<Link to={"users"} />}>Users</MenuItem>
              <MenuItem icon={<i className="fa fa-user-plus"></i>} component={<Link to={"user-data"} />}> Add User </MenuItem>
              <MenuItem icon={<i className="fa-solid fa-id-card"></i>} component={<Link to={"profile"} />}> Profile </MenuItem>
            </div>

            <div>
              <MenuItem icon={<i className="fa-solid fa-right-from-bracket"></i>} component={<Link to={"/"} />}> Log Out </MenuItem>
            </div>
          </Menu>
        </Sidebar>
      </div>
    </>}
  </>;
}

export default SideBar;