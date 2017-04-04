import {readFileSync, writeFileSync} from "fs";
import {sortObject} from "./sortObject";

const objDeps = ["dependencies", "devDependencies", "peerDependencies", "optionalDependencies"];
const arrDeps = ["bundledDependencies", "bundleDependencies"];

export function formatPackage(filename: string) {
	let pkg = JSON.parse(readFileSync(filename, {encoding: "utf-8"}));

	objDeps.forEach((key) => {
		if (pkg[key]) {
			pkg[key] = sortObject(pkg[key]);
		}
	});
	arrDeps.forEach((key) => {
		if (pkg[key]) {
			pkg[key] = pkg[key].sort((a, b) => {
				return a.toLowerCase().localeCompare(b.toLowerCase());
			});
		}
	});

	writeFileSync(filename, JSON.stringify(pkg, null, "  ") + "\n");
}
