import {getFile} from './allDataFunction.js';
import { variables } from './allDataFunction.js';
  
  export {variables};
  function getDataAll() {
    variables.title1 =  "TEMEL GIDA", variables.title2 = "ŞEKER", variables.jsonPath = "../json/SEKER_KATEGORISI_.json";
    getFile();
    
  }
  getDataAll();