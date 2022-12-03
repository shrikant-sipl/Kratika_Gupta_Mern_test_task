/**
* @method splitDescription
* @description splitDescription 
*/
export const splitDescription = (description) => {
  if (description && description.length > 100) {
    return description.substring(0, 100) + "..."
  } else {
    return description
  }
}

/**
* @method capitalisedFirst
* @description capitalisedFirst 
*/
export const capitalisedFirst = (string) => {
  if(string){
    const str2 = string.charAt(0).toUpperCase() + string.slice(1);
    return str2
  }else {
    return ''
  }
}



