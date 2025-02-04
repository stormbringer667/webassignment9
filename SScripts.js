console.log("Welcome to the Digital RC CLINIC Website!");

console.log("Our services include neurological rehabilitation, post-operative care, and more.");

// Perform a service cost calculation using arithmetic operators
let cost = 5000;
let count = 3;
let totalCost = cost * count;
console.log("Total cost for three sessions: " + totalCost + " Tenge");

let patientName = "Azamat Raissov";
document.getElementById("patientName").innerText = patientName;

var patientAGE = 69;

let remainingsSessions = 3;
remainingsSessions -= 1;
console.log("Remaining sessions: " + remainingsSessions);

const centerName = "MCS Rehabilitation Center";
document.getElementById("centerName").innerText = centerName;

let discount = 0.2; //20% discount
let discountedCost = totalCost - (totalCost * discount);
console.log("Discounted cost: " + discountedCost);

function changeBackground() {
    document.head.style.backgroundColor = "#000000";
} //dodelay potom

const patient = {
    firstName: "Azamat",
    lastName: "Raissov",
    age: 69,
    serviceName: "Neurological Rehabilitation"
};

document.getElementById("patientName").innerHTML = person.firstName + " is " + person.age + " years old.";

function bookAppointment() {
    alert("Appointment booked successfully!");
}
document.getElementById("bookBtn").addEventListener("click", bookAppointment);

let text = document.getElementById("low").innerHTML;
document.getElementById("low").innerHTML =
text.toUpperCase();

let searchText = "Please locate where 'Stories' occurs!";
let index = searchText.indexOf("Stories");
document.getElementById("stor").innerHTML = index; 

let consultationID = Math.floor(Math.random() * 100000);
console.log("Consultation ID: " + consultationID);

let services = ["Post-operative Rehabilitation", "Sports injury Recovery", "Pediatric Rehabilitation"];
for (let i = 0; i < services.length; i++) {
    console.log("Service: " + services[i]);
}