import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head/>
      <body className=' bg-black font-body text-white font-semibold gradient-body'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
