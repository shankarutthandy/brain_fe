import {Component} from 'react';
class SignIn extends Component{
  constructor(props){
    super(props);
    this.state={
      email:"",
      password:""
    };
  }
onEmailChange=(event)=>{
  this.setState({email:event.target.value});
}
onPasswordChange=(event)=>{
  this.setState({password:event.target.value});
}
onSignIn=()=>{
  fetch('https://calm-stream-57672.herokuapp.com/signin',{
    method: 'post',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(this.state)
  })
  .then(response=>response.json())
  .then((data)=>{
    if(Number(data)!==-1)
    {
    this.props.loadUser(data);
    this.props.onRouteChange('home');
    }
  });
}
render()  {
  const {onRouteChange}=this.props;
    return (
<main className="center pa4 black-80">
  <form className="measure shadow-5 pa5">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f4 fw6 ph0 mh0">Sign In</legend>
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
      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="button" value="Sign in" onClick={this.onSignIn}/>
    </div>
    <div className="lh-copy mt3">
      <p className="f6 link dim black db pointer" onClick={()=>onRouteChange('register')}>Register</p>
    </div>
  </form>
</main>
    )
}
}
export default SignIn;