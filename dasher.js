var ans =     "Design-by-Nature"


function update_igregia() {    		    	
    		var arr = igreiga.split("");
    		if(arr[index]=='-') {index+=1;}
    		arr[index] = document.getElementById("input_char").value[0];
    		igreiga = "";
    		for(i=0; i<ans.length;i++) {
    			igreiga += arr[i];
    		}    		
    		document.getElementById("demo").innerHTML = igreiga;
    		document.getElementById("input_char").value="";
    		index=index+1;
    		if(index>=ans.length) {
    			alert("You guessed: "+igreiga);
    			index=1;
    			igreiga = template;
    			document.getElementById("demo").innerHTML = igreiga;
    		}
}

function check_input() {
    		if (document.getElementById("input_char").value == '' || document.getElementById("input_char").value == '0') {
    			return false;
    		} else {
    			return true;
    		}
}