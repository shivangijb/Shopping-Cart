import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Pricing from "./components/Pricing";
import data from "./data";


function App(){
  const {products} = data;
  return (
    <div className="App">
      <Header/>
      <div className="row">
        <ItemList 
          products={products}/>
        <Pricing/>
      </div>

    </div>
  );
}

export default App;
