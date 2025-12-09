import { useLocation } from "react-router-dom";
import "../CSS/TicketPage.scss";

function TicketPage() {
  const {state} = useLocation();

  console.log("TicketPage state:", state);

  if (!state) return 
  <div className="ticket-wrapper">
    <h2>올바르지 않은 접근입니다.</h2>
  </div>;

  const { avatar, fullName, email, githubUser } = state;
  
  return (
    <div className="ticket-wrapper">
      <header className="ticket-header">
        <h1>Congrats, <span>{fullName}!</span><br/> Your ticket is ready.</h1>
        <p>We've emailed yout ticket to<br/> <span>{email}</span> and will send updates in <br/> the run up to the event</p>
      </header>
      <div className="tiket-box">
        <div className="top"></div>
        <div className="bottom">
          <div className="avatar">{avatar}</div>
          <div className="bottom-box">
            <span>{fullName}</span>
            <span>{githubUser}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TicketPage;