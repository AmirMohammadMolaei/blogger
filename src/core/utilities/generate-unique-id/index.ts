export default function GenerateId(length: number) {
  const words = "123456789aAbBcCdDeEfFgGhHiIkKlLmMpP";
  let generatedId: string = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * words.length)
    generatedId += words[randomIndex]
  }

  return generatedId;
}
