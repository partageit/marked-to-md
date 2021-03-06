# Markdown cheat sheet

## En-têtes

# En-tête de niveau 1
## En-tête de niveau 2
### En-tête de niveau 3
#### En-tête de niveau 4
##### En-tête de niveau 5
###### En-tête de niveau 6

ou pour un en-tête de niveau 1 et de niveau 2 :

En-tête de niveau 1
===================

En-tête de niveau 2
-------------------


## Mise en forme

*Italique* ou _italique_

**Gras** ou __gras__

*Italique seulement et **gras et italique** *

~~Rayé~~

> Citations sur
> deux lignes

Citations imbriquées :

> Message 3
>> Message 2
>>> Message 1


## Ligne horizontale

___

---

***

Trois caractères ou plus parmi `_`, `-` ou `*`, précédés d'une ligne vide

## Paragraphes

Les paragraphes sont séparés d'une ligne vide.  
Un saut de ligne avec deux espacs en fin de ligne.

## Liste ordonnée

1. Premier point
 1. Section 1.1
 2. Section 1.1
2. Deuxième point
3. Fin


Les listes imbriquées doivent d'être indentées avec un espace supplémentaire par niveau.

La numérotation est automatique au moment de la conversion : toutes les entrées de la liste peuvent être numérotées `1.`.

1. First point
1. Second point
1. Third point

With different numbers:

1. First point
2. Second point
3. Third point

## Liste non ordonnée

- Avec un tiret Maralpin
+ Avec un plus  
next line on the same item
* Avec un astérisque
 - sous item
 - sub item2
- Level 1
 - Another sub item1
 - Another sub item2

- > blockquote in a list

## Liens

URL :

http://foo/

Avec une ancre :

[Ancre](http://foo)

Avec une ancre et une infobulle :

[Ancre](http://foo/ "Titre affiché en infobulle")

Vers un fichier local :

[Vers un fichier local](../CHANGELOG.md)

Avec une ancre vers une URL référencée ailleurs dans le document :

[Nom de la référence][Nom de la référence]

Une référence, qui ne sera pas affichée au moment de la conversion en HTML par exemple :

[Nom de la référence]: http://foo

## Images

Image avec un texte qui apparaît en cas d'erreur de chargement :

![Texte alternatif](http://foo/bar.png)

Avec une infobulle :

![Texte alternatif](http://foo/bar.png "Titre affiché en infobulle")

L'image affichée est référencée ailleurs dans le document :

![Texte alternatif][Référence]

Une référence, comme pour les liens :

[Référence]: http://foo/bar.png

Le texte alternatif est obligatoire mais peut être vide.

L'image peut être locale ou distante.

## Code

Du `code` intégré à une ligne entre ` et `

    Du code sur une seule ligne, précédé par quatre espaces


```
Code sur
plusieurs lignes
avec " & é
```

```javascript
var text = 'Code Javascript pour activer la coloration syntaxique';
console.log(text);
```

## Tableaux [lien dans un titre](link.md) "double quote"

| colonne 1 | colonne 2 | colonne 3 |
| --------- |:---------:| ---------:|
| foo       | bar       | 42        |
| foo | Avec plus de texte | 1337 |


Les tableaux ne sont pas compatibles avec tous les convertisseurs.  
Les espaces améliorent la lisibilité en mode texte, mais ne sont pas obligatoires.  
Les `:` permettent l'alignement à droite ou au centre, ici les colonnes sont successivement alignées à gauche, au centre et à droite.

## HTML

HTML peut être utilisé dans un document markdown.

<strong>Strong</strong>

<p>Hello world! <em>Italic</em><br>...</p>

## Références

http://markdowntutorial.com

http://assemble.io/docs/Cheatsheet-Markdown.html