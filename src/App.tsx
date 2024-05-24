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

const initialNodes = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: {
      name: "authentication",
      description: "Handles user authentication and authorization.",

      instances: {
        provider: "aws",
        region: "us-east-1",
        runtime: "nodejs14.x",
        memory: 512,
        timeout: 30,
      },
      resources: {
        storage: {
          type: "database",
          name: "users",
        },
        topics: {
          type: "pubsub",
          name: "auth",
        },
      },
    },
    type: "customNode",
  },
  {
    id: "2",
    position: { x: 0, y: 200 },
    data: {
      name: "data",
      description: "Handles data storage and retrieval.",
      instances: {
        provider: "aws",
        region: "us-east-1",
        runtime: "nodejs14.x",
        memory: 512,
        timeout: 30,
      },
      resources: {
        storage: {
          type: "database",
          name: "users",
        },
        topics: {
          type: "pubsub",
          name: "auth",
        },
      },
    },
    type: "customNode",
  },
];

export type NodeData = (typeof initialNodes)[number]["data"];

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
