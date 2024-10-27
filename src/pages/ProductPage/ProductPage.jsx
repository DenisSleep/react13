import style from './ProductPage.module.css';
import { products } from '../../data/data';
import { Link, useParams } from 'react-router-dom';


export function ProductPage() {
    const { id } = useParams();
    const product = products.find(product => product.id == id);
    return (
        <>
            <div className="container mt110">
                <Link to={'/catalog'} className={style.back}>На главную</Link>
                <div className={style.main_flex}>
                    <img src={product.img} alt="s" className={style.img} />
                    <div className={style.right_flex}>
                        <p className={style.title}>{product.name}</p>
                        <p className={style.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <div className={style.bottom_flex}>
                            <p className={style.price}>{product.price} ₽</p>
                            <button className={style.add_brn}>Добавить в корзину</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}