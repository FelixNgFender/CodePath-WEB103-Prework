import styles from "./Card.module.css";

type CardProps = {
  name: string;
  url: string;
  description: string;
  imageURL?: string;
};

export const Card = ({ name, url, description, imageURL }: CardProps) => {
  return (
    <article className={styles.card}>
      <img className={styles.card__image} src={imageURL} alt={name} />
      <div>
        <h6>{name}</h6>
        <small>
          {description}
          <br />
          <a href={url} target="_blank" rel="noreferrer noopener">
            Read more
          </a>
        </small>
      </div>
    </article>
  );
};
