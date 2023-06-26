
//       why do we need asynchronous?

//          We need asynchronous programming in JavaScript to avoid blocking the execution
//          of the main program when performing tasks that take time, such as fetching data
//          from a server or reading files

// Example 
                            // in this code time consume to gettig data from server 
            function fetchData() {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        const data = {
                            id: 1,
                            name: 'rm',
                            email: 'rm@gmail.com'
                        };
                        if (data) {
                            resolve(data);
                        } else {
                            reject('Error: Failed to fetch data');
                        }
                    }, 3000);
                });
            }
          console.log(fetchData());