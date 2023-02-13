import ReactFlow, { Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';
import { Box } from '@mui/material';

const nodes = [
    {
        id: '1',
        position: { x: 0, y: 0 },
        data: { label: 'Hello' },
        type: 'input',
    },
    {
        id: '2',
        position: { x: 100, y: 100 },
        data: { label: 'World' },
    },
];
export function Flow() {
    return (
        <div style={{ height: '100%' }}>
            <ReactFlow nodes={nodes}>
                <Background />
                <Controls />
            </ReactFlow>
        </div>
    );
}


export function FlowMui() {
    return (
        <Box>
            <ReactFlow>
                <Background />
                <Controls />
            </ReactFlow>

        </Box>
    )
}

export default Flow;
