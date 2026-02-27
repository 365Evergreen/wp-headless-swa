import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import FeaturesGrid from './components/FeaturesGrid'
import PostsGrid from './components/PostsGrid'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Hero />
        <FeaturesGrid />
        <PostsGrid />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

export default App
