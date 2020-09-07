import React from 'react';

const CovidCard = ({ data, country }) => {
    return (
        <div className='card'>
            <div className="card-content ">
                <div className='columns is-mobile'>
                    <div className='column has-text-centered'>
                        <p>{country}</p>
                        <p>{data}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CovidCard;