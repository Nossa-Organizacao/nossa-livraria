import { FaEye } from "react-icons/fa";
import { WorkBox } from "./WorkStyle";

type WorkProps = {
  name: string;
  cap: string;
  view: string;
};

const Work = ({ name, cap, view }: WorkProps) => {
  return (
    <WorkBox>
      <div>

      <span>{name}</span>
      <span> - </span>
      <span>{cap}</span>
      </div>
      <div>
        <span>{view}</span>
        <FaEye />
      </div>
    </WorkBox>
  );
};

export { Work };
