import { Link } from "react-router-dom";

export default function Blocked() {
    return (
        <div>
            <h1>You are blocked, you cannot go dashbord</h1>
            <h1>You can create another new account <Link to={'/register'}>Register</Link></h1>
        </div>
    )
}