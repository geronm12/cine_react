import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../components/SearchForm';
import MoviesList from '../components/MoviesList';
import {Title} from '../components/Title';


export class Home extends Component{
    state = {usedSearch: false, results: [], loading: false}
    

    _handleLoading = (loading) =>{
       
     loading? setInterval(() => {
     this.setState({loading:false})
     }, 3000) : this.setState({loading:true})

    }
   
    _handleResults = (resultados, loading) =>  
    {
       
      this.setState({ results: resultados, usedSearch: true});
      this._handleLoading(false);
       
    }
  
    _renderResults()
    {
      console.log(this.state.results);
      return (this.state.results.length === 0 ? <p>Sorry! Results not found!</p>: <MoviesList movies={this.state.results}/>)
    }
   
render()
{
    return(
    <div>
     <Title>Search Movies</Title>
      <div className='SearchForm-Wrapper'>
       <SearchBar placeholder='Buscar Peliculas' action='Buscar' onResults= {this._handleResults} onLoading={this._handleLoading}/>
      </div>
       <br/>
      { this.state.loading ?  
        <progress className="progress is-small is-info" max="100">
        </progress>  : this.state.usedSearch ? this._renderResults() : <small>Use the form to search movies</small>}
      </div>);
}



}