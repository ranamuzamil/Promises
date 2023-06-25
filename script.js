// Promisses are object that represents the eventual completion or failure of an asynchronous operation


// Promises are used to handle operations such as network requests, file I/O, or database queries


// The result of promises is not execute immediately





//             ************** <<<   Promises have three states    >>> **************


//          (1).   Pending
//                                It's means that result is not found yet / still in progress

//          (2).   Fulfilled
//                                It indicates that the operation completed successfully

//          (3).   Rejected
//                                It indicates that the operation failed, and the promise contains an error





//                  +++++++++++++++ >>>       Syntax of Promises      <<< +++++++++++++++


                                    let promises = new Promise((resolve, reject) => {

                                    })




                                    //   Example of Promises



                                    new Promise((resolve, reject) => {          // This ts syntax
                                        setTimeout(() => {
                                          let r = 2;                            // Here I let r   which is equal to 2

                                          if (r > 0.5) {                        // Now if r is greater than 0.5 then code execute
                                            resolve(r);
                                          } else {
                                            reject('Number is too small');      // Or if r is smaller then 0.5 then error occur
                                          }
                                        }, 5000);                               // 5000 miliseconds or 5 seconds required to execute
                                      })
                                        .then((result) => {
                                          console.log('Success:', result);      // As we know that 2 > 0.5, so result must be execute
                                        })
                                        .catch((error) => {
                                          console.log('Error:', error);
                                        });
                                      


                                          