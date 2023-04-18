export const sumValuesInObject = (obj) => {
  const arrayOfObjects = Object.values(obj);
  const isUsable = arrayOfObjects.length > 0;
  if (!isUsable) return 0;
  const valuesArr = arrayOfObjects.map((obj) => obj.value);

  return valuesArr.reduce((a, b) => a + b, 0);
};
