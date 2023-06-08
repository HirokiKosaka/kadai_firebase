      // データ登録
      $('#btn').on('click', function(){
        const text = $('#text').val();
        const msg = {
          text: $('#text').val()
        }
        const newPostRef = push(dbRef); //Pushできる状態を作る
        set(newPostRef, msg); //DBに値をセットする
        $('#text').val("");
      })

      //データ登録(Enter)

      //最初にデータ取得＆onSnapshotでリアルタイムデータを取得
      onChildAdded(dbRef, function(data){
        const msg = data.val();
        const key = data.key;

        let h = `
        <div class='test'>
          <p>${msg.text}</p>
        </div>
        `
        $('#output').append(h); //outputの最後に追加
      })