export const add = (...args: number[]): number => {
  return args.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
};
