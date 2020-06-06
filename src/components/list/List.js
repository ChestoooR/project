import React from 'react';
import fetchService from '../../services/FetchServices';
import Table from './Table';
import Pagination from '../pagination/Pagination';
import Loading from '../loading/Loading';
import './Table.css';

class List extends React.Component {
    constructor() {
        super()

        this.state = {
            loading: true,
            currencies: [],
            error: null,
            page: 1,
            totalPages: 0
        }
    }

    handlePaginationClick = direction => {
        if(direction === 'next') {
            this.setState(prev => ({page: prev.page + 1}), this.currenciesGetter)
        } else {
            this.setState(prev => ({page: prev.page - 1}), this.currenciesGetter)
        }

        
    }

    currenciesGetter = async () => {
        const { page } = this.state
        const response = await fetchService.get(`cryptocurrencies?page=${page}&perPage=20`);
        this.setState( {
            currencies: response.currencies,
            loading: false,
            totalPages: response.totalPages


        })
    }

    

    componentDidMount() {   
        this.currenciesGetter()
    }

    render() {
        const { loading, currencies, totalPages, page } = this.state;

        console.log(currencies)

        if(loading) {
           return    <div className="loading-container">
                <Loading />
            </div>
        }
        return(
            <>
                <Table 
                    currencies={currencies}
                />
                <Pagination 
                    handlePaginationClick={this.handlePaginationClick} 
                    totalPages={totalPages}    
                    page={page}
                />
            </>
        )
    }
}


export default List