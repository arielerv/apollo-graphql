import React, {useState} from 'react';

import {IEvent, ISearchProduct} from 'interfaces';

import {Container, SearchInput, SearchButton} from './styled';

function SearchParams({onSearch}: {onSearch: (values: ISearchProduct) => void}) {
    const [search, setSearch] = useState({term: ''});

    const handleSearch = (e: IEvent) => {
        e.preventDefault();
        return onSearch(search);
    };

    return (
        <Container onSubmit={handleSearch}>
            <SearchInput
                data-testid="search-input"
                value={search.term}
                onChange={e => setSearch({...search, term: e.target.value})}
                placeholder="Search by term"
                style={{width: '100%', maxWidth: '500px', height: '50px'}}
            />
            <SearchButton type="submit">Buscar</SearchButton>
        </Container>
    );
}

export default SearchParams;
