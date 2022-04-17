import {getFile} from './allDataFunction.js';
import { variables } from './allDataFunction.js';
  
  export {variables};
  function getDataAll() {
    variables.title1 =  "TEMEL GIDA", variables.title2 = "BAKLİYAT", variables.jsonPath = "../json/_bakliyat_kategorisi.json";
    getFile();
    
  }
  getDataAll();
 




