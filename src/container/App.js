import React ,{Component}from 'react';
import './App.css';
import CardList from '../component/CardList'
//import {robots} from './robots'
import SearchBox from '../component/SearchBox'
import Scroll from '../component/Scroll';

class App extends Component{
  constructor(){
    super();
    this.state={
      robots: [],
      searchfield : ''
    }
    console.log("constructor"); 
  }
  componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=>response.json())
      .then(user=>this.setState({ robots:user}))
    console.log("did mount");
  }

  onSearchChange=(event)=>{
    this.setState({searchfield:event.target.value})
  }
  render(){
    const {robots,searchfield}=this.state;
    const filteredRobots=robots.filter(robot=>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    console.log('render');
    return !robots.length?
        <h1>LOADINggggggg</h1>:
        <div className='tc'>
          <h1>Robo friends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
              <CardList robots={filteredRobots}/>  
          </Scroll>
        </div>
      
     }
}

export default App;
