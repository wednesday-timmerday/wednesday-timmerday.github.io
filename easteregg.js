    var colors = ["red", "blue", "green", "white"];
    var colorIndex = 0;
    function changeColor() {
        var col = document.getElementById("body");
        if( colorIndex >= colors.length ) {
            window.open("index.html")
        }
        col.style.backgroundColor = colors[colorIndex];
        colorIndex++;
    }
