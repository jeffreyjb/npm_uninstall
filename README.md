# npm_uninstall
Quick CLI tool for uninstalling apps with node modules
Tired of managing and deleting node_modules folder?
Sick of running out of disk space?
Just run npm_uninstall when you no longer need an app and watch your node_modules disappear!

## Install
- To install:
  - Navigate via the command line to the directory with uninstallNodeModules.mjs
  - npm install
  - npm link

## Usage
- After install and link, npm_uninstall can be use from any location via the command line:
  - npm_uninstall
- The tool will prompt you asking if you are sure you want to uninstall
  - Confirm with y or decline with n
- Upon confirming, the tool will recursively delete everything in the node_modules folder

WARNING: Do not use this inside of the directory you install npm_uninstall into as this will disable the install tool!!!
