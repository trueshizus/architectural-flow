type Props = {
  name: string;
  description: string;
};

function ServiceDisplay({ name, description }: Props) {
  return (
    <div className="border-2 border-red-600 border-solid">
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
}

export default ServiceDisplay;
