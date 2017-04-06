#!/usr/bin/env node
import {readFileSync, writeFileSync} from "fs";
import * as yargs from "yargs";
import {formatPackage, stringify} from "./formatPackage";
import {Logger} from "./Logger";

const argv = yargs
	.usage("Usage: $0 [-vvvq]")
	.count("verbose")
	.alias("v", "verbose")
	.default("verbose", 1)
	.describe("v", "Verbosity: 1-normal, 2-verbose, 3-debug")
	.boolean("quiet")
	.alias("q", "quiet")
	.describe("quiet", "Do not output any message")
	.help("h")
	.alias("h", "help")
	.argv;

Logger.level = 3 - argv.verbose;
if (argv.quiet) {
	Logger.level = 9;
}

const pkgPath = argv._.length ? argv._[0] : process.cwd() + "/package.json";

Logger.info("> Format file: " + pkgPath);

Logger.dbg("> Reading file: " + pkgPath);
let pkg = JSON.parse(readFileSync(pkgPath, {encoding: "utf-8"}));

pkg = formatPackage(pkg);

Logger.dbg("> Writing to file: " + pkgPath);
writeFileSync(pkgPath, stringify(pkg) + "\n");

Logger.info("> Done");
