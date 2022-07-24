import Head from '@components/Head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <main>
        <Header title="Welcome to my fan page for Stongbad! " />
        <p className="description">
          Get started by editing<code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
