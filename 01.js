// 老師教的簡單表單驗證
function validateForm() {
    var name = document.forms[0].name.value;
    var email = document.forms[0].email.value;
    
    if (name == "" || email == "") {
        alert("請填寫姓名與 Email！");
        return false;
    }
    
    if (!email.includes("@")) {
        alert("請輸入正確的 Email 格式！");
        return false;
    }
    
    alert("訂單已送出！我會盡快與您聯繫，謝謝！");
    return true;
}
