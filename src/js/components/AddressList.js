import React from 'react';
function AddressList(props){
	let count=1;
    let addressListItem=props.addressList.map((item)=>{
	 	count=count+1;
        return  (<li key={count+item.address}>{item.address}, {item.city}
        	, {item.state}, {item.country}</li> )
        	
    });

   return (<ul className="numbering">{addressListItem}</ul>);
	}

export default AddressList;
