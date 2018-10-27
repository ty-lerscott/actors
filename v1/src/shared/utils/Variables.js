export const textBlack = "#212121";
export const backgroundState = "rgba(255,255,255,0.85)";
export const axios  = (typeof window !== 'undefined') ? window.axios = require('axios') : require('axios');
export const origin = /DEVELOPMENT/.test(process.env.ENVIRONMENT) ? `http://localhost:${process.env.HTTP_PORT}` : "https://tylerscott.gallery";
export const maxFontChangeWidth = 800;