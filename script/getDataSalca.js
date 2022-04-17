import {getFile} from './allDataFunction.js';
import { variables } from './allDataFunction.js';
  
  export {variables};
  function getDataAll() {
    variables.title1 =  "TEMEL GIDA", variables.title2 = "SALÇA KONSERVE", variables.jsonPath = "../json/salca_konserve_kategorisi_.json";
    getFile();
    
  }
  getDataAll();