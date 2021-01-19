export default ({markup, css, topCss, muicss}) => {

    
return (
    `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Your site - Official website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="Description of your services for SEO purpose"/>
        <style type="text/css">${topCss}</style>
        <style id="jsserver-css">${muicss}</style>
    </head>
    <body>
        <div id="entryContent">${markup}</div>
        <script type="text/javascript" src="/build/bundle.js"></script>
    <style type="text/css">
    ${css}
    </style>
    </body>
    </html>`
)
}