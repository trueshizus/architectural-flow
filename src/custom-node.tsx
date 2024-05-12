import { Handle, Position } from "reactflow";
import { NodeData } from "./App";

function CustomNode({ data }: { data: NodeData }) {
  return (
    <article className="border-solid border-stone-500">
      <section className="text-xl font-bold bg-stone-500 text-white">
        {data.name}
      </section>
      <div className="">{data.description}</div>
      test
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </article>
  );
}

export default CustomNode;
