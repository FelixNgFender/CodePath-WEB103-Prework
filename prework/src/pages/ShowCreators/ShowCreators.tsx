import { Card } from "@/components";

const creators = [
  {
    id: 1,
    name: "Stan Lee",
    url: "https://en.wikipedia.org/wiki/Stan_Lee",
    description:
      "Stan Lee was an American comic book writer, editor, publisher, and producer. He rose through the ranks of a family-run business called Timely Comics which would later become Marvel Comics.",
    imageURL:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Stan_Lee_by_Gage_Skidmore_3.jpg/686px-Stan_Lee_by_Gage_Skidmore_3.jpg",
  },
  {
    id: 2,
    name: "Jack Kirby",
    url: "https://en.wikipedia.org/wiki/Jack_Kirby",
    description:
      "Jack Kirby was an American comic book artist, writer and editor, widely regarded as one of the medium's major innovators and one of its most prolific and influential creators.",
    imageURL:
      "ttps://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Jack-Kirby_art-of-jack-kirby_wyman-skaar.jpg/1280px-Jack-Kirby_art-of-jack-kirby_wyman-skaar.jpg",
  },
  {
    id: 3,
    name: "Steve Ditko",
    url: "https://en.wikipedia.org/wiki/Steve_Ditko",
    description:
      "Stephen John Ditko was an American comics artist and writer best known for being co-creator of Marvel superhero Spider-Man and creator of Doctor Strange.",
    imageURL: "ttps://upload.wikimedia.org/wikipedia/en/2/28/Steve_Ditko.jpg",
  },
  {
    id: 4,
    name: "Alan Moore",
    url: "https://en.wikipedia.org/wiki/Alan_Moore",
    description:
      "Alan Moore is an English writer known primarily for his work in comic books including Watchmen, V for Vendetta, The Ballad of Halo Jones, Swamp Thing, Batman: The Killing Joke and From Hell.",
    imageURL:
      "ttps://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Alan_Moore_%282%29.jpg/330px-Alan_Moore_%282%29.jpg",
  },
];

import styles from "./ShowCreators.module.css";

export const ShowCreators = () => {
  return (
    <main className={"container " + styles.main}>
      <h1>Creatorverse</h1>
      <div className="grid">
        {creators.map((creator) => (
          <Card key={creator.id} {...creator} />
        ))}
      </div>
    </main>
  );
};
