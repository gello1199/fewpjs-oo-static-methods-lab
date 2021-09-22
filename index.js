class Formatter {
  static capitalize(string) {
    return string.charAt( 0 ).toUpperCase() + string.slice( 1 )
  }

  static sanitize(string) {
    // debugger
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(string) {
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let wordArray = string.split(' ')

    let newArr = [this.capitalize(wordArray[0])]
  
    for(let i = 1; i < wordArray.length; i++) {
      if (exceptions.includes(wordArray[i])) {
        newArr.push(wordArray[i])
      } else {
        newArr.push(this.capitalize(wordArray[i]))
      }
    } 
    return newArr.join(" ")
  }

}