export default function (){
  this.transition( // Defines default transiton
    this.includingInitialRender(),
    this.use('dino')
  );
}
