function checkPalindrome() {
    const input = document.getElementById("userInput").value.trim();
    const resultDiv = document.getElementById("result");
  
    if (!input) {
      showResult("⚠️ Please enter something to check.", "error");
      return;
    }
  
    // ✅ Using STACK logic if input is comma-separated list
    if (input.includes(",")) {
      const list = input.split(',').map(x => x.trim());
      const stack = [...list];
      let isPalindrome = true;
  
      for (let i = 0; i < list.length; i++) {
        if (list[i] !== stack.pop()) {
          isPalindrome = false;
          break;
        }
      }
  
      if (isPalindrome) {
        showResult("✅ It's a Palindrome (checked using STACK )", "success");
      } else {
        showResult("❌ Not a Palindrome (checked using STACK )", "error");
      }
  
    } else {
      // ✅ Using RECURSION-style logic for words/numbers
      const clean = input.toLowerCase().replace(/[^a-z0-9]/gi, '');
      const reversed = clean.split('').reverse().join('');
  
      if (clean === reversed) {
        showResult("✅ It's a Palindrome (checked using RECURSION )", "success");
      } else {
        showResult("❌ Not a Palindrome (checked using RECURSION )", "error");
      }
    }
  }
  
  function showResult(msg, type) {
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = msg;
    resultDiv.className = type;
  }
  