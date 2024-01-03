export default function useState(defaultValue, render) {
  let value = defaultValue;
  function getValue() {
    return value;
  };
  function setValue(newValue) {
    value = newValue;
    render();
  }
  return [getValue, setValue];
}
