function yearsAgoFatherWasTwiceAsOld(fatherAge, sonAge) {
    let yearsAgo = 0;
    let fatherTwiceSonAge = sonAge * 2;
    
    while(fatherAge - yearsAgo !== fatherTwiceSonAge) {
    yearsAgo++;
    }
    
    return yearsAgo;
    }
   
