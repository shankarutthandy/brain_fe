import { Component } from 'react';
class Register extends Component{
  constructor(props){
    super(props);
    this.state={
      name:"",
      email:"",
      password:""
    };
  }
  onNameChange=(event)=>{
    this.setState({name:event.target.value});
  }
  onEmailChange=(event)=>{
    this.setState({email:event.target.value});
  }
  onPasswordChange=(event)=>{
      this.setState({password:event.target.value});
  }
  onSubmit=()=>{
    fetch('https://calm-stream-57672.herokuapp.com/register',{
      method: "post",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(this.state)
    })
    .then(response=>response.json())
    .then(console.log)
    this.props.onRouteChange('signin');
  }
  render(){
  return (
  <main className="center pa4 black-80">
  <form className="measure shadow-5 pa5">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f4 fw6 ph0 mh0">Register</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="name" name="name"  id="name" 
        onChange={this.onNameChange}/>
      </div>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" 
        onChange={this.onEmailChange}/>
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" 
        onChange={this.onPasswordChange}/>
      </div>
      <label className="pa0 ma0 lh-copy f6 pointer"></label>
    </fieldset>
    <div className="">
      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="button" value="Register" onClick={this.onSubmit}/>
    </div>
  </form>
  </main>
    )
}
}
export default Register;