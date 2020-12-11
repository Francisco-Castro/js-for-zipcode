/** Callback is a function that is going to be exec after X time */
// setTimeout(function () {
//    console.log('Hi');
// }, 1000);

/** Change id: id for just id */
let getUserById = (id, callback) => {

   let user = {
      name: 'Francisco',
      id: id
   };

   if ( id === 20 ) {
      callback(`User with id: ${20} not found!`)
   }
   else {
      callback(null, user); // callback(user)
   }

};

// getUserById(20, (user) => {
//    console.log('From DB:', user)
// });

getUserById(10, (err, user) => {
   if (err) {
      return console.log(err);
   }
   console.log('From DB:', user)
});


