import useFetchUsers from "../hooks/useFetchUsers";

const Users = () => {
    // Usamos el hook para obtener los datos de los usuarios y el estado de carga
    const { users, loading } = useFetchUsers();

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Lista de Usuarios</h1>

            {/* Mostrar mensaje de carga mientras los datos no están disponibles */}
            {loading ? (
                <p>Cargando...</p>
            ) : (
                // Una vez cargados, mostramos la lista de usuarios
                <ul className="list-disc pl-5">
                    {users.map((user) => (
                        <li key={user.id}>
                            {user.name} - {user.email}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Users;
