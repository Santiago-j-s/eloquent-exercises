import {
  range,
  sum,
  reverseArray,
  reverseArrayInPlace,
  arrayToList,
  listToArray,
  prepend,
  nth,
  deepEqual,
} from "./exercises.js";
import chai from "chai";

const expect = chai.expect;

describe("range", () => {
  it("range(1, 3) should return [1, 2, 3]", () => {
    expect(range(1, 3)).to.eql([1, 2, 3]);
  });

  it("range(1, 3, 1) should return [1, 2, 3]", () => {
    expect(range(1, 3, 1)).to.eql([1, 2, 3]);
  });

  it("range(1, 10, 2) should return [1, 3, 5, 7, 9]", () => {
    expect(range(1, 10, 2)).to.eql([1, 3, 5, 7, 9]);
  });

  it("range(5, 2) should return [5, 4, 3, 2]", () => {
    expect(range(5, 2)).to.eql([5, 4, 3, 2]);
  });

  it("range(5, 2, -1) should return [5, 4, 3, 2]", () => {
    expect(range(5, 2, -1)).to.eql([5, 4, 3, 2]);
  });

  it("range(10, 1, -2) should return [10, 8, 6, 4, 2]", () => {
    expect(range(1, 10, 2)).to.eql([1, 3, 5, 7, 9]);
  });

  it("range(-1, -1) should return [-1]", () => {
    expect(range(-1, -1)).to.eql([-1]);
  });
});

describe("sum", () => {
  it("sum([1, 2, 3, 4, 5]) should return 15", () => {
    expect(sum(range(1, 5, 1))).to.equal(15);
  });

  it("sum([5, 4, 3, 2, 1]) should return 15", () => {
    expect(sum(range(5, 1, -1))).to.equal(15);
  });

  it("sum([]) should return 0", () => {
    expect(sum([])).to.equal(0);
  });

  it("sum([-1]) should return -1", () => {
    expect(sum(range(-1, -1))).to.equal(-1);
  });
});

describe("reverseArray", () => {
  it("reverseArray([1, 2, 3, 4, 5]) should return [5, 4, 3, 2, 1]", () => {
    expect(reverseArray([1, 2, 3, 4, 5])).to.eql([5, 4, 3, 2, 1]);
  });

  it("reverseArray([1, 2, 3, 4, 5, 6]) should return [6, 5, 4, 3, 2, 1]", () => {
    expect(reverseArray([1, 2, 3, 4, 5, 6])).to.eql([6, 5, 4, 3, 2, 1]);
  });

  it("reverseArray([]) should return []", () => {
    expect(reverseArray([])).to.eql([]);
  });
});

describe("reverseArrayInPlace", () => {
  it("reverseArrayInPlace([1, 2, 3, 4, 5]) should return [5, 4, 3, 2, 1]", () => {
    const arr = [1, 2, 3, 4, 5];
    reverseArrayInPlace(arr);
    expect(arr).to.eql([5, 4, 3, 2, 1]);
  });

  it("reverseArrayInPlace([1, 2, 3, 4, 5, 6]) should return [6, 5, 4, 3, 2, 1]", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    reverseArrayInPlace(arr);
    expect(arr).to.eql([6, 5, 4, 3, 2, 1]);
  });

  it("reverseArrayInPlace([]) should return []", () => {
    const arr = [];
    reverseArrayInPlace(arr);
    expect(arr).to.eql([]);
  });
});

