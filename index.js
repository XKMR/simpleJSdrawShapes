const SPACECHAR = '   ';
const BLOCKCHAR = '[ ]';
const VERWALL = 20;
const HORWALL = 20;

var square = { position: [1, 1], width: 2, height:2, blocks: [] };
square.blocks.push(squareBlocks(square.position, square.width, square.height));



function squareBlocks(square, width, height) {
  var blocks = [];
  console.log()
  for (var blockY = 0; blockY <= VERWALL ; blockY += 1) {
    for (var blockX = 0; blockX <= HORWALL ; blockX += 1) {
      if(blockY >= square[1] && blockY < square[1] + height && blockX >= square[0] && blockX < square[0] + width) {
        blocks.push([blockX, blockY]);
        }
    }
  }
  return blocks;
}

function draw(position) {
  var plot = '';
  for (var y = 0; y <= VERWALL; y += 1) {
    for (var x = 0; x <= HORWALL; x += 1) {
      if (nestedIncludes(position, x, y)) {
        plot += BLOCKCHAR;
      } else {
        plot += SPACECHAR;
      }
    }
    plot += '\n';
  }
  return plot;
}

function nestedIncludes(arr, x, y) {
  var doesInclude = false;
  for (var i = 0; i < arr.length; i += 1) {
    if (arr[i][0] == x && arr[i][1] == y) {
      doesInclude = true;
    }
  }
  return doesInclude;
}

var mainBlocks = []
mainBlocks.push(square.blocks);
mainBlocks = mainBlocks.flat(2);


//additional blocks if you want to add
mainBlocks.push([1,3])

console.log(draw(mainBlocks));
//console.log(square.blocks)
