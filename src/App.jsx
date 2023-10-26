import {useState} from 'react'
import Header from './Header'
import Footer from './Footer'
import Gallery from './Gallery'
import HornFilter from './HornFilter'
import data from './assets/data.json'

function App() {
  const [selectedHorns, setSelectedHorns] = useState("");

  const handleFilterChange = (value) => {
    setSelectedHorns(parseInt(value, 10));
  }


  return (
    <div className="App">
      <Header />
      <HornFilter handleFilterChange={handleFilterChange} />
      <Gallery data={data} selectedHorns={selectedHorns}/>
      <Footer />
    </div>
  );
}

export default App;
