import React from "react"
import {connect} from "react-redux"
import Result from "./Result"

function resultsContainer(props){
    return(
        <div className="results-container">
            {props.searchTerm === "" ? <h3>Movies you search for will appear here</h3> : <h3>Results for "{props.searchTerm}"</h3>}
            {props.searchTerm !== "" && props.moviesArray.map(movie => <ul><Result type="result" key={movie.imbdID} movie={movie}/></ul>)}
        </div>
    )
}

const mapStateToProps = state => ({moviesArray: state.moviesArray})

export default connect(mapStateToProps)(resultsContainer)