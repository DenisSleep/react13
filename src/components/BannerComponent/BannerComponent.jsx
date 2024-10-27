import style from './Banner.module.css'

export function Banner() {
    return (
        <>
            <div className={style.main_fon}>
                <p className={style.txt}>
                    О компании <span className={style.span}> АвтоТорг</span>
                </p>
            </div>
        </>
    )
}