import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loaging: true,
  });

  useEffect(() => {
    getGifs(category)
      .then((images) => {
        setState({
          data: images,
          loaging: false,
        });
      })
      .catch((err) => {
        console.error(err);
        setState({
          data: [],
          loaging: false,
        });
      });
  }, [category]);

  return state;
};
