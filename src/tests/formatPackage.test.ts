import "jest";
import {formatPackage} from "../formatPackage";

test("test sorting dependencies", () => {
	const input = {
		name: "test",
		dependencies: {
			g: "1.0.1",
			z: "1.2.1",
			a: "2.4.1"
		}
	};

	const expected = {
		name: "test",
		dependencies: {
			a: "2.4.1",
			g: "1.0.1",
			z: "1.2.1"
		}
	};

	const formatted = formatPackage(input);
	expect(expected).toEqual(formatted);
	expect(input).toEqual(formatted);
	expect(Object.keys(expected)).toEqual(Object.keys(formatted));
	expect(Object.keys(expected.dependencies)).toEqual(Object.keys(formatted.dependencies));
});

test("test sorting bundledDependencies", () => {
	const input = {
		name: "test",
		bundledDependencies: ["g", "z", "a"]
	};

	const expected = {
		name: "test",
		bundledDependencies: ["a", "g", "z"]
	};

	const formatted = formatPackage(input);
	expect(expected).toEqual(formatted);
	expect(input).toEqual(formatted);
	expect(Object.keys(expected)).toEqual(Object.keys(formatted));
	expect(expected.bundledDependencies).toEqual(formatted.bundledDependencies);
});
