var counterlosep = []

var counterlosec = []

var counterwinp = []

var counterwinc = []

var counter = []

var i = 1

do {

totalcomp = 0

usertotal = 0

alert("The goal is to get the closest to twenty without having a score that is twenty-one or higher, you will also be playing against a computer who will also try to get the closest to 20 without exceeding the limit.")

alert("First the computer will go.")

  do{
    var computer = Math.floor(Math.random() * 10)
  
    var totalcomp = (computer+totalcomp);
      
    alert(`The current number is ${computer}
    The total number is ${totalcomp}`)
  } while (totalcomp <= 16);
  
  alert(`The computers final score is ${totalcomp}`)
  
  alert("Now it's your turn.")
  
  do{
    var user = Math.floor(Math.random() * 10)
  
    var usertotal = (user+usertotal);
      
    alert(`The current number is ${user}
    The total number is ${usertotal}`)
  
    if (usertotal <= 20) {
    var question = prompt("If you would like to enter another number press 'y', if you would like to stop press 'n'.")
    }
      
  } while ((question == "y") && (usertotal <= 19))  
  
  if ((totalcomp > 20) && (usertotal > 20)) {
    alert("Looks like both you and the computer have lost.")
    counterlosep.push(i)
    counterlosec.push(i)
  }
  else if (totalcomp > 20) {
    alert(`Congratualtions, you have won with a score of ${usertotal}`)
    counterwinp.push(i)
    counterlosec.push(i)
  }
  else if (usertotal > 20) {
    alert(`Sorry you lost, the computer won with a score of ${totalcomp}`)
    counterwinc.push(i) 
    counterlosep.push(i)
  }
  else if ((usertotal <= 20) && (totalcomp <= 20)) {
    if (usertotal > totalcomp){
      alert(`Congratualtions, you have won with a score of ${usertotal}`)
      counterwinp.push(i)
      counterlosec.push(i)
    }
    else if (usertotal < totalcomp) {
      alert(`Sorry you lost, the computer won with a score of ${totalcomp}`)
      counterwinc.push(i)
      counterlosep.push(i)
    }
    else if (usertotoal = totalcomp) {
      alert(`You have both tied with a score of ${usertotal}`)
    }
  }

  counter.push(i)
  
  var end = prompt(`If you wish to play again press 'y', if you wish to leave press anything else.`)

} while (end == "y")

alert(`You played ${counter.length} time(s), lost ${counterlosep.length} time(s) while the computer lost ${counterlosec.length} time(s). You won ${counterwinp.length} time(s) and the computer won ${counterwinc.length} time(s).`)

// Twenty Game :)