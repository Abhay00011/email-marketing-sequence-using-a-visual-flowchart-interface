import { Handle, Position } from 'reactflow';

export default function ColdEmailNode({ data }: any) {
  return (
    <div className="bg-white border border-blue-500 rounded-xl shadow p-4 w-64">
      <h3 className="font-semibold text-blue-600 mb-2">Cold Email</h3>
      <div className="flex justify-between items-center mb-2">
      <label className=" mb-2  font-semibold">To: </label>
      <input
        type="text"
        placeholder ="someone@example.com"
        value={data.to || ''}
        onChange={(e) => data.onChange({ ...data, to: e.target.value })}
        className="border p-0.5 rounded-md text-xs  mb-2"
      />
      </div>
      <div className="flex justify-between gap-2 items-center mb-2 ">
      <label className="block mb-2  font-semibold">Subject: </label>
      <input
        type="text"
        placeholder="Subject"
        value={data.subject || ''}
        onChange={(e) => data.onChange({ ...data, subject: e.target.value })}
         className="border p-0.5 rounded-md text-xs mb-2 "
      /></div>
      <div className="flex justify-between gap-2 items-center mb-2 ">
      <label className="block mb-2  font-semibold">Body: </label>
      <textarea
        placeholder="Email body"
        value={data.body || ''}
        onChange={(e) => data.onChange({ ...data, body: e.target.value })}
        className="border p-0.5 rounded-md text-xs mb-2 w-[62%]"
      /></div>
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}
