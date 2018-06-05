// resize the p5.js canvas when the browser window changes size
function windowResized() {
//  console.log('Resizing canvas to ' +  windowWidth + 'x' + windowHeight)
  resizeCanvas(400, 600)
}

function step() {
    player1.x += player1.velocity.x;
    player1.y += player1.velocity.y;
    
    player2.x += player2.velocity.x;
    player2.y += player2.velocity.y;

    player3.x += player3.velocity.x;
    player3.y += player3.velocity.y;

    if (!player1.collide(bar1) && !player1.collide(bar2) && !player1.collide(bar3) && !player1.collide(bar4)) {
        player1.velocity.y += 1;
    }
    else {
        player1.velocity.y = 0;
    }
    
    if (!player2.collide(bar1) && !player2.collide(bar2) && !player2.collide(bar3) && !player2.collide(bar4)) {
        player2.velocity.y += 1;
    }
    else {
        player2.velocity.y = 0;
    }
    
    if (!player3.collide(bar1) && !player3.collide(bar2) && !player3.collide(bar3) && !player3.collide(bar4)) {
        player3.velocity.y += 1;
    }
    else {
        player3.velocity.y = 0;
    }
}