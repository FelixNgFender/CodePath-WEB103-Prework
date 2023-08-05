import { useRoutes, BrowserRouter } from "react-router-dom";
import "./App.css";
import { ShowCreators } from "./pages/ShowCreators";
import { AddCreator } from "./pages/AddCreator";
import { EditCreator } from "./pages/EditCreator";
import { ViewCreator } from "./pages/ViewCreator";

const AppRoutes = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <ShowCreators />,
    },
    {
      path: "/new",
      element: <AddCreator />,
    },
    {
      path: "/edit/:id",
      element: <EditCreator />,
    },
    {
      path: "/:id",
      element: <ViewCreator />,
    },
  ]);
  return element;
};

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
