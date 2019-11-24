import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
export default class GifListContainer extends Component {
    state={
        Gifs:[]
    }
    handleSearchSubmit =(searchTerm)=>{
        const searchURL = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${process.env.REACT_APP_API_KEY}&limit=3&rating=g`
        

        fetch(searchURL)
        .then(response=>response.json())
        .then(gifs=>{
            
            let gifURLs = gifs.data.map(gif=>gif.images.original.url)
            this.setState({
                Gifs: gifURLs
            })
        })
    }
    
    render() {
        return (
            <div>
                <GifList Gifs={this.state.Gifs} />
                <GifSearch handleSearchSubmit={this.handleSearchSubmit}/>
            </div>
        )
    }

    
}
