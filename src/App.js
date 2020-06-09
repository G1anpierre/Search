import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';

import data from './data.json';
import './App.scss';


class App extends React.Component {



  constructor(props) {
    super(props);

    this.state = {
      data: [],
      search: ''
    }
  }

  componentDidMount() {
    this.setState({
      data: data.people
    })
  }

  handleInput = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })

  }


  handleSubmit = (event) => {
    event.preventDefault();

    const filtered = data.people.filter(element => {
      return element.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1  
    })

    console.log(filtered); 

    this.setState({
      data: filtered
    })
    
  }


  render () {

    const { search, data } = this.state;

    

    return (
      <div className="App">
        <div className="container jumbotron">
          <div className="row">
            <div className="col-12">
              <form onSubmit={this.handleSubmit}>
                <div className="wrapper">
                  <input 
                  className="wrapper__input" 
                  type="text"
                  name="search"
                  value={search}
                  onChange={this.handleInput}/>
                  <button 
                  
                  className="wrapper__button btn btn-primary"> Search </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="container">
           <div>
              <ul className="list-group">
                {data.map( item => (
                    <li key={item.id} className="list-group-item">{item.name}</li>
                ))}
              </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
