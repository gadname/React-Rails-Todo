import { Checkbox, Box, Text } from "@chakra-ui/react";
const Task = (props) => {
return (
    <Box mb="16px">
        <Checkbox 
        isChecked={props.isDone}
        colorScheme="blue"
        size="lg"
        onChange={() => { {/*イベント時に発火アロー関数を用いて発火時の動作を追加できるよ!  */}
            props.toggleIsDone(props.index);{/* 子コンポーネントで渡ってきている */}
        }}
        >
    <Text>{props.name}</Text> {/*name 親タグのname= props.属性名でアクセス*/}
    </Checkbox>
    </Box>
)
}

export default Task