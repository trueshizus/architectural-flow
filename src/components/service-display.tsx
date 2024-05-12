type Props = {
  name: string;
  description: string;
};

function ServiceDisplay({ name, description }: Props) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
}

export default ServiceDisplay;
