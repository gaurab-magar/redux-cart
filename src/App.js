import './App.css';
import {Cart , Header , ProductsCard} from "./Components";
import { AllRoutes } from "./routes/AllRoutes";
function App() {
  return (
    <div className="App">
        <Header />
          <AllRoutes />
    </div>
  );
}

export default App;
