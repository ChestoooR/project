import React from 'react';

class List extends React.Component {
    constructor() {
        super()

        this.state = {
            loading: false,
            currecies: [],
            error: null
        }
    }

    componentDidMount() {
        
    }

    render() {
        const { loading } = this.state
        if(loading) {
            return <div>Loading...</div>
        }
        return(
            <div>Text</div>
        )
    }
}


export default List