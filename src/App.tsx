import { useMemo } from "react";
import "./App.css";
import ServiceDisplay from "./components/service-display";
import ReactFlow, {
  Background,
  BackgroundVariant,
  Controls,
  MiniMap,
} from "reactflow";
import "reactflow/dist/style.css";
import CustomNode from "./custom-node";

export type NodeData = {
  name: string;
  type?: string;
  description: string;
};

const initialNodes = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: {
      name: "Authentication",
      type: "textUpdater",
      description: "Handles user authentication and authorization.",
    },
    type: "customNode",
  },
  {
    id: "2",
    position: { x: 0, y: 100 },
    data: {
      name: "Data",
      description: "Handles data storage and retrieval.",
    },
    type: "customNode",
  },
];

const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

const services = [
  {
    name: "Authentication",
    type: "textUpdater",
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
  const nodeTypes = useMemo(() => ({ customNode: CustomNode }), []);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Achitectural Flow</h1>

      <div style={{ width: "100vw", height: "100vh" }}>
        <ReactFlow
          nodes={initialNodes}
          edges={initialEdges}
          nodeTypes={nodeTypes}
        >
          <Controls />
          <MiniMap />
          <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
        </ReactFlow>
      </div>

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
