import { Add } from "@material-ui/icons";
import axios from "axios";
import React, { useState ,useEffect} from "react";
import Hk from './hk';

function Jsk() {
  
  return (
    <>

    {/* <h1>{name}</h1> */}
      <select >
        <option value="1">1</option>
        <option value="25">25</option>
        <option value="3">3</option>
        <option value="4">4</option>
        {/* <option value="1"></option> */}
      </select>
    </>
  );
}

export default Jsk;
