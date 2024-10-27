import style from './CatalogPage.module.css'
import { Catalog } from '../../components/CatalogComponent/Catalog'

export function CatalogPage() {
    return (
        <>
            <div className="container">
                <div className={style.catalog2}>
                    <Catalog />
                </div>
            </div>
        </>
    )
}