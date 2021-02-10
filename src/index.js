const endingNumber = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen ']
const dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

const regex = /^(\d{1})(\d{2})$/

const parseSingleNumber = (n) => endingNumber[Number(n)]
const parseDozenNumber = (n) => dozens[n[0]] + ' ' + endingNumber[n[1]]

module.exports = function toReadable (number) {
  if (number === 0) {
    return 'zero'
  }

  const [, n1, n2] = ('00' + number.toString()).slice(-3).match(regex) 

  let str = ''

  str += n1 !== '0' ? parseSingleNumber(n1) + 'hundred ' : ''
  str += n2 !== '0' ? (parseSingleNumber(n2) || parseDozenNumber(n2)) : ''

  return str.trim()
}

  
  