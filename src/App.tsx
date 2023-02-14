import 'reactflow/dist/style.css'
import ReactFlow, {
  Controls,
  Background,
  ConnectionMode,
  useEdgesState,
  addEdge,
  Connection,
} from 'reactflow';
import { zinc } from 'tailwindcss/colors'
import { Square } from './nodes/Square';
import { useCallback } from 'react';

const NODE_TYPES ={
  square: Square,
}

const INICIAL_NODES = [{
  id: crypto.randomUUID(),
  type:'square',
  position:{
    x:200,
    y:400,
  },
  data:{},
},
{
  id: crypto.randomUUID(),
  type:'square',
  position:{
    x:1000,
    y:400,
  },
  data:{},
}] satisfies Node[]


function App() {

  const [edges, setEdges, onEdgesChange] = useEdgesState([])

  const onConnect = useCallback((connection:Connection) =>{
    return setEdges(edges => addEdge(connection, edges))
  },[])

  return (
    <div 
    className='w-screen h-screen'
    >
    <ReactFlow
    connectionMode={ConnectionMode.Loose}
    nodeTypes={NODE_TYPES}
    edges={edges}
    onEdgesChange={onEdgesChange}
    onConnect={onConnect}
    nodes={INICIAL_NODES}
    >
      <Background
      gap={12}
      size={2}
      color={zinc[300]}
      />
      <Controls/>
    </ReactFlow>
    </div>
    )
}

export default App
