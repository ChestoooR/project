import React from 'react';
import './Pagination.css'

const Pagination = ({handlePaginationClick, totalPages,page}) => {

    return(
        <div className="Pagination">
            <button 
                className="Pagination-button" 
                onClick={() => handlePaginationClick('previus')}
                disabled={page === 1}
            >
                &larr;
            </button>
            <span className="Pagination-info">
        {/*page {page} of <b>{totalPages}</b>*/}
        page {page} of { totalPages }
      </span>
            <button 
                className="Pagination-button" 
                onClick={() => handlePaginationClick('next')} 
                disabled={page === totalPages}
            >
                &rarr;
            </button>
        </div>
    )

}


export default Pagination;