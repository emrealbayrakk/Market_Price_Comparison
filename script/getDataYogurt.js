import {getFile} from './allDataFunction';
import { variables } from './allDataFunction';
  
  export {variables};
  function getDataYogurt() {
    variables.title1 = "ŞARKÜTERİ", variables.title2 = "YOĞURT", variables.jsonPath = "../json/YOGURT_KATEGORISI_.json";
    getFile();
    
  }
  getDataYogurt();
 



