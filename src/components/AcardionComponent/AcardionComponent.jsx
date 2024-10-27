import style from './AcardionComponent.module.css'
import { AccordeonItem } from './AcardionItem/AcardionItem'


export function Accordeon() {
    return (
        <>
            <div className={style.accordeon}>
                <AccordeonItem title='О нас' text='Мы лучшие' />
                <AccordeonItem title='Контакты' text='+7 (987) 275 59-12' />
                <AccordeonItem title='О вас' text='Вы тоже лучшие' />
            </div>
        </>
    )
}