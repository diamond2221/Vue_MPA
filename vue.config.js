module.exports = {
    publicPath: "/",
    pages: {
        index: {
            entry: "src/pages/index/index.js",
            template: "public/index.html",
            filename: "index.html"
        },
        info: {
            entry: "src/pages/info/index.js",
            template: "public/info.html",
            fieaname: "info.html",
            title: ""
        },
        list: { entry: "src/pages/list/index.js", title: "列表页面" }
    }
};
