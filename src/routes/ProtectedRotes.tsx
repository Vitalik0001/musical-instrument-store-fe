import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Route } from "./route.enum";

const blacklist: string[] = [Route.Login, Route.Registration];

const VISITED_PATHS_KEY = "visitedPaths";

interface ProtectedRouteProps {
    redirectPath?: Route;
}

const ProtectedRoutes = ({
    redirectPath = Route.General,
}: ProtectedRouteProps) => {
    const location = useLocation();
    const currentPath = location.pathname;
    const token = localStorage.getItem("token");

    const rawVisitedPaths = localStorage.getItem(VISITED_PATHS_KEY);
    const visitedPaths: string[] = rawVisitedPaths
        ? JSON.parse(rawVisitedPaths)
        : [];

    if (!blacklist.includes(currentPath)) {
        if (visitedPaths[visitedPaths.length - 1] !== currentPath) {
            visitedPaths.push(currentPath);
            localStorage.setItem(
                VISITED_PATHS_KEY,
                JSON.stringify(visitedPaths)
            );
        }
    }

    if (!token) {
        return <Navigate to={redirectPath} replace />;
    }

    if (blacklist.includes(currentPath)) {
        const filteredPaths = visitedPaths.filter(
            (path) => !blacklist.includes(path)
        );
        const lastVisitedPath = filteredPaths.length
            ? filteredPaths[filteredPaths.length - 1]
            : redirectPath;

        return <Navigate to={lastVisitedPath} replace />;
    }

    return <Outlet />;
};

export default ProtectedRoutes;
