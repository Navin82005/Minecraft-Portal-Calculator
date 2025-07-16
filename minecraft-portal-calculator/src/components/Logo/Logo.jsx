
// LOGO
import navioLogo from "../../assets/icons/navio-kits-logo-1.png";

// STYLES
import "./Logo.css";

const Logo = ({ onClick }) => {
    return (
        <div onClick={onClick} className="navio-logo-container">
            <div className="navio-logo-image"><img src={navioLogo} /></div>
            <div className='navio-logo-text'>
                Minecraft Kit
                {/* <span>
                    by naveen
                </span> */}

            </div>
        </div>
    )
}

export default Logo