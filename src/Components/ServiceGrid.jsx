const ServiceGrid = ({ services }) => {
  return (
    <div className="services-grid">
      {services.map((service, index) => (
        <div
          className={`service-card ${
            service.title.includes("WordPress") ? "future" : ""
          }`}
          key={index}
        >
          <img
            src={service.image}
            alt={service.title}
            width={200}
            height={200}
            className="service-image"
          />
          <h2 className="service-title">{service.title}</h2>
          <p className="service-description">{service.description}</p>
          <ul className="service-features">
            {service.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ServiceGrid;
