import {getFile} from './allDataFunction.js';
import { variables } from './allDataFunction.js';
  
  export {variables};
  function getDataAll() {
    variables.title1 = "ŞARKÜTERİ", variables.title2 = "PEYNİR", variables.jsonPath = "../json/PEYNIR_KATEGORISI_.json";
    getFile();
    
  }
  getDataAll();
 




