import style from './Catalog.module.css'
import { Card } from '../CardComponent/Card'
import { Category } from '../CategoryComponent/CategoryComponent'
import { products } from '../../data/data'
import { Search } from '../SearchComponent/SearchComponent'
import { useState } from 'react'

export function Catalog() {
    const [query, setQuery] = useState('');
    const [sorting, setSorting] = useState('');
    function sort(e) {
        setSorting(e.target.value)
    }
    function handleChange(e) {
        setQuery(e.target.value);
    }
    const filteredProducts = products.filter((product) => {
        return product.name.toLowerCase().includes(query.toLowerCase());
    })

    const sortProduct = (sorting, products) => {
        switch (sorting) {
            case 'price_up':
                return [...products].sort((a, b) => a.price - b.price);
            case 'price_down':
                return [...products].sort((a, b) => b.price - a.price);
            case 'count_up':
                return [...products].sort((a, b) => a.count - b.count);
            case 'count_down':
                return [...products].sort((a, b) => b.count - a.count);
            default:
                return products;
        }
    }

    const sortedProducts = sortProduct(sorting, filteredProducts)
    return (
        <>
            <div className={style.catalog}>
                <p className={style.catalog_title}>Каталог товаров</p>
                <div className={style.categories}>
                    <p className={style.p}>Категории:</p>
                    <Category />
                </div>
                <Search handleChange={handleChange} />
                <select className={style.sort} onChange={sort}>
                    <option value="price_up" >Цена по убыванию</option>
                    <option value="price_down">Цена по возрастанию</option>
                    <option value="count_up" >Количество по убыванию</option>
                    <option value="count_down">Количество по возрастанию</option>
                </select>
            </div>
            <div className={style.catalog_grid}>
                {
                    sortedProducts.length ?
                        sortedProducts.map((product, index) => {
                            return (
                                <Card {...product} />
                            )
                        })
                        :
                        <p className="error">Ничего не найдено по запросу "{query}"</p>
                }
            </div>
        </>
    )
}