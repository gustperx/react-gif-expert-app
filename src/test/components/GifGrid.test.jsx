import { shallow } from "enzyme";
import { describe, expect, test, vi } from "vitest";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

vi.mock("../../hooks/useFetchGifs");

describe("Pruebas en el componenet <GifGrid />", () => {
  test("debe de hacer match con el snapshot", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loaging: true,
    });

    const wrapper = shallow(<GifGrid category="One Punch" />);
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar items cuando se cargan las imagenes useFetchGifs", () => {
    const gifs = [
      {
        id: "ABC",
        url: "https://localhost/cualquier/cosa.jpg",
        title: "cualquier cosa",
      },
    ];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loaging: false,
    });

    const wrapper = shallow(<GifGrid category="One Punch" />);

    // expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("p").exists()).toBeFalsy();
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
  });
});
