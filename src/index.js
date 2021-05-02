import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // divタグ作成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ作成
  const li = document.createElement("li");
  li.innerText = inputText;

  // button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグ（div）を未完了リストから削除
    const completeTarget = completeButton.parentNode; //親要素を取得
    document.getElementById("incomplete-list").removeChild(completeTarget);

    // button(削除)タグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //  完了リストから削除
      document.getElementById("complete-list").removeChild(completeTarget);

      // button(戻す)タグを削除し、button(削除, 完了)を追加する
      completeTarget.removeChild(backButton);
      completeTarget.appendChild(completeButton);
      completeTarget.appendChild(deleteButton);

      // 未完了リストに追加
      document.getElementById("incomplete-list").appendChild(completeTarget);
    });

    // button(削除, 完了)タグを削除し、button(戻す)を追加する
    completeTarget.removeChild(completeButton);
    completeTarget.removeChild(deleteButton);
    completeTarget.appendChild(backButton);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(completeTarget);
  });

  // button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ（div）を未完了リストから削除
    const deleteTarget = deleteButton.parentNode; //親要素を取得
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);

  alert(inputText);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
