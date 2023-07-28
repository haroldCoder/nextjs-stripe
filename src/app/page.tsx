import Nav from './nav/Nav'
import Jumbotron from './jumbotron/Jumbotron'
import Pricing from './pricing/Pricing'
import About from './about/About'

export default function HomePage() {
  return (
    <div>
      <Nav />
      <Jumbotron />
      <Pricing />
      <About />
    </div>
  )
}
