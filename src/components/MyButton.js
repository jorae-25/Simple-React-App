import React from 'react';
import { useState } from 'react';


const MyButton = () =>{
	const [show, setShow] = useState(false);

	const handleClick = () =>{
		setShow(!show)
	}

	return(
		<>
			<button onClick={handleClick}>Click Me!</button>
			<div>
			{show ? <img src="goku.png" alt="image of goku" width={"500"} height={"600"} />: ""}
			</div>
			
		</>
	)
}
export default MyButton;
			
			