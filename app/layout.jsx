import Nav from '@/components/Nav'
import './globals.css'

export const metadata = {
  title: 'Prompt Vox',
  description: 'Discover and Share AI prompts',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className='main'>
          <div className='gradient' />
        </div>
        <main className='app'>
          <Nav />
          {children}
        </main>
      </body>
    </html>
  )
}
