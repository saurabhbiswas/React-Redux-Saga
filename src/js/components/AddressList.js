import React from 'react';
import {CUSTOMER_ADDRESS_NOT_FOUND} from '../constants/action-types';
function AddressList(props){
	let count=1;
	let addressListItem;
	if(props.addressList.length===0){
		addressListItem= CUSTOMER_ADDRESS_NOT_FOUND;
	}else{
    	addressListItem=props.addressList.map((item)=>{
	 	count=count+1;
	 
        return  (<li key={count+item.address}>{item.address}, {item.city}
        	, {item.state}, {item.country}</li> )
        	});
        }

   return (<ul className="numbering">{addressListItem}</ul>);
	}

export default AddressList;
