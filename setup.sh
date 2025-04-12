#!/bin/bash

# Configure Git identity
git config --global user.name "Vishwa FX Artist"
git config --global user.email "vishwaparameswaran7@gmail.com"

# Initialize Git repository
git init

# Add all files
git add .

# Make initial commit
git commit -m "Initial commit"

echo "Git setup complete! Now you can add your remote repository with:"
echo "git remote add origin https://github.com/yourusername/vishwafx.github.io.git"
echo "git push -u origin main" 