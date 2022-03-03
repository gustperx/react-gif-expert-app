import PropTypes from "prop-types";
import { useFetchGifs } from "../hooks/useFetchGifs";

import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { data, loaging } = useFetchGifs(category);

  return (
    <>
      <h3 className="text-2xl text-cyan-700 font-medium mb-4 animate__animated animate__fadeInDown">
        {category}
      </h3>

      {loaging && (
        <p className="text-2xl text-red-500 my-2 text-center font-semibold animate__animated animate__fadeInLeft">
          Loading...
        </p>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {data.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>

      <hr className="my-8 font-semibold" />
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
