/*
 * Auto-generated content from the Brackets New Project extension.  Enjoy!
 */



function testFunction() {
    
    var count;
    var testString;
    
    for (count = 0; count < 7; count = count + 1) {
        testString += "*";
        console.log(testString);
        
    }
    document.getElementById("test").innerHTML = testString; // just testing
    return testString;
}

 

console.log(testFunction());