/**
 * Brought to you by Yago Estévez. https://twitter.com/yagoestevez
 */
require( "babel-runtime/regenerator" );
require( './index.html'              );
require( './main.css'                );

/* BOILERPLATE CODE. REMOVE IT TO START BUILDING YOUR NEXT THING */
let rotate = true;
const rotateLogo = ( ) => {
  const animation = setInterval( ( ) => {
    document.querySelector( '.cube__outer' )
      .style.transform = `scale3d(1, 1, 1) rotateX(0deg) rotateY(${rotate?0:450}deg) rotateZ(0deg)`;
    document.querySelector( '.cube__inner' )
      .style.transform = `scale3d(.5, .5, .5) rotateX(0deg) rotateY(-${rotate?0:450}deg) rotateZ(0deg)`;
    rotate = !rotate;
  }, 4000 );
}
window.addEventListener( 'load', ( ) => {
  setTimeout( ( ) => {
    rotateLogo( );
  }, 500 );
} );