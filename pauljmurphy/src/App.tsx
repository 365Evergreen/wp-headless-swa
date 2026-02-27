import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import FeaturesGrid from './components/FeaturesGrid/FeaturesGrid'
import PostsGrid from './components/PostsGrid/PostsGrid'
import ContactForm from './components/ContactForm/ContactForm'
import Footer from './components/Footer/Footer'

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

