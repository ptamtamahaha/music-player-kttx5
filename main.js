function calculateAge() {
    var yearOfBirth = document.getElementById("yearOfBirth").value;
  
      if (yearOfBirth === "" || isNaN(yearOfBirth)) {
          document.getElementById("result").textContent = "Vui lòng nhập năm sinh hợp lệ.";
          return; 
      }
  
      yearOfBirth = parseInt(yearOfBirth); 
    
    var today = new Date();
    var currentYear = today.getFullYear();
  
    var age = currentYear - yearOfBirth;
  
      
      if (yearOfBirth > currentYear) {
          document.getElementById("result").textContent = "Năm sinh không hợp lệ. Vui lòng nhập lại.";
          return;
      }
  
   
    document.getElementById("result").textContent = "Bạn " + age + " tuổi.";
  }