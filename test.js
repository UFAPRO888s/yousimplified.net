


let repository = Yousimplified.project.getRepositoryForDirectory('./lib/yousimplified.net.js');

console.log(repository.getOriginURL());               // -> git@github.com:eko/atom-pull-request.git
console.log(repository.getShortHead());               // -> master
console.log(repository.isStatusNew('/path/to/file')); // -> true
