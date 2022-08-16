'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  //return [...num].reverse().map((e, i)=>{return e==='1'?2**i:0}).reduce((t, v)=> t+v)

  return parseInt(num, 2)
}

function DecimalABinario(num) {
      // tu codigo aca

	// let a = [num];
	// do {
	// if (a[a.length-1]%2===0) {
	// a[a.length-1] /= 2;
	// a = ['0' ,...a];
	// } else {
	// a[a.length-1] /= 2;
	// a[a.length-1] = Math.floor(a[a.length-1])
	// a = ['1' ,...a];
	// }
	// } while (a[a.length-1] >= 1)
	// return a.splice(0,a.length-1).join('')

  return num.toString(2)
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}