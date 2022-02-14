//Modules
// every file in NODE is a MODULE


//local
const secret = 'SUPER SECERET';

//share
const john = 'john';
const peter = 'peter';

module.exports = { john, peter }

//console.log(module);

// pattern console.log(module);

/* linyx@mint:~/Desktop/NodeJS_Linux$ node 4.names.js 
Module {
  id: '.',
  path: '/home/linyx/Desktop/NodeJS_Linux',
  exports: {},
  filename: '/home/linyx/Desktop/NodeJS_Linux/4.names.js',
  loaded: false,
  children: [],
  paths: [
    '/home/linyx/Desktop/NodeJS_Linux/node_modules',
    '/home/linyx/Desktop/node_modules',
    '/home/linyx/node_modules',
    '/home/node_modules',
    '/node_modules'
  ]
}*/






//sayHi('susan');
//sayHi('nata');
//sayHi(peter);