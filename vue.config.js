module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/metronic8/vue/demo1/" : "/",
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].sitename = process.env.VUE_APP_SITENAME;
                return args;
            })
    }
};
