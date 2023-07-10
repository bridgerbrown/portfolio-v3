#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

const int AMOUNT = 10;

void main(){
  vec2 coord = 1.0 * (gl_FragCoord.xy - u_resolution / 12.0) / min(u_resolution.y, u_resolution.x);

  float len;

  for (int i = 0; i < AMOUNT; i++){
    len = length(vec2(coord.x, coord.y));

    coord.x = coord.x - sin(coord.y + sin(len)) + cos(u_time / 30.0);
    coord.y = coord.y + sin(coord.x + cos(len)) + sin(u_time / 203.0);
  }

  gl_FragColor = vec4(sin(len), sin(len), sin(len), 1.0);
}