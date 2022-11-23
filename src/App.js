import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Offre from './components/Offre';
import Articles from './components/Articles';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <header className="App-Nav">
        <NavBar />
      </header>
      <main>
        <Hero />
        <Offre/>
        <Articles/>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
