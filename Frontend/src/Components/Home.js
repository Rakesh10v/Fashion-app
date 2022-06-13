import { useNavigate } from "react-router-dom";
import "../App.css";

function Home() {
  let navigate = useNavigate();

  const navigateSign = () => {
    navigate("/signup");
  };

  const navigateLog = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="home-pg">
        <div className="hello">Fashion</div>
        <div className="Btn-acc">
          <button className="bt-log" onClick={navigateLog}>
            Log-in
          </button>
          <button className="bt-sign" onClick={navigateSign}>
            Sign-up
          </button>
        </div>
      </div>
      <div className="bg-img">
        <div className="home-title">
          <div className="freestyle">
            <div>FREESTYLE</div>
            <div className="fns">FASHIONS</div>
          </div>
        </div>
        <div className="foot">
          <div className="top-txt">Dress To Be</div>
          <div className="btm-txt">Noticed</div>
        </div>
      </div>
    </>
  );
}
export default Home;
