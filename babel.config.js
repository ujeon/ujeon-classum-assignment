module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@screens': './src/screens',
          '@components': './src/components',
          '@themes': './src/themes',
          '@store': './src/store',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
