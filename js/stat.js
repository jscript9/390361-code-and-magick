// stats.js

'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.strokeRect(110, 20, 420, 270);
  ctx.fillRect(110, 20, 420, 270);
  
  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);
  
  ctx.fillStyle = '#000'; // black;
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);
  
  var max = -1;
  
  for(var i = 0; i < times.length; i++){
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }
  
  var histogramHeight = 150;
  var step = histogramHeight / (max - 0);
  
  var barLength = 40;
  var indent = 50;
  var initialX = 120;
  var initialY = 90;
  
  ctx.textBaseline = 'top';
  for(var i = 0; i < times.length; i++){
    ctx.fillStyle = 'rgba(9, 9, 237,' + Math.random() +')';
    ctx.fillRect(initialX + indent * i + barLength * i, initialY + (histogramHeight - times[i] * step), barLength, times[i] * step);

    ctx.fillStyle = 'black';
    ctx.fillText(names[i], initialX + indent * i + barLength * i, initialY + histogramHeight + 10);

    ctx.fillStyle = 'black';
    ctx.fillText(times[i].toFixed(), initialX + indent * i + barLength * i, initialY + (histogramHeight - times[i] * step) - 20);
  }
  
  
  
  var orderOfMyName = names.indexOf('Вы');
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(initialX + indent * orderOfMyName + barLength * orderOfMyName, initialY + (histogramHeight - times[orderOfMyName] * step), barLength, times[orderOfMyName] * step);
};
