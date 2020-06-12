import { SORTING_ORDER } from "../constants";

export const sortLinks = (links, order) => {
  const sortedLinks = links.sort((a, b) => {
    if (order === SORTING_ORDER.DESC) {
      return b.points - a.points || b.updatedAt - a.updatedAt;
    }
    return a.points - b.points || b.updatedAt - a.updatedAt;
  });
  return sortedLinks;
};

export const paginateLinks = (links, pageNumber, pageCount) => {
  const pageIndex = pageNumber - 1;
  const paginatedLinks = links.slice(
    pageIndex * pageCount,
    pageIndex * pageCount + pageCount
  );
  return paginatedLinks;
};
