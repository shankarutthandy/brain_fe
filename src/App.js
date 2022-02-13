import {Component} from 'react';  
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
const initialState={
  input:'',
  imageURL:'',
  route:'signin',
  user:{
    id:'',
    name:'',
    email:'',
    entries:'',
    joined:''
  }
};
class App extends Component{
  constructor(){
    super();
    this.state={
      input:'',
      imageURL:'',
      route:'signin',
      user:{
        id:'',
        name:'',
        email:'',
        entries:'',
        joined:''
      }
    };
  }
  loadUser=(data)=>{
    fetch('https://calm-stream-57672.herokuapp.com/profile/'+data,{method:'get'})
    .then(response=>response.json())
    .then(data=>{
      this.setState({user:data});
    })
  }
  onInputChange=(event)=>{
    this.setState({input:event.target.value})
  }
  onSubmit=()=>{ 
    fetch('https://calm-stream-57672.herokuapp.com/image',{
      method: 'put',
      headers:{'Content-type':'application/json'},
      body: JSON.stringify({id:this.state.user.id})
    })
    .then(response=>response.json())
    .then(data=>{
      this.setState({imageURL:this.state.input,
         user:Object.assign(this.state.user,{entries:data})})
    })
  }
  onRouteChange=(target)=>{
    if(target==='signin'){
    this.setState(initialState);
    }
    this.setState({route:target})
  }
  render(){
  return (
    <div className="App">
        <Navigation onRouteChange={this.onRouteChange} route={this.state.route}/>
        {this.state.route==='signin'?
        <SignIn onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>
        :((this.state.route==='register')?<Register onRouteChange={this.onRouteChange}/>:
        <div>      
        <Logo/>
        <Rank user={this.state.user}/>
        <ImageLinkForm 
        onInputChange={this.onInputChange} 
        onSubmit={this.onSubmit} 
        />      
        <FaceRecognition imageURL={this.state.imageURL}/>
        </div>)}
    </div>
        );
  }
}

export default App;
