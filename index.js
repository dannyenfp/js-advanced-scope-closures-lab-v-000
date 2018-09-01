function produceDrivingRange(range) { 
  return function(startB, endB) { 
    let actualStartB = parseInt(startB);
    let actualEndB = parseInt(endB);
    let actualRange = Math.abs(actualStartB - actualEndB);
    let diff = Math.abs(range - actualRange); 
    
    
    if (range > actualRange) { 
    return `within range by ${diff}`; 
  } else { 
    return `${diff} blocks out of range`;
  }
  }
} 

function TipCalculator(percent) { 
  return function(fare) { 
    return fare*percent; 
  } 
} 

 