function asyncMethod() {
    var promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Promise completed.");
        reject("rejected");
      }, 1500);
    });
    return promise;
  }
  
  asyncMethod().then(function(success){
    console.log(success);
  }).catch(function(error){
    console.log(error);
  });