import { useState } from 'react'
import style from './AcardionItem.module.css'


export function AccordeonItem({ title, text }) {
    const [isActive, setIsActive] = useState(false);
    return (
        <>
            <div className={style.item}>
                <div className={style.title} onClick={() => setIsActive(!isActive)}>
                    <p>{title}</p>
                    {
                        isActive ? <p className={style.arror}>⬆️</p> : <p className={style.arror}>⬇️</p>
                    }
                    
                </div>
                {
                    isActive && <p className={style.text}>{text}</p>
                }
            </div>
        </>
    )
}