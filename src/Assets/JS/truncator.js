//Author : Valentine Elum
//For : Desyn Open Source
//Twitter : @VahlCode
//License : MIT License 

function truncate(string, startPos = 0, maxLength = 50) {

    if (string.length <= maxLength) {
        return string
      }
      return string.slice(startPos, maxLength) + '...'
}


export default truncate;