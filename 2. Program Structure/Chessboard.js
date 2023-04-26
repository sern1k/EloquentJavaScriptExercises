const size = 8;
let board = "";

for (let columns = 0; columns < size; columns++) {
    for (let rows = 0; rows < size; rows++) {
        if ((columns + rows) % 2 === 0) {
            board += "#";
        } else {
            board += " ";
        }
    }
    board += "\n";
}

console.log(board);
