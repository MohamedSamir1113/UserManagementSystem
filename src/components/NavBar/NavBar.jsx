import { useMediaQuery } from "react-responsive";

const NavBar = ({ setIsCollapsed, isCollapsed }) => {
    const isScreenSmall = useMediaQuery({ query: "(max-width: 678px)" });
    return (
        <>
            {isScreenSmall ?
                <div className="bg-white py-2 mb-3 d-flex align-items-center justify-content-end">

                    <div className="d-flex align-items-center me-5">
                        <input type="text" className="form-control me-1" placeholder="Search" />
                        <i className="fa-regular text-muted fa-bell"></i>
                    </div>

                </div>
                :
                <div className="bg-white py-2 mb-3 d-flex align-items-center justify-content-between">
                    {isCollapsed ? <i onClick={() => setIsCollapsed(!isCollapsed)} style={{cursor:"pointer"}} className="fa-regular fa-circle-left px-5"></i> : <i onClick={() => setIsCollapsed(!isCollapsed)} style={{cursor:"pointer"}} className="fa-regular fa-circle-xmark px-5"></i>}
                    <div className="d-flex align-items-center me-5">
                        <input type="text" className="form-control me-1" placeholder="Search" />
                        <i className="fa-regular text-muted fa-bell"></i>
                    </div>
                </div>
            }
        </>
    )
}

export default NavBar;


