const vehicles = [
  {
    name: "2024 Toyota Land Cruiser",
    price: "GH₵ 1,250,000",
    details: "Automatic • Petrol • 12,000 km",
    tag: "Featured",
    image: "/land-cruiser.jpg",
  },
  {
    name: "2023 Mercedes-Benz C300",
    price: "GH₵ 850,000",
    details: "Automatic • Petrol • 18,500 km",
    tag: "Premium",
    image: "/mercedes-c300.jpg",
  },
  {
    name: "2022 Toyota Camry",
    price: "GH₵ 420,000",
    details: "Automatic • Petrol • 32,000 km",
    tag: "Popular",
    image: "/toyota-camry.jpg",
  },
];

const services = [
  {
    number: "01",
    title: "Vehicle Sales",
    text: "Browse quality vehicles selected for Ghanaian drivers.",
  },
  {
    number: "02",
    title: "Vehicle Sourcing",
    text: "Tell us what you need and we will help find the right vehicle.",
  },
  {
    number: "03",
    title: "Trade-In",
    text: "Upgrade your vehicle and ask our team about trade-in options.",
  },
  {
    number: "04",
    title: "After-Sales Support",
    text: "We remain available to support you after your purchase.",
  },
];

export default function Home() {
  const whatsapp = "https://wa.me/233000000000";

  return (
    <main>
      <header className="nav">
        <a className="logo" href="#home">
          DRIVE<span>GH</span>
        </a>

        <nav>
          <a href="#vehicles">Vehicles</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="navCta" href={whatsapp}>
          WhatsApp Us
        </a>
      </header>

      <section id="home" className="hero">
        <div className="heroOverlay">
          <p className="eyebrow">PREMIUM VEHICLES • TRUSTED SERVICE</p>

          <h1>
            Find the car
            <br />
            <em>that fits you.</em>
          </h1>

          <p className="heroText">
            Quality vehicles, transparent service and a team ready to help you
            find your next car.
          </p>

          <div className="actions">
            <a className="button primary" href="#vehicles">
              View Vehicles
            </a>

            <a className="button lightButton" href={whatsapp}>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section id="vehicles" className="section">
        <div className="sectionHead">
          <div>
            <p className="eyebrow">OUR VEHICLES</p>
            <h2>Featured cars.</h2>
          </div>

          <p>
            Explore some of the vehicles available from our dealership.
          </p>
        </div>

        <div className="vehicleGrid">
          {vehicles.map((vehicle) => (
            <article className="vehicleCard" key={vehicle.name}>
              <div className="vehicleImage">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />

                <span>{vehicle.tag}</span>
              </div>

              <div className="vehicleInfo">
                <h3>{vehicle.name}</h3>

                <p className="vehicleDetails">{vehicle.details}</p>

                <div className="vehicleBottom">
                  <strong>{vehicle.price}</strong>

                  <a href={whatsapp}>Enquire →</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="section soft">
        <div className="sectionHead">
          <div>
            <p className="eyebrow">OUR SERVICES</p>
            <h2>More than just selling cars.</h2>
          </div>

          <p>
            From sourcing your next vehicle to helping you upgrade, we're here
            throughout the journey.
          </p>
        </div>

        <div className="cards">
          {services.map((service) => (
            <article className="card" key={service.number}>
              <span className="number">{service.number}</span>

              <h3>{service.title}</h3>

              <p>{service.text}</p>

              <a href={whatsapp}>Learn more →</a>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="section split">
        <div>
          <p className="eyebrow">ABOUT DRIVEGH</p>

          <h2>Your next car should feel like the right choice.</h2>
        </div>

        <div>
          <p>
            We help individuals and families find quality vehicles that match
            their needs and budget.
          </p>

          <p>
            Whether you're buying your first car, upgrading or looking for a
            specific model, our team is ready to help.
          </p>

          <a className="textLink" href="#contact">
            Speak with our team →
          </a>
        </div>
      </section>

      <section className="section darkSection">
        <div>
          <p className="eyebrow">WHY BUY FROM US</p>

          <h2>A better way to buy your next vehicle.</h2>
        </div>

        <div className="reasonGrid">
          <div>
            <b>01</b>
            <h3>Quality Selection</h3>
            <p>Vehicles selected for quality, value and reliability.</p>
          </div>

          <div>
            <b>02</b>
            <h3>Transparent Service</h3>
            <p>Clear communication throughout the buying process.</p>
          </div>

          <div>
            <b>03</b>
            <h3>Easy Enquiries</h3>
            <p>Contact us directly through WhatsApp or phone.</p>
          </div>

          <div>
            <b>04</b>
            <h3>Customer First</h3>
            <p>We want you to feel confident about your decision.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact section">
        <div>
          <p className="eyebrow">READY TO FIND YOUR CAR?</p>

          <h2>Let's find the right vehicle for you.</h2>

          <p>
            Tell us the make, model, budget and type of vehicle you're looking
            for.
          </p>

          <a className="button primary" href={whatsapp}>
            Start a WhatsApp Enquiry
          </a>
        </div>

        <div className="contactBox">
          <p>
            <strong>Phone</strong>
            <br />
            +233 00 000 0000
          </p>

          <p>
            <strong>WhatsApp</strong>
            <br />
            +233 00 000 0000
          </p>

          <p>
            <strong>Location</strong>
            <br />
            Accra, Ghana
          </p>

          <p>
            <strong>Opening Hours</strong>
            <br />
            Monday – Saturday, 8:00 AM – 6:00 PM
          </p>
        </div>
      </section>

      <footer>
        <div className="logo">
          DRIVE<span>GH</span>
        </div>

        <p>© 2026 DriveGH. All rights reserved.</p>
      </footer>

      <a className="floating" href={whatsapp}>
        WhatsApp
      </a>
    </main>
  );
}
