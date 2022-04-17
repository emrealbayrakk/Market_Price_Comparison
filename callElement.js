
        function myFun() {
            for (let index = 0; index < array.length; index++) {
                const element = array[index];
                var x = document.createElement("INPUT");
                x.setAttribute("type", "checkbox");
                x.setAttribute("id", "checkbox" + index);
                document.body.appendChild(x);
            }
           
            x.onchange = function () {
                hello();
            };
            
        }
        function hello() {
            window.alert("hello!");
        }
