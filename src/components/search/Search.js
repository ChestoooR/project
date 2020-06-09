import React from 'react'
import fetchServices from '../../services/FetchServices'
import Loading from '../loading/Loading'
import './Search.css'

class Search extends React.Component {

    constructor() {
        super()
        this.state = {
            searchQuery: '',
            searchResults: [],
            loading: false
        }
    }

    handleChange = async event => {
        const {value} = event.target

        this.setState ( {
            searchQuery: value
        })

        if(!value) return null
        this.setState({
            loading: true
        })

        const response = await fetchServices.get(`autocomplete?searchQuery=${value}`)

        this.setState({
            searchResults: response,
            loading: false
        })   
    }

    renderSearchResults = () => {

    }

    

    render() {

        const { searchQuery, loading } = this.state;

        return(
            <div className="Search">
                <span className="Search-icon" />
                <input
                    className="Search-input"
                    type="text"
                    value={searchQuery}
                    placeholder="Currency name"
                    onChange={this.handleChange}
                />

                {
                    loading &&    
                        <div className="Search-loading">
                            <Loading width='12px' height='12px'/>
                        </div>
                }

                {this.renderSearchResults()}
            </div>
        ) 
    }
}

export default Search