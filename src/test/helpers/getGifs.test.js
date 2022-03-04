import { describe, expect, test } from "vitest";
import { getGifs } from "../../helpers/getGifs";

describe("Pruebas con getGifs Fetch", () => {
  test("debe de traer 10 elementos", async () => {
    const gifs = await getGifs("One Punch");
    expect(gifs.length).toBe(10);
  });

  test("debe de regresar un array vacio", async () => {
    const gifs = await getGifs("");
    expect(gifs).toEqual([]);
  });
});
