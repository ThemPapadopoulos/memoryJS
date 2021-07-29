window.addEventListener('load', (event) => {
      newBoard();
      timerStart();
      counter.innerText=0;
    });
      

var memory_array = ['A','A','B','B','C', 'C', 'D','D','E','E','F','F','G','G','H','H','I','I', 'J','J','K','K','L','L'];
    var memory_values = [];
    var memory_tile_ids = [];
    var tiles_flipped = 0;
    
    Array.prototype.memory_tile_shuffle = function(){
      var i = this.length, j, temp;
      
      while(--i > 0) {
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
      }
    }
    function timerStart(){
      setInterval(() => {
        counter.innerText++;
      }, 1000);
    }

function myStopFunction() {
  clearInterval(myVar);
}
    function newBoard(){
      tiles_flipped = 0;
      var output = '';
      memory_array.memory_tile_shuffle();
      for (var i=0; i< memory_array.length; i++){
        output += '<div id="tile_'+i+'" onClick="memoryFlipTiles(this,\''+memory_array[i]+'\')"></div>';
      }
      document.getElementById('memory_board').innerHTML = output;
    }
    
    function memoryFlipTiles(tile, val) {
      if (tile.innerHTML == "" && memory_values.length < 2){
        tile.style.background = "#f5f4f4";
        tile.innerHTML = val;
        
        if(memory_values.length == 0) {
          memory_values.push(val);
          memory_tile_ids.push(tile.id);
        } else if (memory_values.length == 1) {
          memory_values.push(val);
          memory_tile_ids.push(tile.id);
          if (memory_values[0] == memory_values[1]) {
            tiles_flipped +=2;
            //clear arrays
             memory_values = [];
             memory_tile_ids = [];
            
             if(tiles_flipped == memory_array.length){
               let time = counter.innerText;
                alert("Board cleared in "+time+" seconds!" );
                   counter.innerText=0;
                document.getElementById('memory_board').innerHTML = "";
                newBoard();
              }
          } else {
            function flip2back(){
              // Flip the 2 tiles back
              var tile_1 = document.getElementById(memory_tile_ids[0]);
              var tile_2 = document.getElementById(memory_tile_ids[1]);
              
              tile_1.style.background = '#00303f';
              
              tile_1.innerHTML = "";
              
              tile_2.style.background = '#00303f';
              
              tile_2.innerHTML = "";
              
              //clear arrays
             memory_values = [];
             memory_tile_ids = [];
            }
            setTimeout(flip2back, 500);
          }
        }
      }
    }
