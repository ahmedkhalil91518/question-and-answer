import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from "./components/Navigation";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div>
      <Navigation />
      <div className=" question-mark-container">
        <i class="fa-regular fa-circle-question fa-4x question-mark1 fa-bounce"></i>
        <i class="fa-regular fa-circle-question fa-4x question-mark2 fa-bounce"></i>
        <i class="fa-regular fa-circle-question fa-4x question-mark3 fa-bounce"></i>
      </div>
      <div className="shapes-container shadow">
        <div class="shape"></div>
        <div class="shape2"></div>
        <div className="text-container text-center p-5 shadow">
          <h1 className="my-4 main-page bolder">
            What will this site offer you?
          </h1>
          <h1 className="main-page bolder">----------</h1>
          <h1 className="main-page bolder">
            Here you can undergo tests in your field of expertise, and we can
            also provide you with some sources to develop yourself in this
            field.
          </h1>
          <Button size="lg" className="my-4 button shadow">
            Start
          </Button>{" "}
          <div className="social d-flex justify-content-start">
          <a href="#"><i class="fa-brands fa-facebook mx-2 my-0 fa-2x"></i></a>
          <a href="#"><i class="fa-brands fa-twitter mx-2 my-0 fa-2x"></i></a>
        </div>
        </div>

      </div>
    </div>
  );
}

export default App;
