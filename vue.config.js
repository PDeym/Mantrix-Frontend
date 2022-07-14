const fs = require('fs');
module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/metronic8/vue/demo1/" : "/",
    configureWebpack: {
        devServer: {
            allowedHosts: [
                'dev-palmis.army.mil.ph'
            ],		
            host: 'dev-palmis.army.mil.ph',
            compress:true,	
            port: 8080,
            https: {
                key:fs.readFileSync('./keys/server.key'),
                cert:fs.readFileSync('./keys/server.crt')
            }
            // for secured connection
            //port: '443', https: true
        }
    },
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].sitename = process.env.VUE_APP_SITENAME;
                return args;
            })
    }
};
