import { giphyGifsApi } from "../api/giphyApi";

export const getGifs = async (category) => {
  try {
    const resp = await giphyGifsApi.get(
      `/search?q=${encodeURI(category)}&limit=10`
    );
    const { data } = resp.data;

    const gits = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
      };
    });

    return gits;
  } catch (error) {
    throw new Error(`${erro}`);
  }
};
