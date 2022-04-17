import {getFile} from './allDataFunction.js';
import { variables } from './allDataFunction.js';
  
  export {variables};
  function getDataAll() {
    variables.title1 =  "TEMEL GIDA", variables.title2 = "TUZ BAHARAT", variables.jsonPath = "../json/tuz_baharat_kategorisi_.json";
    getFile();
    
  }
  getDataAll();