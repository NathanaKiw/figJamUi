import 'reactflow/dist/style.css'
import ReactFlow, {
  Controls,
  Background,
} from 'reactflow';
import { zinc } from 'tailwindcss/colors'
import { Square } from './nodes/Square';

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

  return (
    <div 
    className='w-screen h-screen'
    >
    <ReactFlow
    nodeTypes={NODE_TYPES}
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
