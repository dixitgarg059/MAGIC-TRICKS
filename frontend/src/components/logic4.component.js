import React, {Component} from 'react';
import axios from 'axios';

export default class LOGIC4 extends Component {
    
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         username: '',
    //         email: ''
    //     }
    //     this.onChangeUsername = this.onChangeUsername.bind(this);
    //     this.onChangeEmail = this.onChangeEmail.bind(this);
    //     this.onSubmit = this.onSubmit.bind(this);
    // }
    
    // onChangeUsername(event) {
    //     this.setState({ username: event.target.value });
    // }
    // onChangeEmail(event) {
    //     this.setState({ email: event.target.value });
    // }
    // onSubmit(e) {
    //     e.preventDefault();

    //     const newUser = {
    //         username: this.state.username,
    //         email: this.state.email
            
    //     }

    //     axios.post('http://localhost:4000/check', newUser)
    //          .then(res => {
    //              if(!res.data)
    //                 alert("invalid userame or  password\n");
    //             else
    //             {
    //                 if(res.data.type === "Vendor")
    //                 {
    //                     this.props.history.push({
    //                         pathname:'/login/vendor',
    //                         username:newUser.username});
    //                 }
    //                 else if(res.data.type === "Customer")
    //                 {
    //                     this.props.history.push({
    //                         pathname:'/login/customer',
    //                         username:newUser.username});
                        
    //                 }
    //             }
    //             // localStorage.setItem("username,newUser.username");
    //          });

    //     this.setState({ 
    //         username: '',
    //         email: ''
            
    //     });
    // }

    render() {
        return (
            <div>


            <h1>
                Logic for game 4
                
            </h1>
            </div>
        )
    }
}