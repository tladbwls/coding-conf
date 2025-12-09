import '../CSS/TicketButton.scss';

function TicketButton({text, onClick}) {
  return (
    <button className="ticket-btn" onClick={onClick}>
      {text}
    </button>
  );
}

export default TicketButton;