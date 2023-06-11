import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    function registerUser(ev) {
        ev.preventDefault();
        axios.post('/register', {
            name,
            email,
            password
        }).then((res)=>{
            console.log(res);
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-4">Реєстрація</h1>
                <form className="max-w-md mx-auto" onSubmit={registerUser}>
                    <input type="text"
                        placeholder="логін"
                        value={name}
                        onChange={ev => setName(ev.target.value)}
                    />
                    <input type="email"
                        placeholder="електрона пошта"
                        value={email}
                        onChange={ev => setEmail(ev.target.value)}
                    />
                    <input type="password"
                        placeholder="пароль"
                        value={password}
                        onChange={ev => setPassword(ev.target.value)}
                    />
                    <button className="primary">Зареєструватися</button>
                    <div className="text-center py-2 text-gray-500">
                        Ви зареєстрованні ? <Link className="underline text-black" to={'/login'}>Увійти</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}