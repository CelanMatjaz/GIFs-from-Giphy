import React, { Component } from 'react';

class Search extends Component {
    state = {
        searchTerm: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        if(this.state.searchTerm) this.props.search(this.state.searchTerm);
    }

    render() {
        const { searchTerm } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Search" value={searchTerm} id="searchTerm" onChange={this.handleChange}/> <br/>
                <div id="slider"><input type="range" min="1" max="100" value={this.props.limit} id="gifNum" onChange={this.props.changeLimit}/> Number of gifs: {this.props.limit}<br/></div>
                <button>Search</button>
            </form>
        );
    }
}

export default Search;