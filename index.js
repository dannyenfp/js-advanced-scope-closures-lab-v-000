function produceDrivingRange(range) { 
  return function(startB, endB) { 
    let actualRange = Math.abs(startB - endB);
    let diff = Math.abs(range - actualRange); 
    return startB;
    
    if (range > actualRange) { 
    return actualRange; 
  } else { 
    return diff;
  }
  }
} 