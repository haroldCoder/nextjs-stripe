import Nav from './nav/Nav'
import Jumbotron from './jumbotron/Jumbotron'
import Pricing from './pricing/Pricing'
import About from './about/About'
import Footer from './footer/Footer'

export default function HomePage() {
  return (
    <div>
      <Nav />
      <Jumbotron />
      <Pricing />
      <About />
      <Footer />
    </div>
  )
}
