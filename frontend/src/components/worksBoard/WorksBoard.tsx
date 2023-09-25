import { ListWorks } from "./ListWorks/ListWorks";
import { TitleBoard } from "./TitleBoard/TitleBoard";
import { WorkBoardSection } from "./WorksBoardStyle";

const WorksBoard = ({title}:{title:string}) => {
  const mockData = [
    {
      name: "Trabalho 1",
      cap: "Capítulo 1",
      view: "10",
    },
    {
      name: "Trabalho 2",
      cap: "Capítulo 2",
      view: "20",
    },
    {
      name: "Trabalho 3",
      cap: "Capítulo 3",
      view: "30",
    },
    {
      name: "Trabalho 4",
      cap: "Capítulo 4",
      view: "30",
    },
  ];

  return (
    <WorkBoardSection>
      <TitleBoard title={title} />
      <ListWorks list={mockData} />
    </WorkBoardSection>
  );
};

export { WorksBoard };
