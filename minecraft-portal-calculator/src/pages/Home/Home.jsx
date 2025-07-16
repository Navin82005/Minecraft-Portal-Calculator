import { useNavigate } from "react-router-dom";
import background_image from "../../assets/images/home_thumbnail.jpg"
import MCButton from "../../components/MC Button/MCButton";

// STYLES
import "./Home.css";

const Home = () => {
    const navigator = useNavigate();

    return (
        <div className="home-container">
            <div className="home-background-image">
                <img src={background_image} />
            </div>
            <div className="home-content">
                <MCButton onClick={() => navigator("/calculator")} text={"Portal Calculator"} />
                <MCButton onClick={() => navigator("/coordinates")} text={"Store Coordinates"} />
            </div>
        </div>
    )
}

export default Home