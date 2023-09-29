import React, { useEffect } from "react";
import Search from "./components/Search";
import Counters from "./components/Counters";
import COUNTRY from "./Data"
import UseEffectTest from "./components/UseEffectTest";
import TableComponent from "./components/TableComponent";
import axios from "axios";
import getAsset from "./api-data";

const App = () => {

  useEffect(()=>{
    getAsset()

  })
  return (
    <>
     {/* <UseEffectTest /> */}
     <TableComponent  />
      {/* <Search country={COUNTRY}/>
      <Counters /> */}
    </>
  );
};

export default App;
