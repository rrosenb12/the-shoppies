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
    <div >
      <h1>The Shoppies</h1>
      <Search handleSearch={this.handleSearch}/>
      <ResultsContainer searchTerm={this.state.searchTerm}/>
      <NomineesContainer />
      {this.props.nominees.length === 5 && <span>you have reached your nominee limit</span>}
    </div>
  )};
}

const mapStateToProps = state => ({nominees: state.nominatedMovies})

export default connect(mapStateToProps)(App);
