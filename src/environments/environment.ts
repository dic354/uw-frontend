export const environment = {
  production: true,
  apiUrl: window.location.hostname === 'localhost'
    ? 'http://localhost:3000/'
    : 'https://urbanwear-backend-q1yy.onrender.com/',
  cloudinary: {
    cloudName: 'dv7aunoql',
    uploadPreset: 'urbanwear_preset'
  }
};