import { Button ,ButtonGroup,styled} from "@mui/material"

const Componentn=styled(ButtonGroup)`
margin-top:30px;
`

const StyelButton = styled(Button)`
 border-radius:50%;
`


const GroupedButton = ()=>{

    return (

        <Componentn>
            <StyelButton>-</StyelButton>
            <Button disabled>1</Button>
            <StyelButton>+</StyelButton>

        </Componentn>
    )
}
export default GroupedButton;