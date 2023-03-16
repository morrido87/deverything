export const isNumber = (arg: any) => typeof arg === "number" && isFinite(arg);

export const isInt = (arg: number) => Number.isInteger(arg);

export const isEven = (arg: number) => isInt(arg) && !(arg % 2);

export const isOdd = (arg: number) => isInt(arg) && !!(arg % 2);

export const isPositive = (arg: number) => isInt(arg) && arg > 0;

export const isNegative = (arg: number) => isInt(arg) && arg < 0;
