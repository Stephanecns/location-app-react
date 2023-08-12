import { useParams } from "react-router-dom"

function Housing() {
    const {id} = useParams();
    return (
        <div>
            <h1>Housing 🧮 {id} </h1>
        </div>
    )
}
export default Housing