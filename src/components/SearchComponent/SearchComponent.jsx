import style from './SearchComponent.module.css'

export function Search({ handleChange }) {
    return (
        <>
            <input type="text" className={style.search} onChange={handleChange} placeholder='Поиск' />
        </>
    )
}