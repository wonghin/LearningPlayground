import React from 'react';
import logo from './logo.svg';
import { Box } from '@mui/material';
import { TestZustandPage } from './Page/TestZustand/TestZustand';
import TodoListZustand from './Page/TestZustand/TodoListZustand';
import Flow, { FlowMui } from './Page/TestReactFlow/TestGetStartReactFlow';
import '../src/Page/TestReactFlow/style.css'
import TestHandleChangeEvent from './Page/TestReactFlow/TestHandleChangeEvent';
import { TestUpdateNode } from './Page/TestReactFlow/TestUpdateNode';
import { Test } from './Page/TestReactFlow/UsingMultipleHandles/Test';

function App() {
  // return (
  //   <Box
  //     bgcolor={'white'} minHeight={'100vh'}
  //     display={'flex'}
  //     justifyContent={'center'}
  //   >
  //     <TodoListZustand />
  //     {/* <TestZustandPage /> */}
  //   </Box>
  // );
  return (
    <>
      {/* <Flow /> */}

      {/* <TestUpdateNode /> */}
      {/* <TestHandleChangeEvent /> */}
      <Test />
    </>
  )
}

export default App;
