import SponsorCard from "../components/SponsorCard";

function Sponsors() {
  return (
    <section className="sponsors">

      <h1 className="sponsors-title">Our Sponsors</h1>

      <div className="sponsor-row">
        <div className="sponsor-item">
          <img src="/src/assets/logos/redbull.png" alt="Red Bull" />
          <p>Drinking<br />Partner</p>
        </div>

        <div className="sponsor-item">
          <img src="/src/assets/logos/vivo.png" alt="Vivo" />
          <p>Special<br />Partner</p>
        </div>

        <div className="sponsor-item">
          <img src="/src/assets/logos/chetak.png" alt="Chetak" />
          <p>Vehicle Dealership<br />Partner</p>
        </div>
      </div>

      <div className="sponsor-row">
        <div className="sponsor-item">
          <img src="/src/assets/logos/globalreach.png" alt="Global Reach" />
          <p>Educational<br />Partner</p>
        </div>

        <div className="sponsor-item">
          <img src="/src/assets/logos/mankind.png" alt="Mankind" />
          <p>Healthcare<br />Partner</p>
        </div>

        <div className="sponsor-item">
          <img src="/src/assets/logos/sos.png" alt="SOS" />
          <p>Drinking<br />Partner</p>
        </div>
      </div>

      <div className="sponsor-row sponsor-row-single">
        <div className="sponsor-item">
          <img src="/src/assets/logos/ktm.png" alt="KTM" />
          <p>Riding<br />Partner</p>
        </div>
      </div>

    </section>
  );
}

export default Sponsors;
