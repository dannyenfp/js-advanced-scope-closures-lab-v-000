function produceDrivingRange(range) { 
  return function(startB, endB) { 
    let actualStartB = parseInt(startB);
    let actualRange = Math.abs(startB - endB);
    let diff = Math.abs(range - actualRange); 
    return actualStartB;
    
    if (range > actualRange) { 
    return actualRange; 
  } else { 
    return diff;
  }
  }
} 