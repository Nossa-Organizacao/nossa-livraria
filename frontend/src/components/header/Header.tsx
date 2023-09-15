import { Button } from "../button/ButtonDefault"
import { HeaderStyle } from "./HeaderStyle"

 const Header = () =>{
    return <HeaderStyle>
        <span>Novas </span>
        <Button type="button" $width={0}>Logar</Button>
    </HeaderStyle>
}

export {Header}