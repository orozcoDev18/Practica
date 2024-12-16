import { useLocation } from "react-router-dom";
import "./Header.css";


const Header = () => {
    const location = useLocation();

    const getTitle = () => {
        switch (location.pathname) {
            case "/":
                return "Inicio";
            case "/users":
                return "Usuarios";
            case "/create-user":
                return "Create User";
            default:
                return "Página desconocida";
        }
    };

    return (
        <header>
            <h1>{getTitle()}</h1>
        </header>
    );
};

export default Header;
