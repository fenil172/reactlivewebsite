import { Add } from "@material-ui/icons";
import { useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";



 
 function Hk() {
 

  const [imagsrc,setimg] =  useState("");
  const [yu,setyu] =  useState("");

   function inputevent(event){

    setimg(event.target.value);
    setyu('https://source.unsplash.com/400x300/?'+ imagsrc );
   }

   

 

  return (
    <>

        <input type="text" onChange={inputevent}/>
        <img src={yu} height="200" width="200"/>

            
      
    </>
  );
}

export default Hk;
