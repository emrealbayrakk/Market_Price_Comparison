import {getFile} from './allDataFunction.js';
import { variables } from './allDataFunction.js';
  
  export {variables};
  function getDataAll() {
    variables.title1 = "ŞARKÜTERİ", variables.title2 = "TEREYAĞ MARGARİN", variables.jsonPath = "../json/TEREYAG_MARGARIN_KATEGORISI_.json";
    getFile();
    
  }
  getDataAll();