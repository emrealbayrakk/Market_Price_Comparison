import {getFile} from './allDataFunction.js';
import { variables } from './allDataFunction.js';
  
  export {variables};
  function getDataAll() {
    variables.title1 =  "TEMEL GIDA", variables.title2 = "SIVI YAĞLAR", variables.jsonPath = "../json/SIVI_YAGLAR_KATEGORISI_.json";
    getFile();
    
  }
  getDataAll();
 