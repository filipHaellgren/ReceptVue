
<h1>Teoretiska resonemang</h1>
<h2>1. Hur applikationen fungerar  </h2>
<p>Applikationen är en receptsida som då var exemplet i labbuppgiften skapad då med Vue.js som ramverk såklart. Den låter användaren:
Hämta ett visst antal recept från API:ET TheMealDB för att hämta en lista med recept respektive bilder. Dessa visas på startsidan där varje recept innehåller en bild och namnet på rätten.
Klickar man på ett av rätterna så får man ett recept där man kan se tydligt(tygligare :|) hur man tillagar rätten och dessutom få se en större bild.
Användaren kan lägga till recept i en favoritlista med hjälp av en knapp som befinner sig under namnet på rätten. Favoriter sparas globalt via provide/inject i Vue och visas på en separat sida.
På favoritsidan kan användaren se sina sparade recept. Dessa är också länkade till detaljsidan så att användaren kan få mer information om varje recept.
Teknisk uppbyggnad:
Vue Router: Används för att hantera navigering mellan olika sidor, inklusive startsidan, favoritsidan och detaljsidan för ett recept.
API-anrop: Axios används för att hämta data från TheMealDB API. Data hanteras reaktivt med hjälp av ref.
Reaktivitet: Receptdata och favoriter hanteras med reaktiva ref-variabler för att säkerställa att gränssnittet uppdateras dynamiskt.
<h2>2. Hur AI användes vid utvecklingen </h2>
AI spelade en viktig roll i utvecklingen av applikationen på följande sätt:
Optemiserade FoodList.vue, Favorites.vue, och RecipeDetails.vue. Exempelvis lades AI till förslag om att använda computed-egenskaper för att förbereda ingredienser dynamiskt.
Felsökning och debug: När fel uppstod i TypeScript eller Vue-specifika delar (t.ex., problem med v-for eller felaktig typdefinition), föreslog AI lösningar som hjälpte till att lösa problemen snabbt.
Struktur och best practices: Genom AI:s vägledning implementerades provide/inject för att hantera favoriter globalt och Vue Router för att navigera mellan sidor. 
