import bgDesktop from "../images/bg-sidebar-desktop.svg";
import "../css/Steps.css";

const Steps = () => {
  return (
    <section
      id="steps"
      className="position-relative container-lg m-0 pt-5 col-12 col-lg-4 row row-cols-6 row-cols-lg-1 justify-content-center align-items-start rounded-3"
    >
      <img src={bgDesktop} alt="" className="position-absolute start-0" />
      <article className="row row-cols-3 justify-content-center align-items-center">
        <div className="icon row row-cols-1 align-items-center text-light mx-auto mx-lg-0 me-lg-4 rounded-circle text-center p-2 active">
          <span className="m-0 p-0">1</span>
        </div>
        <div className="d-none d-lg-flex text row row-cols-1 m-0 p-0">
          <span className="text-black-10 m-0 p-0">STEP 1</span>
          <span className="text-light m-0 p-0">YOUR INFO</span>
        </div>
      </article>
      <article className="row row-cols-3 justify-content-center align-items-center">
        <div className="icon row row-cols-1 align-items-center text-light mx-auto mx-lg-0 me-lg-4 rounded-circle text-center p-1">
          <span className="m-0 p-0">2</span>
        </div>
        <div className="d-none d-lg-flex text row row-cols-1 m-0 p-0">
          <span className="text-black-10 m-0 p-0">STEP 2</span>
          <span className="text-light m-0 p-0">SELECT PLAN</span>
        </div>
      </article>
      <article className="row row-cols-3 justify-content-center align-items-center">
        <div className="icon row row-cols-1 align-items-center text-light mx-auto mx-lg-0 me-lg-4 rounded-circle text-center p-1">
          <span className="m-0 p-0">3</span>
        </div>
        <div className="d-none d-lg-flex text row row-cols-1 m-0 p-0">
          <span className="text-black-10 m-0 p-0">STEP 3</span>
          <span className="text-light m-0 p-0">ADD-ONS</span>
        </div>
      </article>
      <article className="row row-cols-3 justify-content-center align-items-center">
        <div className="icon row row-cols-1 align-items-center text-light mx-auto mx-lg-0 me-lg-4 rounded-circle text-center p-1">
          <span className="m-0 p-0">4</span>
        </div>
        <div className="d-none d-lg-flex text row row-cols-1 m-0 p-0">
          <span className="text-black-10 m-0 p-0">STEP 4</span>
          <span className="text-light m-0 p-0">SUMMARY</span>
        </div>
      </article>
    </section>
  );
};

export default Steps;
