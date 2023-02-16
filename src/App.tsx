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
import * as Toolbar from '@radix-ui/react-toolbar';

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

  function addSquareNode(){
    setNodes(nodes => [
      ...nodes,
      {
        id: crypto.randomUUID(),
        type:'square',
        position:{
          x:750,
          y:350,
        },
        data:{},
      }
    ])
  }

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
    <Toolbar.Root className='fixed bottom-20 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-lg border border-zinc-300 px-8 h-20 w-96 overflow-hidden'>
      <Toolbar.Button className='w-32 h-32 bg-violet-500 mt-6 ronded transition-transform hover:-translate-y-2' onClick={addSquareNode}/>
        
    </Toolbar.Root>
    </div>
    )
}

export default App
