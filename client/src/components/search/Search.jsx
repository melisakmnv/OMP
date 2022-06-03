import './search.css'
import loop from '../../assets/loop.png'
import Filter from '../filter/Filter'

const Search = () => {
    return (
        <div className='search__container'>
            <div className='search__bar'>
                <input type="text" placeholder="A la recherche d'une bière ?" />
                <div className="search__btn">
                    <img src={loop} alt="loop" />
                </div>
            </div>
            <div className='search__filter'>
                <Filter />
            </div>
        </div>
    )
}


export default Search