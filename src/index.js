const a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen ']
const b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

const regex = /^(\d{1})(\d{2})$/

const newNum = (n) => a[Number(n)]
const newNumber = (n) => b[n[0]] + ' ' + a[n[1]]

module.exports = function toReadable (number) {
  const num = Number(number)
  if (num === 0) {
    return 'zero'
  } 

  const numStr = num.toString()

  const [, n1, n2] = ('000' + numStr).substr(-3).match(regex) 

  let str = ''

  str += n1 != 0 ? newNum(n1) + 'hundred ' : ''
  str += n2 != 0 ? (newNum(n2) || newNumber(n2)) : ''

  return str.trim() 
}

  
  