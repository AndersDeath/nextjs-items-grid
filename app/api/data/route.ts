import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    listings: [
      {
        _id: "614348f7fae50600074a34f2",
        title: {
          de: "Elegantes Studio im Zentrum von Berlin",
          en: "Elegant studio in the center of Berlin",
        },
        image: "https://picsum.photos/seed/1/200/300",
        sqm: 55,
        beds: 1,
        price: 180000,
      },
      {
        _id: "5fa00b495593b100060dbd98",
        title: {
          de: "Modernes Serviced Apartment mit Balkon und Gym in beliebtester Lage, direkt am Kurfürstendamm",
          en: "Modern serviced flat with balcony and gym in the most popular location, directly on Kurfürstendamm",
        },
        image: "https://picsum.photos/seed/2/200/300",
        sqm: 40,
        beds: 1,
        price: 120000,
      },
      {
        _id: "5fe04e4b2963460006102ff7",
        title: {
          de: "Preiswertes Studentenapartment im Zentrum von Adlershof (Berlin)",
          en: "Cheap student apartment in the center of Adlershof (Berlin)",
        },
        image: "https://picsum.photos/seed/3/200/300",
        sqm: 24,
        beds: 1,
        price: 59800,
      },
      {
        _id: "5cc088c29c1571000623b018",
        title: {
          de: "Modernes Studio in Berlin Friedrichshain",
          en: "Modern Studio in Berlin Friedrichshain",
        },
        image: "https://picsum.photos/seed/4/200/300",
        beds: 1,
        price: 155000,
      },
      {
        _id: "5beac588a4fe8a00053ed60d",
        title: {
          de: "Kleines Apartment in Berlin Friedrichsfelde an der S-Bahn Station Lichtenberg",
          en: "Apartment in Berlin Friedrichsfelde (20 minutes to Alexanderplatz)",
        },
        image: "https://picsum.photos/seed/5/200/300",
        sqm: 18,
        beds: 1,
        price: 70000,
      },
      {
        _id: "61339140b278b40007542a5c",
        title: {
          de: "Helle Luxuswohnung am Lietzensee / Charlottenburg mit Parkplatz, zwei Balkonen, Ku'damm/Savignyplatz und Zoo in der Naehe.",
          en: "Bright luxury flat at the Lietzensee / Charlottenburg, with Garage, two balconies, Ku'damm/Savignyplatz and Zoo nearby.",
        },
        image: "https://picsum.photos/seed/6/200/300",
        sqm: 80,
        beds: 3,
        price: 295000,
      },
      {
        _id: "601cffd742d95e0006f4cacd",
        title: {
          de: "Lichtdurchflutete Altbau-Wohnung im Kiez",
          en: "Light-flooded old building flat in the neighbourhood",
        },
        image: "https://picsum.photos/seed/7/200/300",
        sqm: 71,
        beds: 1,
        price: 135200,
      },
      {
        _id: "5f5f7172ee40d80006270154",
        title: {
          de: "vollmöbliertes, gemütliches Studio in zentraler und beliebter Lage",
          en: "fully furnished, cozy studio in central and popular location",
        },
        image: "https://picsum.photos/seed/8/200/300",
        sqm: 28,
        beds: 1,
        price: 98000,
      },
      {
        _id: "5f7715e6c5e427000769b2cb",
        title: {
          de: "Liebevoll eingerichtetes und ruhiges Loft im Zentrum von Mitte",
          en: "Gorgeous, wonderful apartment in Mitte",
        },
        image: "https://picsum.photos/seed/9/200/300",
        sqm: 35,
        beds: 1,
        price: 255000,
      },
      {
        _id: "5e849c4141d0b400062b3c12",
        title: {
          de: "Traumhaftes Apartment in bester Kiezlage *inkl. Reinigung*",
          en: "Amazing suite located in Mitte",
        },
        image: "https://picsum.photos/seed/10/200/300",
        sqm: 55,
        beds: 1,
        price: 169000,
      },
      {
        _id: "5d0cbaa5f5ca650007f27346",
        title: {
          de: "Stilvolle und häusliche Wohnung auf Zeit im Herzen Berlins",
          en: "Wonderful and pretty home located right in the heart of Berlin",
        },
        image: "https://picsum.photos/seed/11/200/300",
        sqm: 100,
        beds: 2,
        price: 289000,
      },
      {
        _id: "5fc64c4e32039a0007b6c0a7",
        title: {
          de: "Wunderschöne Superior Suite im Herzen Berlins perfekt für Paare",
          en: "Beautiful Superior Suite in the heart of Berlin perfect for couples",
        },
        image: "https://picsum.photos/seed/12/200/300",
        sqm: 44,
        beds: 1,
        price: 250000,
      },
      {
        _id: "60c87696878cd60007c2a08a",
        title: {
          de: "ZimmerAppartment Simple auf Zeit",
          en: "Amazing simple room near Tiergarten",
        },
        image: "https://picsum.photos/seed/13/200/300",
        sqm: 17,
        beds: 1,
        price: 119900,
      },
      {
        _id: "5d316dff724b7600075f7a44",
        title: {
          de: "Helle, ruhige, zentral gelegene, heimelige Wohnung, möbliert - voll ausgestattet, 2 Bäder, 4 Zimmer, Wohnkücke",
          en: "Neat and awesome suite (Berlin)",
        },
        image: "https://picsum.photos/seed/14/200/300",
        sqm: 112,
        beds: 4,
        price: 219000,
      },
      {
        _id: "5e5928947359880006751505",
        title: {
          de: "Gemütlicher Rückzugsort in Berlin Mitte",
          en: "Cozy Retreat in Berlin Mitte",
        },
        image: "https://picsum.photos/seed/15/200/300",
        sqm: 109,
        beds: 1,
        price: 370000,
      },
      {
        _id: "5ecf40bd3c6cd10006bd02f0",
        title: {
          de: "Helles Business Studio",
          en: "Pretty apartment in Marzahn",
        },
        image: "https://picsum.photos/seed/16/200/300",
        sqm: 21,
        beds: 1,
        price: 148500,
      },
      {
        _id: "5fae603caf9f41000783d8cc",
        title: {
          de: "Feinste und fantastische Wohnung auf Zeit mit schöner Aussicht",
          en: "Wonderful, bright flat conveniently located",
        },
        image: "https://picsum.photos/seed/17/200/300",
        sqm: 44,
        beds: 1,
        price: 125000,
      },
      {
        _id: "613e007f54c12d000769d403",
        title: {
          de: "Hideaway in Niederschönhausen/ Pankow",
          en: "Hideaway in Niederschönhausen/ Pankow",
        },
        image: "https://picsum.photos/seed/18/200/300",
        sqm: 115,
        beds: 1,
        price: 280000,
      },
    ],
  };

  if (Math.random() < 0.1) {
    throw NextResponse.error();
  }
  return NextResponse.json(data);
}
