//This is how we used callbacks earlier before promises were 
//introduced. This is how we do it in old school way. 
function firstMethod(callBack) {
    setTimeout(() => {
        console.log("1");
        callBack();
    }, 1500);
}
function secondMethod() {
    console.log("2");
}
firstMethod(secondMethod);
//# sourceMappingURL=callback_example.js.map