import { merge } from "../src/merge";

describe("merge", () => {
    test("should merge 3 sorted arrays correctly", () => {
        const c1 = [1, 3, 5]
        const c2 = [6, 4, 2]
        const c3 = [0, 7, 8]

        const result = merge(c1, c2, c3)

        expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8])
    });

    test("should handle empty arrays", () => {
        expect(merge([], [], [])).toEqual([])
        expect(merge([1, 2], [], [])).toEqual([1, 2])
        expect(merge([], [3, 2, 1], [])).toEqual([1, 2, 3])
        expect(merge([], [], [4, 5])).toEqual([4, 5])
    });

    test("should handle duplicated numbers", () => {
        const c1 = [1, 2, 3]
        const c2 = [3, 2, 1]
        const c3 = [2, 3, 4]

        const result = merge(c1, c2, c3)

        expect(result).toEqual([1, 1, 2, 2, 2, 3, 3, 3, 4])
    })
})
