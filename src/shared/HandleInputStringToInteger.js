export function handleCheckToInteger(name) {
  if (
    name == "top" ||
    name == "left" ||
    name == "right" ||
    name == "bottom" ||
    name == "width" ||
    name == "height" ||
    name == "fontSize" ||
    name == "border" ||
    name == "rounded" ||
    name == "groupColor"
  )
    return true;
  else return false;
}

export function handleConvertToInteger(data) {
  let temp = data;
  for (var key in temp) {
    if (temp.hasOwnProperty(key)) {
      if (handleCheckToInteger(key)) temp[key] = parseInt(temp[key]);
    }
  }

  return temp;
}
