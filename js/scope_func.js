/**
 * 
 */
/*function check()
{
	var myObject = {
    foo: "bar",
    	func: function() 
    	{
    		var self = this;
    		document.write("outer func:  this.foo = " + this.foo);
    		document.write("\n");
    		document.write("outer func:  self.foo = " + self.foo);
    		(function() {
        		document.write("inner func:  this.foo = " + this.foo);
        		document.write("\n");
        		document.write("inner func:  self.foo = " + self.foo);
        	}());
    	}
	};
	myObject.func();
}*/

//Global Variables
var arr=[];   
var adder=0;
var del_j=0;

function remove1()
{
	if((adder != 0) && (adder > del_j))
	{
		var h=document.getElementById("div_id");   //Local variable
		var del = document.getElementById(arr[del_j]);	
		h.removeChild(del);
		del_j++;
	}
	else
		alert("add entry!!!");
}

function add()
{
	var input = prompt("Enter Person name : "); //Local variable	
	var x = document.createElement("P");
	x.setAttribute('id',input);
	arr[adder]=input;
    var t = document.createTextNode(input);
    x.appendChild(t);
    document.getElementById("div_id").appendChild(x);
    adder++;
}