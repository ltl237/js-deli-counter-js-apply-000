function takeANumber(current_line,new_name) {
  current_line.push(new_name);
  
  var welcoming = `Welcome, ${new_name}. You are number ${current_line.length} in line.`
  return welcoming
}
var person_counter = 1;
var deli_array = [];
function takeAnotherNumber(deli_line) {
  
   
  deli_array.push(person_counter);
  var statement = `Welcome #${person_counter}`
  person_counter ++;
  
  return statement
  
}

function endOfDay(){
  person_counter = 1;
  return
}



//takeANumber(1,"Ada");

function nowServing(katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return "There is nobody waiting to be served!"
  }
  else {
    //for (let i = 0; i < katzDeliLine.length; i++) {
      return `Currently serving ${katzDeliLine.shift()}.`
    //}
  }
}

function currentLine(current_line) {
  if (current_line.length < 1) {
    return "The line is currently empty."
  }
  else {
    var line_array= [];
    for (var j = 0; j < current_line.length; j++) {
      line_array.push((j+1) + '. ' + current_line[j]);
    }
    return `The line is currently: ${line_array.join(', ')}`
    
    //for (var i = 0; i < current_line.length; i++) {
    //  return `The line is currently: ${i}. ${current_line[i]}`
    //}
  }
}
//the_line = ["Ada"];
//nowServing(the_line);
