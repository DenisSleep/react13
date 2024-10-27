import style from './UsersPage.module.css'
import { useState, useEffect } from 'react';
import { Search } from '../../components/SearchComponent/SearchComponent';

export function UsersPage() {
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState();
    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target)
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: formData
        })
        e.target.reset();
        setMessage('Форма успешно отправлена')
    }
    async function fetchUsers() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        setUsers(users);
    }
    useEffect(() => {
        fetchUsers();
        
    }, []);

    const [query, setQuery] = useState('');
    function handleChange(e) {
        setQuery(e.target.value);
    }
    const filteredProducts = users.filter((user) => {
        return user.name.toLowerCase().includes(query.toLowerCase());
    })


    return (
        <>

            <div className="container mt110">
                <Search handleChange={handleChange} />
                <form className={style.user_add} onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Имя" />
                    <button type="submit">Отпраить форму</button>
                    <div className={style.message}>{message}</div>
                </form>
                <div className={style.flex}>
                    {
                        filteredProducts.length ?
                            filteredProducts.map((user) => {
                                return (
                                    <>
                                        <div key={user.id} className={style.item}>
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="" />
                                            <div className="user">{user.name}</div>
                                        </div>
                                    </>
                                )
                            })
                            :
                            <p className="error">Ничего не найдено по запросу "{query}"</p>
                    }

                </div>
            </div>
        </>
    )
}