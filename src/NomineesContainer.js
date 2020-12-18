import React from "react"
import {connect} from "react-redux"
import Result from "./Result"

function NomineesContainer(props){
    return(
        <div className="nomination-container">
            {props.nominees.length !== 0 ? <h3>Nominations</h3> : <h3>Movies you nominate will appear here</h3>}
            <ol>
                {props.nominees.length !== 0 && props.nominees.map(nominee => <Result type="nominee" key={nominee.imbdID} movie={nominee}/>)}
            </ol>
        </div>
    )
}

const mapStateToProps = state => ({nominees: state.nominatedMovies})

export default connect(mapStateToProps)(NomineesContainer)