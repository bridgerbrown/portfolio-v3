import { Shaders, Node, GLSL, Uniform } from "gl-react";

export const Shader = ({ time, n }) => (
  <Node
    shader={shaders.bwMelt}
    uniforms={{ resolution: Uniform.Resolution, time }}
  />
)

const shaders = Shaders.create({
  bwMelt: {
    frag: GLSL`


#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 resolution;
uniform float time;

const int AMOUNT = 7;

void main() {
  vec2 coord = 1.0 * (gl_FragCoord.xy - resolution / 10.0) / min(resolution.y, resolution.x);

  float len;

  for (int i = 0; i < AMOUNT; i++) {
    len = length(vec2(coord.x, coord.y));

    coord.y = coord.y + sin(coord.x + sin(len)) + sin(time / 100.0);
    coord.x = coord.x - cos(coord.y + sin(len)) + cos(time / 60.0);
    coord.y = coord.y + sin(coord.x + cos(len)) + sin(time / 90.0);
    coord.x = coord.x + cos(coord.y - sin(len)) - cos(time / 60.0);
  }

  float threshold = 0.5; // Threshold value for separating black and white
  float intensity = step(threshold, sin(len));

  intensity = 1.0 - intensity; // Invert the intensity value

  gl_FragColor = vec4(intensity, intensity, intensity, 0.01);
}
`
  }
});

/*

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 resolution;
uniform float time;

const int AMOUNT = 8;

void main() {
  vec2 coord = 1.0 * (gl_FragCoord.xy - resolution / 100.0) / min(resolution.y, resolution.x);

  float len;

  for (int i = 0; i < AMOUNT; i++) {
    len = length(vec2(coord.x, coord.y));

    coord.y = coord.y + sin(coord.x + sin(len)) + sin(time / 90.0);
    coord.x = coord.x - cos(coord.y + sin(len)) + cos(time / 80.0);
    coord.y = coord.y + sin(coord.x + cos(len)) + sin(time / 100.0);
    coord.x = coord.x + cos(coord.y - sin(len)) - cos(time / 90.0);
  }

  float threshold = 0.5; // Threshold value for separating black and white
  float intensity = step(threshold, sin(len));

  intensity = 1.0 - intensity; // Invert the intensity value

  gl_FragColor = vec4(intensity, intensity, intensity, 0.01);
}

*/
