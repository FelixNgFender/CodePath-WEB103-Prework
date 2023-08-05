type CardProps = {
  name: string;
  url: string;
  description: string;
  imageURL?: string;
};

export const Card = ({ name, url, description, imageURL }: CardProps) => {
  return (
    <div className="card">
      {name + " " + url + " " + description + " " + imageURL}
    </div>
  );
};
