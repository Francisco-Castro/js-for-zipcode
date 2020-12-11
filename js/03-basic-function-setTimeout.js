
console.log('Begging of the program');


setTimeout(function () {
    console.log('First timeout')
}, 3000);

setTimeout(function () {
    console.log('Second timeout')
});

setTimeout(function () {
    console.log('Third timeout')
});

console.log('Ending of the program');


/** Lifecycle of a process in JS
 *
 * |-> Call Stack
 * |   -> main(),
 * |      log(),
 * |      send -> setTimeout(3000),
 * |      send -> setTimeout(0),
 * |      send -> setTimeout(0),
 * |      log(),
 * |      exec -> setTimeout(0),
 * |      exec -> setTimeout(0),
 * |      exec -> setTimeout(300),
 * |
 * | Node APIs - Web APIs
 * | 1. -> setTimeout (3000)
 * | 2. -> setTimeout (0)
 * | 3. -> setTimeout (0)
 * |
 * |-> Callback Queue [ setTimeout(0), setTimeout(0), setTimeout(3000)  ]
 *
 *
 * */
