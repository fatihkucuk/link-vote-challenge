import LinkList from "./pages/ListPage/LinkList";
import AddLink from "./pages/AddLinkPage/AddLink";

const routes = [
  {
    path: "/home",
    component: LinkList,
  },
  {
    path: "/add-link",
    component: AddLink,
  },
];

export default routes;
