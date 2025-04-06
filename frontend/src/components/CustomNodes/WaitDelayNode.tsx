import { Handle, Position } from 'reactflow';

export default function WaitDelayNode({ data }: any) {
  return (
    <div className="bg-white border border-yellow-500 rounded-xl shadow p-4 w-48">
      <h3 className="font-semibold text-yellow-600 mb-2">Wait / Delay</h3>
      <input
        type="number"
        min={1}
        value={data.delay || ''}
        onChange={(e) => data.onChange({ ...data, delay: Number(e.target.value) })}
        className="border p-1 w-full mb-2"
        placeholder="Delay"
      />
      <select
        value={data.unit || 'hours'}
        onChange={(e) => data.onChange({ ...data, unit: e.target.value })}
        className="border p-1 w-full"
      >
        <option value="minutes">Minutes</option>
        <option value="hours">Hours</option>
        <option value="days">Days</option>
      </select>
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}
