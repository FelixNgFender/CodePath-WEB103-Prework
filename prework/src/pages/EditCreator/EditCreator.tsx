import { MainLayout } from "@/components";
import styles from "./EditCreator.module.css";
import { editCreator } from "./api/editCreator";
import { Creator } from "@/types";
import { getCreator } from "@/pages/ViewCreator";
import { useNavigate, useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

export const EditCreator = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>() as { id: string };
  const [, setCreator] = useState<Creator | null>(null); // Empty slot for creator state, not typo
  const [formState, setFormState] = useState({
    name: "",
    imageURL: "",
    description: "",
    url: "",
  });

  const fetcher = useCallback(async () => {
    const creator = await getCreator(id);
    if (!creator) return navigate("/404");
    setCreator(creator);
    setFormState({
      name: creator.name,
      imageURL: creator.imageURL || "",
      description: creator.description,
      url: creator.url,
    });
  }, [id, navigate]);

  useEffect(() => {
    fetcher();
  }, [fetcher]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const creator: Creator = {
      id: parseInt(id),
      created_at: new Date().toISOString(),
      name: formState.name,
      imageURL: formState.imageURL || null,
      description: formState.description,
      url: formState.url,
    };

    editCreator(creator);

    navigate("/");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <MainLayout>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className={styles.required}>
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formState.name}
          onChange={handleChange}
        />

        <label htmlFor="imageURL">Image</label>
        <em className={styles.input__details}>
          Provide a link to an image of your creator. Be sure to include the
          https://
        </em>
        <input
          type="text"
          id="imageURL"
          name="imageURL"
          value={formState.imageURL}
          onChange={handleChange}
        />

        <label htmlFor="description" className={styles.required}>
          Description
        </label>
        <em className={styles.input__details}>
          Provide a description of the creator. Who are they? What makes them
          interesting?
        </em>
        <input
          type="text"
          id="description"
          name="description"
          required
          value={formState.description}
          onChange={handleChange}
        />

        <label htmlFor="url" className={styles.required}>
          Creator's website
        </label>
        <em className={styles.input__details}>
          Provide a link to the creator's website. Be sure to include the
          https://
        </em>
        <input
          type="text"
          id="url"
          name="url"
          required
          value={formState.url}
          onChange={handleChange}
        />

        <button type="submit">Edit</button>
      </form>
    </MainLayout>
  );
};
