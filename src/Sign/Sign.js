import './Sign.css';

export default function Sign(props) {
  return (
    <div className="sign-card">
      <img src={`${process.env.PUBLIC_URL}/icons/${props.name}.png`} />
      <div className="name">{props.name}</div>
      <p className="date">{props.dates}</p>
    </div>
  );
}