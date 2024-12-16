import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useUserContext } from "../context/UserContext";

type FormData = {
    name: string;
    email: string;
};

const validationSchema = Yup.object().shape({
    name: Yup.string().required("El nombre es obligatorio"),
    email: Yup.string().email("Email inválido").required("El email es obligatorio"),
});

const CreateUser = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit: SubmitHandler<FormData> = (data) => {
        addUser({ id: Date.now(), ...data });
        alert("Usuario creado y añadido al contexto");
    };

    const { addUser } = useUserContext();

    return (
        <div className="p-8 w-screen h-96">
            <h1 className="text-2xl font-bold mb-4">Crear Usuario</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label className="block">Nombre:</label>
                    <input
                        type="text"
                        {...register("name")}
                        className="border p-2 w-full"
                    />
                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                </div>
                <div>
                    <label className="block">Email:</label>
                    <input
                        type="email"
                        {...register("email")}
                        className="border p-2 w-full"
                    />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                </div>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
                    Crear Usuario
                </button>
            </form>
        </div>
    );
};

export default CreateUser;
