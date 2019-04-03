import React from 'react';

const GifsContainer = props => {
    const gifs = props.gifs.map(gif => <img key={gif.id} src={gif.images.downsized.url} alt={gif.title}/>);
    return (
        <div id="gifs-container">
            {gifs.length ? gifs : 'No gifs to display'}
        </div>
    );
};

export default GifsContainer;