(function (b) {
   
 function grandChild() {
     console.log("i am grand child", ++b); // 3. i am grand child 3
 }
    console.log("i am parent ", ++b); // 1. i am parent  2

    function addChild() {
        let b = 10;
        console.log("i am addChild child", ++b);
        // 2. i am addChild child 11

        grandChild();
    }
    addChild();
})(1);
//console.log(undefined+6);// NaN
