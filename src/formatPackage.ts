import {readFileSync, writeFileSync} from "fs";
import {Logger} from "./Logger";
import {sortObject} from "./sortObject";

const objDeps = ["dependencies", "devDependencies", "peerDependencies", "optionalDependencies"];
const arrDeps = ["bundledDependencies", "bundleDependencies"];

export function formatPackage(filename: string) {
	Logger.dbg(" > Reading file: " + filename);
	let pkg = JSON.parse(readFileSync(filename, {encoding: "utf-8"}));

	objDeps.forEach((key) => {
		if (pkg[key]) {
			Logger.notice(" > Sorting " + key);
			pkg[key] = sortObject(pkg[key]);
			Logger.dbg(JSON.stringify(pkg[key], null, "  "));
		}
	});
	arrDeps.forEach((key) => {
		if (pkg[key]) {
			Logger.notice(" > Sorting " + key);
			pkg[key] = pkg[key].sort((a, b) => {
				return a.toLowerCase().localeCompare(b.toLowerCase());
			});
			Logger.dbg(JSON.stringify(pkg[key], null, "  "));
		}
	});

	Logger.dbg(" > Writing to file: " + filename);
	writeFileSync(filename, JSON.stringify(pkg, null, "  ") + "\n");
}
