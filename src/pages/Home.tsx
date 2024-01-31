import "../assets/pages/front/home.scss";
import Spline from "@splinetool/react-spline";

export default function Home() {

  const CoverSection = () => (
    <section className="row g-0 cover">
      {/* <div className="col-5 d-flex flex-column justify-content-center align-items-center cover-title">
        <h1 className="cover-title__text">NORM</h1>
        <p className="cover-title__info">~ THE INTERIOR STANDARD ~</p>
      </div> */}
      <div className="col-12 box-feature">
        {/* <img
          className="w-100 cover-image"
          src="https://images2.imgbox.com/75/2b/xlGEMbdX_o.jpg"
          alt="Living room sample"
        /> */}

        <Spline scene="https://prod.spline.design/U9B3TclV-jg2MPLj/scene.splinecode" />
      </div>
    </section>
  );

  const StorySection = () => (
    <section className="row g-0 story">
      <div className="col-7 box-feature">
        <img
          className="w-100 h-100 "
          src="https://roohome.com/wp-content/uploads/2016/10/scandinavian-small-apartment-interior.jpg"
        />
      </div>
      <div className="col-5 d-flex flex-column justify-content-center align-items-center story-title">
        <h2 className="story-title__text">Our Story</h2>
        <p className="story-title__info">
          Furnishing your home can be quite overwhelming at times, at least that
          is how it was for us. <br />
          Norm was born to help others going through the maze that is interior
          design.
          <br />
          We decided to curate interior design modern trends, inspirations, tips
          and tricks from the vast interior collective to help you bring your
          home to life.
        </p>
      </div>
    </section>
  );

  return (
    <div className="container-fluid p-0">
      <CoverSection />
      <StorySection />
    </div>
  );
}
