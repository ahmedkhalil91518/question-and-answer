import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from "./components/Navigation";
function App() {
  return (
    <>
      <Navigation />
      <div className="shapes-container">
        <div class="shape"></div>
        <div class="shape2"></div>
        <div className="text-container"></div>
      </div>
    </>
  );
}

export default App;
