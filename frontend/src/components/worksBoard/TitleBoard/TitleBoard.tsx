import { BoxTitle } from "./TitleBoardStyle"

const TitleBoard = ({title}:{title: string}) =>{
    return <BoxTitle>
        <h2>{title}</h2>
    </BoxTitle>
}

export {TitleBoard}