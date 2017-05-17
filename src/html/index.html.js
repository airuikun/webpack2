module.exports = function(templateParams) {
    var manifestSource = templateParams.compilation.assets['manifest.json'].source();
    return `<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <link rel="stylesheet" type="text/css" href="/static/app.css">
       <script type="text/javascript">window.webpackManifest=${manifestSource};</script>
    </head>

    <body>
        <div id="main"></div>
        <script src="/static/app.js"></script>
    </body>
</html>`;
};