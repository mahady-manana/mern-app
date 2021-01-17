export default ({markup, css, topCss}) => {
let bundle = "";
if (process.env.NODE_ENV === "development") {
    bundle = "/build/bundle.js";
} else {
    bundle = "/bundle.js";
}
return (
    `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Your site - Official website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="Description of your services for SEO purpose"/>
        <style type="text/css">${topCss}</style>
    </head>
    <body>
        <div id="entryContent">${markup}</div>
        <script src="${bundle}"></script>
    <style type="text/css">
    ${css}
    </style>
    </body>
    </html>`
)
}