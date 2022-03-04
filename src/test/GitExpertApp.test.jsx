import { shallow } from "enzyme";
import { describe, expect, test } from "vitest";
import { GifExpertApp } from "../GitExpertApp";

describe("Pruebas en el componente <GitExpertApp />", () => {
  test("debe de hacer match con el snapshot", () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar una lista de categorias", () => {
    const categories = ["One Punch", "Dragon Ball"];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
