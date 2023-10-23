import React, { useState, useEffect } from "react";
import Task from './component/Task';
import { Center, Box, CheckboxGroup, Text } from "@chakra-ui/react";

const App = () => {
  const initialTasks = [
    {
      name: "買い物",
      isDone: true,
    },
    {
      name: "買い物",
      isDone: false,
    },
    {
      name: "プログラミングの勉強",
      isDone: false,
    },
  ];
  
  return (
    <Box mt="64px">
    <Center>
      <Box>
        <Box mb="24px">
          <Text fontsize="24px" fontWeight="bold">
          タスク一覧
          </Text>
      </Box>
      <CheckboxGroup>
    <Task name="買い物" />
    <Task name="ランニング" />
    <Task name="プログラミングの勉強" />

      </CheckboxGroup>
    </Box>
    </Center>
    </Box>
    
  
  );

}

export default App;
