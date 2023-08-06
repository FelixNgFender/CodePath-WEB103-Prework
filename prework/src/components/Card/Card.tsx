import styles from "./Card.module.css";
import { Creator } from "@/types/collection";

export const Card = ({ creator }: { creator: Creator }) => {
  const { name, url, description, imageURL } = creator;
  return (
    <div
      className={styles.card}
      style={{ backgroundImage: `url(${imageURL})` }}
    >
      <article className={styles.card__body}>
        <h6>{name}</h6>
        <small>
          {description}
          <br />
          <a href={url} target="_blank" rel="noreferrer noopener">
            Read more
          </a>
        </small>
      </article>
    </div>
  );
};
