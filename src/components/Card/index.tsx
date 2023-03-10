type Props = {
  children: React.ReactNode;
  className?: string;
};

const Card = (props: Props) => {
  return (
    <div
      className={
        'relative p-7 border-white/20 ' +
        (props.className ? props.className : '')
      }
    >
      {props.children}
    </div>
  );
};

export default Card;
