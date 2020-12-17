import React from "react"
import {connect} from "react-redux"
import Result from "./Result"

function resultsContainer(props){
    return(
        <div>
            {props.searchTerm === "" ? <h1>Search for Movies</h1> : <h1>Results for {props.searchTerm}</h1>}
            {props.searchTerm !== "" && props.moviesArray.map(movie => <Result key={movie.imbdID} movie={movie}/>)}
        </div>
    )
}

const mapStateToProps = state => ({moviesArray: state.moviesArray})

export default connect(mapStateToProps)(resultsContainer)