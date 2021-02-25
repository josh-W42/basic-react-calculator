import Button from 'react-bootstrap/Button';

const CalcButton = (props) => {
  return (
    <Button onClick={(e) => props.operation(e.target.innerHTML)} type="button" size="lg" variant={props.color}>{props.value}</Button>
  );
}

export default CalcButton;