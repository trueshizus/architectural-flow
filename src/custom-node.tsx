import { Handle, Position } from "reactflow";
import { NodeData } from "./App";

function CustomNode({ data }: { data: NodeData }) {
  return (
    <main className="border-solid border-gray-700 border-2 p-2 px-4">
      <h1 className="text-xl  py-1 font-bold">{data.name}</h1>
      <p className="">{data.description}</p>
      {data.resources && (
        <ul>
          {Object.entries(data.resources).map(([key, value]) => (
            <li key={key}>
              {key}: {value.name}
            </li>
          ))}
        </ul>
      )}
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </main>
  );
}

export default CustomNode;
