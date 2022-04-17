import {getFile} from './allDataFunction.js';
import { variables } from './allDataFunction.js';
  
  export {variables};
  function getDataAll() {
    variables.title1 =  "TEMEL GIDA", variables.title2 = "SOSLAR SİRKELER", variables.jsonPath = "../json/SOSLAR_SIRKELER_.json";
    getFile();
    
  }
  getDataAll();