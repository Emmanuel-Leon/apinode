import React,{useState} from "react";
import api from "./api";
export default function Component (){
	const [data, setData]=useState('');
	

	const onclick =()=>{
	 
	
		api.getData().then((response)=>{
		setData(response.data);
		alert(`El mensaje es: ${JSON.stringify(data)}`);		
	        
});
  
};
 
 
	return (
		<div>
			<input type="text" />		
			<button onClick={onclick}>Click On</button>
		</div>
	)
}
