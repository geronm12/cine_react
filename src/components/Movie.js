import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import imagen from '../images/notavaible.png';

export default class Movie extends Component{
     static propTypes  = {
         id: PropTypes.string,
         title: PropTypes.string,
         year: PropTypes.string,
         poster: PropTypes.string
     }

     render()
     {
         const {id,poster, title, year} = this.props;
         return(
         <Link to={`/detail/${id}`} className='card'>
          <div className='card-image'>
           <figure className ='image is-4by5'>
            <img src={poster !== 'N/A' ? poster : imagen} alt='Placeholder Image'></img>
           </figure>
          </div>
            <div className='card-content'>
              <div className='media'>
                <div className='media-content'>
                    <p className='title is-5'>{title}</p>
                    <p className='subtitle is-6'>Año: {year}</p>     
                </div>
              </div>
            </div>
         </Link>
         );
     }
}


Movie.defaultProps ={
  poster: imagen
}