const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve([2,4,6])
    reject("Heres an error message")
  }, 2000);
})

doWorkPromise.then((result) => {
  console.log("Nice!",result)
}).catch((error) => {
  console.log("Error: ", error)
})