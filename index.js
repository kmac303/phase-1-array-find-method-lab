function superbowlWin(arr) {
   let win = arr.find(element => element.result === 'W')
//    if (win === undefined) {
//     return win;
//    } else {
//     return win.year;
//    }
   return win === undefined ? win : win.year
}