import React from "react"
import {addMoviesToMainContainer} from "./movieActions"
import {connect} from "react-redux"

class Search extends React.Component{
    state={
        searchTerm:""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://www.omdbapi.com/?s=${this.state.searchTerm}&apikey=38d091f`)
        .then(response => response.json())
        .then(response => {
            this.props.addMoviesToMainContainer(response.Search)
            this.props.handleSearch(this.state.searchTerm)
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="searchTerm" value={this.state.searchTerm} onChange={this.handleChange}/>
                <input type="submit"/>
            </form>
        )
    }
}

export default connect(null, {addMoviesToMainContainer})(Search)