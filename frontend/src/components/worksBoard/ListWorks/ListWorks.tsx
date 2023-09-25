import { ListStyle } from "./ListWorksStyle";
import { Work } from "./Work/Work";

type ListProps = {
  name: string;
  cap: string;
  view: string;
};

type Props = {
    list: ListProps[]
}

const ListWorks = ({list}:Props) => {
  return (
    <ListStyle>
      {list.map((work, index) => (
        <Work key={index} cap={work.cap} name={work.name} view={work.view} />
      ))}
    </ListStyle>
  );
};

export { ListWorks };
