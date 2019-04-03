import React, { Component } from 'react';

//Components
import GifsContainer from './components/GifsContainer';
import Search from './components/Search';

class App extends Component {
    state = {
        data: {
            data: []
        },
        limit: 20
    }

    componentDidMount = () => {
        this.getTrendingGifs();
    }

    search = async (searchTerm, num) => {
        if(searchTerm){
            const res = await fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=r0dJ06NOMhNIPXNXfJxR1SwSmsFodOYM&limit=${this.state.limit}`, requestOptions);
            const data = await res.json();
            this.setState({data});
        }
    }

    clear = () => {
        this.setState({
            data: { data: [] }
        })
    }

    changeLimit = e => {
        this.setState({
            limit: e.target.value
        })
    }

    getTrendingGifs = async () => {
        const res = await fetch(`http://api.giphy.com/v1/gifs/trending?api_key=r0dJ06NOMhNIPXNXfJxR1SwSmsFodOYM&limit=${this.state.limit}`,requestOptions);
        const data = await res.json();
        this.setState({data});
    }

    render() {
        return (
            <div className="App container">
                <h1><a href="https://developers.giphy.com" rel="noopener noreferrer" target="_blank">Giphy API</a></h1>
                <button onClick={this.clear}>Clear gifs</button>
                <button onClick={this.getTrendingGifs}>Reload trending gifs</button>
                <Search search={this.search} changeLimit={this.changeLimit} limit={this.state.limit}/>
                <GifsContainer gifs={this.state.data.data}/>
            </div>
        );
    }
}

const requestOptions = { 
    headers: { 
        accept: 'image/*', 
        'Access-Control-Request-Method': 'GET' 
    }
}


export default App;

