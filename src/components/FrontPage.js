import Button from "react-bootstrap/Button";

const FrontPage = () => {
  return (
    <div>
      <div className=" question-mark-container">
        <i className="fa-regular fa-circle-question fa-4x question-mark fa-bounce"></i>
      </div>
      <div className="shapes-container shadow">
        <div className="shape"></div>
        <div className="shape2"></div>
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
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-facebook mx-2 my-0 fa-2x"></i>
            </a>
            <a
              href="https://twitter.com/?lang=en"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-twitter mx-2 my-0 fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FrontPage;
