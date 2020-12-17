import React from "react"
import {connect} from "react-redux"
import Nominee from "./Nominee"

function NomineesContainer(props){
    return(
        <ul>
            Nominations
            {props.nominees.length !== 0 && props.nominees.map(nominee => <Nominee key={nominee.imbdID} nominee={nominee}/>)}
        </ul>
    )
}

const mapStateToProps = state => ({nominees: state.nominatedMovies})

export default connect(mapStateToProps)(NomineesContainer)