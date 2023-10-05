function birthDateMask(value: string) {
  if (!value) return "";

  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{2})(\d)/, "$1/$2");
  value = value.replace(/(\d{2})(\d)/, "$1/$2");

  return value;
}

export const handleBirthDate = (event: React.FormEvent<HTMLInputElement>) => {
  const character = event.currentTarget;

  character.value = birthDateMask(character.value);
};
