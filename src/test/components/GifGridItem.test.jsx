import React from "react";
import { shallow } from "enzyme";
import { beforeEach, describe, expect, test } from "vitest";
import { GifGridItem } from "../../components/GifGridItem";

describe("Prueba en el GifGridItem", () => {
  let wrapper;

  const image = {
    title: "Demo Imagen",
    url: "https://google.com",
  };

  beforeEach(() => {
    wrapper = shallow(<GifGridItem {...image} />);
  });

  test("debe de hacer match con el snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de tener un parrafo con el titulo", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(image.title);
  });

  test("debe de tener la imagen igual a la url y alt de los props", () => {
    const img = wrapper.find("img");

    //console.log(img.props());
    //console.log(img.prop("src"));

    expect(img.prop("src")).toBe(image.url);
    expect(img.prop("alt")).toBe(image.title);
  });

  test("debe de tener la clase animate__bounceIn", () => {
    const div = wrapper.find("div");

    //console.log(div.prop("className"));
    const className = div.prop("className");

    expect(className.includes("animate__bounceIn")).toBeTruthy();
  });
});
