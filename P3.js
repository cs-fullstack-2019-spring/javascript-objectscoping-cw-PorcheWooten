// //Create an array called peopleList objects using Object Literal notation.
//
//     Each 'person' object in the 'people' collection should have the following information:
//
//     First Name Last Name Age Zip Code
//
// Add the following 4 People to your list:
//
//     Jimmy Page, 62, 00821
//
// Rick Nielsen, 57, 61016
//
// Jimi Hendrix, 58, 90001
//
// Lemmy Kilmister, 57, 21120

var peopleList = [{Firstname:"Jimmy", Lastname:"Page", Age:"62", Zipcode:"00821"},{Firstname:"", Lastname:"", Age:"", Zipcode:""},
    {Firstname:"", Lastname:"", Age:"", Zipcode:""}, {Firstname:"", Lastname:"", Age:"", Zipcode:""}];
peopleList[1].Firstname= "Rick"; peopleList[1].Lastname= "Nielsen"; peopleList[1].Age= "57"; peopleList[1].Zipcode= "61016";
peopleList[2].Firstname= "Jimi"; peopleList[2].Lastname= "Hendrix"; peopleList[2].Age= "58"; peopleList[2].Zipcode= "90001";
peopleList[3].Firstname= "Lemmy"; peopleList[3].Lastname= "Kilmister"; peopleList[3].Age= "57"; peopleList[3].Zipcode= "21120";
    console.log(peopleList);

 peopleList[2].famousSong = "Purple Haze";

 peopleList[2].getBandandZip= function ()
 {
     alert("Led Zeppelin 90001");
     return (" Led Zeppelin 90001" + this.peopleList)

 };
peopleList.getBandandZip();





// Dynamically add the property famousSong to the object instance for Jimi Hendrix and assign it the value Purple Haze
// Dynamically add a function called getBandandZip() to the object instance for Jimmy Page that returns a concatenated
// string of Led Zeppelin HISZIPCODE (get zip code from the object instance).
// Call the function from your code and log the response.
//     Write a function that accepts a zip code parameter and prints out all the people in the array with a matching
//     zip code, or print the message No match found for zip code! if there is no match
//

