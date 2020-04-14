import React, { Component } from 'react';
import 'react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';

class Search extends Component {
  state = { artistQuery: '' };

  updateArtistQuery = event => {
    this.setState({ artistQuery: event.target.value });
  }

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.searchArtist();
    }
  }

  searchArtist = () => {
    this.props.searchArtist(this.state.artistQuery);
  }

  render() {
    return (

      <div>
        <span className="search-box">
        <input className="search-txt"
       
          onChange={this.updateArtistQuery}
          onKeyPress={this.handleKeyPress}
          placeholder='Search for an Artist'/>
          <span className ='search-btn' type="button"  onClick={this.searchArtist}><i className='fa fa-search'></i></span>
        </span>
      </div>
    
    
    )
  }
}

export default Search;
