const groupArrayElements = require("./index");

describe("groupArrayElements", ()=> {
  it("Should split elements into 4 equally sized arrays", ()=> {
    const myArray = [1,2,3,4,5,6,7,8];
    const groupedInto = 4;
    const result = groupArrayElements(myArray, groupedInto);

    expect(result.length).toBe(groupedInto);
    expect(result[0]).toEqual([1,2]);
    expect(result[1]).toEqual([3,4]);
    expect(result[2]).toEqual([5,6]);
  });
  it("Should handle remainder when groups are not equally divisable", ()=> {
    const myArray = [1,2,3,4,5];
    const groupedInto = 3;
    const result = groupArrayElements(myArray, groupedInto);

    expect(result.length).toBe(groupedInto);
    expect(result[0].length).toEqual(result[1].length);
    expect(result[1].length).not.toEqual(result[2].length);
  });
  it("Should split empty array", ()=> {
    const myArray = [];
    const groupedInto = 2;
    const result = groupArrayElements(myArray, groupedInto);

    expect(result.length).toBe(groupedInto);
    expect(result[0]).toEqual([]);
    expect(result[1]).toEqual([]);
  });
  it("Should handle negative integers", ()=> {
    const myArray = [1,2,3];
    const groupedInto = -2;
    const result = groupArrayElements(myArray, groupedInto);

    expect(result).toEqual([]);
  });
})