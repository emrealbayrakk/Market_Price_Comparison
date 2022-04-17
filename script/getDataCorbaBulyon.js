import {getFile} from './allDataFunction.js';
import { variables } from './allDataFunction.js';
  
  export {variables};
  function getDataAll() {
    variables.title1 =  "TEMEL GIDA", variables.title2 = "ÇORBA BULYON", variables.jsonPath = "../json/corba_bulyon_kategorisi_.json";
    getFile();
    
  }
  getDataAll();
 




