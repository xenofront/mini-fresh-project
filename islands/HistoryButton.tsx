interface IHistoryProps {
  text: string;
  direction: 'back' | 'forward';
  classes?: string;
}

export default function HistoryButton(props: IHistoryProps) {
  const handleHistory = () => {
    props.direction === 'back' ? history.back() : history.forward();
  };

  return <button onClick={handleHistory} class={props.classes}>{props.text}</button>;
}
