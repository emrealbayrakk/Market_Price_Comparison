import {getFile} from './allDataFunction.js';
import { variables } from './allDataFunction.js';
  
  export {variables};
  function getDataAll() {
    variables.title1 = "ŞARKÜTERİ", variables.title2 = "SÜT", variables.jsonPath = "../json/sut_kategorisi_.json";
    getFile();
    
  }
  getDataAll();