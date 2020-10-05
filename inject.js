// this is the code which will be injected into a given page...

(function() {

	// just place a div at top right
	var div = document.createElement('div');
	div.setAttribute('id', 'injected');
	div.style.position = 'fixed';
	div.style.top = '60px';
	div.style.right = 0;
	div.style.zIndex = 1;
	div.innerHTML = "<input type='text' id='bamount' placeholder='Enter base amount...'><br><input type='text' id='key' style='margin-top: 5px;' placeholder='Enter key...'><br><button onclick='botControl(1)' id='startBot' style='margin-top: 5px; float: left; font-weight: bold;'>Bot Start</button><button onclick='botControl(2)' id='stopBot' style='margin-top: 5px; float: right; font-weight: bold;' disabled>Bot Stop</button><br>History:<br><textarea id='historyText' rows='6'></textarea>";
	document.body.appendChild(div);

	var botscript = document.createElement('script');
	botscript.innerHTML =   '   var bot;  '  + 
	'   function botControl(ctrl) {  '  + 
	'       if (ctrl == 1) {  '  + 
	'           document.getElementById("startBot").disabled = true;  '  + 
	'           document.getElementById("stopBot").disabled = false;  '  + 
	'           betAmount = parseInt(document.getElementById("bamount").value);  '  + 
	'           key = document.getElementById("key").value;  '  + 
	'           if ((isNaN(betAmount)) || (betAmount <= 0) || ((betAmount % 10) == 1) || ((betAmount % 10) == 3) || (betAmount > 100)) {   '  + 
	'               alert("Invalid bet amount!");   '  + 
	'           } else if(key == null) {  '  + 
	'               alert("Please insert key!");  '  + 
	'           }else {  '  + 
	'               bankerUrl = "https://softswiss.platipusgaming.com/onlinecasino/Games/baccaratvip.asmx/deal?bTie=0&bPlayer=0&requestType=json&key=" + key + "&bBanker=";  '  + 
	'               playerUrl = "https://softswiss.platipusgaming.com/onlinecasino/Games/baccaratvip.asmx/deal?bBanker=0&bTie=0&requestType=json&key=" + key + "&bPlayer=";  '  + 
	'               var betCount  = 0;  '  + 
	'               var result;  '  + 
	'               var countSeq = 2;  '  + 
	'               baseAmount = betAmount;  '  + 
	'               bot = setInterval(botTimer, 10000);  '  + 
	'               function botTimer(amount) {  '  + 
	'                   var xhttp = new XMLHttpRequest();  '  + 
	'                   if (betCount == 0) {  '  + 
	'                       xhttp.open("GET", bankerUrl+betAmount, true);  '  + 
	'                       xhttp.send();  '  + 
	'                       consoleFlag = 0;  '  + 
	'                       xhttp.onreadystatechange=(e)=> {  '  + 
	'                           try {  '  + 
	'                               result = JSON.parse(xhttp.responseText);  '  + 
	'                               if (consoleFlag == 0) {  '  + 
	'                                   var betResult;  '  + 
	'                                   if (parseInt(result.win) > 0) {  '  + 
	'                                       betResult = " WIN!";  '  + 
	'                                   } else if (parseInt(result.back) > 0) {  '  + 
	'                                       betResult = " TIE!";  '  + 
	'                                   } else {  '  + 
	'                                       betResult = " LOSE!";  '  + 
	'                                   }  '  + 
	'                                   document.getElementById("historyText").value = "BANKER " + "Bet:" + betAmount + " Win:" + result.win + " Back:" + result.back + betResult + " CountSeq:" + countSeq + " Balance:" + result.balance + "\\n" + "------------------------------" + "\\n" + document.getElementById("historyText").value;  '  + 
	'                                   consoleFlag = 1;  '  + 
	'                               }  '  + 
	'                           } catch (error) {  '  + 
	'                               console.log(error);  '  + 
	'                           }  '  + 
	'                       }  '  + 
	'                   } else if (betCount % 2 == 1) {  '  + 
	// '                       if ((parseInt(result.win) == 0) && (parseInt(result.back) == 0)) {  '  + 
	// '                           betAmount = 2 * betAmount;  '  + 
	// '                       }  '  + 
	// '                       if (betAmount > 100 ) {  '  + 
	// '                           betAmount = 100;  '  + 
	// '                       }  '  + 
	'                       if (betAmount == 100) {  '  + 
	'                           if ((parseInt(result.win) == 0) && (parseInt(result.back) == 0)) {  '  + 
	'                               countSeq++;  '  + 
	'                           }  '  + 
	'                           if (parseInt(result.win) > 0) {  '  + 
	'                               countSeq--;  '  + 
	'                           }  '  + 
	'                       }  '  + 
	'                       if (countSeq == 0) {  '  + 
	'                           betAmount = baseAmount;  '  + 
	'                           betCount = -1;  '  + 
	'                           countSeq = 2;  '  + 
	'                       }  '  + 
	'                       xhttp.open("GET", playerUrl+betAmount, true);  '  + 
	'                       xhttp.send();  '  + 
	'                       consoleFlag = 0;  '  + 
	'                       xhttp.onreadystatechange=(e)=> {  '  + 
	'                           try {  '  + 
	'                               result = JSON.parse(xhttp.responseText);  '  + 
	'                               if (consoleFlag == 0) {  '  + 
	'                                   var betResult;  '  + 
	'                                   if (parseInt(result.win) > 0) {  '  + 
	'                                       betResult = " WIN!";  '  + 
	'                                   } else if (parseInt(result.back) > 0) {  '  + 
	'                                       betResult = " TIE!";  '  + 
	'                                   } else {  '  + 
	'                                       betResult = " LOSE!";  '  + 
	'                                   }  '  + 
	'                                   document.getElementById("historyText").value = "PLAYER " + "Bet:" + betAmount + " Win:" + result.win + " Back:" + result.back + betResult + " CountSeq:" + countSeq + " Balance:" + result.balance + "\\n" + "------------------------------" + "\\n" + document.getElementById("historyText").value;  '  + 
	'                                   consoleFlag = 1;  '  + 
	'                               }  '  + 
	'                           } catch (error) {  '  + 
	'                               console.log(error);  '  + 
	'                           }  '  + 
	'                       }  '  + 
	'                   } else if ((betCount > 0) && (betCount % 2 == 0)) {  '  + 
	// '                       if ((parseInt(result.win) == 0) && (parseInt(result.back) == 0)) {  '  + 
	// '                           betAmount = 2 * betAmount;  '  + 
	// '                       }  '  + 
	// '                       if (betAmount > 100) {  '  + 
	// '                           betAmount = 100;  '  + 
	// '                       }  '  + 
	'                       if (betAmount == 100) {  '  + 
	'                           if ((parseInt(result.win) == 0) && (parseInt(result.back) == 0)) {  '  + 
	'                               countSeq++;  '  + 
	'                           }  '  + 
	'                           if (parseInt(result.win) > 0) {  '  + 
	'                               countSeq--;  '  + 
	'                           }  '  + 
	'                       }  '  + 
	'                       if (countSeq == 0) {  '  + 
	'                           betAmount = baseAmount;  '  + 
	'                           betCount = -1;  '  + 
	'                           countSeq = 2;  '  + 
	'                       }  '  + 
	'                       xhttp.open("GET", bankerUrl+betAmount, true);  '  + 
	'                       xhttp.send();  '  + 
	'                       consoleFlag = 0;  '  + 
	'                       xhttp.onreadystatechange=(e)=> {  '  + 
	'                           try {  '  + 
	'                               result = JSON.parse(xhttp.responseText);  '  + 
	'                               if (consoleFlag == 0) {  '  + 
	'                                   var betResult;  '  + 
	'                                   if (parseInt(result.win) > 0) {  '  + 
	'                                       betResult = " WIN!";  '  + 
	'                                   } else if (parseInt(result.back) > 0) {  '  + 
	'                                       betResult = " TIE!";  '  + 
	'                                   } else {  '  + 
	'                                       betResult = " LOSE!";  '  + 
	'                                   }  '  + 
	'                                   document.getElementById("historyText").value = "BANKER " + "Bet:" + betAmount + " Win:" + result.win + " Back:" + result.back + betResult + " CountSeq:" + countSeq + " Balance:" + result.balance + "\\n" + "------------------------------" + "\\n" + document.getElementById("historyText").value;  '  + 
	'                                   consoleFlag = 1;  '  + 
	'                               }  '  + 
	'                           } catch (error) {  '  + 
	'                               console.log(error);  '  + 
	'                           }  '  + 
	'                       }  '  + 
	'                   }  '  + 
	'                   betCount++;  '  + 
	'               }     '  + 
	'           }  '  + 
	'       } else if (ctrl == 2) {  '  + 
	'           document.getElementById("startBot").disabled = false;  '  + 
	'           document.getElementById("stopBot").disabled = true;  '  + 
	'           if (bot != undefined){  '  + 
	'               clearInterval(bot);  '  + 
	'           }  '  + 
	'       }  '  + 
	'  }  ' ;         

	document.body.appendChild(botscript);

})();
