import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { MainLayout } from "@/components";
import { Creator } from "@/types";

import styles from "./AddCreator.module.css";
import { addCreator } from "./api/addCreator";

export const AddCreator = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    name: "",
    imageURL: "",
    description: "",
    url: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const creator: Creator = {
      name: formState.name,
      imageURL: formState.imageURL || null,
      description: formState.description,
      url: formState.url,
    } as Creator;

    addCreator(creator);

    form.reset();
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

        <button type="submit">Submit</button>
      </form>
    </MainLayout>
  );
};
