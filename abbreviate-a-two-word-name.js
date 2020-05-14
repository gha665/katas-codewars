let fullName = "Sam Harris";

function abbrevName(name) {
  return name
    .split(" ")
    .map((i) => i.slice(0, 1).toUpperCase())
    .join(".");
}
abbrevName(fullName);
