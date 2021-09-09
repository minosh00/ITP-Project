import React, {Component} from 'react';
import axios from 'axios';

export default class CreateItem extends Component {

    constructor(props) {
        super(props);
        this.state ={
            itemID:"",
            itemName:"",
            description:"",
            quantity:"",
            price:""
        }
    }

    handleInputChange =(e) =>{
        const {name,value} =e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit = (e) =>{
        e.preventDefault();

        const {itemID,itemName,description,quantity,price} = this.state ;

        const data ={
            itemID:itemID,
            itemName:itemName,
            description:description,
            quantity:quantity,
            price:price
        }

        console.log(data)

        axios.post("/additional_pay/save",data).then ((res) =>{
            if (res.data.success) {
                alert("Item Added Successfully!")
                this.setState(
                    {
                        itemID:"",
                        itemName:"",
                        description:"",
                        quantity:"",
                        price:""

                    }
                )
            }
        })
    }

    render() {
        return(
            <div className= "col-md-8 mt-4 mx-auto">
                <h3 className = "h3 mb-3 font-weight-normal"> <center><b><u> Add New Item</u></b></center></h3>
                <form className = "needs-validation" noValidate>
                    <div className = "form-group" style ={{marginBottom:'15px'}}>
                        <label style = {{marginBottom:'15px'}}> Topic</label>
                        <input type = "text" 
                        className= "form-control"
                        name = "itemID"
                        placeholder = "Enter item ID"
                        value = {this.state.itemID}
                        onChange = {this.handleInputChange}/>
                    </div>

                    <div className = "form-group" style ={{marginBottom:'15px'}}>
                        <label style = {{marginBottom:'15px'}}>Item Name</label>
                        <input type = "text" 
                        className= "form-control"
                        name = "itemName"
                        placeholder = "Enter Item Name"
                        value = {this.state.itemName}
                        onChange = {this.handleInputChange}/>
                    </div>

                    <div className = "form-group" style ={{marginBottom:'15px'}}>
                        <label style = {{marginBottom:'15px'}}>Description</label>
                        <input type = "text" 
                        className= "form-control"
                        name = "description"
                        placeholder = "Enter Description"
                        value = {this.state.description}
                        onChange = {this.handleInputChange}/>
                    </div>

                    <div className = "form-group" style ={{marginBottom:'15px'}}>
                        <label style = {{marginBottom:'15px'}}>Quantity</label>
                        <input type = "text" 
                        className= "form-control"
                        name = "quantity"
                        placeholder = "Enter Item Quantity"
                        value = {this.state.quantity}
                        onChange = {this.handleInputChange}/>
                    </div>

                    <div className = "form-group" style ={{marginBottom:'15px'}}>
                        <label style = {{marginBottom:'15px'}}>Price</label>
                        <input type = "text" 
                        className= "form-control"
                        name = "price"
                        placeholder = "Enter Item Price"
                        value = {this.state.price}
                        onChange = {this.handleInputChange}/>
                    </div>



                    <button className = "btn btn-success" type ="submit" style={{marginTop:'15px'}} onClick = {this.onSubmit}>
                        <i className="far fa-check-square"></i>
                        &nbsp; ADD
                    </button>


                </form>


            </div>
        )
    }
}
