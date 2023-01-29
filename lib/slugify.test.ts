import slugify from "../lib/slugify";

describe("slugify", () => {
  it("should return a valid slug", () => {
    expect(slugify("how to create a slug")).toEqual("how-to-create-a-slug");
    expect(slugify("how-to-create-a-slug")).toEqual("how-to-create-a-slug");
  });

  it("should return a valid slug for special characters used in the string", () => {
    expect(slugify("dev.to")).toEqual("dev-to");
    expect(slugify("convert $5 to something")).toEqual(
      "convert-5-to-something"
    );
    expect(slugify("2022: Year in Review")).toEqual("2022-year-in-review");
  });
});
