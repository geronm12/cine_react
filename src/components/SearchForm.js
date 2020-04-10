import React, { Component } from 'react';

const API_KEY = '25fe40b9';
    

export default class SearchBar extends Component{
 state = {
     inputmovie: '',
    }

_handleChange = (e) => {
    this.setState({inputmovie: e.target.value});
}

_handleSubmit = (e) =>
{
  e.preventDefault();
  
  const {inputmovie} = this.state;
  

  this.props.onLoading(true);


  fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputmovie}`)
  .then(result => result.json()).then(data => {
  const {Search = [], totalResults = 0} = data;
  
  this.props.onResults(Search)
  
  }).catch(err => console.log(err));

}

 


render(){
const {placeholder,action, onResults, onLoading} = this.props;
return (
        <form onSubmit={this._handleSubmit}>
        <div className='field has-addons'>
        <div className='control'> 
        <input className='input' type='text' placeholder={placeholder} onChange={this._handleChange}/>
        </div>
        <div className='control'>
         <button className='button is-info'> 
         {action}
         </button>
        </div>
         </div> 
        </form>
     );

  }
}


 






 