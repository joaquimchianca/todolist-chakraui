import { Checkbox, HStack, Text, VStack } from "@chakra-ui/react";
import { ITask } from "../interface/ITask";
import { DeleteIcon } from "@chakra-ui/icons"

interface ListProps {
    
    tasks: ITask[],
    deleteTask: (id: number) => void,
    handleCheck: (id: number) => void

}

function List({tasks, deleteTask, handleCheck}: ListProps) {

    return (!tasks.length ?
        <Text fontSize={"22px"} fontWeight={"500"} color={"#9BABB8"}>
            No tasks for today 😃
        </Text>
        :
        <VStack spacing={"12px"}>
            {tasks.map( t => (
                <HStack w="400px" justify={"space-between"}>
                    <Checkbox key={t.id} colorScheme="red" value={t.label} onChange={() => handleCheck(t.id)} >
                        <Text color={t.checked ? '#9babb8' : '#27374D'} fontWeight={"500"}>{t.label}</Text>
                    </Checkbox>
                    <DeleteIcon cursor="pointer" color="red" mr="2" onClick={()=>deleteTask(t.id)}/>
                </HStack>
            ))}
        </VStack>
    )
}

export default List