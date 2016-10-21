AJEDREZ.setup=function()
{
  AJEDREZ.CRL();
  AJEDREZ.setupTorres();
}

AJEDREZ.loop=function()
{
  requestAnimationFrame(AJEDREZ.loop);
  AJEDREZ.renderizador.render(AJEDREZ.escena,AJEDREZ.camara);
}
AJEDREZ.setup();
AJEDREZ.loop();
