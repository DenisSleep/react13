import style from './Category.module.css'

export function Category() {
    return (
        <>
            <div className={style.category}>
                <p className={style.active}>Все товары</p>
                <p>Краны</p>
                <p>Души</p>
                <p>Смесители</p>
            </div>
        </>
    )
}