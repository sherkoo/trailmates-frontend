const SEO = ({ title }) => {
  if (title) {
    document.title = title + " - TrailMates";
  } else {
    document.title = "TrailMates";
  }
};

export default SEO;
