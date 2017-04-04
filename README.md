# pkgfmt
Format your package.json file

## Install
```
npm install -g pkgfmt
```

## Usage
```
cd node_project_path
pkgfmt
```
or
```
pkgfmt path/to/package.json
```

Example result
Input
```
{
  "name": "pkgfmt",
  "version": "0.0.3",
  "description": "Format your package.json file",
  "author": "Daniel Król <daniel@krol.me>",
  "dependencies": {
    "yargs": "^7.0.2",
    "es6-shim": "^0.35.3"
  },
  "devDependencies": {
    "jest": "^19.0.2",
    "ts-jest": "^19.0.7",
    "tslint": "^5.0.0",
    "@types/es6-shim": "^0.31.32",
    "@types/jest": "^19.2.2",
    "@types/node": "^7.0.12",
    "@types/yargs": "^6.6.0",
    "typescript": "^2.2.2"
  }
}
```
Output
```
{
  "name": "pkgfmt",
  "version": "0.0.3",
  "description": "Format your package.json file",
  "author": "Daniel Król <daniel@krol.me>",
  "dependencies": {
    "es6-shim": "^0.35.3",
    "yargs": "^7.0.2"
  },
  "devDependencies": {
    "@types/es6-shim": "^0.31.32",
    "@types/jest": "^19.2.2",
    "@types/node": "^7.0.12",
    "@types/yargs": "^6.6.0",
    "jest": "^19.0.2",
    "ts-jest": "^19.0.7",
    "tslint": "^5.0.0",
    "typescript": "^2.2.2"
  }
}

```
