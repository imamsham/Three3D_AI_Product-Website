import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#966919',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './dadacode.png',
  fullDecal: './dadacode.png',
});

export default state;