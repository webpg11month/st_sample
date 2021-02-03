'use strict';

//クラス作成
//データ:jsonデータ
let data = [
  { task : "taro",exam : "test",date : "a"},
  { task : "jiro", exam : "test", grade : "c" },
  { task : "saburo", exam : "test", grade : "d" }
];
//カウント初期値設定
let cnt = 0;

for(var i in data){
  let addtask = $("#task-list").append("<li class='list-mark' id='taskchtaskcheck" + cnt +"'" + "><input type='checkbox' name='listdata' id=" + "taskchtaskcheck"  + cnt +" value=" + 'taskcheck' + cnt +">" + data[i].task+"</li>");
  cnt += 1;
}

//日付処理
function date(){
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  let date = year + '年' + month + '月' + day + '日';
  return date;
}

//再設定
cnt = 2;
//追加処理
function taskadd(task,dataadd){
  //7回記述可能
  if (cnt < 10) {
    if(task){
      data.push(dataadd);
      cnt += 1;
    let test =  $("#task-list").append("<li class='list-mark' id='taskchtaskcheck" + cnt +"'" + "><input type='checkbox' name='listdata' id=" + "taskchtaskcheck"  + cnt +" value=" + 'taskcheck' + cnt +">" + dataadd.task+"</li>");
      //console.log("taskch"+cnt);
    }
  }
}

//追加処理読み込み
function task(){
  //データ処理
  let task = document.getElementById('task-data').value;
  //入力項目2
  let dataadd =
  { task : task,
   exam : { math : 10, lang : 100 },
   date : date()
  }
  //クラス作成
  let KobitoDukan = function(name,age) {
    this.name = name;
    this.age = age;
  }
  //インスタンス化
  let kobito = new KobitoDukan("ToDoを始めよう！！", "");
  //インスタンス化確認
  message.innerHTML="<h1>"+kobito.name+"</h1>";
  //関数処理
  taskadd(task,dataadd);
//  console.log(data.task);
}

/*削除処理*/
function taskdelete(){
  const arr1 = [];
  const listdata = document.form1.listdata;
  //チェックした値を取得
  for(let i = 0; i < listdata.length; i++){
    if(listdata[i].checked){
      arr1.push(listdata[i].value);
      let task = document.getElementById(arr1.value);
      console.log(arr1);
      let box = document.getElementById("taskch"+listdata[i].value);
      let test = "taskch"+listdata[i].value;
      box.remove();
    }
  }
}

function AllChecked(){
  var all = document.form.all.checked;
  for (var i=0; i<document.form.test.length; i++){
    document.form.test[i].checked = all;
  }
}

