#!/usr/bin/env node

import * as yargs from "yargs";
import {formatPackage} from "./formatPackage";

const argv = yargs.argv;

const pkgPath = argv._.length ? argv._[0] : process.cwd() + "/package.json";

formatPackage(pkgPath);
