import { useNavigate } from "react-router-dom"; // Importa useNavigate
import Button from "../components/button";

const Home = () => {
    const navigate = useNavigate(); // Inicializa useNavigate para manejar el redireccionamiento

    const pageCreateUsers = () => {
        // Redirige a la página de usuarios al hacer clic en el botón
        navigate("/create-user");
    };
    const pageUsers = () => {
        // Redirige a la página de usuarios al hacer clic en el botón
        navigate("/users");
    };

    return (
        <div className="flex flex-col items-center justify-center w-screen h-96 bg-gray-100">
            <h1 className="text-4xl font-bold text-blue-500">Bienvenido a mi proyecto</h1>
            <p className="text-gray-700 mt-4">Este es un proyecto básico con React y TypeScript.</p>
            <div className="flex flex-row justify-between content-center w-2/3 ">
                <Button label="Lista de Usuarios" onClick={pageUsers} />
                <Button label="Registrar Usuario" onClick={pageCreateUsers} />
            </div>
        </div>
    );
};

export default Home;
