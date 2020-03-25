import React, {Component} from 'react';

import CustomerAddressDetails from './CustomerAddressDetails'
import { connect } from "react-redux";
import { getCustomerList,getCustomerAddress} from "../actions/index";
//import axios from 'axios'

export  class Customers extends Component {

  constructor(props) {
    super(props)
    
  }

  //function which is called the first time the component loads
  componentDidMount() {
    this.props.getCustomerList();
    //this.getCustomerData();
  }

  

  render() {
    console.log("Customers List in render",this.props.customerList);

    
    if (!this.props.customerList.length)
      return (<p>Loading data</p>)

    return (<div className="addmargin">
      <div className="col-1" >
        {

          this.props.customerList.map(customer => <div className="card"  key={customer.name} 
          onClick={() => this.props.getCustomerAddress({selectedCustomer: customer.id})}>
            <div className="header">
              {customer.name}
            </div>
            <div>
              <p>Email: {customer.email}, mobile: {customer.phone}, 
              Age: {customer.age}, Sex: {customer.sex} </p>
              
            </div>
          </div>)
        }
      </div>

      <div className="col-2">
     
     <CustomerAddressDetails/>
      </div>
      
    </div>)
  }

}


function mapStateToProps(state) {
  return {
    customerList: state.customerList
  };
}

export default connect(
  mapStateToProps,
  { getCustomerList,getCustomerAddress }
)(Customers);
