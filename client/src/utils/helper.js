export const SERVER_URL = process.env.REACT_APP_SERVER;

export const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export const categoriesEnum = {
  11: "Movies",
  15: "Video Games",
  20: "Mythology",
  31: "Anime & Manga",
};