describe("lists", () => {
  context("arrayToList", () => {
    it("arrayToList([]) should return null", () => {
      expect(arrayToList([])).to.eql(null);
    });
    it("arrayToList([1]) should return {value: 1, rest: null}", () => {
      expect(arrayToList([1])).to.eql({ value: 1, rest: null });
    });
    it("arrayToList([1, 2]) should return {value: 1, rest: { value: 2, rest: null }}", () => {
      expect(arrayToList([1, 2])).to.eql({
        value: 1,
        rest: { value: 2, rest: null },
      });
    });
    it("arrayToList([1, 2, 3]) should return {value: 1, rest: { value: 2, rest: { value: 3, rest: null }}}", () => {
      expect(arrayToList([1, 2, 3])).to.eql({
        value: 1,
        rest: {
          value: 2,
          rest: {
            value: 3,
            rest: null,
          },
        },
      });
    });
  });

  context("listToArray", () => {
    it("listToArray(null) should return []", () => {
      expect(listToArray(null)).to.eql([]);
    });

    it("listToArray({value: 1, rest: null}) should return [1]", () => {
      expect(listToArray({ value: 1, rest: null })).to.eql([1]);
    });

    it("listToArray({value: 1, rest: { value: 2, rest: null }}) should return [1, 2]", () => {
      expect(
        listToArray({
          value: 1,
          rest: { value: 2, rest: null },
        })
      ).to.eql([1, 2]);
    });

    it("listToArray({value: 1, rest: { value: 2, rest: { value: 3, rest: null }}}) should return [1, 2, 3]", () => {
      expect(
        listToArray({
          value: 1,
          rest: { value: 2, rest: { value: 3, rest: null } },
        })
      ).to.eql([1, 2, 3]);
    });
  });

  context("prepend", () => {
    it("prepend(null, 1) should return {value: 1, rest: null}", () => {
      expect(prepend(null, 1)).to.eql({
        value: 1,
        rest: null,
      });
    });

    it("prepend({value: 1, rest: null}, 2) should return {value: 2, rest: { value: 1, rest: null }}", () => {
      expect(prepend({ value: 1, rest: null }, 2)).to.eql({
        value: 2,
        rest: { value: 1, rest: null },
      });
    });

    it("prepend({value: 1, rest: {value: 2, rest: null}}, 3) should return {value: 3, rest: { value: 1, rest: { value: 2, rest: null }}}", () => {
      expect(prepend({ value: 1, rest: { value: 2, rest: null } }, 3)).to.eql({
        value: 3,
        rest: { value: 1, rest: { value: 2, rest: null } },
      });
    });
  });

  context("nth", () => {
    it("nth(null, 0) should return undefined", () => {
      expect(nth(null, 0)).is.undefined;
    });

    it("nth({value: 1, rest: null}, 0) should return 1", () => {
      expect(nth({ value: 1, rest: null }, 0)).to.equal(1);
    });

    it("nth({value: 1, rest: null}, 1) should return undefined", () => {
      expect(nth({ value: 1, rest: null }, 1)).is.undefined;
    });

    it("nth({value: 1, rest: { value: 2, rest: null }}, 1) should return 2", () => {
      expect(nth({ value: 1, rest: { value: 2, rest: null } }, 1)).to.equal(2);
    });

    it("nth({value: 1, rest: { value: 2, rest: null }}, 0) should return 1", () => {
      expect(nth({ value: 1, rest: { value: 2, rest: null } }, 0)).to.equal(1);
    });
  });
});

describe("deepEqual", () => {
  it("deepEqual(0, 0) should return true", () => {
    expect(deepEqual(0, 0)).to.be.true;
  });

  it("deepEqual(0, '0') should return false", () => {
    expect(deepEqual(0, "0")).to.be.false;
  });

  it("deepEqual({}, null) should return false", () => {
    expect(deepEqual({}, null)).to.be.false;
  });

  it("deepEqual({a: 1}, {a: 1}) should return true", () => {
    expect(deepEqual({ a: 1 }, { a: 1 })).to.be.true;
  });

  it("deepEqual({a: 1}, {a: 2}) should return false", () => {
    expect(deepEqual({ a: 1 }, { a: 2 })).to.be.false;
  });

  it("deepEqual({a: 1, b: 2}, {a: 1}) should return false", () => {
    expect(deepEqual({ a: 1, b: 2 }, { a: 1 })).to.be.false;
  });

  it("deepEqual({a: 1, b: {a: 1}}, {a: 1, b: {a: 1}}) should return true", () => {
    expect(deepEqual({ a: 1, b: { a: 1 } }, { a: 1, b: { a: 1 } })).to.be.true;
  });

  it("deepEqual({a: 1, b: {a: 2}}, {a: 1, b: {a: 1}}) should return true", () => {
    expect(deepEqual({ a: 1, b: { a: 2 } }, { a: 1, b: { a: 1 } })).to.be.false;
  });

  it("deepEqual([1, 2, 3], [1, 2, 3]) should return true", () => {
    expect(deepEqual([1, 2, 3], [1, 2, 3])).to.be.true;
  });

  it("deepEqual([1, 2, 3, 4], [1, 2, 3]) should return false", () => {
    expect(deepEqual([1, 2, 3, 4], [1, 2, 3])).to.be.false;
  });
});
