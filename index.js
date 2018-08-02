/*conversion of celcius to fahrenheit*/
function tempCon()
{
   
var temperatureInCelcius=40;
var celsiusToFahrenheit;

/* celcius to fahrenheit =(celcius *9)/5 +32 */
celsiusToFahrenheit=(temperatureInCelcius*9)/5+32;

//console.log("Temparature of "+ temperatureInCelcius +" celcius, will be "+ celsiusToFahrenheit +" fahrenheit");
var  ctof=document.getElementById("span1"); // To access an HTML element, JavaScript use the document.getElementById(id) method.

//The innerHTML property defines the HTML content
ctof.innerHTML="Temparature of "+ temperatureInCelcius +" celcius, will be "+ celsiusToFahrenheit +" fahrenheit";

/*conversion of fahrenheit to celcius */
var tempretureInFahrenheit=104;
var fahrenheitToCelcius;

/*Fahrenheit to Celcius=((fahrenheit -32)*5)/9 */
fahrenheitToCelcius=((tempretureInFahrenheit -32)*5)/9;

//console.log("Temparature of "+ tempretureInFahrenheit +" fahrenheit, will be "+ fahrenheitToCelcius +" celcius");
var  ftoc=document.getElementById("span2");
ftoc.innerHTML="Temparature of "+ tempretureInFahrenheit +" fahrenheit, will be "+ fahrenheitToCelcius +" celcius";
}