import React from 'react';
import AddressList from './AddressList';
import { connect } from "react-redux";


function mapStateToProps(state) {
  return {
    customerAddressDetail: state.customerAddress
  };
}


const CustomerAddressDetail = ({ customerAddressDetail }) => {


    if (!(customerAddressDetail && customerAddressDetail.addressDetail))
      return(<div/>);
    return (
      <div className="card">
      
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




