import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import AddressList from './AddressList';
import { connect } from "react-redux";


function mapStateToProps(state) {
  return {
    customerAddressDetail: state.customerAddress
  };
}

//This Component is a child Component of Customers Component
const CustomerAddressDetail = ({ customerAddressDetail }) => {

console.log("CustomerAddressDetail r--->",customerAddressDetail);
    if (!(customerAddressDetail && customerAddressDetail.addressDetail)
      )
      return(<div/>);
    return (<div className="card">
      
        <div className="header">
          Address 
        </div>
        <div className="title">
        {customerAddressDetail.name}
        </div>
        <div>
          <AddressList addressList={customerAddressDetail.addressDetail} />
       </div>
     
    </div>
    )
  }
  

const Address = connect(mapStateToProps)(CustomerAddressDetail);

export default Address;




