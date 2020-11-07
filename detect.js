function detect() {
    const word = document.getElementById("palindrome").value;
    if (!word) {
        document.getElementById("result").innerHTML = `
        <h4>What?</h4>
        <p>Sorry...I didn't hear you. Try to fill in the box this time.</p>`
    } else if (word.length < 2){
        document.getElementById("result").innerHTML = `
        <h4>Uhh...</h4>
        <p>Can't have a palindrome with just one letter</p>`
    } else if (word == word.split('').reverse().join('')) {
        document.getElementById("result").innerHTML = `
        <h4>Yupp</h4>
        <p>Totally a palindrome. Nice.</p>`
    } else {
        document.getElementById("result").innerHTML = `
        <h4>Nope</h4>
        <p>Super not a palindrome.</p>`
    }
    const x = document.getElementById("result");
        x.style.display = "flex";
}