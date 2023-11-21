let letFruit = "organge";//undefine orange
var varFruit = "organge";// undefine orange

console.log("letFruit: ", letFruit, "varFruit: ", varFruit);
// 1. letFruit: orange varFruit: orange
{
    let letFruit = "apple"; //undefine apple
    var varFruit = "apple"; //undefine apple
    console.log("letFruit: ", letFruit, "varFruit: ", varFruit);
    // 2. letFruit: orange varFruit: orange
}
console.log("letFruit: ", letFruit, "varFruit: ", varFruit);
// 3. letFruit: orange varFruit: apple