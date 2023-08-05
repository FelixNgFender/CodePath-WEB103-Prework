import styles from "./Card.module.css";
import { Creator } from "@/types/collection";

export const Card = ({ creator }: { creator: Creator }) => {
  const { name, url, description, imageURL } = creator;
  return (
    <article className={styles.card}>
      <img
        className={styles.card__image}
        src={imageURL ?? undefined}
        alt={name}
      />
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
