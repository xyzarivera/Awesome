# Git

## removing / changing repository
```
> git remote
> git remote remove origin
> git remote add SSH address
> git push -u origin master
```

## adding new repo
create your project folder first
```
> git init
> git add . 
> git commit -m "initial commit"
> git remote add origin git@github.com:username/repo_name.git
> git push -u origin master
```

## Integrating Git Branches in Terminal
Open `.bashrc` in your chosen text editor
`$ code ~/.bashrc`

Paste the following code then save
```
parse_git_branch() {
     git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
}
export PS1="\u@\h \[\033[32m\]\w\[\033[33m\]\$(parse_git_branch)\[\033[00m\] $ "
```

Allow changes without restarting terminal
` $ source ~/.bashrc`