import { v4 as uuid } from "uuid";
import { LOCALSTORAGE_LINK_KEY } from "../constants";

export const getLinks = () => {
  return JSON.parse(localStorage.getItem(LOCALSTORAGE_LINK_KEY)) || [];
};

export const deleteLink = (linkId) => {
  let links = getLinks();
  const linkToDelete = links.find((link) => link.id === linkId);
  links = links.filter((link) => link.id !== linkToDelete.id);
  setLinks(links);
  return linkToDelete;
};

export const upVoteLink = (linkToUpvote) => {
  const links = getLinks();
  const upVotedLink = links.find((link) => link.id === linkToUpvote.id);
  upVotedLink.points++;
  upVotedLink.updatedAt = new Date().getTime();
  setLinks(links);
  return upVotedLink;
};

export const downVoteLink = (linkToDownVote) => {
  const links = getLinks();
  const downVotedLink = links.find((link) => link.id === linkToDownVote.id);
  downVotedLink.points--;
  downVotedLink.updatedAt = new Date().getTime();
  setLinks(links);
  return downVotedLink;
};

export const totalLinkCount = () => {
  const links = getLinks();
  return links.length;
};

export const addLink = (link) => {
  const newLink = {
    id: uuid(),
    name: link.name,
    url: link.url,
    points: 0,
    updatedAt: null,
  };
  const links = getLinks();
  links.push(newLink);
  setLinks(links);
  return newLink;
};

const setLinks = (links) => {
  const stringifiedLinks = JSON.stringify(links);
  localStorage.setItem(LOCALSTORAGE_LINK_KEY, stringifiedLinks);
};
