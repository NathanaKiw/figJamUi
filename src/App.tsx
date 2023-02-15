import 'reactflow/dist/style.css'
import ReactFlow, {
  Controls,
  Background,
  ConnectionMode,
  useEdgesState,
  addEdge,
  Connection,
  useNodesState,
} from 'reactflow';
import { zinc } from 'tailwindcss/colors'
import { Square } from './nodes/Square';
import { useCallback } from 'react';
import DefaultEdge from './edges/DefaultEdge';

const NODE_TYPES ={
  square: Square,
}

const EDGE_TYPES = {
  default: DefaultEdge,
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

  const [nodes, setNodes, onNodesChange] = useNodesState(INICIAL_NODES)

  const onConnect = useCallback((connection:Connection) => {
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
    edgeTypes={EDGE_TYPES}
    defaultEdgeOptions={{
      type:'default'
    }}
    onNodesChange={onNodesChange}
    onEdgesChange={onEdgesChange}
    onConnect={onConnect}
    nodes={nodes}
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
