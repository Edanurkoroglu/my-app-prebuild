// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

module.exports = {

    transformer: {
       getTransformOptions: async () => ({
         transform: {
           experimentalImportSupport: false,
           inlineRequires: false,
         },
       }),
    },
    resolver: {
       // Enables using 'react-native-gesture-handler' in a different directory
       extraNodeModules: {
         'react-native-gesture-handler': 'node_modules/react-native-gesture-handler',
       },
       // Ensures aliases point to the correct file paths
       alias: {
         './vendor/eventemitter3': 'node_modules/eventemitter3',
       },
    },
   };