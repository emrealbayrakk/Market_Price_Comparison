import {getFile} from './allDataFunction.js';
import { variables } from './allDataFunction.js';
  
  export {variables};
  function getDataAll() {
    variables.title1 =  "TEMEL GIDA", variables.title2 = "KETÇAP MAYONEZ", variables.jsonPath = "../json/ketcap_mayonez_kategorisi_.json";
    getFile();
    
  }
  getDataAll();
 




