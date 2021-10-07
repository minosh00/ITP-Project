import React, { Component  } from 'react'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'
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



    if(username ==="LEC1234" && password === "lec1234"){

        this.setState({
            
            loggedIn:true
        })

    }else{
        alert("Username or password is wrong! ")
    }
  }
    render() {

        if(this.state.loggedIn){
            return <Redirect to="/adminhome"/>
        }
        return (   
        
            <div class="register-photo">
            <div class="container">
                <div class="image-holder"></div>
                <form onSubmit={this.submitForm} >
                    <h2 class="text-center"><strong>Lecturer Login</strong></h2>
                    <div class="form-group"><input class="form-control"  name="username" value={this.state.username} required onChange={this.onChange} placeholder="Enter Admin user name"/></div><br></br><br></br>
                    <div class="form-group"><input class="form-control" type="password" name="password" value={this.state.password} required onChange={this.onChange} placeholder="Enter Admin password"/></div><br></br>
                    <br></br>
                    <div class="form-group">
                     <div class="container"><button type="submit" class="btn btn-warning">Login</button>
                            </div>
                    </div>


                </form>
            </div>
        </div>
     
            
        )
    }
}




