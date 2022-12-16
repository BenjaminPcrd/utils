# Memo git

- [Configurer git](#configurer-git)
- [Créer un repository](#créer-un-repository)
- [Commandes basiques](#commandes-basiques)
- [Utiliser les logs](#utiliser-les-logs)
- [Gérer les branches](#gérer-les-branches)
    - [Se déplacer](#se-déplacer)
    - [Créer une nouvelle branche](#créer-une-nouvelle-branche)
    - [Supprimer une branche](#supprimer-une-branche)
    - [Fusionner une branche](#fusionner-une-branche)
- [Git stash](#git-stash)
- [Les submodules](#les-submodules)
- [Les alias](#les-alias)

## Configurer git

```bash
git config --global --edit
# ou
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
git status # permet de savoir où on en est
git add . # ajoute tous les fichiers au suivi
git commit -m "commit message" # créé un commit avec un message
git fetch # télécharge les modifications distantes
git pull # fusionne modifications distantes sur la branche locale
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

### Se déplacer

```bash
git branch # liste les branches
git branch -v # liste les branches avec leur dernier commit
git checkout new-branch # bascule vers une branche
```

### Créer une nouvelle branche

```bash
git branch new-branch # créé une nouvelle branche
git checkout -b new-branch # créé une nouvelle branche et bascule dessus
git branch -u origin/new-branch # permet lier la branche locale avec la remote

# quand la branche remote existe déjà
git switch new-branch # créé la branche en local, la lie à la remote et bascule dessus
```

### Supprimer une branche

```bash
git branch -d new-branch # supprime la branche en local
```

### Fusionner une branche

```bash
git merge new-branch # fusionne new-branch dans la branche courante
```

## Git stash

> Garder des modifications sans effectuer de commit

```bash
git stash # sauvegarde les modifications
git stash list # liste les stash
git stash clear # efface les stash précédents
git stash pop # récupère les dernières modifications enregistrées
```

## Les submodules

> Un dépot qui est à l'intérieur d'un autre dépot

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
