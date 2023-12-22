import './globals.scss'

export const metadata = {
  title: 'Portfolio | Sota Shimizu',
  description: 'Thanks for visiting my portfolio. If need contact to me, please send email.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
