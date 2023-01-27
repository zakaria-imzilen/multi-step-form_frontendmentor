import FormOne from "./components/FormOne";
import Steps from "./components/Steps";

function App() {
  return (
    <div className="App m-0 p-0 container-fluid row row-cols-lg-2 flex-nowrap position-relative">
      <Steps />
      <FormOne />
    </div>
  );
}

export default App;
