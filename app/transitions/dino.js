import { isAnimating, finish, timeSpent, animate, stop } from "liquid-fire";
import Ember from 'ember';
const { run } = Ember;

export default function(opts={}) {
  const fadingElement = findFadingElement(this);

  let firstStep;
  let outOpts = opts;

  var $w = $('.wrap');
  $w.addClass('hidden');

  if ($w.hasClass('add-transition')) {
    $w.removeClass('add-transition');
  }

  if ($w.hasClass('loaded')) {
    $w.removeClass('loaded');
  }

  if (fadingElement) {
    // We still have some older version that is in the process of
    // fading out, so out first step is waiting for it to finish.
    firstStep = finish(fadingElement, 'dino');
  } else {
    if (isAnimating(this.oldElement, 'dino')) {
      // if the previous view is partially faded in, scale its
      // dindinoo-in duration appropriately.
      outOpts = { duration: timeSpent(this.oldElement, 'dino') };
    }
    stop(this.oldElement);
    firstStep = animate(this.oldElement, {opacity: 1}, {duration: 1}, 'dino');
  }

  return firstStep.then(() => {
    run.later(function () {
      $w.addClass('add-transition');
      $w.removeClass('hidden');
      $w.addClass('loaded');
    }, 300);
    return animate(this.newElement, {opacity: 1}, {duration: 1}, 'dino');
  });
}

function findFadingElement(context) {
  for (var i = 0; i < context.older.length; i++) {
    var entry = context.older[i];
    if (isAnimating(entry.element, 'dino')) {
      return entry.element;
    }
  }
  if (isAnimating(context.oldElement, 'dino')) {
    return context.oldElement;
  }
}
