function checkPalindrome() {
    
    const inputStr = document.getElementById("inputString").value.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '')
    const result = document.getElementById("result")

    function palindrome(str) {
        let newStr = str.split('').reverse().join('')
        return str === newStr
    }

    if (palindrome(inputStr)) {
        result.textContent = "It's a Palindrome"
    } else {
        result.textContent = "It's not a Palindrome"
    }
}