import { useParams } from "react-router-dom";
import Slideshow from "../components/slideshow";

function Housing() {
  const { id } = useParams();
  return (
    <div>
      <h1> {id} </h1>
      <Slideshow />
    </div>
  );
}
export default Housing;
