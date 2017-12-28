({
    //requirejs.cofig文件的路径,它会自动读取main.js里面的配置信息
    mainConfigFile: '../develope/js/build_config.js',
    appDir:'../develope',//根目录
    //baseUrl: "../develope/js",
    //默认情况写r.js会把相关的依赖文件拷贝到输出目录里面去
    //设置为true之后r.js就不会进行这一操作
    removeCombined: true,
    //findNestedDependencies设置为true表示将所有相关的依赖模块也合并进来，
    // 默认为false只会对main.js进行压缩合并的操作
    findNestedDependencies: false,
    dir: "../version_1.4",//输出目录
    optimizeCss:'standard',
    fileExclusionRegExp:'\.(less|html|php|psd|PSD$|DS_Store)$',//匹配的文件不会输出
    paths: {
        'jquery': 'lib/jquery.min',
        'layer': 'lib/layer/layer',
        'laydate': 'lib/laydate/laydate',
        'template':'lib/template-native',
        // 'ueconfig':'http://zdm.jiguo.com/protected/extensions/editor/ueditor.config',
        // 'ueditor':'http://zdm.jiguo.com/protected/extensions/editor/ueditor',
        // 'zeroclipboard':'http://zdm.jiguo.com/protected/extensions/editor/third-party/zeroclipboard/ZeroClipboard.min'
    }
})