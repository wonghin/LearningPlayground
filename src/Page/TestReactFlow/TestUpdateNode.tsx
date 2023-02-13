import React, { useCallback, useEffect, useState } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, Connection, Edge } from 'reactflow';
import { Controls, Background } from 'reactflow';

import 'reactflow/dist/style.css';
// import './style.css'
import './updatenode.css';
import { useControls } from 'leva'


const initialNodes = [
    { id: '1', data: { label: '-' }, position: { x: 100, y: 100 } },
    { id: '2', data: { label: 'Node 2' }, position: { x: 100, y: 200 } },
];

const initialEdges = [{ id: 'e1-2', source: '1', target: '2', animated: true }];
const defaultViewport = { x: 0, y: 0, zoom: 2.5 };



export const TestUpdateNode = () => {
    const { Color, NodeName, NodeHidden, Animated } = useControls({
        Color: '#bddbb2',
        NodeName: 'Node 1',
        NodeHidden: false,
        Animated: true
        // myBarColor: { r: 200, b: 125, g: 106, a: 0.4 },
    })
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);


    useEffect(() => {
        setNodes((nds) =>
            nds.map((node) => {
                if (node.id === '1') {
                    // it's important that you create a new object here
                    // in order to notify react flow about the changex
                    node.data = {
                        ...node.data,
                        label: NodeName,
                    };
                }
                return node;
            })
        );
    }, [NodeName])

    useEffect(() => {
        setNodes((nds) =>
            nds.map((node) => {
                if (node.id === '1') {
                    // it's important that you create a new object here
                    // in order to notify react flow about the change
                    node.style = { ...node.style, backgroundColor: Color };
                }
                if (node.id === '2') {
                    // it's important that you create a new object here
                    // in order to notify react flow about the change
                    node.style = { ...node.style, backgroundColor: Color };
                }

                return node;
            })
        );
    }, [Color])

    useEffect(() => {
        setNodes((nds) =>
            nds.map((node) => {
                if (node.id === '1') {
                    // when you update a simple type you can just update the value
                    node.hidden = NodeHidden;
                }

                return node;
            })
        );
        setEdges((eds) =>
            eds.map((edge) => {
                if (edge.id === 'e1-2') {
                    edge.hidden = NodeHidden;
                }

                return edge;
            })
        );
    }, [NodeHidden]);

    useEffect(() => {
        setEdges((eds) =>
            eds.map((edge) => {
                if (edge.id === 'e1-2') {
                    edge.animated = Animated;
                }

                return edge;
            })
        );
    }, [Animated])

    //Handling Connection
    const onConnect = useCallback((params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)), []);


    return (
        <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            defaultViewport={defaultViewport}
            minZoom={1}
            maxZoom={4}
            onConnect={onConnect}
            attributionPosition="bottom-right"
        >

            <Background />
            <Controls />
        </ReactFlow>
    );
};

