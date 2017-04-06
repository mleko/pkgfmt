import {Logger} from "./Logger";
import {sortObject} from "./sortObject";

const objDeps = ["dependencies", "devDependencies", "peerDependencies", "optionalDependencies"];
const arrDeps = ["bundledDependencies", "bundleDependencies"];

export function formatPackage(pkg: {[id: string]: any}) {
	objDeps.forEach((key) => {
		if (pkg[key]) {
			Logger.notice("> Sorting " + key);
			pkg[key] = sortObject(pkg[key]);
			Logger.dbg(stringify(pkg));
		}
	});
	arrDeps.forEach((key) => {
		if (pkg[key]) {
			Logger.notice("> Sorting " + key);
			pkg[key] = pkg[key].sort((a, b) => {
				return a.toLowerCase().localeCompare(b.toLowerCase());
			});
			Logger.dbg(stringify(pkg));
		}
	});

	return pkg;
}

export function stringify(obj) {
	return JSON.stringify(obj, null, "  ");
}
