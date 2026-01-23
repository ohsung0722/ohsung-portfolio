import type { RouteObject } from "react-router-dom";
import { Shell } from "../components/layout/Shell";
import { HomePage } from "../pages/HomePage";
export const routes: RouteObject[] = [
  {
    element: <Shell />,
    children: [
      { path: "/", element: <HomePage /> },
      // { path: "/personal", element: <PersonalPage /> },
      // { path: "/contact", element: <ContactPage /> },
    ],
  },
];
