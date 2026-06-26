function Hero() {
  return (
    <section className="hero">
      <div className="hero__overlay"></div>

      <div className="hero__content">
        <p className="hero__eyebrow">Featured Film</p>

        <h1 className="hero__title">The Dark Knight</h1>

        <p className="hero__description">
          When a ruthless criminal mastermind throws Gotham into chaos, Batman
          must confront the line between heroism and obsession.
        </p>

        <div className="hero__actions">
          <button className="btn btn--primary" type="button">
            Play
          </button>

          <button className="btn btn--secondary" type="button">
            More Info
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;