import PropTypes from "prop-types";

export const GifGridItem = ({ title, url }) => {
  return (
    <div className="animate__animated animate__bounceIn">
      <img className="rounded-lg object-cover h-40" src={url} alt={title} />
      <p className="text-center mt-4 text-sm font-sans font-medium text-cyan-600">
        {title}
      </p>
    </div>
  );
};

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
