import FormOne from "./components/FormOne";
import Steps from "./components/Steps";

function App() {
  return (
    <div className="App m-0 p-0 container-fluid row row-cols-lg-2 flex-nowrap position-relative">
      <Steps />
      <FormOne />

      <button className="position-absolute text-light rounded-2">
        Next Step
      </button>
    </div>
  );
}

export default App;
