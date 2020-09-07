import React from 'react';

const CovidCard = ({ country }) => {

    return (
        <div className='card'>
            <div className="card-content ">
                <div className='columns is-mobile'>
                    <div className='column has-text-centered'>
                        {country}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CovidCard;