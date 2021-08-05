import "./styles.css";

interface Props {
  title: string;
  description: string;
}

function Note({ title, description }: Props) {
  return (
    <div className="note">
      <h2>{title}</h2>
      <hr />
      <p>{description}</p>
    </div>
  );
}

export default Note;
