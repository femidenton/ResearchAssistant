import "./styles.css";



const button = document.getElementById("button");
const input = document.getElementById("proth");
const display = document.getElementById("display");
const displayPrime = document.getElementById("displayPrime");


button.addEventListener("click", function () {
  display.innerHTML = ''
  displayPrime.innerHTML = ''
  const buttonValue = input.value;
  run(buttonValue);
});

function isPower(n) {
  return n && !(n & (n - 1));
}

function isProthNumber(n) {
  var k = 1;
  while (k < n / k) {
    if (n % k === 0) {
      if (isPower(n / k)) return true;
    }
    k = k + 2;
  }
  return false;
}

function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      displayPrime.innerHTML ='No its not prime'
      console.log("No its not prime");
      return false;
    }
  }
  displayPrime.innerHTML ='yes its prime'
  console.log("yes its prime");
  return true;
}

// const n = 7
function run(n) {
  if (isProthNumber(n - 1)) {
    display.innerHTML ='Yes is a proth number'
    console.log("Yes is a proth number");
    isPrime(n);
    
  } else {
    display.innerHTML='No, its not a proth number'
    console.log("No, its not a proth number");
  }
}
