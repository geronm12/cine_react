import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ButtonBackToHome} from '../components/ButtonBackToHome';
import imagen from '../images/notavaible.png'
const API_KEY = '25fe40b9';

export class Detail extends Component{

static propTypes = {
    match: PropTypes.shape({
        params: PropTypes.object,
        isExact: PropTypes.bool,
        path: PropTypes.string,
        url: PropTypes.string
        })
}

state = {movie:{}}

_fetchMovie({id}){
 
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
  .then(result => result.json()).then(data => {
    
    this.setState({movie: data})
    
  }).catch(err => console.log(err));
  


}

_goBack()
{
    window.history.back()
}



componentDidMount(){
    
    console.log(this.props);
    const {id} = this.props.match.params;
  
    this._fetchMovie({id});
}



render()
  {
     const {Title, Poster, Actors, Metascore, Plot} = this.state.movie;

     return(

        <div>
         <ButtonBackToHome></ButtonBackToHome>
          <h1>{Title}</h1>
          <img src={Poster !== 'N/A' ? Poster : imagen}></img>
          <h3>{Actors}</h3>
          <span>{Metascore}</span>
          <p>{Plot}</p>
        </div>
        
         
        )
  }
}