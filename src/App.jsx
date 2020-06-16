import React from 'react';
import Input from './Input';

// import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
// import Paper from '@material-ui/core/Paper';

import SecondInput from './SecondInput';
import data from './data.json';
import './App.scss';


const SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.recognition = true;
recognition.interimResults = true;
recognition.lang = "en-US";


class App extends React.Component {



  constructor(props) {
    super(props);

    this.state = {
      data: [],
      filtered: [],
      listening: false
    }
  }

  componentDidMount() {
    this.setState({
      data: data.people,
      filtered: data.people
    })
  }

  


  updateFilter = (filtered) => {
    this.setState({
      filtered: filtered
    })
  }

  handleSpeechRecognition = () => {
    console.log('handle SpeechRecognition was clicked');
    this.setState({
      listening: !this.state.listening
    })
  }

  


  render () {

    const { data, filtered } = this.state;

    

    return (
      <div className="App">
        <div className="container jumbotron">
          <div className="row">
            <div className="col-12">
              {/* <Input handleSubmit={this.handleSubmit} /> */}
              <Input data={data} handleFilter={this.updateFilter} handleSpeechRecognition={this.handleSpeechRecognition}/>
            </div>
          </div>
        </div>
        <div className="container">
           <div>
              <ul className="list-group">
                {filtered.map( item => (
                    <li key={item.id} className="list-group-item">{item.name}</li>
                ))}
              </ul>
          </div>
        </div>
        <div>
            <Container fixed>
              <Grid container spacing={3}>
                  <Grid item xs={12}>
                     <SecondInput />
                  </Grid>
              </Grid>
            </Container>
        </div>
      </div>
    );
  }
}

export default App;
