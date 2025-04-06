import ReactFlow, {
    Background,
    Controls,
    MiniMap,
    addEdge,
    useEdgesState,
    useNodesState,
    Node,
    Edge
  } from 'reactflow';
  import 'reactflow/dist/style.css';
  import { useCallback, useState } from 'react';
  import { toast, ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import ColdEmailNode from './CustomNodes/ColdEmailNode';
  import WaitDelayNode from './CustomNodes/WaitDelayNode';
  import LeadSourceNode from './CustomNodes/LeadSourceNode';
  import Sidebar from './Sidebar';
  import axios from 'axios';
  
  const nodeTypes = {
    cold: ColdEmailNode,
    wait: WaitDelayNode,
    lead: LeadSourceNode,
  };
  
  export default function FlowEditor() {
    const initialNodes: Node[] = [];
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [collapsed, setCollapsed] = useState(false);
    const onConnect = useCallback(
      (params: Edge | any) => setEdges((eds) => addEdge(params, eds)),
      [setEdges]
    );
  
    const toggleSidebar = () => setCollapsed(!collapsed);
  
    const addNode = (type: string) => {
      const id = (nodes.length + 1).toString();
      const position = { x: Math.random() * 250, y: Math.random() * 250 };
      const data: any = {
        label: `${type.toUpperCase()} Node`,
        onChange: (newData: any) => {
          setNodes((nds) =>
            nds.map((node) =>
              node.id === id ? { ...node, data: { ...newData, onChange: node.data.onChange } } : node
            )
          );
        },
      };
  
      setNodes((nds) => [...nds, { id, type, data, position }]);
    };
  
    const handleSaveFlow = async () => {
        try {
          const token = localStorage.getItem('token');
          if (!token) throw new Error("No auth token found");
      
          // Clean nodes by removing onChange before saving
        //   const cleanedNodes = nodes.map(({ data, ...rest }) => ({
        //     ...rest,
        //     data: { ...data, onChange: undefined },
        //   }));
      
          await axios.post(
            ("http://localhost:5000/flow/save"),
            {
              name: 'default', // you can make this dynamic later
              nodes,
              edges,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
      
          toast.success('Flow saved!');
          // Optional: clear the canvas after saving
          setNodes([]);
          setEdges([]);
        } catch (error: any) {
          console.error("Save Flow Error:", error);
          toast.error(error?.response?.data?.error || 'Failed to save flow');
        }
      };
      
      const handleLoadFlow = async () => {
        try {
          const token = localStorage.getItem('token');
          if (!token) throw new Error("No auth token found");
      
          const res = await axios.get('http://localhost:5000/flow/load?name=default', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
      
          const { nodes: loadedNodes, edges: loadedEdges } = res.data;
      
          const boundNodes = loadedNodes.map((node: any) => ({
            ...node,
            data: {
              ...node.data,
              onChange: (newData: any) => {
                setNodes((nds) =>
                  nds.map((n) =>
                    n.id === node.id
                      ? { ...n, data: { ...newData, onChange: n.data.onChange } }
                      : n
                  )
                );
              },
            },
          }));
      
          setNodes(boundNodes);
          setEdges(loadedEdges);
          toast.success('Flow loaded!');
        } catch (error: any) {
          console.error("Load Flow Error:", error);
          toast.error(error?.response?.data?.error || 'Failed to load flow');
        }
      };
      
    return (
      <div className="h-screen flex">
         <ToastContainer position="top-right" autoClose={3000} />
        <Sidebar
          collapsed={collapsed}
          toggle={toggleSidebar}
          addNode={addNode}
          onSave={handleSaveFlow}
          onLoad={handleLoadFlow}
        />
        <div className="flex-grow h-full">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            fitView
          >
            <MiniMap />
            <Controls />
            <Background />
          </ReactFlow>
        </div>
      </div>
    );
  }
  