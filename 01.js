// 老師教的簡單表單驗證
function validateForm() {
    var form = document.forms[0];
    var name = form.name.value;
    var email = form.email.value;

    if (name == "" || email == "") {
        alert("請先填寫姓名與 Email");
        return false;
    }

    // 檢查有沒有至少勾一個商品
    var items = form.products;  // 這裡對應 name="products"
    var checked = false;
    for (var i = 0; i < items.length; i++) {
        if (items[i].checked) {
            checked = true;
            break;
        }
    }
    if (!checked) {
        alert("請至少勾選一項想購買的商品");
        return false;
    }

    alert("訂單已送出！感謝您的填寫～");
    return true;
}
