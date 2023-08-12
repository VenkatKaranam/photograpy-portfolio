import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800;900&family=Outfit&display=swap" rel="stylesheet"></link>
      <Head />
      <meta name="description" content="Capturing the beauty of life's moments through stunning photography. Offering professional wedding, pre-wedding, and engagement in India. Book a session with VJ Rishi for memorable and artistic photos." />
      <meta name="keywords" content=" photography, Wedding photography, pre-wedding, baby shoot, birthday, India, professional photographer"/> 
      <meta name="author" content="VJ RISHI" />
      <title>VJ RISHI</title>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
