import { Handle, Position } from 'reactflow';

export default function LeadSourceNode({ data }: any) {
  return (
    <div className="bg-white border border-green-500 rounded-xl shadow p-4 w-48">
      <h3 className="font-semibold text-green-600 mb-2">Lead Source</h3>
      <input
        type="text"
        value={data.source || ''}
        onChange={(e) => data.onChange({ ...data, source: e.target.value })}
        className="border p-1 w-full"
        placeholder="Source name"
      />
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}
