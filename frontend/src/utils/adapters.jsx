export const phoneOptionsAdapter = (origins) => {
  const newValue = origins.map((origin) => {
    return { label: origin.prefix, value: origin };
  });
  return newValue;
};
