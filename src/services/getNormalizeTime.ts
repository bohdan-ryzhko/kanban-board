export const getNormalizeTime = (time: string): string =>
	new Date(time).toLocaleDateString();