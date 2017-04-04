import "jest";
import {sortObject} from "../sortObject";

test("sortObject test", () => {
	expect(Object.keys({z: 1, g: 2, a: 3})).not.toEqual(["a", "g", "z"]);
	expect(Object.keys(sortObject({z: 1, g: 2, a: 3}))).toEqual(["a", "g", "z"]);
});
