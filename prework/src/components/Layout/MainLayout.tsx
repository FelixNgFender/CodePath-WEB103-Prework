import { Link } from "react-router-dom";
import styles from "./MainLayout.module.css";

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <main className={"container " + styles.main}>
      <h1>Creatorverse</h1>

      <div className="container-fluid">
        <section className="grid">
          <Link to="/" reloadDocument>
            <button>View All Creators</button>
          </Link>
          <Link to="/new">
            <button>Add Creator</button>
          </Link>
        </section>
      </div>
      {children}
    </main>
  );
};
