import { IconButton, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { ITask } from "../interface/ITask"
import { AddIcon } from "@chakra-ui/icons"
import { useState } from "react"

interface AddTaskProps {
    tasks: ITask[],
    addTask: (newTask: ITask) => void
}

export function AddTask({ tasks, addTask }: AddTaskProps) {
    const [value, setValue] = useState('')

    const handleClick = () => {
        let newId = tasks.length
        const newTask = { id: ++newId, label: value, checked: false }
        addTask(newTask)
        setValue('')
    }

    return (
        <InputGroup>
            <Input placeholder="adicione uma nova tarefa" value={value} onChange={e => { setValue(e.target.value) }} />
            <InputRightElement>
                <IconButton aria-label="adiciona tarefa" icon={<AddIcon />} colorScheme="red" onClick={handleClick} />
            </InputRightElement>
        </InputGroup>

    )
}