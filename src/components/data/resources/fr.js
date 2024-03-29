import {faShare, faCode,faStar, faCodeBranch, faMoon, faPlusCircle, faFire, faPenSquare, faQuestionCircle} from "@fortawesome/fontawesome-free-solid";
import commands from "./commands-fr.json"
const fr = {
     "indexPage": {
          "indexTitle": ["Commençons un", "Serveur de codage", "Avec le bot CodeX"],
          "indexDescription": "Faites votre expérience de codage avec votre propre serveur communautaire, débogage de code, publication, partage de projets...",
          "indexGetstarted": "Commencer",
          "indexTitleFeatures": "Voir nos fonctionnalités spéciales",
          "indexDescriptionMobile": ["Faites votre expérience de codage avec votre propre serveur", ",Community débogage de code, publication, partage de projets..."],
          "indexItemTitleFeatures": [
               "Prise en charge des codes spéciaux",
               "Communauté de codage",
               "CodeX Discord Bot"
          ],
          "indexItemDescriptionFeatures": [
               "CodeX by Special Code, nous prenons en charge toutes les fonctionnalités de code spécial, comme le code de publication et les projets, ext... et vous pouvez lier votre compte de code spécial et personnaliser le contenu de votre code... en savoir plus sur le code spécial !",
               "CodeX Support Server, Il s'agit d'un serveur Discord qui vous aide à communiquer et à parler de programmation, de conception, d'IA... tout ce qui concerne la technologie ! et vous pouvez y partager votre projet et faire votre expérience avec les fonctionnalités de codage de bot !",
               "Facile à utiliser! CodeX est lié au bot discord, ce qui signifie que vous pouvez personnaliser et utiliser ce bot comme vous le souhaitez sur votre propre serveur, et le meilleur que vous puissiez partager vos projets et messages sera affiché sur ce site Web !"
          ]
     },
     "navbar": {
          "title": "CodeX",
          "items": [
               "Commandes",
               "Serveur d'assistance",
               "Caractéristiques",
               "Maison"
          ],
          "button": "Connexion"
     },
     "footer": {
          "title": "CodeX",
          "footerElementsTitles": [
               "Explorer les fonctionnalités",
               "CodeX Bot",
               "Aperçu",
               "À propos de CodeX",
               "Communauté",
               "Special Code"
          ],
          "footerElement1": [
               "Projets de codes",
               "Personnaliser le serveur",
               "notre serveur Discord",
               "Le codage est spécial"
          ],
          "footerElement2": [
               "Démarrez votre projet",
               "Partagez votre code",
               "Explorer plus de projets",
               "Commencer le travail d'équipe"
          ],
          "footerElement3": [
               "À propos",
               "Contact",
               "Apprendre CodeX",
               "Conditions d'utilisation",
               "politique de confidentialité"
          ],
          "footerElement4": [
               "Qu'est-ce que le bot CodeX ?",
               "En savoir plus sur l'équipe de codage...",
               "Comment démarrer un projet ?",
               "Serveur Discord, Communauté..."
          ],
          "footerElement5": [
               "Communauté TeamX",
               "Travailler Ensemble",
               "Partagez votre code",
               "Ajouter des amis de projet",
               "Discord général",
               "Ouvrez votre propre équipe"
          ],
          "footerElement6": [
               "À propos du code spécial",
               "Discord Serveur",
               "Site officiel",
               "Comment démarrer votre entreprise?",
               "Comment partager des projets ?",
               "L'avenir de la programmation",
               "Projets de codes spéciaux",
               "En savoir plus"
          ]
     },
     featuresPage: {
          title: ["Démarrez votre codage "," Expérience avec "," Nos fonctionnalités"],
          description: ["Mieux vaut essayer avec nos fonctionnalités, apprendre, profiter et coder pendant que vous "," Utilisation de nos fonctionnalités sera la meilleure, essayez nos fonctionnalités ici!"],
          data:[{
               "name": "Équipe Codage",
               "describe": "• Profitez et codez avec votre équipe!",
               "items": ["Activité de codage","Code Night","démarrer sa propre équipe","Challenge de codage"],
               "sponsor": "Special Code",
               "icons": [faStar, faMoon, faPlusCircle, faFire],
               "id": "first",
               "icon": faCode
          },{
               "name": "Code de Projet",
               "describe": "• Démarrez et gérez votre projet",
               "items": ["Partager Project ","Ajouter un travail d'équipe ","Gérer facilement ","Obtenez le support"],
               "sponsor": "CodeX",
               "id": "two",
               "icons": [faShare, faPlusCircle, faPenSquare, faQuestionCircle],
               "icon": faCodeBranch
          }

          ]  
     },
     commandsPage: commands
}

export default fr