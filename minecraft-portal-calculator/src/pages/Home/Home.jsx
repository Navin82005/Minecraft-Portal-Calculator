// HOOKS
import { useNavigate } from "react-router-dom";

// REDUX
import { useSelector, useDispatch } from "react-redux";
import { changeActive } from "../../features/sidebar.mjs";

// IMAGES
import background_image from "../../assets/images/home_thumbnail.jpg"

// COMPONENTS
import MCButton from "../../components/MC Button/MCButton";

// STYLES
import "./Home.css";

const Home = () => {
    const navigator = useNavigate();
    const dispatcher = useDispatch();

    const handleNavigate = (path) => {
        dispatcher(changeActive(path));
        navigator(path);
    }

    return (
        <div className="home-container">
            <div className="background-image">
                <img src={background_image} />
            </div>
            <div className="home-content">
                <MCButton onClick={() => handleNavigate("/calculator")} text={"Portal Calculator"} />
                <MCButton onClick={() => handleNavigate("/coordinates")} text={"Store Coordinates"} />
            </div>
        </div>
    )
}

export default Home