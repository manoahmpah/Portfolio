
const txtAnim = document.querySelector('h2');

console.log();
new Typewriter(txtAnim, {

    //loop : true, sgnifie que les étapes qui va suivre vont recommencer en boucle indéfiniment
    loop: true,

    // deleteSpeed: 20 donne la vitesse dont le texte va s'effacer
    deleteSpeed: 20
})

//voici les étapes du programme
// et delay de 20s avant de commencer
.changeDelay(20)

// on va écrire Je suis étudiant au lycée Jean Monnet remarque pour mettre en gras et sauter un ligne on va utiliser des balise html
.typeString('Je suis <strong>étudiant</strong> au lycée <br> Jean Monnet')

// faire une pause de 1000ms 
.pauseFor(1000)

// effacer 30 caratères
.deleteChars(30)

//écrire jeune remaque je n'est pas enlenver tous les caratères de la préscédente phrase la phrase donc donne je suis jeune (j'utilise les même balise que en html)
.typeString('<strong>jeune</strong></span>')

//faire un epause de 1000ms 
.pauseFor(1000)

//effacer 5 carathéres 
.deleteChars(5)

// écrire un photographe amateur , remarque je n'ai pas effacer toute la phrase présédent la phrase donne donc je suis un photographe amateur (j'utilise les même balise que en html)
.typeString('<strong>un photographe <br> amateur</strong></span>')

// faire une pause de 1000ms
.pauseFor(1000)

// effacer 23 carathéres 
.deleteChars(23)

//écrire un devellopeur amateur remarque je n'ai pas effacer toute la phrase présédent la phrase donne donc je suis un devellopeur amateur (j'utilise les même balise que en html)
.typeString('<span style="color: #DCB233"><strong>un developpeur <br> amateur</strong></span>')

//faire une pause de 1000ms
.pauseFor(1000)

//commencer le programme
.start()


