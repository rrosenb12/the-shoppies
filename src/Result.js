import React from "react"
import {connect} from "react-redux"
import {nominateMovie} from "./movieActions"

function Result(props){
    return(
        <div key={props.movie.imbdID}>
            <p>{props.movie.Title}</p>
            <p>{props.movie.Year}</p>
            <button 
                disabled={props.nominees.includes(props.movie) || props.nominees.length === 5 ? true : false}
                onClick={() => {
                    props.nominateMovie(props.movie)
                }}>Nominate</button>
        </div>
    )
}
const mapStateToProps = state => ({nominees: state.nominatedMovies})

export default connect(mapStateToProps, {nominateMovie})(Result)