const doWorkCallback = (callback) => {
  setTimeout(() => {
    // callback("This is Error", undefined)
    callback(undefined, [1,2,3,4])
  }, 2000);
}

doWorkCallback((error, result) => {
  if (error) {
    return console.log(error)
  }
  console.log(result)
})