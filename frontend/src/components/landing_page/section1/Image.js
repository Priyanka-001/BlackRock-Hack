
import "./Image.css";
import plane from "./plane.jpg";
import { useNavigate } from "react-router-dom";
function Image() {
  const navigate = useNavigate();
 
  return (
    <div>
      <div className="maining">
      
        <div className="guide">Your Personal Finance Guide</div>
        <div className="tagline">
          Bridging Financial Wisdom With Practicalitly
        </div>
        <button onClick={() => navigate('/login')} className="lets-go">Lets Go</button>
      </div>
      <div>
        <img className="plane" src={plane} />
      </div>
    </div>
  );
}
export default Image;
