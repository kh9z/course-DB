import { Link } from "react-router-dom";

export default function LoginPage() {
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-4">Авторизація</h1>
                <form className="max-w-md mx-auto">
                    <input type="email" placeholder="електрона пошта" />
                    <input type="password" placeholder="пароль" />
                    <button className="primary">Увійти</button>
                    <div className="text-center py-2 text-gray-500">
                        Ви не зареєстрованні ? <Link className="underline text-black" to={'/register'}>Зареєструватися</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}