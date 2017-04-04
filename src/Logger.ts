export class Logger {
	public static level = 2;

	public static log(level, msg) {
		if (Logger.level <= level) {
			// tslint:disable-next-line
			console.log(msg);
		}
	}

	public static err(msg) {
		Logger.log(9, msg);
	}

	public static info(msg) {
		Logger.log(2, msg);
	}

	public static notice(msg) {
		Logger.log(1, msg);
	}

	public static dbg(msg) {
		Logger.log(0, msg);
	}
}
