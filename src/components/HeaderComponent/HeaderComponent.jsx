import { NavLink } from 'react-router-dom'
import style from './Header.module.css'
import logo from '/src/assets/logo.svg'

export function Header() {
    return (
        <>
            <div className="center">
                <header className='container'>
                    <nav className={style.nav}>
                        <NavLink to="/" style={({ isActive, isPending, isTransitioning }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isActive ? "#0009EA" : "black",
                                viewTransitionName: isTransitioning ? "slide" : "",
                            };
                        }}>О нас</NavLink>
                        <NavLink to="/catalog" style={({ isActive, isPending, isTransitioning }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isActive ? "#0009EA" : "black",
                                viewTransitionName: isTransitioning ? "slide" : "",
                            };
                        }}>Каталог</NavLink>
                        <NavLink to="/users" style={({ isActive, isPending, isTransitioning }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isActive ? "#0009EA" : "black",
                                viewTransitionName: isTransitioning ? "slide" : "",
                            };
                        }}>Пользователи</NavLink>
                    </nav>
                    <img src={logo} alt="s" className={style.logo}>

                    </img>
                    <div className={style.header_btns}>
                        <button className={style.left}>Регистрация</button>
                        <button className={style.right}>Вход</button>
                    </div>
                </header>
            </div>

        </>
    )
}