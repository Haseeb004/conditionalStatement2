 let tempInput = 20; // user Input
 //let humidity = 40 ;
 //let result =(tempInput < 35) ? "cold" : "hot";

 //console.log(`wether is ${(tempInput < 35) ? "cold" : "hot"} `);
 let hr = new Date().getHours();
 //let result = `good ${(hr < 16)? "morning" : "night"} , wether is ${(tempInput < 35) ? "cold" : "hot"} `
 let result = `good ${(hr < 12)? "morning" : (hr <16) ? "afternoon" : (hr <16) ? "afternoon" : "evening"} , wether is ${(tempInput < 35) ? "cold" : "hot"} `

 console.log("result : " ,result);


