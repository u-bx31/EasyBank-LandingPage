import NavBar from './component/NavBar'
import Hero from './component/Hero'
import Offre from './component/Offre';
import Articles from './component/Articles';
import Footer from './component/Footer';
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
