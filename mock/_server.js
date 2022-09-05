// server.js;
const jsonServer = require('json-server');
const fs = require('fs');
const server = jsonServer.create();
//const router = jsonServer.router(path.join(__dirname, './sample.json'));
const middlewares = jsonServer.defaults();
server.use(middlewares);

const Path = require("path");
const glob = require("glob");

const rootDirectory = __dirname + '/../src/modules';
const directoriesInDIrectory = fs.readdirSync(Path.resolve(rootDirectory), { withFileTypes: true })
    .filter((item) => item.isDirectory())
    .map((item) => item.name);

// Get all directories on each modules
let data = {};
directoriesInDIrectory.forEach((directory) => {
    // get all files that has extension ".js" on mock folder on each of modules
    const apiFiles = glob.sync(Path.resolve(rootDirectory + '/' + directory + '/mock', "./") + "/**/[!_]*.js", {
        nodir: true
    });
    apiFiles.forEach(filePath => {
        const api = require(filePath);        
        let [, url] = filePath.split("mock/");        
        url =
            url.slice(url.length - 9) === "/index.js"
            ? url.slice(0, url.length - 9) // remove /index.js
            : url.slice(0, url.length - 3); // remove .js
            
            var a = url.replace(/\//g, "-");
            
        data[directory + '-' + a] = api;
    });
});

const router = jsonServer.router(data);

router.render = (req, res) => {
    res.jsonp({
        data: res.locals.data,
        links: {
            first: "/api/users?page=1",
            last: "/api/users?page=17",
            next: "/api/users?page=2",
            prev: null
        },
        meta: {
            total: 0
        }
    });
}
// add delay
server.use(function(req, res, next){
    // 1 second
    setTimeout(next, 1000);
});

server.use('/mockApi', router)
server.listen(3000, () => {
console.log('JSON Server is running')
})