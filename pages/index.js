import Head from '@components/Head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
      <><main>
      <Header title="Welcome to my fan page for Stongbad! " />
      <h1>EVERYBODY! EVERYBODY!</h1>
      <code>
        <div className="description">
          <h4>Everybody to the limit!</h4>
          <img class="logo" src="images/logo.jpg" />
          <p class="loser">Congratulations on being some of the first viewers of the <b>coolest</b> HomeStarRunner fan page ever!</p>
          <img class="loser" src="images/homestarrunner.jpeg" /></div>
        <div className="container">
          <div class="coolBros">
            <p>Let's not kid ourselves here, you're here to see the <b>actually cool</b>bros...</p></div>
          <figure src="images/thecheat.jpeg"><figcaption>THE CHEAT! STILL GROUNDED!</figcaption></figure>
          <figure src="images/trogdor.jpg"><figcaption>TROGDOR STILL BURNINATES</figcaption></figure>
          <figure src="images/sb.jpg"><figcaption>STRONGBAD! STRONGEST OF THE BADS</figcaption></figure>
          <h4>This is actually my first attempt at my own Netlify app</h4>
          <p>Included are full deployment, and with two environments, test and production.</p>
          <p>If you are reading this, you are seeing my "base" level on production.</p>
          <h5>Plans going forward:</h5>
          <ul>
            <li>Replace this index.html page with the intended index.js file</li>
            <li>Make good use of plugging in the variables for page components</li>
            <li>Update ALL css files to SCSS (then to Sass)</li>
            <li>Finally, update all my uses of "and" to the lovely ampersand!</li>
          </ul>
        </div>
      </code>
    </main><Footer /></>
  )
}
