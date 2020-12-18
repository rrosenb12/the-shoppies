import React from "react";
import { connect } from "react-redux";
import { nominateMovie, removeMovie } from "./movieActions";

function Result(props) {
  return (
    <li key={props.movie.imbdID}>
      <div className="result">
        <p>
          {props.movie.Title}, {props.movie.Year}
        </p>
        <button
          disabled={
            (props.nominees.includes(props.movie) || props.nominees.length === 5) && props.type === "result" 
                ? true 
                : false
          }
          onClick={() => {
            props.type === "result"
              ? props.nominateMovie(props.movie)
              : props.removeMovie(props.movie);
          }}
        >
          {props.type === "result" ? "Nominate" : "Remove"}
        </button>
      </div>
    </li>
  )
}
const mapStateToProps = (state) => ({ nominees: state.nominatedMovies });

export default connect(mapStateToProps, { nominateMovie, removeMovie })(Result);
