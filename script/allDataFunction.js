const variables = { title1 : "from which category", title2 : "from which product", jsonPath : "from which path"};
export{variables};

export function getFile() {
  
   
    
   
    var x = 0, y = 0,counter = 0;
    
   
  
    fetch(variables.jsonPath)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
       
       var count =  Object.keys(data[variables.title1][variables.title2]).length;
       var random = [];
  
       while (random.length < count){
         var r = Math.floor(Math.random() * count) ;
         if (random.indexOf(r) === -1) random.push(r);
         
       }
       
            
        /* Element*/
      for (let index = 0; index < count; index++) {
          
  
         /* variables */   
          var theBiggest = 100,
          theBiggest2 = 101,
          theBiggest3 = 102,
          theSmallest = 1000,
          theSmallest2 = 2000,
          theSmallest3 = 3000,
          result , result2, result3;
          
  
            var brand = Object.keys(data[variables.title1][variables.title2])[index]; // brand name 
  
  
            /** Filter Elements */
            var label = document.createElement("LABEL");
            label.setAttribute("class", "container");
            label.setAttribute("data-content", brand);
            label.setAttribute("id", "label" + index);
  
            var checkBox = document.createElement("input");
            checkBox.setAttribute("type", "checkbox");
  
            var span = document.createElement("span");
            span.setAttribute("class", "checkmark");
  
            document.getElementById("filter").appendChild(label);
            document.getElementById("label" + index).appendChild(checkBox);
            document.getElementById("label" + index).appendChild(span);
  
            /** */
            
            var t = Object.keys(data[variables.title1][variables.title2])[random[y]]; // brand name 
            var j = Object.keys(data[variables.title1][variables.title2][Object.keys(data[variables.title1][variables.title2])[random[y]]])[0]; // product name
  
            var nPrice = data[variables.title1][variables.title2][t][j]["NAR GROSS"]["FİYAT"]; //nargross price
            var mPrice = data[variables.title1][variables.title2][t][j]["MİSMAR"]["FİYAT"]; //mismar price
            var bPrice = data[variables.title1][variables.title2][t][j]["BEŞYOL"]["FİYAT"]; //besyol price
            //var nResim = data["ŞARKÜTERİ"]["PEYNİR"][t][j]["NAR GROSS"]["RESİM"]; //nargross image
            //var mResim = data["ŞARKÜTERİ"]["PEYNİR"][t][j]["MİSMAR"]["RESİM"]; //mismar image
            //var bResim = data["ŞARKÜTERİ"]["PEYNİR"][t][j]["BEŞYOL"]["RESİM"]; //besyol image
  
            var logo1, logo2 , logo3; // sırasıyla en ucuz fiyata sahip logolar
  
            /*Empty Price Checking*/
            if (nPrice == "YOK") theBiggest = nPrice;
            else theSmallest = nPrice;
            if (mPrice == "YOK") theBiggest2 = mPrice;
            else theSmallest2 = mPrice;
            if (bPrice == "YOK") theBiggest3 = bPrice;
            else theSmallest3 = bPrice;
            /**/


   
            var inHowManyMarkets = Object.keys(data[variables.title1][variables.title2][t][j]).length // this product have how many at market
            
           
            /* Sort Smallest to Largest */
            if(theSmallest == theSmallest2 && theSmallest == theSmallest3 ) {result = theSmallest; result2 = theSmallest2 ; result3 = theSmallest3; logo1 = "/assets/logo/nargross.png"; logo2 = "/assets/logo/mismar.png"; logo3 = "/assets/logo/besyol.png"; }
            
            else if(theSmallest == theSmallest2 && theSmallest < theSmallest3) {result = theSmallest; result2 = theSmallest2; result3 = theSmallest3}
            else if (theSmallest == theSmallest2 && theSmallest > theSmallest3) {result = theSmallest3; result2 = theSmallest; result3 = theSmallest2}
            else if (theSmallest == theSmallest3 && theSmallest < theSmallest2) {result = theSmallest; result2 = theSmallest3; result3 = theSmallest2}
            else if (theSmallest == theSmallest3 && theSmallest > theSmallest2) {result = theSmallest2; result2 = theSmallest; result3 = theSmallest3}
            else if (theSmallest2 == theSmallest3 && theSmallest2 < theSmallest) {result = theSmallest2; result2 = theSmallest3; result3 = theSmallest}
            else if (theSmallest2 == theSmallest3 && theSmallest2 > theSmallest) {result = theSmallest; result2 = theSmallest2; result3 = theSmallest3}
  
            else{
              if(theSmallest < theSmallest2 && theSmallest < theSmallest3) {result = theSmallest; logo1 = "/assets/logo/nargross.png"; }
              else if (theSmallest2 < theSmallest && theSmallest2 < theSmallest3) {result = theSmallest2; logo1 = "/assets/logo/mismar.png";}
              else if (theSmallest3 < theSmallest && theSmallest3 < theSmallest2) {result = theSmallest3; logo1 = "/assets/logo/besyol.png";}
             
              if(theSmallest < theSmallest2 && theSmallest > theSmallest3 || theSmallest > theSmallest2 && theSmallest < theSmallest3 ) {result2 = theSmallest; logo2 = "/assets/logo/nargross.png";}
              else  if(theSmallest2 < theSmallest && theSmallest2 > theSmallest3 || theSmallest2 > theSmallest && theSmallest2 < theSmallest3 ) {result2 = theSmallest2; logo2 = "/assets/logo/mismar.png";}
              else  if(theSmallest3 < theSmallest && theSmallest3 > theSmallest2 || theSmallest3 > theSmallest && theSmallest3 < theSmallest2 ) {result2 = theSmallest3; logo2 = "/assets/logo/besyol.png";}
              
              if(theSmallest > theSmallest2 && theSmallest > theSmallest3) {result3 = theSmallest; logo3 = "/assets/logo/nargross.png";}
              else if (theSmallest2 > theSmallest && theSmallest2 > theSmallest3) {result3 = theSmallest2; logo3 = "/assets/logo/mismar.png";}
              else if (theSmallest3 > theSmallest && theSmallest3 > theSmallest2) {result3 = theSmallest3; logo3 = "/assets/logo/besyol.png";}
              
              
              
            }
  
            if(result == 5.5) result = 34.95;
            /** */
            
            /** Change Empty Items back to None after comparison */
            if(result2 === 1000 || result2 === "1000" || result2 === 2000 || result2 === "2000" || result2 === 3000 || result2 === "3000") result2 = "YOK";
           
            if(result3 === 1000 || result3 === "1000" || result3 === 2000 || result3 === "2000" || result3 === 3000 || result3 === "3000") result3 = "YOK";
           /**/
  
           /* Get links in order */ 
           var link1 = "NAR GROSS", link2 = "MİSMAR", link3 = "BEŞYOL"; 
           if(nPrice == result && mPrice == result && bPrice == result){link1 = "NAR GROSS";link2 = "MİSMAR";link3 = "BEŞYOL";}
           else if (nPrice == result && mPrice == result || nPrice == result && bPrice == result || mPrice == result && bPrice == result) {link1 = "NAR GROSS";link2 = "MİSMAR";link3 = "BEŞYOL";}
           else{
             if(nPrice == result) link1 = "NAR GROSS";
            if(mPrice == result) link1 = "MİSMAR";
            if(bPrice == result) link1 = "BEŞYOL";
  
            if(nPrice == result2) link2 = "NAR GROSS";
            if(mPrice == result2) link2 = "MİSMAR";
            if(bPrice == result2) link2 = "BEŞYOL";
  
            if(nPrice == result3) link3 = "NAR GROSS";
            if(mPrice == result3) link3 = "MİSMAR";
            if(bPrice == result3) link3 = "BEŞYOL";
           }
  
           /**/
  
           
            
            var getLink1 = data[variables.title1][variables.title2][t][j][link1]["LİNK"]; // fetch the link of the first product
            var getLink2 = data[variables.title1][variables.title2][t][j][link2]["LİNK"]; // fetch the link of the second product
            var getLink3 = data[variables.title1][variables.title2][t][j][link3]["LİNK"]; // fetch the link of the third product
            
            
            /** create elements */
            
            var card = document.createElement("DIV");
            card.setAttribute("class","w3-container w3-round w3-white w3-card-4 card");
            card.setAttribute("id","card" + index);
            document.getElementById("cardPage").appendChild(card);
  
            var divImg = document.createElement("DIV");
            divImg.setAttribute("class","productImage");
            document.getElementById("card"+index).appendChild(divImg);
  
            var img = document.createElement("IMG");
            img.setAttribute("class","w3-round cardImg");
            img.setAttribute("id","cardImg" + index);
            img.setAttribute("src","../assets/örnektir.png");
            img.setAttribute("alt", "product" + index);
            document.getElementById("card"+index).appendChild(img);
  
            var productName = document.createElement("DIV");
            productName.setAttribute("class","w3-container containerName");
            productName.setAttribute("id","productTitle" + index);
            document.getElementById("card" + index).appendChild(productName);
  
            var h2 = document.createElement("h2");
            h2.setAttribute("class","productName");
            h2.setAttribute("id","productName" + index);
            h2.setAttribute("data-content", j);
            document.getElementById("productTitle" + index).appendChild(h2);
  
            var p1 = document.createElement("P");
            p1.setAttribute("class","pCheap");
            p1.setAttribute("id", "pCheap" + index);
            p1.setAttribute("data-content", ":en ucuz:")
            document.getElementById("card" + index).appendChild(p1);
  
            var p2 = document.createElement("P");
            p2.setAttribute("class","productMarket");
            p2.setAttribute("id", "productMarket" + index);
           
            document.getElementById("card" + index).appendChild(p2);
  
            var strong = document.createElement("strong");
            strong.setAttribute("class","productPrice");
            strong.setAttribute("id", "productPrice" + index);
            strong.setAttribute("data-content", result + " ₺");
            document.getElementById("card" + index).appendChild(strong);
  
            var p3 = document.createElement("p");
            p3.setAttribute("class","underText");
            p3.setAttribute("id","underText" + index)
            p3.setAttribute("data-content", "'dan başlayan fiyatlarla")
            document.getElementById("card" + index).appendChild(p3);
  
            
            var form = document.createElement("a");
            form.setAttribute("id", "form" + index);
            form.setAttribute("href", getLink1);
            form.setAttribute("methot","get");
            form.setAttribute("target","_blank");
            document.getElementById("card" + index).appendChild(form);
  
          
  
            var bridge = document.createElement("button");
            bridge.setAttribute("class","w3-btn w3-green  w3-round-xlarge btnBridge");
            bridge.setAttribute("id","btnBridge" + index);
            bridge.setAttribute("data-content","Ürünün Linki");
           // bridge.setAttribute("onclik", "window.open.href='" + getLink1 + "'");
            document.getElementById("form" + index).appendChild(bridge);
            
           
            
            var fa = document.createElement("i");
            fa.setAttribute("class", "fas fa-link");
            document.getElementById("btnBridge" + index).appendChild(fa);
  
  
            var detail = document.createElement("button");
            detail.setAttribute("class", "w3-btn w3-black w3-round-xlarge btnDetail");
            detail.setAttribute("id","btnDetail" + index );
            detail.setAttribute("data-content","Tüm Fiyatları Göster");
            detail.setAttribute("onclick","document.getElementById('modal"+index+"').style.display='block'");
            document.getElementById("card" + index).appendChild(detail);
  
             /**/
            
  
          var nMarket = data[variables.title1][variables.title2][t][j]["NAR GROSS"]["FİYAT"];
          var mMarket = data[variables.title1][variables.title2][t][j]["MİSMAR"]["FİYAT"];
          var bMarket = data[variables.title1][variables.title2][t][j]["BEŞYOL"]["FİYAT"];
          var joker = "'ta",
            joker2 = "'da",
            joker3 = "'da";
  
          if (nMarket == "YOK") nMarket = -1;
          if (mMarket == "YOK") mMarket = -2;
          if (bMarket == "YOK") bMarket = -3;
  
          if (nMarket == mMarket) joker = "& \nMismar'da";
          else if (nMarket == bMarket) joker = "& \nBeşyolda'da";
          if (nMarket == mMarket && nMarket == bMarket)
            joker = ", Mismar & Beşyol'da";
  
          if (mMarket == nMarket) joker2 = "& \nNar Gross'ta";
          else if (mMarket == bMarket) joker2 = "& \nBeşyol'da";
          if (mMarket == nMarket && mMarket == bMarket)
            joker2 = ", Nar Gross & Beşyol'da";
  
          if (bMarket == nMarket) joker3 = "& \nNar Gross'ta";
          else if (bMarket == mMarket) joker3 = "& Mismar'da";
          if (bMarket == nMarket && bMarket == mMarket)
            joker3 = ", Mismar & Nar Gross'ta";
  
            /* print the cheapest */ 
          if (nMarket == result)
            document.getElementById("productMarket" + [index]).innerHTML =
              "Nar Gross" + joker;
          if (mMarket == result)
            document.getElementById("productMarket" + [index]).innerHTML =
              "Mismar" + joker2;
          if (bMarket == result)
            document.getElementById("productMarket" + [index]).innerHTML =
              "Beşyol" + joker3;
  
              
              runModal();
              
              /** MODALS **/
             
              function runModal(){
                
              var modalDiv = document.createElement("div");
              modalDiv.setAttribute("class","w3-modal ");
              modalDiv.setAttribute("id","modal" + index);
              document.getElementById("modals").appendChild(modalDiv);
              
  
              var modalContent = document.createElement("div");
              modalContent.setAttribute("class","w3-modal-content w3-animate-left w3-card-4 w3-round w3-wheat w3-sand");
              modalContent.setAttribute("id","modalContent" + index);
              document.getElementById("modal" + index).appendChild(modalContent);
  
              var modalHeader = document.createElement("header");
              modalHeader.setAttribute("class","w3-container w3-teal");
              modalHeader.setAttribute("id","modalHeader" + index);
              document.getElementById("modalContent" + index).appendChild(modalHeader);
  
              var modalSpan = document.createElement("span");
              modalSpan.setAttribute("class","w3-button w3-display-topright modalSpan");
              modalSpan.setAttribute("id","modalSpan" + index);
              modalSpan.setAttribute("onclick","document.getElementById('modal"+index+"').style.display='none'");
              //modalSpan.setAttribute("data-content","&times;");
              document.getElementById("modalHeader" + index).appendChild(modalSpan);
              
              var fa = document.createElement("i");
                fa.setAttribute("class", "fa fa-times");
                document.getElementById("modalSpan" + index).appendChild(fa);
  
              var modalContainer = document.createElement("div");
              modalContainer.setAttribute("class","w3-container");
              modalContainer.setAttribute("id","modalContainer" + index);
              document.getElementById("modalContent" + index).appendChild(modalContainer);
  
              var modalImg = document.createElement("img");
              modalImg.setAttribute("class","w3-round modalImg");
              modalImg.setAttribute("id","modalImg" + index);
              modalImg.setAttribute("src","/assets/örnektir.png");
              modalImg.setAttribute("alt","modalImgAlt");
              document.getElementById("modalContainer" + index).appendChild(modalImg);
  
              var modalTagGreen = document.createElement("div");
              modalTagGreen.setAttribute("class","w3-tag w3-round w3-green greenTag");
              modalTagGreen.setAttribute("id", "modalTagGreen" + index);
              document.getElementById("modalContainer" + index).appendChild(modalTagGreen);
  
              var modalTagWhite = document.createElement("div");
              modalTagWhite.setAttribute("class","w3-tag w3-round w3-green w3-border w3-border-white whiteTag");
              modalTagWhite.setAttribute("id", "modalTagWhite" + index);
              modalTagWhite.setAttribute("data-content", j);
              document.getElementById("modalTagGreen" + index).appendChild(modalTagWhite);
  
              
  
              var modalButton1 = document.createElement("button");
              modalButton1.setAttribute("class","w3-btn w3-yellow w3-round-xlarge modalTavsiye1");
              modalButton1.setAttribute("id","modalTavsiyeFirst" + index);
              modalButton1.setAttribute("data-content","En ucuz Pirinç Nerede");
              //modalButton.setAttribute("onclik", "window.open.href='" + getLink + "'");
              document.getElementById("modalContainer" + index).appendChild(modalButton1);
  
              var modalButton2 = document.createElement("button");
              modalButton2.setAttribute("class","w3-btn w3-yellow w3-round-xlarge modalTavsiye2");
              modalButton2.setAttribute("id","modalTavsiyeSecond" + index);
              modalButton2.setAttribute("data-content","En ucuz Armut Nerede?");
              //modalButton.setAttribute("onclik", "window.open.href='" + getLink + "'");
              document.getElementById("modalContainer" + index).appendChild(modalButton2);
  
              var modalButton3 = document.createElement("button");
              modalButton3.setAttribute("class","w3-btn w3-yellow w3-round-xlarge modalTavsiye3");
              modalButton3.setAttribute("id","modalTavsiyeThird" + index);
              modalButton3.setAttribute("data-content","En ucuz Nutella Nerede?");
              //modalButton.setAttribute("onclik", "window.open.href='" + getLink + "'");
              document.getElementById("modalContainer" + index).appendChild(modalButton3);
  
              var fa = document.createElement("i");
                fa.setAttribute("class", "fas fa-link");
                document.getElementById("modalTavsiyeFirst" + index).appendChild(fa);
  
                var fa = document.createElement("i");
                fa.setAttribute("class", "fas fa-link");
                document.getElementById("modalTavsiyeSecond" + index).appendChild(fa);
  
                var fa = document.createElement("i");
                fa.setAttribute("class", "fas fa-link");
                document.getElementById("modalTavsiyeThird" + index).appendChild(fa);
  
  
              /* Table in modal */
  
              var modalTable = document.createElement("table");
              modalTable.setAttribute("class" , "w3-table-all w3-card-4");
              modalTable.setAttribute("id" , "modalTable" + index);
              document.getElementById("modalContainer" + index).appendChild(modalTable);
  
              var modalThead = document.createElement("thead");
              modalThead.setAttribute("class", "modalThead");
              modalThead.setAttribute("id" , "modalThead" + index);
              document.getElementById("modalTable" + index).appendChild(modalThead);
  
              var modalTr = document.createElement("tr");
              modalTr.setAttribute("class", "w3-red modalTr");
              modalTr.setAttribute("id" , "modalTr" + index);
              document.getElementById("modalThead" + index).appendChild(modalTr);
  
              var modalThFirst = document.createElement("th");
              modalThFirst.setAttribute("class", "modalTh modalThFirst");
              modalThFirst.setAttribute("id" , "modalThFirst" + index);
              modalThFirst.setAttribute("data-content" , "Ürün");
              document.getElementById("modalTr" + index).appendChild(modalThFirst);
  
              var modalThSecond = document.createElement("th");
              modalThSecond.setAttribute("class", "modalTh modalThSecond");
              modalThSecond.setAttribute("id" , "modalThSecond" + index);
              modalThSecond.setAttribute("data-content" , "Fiyat");
              document.getElementById("modalTr" + index).appendChild(modalThSecond);
  
              var modalThThird = document.createElement("th");
              modalThThird.setAttribute("class", "modalTh modalThThird");
              modalThThird.setAttribute("id" , "modalThThird" + index);
              modalThThird.setAttribute("data-content" , "Link");
              document.getElementById("modalTr" + index).appendChild(modalThThird); 
              
              
              for (let i = 0; i < 1 ; i++) {
                
                
                var fiyatlar = [result,result2,result3];
                var linkler = [getLink1,getLink2,getLink3];
               
                if (result2 == "YOK" ) inHowManyMarkets--;
                if (result3 == "YOK" ) inHowManyMarkets--;
  
                var fotolar = [logo1,logo2,logo3];
                      
                
  
                
                
  
                
              for (let j = 0; j < inHowManyMarkets; j++) {
                
                  
                
                var modalTableTr = document.createElement("tr");
                modalTableTr.setAttribute("class", "modalTableTr");
                modalTableTr.setAttribute("id" , "modalTableTr" + counter);
                document.getElementById("modalTable" + index).appendChild(modalTableTr);
  
                var modalTableTd = document.createElement("td");
                modalTableTd.setAttribute("class", "modalTableTd tdLogo");
                modalTableTd.setAttribute("id" , "modalTableTd" + counter);
                document.getElementById("modalTableTr" + counter).appendChild(modalTableTd);
  
               
                var modalTdLogo = document.createElement("img");
                modalTdLogo.setAttribute("class","modalTdLogo");
                modalTdLogo.setAttribute("id","modalTdLogo" + counter);
                modalTdLogo.setAttribute("src",fotolar[j]);
                modalTdLogo.setAttribute("alt","modalImgAlt");
                document.getElementById("modalTableTd" + counter).appendChild(modalTdLogo);
                
  
                var modalTableTdSecond = document.createElement("td");
                modalTableTdSecond.setAttribute("class", "product-line-price modalTableTd");
                modalTableTdSecond.setAttribute("id" , "modalTableTdSecond" + counter);
                document.getElementById("modalTableTr" + counter).appendChild(modalTableTdSecond);
  
                
                var modalTableTdStrong = document.createElement("strong");
                modalTableTdStrong.setAttribute("class", "w3-round tdPrice");
                modalTableTdStrong.setAttribute("id" , "modalTableTdStrong" + counter);
                modalTableTdStrong.setAttribute("data-content", fiyatlar[j] + " ₺");
                document.getElementById("modalTableTdSecond" + counter).appendChild(modalTableTdStrong);
  
                var modalTableTdThird = document.createElement("td");
                modalTableTdThird.setAttribute("class", "modalTableTd");
                modalTableTdThird.setAttribute("id" , "modalTableTdThird" + counter);
                document.getElementById("modalTableTr" + counter).appendChild(modalTableTdThird);
  
                var modalForm = document.createElement("a");
                modalForm.setAttribute("id", "modalForm" + counter);
                modalForm.setAttribute("href", linkler[j]);
                modalForm.setAttribute("methot","get");
                modalForm.setAttribute("target","_blank");
                document.getElementById("modalTableTdThird" + counter).appendChild(modalForm);
  
                var modalTableTdButton = document.createElement("button");
                modalTableTdButton.setAttribute("class", "w3-btn w3-green w3-round-xlarge modalBtn");
                modalTableTdButton.setAttribute("id" , "modalTableTdButton" + counter);
                modalTableTdButton.setAttribute("data-content" , "Ürünün Linki");
                //modalTableTdButton.setAttribute("onclik", "window.open.href='" + linkler[j] +"'");
                document.getElementById("modalForm" + counter).appendChild(modalTableTdButton);
  
  
                var fa = document.createElement("i");
                fa.setAttribute("class", "fas fa-link");
                document.getElementById("modalTableTdButton" + counter).appendChild(fa);
  
  
  
                counter++;
  
                }
                
                
              }
  
  
  
            }
  
  
              /**/ 
  
  
              x++;
              y++;
            
          }
         
  
         
      })
      .catch((err) => {
        // Do something for an error here
        console.log("Error Reading data " + err);
      });
  }