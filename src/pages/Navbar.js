import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="container-fluid">
            <div className="py-3">
                <Link to={'/'}>
                    <img src={"./logo.jpg"} width={200} />
                </Link>
            </div>
        </div>
    )
}