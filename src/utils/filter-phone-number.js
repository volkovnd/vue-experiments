export default function(input, prefix = "+7") {
  return prefix + input.replace(/[\D]/gi, "").replace(/^(\+7|8)/, "");
}
