# Memo git

## Configurer git
```bash
git config --global user.name "username"
git config --global user.email "email@gmail.com"
```

## Créer un repository

```bash
echo "# test" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:username/<nom du depot>.git
git push -u origin main # -u est un raccourci de --set-upstream
```

## Commandes basiques

```bash
git add . # ajoute tous les fichiers au suivi
git pull # télécharge les modifications du serveur sur la branch locale
```

## Utiliser les logs

```bash
git log -3 # liste les 3 derniers commits
git log --stat # liste les logs avec les statistiques
git log --oneline # liste les commits en une seule ligne
git log --author "username" # liste les commits d'un auteur
git log --after="2022-10-04" # liste les commits après une certaine date
git log --before="2022-10-04" # liste les commits avant une certaine date
```

## Gérer les branches

```bash
git branch # liste les branches
git branch -v # liste les branches avec leur dernier commit
git checkout new-branch # bascule vers une branche

git branch new-branch # créé une nouvelle branche
git checkout -b new-branch # créé une nouvelle branche et bascule dessus

git push -u origin new-branch # permet lier la branche locale avec la remote
git merge new-branch # fusionne new-branch dans la branche courante

git rebase main # récupère les modification de la branche main sur une autre branche

git branch -d new-branch # supprime la branche en local

git checkout <id du commit> # reviens à un état anterieur
```

## Git stash

>Garder des modifications sans effectuer de commits
```bash
git stash # sauvegarde les modifications
git stash list # liste les stash
git stash clear # efface les stash précédents
git stash pop # récupère les dernières modifications enregistrées
```

## Les submodules

>Un dépot qui est à l'intérieur d'un autre dépot

Commencer par forker un dépot sur son compte
```bash
git submodule add <repository url> # clone le dépot
```
Permet, sur le serveur, de créer un lien vers le dépot ajouté en submodule

## Les alias

```bash
git config --global --edit
```
Exemples d'alias :
```
[alias]
    last = log -1 HEAD
    aa = add -all
    co = checkout
    di = diff
    cb = checkout -b
    st = status
```

## Git-flow

Installer git-flow avec `sudo apt install git-flow`
