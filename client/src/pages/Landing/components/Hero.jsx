import { Link } from "react-router-dom";

function Hero(){
    return(
        <>
            <h1>AVELINE</h1>
            <Link to={"/login"}>
            <p>Sign in</p>
            </Link>
            <h2>Move with Intention</h2>
            <p>Strength. Balance. Confidence.</p>
            <Link to={"/practice-paths"}>
            <button>Start Your Journey</button>
            </Link>
        </>
    );
}

export default Hero;