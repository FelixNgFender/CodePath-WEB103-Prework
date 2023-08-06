import { MainLayout } from "@/components";
import { Link, useParams } from "react-router-dom";
import { getCreator } from "./api/getCreator";
import { Creator } from "@/types";
import { useState, useCallback, useEffect } from "react";
import styles from "./ViewCreator.module.css";
import { placeholderImageURL } from "@/components";

export const ViewCreator = () => {
  const { id } = useParams<{ id: string }>() as { id: string };
  const [creator, setCreator] = useState<Creator | null>(null);

  const fetcher = useCallback(async () => {
    const creator = await getCreator(id);
    if (!creator) return;
    setCreator(creator);
  }, [id]);

  useEffect(() => {
    fetcher();
  }, [fetcher]);

  return (
    <MainLayout>
      {!creator ? (
        <h6>No creator found with that ID</h6>
      ) : (
        <section className={"container-fluid " + styles.creatorContainer}>
          <img
            className={styles.creatorImage}
            src={creator.imageURL || placeholderImageURL}
            alt={creator.name}
          />
          <article>
            <h6>{creator.name}</h6>
            <small>
              {creator.description}
              <br />
              <a href={creator.url} target="_blank" rel="noreferrer noopener">
                Read more
              </a>
            </small>
          </article>
          <div className="container-fluid">
            <section className="grid">
              <Link to={"/edit/" + id}>
                <button>Edit</button>
              </Link>
              <Link to={"/user/" + id}>
                <button className={styles.delete}>Delete</button>
              </Link>
            </section>
          </div>
        </section>
      )}
    </MainLayout>
  );
};
