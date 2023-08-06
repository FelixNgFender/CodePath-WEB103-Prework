import { MainLayout } from "@/components";
import { useParams } from "react-router-dom";
import { getCreator } from "./api/getCreator";
import { Creator } from "@/types";
import { useState, useCallback, useEffect } from "react";
import styles from "./ViewCreator.module.css";

export const ViewCreator = () => {
  const { id } = useParams<{ id: string }>() as { id: string };
  const [creator, setCreator] = useState<Creator | null>(null);

  const fetcher = useCallback(async () => {
    const creator = await getCreator(id);
    if (!creator) return console.log("No creator found with that ID");
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
            src={creator.imageURL as string}
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
        </section>
      )}
    </MainLayout>
  );
};
