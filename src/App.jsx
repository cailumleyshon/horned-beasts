import Header from './Header'
import Footer from './Footer'
import Gallery from './Gallery'
import data from './assets/data.json'

function App() {
  return (
    <div className="App">
      <Header />
      <Gallery data={data}/>
      <Footer />
    </div>
  );
}

export default App;
