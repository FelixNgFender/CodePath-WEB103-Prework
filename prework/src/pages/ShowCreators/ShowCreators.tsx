import { getCreators } from "./api/getCreators";
import { useState, useEffect, useCallback } from "react";
import { Card } from "@/components";
import styles from "./ShowCreators.module.css";
import { Creator } from "@/types";
import { MainLayout } from "@/components";

export const ShowCreators = () => {
  const [creators, setCreators] = useState<Creator[]>([]);

  const fetcher = useCallback(async () => {
    const creators = await getCreators();
    if (!creators) return console.log("No creators found");
    setCreators(creators);
  }, []);

  useEffect(() => {
    fetcher();
  }, [fetcher]);

  return (
    <MainLayout>
      {!creators || creators.length === 0 ? (
        <h6>No creators found</h6>
      ) : (
        <section className={styles.creatorsContainer}>
          {creators.map((creator) => (
            <Card key={creator.id} creator={creator} />
          ))}
        </section>
      )}
    </MainLayout>
  );
};
