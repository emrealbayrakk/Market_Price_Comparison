import {getFile} from './allDataFunction.js';
import { variables } from './allDataFunction.js';
  
  export {variables};
  function getDataAll() {
    variables.title1 = "ŞARKÜTERİ", variables.title2 = "MAKARNA", variables.jsonPath = "../json/MAKARNA_KATEGORISI_.json";
    getFile();
    
  }
  getDataAll();