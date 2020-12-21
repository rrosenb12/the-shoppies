import "./App.css";
import Search from "./Search";
import ResultsContainer from "./ResultsContainer";
import NomineesContainer from "./NomineesContainer";
import React from "react";
import { connect } from "react-redux";
import Result from "./Result";

class App extends React.Component {
  state = {
    searchTerm: "",
  };

  handleSearch = (searchTerm) => {
    this.setState({
      searchTerm: searchTerm,
    });
  };

  render() {
    return (
      <div className="app">
        {this.props.nominees.length === 5 && (
          <div className="fade">
            <div className="banner">
              <p className="message">you have reached your nominee limit</p>
              <p className="message">
                please un-nominate a movie
              </p>
              <div className="banner-results">
                {this.props.nominees.map((nominee) => (
                  <Result type="nominee" key={nominee.imbdID} movie={nominee} />
                ))}
              </div>
            </div>
          </div>
        )}
        <div className="top">
          <h1 className="title-header">The Shoppies</h1>
          <Search handleSearch={this.handleSearch} />
        </div>
        <div className="main-body">
          <ResultsContainer searchTerm={this.state.searchTerm} />
          <NomineesContainer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ nominees: state.nominatedMovies });

export default connect(mapStateToProps)(App);
