AJEDREZ.setup=function()
{
  AJEDREZ.CRL();
  AJEDREZ.setupTorres();
  AJEDREZ.escena.add(luzPuntual);
}

AJEDREZ.loop=function()
{
  requestAnimationFrame(AJEDREZ.loop);
  AJEDREZ.renderizador.render(AJEDREZ.escena,AJEDREZ.camara);
}
AJEDREZ.setup();
AJEDREZ.loop();
