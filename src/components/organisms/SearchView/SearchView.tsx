import React, { useState } from 'react'
import { RootStateOrAny, useSelector } from 'react-redux'
import { closeSearch } from '../../../actions'
import styleSearchView from './SearchView.module.scss'

const SearchView = ({search}: any) => {
    const [veterinari, setveterinari] = useState([])
    const showSearchView = useSelector((state: RootStateOrAny) => state.visibilityFilter)
    return (
        <>
            {
                showSearchView !== 'NOT_SHOWED' &&
                <div className={styleSearchView.containerSearchView}>
                    <div className={styleSearchView.buttonEnd}>
                        <button onClick={()=>closeSearch()}>x</button>
                    </div>
                    <p>{search.nome} {search.localita}</p>
                    {
                        veterinari.map((veterinario) => (
                            <div>daaddadaaddaaa</div>
                        ))
                    }
                </div>
            }
        </>
    )
}

export default SearchView
