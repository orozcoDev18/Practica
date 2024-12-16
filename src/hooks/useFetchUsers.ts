import { useEffect, useState } from "react";
import { User } from "../types/user";

const useFetchUsers = () => {
    const [error, setError] = useState<string | null>(null);
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true); // Muestra que la carga está en progreso
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                if (!response.ok) throw new Error("Error al cargar usuarios");
                const data = await response.json();
                setUsers(data); // Guarda los usuarios en el estado
            } catch (err) {
                setError((err as Error).message); // Maneja el error
            } finally {
                setLoading(false); // Indica que la carga terminó
            }
        };

        fetchUsers();
    }, []); // Este efecto se ejecuta solo una vez al montar el componente

    return { users, loading, error };
};

export default useFetchUsers;
