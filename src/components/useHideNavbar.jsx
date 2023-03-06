import { useLocation } from "react-router-dom";

function useHideNavbar() {
    const location = useLocation();
    const hideNavbarRoutes = ['/signin', '/signup'];
    return hideNavbarRoutes.includes(location.pathname);
}

export default useHideNavbar;