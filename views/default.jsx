const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous"></link>
                <link rel='stylesheet' href='/css/style.css'/>
            </head>
            <body>
                <div className='wrapper'>
                    {html.children}
                </div>
                <footer className='footer'>Creator's <a href="https://github.com/cfdebug">GitHub </a>and <a href="https://www.linkedin.com/in/christopher-frisque-6a928898/">Linkedin</a></footer>
            </body>
        </html>
    )
  }
  

module.exports = Def