export const getRandomId = ():number =>
	Math.round(1 - 0.5 + Math.random() * (1000000 - 1 + 1));