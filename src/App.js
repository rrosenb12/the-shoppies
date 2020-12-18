import './App.css';
import Search from "./Search"
import ResultsContainer from "./ResultsContainer"
import NomineesContainer from "./NomineesContainer"
import React from "react"
import {connect} from "react-redux"

class App extends React.Component {

  state = {
    searchTerm: ""
  }
  
  handleSearch = (searchTerm) => {
    this.setState({
      searchTerm: searchTerm
    })
  }

  render(){
  return (
    <div className="app">
      <div className="top">
        <h1 className="title-header">The Shoppies</h1>
        <Search handleSearch={this.handleSearch}/>
      </div>
      {this.props.nominees.length === 5 && <div className="banner">you have reached your nominee limit</div>}
      <div className="main-body">
        <ResultsContainer searchTerm={this.state.searchTerm}/>
        <NomineesContainer />
      </div>
    </div>
  )};
}

const mapStateToProps = state => ({nominees: state.nominatedMovies})

export default connect(mapStateToProps)(App);
