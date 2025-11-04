function getCarValue(input) {
  if (!input || !input.model || !input.year) return { error: "there is an error" };
  const { model, year } = input;

  if (typeof year !== "number" || year < 0) return { error: "there is an error" };

  const cleanedModel = model.replace(/[^a-zA-Z]/g, "").toUpperCase();
  if (!cleanedModel) return { error: "there is an error" };

  let sum = 0;
  for (let char of cleanedModel) {
    sum += char.charCodeAt(0) - 64; // 'A' = 65
  }

  return { car_value: sum * 100 + year };
}

module.exports = getCarValue;
