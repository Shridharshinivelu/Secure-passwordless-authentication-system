export const createChallenge =
() => {

  return Math.random()
    .toString(36)
    .substring(2);
};