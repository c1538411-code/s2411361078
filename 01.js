function validateForm() {
    var form = document.forms[0];

    var name = form.name.value;
    var email = form.email.value;

    // 1. 檢查姓名 & Email 是否空白
    if (name == "" || email == "") {
        alert("請填寫姓名與 Email！");
        return false;
    }

    // 2. 很簡單的 Email 格式檢查
    if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
        alert("請輸入正確的 Email 格式！");
        return false;
    }

    // 3. 檢查有沒有至少一樣商品被勾選，且數量 > 0
    var p1Checked = form.p1_checked.checked;
    var p2Checked = form.p2_checked.checked;
    var p3Checked = form.p3_checked.checked;

    var p1Qty = parseInt(form.p1_qty.value, 10);
    var p2Qty = parseInt(form.p2_qty.value, 10);
    var p3Qty = parseInt(form.p3_qty.value, 10);

    if (!p1Checked && !p2Checked && !p3Checked) {
        alert("請至少勾選一樣想購買的商品！");
        return false;
    }

    // 如果有勾選，但數量是 0，也不可以
    if ((p1Checked && p1Qty <= 0) ||
        (p2Checked && p2Qty <= 0) ||
        (p3Checked && p3Qty <= 0)) {
        alert("有勾選的商品，數量請填 1 以上喔！");
        return false;
    }

    alert("訂單已送出！感謝您的購買～");
    return true;
}
