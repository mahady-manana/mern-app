export default ({markup, css}) => {
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
        <title>Your site - Official website</title>
        <meta name="description" content="Description of your services for SEO purpose"/>
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