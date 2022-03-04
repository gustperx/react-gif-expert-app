import { shallow } from "enzyme";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { AddCategory } from "../../components/AddCategory";

describe("Pruebas en <AddCategory />", () => {
  const setCategories = vi.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test("debe de hacer match con el snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de cambiar la caja de texto", () => {
    const input = wrapper.find("input");
    const value = "Hola Mundo";
    input.simulate("change", { target: { value } });
  });

  test("NO debe de postear la informacion con submit", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test("debe de llamar el setCategories y limpiar la caja de texto", () => {
    // 1. simular inputChange
    const value = "Hola Mundo";
    wrapper.find("input").simulate("change", { target: { value } });

    // 2. Simular submit
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    // 3. setCategories se debe haber llamanado
    //expect(setCategories).toHaveBeenCalled();
    //expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

    // 4. el valor del input debe ser ''
    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
