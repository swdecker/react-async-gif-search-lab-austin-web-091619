import React, { Component } from 'react'

export default class GifSearch extends Component {
    state = {
        searchText: ""
    }
    handleChange = (event)=>{
        this.setState({
            searchText: event.target.value
        })
    }
    handleSubmit = (event)=>{
        event.preventDefault()
        this.props.handleSearchSubmit(this.state.searchText)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.searchText} onChange={this.handleChange}/>
                    <input type="submit" value="Search GIFs" />
                </form>  
            </div>
        )
    }
}


