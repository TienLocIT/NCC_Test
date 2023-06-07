const  deepClone = (obj) => {
  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item));
  } else if (typeof obj === "object" && obj !== null) {
    let clonedObj = {};
    for (let key in obj) {
      clonedObj[key] = deepClone(obj[key]);
    }
    return clonedObj;
  } else {
    return obj;
  }
}
