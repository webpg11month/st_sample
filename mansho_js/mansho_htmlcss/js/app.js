
function confirmPassword() {
    //定数宣言
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm_password").value;
    const userid = document.getElementById("userid").value;
    const email = document.getElementById("email").value;
    const tel = document.getElementById("tel").value;
    //メッセージ宣言
    const errorMsg = document.getElementById("error_msg");
    const errorUser = document.getElementById("error_msg1");
    const errorPass = document.getElementById("error_msg2");
    const errorMail = document.getElementById("error_msg3");
    const errorTel = document.getElementById("error_msg4");
    const reg = /^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;

    //ユーザーID
    if(!userid){
        errorUser.innerText = "ユーザーIDは必須項目です";
        errorUser.classList.add('error_msg1');
        return false;
    }else {
        errorUser.innerText = "";
        errorUser.classList.add('error_msg1');
    }
    //パスワード
    if(!password){
        errorPass.innerText = "パスワードは必須項目です";
        errorPass.classList.add('error_msg2');
        return false;
    }else{
        errorPass.innerText = "";
        errorPass.classList.add('error_msg2');
    }
    //2重チェック
    if(password != confirmPassword ){
        errorMsg.innerText = "パスワードが一致しません";
        errorMsg.classList.add('error_msg');
        return false;
    }else {
        errorMsg.innerText = "";
        errorMsg.classList.add('error_msg');
    }
    console.log("test1");
    //メールアドレス
    console.log(reg.test(email));
    if(!email){
        errorMail.innerText = "メールアドレスは必須項目です";
        errorMail.classList.add('error_msg3');
        return false;
    }else if(!reg.test(email)){
        errorMail.innerText = "メールアドレスを入力してください";
        errorMail.classList.add('error_msg3');
        return false;
    }else {
        errorMail.innerText = "";
        errorMail.classList.add('error_msg3');

    }
    //電話番号
    console.log("test");
    if(isNaN(tel)){
        console.log("test");
        errorTel.innerText = "数値を入力してください";
        errorTel.classList.add('error_msg4');
        return false;
    }else if(tel === null || tel === ""){
        return true;
    }else if(!tel.match(/^(0[5-9]0[0-9]{8}|0[1-9][1-9][0-9]{7})$/)){
        console.log("test1");
        errorTel.innerText = "電話番号を入力して下さい";
        errorTel.classList.add('error_msg4');
        return false;
    }
}

