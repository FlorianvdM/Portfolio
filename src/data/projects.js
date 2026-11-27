// Hier staan al mijn projecten.
// Een nieuw project toevoegen? Kopieer een blok { ... } en pas het aan.
// slug = het stukje in de URL, bijv. /projecten/kitesurfschool

const projects = [
  {
    slug: "kitesurfschool",
    titel: "Kitesurfschool Windkracht 12",
    korteTekst:
      "Reserveringssysteem voor een kitesurfschool met drie rollen: klant, instructeur en eigenaar.",
    omschrijving:
      "Dit project heb ik gemaakt voor mijn herkansing van het examen Verdieping Software. Het is een reserveringssysteem voor een kitesurfschool. Klanten kunnen lessen boeken, instructeurs zien hun rooster en kunnen lessen annuleren, en de eigenaar beheert de reserveringen, betalingen en het materiaal.",
    technieken: [
      "Laravel",
      "React",
      "TypeScript",
      "Inertia",
      "MySQL",
      "Tailwind",
    ],
    type: "Solo",
    status: "Af",
    bijdrage: [
      "Registreren en inloggen met wachtwoordregels",
      "Drie rollen met elk hun eigen beveiligde pagina's",
      "Een les reserveren in een paar stappen",
      "Betaling melden en overzicht van onbetaalde lessen",
      "Rooster per dag, week en maand voor instructeurs",
      "Lessen annuleren",
      "Logboek van wie wanneer inlogt",
      "Materiaalbeheer",
      "Eigen huisstijl en een menu per rol",
    ],
    github: "https://github.com/FlorianvdM/Windkracht_12-HERK-",
    afbeelding: null,
  },
  {
    slug: "hap-en-hop",
    titel: "Hap & Hop",
    korteTekst:
      "Webshop voor cateraar Hap & Hop uit Houten, waar je pakketten en broodjes kunt bestellen.",
    omschrijving:
      "Deze webshop heb ik in mijn eentje gemaakt voor het cateringbedrijf Hap & Hop in Houten. Klanten kunnen pakketten en broodjes bestellen en kiezen of ze het ophalen of laten bezorgen. Het bedrijf zelf heeft een beheerpaneel voor de bestellingen, de voorraad en de omzet.",
    technieken: ["Laravel", "PHP", "MySQL", "Blade", "CSS"],
    type: "Solo",
    status: "Bijna af",
    bijdrage: [
      "Bestelformulier met dieetwensen",
      "Bevestigingsmails na een bestelling",
      "Pagina met mijn bestellingen",
      "Beheerpaneel met omzetgrafiek, voorraad en keukenoverzicht",
      "Bestellingen exporteren naar CSV",
      "Bestellen met een tijdvak en bezorgkosten op afstand",
      "Beveiliging tegen spam en te veel pogingen",
      "Nieuwe huisstijl voor de hele site",
    ],
    github: "https://github.com/FlorianvdM/hap-en-hop_test-project",
    afbeelding: null,
  },
  {
    slug: "smilepro",
    titel: "SmilePro",
    korteTekst:
      "Webapplicatie voor tandartspraktijk SmilePro, gemaakt met een groep van 4.",
    omschrijving:
      "SmilePro is een groepsproject van leerjaar 2. We maken met 4 studenten een webapplicatie voor een tandartspraktijk, waar patiënten afspraken kunnen maken en bekijken. Het project loopt nog tot eind januari.",
    technieken: ["Laravel", "PHP", "MySQL", "Docker", "Blade", "Tailwind"],
    type: "Groep (4 personen)",
    status: "Nog bezig",
    bijdrage: [
      "Projectopzet met Docker en de README",
      "Registreren, inloggen en uitloggen",
      "Homepagina met menu en footer",
      "Afspraak maken",
      "Mijn afspraken bekijken",
      "Wireframes voor mijn eigen onderdelen",
    ],
    github: null, // repo is privé (van school)
    afbeelding: null,
  },
];

export default projects;
