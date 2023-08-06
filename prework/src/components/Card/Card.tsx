import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { Creator } from "@/types";

export const placeholderImageURL =
  "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png";

export const Card = ({ creator }: { creator: Creator }) => {
  const { id, name, url, description, imageURL } = creator;
  return (
    <div
      className={styles.card}
      style={{
        backgroundImage: "url(" + (imageURL || placeholderImageURL) + ")",
      }}
    >
      <article className={styles.card__body}>
        <h6 className={styles.card__body__title}>
          {name}
          <div className={styles.card__body__iconButtons}>
            <Link to={"/edit/" + id}>
              <span className="material-icons-round">edit</span>
            </Link>
            <Link to={"/user/" + id}>
              <span className="material-icons-round">info</span>
            </Link>
          </div>
        </h6>
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
