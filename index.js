function produceDrivingRange(range) { 
  return function(startB, endB) { 
    let actualStartB = parseInt(startB);
    let actualEndB = parseInt(endB);
    let actualRange = Math.abs(actualStartB - actualEndB);
    let diff = Math.abs(range - actualRange); 
    
    
    if (range > actualRange) { 
    return `${diff} blocks out of range`; 
  } else { 
    return `within range by ${diff}`;
  }
  }
} 