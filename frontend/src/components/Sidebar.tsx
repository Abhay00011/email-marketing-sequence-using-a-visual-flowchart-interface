// import {   useNavigate } from 'react-router-dom';
// import expand from '../assets/expand.png';
// import minimize from '../assets/minimize.png';
// import { Logout } from '../pages/Logout';


// interface SidebarProps {
//     collapsed: boolean;
//     toggle: () => void;
//     addNode: (type: string) => void;
//     onSave: () => void;
// }

// export default function Sidebar({ collapsed, toggle, addNode, onSave }: SidebarProps) {
//       const navigate = useNavigate();
//         const handlelogout = () => {
//           Logout();
//           navigate('/');
//         }
//     return (
//       <div className={`bg-gray-600 text-white p-4 ${collapsed ? 'w-15' : 'w-64'} transition-all`}>
//         <button onClick={toggle} className="mb-4 text-sm bg-gray-600  px-1 py-1 hover:cursor-pointer rounded-xl">
         
//           {collapsed ? (<img src={expand} className='w-100 h-5' />) : (<img src={minimize} className='w-5 h-5' />)}
//         </button>
//         {!collapsed && (
//           <>
//             <h3 className="text-3xl text-center mb-2 font-bold">Nodes</h3>
//             <button onClick={() => addNode('coldEmail')} className="block hover:cursor-pointer font-semibold  w-full bg-blue-500 my-2 px-2 py-1 rounded-2xl">+ Cold Email</button>
//             <button onClick={() => addNode('delay')} className="block hover:cursor-pointer font-semibold  w-full bg-yellow-500 my-2 px-2 py-1 rounded-2xl">+ Delay</button>
//             <button onClick={() => addNode('leadSource')} className="block hover:cursor-pointer font-semibold  w-full bg-green-500 my-2 px-2 py-1 rounded-2xl">+ Lead Source</button>
//             <hr className="my-3" />
//             <button onClick={onSave} className="w-full hover:cursor-pointer bg-purple-600 py-2 font-semibold  rounded-2xl">💾 Save</button>
//             <button onClick={handlelogout} className="block w-full bg-gray-400 font-semibold text-black my-58 px-2 py-1 rounded-2xl hover:cursor-pointer">Logout</button>
//           </>
//         )}
//       </div>
//     );
//   }
import {   useNavigate } from 'react-router-dom';
import expand from '../assets/expand.png';
import minimize from '../assets/minimize.png';
import { Logout } from '../pages/Logout';

interface SidebarProps {
    collapsed: boolean;
    toggle: () => void;
    addNode: (type: 'cold' | 'wait' | 'lead') => void;
    onSave: () => void;
    onLoad: () => void;
  }
// interface SidebarProps {
//     collapsed: boolean;
//     toggle: () => void;
//     addNode: (type: 'cold' | 'wait' | 'lead') => void; 
//     onSave: () => void;
// }

export default function Sidebar({ collapsed, toggle, addNode, onSave,onLoad }: SidebarProps) {
      const navigate = useNavigate();
        const handlelogout = () => {
          Logout();
          navigate('/');
        }
    return (
      <div className={`bg-gray-600 text-white p-4 ${collapsed ? 'w-15' : 'w-64'} transition-all`}>
        <button onClick={toggle} className="mb-4 text-sm bg-gray-600  px-1 py-1 hover:cursor-pointer rounded-xl">
         
          {collapsed ? (<img src={expand} className='w-100 h-5' />) : (<img src={minimize} className='w-5 h-5' />)}
        </button>
        {!collapsed && (
          <>
            <h3 className="text-3xl text-center mb-2 font-bold">Nodes</h3>
            <button onClick={() => addNode('cold')} className="block w-full bg-gray-400 font-semibold text-black my-2 px-2 py-1 rounded-2xl hover:cursor-pointer">+ Cold Email</button>
            <button onClick={() => addNode('wait')} className="block w-full bg-gray-400 font-semibold text-black my-2 px-2 py-1 rounded-2xl hover:cursor-pointer">+ Delay</button>
            <button onClick={() => addNode('lead')} className="block w-full bg-gray-400 font-semibold text-black my-2 px-2 py-1 rounded-2xl hover:cursor-pointer">+ Lead Source</button>
            <hr className="my-3" />
            <button onClick={onSave} className="block w-full bg-gray-400 font-semibold text-black my-2 px-2 py-1 rounded-2xl hover:cursor-pointer">💾 Save</button>
            <button onClick={onLoad} className="block w-full bg-gray-400 font-semibold text-black my-2 px-2 py-1 rounded-2xl hover:cursor-pointer">Load Last Flow</button>
            <button onClick={handlelogout} className="block w-full bg-gray-400 font-semibold text-black my-58 px-2 py-1 rounded-2xl hover:cursor-pointer">Logout</button>
          </>
        )}
      </div>
    );
  }
  