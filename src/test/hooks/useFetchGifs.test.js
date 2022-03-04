import { renderHook } from "@testing-library/react-hooks";
import { describe, expect, test } from "vitest";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe("Pruebas en el hook useFetchGifs", () => {
  test("debe de retornar el estado inicial", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("Goku")
    );
    const { data, loaging } = result.current;

    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loaging).toBeTruthy();
  });

  test("debe de retornar un arreglo de imagenes y el loading en false", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("One Punch")
    );
    await waitForNextUpdate();

    const { data, loaging } = result.current;

    expect(data.length).toBe(10);
    expect(loaging).toBeFalsy();
  });
});
