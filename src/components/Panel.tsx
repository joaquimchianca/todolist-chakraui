import { Box, Heading, VStack } from "@chakra-ui/react";
import List from "./List";
import { useState } from "react";
import { AddTask } from "./AddTask";
import { ITask } from "../interface/ITask";

export function Panel() {

    const taskList: ITask[] = [];

    const [tasks, setTasks] = useState(taskList)

    const deleteTask = (id: number) => {
        const newTasks = tasks.filter(t => t.id !== id)
        setTasks(newTasks)
    }

    const addTask = (newTask: ITask) => {
        setTasks([...tasks, newTask])
    }

    const completeTask = (id: number) => {
        setTasks( (prevTasks) => {
            const updateTasks = [...prevTasks]
            updateTasks.forEach( t => {
                if(t.id === id) {
                    t.checked = !t.checked
                }
            })
            return updateTasks
        })
    }


    return (

        <Box bg={"#FFFAF4"} borderRadius={"16px"} py={"1.25rem"} px={"1.78rem"}>
            <VStack spacing={"2.5rem"}>
                <Heading color={"#27374D"}>
                    Todo List App
                </Heading>
                <List tasks={tasks} deleteTask={deleteTask} handleCheck={completeTask}/>
                <AddTask tasks={tasks} addTask={addTask}/>
            </VStack>
        </Box>

    )
}