import {
  ShowCreators,
  AddCreator,
  EditCreator,
  ViewCreator,
  NotFound,
} from "@/pages";
import { useRoutes } from "react-router-dom";

export const AppRoutes = () => {
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
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return <>{element}</>;
};
