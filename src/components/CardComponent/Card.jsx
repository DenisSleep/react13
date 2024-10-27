import { Link } from 'react-router-dom'
import style from './Card.module.css'
import card_img from '/src/assets/card.png'
import ReactModal from 'react-modal'
import { useState } from 'react'


export function Card({ id, img, name, price, count }) {
    const [modalIsOpen, setIsOpen] = useState(false);
    function OpenModal() {
        setIsOpen(true)
    }
    function closeModal() {
        setIsOpen(false)
    }
    return (
        <>
            <div className={style.card}>
                <img src={img} alt={card_img} />
                <p className={style.card_name}>{name}</p>
                <p className={style.card_price}>{count} кол-во</p>
                <div className={style.card_bottom}>
                    <p className={style.card_price}>{price} ₽</p>
                    {
                        count > 0 ? <Link to={`/catalog/${id}`} className={style.card_btn}>Подробнее</Link> : count == 0 ? <p onClick={OpenModal} className={style.card_btn}>Нет в наличии</p> : s
                    }
                    <ReactModal isOpen={modalIsOpen} className={style.modal}>
                        <p className={style.modal_text}>Закажите товар</p>
                        <form action="#" method="post" className={style.modalForm}>
                            <input type="email" placeholder='Ваша почта' className={style.modalInput} />
                            <input type="text" placeholder='Кол-во товара'  className={style.modalInput} />
                            <div className={style.btns_flex}>
                                <button onClick={closeModal} >Закрыть</button>
                                <input className={style.submit} type="submit" value="Заказать" />
                            </div>
                        </form>
                    </ReactModal>
                </div>
            </div>
        </>
    )

}