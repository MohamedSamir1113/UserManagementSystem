import { useMediaQuery } from "react-responsive";

const NavBar = ({setIsCollapsed,isCollapsed}) => {
    const isScreenSmall = useMediaQuery({ query: "(max-width: 678px)" });
    return (
        <>
        {isScreenSmall?
        <div className="bg-danger  mb-3 d-flex align-items-center justify-content-end">
            
            <div className="bg-info d-flex align-items-center">
            <input type="text" className="form-control me-3" placeholder="Search" />
            <p>icon2</p>
            </div>

        </div>
        :
        <div className="bg-white py-2 mb-3 d-flex align-items-center justify-content-between">
        <i onClick={() => setIsCollapsed(!isCollapsed)} className="fa-solid fa-arrow-left px-5"></i>
            <div className="bg-info d-flex align-items-center me-5">
            <input type="text" className="form-control me-3" placeholder="Search" />
            <p>icon2</p>
            </div>
        </div>
        }
        </>
    )
}

export default NavBar;