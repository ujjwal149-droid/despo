function SponsorCard({ logo, label }) {
  return (
    <div className="sponsor-card">
      <div className="logo-circle">
        <img src={logo} alt={label} />
      </div>
      <p className="sponsor-label">{label}</p>
    </div>
  );
}

export default SponsorCard;
