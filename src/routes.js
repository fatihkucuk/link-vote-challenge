import LinkListPage from "./pages/LinkListPage/LinkListPage";
import AddLinkPage from "./pages/AddLinkPage/AddLinkPage";

const routes = [
  {
    path: "/home",
    component: LinkListPage,
  },
  {
    path: "/add-link",
    component: AddLinkPage,
  },
];

export default routes;
