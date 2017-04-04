export function sortObject(obj) {
	const out = {};

	Object.keys(obj).sort((a, b) => {
		return a.toLowerCase().localeCompare(b.toLowerCase());
	}).forEach((key) => {
		out[key] = obj[key];
	});

	return out;
}
