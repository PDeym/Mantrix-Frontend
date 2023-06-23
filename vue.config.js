const fs = require('fs');

/*
 * ===================
 * CKEDITOR
 * ===================
 */
const path = require( 'path' );
const CKEditorWebpackPlugin = require( '@ckeditor/ckeditor5-dev-webpack-plugin' );
const { styles } = require( '@ckeditor/ckeditor5-dev-utils' );
/*
 * ===================
 * END CKEDITOR
 * ===================
 */

module.exports = {
    outputDir: "E:/xampp/htdocs/frontend/dist",
    publicPath: process.env.NODE_ENV === "production" ? "/metronic8/vue/demo1/" : "/",
    transpileDependencies: [
        /ckeditor5-[^/\\]+[/\\]src[/\\].+\.js$/,
    ],
    configureWebpack: {
        plugins: [
            // CKEditor needs its own plugin to be built using webpack.
            new CKEditorWebpackPlugin( {
                // See https://ckeditor.com/docs/ckeditor5/latest/features/ui-language.html
                language: 'en',

                // Append translations to the file matching the `app` name.
                translationsOutputFile: /app/
            } )
        ],
        devServer: {
            allowedHosts: [
                'padiras.army.mil.ph'
            ],		
            host: 'padiras.army.mil.ph',
            compress:true,	
            port: 443,
            https: {
                key:fs.readFileSync('./keys/server.key'),
                cert:fs.readFileSync('./keys/server.crt')
            }
            // for secured connection
            //port: '443', https: true
        }
    },
    // configureWebpack: {
    //     devServer: {
    //         allowedHosts: [
    //             'dev-palmis.army.mil.ph'
    //         ],		
    //         host: 'dev-palmis.army.mil.ph',
    //         compress:true,	
    //         port: 8080,
    //         https: {
    //             key:fs.readFileSync('./keys/server.key'),
    //             cert:fs.readFileSync('./keys/server.crt')
    //         }
    //         // for secured connection
    //         //port: '443', https: true
    //     }
    // },
    chainWebpack: config => {
        config.plugin('html').tap(args => { args[0].sitename = process.env.VUE_APP_SITENAME; return args; });
        config.resolve.alias.set("vue-i18n", "vue-i18n/dist/vue-i18n.cjs.js");

        // (1.) To handle the editor icons, get the default rule for *.svg files first:
        const svgRule = config.module.rule( 'svg' );

        // Then you can either:
        //
        // * clear all loaders for existing 'svg' rule:
        //
        //		svgRule.uses.clear();
        //
        // * or exclude ckeditor directory from node_modules:
        svgRule.exclude.add( path.join( __dirname, 'node_modules', '@ckeditor' ) );

        // Add an entry for *.svg files belonging to CKEditor. You can either:
        //
        // * modify the existing 'svg' rule:
        //
        //		svgRule.use( 'raw-loader' ).loader( 'raw-loader' );
        //
        // * or add a new one:
        config.module
            .rule( 'cke-svg' )
            .test( /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/ )
            .use( 'raw-loader' )
            .loader( 'raw-loader' );

        // (2.) Transpile the .css files imported by the editor using PostCSS.
        // Make sure only the CSS belonging to ckeditor5-* packages is processed this way.
        config.module
            .rule( 'cke-css' )
            .test( /ckeditor5-[^/\\]+[/\\].+\.css$/ )
            .use( 'postcss-loader' )
            .loader( 'postcss-loader' )
            .tap( () => {
                return styles.getPostCssConfig( {
                    themeImporter: {
                        themePath: require.resolve( '@ckeditor/ckeditor5-theme-lark' ),
                    },
                    minify: true
                } );
            } );

    }
};
