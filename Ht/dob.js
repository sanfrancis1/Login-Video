
var minAge = 18;

var today = new Date()
//create a text field//
function myFunction() {
  var x = document.createElement("INPUT");
  x.setAttribute("type", "text");
  document.body.appendChild(x);
  var y = document.createElement("INPUT");
  y.setAttribute("type", "text");
  document.body.appendChild(y);
}

      //Calculates age from given Birth Date in the form//
       function _calcAge(birthDate, givenDate) 
	   {
        givenDate = new Date(today);
        var dt1 = document.getElementById('date').value;
        var birthDate = new Date(dt1);
        var years = (givenDate.getFullYear() - birthDate.getFullYear());

        if (givenDate.getMonth() < birthDate.getMonth() ||
     givenDate.getMonth() == birthDate.getMonth() && givenDate.getDate() < birthDate.getDate()) {
            years--;
        }

        return years;
    }

    //Compares calculated age with minimum age and acts according to rules//
    function _setAge() {
		
        var age = _calcAge();
        if (age < minAge) {
            alert("Enter Parent Name & Mobile Number");
			myFunction()
			}
    }

