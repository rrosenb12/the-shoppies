import React from "react"
import {connect} from "react-redux"
import {removeMovie} from "./movieActions"

function Nominee(props){
    return(
        <>
            <li>{props.nominee.Title}, {props.nominee.Year}</li>
            <button onClick={() => {
                props.removeMovie(props.nominee)
            }}>Remove</button>
        </>
    )
}


export default connect(null, {removeMovie})(Nominee)