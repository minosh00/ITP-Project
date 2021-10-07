import React, { Component  } from 'react'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom';
import ourlecmain from '../images/ourlecmain.gif'
export default class Login extends Component {
    constructor(props){
        super(props)
        let loggedIn = false
        this.state = {
            username:'',
            password:'',
            loggedIn
        }

     this.onChange = this.onChange.bind(this)
     this.submitForm = this.submitForm.bind(this)

    }


    onChange (e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }


    submitForm(e){
        e.preventDefault()
        const{username , password} = this.state



    if(username ==="LEC1234" && password === "lec123"){

        this.setState({
            
            loggedIn:true
        })

    }else{
        alert("cant access because your token is not vaild or contact us our members ")
    }
  }
    render() {

        if(this.state.loggedIn){
            return <Redirect to="/inside"/>
        }
        return (   
         
            <div class="card">
            <div class="container">
                <center>
                 <img src={ourlecmain}alt="John" style={{ width: 400, marginTop: '40px', marginLeft: '40px', marginRight: '40px' }}></img>
                 </center>
                    <form onSubmit={this.submitForm} >
                    <h2 class="text-center"><strong>LECTURER LOGIN</strong></h2>
                    <div class="form-group"><input class="form-control"  name="username" value={this.state.username} onChange={this.onChange} placeholder="Enter User Name"/></div><br></br><br></br>
                    <div class="form-group"><input class="form-control" type="password" name="password" value={this.state.password} onChange={this.onChange} placeholder="Enter Password"/></div><br></br>
                    <br></br>
                    <div class="form-group">
                     <div class="container">
                         <center><button type="submit" class="btn btn-warning"><b>Login</b></button></center>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
                     <Link to ={{
        pathname:`/course`
      }}>
       
    </Link>
                            
                            </div>
                            
                    </div>


                </form>
            </div>
        </div>
     
            
        )
    }
}




