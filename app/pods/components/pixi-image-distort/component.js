import PIXI from 'pixi';
import PixiCanvas from 'ember-cli-pixijs/components/pixi-canvas';

export default PixiCanvas.extend({
  draw() {
    const renderer = this.get('pixiRenderer');
    const stage = new PIXI.Container();
    let scrollingImage, displacementFilter, displacementSprite;
    let mousePos = renderer.plugins.interaction.mouse.global;
    PIXI.loader.add("image", this.get('imgUrl')).load(setup);

    function setup() {
      scrollingImage =  new PIXI.extras.TilingSprite(PIXI.loader.resources.image.texture, 800, 600);

      // This adds the sprite that will become the filter
      displacementSprite = new PIXI.Sprite.fromImage('/assets/texture.png');
      stage.addChild(displacementSprite);

      // Convert displacementSprite into a Displacement Filter
      displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
      displacementFilter.scale.x = 10;
      displacementFilter.scale.y = 100;

      // Add displacement filter to our tiled sprite
      scrollingImage.filters = [displacementFilter];

      stage.addChild(scrollingImage);
      renderer.render(stage);
      theloop();
      resize();
      addDinoEgg();
      // backgroundFill();
    }

    let addDinoEgg = function() {
      let kkeys = [], dinoEgg = "38,38,40,40,37,39,37,39,66,65";
      $(document).keydown((e) => {
        kkeys.push( e.keyCode );
        if ( kkeys.toString().indexOf( dinoEgg ) >= 0 ) {
          $(document).unbind('keydown');
           PIXI.loader.resources = {};
           PIXI.loader.add("image", 'assets/steve.jpg').load(setup);
           scrollingImage =  new PIXI.extras.TilingSprite(PIXI.loader.resources.image.texture, 800, 600);
        }
      });
    };

    // canvas built to fill width of window
    // let backgroundFill = function() {
    //   renderer.view.setAttribute('style', 'height:auto;width:100%;');
    // };


    let theloop = function() {
      // This sets scroll speed between 1 and -1, 0 as the middle of the screen
      let mouseShift = { x: ((mousePos.x-400)/800), y: ((mousePos.y-300)/600) };
      let mouseYWithNoStop = mouseShift.y > -0.15 && mouseShift.y < 0.15 ? 0.15 : mouseShift.y;
      scrollingImage.tilePosition.y += mouseYWithNoStop * 5;
      scrollingImage.tilePosition.x = mouseShift.x * 34;
      displacementFilter.scale.x = mouseShift.x * 100;

      renderer.render(stage);
      requestAnimationFrame(theloop);
    };

    let resize = function() {
      let w = window.innerWidth;
      let h = window.innerHeight;
      renderer.view.style.width = w + 'px';
      renderer.view.style.height = h + 'px';
      // backgroundFill();
    };

    window.onresize = function() {
      resize();
    };
  },

  // PIXI was breaking its brain when leaving the route and reentering this one.
  // Doesnt like skiping a reload of the image if its already defined so we have to
  // wipe it
  willDestroyElement() {
    PIXI.loader.resources = {};
  }
});
