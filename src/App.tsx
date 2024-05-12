import "./App.css";
import ServiceDisplay from "./components/service-display";

const services = [
  {
    name: "Authentication",
    description: "Handles user authentication and authorization.",
  },
  {
    name: "Data",
    description: "Handles data storage and retrieval.",
  },
  {
    name: "Payment",
    description: "Handles payment processing.",
  },
];

function App() {
  return (
    <>
      <h1>Achitectural Flow</h1>

      {services.map((service) => (
        <ServiceDisplay
          key={service.name}
          name={service.name}
          description={service.description}
        />
      ))}
    </>
  );
}

export default App;
