export const listFormatter = (index, max) => {
  if (index === max - 1) {
    return "";
  } else if (index === max - 2) {
    return " and ";
  } else {
    return ", ";
  }
};
