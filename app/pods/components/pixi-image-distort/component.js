import Ember from 'ember';
import PIXI from 'pixi';
import PixiCanvas from 'ember-cli-pixijs/components/pixi-canvas';

export default PixiCanvas.extend({
  scrollSpeed: -1,

  // So right now if you comment this pixiRenderer in it will override the
  // plugin renderer and allow us to have a transparent canvas
  // pixiRenderer: Ember.computed('width', 'height', function() {
  //   const { width, height } = this.getProperties('width', 'height');

  //   return new PIXI.autoDetectRenderer(width, height, {transparent: true});
  // }),

  draw() {
    const renderer = this.get('pixiRenderer');
    const stage = new PIXI.Container();

    let scrollingImage, displacementFilter, displacementSprite;
    let image = this.get('imgUrl');
    let scrollSpeed = this.get('scrollSpeed');

    PIXI.loader.add("image", image).load(setup);

    function setup() {
      scrollingImage =  new PIXI.extras.TilingSprite(PIXI.loader.resources.image.texture, window.innerWidth, window.innerHeight);

      // This adds the sprite that will become the filter
      displacementSprite = new PIXI.Sprite.fromImage('/assets/texture.png');
      stage.addChild(displacementSprite);
      // Convert displacementSprite into a Displacement Filter
      displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
      displacementFilter.scale.x = 40;
      displacementFilter.scale.y = 100;

      // Add displacement filter to our tiled sprite
      scrollingImage.filters = [displacementFilter];

      stage.addChild(scrollingImage);
      renderer.render(stage);
      theloop();
      resize();
    }

    let theloop = function(){
      requestAnimationFrame(theloop);
      scrollingImage.tilePosition.y += scrollSpeed;
      renderer.render(stage);
    };

    let resize = function() {
      let w = window.innerWidth;
      let h = window.innerHeight;
      renderer.view.style.width = w + 'px';
      renderer.view.style.height = h + 'px';
    };

    window.onresize = function(event) {
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
