#!/usr/bin/env node
import * as fs from 'fs';
import chalk from 'chalk';
import inquirer from 'inquirer';

const options = { recursive: true, force: true };
const nodeModulesPath = 'node_modules';

inquirer
  .prompt([
    {
      type: 'confirm',
      name: 'yesOrNo',
      message: chalk.red("Are you sure you want to uninstall all node_modules?")
    }
  ])
  .then((answers) => {
    const result = answers.yesOrNo;
    if(result){
      fs.rm(nodeModulesPath,options,(err)=>{
        if (err) throw err;
        console.log(chalk.green('Successfully uninstalled Node modules!!!'));
      });
    } else {
      console.log(chalk.yellow('Uninstall of Node modules cancelled! Exiting...'));
    }
    
  });



