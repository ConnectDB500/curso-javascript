// Enum

enum ButtonStyle {
  Green,
  Blue,
  Red,
  Gray
}

interface Button {
  label: string;
  emoji: string;
  style: ButtonStyle
}

const button: Button = {
  style: ButtonStyle.Gray,
  emoji: "😉",
  label: "Sorriso com Piscada"
}