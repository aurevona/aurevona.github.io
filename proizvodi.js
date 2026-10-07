let sljedeciId = 1;

function napraviParfem(broj, kategorija, opis, izdvojeno = false) {

    const naziviKategorija = {
        zenski: "Ženski parfem",
        muski: "Muški parfem",
        unisex: "Unisex parfem"
    };

    const proizvod = {
        id: sljedeciId++,
        naziv: `Olfazeta ${broj}`,
        kategorija: kategorija,
        kategorijaNaziv: naziviKategorija[kategorija],
        slika: `slike/olfazeta-${broj.toLowerCase()}.png`,
        opis: opis,
        izdvojeno: izdvojeno
    };

    return proizvod;
}

const proizvodi = [

{
    id: 1,
    naziv: "Olfazeta 306",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfem",
    slika: "slike/olfazeta-306.png",
    opis: "Elegantan i upečatljiv ženski miris stvoren za žene koje vole ostaviti dojam.",
    izdvojeno: true
},

{
    id: 2,
    naziv: "Olfazeta 388",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfem",
    slika: "slike/olfazeta-388.png",
    opis: "Snažan i elegantan muški miris za muškarca koji želi ostaviti dojam.",
    izdvojeno: true
},

{
    id: 3,
    naziv: "Olfazeta 3114",
    kategorija: "unisex",
    kategorijaNaziv: "Unisex parfem",
    slika: "slike/olfazeta-3114.png",
    opis: "Moderan i upečatljiv unisex miris elegantnog karaktera za svaki dan i posebne prilike.",
    izdvojeno: true
},

{
    id: 4,
    naziv: "Olfazeta 307",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfem",
    slika: "slike/olfazeta-307.png",
    opis: "Elegantan ženski parfem profinjenog i upečatljivog karaktera. Miris stvoren za žene koje vole ostaviti dojam i istaknuti svoju ženstvenost.",
    izdvojeno: false
},

{
    id: 5,
    naziv: "Olfazeta 310",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfem",
    slika: "slike/olfazeta-310.png",
    opis: "Miris koji osvaja bez puno truda. Olfazeta 310 spaja ženstvenu eleganciju s dozom zavodljivosti – idealan za trenutke kada želiš da te pamte.",
    izdvojeno: false
},

{
    id: 6,
    naziv: "Olfazeta 311",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfem",
    slika: "slike/olfazeta-311.png",
    opis: "Za dane kada običan miris jednostavno nije dovoljan. Olfazeta 311 donosi dozu glamura, ženstvenosti i karaktera koja privlači pažnju gdje god se pojaviš.",
    izdvojeno: false
},

{
    id: 7,
    naziv: "Olfazeta 3151W",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfem",
    slika: "slike/olfazeta-3151w.png",
    opis: "Nježan na prvi susret, nezaboravan nakon njega. Olfazeta 3151W donosi profinjenu ženstvenost i šarm koji savršeno prati svaki trenutak dana.",
    izdvojeno: false
},

{
    id: 8,
    naziv: "Olfazeta 314",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfem",
    slika: "slike/olfazeta-314.png",
    opis: "Samouvjeren, ženstven i stvoren da se primijeti. Olfazeta 314 savršen je mirisni potpis za ženu koja voli eleganciju s malo odvažnosti.",
    izdvojeno: false
},

{
    id: 9,
    naziv: "Olfazeta 319",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfem",
    slika: "slike/olfazeta-319.png",
    opis: "Miris za ženu koja voli biti svoja. Olfazeta 319 odiše šarmom i profinjenošću, ostavljajući iza sebe dojam koji se ne zaboravlja.",
    izdvojeno: false
},

{
    id: 10,
    naziv: "Olfazeta 323",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfem",
    slika: "slike/olfazeta-323.png",
    opis: "Elegancija koja govori sama za sebe. Olfazeta 323 donosi profinjen i privlačan karakter, savršen za ženu koja želi da njezin miris bude dio njezina potpisa.",
    izdvojeno: false
},

{
    id: 11,
    naziv: "Olfazeta 324",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfem",
    slika: "slike/olfazeta-324.png",
    opis: "Za trenutke kada želiš ostaviti nešto više od prvog dojma. Olfazeta 324 donosi zavodljiv karakter i dašak luksuza koji privlači pažnju bez pretjerivanja.",
    izdvojeno: false
},

{
    id: 12,
    naziv: "Olfazeta 325",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfem",
    slika: "slike/olfazeta-325.png",
    opis: "Miris koji prati tvoj ritam – od jutarnje kave do večernjeg izlaska. Olfazeta 325 donosi ženstven, moderan karakter za svaki trenutak u kojem želiš zablistati.",
    izdvojeno: false
},

{
    id: 13,
    naziv: "Olfazeta 326",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfem",
    slika: "slike/olfazeta-326.png",
    opis: "Diskretno zavodljiv, a dovoljno upečatljiv da ga primijete. Olfazeta 326 stvoren je za ženu koja svojom pojavom privlači pažnju bez potrebe da je traži.",
    izdvojeno: false
},

{
    id: 14,
    naziv: "Olfazeta 327",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfem",
    slika: "slike/olfazeta-327.png",
    opis: "Ženstvenost s dozom tajanstvenosti. Olfazeta 327 ostavlja elegantan mirisni trag koji budi znatiželju i poziva da mu se približiš još jednom.",
    izdvojeno: false
},

{
    id: 15,
    naziv: "Olfazeta 328",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfem",
    slika: "slike/olfazeta-328.png",
    opis: "Miris za trenutke kada želiš biti primijećena, ali ne i predvidljiva. Olfazeta 328 donosi dozu sofisticiranosti i zavodljivog šarma koji ostaje u sjećanju.",
    izdvojeno: false
},

{
    id: 16,
    naziv: "Olfazeta 329",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfem",
    slika: "slike/olfazeta-329.png",
    opis: "Nježan dojam s karakterom koji se otkriva kroz vrijeme. Olfazeta 329 stvoren je za ženu koja voli profinjenost, stil i miris koji govori umjesto nje.",
    izdvojeno: false
},

{
    id: 17,
    naziv: "Olfazeta 339",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfem",
    slika: "slike/olfazeta-339.png",
    opis: "Miris koji spaja nježnu ženstvenost s dozom samopouzdanja. Olfazeta 339 stvoren je za trenutke kada želiš zračiti elegancijom i ostaviti svoj prepoznatljiv trag.",
    izdvojeno: false
},

{
    id: 18,
    naziv: "Olfazeta 340",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfem",
    slika: "slike/olfazeta-340.png",
    opis: "Za ženu koja ne prati trendove, već stvara vlastiti stil. Olfazeta 340 donosi upečatljivu dozu elegancije i šarma koja pretvara svakodnevni trenutak u nešto posebno.",
    izdvojeno: false
},

{
    id: 19,
    naziv: "Olfazeta 3153W",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfem",
    slika: "slike/olfazeta-3153w.png",
    opis: "Profinjen miris za ženu koja voli spoj elegancije, nježnosti i modernog karaktera.",
    izdvojeno: false
},

{
    id: 20,
    naziv: "Olfazeta 342",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfem",
    slika: "slike/olfazeta-342.png",
    opis: "Miris koji unosi dozu samopouzdanja u svaki korak i ostavlja elegantan trag iza sebe.",
    izdvojeno: false
},

{
    id: 21,
    naziv: "Olfazeta 3154W",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfem",
    slika: "slike/olfazeta-3154w.png",
    opis: "Nježna ženstvenost susreće moderan stil u mirisu stvorenom za svakodnevne posebne trenutke.",
    izdvojeno: false
},

{
    id: 22,
    naziv: "Olfazeta 347",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfem",
    slika: "slike/olfazeta-347.png",
    opis: "Odvažan mirisni potpis za ženu koja voli biti primijećena i ostati zapamćena.",
    izdvojeno: false
},

{
    id: 23,
    naziv: "Olfazeta 349",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfem",
    slika: "slike/olfazeta-349.png",
    opis: "Šarmantan i profinjen izbor koji svakom danu dodaje malu dozu luksuza.",
    izdvojeno: false
},

{
    id: 24,
    naziv: "Olfazeta 351",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfem",
    slika: "slike/olfazeta-351.png",
    opis: "Za ženu koja voli da njezina prisutnost govori prije riječi – elegantno, sigurno i upečatljivo.",
    izdvojeno: false
},

{
    id: 25,
    naziv: "Olfazeta 353",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfem",
    slika: "slike/olfazeta-353.png",
    opis: "Zavodljiv karakter u elegantnom izdanju, stvoren za večeri i trenutke koje želiš pamtiti.",
    izdvojeno: false
},

{
    id: 26,
    naziv: "Olfazeta 354",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfem",
    slika: "slike/olfazeta-354.png",
    opis: "Suptilan, ženstven i profinjen miris za dane kada želiš nešto nenametljivo, ali posebno.",
    izdvojeno: false
},

{
    id: 27,
    naziv: "Olfazeta 355",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfem",
    slika: "slike/olfazeta-355.png",
    opis: "Moderan miris pun karaktera, namijenjen ženi koja eleganciju nosi potpuno prirodno.",
    izdvojeno: false
},

{
    id: 28,
    naziv: "Olfazeta 356",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfem",
    slika: "slike/olfazeta-356.png",
    opis: "Miris koji donosi osjećaj dotjeranosti i luksuza čak i najobičnijem danu.",
    izdvojeno: false
},

{
    id: 29,
    naziv: "Olfazeta 357",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfem",
    slika: "slike/olfazeta-357.png",
    opis: "Ženstven i samouvjeren miris za trenutke kada želiš ostaviti snažan prvi dojam.",
    izdvojeno: false
},

{
    id: 30,
    naziv: "Olfazeta 3156W",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfem",
    slika: "slike/olfazeta-3156w.png",
    opis: "Nježan šarm i profinjena elegancija spojeni u mirisu koji se lako uklapa u svaki dan.",
    izdvojeno: false
},

{
    id: 31,
    naziv: "Olfazeta 364",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfem",
    slika: "slike/olfazeta-364.png",
    opis: "Miris za ženu koja voli jednostavnu eleganciju, ali nikada ne želi proći nezapaženo.",
    izdvojeno: false
},

{
    id: 32,
    naziv: "Olfazeta 367",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfem",
    slika: "slike/olfazeta-367.png",
    opis: "Karakteran i privlačan miris koji svakom pojavljivanju daje dodatnu dozu samopouzdanja.",
    izdvojeno: false
},

{
    id: 33,
    naziv: "Olfazeta 370",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfem",
    slika: "slike/olfazeta-370.png",
    opis: "Elegantan izbor za ženu koja voli profinjene detalje i miris koji prati njezin stil.",
    izdvojeno: false
},

{
    id: 34,
    naziv: "Olfazeta 371",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfem",
    slika: "slike/olfazeta-371.png",
    opis: "Miris s dozom tajanstvenosti, stvoren da privuče pažnju bez otkrivanja svega odjednom.",
    izdvojeno: false
},

{
    id: 35,
    naziv: "Olfazeta 372",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfem",
    slika: "slike/olfazeta-372.png",
    opis: "Živahan i ženstven karakter za dane kada želiš energiju, stil i dobar osjećaj u jednom.",
    izdvojeno: false
},

{
    id: 36,
    naziv: "Olfazeta 376",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfem",
    slika: "slike/olfazeta-376.png",
    opis: "Sofisticiran mirisni dodatak koji se jednako dobro uklapa uz dnevnu eleganciju i večernji izlazak.",
    izdvojeno: false
},

{
    id: 37,
    naziv: "Olfazeta 3158W",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfem",
    slika: "slike/olfazeta-3158w.png",
    opis: "Mekana elegancija i ženstveni šarm za ženu koja voli profinjen, nenametljiv dojam.",
    izdvojeno: false
},

{
    id: 38,
    naziv: "Olfazeta 380",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfem",
    slika: "slike/olfazeta-380.png",
    opis: "Miris koji djeluje dotjerano od prvog trenutka i savršeno prati samouvjerenu ženu.",
    izdvojeno: false
},

{
    id: 39,
    naziv: "Olfazeta 381",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfem",
    slika: "slike/olfazeta-381.png",
    opis: "Zavodljiva elegancija za posebne prilike i večeri u kojima želiš ostaviti trag.",
    izdvojeno: false
},

{
    id: 40,
    naziv: "Olfazeta 382",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfem",
    slika: "slike/olfazeta-382.png",
    opis: "Moderan i ženstven miris koji spaja profinjenost s opuštenim svakodnevnim stilom.",
    izdvojeno: false
},

{
    id: 41,
    naziv: "Olfazeta 385",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfem",
    slika: "slike/olfazeta-385.png",
    opis: "Za ženu snažnog karaktera koja voli da njezin miris bude jednako upečatljiv kao i njezina pojava.",
    izdvojeno: false
},

{
    id: 42,
    naziv: "Olfazeta 389",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfem",
    slika: "slike/olfazeta-389.png",
    opis: "Profinjen mirisni potpis s dozom šarma, idealan kada želiš izgled upotpuniti nečim posebnim.",
    izdvojeno: false
},

{
    id: 43,
    naziv: "Olfazeta 390",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfem",
    slika: "slike/olfazeta-390.png",
    opis: "Samouvjeren i elegantan izbor za ženu koja voli snažan dojam bez pretjerivanja.",
    izdvojeno: false
},

{
    id: 44,
    naziv: "Olfazeta 393",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfem",
    slika: "slike/olfazeta-393.png",
    opis: "Miris koji nosi dozu glamura i pretvara svaki izlazak u priliku da zablistaš.",
    izdvojeno: false
},

{
    id: 45,
    naziv: "Olfazeta 3159W",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfem",
    slika: "slike/olfazeta-3159w.png",
    opis: "Nježan i elegantan mirisni dodatak za ženu koja voli bezvremenski stil i profinjenost.",
    izdvojeno: false
},

{
    id: 46,
    naziv: "Olfazeta 396",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfem",
    slika: "slike/olfazeta-396.png",
    opis: "Od jutra do večeri, ovaj miris donosi osjećaj elegancije i ženstvenosti koji prati svaki korak.",
    izdvojeno: false
},

{
    id: 47,
    naziv: "Olfazeta 397",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfem",
    slika: "slike/olfazeta-397.png",
    opis: "Privlačan i moderan miris za ženu koja voli ostaviti dojam svojom pojavom i stilom.",
    izdvojeno: false
},

{
    id: 48,
    naziv: "Olfazeta 398",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfem",
    slika: "slike/olfazeta-398.png",
    opis: "Elegantan završni detalj svakog outfita – profinjen, ženstven i stvoren da bude zapamćen.",
    izdvojeno: false
},

{
    id: 49,
    naziv: "Olfazeta 3115",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfem",
    slika: "slike/olfazeta-3115.png",
    opis: "Miris s osobnošću za ženu koja voli kombinirati klasičnu eleganciju s modernim stavom.",
    izdvojeno: false
},

{
    id: 50,
    naziv: "Olfazeta 3116",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfem",
    slika: "slike/olfazeta-3116.png",
    opis: "Ženstven i šarmantan izbor koji svakodnevnim trenucima daje osjećaj posebnosti.",
    izdvojeno: false
},

{
    id: 51,
    naziv: "Olfazeta 3119",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfem",
    slika: "slike/olfazeta-3119.png",
    opis: "Za trenutke kada želiš nešto drugačije – elegantan miris s karakterom koji se pamti.",
    izdvojeno: false
},

{
    id: 52,
    naziv: "Olfazeta 3120",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfem",
    slika: "slike/olfazeta-3120.png",
    opis: "Profinjen i moderan miris koji lako postaje dio tvoje svakodnevne rutine.",
    izdvojeno: false
},

{
    id: 53,
    naziv: "Olfazeta 3121",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfem",
    slika: "slike/olfazeta-3121.png",
    opis: "Miris koji odiše ženstvenošću i stilom, stvoren za ženu koja cijeni elegantne detalje.",
    izdvojeno: false
},

{
    id: 54,
    naziv: "Olfazeta 3122",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfem",
    slika: "slike/olfazeta-3122.png",
    opis: "Upečatljiv, ali profinjen – miris za dane kada želiš da tvoja prisutnost ostane zapamćena.",
    izdvojeno: false
},

{
    id: 55,
    naziv: "Olfazeta 3131",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfem",
    slika: "slike/olfazeta-3131.png",
    opis: "Doza ženstvenosti i samopouzdanja u mirisu koji se jednako lijepo nosi danju i navečer.",
    izdvojeno: false
},

{
    id: 56,
    naziv: "Olfazeta 3132",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfem",
    slika: "slike/olfazeta-3132.png",
    opis: "Elegantan miris za ženu koja voli ostaviti sofisticiran dojam bez puno truda.",
    izdvojeno: false
},

{
    id: 57,
    naziv: "Olfazeta 3133",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfem",
    slika: "slike/olfazeta-3133.png",
    opis: "Šarmantan mirisni potpis koji spaja nježnu stranu ženstvenosti s odvažnim karakterom.",
    izdvojeno: false
},

{
    id: 58,
    naziv: "Olfazeta 3145",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfem",
    slika: "slike/olfazeta-3145.png",
    opis: "Stvoren za posebne trenutke, ali dovoljno elegantan da postane tvoj omiljeni svakodnevni izbor.",
    izdvojeno: false
},

{
    id: 59,
    naziv: "Olfazeta 3148W",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfem",
    slika: "slike/olfazeta-3148w.png",
    opis: "Nježan, dotjeran i ženstven miris koji savršeno nadopunjuje profinjen osobni stil.",
    izdvojeno: false
},

{
    id: 60,
    naziv: "Olfazeta 3161W",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfem",
    slika: "slike/olfazeta-3161w.png",
    opis: "Moderan miris za ženu koja voli jednostavnu eleganciju uz malu dozu zavodljivog šarma.",
    izdvojeno: false
},

{
    id: 61,
    naziv: "Olfazeta 3163W",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfem",
    slika: "slike/olfazeta-3163w.png",
    opis: "Završni dodir elegancije za ženu koja želi da njezin miris bude jednako poseban kao i njezin stil.",
    izdvojeno: false
},
{
    id: 62,
    naziv: "Olfazeta 301",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfem",
    slika: "slike/muski-parfem.png",
    opis: "Snažan i samouvjeren miris za muškarca koji voli ostaviti upečatljiv prvi dojam.",
    izdvojeno: false
},
{
    id: 63,
    naziv: "Olfazeta 302",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfem",
    slika: "slike/muski-parfem.png",
    opis: "Elegantan muški miris stvoren za poslovne dane, večernje izlaske i posebne prilike.",
    izdvojeno: false
},
{
    id: 64,
    naziv: "Olfazeta 303",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfem",
    slika: "slike/muski-parfem.png",
    opis: "Moderan karakter i doza odvažnosti za muškarca koji uvijek zna što želi.",
    izdvojeno: false
},
{
    id: 65,
    naziv: "Olfazeta 304",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfem",
    slika: "slike/muski-parfem.png",
    opis: "Mirisni potpis za muškarca koji cijeni jednostavan stil, eleganciju i samopouzdanje.",
    izdvojeno: false
},
{
    id: 66,
    naziv: "Olfazeta 150M",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfem",
    slika: "slike/muski-parfem.png",
    opis: "Karakteran i privlačan miris koji savršeno prati muškarca snažne osobnosti.",
    izdvojeno: false
},
{
    id: 67,
    naziv: "Olfazeta 312",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfem",
    slika: "slike/muski-parfem.png",
    opis: "Za dane kada želiš izgled upotpuniti mirisom koji odiše sigurnošću i dobrim stilom.",
    izdvojeno: false
},
{
    id: 68,
    naziv: "Olfazeta 315",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfem",
    slika: "slike/muski-parfem.png",
    opis: "Muževan i profinjen izbor za muškarca koji voli biti primijećen bez pretjerivanja.",
    izdvojeno: false
},
{
    id: 69,
    naziv: "Olfazeta 316",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfem",
    slika: "slike/muski-parfem.png",
    opis: "Ležeran tijekom dana, dovoljno elegantan za večer – miris spreman pratiti svaki tvoj plan.",
    izdvojeno: false
},
{
    id: 70,
    naziv: "Olfazeta 152M",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfem",
    slika: "slike/muski-parfem.png",
    opis: "Samouvjeren mirisni izbor za muškarca koji voli spoj modernog izgleda i klasične elegancije.",
    izdvojeno: false
},
{
    id: 71,
    naziv: "Olfazeta 318",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfem",
    slika: "slike/muski-parfem.png",
    opis: "Odvažan karakter za trenutke kada želiš da tvoja prisutnost govori sama za sebe.",
    izdvojeno: false
},
{
    id: 72,
    naziv: "Olfazeta 320",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfem",
    slika: "slike/muski-parfem.png",
    opis: "Dotjeran i moderan miris koji svakodnevnom stilu daje dodatnu dozu profinjenosti.",
    izdvojeno: false
},
{
    id: 73,
    naziv: "Olfazeta 321",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfem",
    slika: "slike/muski-parfem.png",
    opis: "Miris za muškarca koji ne traži pažnju, ali je svojom pojavom prirodno privlači.",
    izdvojeno: false
},
{
    id: 74,
    naziv: "Olfazeta 322",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfem",
    slika: "slike/muski-parfem.png",
    opis: "Sofisticiran izbor koji ostavlja dojam urednosti, stila i snažnog karaktera.",
    izdvojeno: false
},
{
    id: 75,
    naziv: "Olfazeta 330",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfem",
    slika: "slike/muski-parfem.png",
    opis: "Za muškarca koji voli miris koji može nositi od prvog jutarnjeg sastanka do kasne večeri.",
    izdvojeno: false
},
{
    id: 76,
    naziv: "Olfazeta 331",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfem",
    slika: "slike/muski-parfem.png",
    opis: "Elegantan karakter s dozom tajanstvenosti za muškarca koji ne otkriva sve na prvi pogled.",
    izdvojeno: false
},
{
    id: 77,
    naziv: "Olfazeta 332",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfem",
    slika: "slike/muski-parfem.png",
    opis: "Snažna osobnost pretočena u mirisni dojam koji se pamti i nakon što odeš.",
    izdvojeno: false
},
{
    id: 78,
    naziv: "Olfazeta 333",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfem",
    slika: "slike/muski-parfem.png",
    opis: "Muški miris modernog duha za svakoga tko voli uredan, samouvjeren i upečatljiv nastup.",
    izdvojeno: false
},
{
    id: 79,
    naziv: "Olfazeta 337",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfem",
    slika: "slike/muski-parfem.png",
    opis: "Profinjen izbor za posebne prilike kada želiš ostaviti ozbiljan i elegantan dojam.",
    izdvojeno: false
},
{
    id: 80,
    naziv: "Olfazeta 338",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfem",
    slika: "slike/muski-parfem.png",
    opis: "Miris koji prati snažan stav i daje završni detalj muškom stilu.",
    izdvojeno: false
},
{
    id: 81,
    naziv: "Olfazeta 348",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfem",
    slika: "slike/muski-parfem.png",
    opis: "Upečatljiv bez potrebe za pretjerivanjem – za muškarca koji bira kvalitetan i dotjeran dojam.",
    izdvojeno: false
},
{
    id: 82,
    naziv: "Olfazeta 160M",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfem",
    slika: "slike/muski-parfem.png",
    opis: "Miris za muškarca koji spaja opuštenost, sigurnost i prirodan osjećaj za stil.",
    izdvojeno: false
},
{
    id: 83,
    naziv: "Olfazeta 352",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfem",
    slika: "slike/muski-parfem.png",
    opis: "Od dnevnih obaveza do večernjeg izlaska, ovaj miris prati tempo modernog muškarca.",
    izdvojeno: false
},
{
    id: 84,
    naziv: "Olfazeta 361",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfem",
    slika: "slike/muski-parfem.png",
    opis: "Samouvjeren i profinjen mirisni potpis za muškarca koji zna vrijednost dobrog prvog dojma.",
    izdvojeno: false
},
{
    id: 85,
    naziv: "Olfazeta 362",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfem",
    slika: "slike/muski-parfem.png",
    opis: "Jednostavan, moderan i karakteran izbor koji lako postaje dio svakodnevnog stila.",
    izdvojeno: false
},
{
    id: 86,
    naziv: "Olfazeta 3157M",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfem",
    slika: "slike/muski-parfem.png",
    opis: "Doza elegancije i muževnog karaktera za trenutke kada želiš ostaviti snažan dojam.",
    izdvojeno: false
},
{
    id: 87,
    naziv: "Olfazeta 368",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfem",
    slika: "slike/muski-parfem.png",
    opis: "Miris za muškarca kojem nisu potrebni veliki potezi da bi pokazao samopouzdanje.",
    izdvojeno: false
},
{
    id: 88,
    naziv: "Olfazeta 373",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfem",
    slika: "slike/muski-parfem.png",
    opis: "Privlačan i elegantan karakter za večeri, izlaske i prilike u kojima želiš nešto posebno.",
    izdvojeno: false
},
{
    id: 89,
    naziv: "Olfazeta 3113",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfem",
    slika: "slike/muski-parfem.png",
    opis: "Moderan mirisni potpis koji spaja samopouzdanje, stil i nenametljivu eleganciju.",
    izdvojeno: false
},
{
    id: 90,
    naziv: "Olfazeta 3136",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfem",
    slika: "slike/muski-parfem.png",
    opis: "Za muškarca koji voli biti svoj – karakteran, dotjeran i spreman ostaviti trag.",
    izdvojeno: false
},
{
    id: 91,
    naziv: "Olfazeta 3140",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfem",
    slika: "slike/muski-parfem.png",
    opis: "Miris koji svakom izdanju dodaje ozbiljnost, eleganciju i dozu muškog šarma.",
    izdvojeno: false
},
{
    id: 92,
    naziv: "Olfazeta 3147",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfem",
    slika: "slike/muski-parfem.png",
    opis: "Samouvjeren izbor za muškarca koji cijeni profinjenost, ali voli zadržati odvažan karakter.",
    izdvojeno: false
},
{
    id: 93,
    naziv: "Olfazeta 3162M",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfem",
    slika: "slike/muski-parfem.png",
    opis: "Uredan i sofisticiran mirisni dojam koji pristaje muškarcu s jasnim osjećajem za stil.",
    izdvojeno: false
},
{
    id: 94,
    naziv: "Olfazeta 3164M",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfem",
    slika: "slike/muski-parfem.png",
    opis: "Završni detalj za muškarca koji želi spojiti eleganciju, karakter i samopouzdanje u jednom mirisu.",
    izdvojeno: false
},

{
    id: 95,
    naziv: "Olfazeta 3444",
    kategorija: "unisex",
    kategorijaNaziv: "Unisex parfem",
    slika: "slike/unisex-parfem.png",
    opis: "Moderan miris bez granica, stvoren za svakoga tko voli izražajan i samouvjeren stil.",
    izdvojeno: false
},
{
    id: 96,
    naziv: "Olfazeta 3155U",
    kategorija: "unisex",
    kategorijaNaziv: "Unisex parfem",
    slika: "slike/unisex-parfem.png",
    opis: "Profinjen izbor koji spaja eleganciju i suvremeni karakter u mirisu za svaki trenutak.",
    izdvojeno: false
},
{
    id: 97,
    naziv: "Olfazeta 360",
    kategorija: "unisex",
    kategorijaNaziv: "Unisex parfem",
    slika: "slike/unisex-parfem.png",
    opis: "Miris za one koji ne vole pravila – upečatljiv, moderan i spreman pratiti vlastiti stil.",
    izdvojeno: false
},
{
    id: 98,
    naziv: "Olfazeta 366",
    kategorija: "unisex",
    kategorijaNaziv: "Unisex parfem",
    slika: "slike/unisex-parfem.png",
    opis: "Elegantan mirisni potpis koji jednako dobro pristaje opuštenim danima i posebnim večerima.",
    izdvojeno: false
},
{
    id: 99,
    naziv: "Olfazeta 369",
    kategorija: "unisex",
    kategorijaNaziv: "Unisex parfem",
    slika: "slike/unisex-parfem.png",
    opis: "Karakteran i privlačan izbor za svakoga tko želi miris koji se izdvaja iz svakodnevice.",
    izdvojeno: false
},
{
    id: 100,
    naziv: "Olfazeta 399",
    kategorija: "unisex",
    kategorijaNaziv: "Unisex parfem",
    slika: "slike/unisex-parfem.png",
    opis: "Samouvjeren miris za osobe koje vole jednostavnost, stil i dozu tajanstvenosti.",
    izdvojeno: false
},
{
    id: 101,
    naziv: "Olfazeta 3100",
    kategorija: "unisex",
    kategorijaNaziv: "Unisex parfem",
    slika: "slike/unisex-parfem.png",
    opis: "Suvremen i profinjen miris koji se prilagođava tvojem stilu, raspoloženju i trenutku.",
    izdvojeno: false
},
{
    id: 102,
    naziv: "Olfazeta 3105",
    kategorija: "unisex",
    kategorijaNaziv: "Unisex parfem",
    slika: "slike/unisex-parfem.png",
    opis: "Miris s osobnošću za one koji žele ostaviti dojam bez potrebe da budu poput drugih.",
    izdvojeno: false
},
{
    id: 103,
    naziv: "Olfazeta 3110",
    kategorija: "unisex",
    kategorijaNaziv: "Unisex parfem",
    slika: "slike/unisex-parfem.png",
    opis: "Minimalistički, elegantan i upečatljiv izbor koji lako postaje dio svakodnevnog stila.",
    izdvojeno: false
},
{
    id: 104,
    naziv: "Olfazeta 3135",
    kategorija: "unisex",
    kategorijaNaziv: "Unisex parfem",
    slika: "slike/unisex-parfem.png",
    opis: "Za one koji biraju miris prema karakteru, a ne pravilima – moderan, elegantan i poseban.",
    izdvojeno: false
},
{
    id: 105,
    naziv: "Olfazeta 3142",
    kategorija: "unisex",
    kategorijaNaziv: "Unisex parfem",
    slika: "slike/unisex-parfem.png",
    opis: "Svestran mirisni potpis s dozom elegancije za svaki dan, svaku priliku i svaki stil.",
    izdvojeno: false
},

{
    id: 106,
    naziv: "Olfazeta Luxury 074",
    kategorija: "luksuzni",
    kategorijaNaziv: "Luksuzni parfem",
    slika: "slike/luxury-074.png",
    opis: "Ekskluzivan miris za one koji traže nešto više od svakodnevnog parfema. Olfazeta Luxury 074 odiše prestižem, karakterom i profinjenim stilom.",
    izdvojeno: false
},
{
    id: 106,
    naziv: "Olfazeta Luxury 074",
    kategorija: "luksuzni",
    kategorijaNaziv: "Luksuzni parfem",
    slika: "slike/luxury-074.png",
    opis: "Ekskluzivan miris za one koji traže nešto više od svakodnevnog parfema. Elegantan karakter i luksuzan dojam u svakom trenutku.",
    izdvojeno: false
},
{
    id: 107,
    naziv: "Olfazeta Luxury 075",
    kategorija: "luksuzni",
    kategorijaNaziv: "Luksuzni parfem",
    slika: "slike/luxury-074.png",
    opis: "Sofisticiran mirisni potpis namijenjen onima koji cijene profinjenost, stil i posebnost.",
    izdvojeno: false
},
{
    id: 108,
    naziv: "Olfazeta Luxury 102",
    kategorija: "luksuzni",
    kategorijaNaziv: "Luksuzni parfem",
    slika: "slike/luxury-074.png",
    opis: "Miris luksuznog karaktera koji upotpunjuje elegantan stil i ostavlja upečatljiv dojam.",
    izdvojeno: false
},
{
    id: 109,
    naziv: "Olfazeta Luxury 130",
    kategorija: "luksuzni",
    kategorijaNaziv: "Luksuzni parfem",
    slika: "slike/luxury-074.png",
    opis: "Odvažan i profinjen izbor za posebne trenutke u kojima želiš da tvoj miris govori umjesto tebe.",
    izdvojeno: false
},
{
    id: 110,
    naziv: "Olfazeta Luxury 134",
    kategorija: "luksuzni",
    kategorijaNaziv: "Luksuzni parfem",
    slika: "slike/luxury-074.png",
    opis: "Elegancija pretočena u miris – stvoren za one koji vole ekskluzivan i dotjeran mirisni potpis.",
    izdvojeno: false
},
{
    id: 111,
    naziv: "Olfazeta Luxury 138",
    kategorija: "luksuzni",
    kategorijaNaziv: "Luksuzni parfem",
    slika: "slike/luxury-074.png",
    opis: "Poseban miris za posebne prilike, s karakterom koji donosi osjećaj luksuza i samopouzdanja.",
    izdvojeno: false
},
{
    id: 113,
    naziv: "Olfazeta Luxury 109",
    kategorija: "luksuzni",
    kategorijaNaziv: "Luksuzni parfem",
    slika: "slike/luxury-101.png",
    opis: "Profinjen luksuzni miris za one koji vole elegantan stil i upečatljiv mirisni potpis.",
    izdvojeno: false
},
{
    id: 114,
    naziv: "Olfazeta Luxury 111",
    kategorija: "luksuzni",
    kategorijaNaziv: "Luksuzni parfem",
    slika: "slike/luxury-101.png",
    opis: "Ekskluzivan izbor koji svakom trenutku daje dozu sofisticiranosti i posebnog karaktera.",
    izdvojeno: false
},
{
    id: 115,
    naziv: "Olfazeta Luxury 112",
    kategorija: "luksuzni",
    kategorijaNaziv: "Luksuzni parfem",
    slika: "slike/luxury-101.png",
    opis: "Miris stvoren za one koji žele spoj elegancije, samopouzdanja i luksuznog dojma.",
    izdvojeno: false
},
{
    id: 116,
    naziv: "Olfazeta Luxury 123",
    kategorija: "luksuzni",
    kategorijaNaziv: "Luksuzni parfem",
    slika: "slike/luxury-101.png",
    opis: "Poseban mirisni potpis za trenutke kada želiš nešto profinjeno, moderno i nezaboravno.",
    izdvojeno: false
},
{
    id: 117,
    naziv: "Olfazeta Luxury 137",
    kategorija: "luksuzni",
    kategorijaNaziv: "Luksuzni parfem",
    slika: "slike/luxury-101.png",
    opis: "Doza luksuza za svaki dan, namijenjena onima koji cijene detalje i elegantan osobni stil.",
    izdvojeno: false
},
{
    id: 118,
    naziv: "Olfazeta Luxury 139",
    kategorija: "luksuzni",
    kategorijaNaziv: "Luksuzni parfem",
    slika: "slike/luxury-101.png",
    opis: "Odvažan i sofisticiran miris koji ostavlja snažan dojam bez potrebe za pretjerivanjem.",
    izdvojeno: false
},
{
    id: 119,
    naziv: "Olfazeta Luxury 143",
    kategorija: "luksuzni",
    kategorijaNaziv: "Luksuzni parfem",
    slika: "slike/luxury-101.png",
    opis: "Elegantan miris za posebne prilike i trenutke u kojima želiš istaknuti svoj jedinstveni stil.",
    izdvojeno: false
},
{
    id: 120,
    naziv: "Olfazeta Luxury 144",
    kategorija: "luksuzni",
    kategorijaNaziv: "Luksuzni parfem",
    slika: "slike/luxury-101.png",
    opis: "Luksuzan završni detalj koji spaja profinjenost, karakter i osjećaj ekskluzivnosti.",
    izdvojeno: false
},
{
    id: 121,
    naziv: "Olfazeta Luxury 106",
    kategorija: "luksuzni",
    kategorijaNaziv: "Luksuzni parfem",
    slika: "slike/luxury-106.png",
    opis: "Raskošan mirisni izbor koji odiše prestižem i sofisticiranošću. Stvoren za trenutke kada želiš ostaviti snažan i nezaboravan dojam.",
    izdvojeno: false
},
{
    id: 122,
    naziv: "Olfazeta Luxury 117",
    kategorija: "luksuzni",
    kategorijaNaziv: "Luksuzni parfem",
    slika: "slike/luxury-106.png",
    opis: "Raskošan mirisni potpis za one koji vole luksuz, eleganciju i prisutnost koja se pamti.",
    izdvojeno: false
},
{
    id: 123,
    naziv: "Olfazeta Luxury 124",
    kategorija: "luksuzni",
    kategorijaNaziv: "Luksuzni parfem",
    slika: "slike/luxury-106.png",
    opis: "Ekskluzivan izbor koji svakom pojavljivanju daje profinjen i samouvjeren završni detalj.",
    izdvojeno: false
},
{
    id: 124,
    naziv: "Olfazeta Luxury 126",
    kategorija: "luksuzni",
    kategorijaNaziv: "Luksuzni parfem",
    slika: "slike/luxury-106.png",
    opis: "Miris luksuznog karaktera namijenjen onima koji žele nešto posebno, elegantno i upečatljivo.",
    izdvojeno: false
},
{
    id: 125,
    naziv: "Olfazeta Luxury 127",
    kategorija: "luksuzni",
    kategorijaNaziv: "Luksuzni parfem",
    slika: "slike/luxury-106.png",
    opis: "Odvažan mirisni izbor koji spaja sofisticiranost s dozom prestiža za nezaboravan dojam.",
    izdvojeno: false
},
{
    id: 126,
    naziv: "Olfazeta Luxury 128",
    kategorija: "luksuzni",
    kategorijaNaziv: "Luksuzni parfem",
    slika: "slike/luxury-106.png",
    opis: "Stvoren za posebne trenutke u kojima želiš naglasiti svoj stil i ostaviti elegantan mirisni trag.",
    izdvojeno: false
},
{
    id: 127,
    naziv: "Olfazeta Luxury 141",
    kategorija: "luksuzni",
    kategorijaNaziv: "Luksuzni parfem",
    slika: "slike/luxury-106.png",
    opis: "Spoj luksuznog dojma i modernog karaktera za one koji biraju miris jednako pažljivo kao i svoj stil.",
    izdvojeno: false
},
{
    id: 128,
    naziv: "Olfazeta Luxury 118",
    kategorija: "luksuzni",
    kategorijaNaziv: "Luksuzni parfem",
    slika: "slike/luxury-118.png",
    opis: "Odvažan luksuzni miris za one koji vole snažan karakter, profinjen stil i dojam koji se dugo pamti.",
    izdvojeno: false
},
{
    id: 129,
    naziv: "Olfazeta Luxury 146",
    kategorija: "luksuzni",
    kategorijaNaziv: "Luksuzni parfem",
    slika: "slike/luxury-118.png",
    opis: "Elegantan i upečatljiv mirisni izbor koji spaja ekskluzivnost, samopouzdanje i moderan luksuz.",
    izdvojeno: false
},
{
    id: 130,
    naziv: "Olfazeta Luxury 125",
    kategorija: "luksuzni",
    kategorijaNaziv: "Luksuzni parfem",
    slika: "slike/luxury-125.png",
    opis: "Upečatljiv luksuzni miris modernog karaktera, stvoren za one koji vole eleganciju s dozom odvažnosti.",
    izdvojeno: false
},
{
    id: 131,
    naziv: "Olfazeta Luxury 129",
    kategorija: "luksuzni",
    kategorijaNaziv: "Luksuzni parfem",
    slika: "slike/luxury-125.png",
    opis: "Ekskluzivan mirisni izbor koji ostavlja dojam profinjenosti, samopouzdanja i jedinstvenog osobnog stila.",
    izdvojeno: false
},

// ==========================================
// MIRISNE SVIJEĆE
// ==========================================

{
    id: 132,
    naziv: "ROSÉA – Ruža i cimet",
    kategorija: "svijece",
    kategorijaNaziv: "Mirisne svijeće",
    slika: "slike/svijeca-rosea.jpg",
    opis: "Ruža i cimet. Elegantan miris koji spaja profinjenost ruže sa začinskom slatkoćom cimeta. Dostupna u veličinama 400 g (COPC001) i 190 g (COPC002).",
    izdvojeno: false
},
{
    id: 133,
    naziv: "MUSKÉ – Bijeli mošus",
    kategorija: "svijece",
    kategorijaNaziv: "Mirisne svijeće",
    slika: "slike/svijeca-muske.jpg",
    opis: "Bijeli mošus. Zavodljiv miris koji spaja čistoću bijelog mošusa sa slatkim i začinskim notama. Dostupna u veličinama 400 g (COPC003) i 190 g (COPC004).",
    izdvojeno: false
},
{
    id: 134,
    naziv: "LAVÉA – Baršunasta lavanda",
    kategorija: "svijece",
    kategorijaNaziv: "Mirisne svijeće",
    slika: "slike/svijeca-lavea.jpg",
    opis: "Baršunasta lavanda. Umirujući miris lavande za osjećaj mira i harmonije. Dostupna u veličinama 400 g (COPC005) i 190 g (COPC006).",
    izdvojeno: false
},
{
    id: 135,
    naziv: "MÉLIA – Med i jasmin",
    kategorija: "svijece",
    kategorijaNaziv: "Mirisne svijeće",
    slika: "slike/svijeca-melia.jpg",
    opis: "Med i jasmin. Topao miris koji prostoru daje ugodnu i živopisnu atmosferu. Dostupna u veličinama 400 g (COPC007) i 190 g (COPC008).",
    izdvojeno: false
},
{
    id: 136,
    naziv: "NOIRÉ – Slatko drvo",
    kategorija: "svijece",
    kategorijaNaziv: "Mirisne svijeće",
    slika: "slike/svijeca-noire.jpg",
    opis: "Slatko drvo. Topao i elegantan miris za profinjenu i uravnoteženu atmosferu. Dostupna u veličinama 400 g (COPC009) i 190 g (COPC010).",
    izdvojeno: false
},
{
    id: 137,
    naziv: "Extra-LipStay – Purple Mocha",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/extra-lipstay-purple-mocha.jpg",
    opis: "Automatska olovka za usne MoniAmori s baršunastim završetkom, kremastom teksturom i dugotrajnom vodootpornom formulom. Nijansa Purple Mocha.",
    izdvojeno: false
},
{
    id: 138,
    naziv: "Extra-LipStay – Berry Kiss",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/extra-lipstay-berry-kiss.jpg",
    opis: "Automatska olovka za usne MoniAmori za precizno definiranje usana. Veganska i vodootporna formula. Nijansa Berry Kiss.",
    izdvojeno: false
},
{
    id: 139,
    naziv: "Extra-LipStay – Royal Mauve",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/extra-lipstay-royal-mauve.png",
    opis: "Kremasta automatska olovka za usne s bogatom bojom i baršunastim završetkom. Nijansa Royal Mauve.",
    izdvojeno: false
},
{
    id: 140,
    naziv: "Extra-LipStay – Dark Cocoa",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/extra-lipstay-dark-cocoa.jpg",
    opis: "Dugotrajna automatska olovka za usne s mekanom teksturom za precizne konture. Nijansa Dark Cocoa.",
    izdvojeno: false
},
{
    id: 141,
    naziv: "Extra-LipStay – Chili Love",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/extra-lipstay-chili-love.jpg",
    opis: "Automatska olovka za usne MoniAmori s baršunastim završetkom. Nijansa Chili Love.",
    izdvojeno: false
},
{
    id: 142,
    naziv: "Extra-LipStay – Chic Peach",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/extra-lipstay-chic-peach.jpg",
    opis: "Kremasta olovka za precizno definiranje i naglašavanje usana. Nijansa Chic Peach.",
    izdvojeno: false
},
{
    id: 143,
    naziv: "Extra-LipStay – Pinky Doll",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/extra-lipstay-pinky-doll.jpg",
    opis: "Automatska olovka za usne s bogatom bojom i dugotrajnim učinkom. Nijansa Pinky Doll.",
    izdvojeno: false
},
{
    id: 144,
    naziv: "Extra-LipStay – Ruby Flame",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/extra-lipstay-ruby-flame.jpg",
    opis: "MoniAmori automatska olovka za usne s mekanom i kremastom teksturom. Nijansa Ruby Flame.",
    izdvojeno: false
},
{
    id: 145,
    naziv: "Extra-LipStay – Toffee Nude",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/extra-lipstay-toffee-nude.jpg",
    opis: "Automatska olovka za usne za precizne konture i elegantan baršunasti završetak. Nijansa Toffee Nude.",
    izdvojeno: false
},
{
    id: 146,
    naziv: "Extra-LipStay – Blush Sand",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/extra-lipstay-blush-sand.jpg",
    opis: "Kremasta automatska olovka za usne s dugotrajnom formulom. Nijansa Blush Sand.",
    izdvojeno: false
},
{
    id: 147,
    naziv: "Extra-LipStay – Dusty Rose",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/extra-lipstay-dusty-rose.jpg",
    opis: "Automatska olovka za usne s baršunastim završetkom i bogatom bojom. Nijansa Dusty Rose.",
    izdvojeno: false
},
{
    id: 148,
    naziv: "Extra-LipStay – Velvet Taupe",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/extra-lipstay-velvet-taupe.jpg",
    opis: "MoniAmori automatska olovka za usne s mekanom teksturom i preciznim nanošenjem. Nijansa Velvet Taupe.",
    izdvojeno: false
},
{
    id: 149,
    naziv: "MoniAmori Supreme Lip Treatment – Malina",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/supreme-lip-treatment-malina.jpg",
    opis: "Intenzivni višenamjenski tretman za usne s mirisom maline. Kremasta veganska formula hidratizira, omekšava i štiti usne te im daje sjajan i njegovan izgled.",
    izdvojeno: false
},
{
    id: 150,
    naziv: "MoniAmori Supreme Lip Treatment – Jagoda",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/supreme-lip-treatment-jagoda.jpg",
    opis: "Intenzivni tretman za usne s mirisom jagode. Kremasta veganska formula pruža dugotrajnu hidrataciju, ugodu i sjajan završetak.",
    izdvojeno: false
},
{
    id: 151,
    naziv: "MoniAmori Supreme Lip Treatment – Vanilija",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/supreme-lip-treatment-vanilija.jpg",
    opis: "Njegujući tretman za usne s mirisom vanilije, namijenjen hidrataciji, omekšavanju i zaštiti usana.",
    izdvojeno: false
},
{
    id: 152,
    naziv: "Neutralni balzam za usne",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/neutralni-balzam-za-usne.jpg",
    opis: "Prirodni hidratantni balzam za svakodnevnu njegu usana. Pomaže održati usne mekanima, njegovanima i hidratiziranima. 4,5 ml.",
    izdvojeno: false
},
{
    id: 153,
    naziv: "LOLLILIP – Salty Caramel",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/lollilip-salty-caramel.jpg",
    opis: "Njegujući proizvod za usne Aurodhea u varijanti Salty Caramel, stvoren za mekane, njegovane i hidratizirane usne.",
    izdvojeno: false
},
{
    id: 154,
    naziv: "LOLLILIP – Spiced Cookie",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/lollilip-spiced-cookie.jpg",
    opis: "Njegujući proizvod za usne Aurodhea u varijanti Spiced Cookie, za ugodan osjećaj te mekane i njegovane usne.",
    izdvojeno: false
},
{
    id: 155,
    naziv: "Spicy Gloss – Extra Volume",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/spicy-gloss-extra-volume.jpg",
    opis: "Sjajilo za usne s efektom dodatnog volumena. Naglašava usne sjajnim završetkom i punijim izgledom. 7 ml.",
    izdvojeno: false
},
{
    id: 156,
    naziv: "Mat tekući ruž – Red Velvet",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/mat-tekuci-ruz-red-velvet.jpg",
    opis: "Mat tekući ruž intenzivne boje i visoke pokrivne moći. Lagana formula pruža gladak, postojan i elegantan mat završetak.",
    izdvojeno: false
},
{
    id: 157,
    naziv: "Mat tekući ruž – Ruby",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/mat-tekuci-ruz-ruby.jpg",
    opis: "Intenzivno pigmentirani tekući ruž u nijansi Ruby s dugotrajnim mat završetkom.",
    izdvojeno: false
},
{
    id: 158,
    naziv: "Mat tekući ruž – Magenta",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/mat-tekuci-ruz-magenta.jpg",
    opis: "Mat tekući ruž bogate Magenta nijanse. Pruža intenzivnu boju, visoku pokrivenost i dugotrajan završetak.",
    izdvojeno: false
},
{
    id: 159,
    naziv: "Mat tekući ruž – Dark Plum",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/mat-tekuci-ruz-dark-plum.jpg",
    opis: "Mat tekući ruž u dubokoj Dark Plum nijansi s intenzivnom pigmentacijom i elegantnim mat završetkom.",
    izdvojeno: false
},
{
    id: 160,
    naziv: "Dugotrajni mat tekući ruž – Bold Pink",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/mat-tekuci-ruz-bold-pink.jpg",
    opis: "Dugotrajni mat tekući ruž u izražajnoj Bold Pink nijansi. Pruža bogatu pokrivenost, brzo se suši i ostavlja gladak mat završetak.",
    izdvojeno: false
},
{
    id: 161,
    naziv: "Mat tekući ruž – First Magenta",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/mat-tekuci-ruz-first-magenta.jpg",
    opis: "Tekući ruž intenzivne First Magenta nijanse s laganom formulom, potpunom pokrivenošću i dugotrajnom bojom.",
    izdvojeno: false
},
{
    id: 162,
    naziv: "Mat tekući ruž – Coral Red",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/mat-tekuci-ruz-coral-red.jpg",
    opis: "Mat tekući ruž u Coral Red nijansi. Intenzivna pigmentacija i lagana tekstura pružaju potpunu pokrivenost i dugotrajan rezultat.",
    izdvojeno: false
},
{
    id: 163,
    naziv: "Mat tekući ruž – Dark Mauve",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/mat-tekuci-ruz-dark-mauve.jpg",
    opis: "Tekući mat ruž u elegantnoj Dark Mauve nijansi s intenzivnom bojom, mekom teksturom i dugotrajnim završetkom.",
    izdvojeno: false
},
{
    id: 164,
    naziv: "Mat tekući ruž – Light Rose",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/mat-tekuci-ruz-light-rose.jpg",
    opis: "Mat tekući ruž intenzivne i pokrivne boje. Lagana i mekana formula pruža dugotrajan mat završetak i precizno nanošenje. Nijansa Light Rose.",
    izdvojeno: false
},
{
    id: 165,
    naziv: "Mat ruž za usne – Unique Rose",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/mat-ruz-unique-rose.jpg",
    opis: "Kremasti mat ruž koji se lako nanosi i ostavlja gladak, baršunast sloj na usnama. Pruža udobnost i hidrataciju uz elegantan mat završetak. 5 g.",
    izdvojeno: false
},
{
    id: 166,
    naziv: "Mat ruž za usne – Raspberry",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/mat-ruz-raspberry.jpg",
    opis: "Mat ruž kremaste teksture u nijansi Raspberry. Pruža glatku i baršunastu boju te ugodan osjećaj na usnama. 5 g.",
    izdvojeno: false
},
{
    id: 167,
    naziv: "Mat ruž za usne – Watermelon",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/mat-ruz-watermelon.jpg",
    opis: "Mat ruž za usne u nijansi Watermelon. Lagana i kremasta formula pruža glatku boju, udobnost i precizno nanošenje. 5 g.",
    izdvojeno: false
},
{
    id: 168,
    naziv: "Sjajni ruž za usne – Azalea",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/sjajni-ruz-azalea.jpg",
    opis: "Sjajni ruž kremaste teksture u nijansi Azalea. Lako se nanosi te ostavlja prirodan, blistav i postojan sloj na usnama. 5 g.",
    izdvojeno: false
},
{
    id: 169,
    naziv: "Sjajni ruž za usne – Dark Nude",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/sjajni-ruz-dark-nude.jpg",
    opis: "Sjajni ruž za usne u elegantnoj Dark Nude nijansi s kremastom teksturom i blistavim završetkom.",
    izdvojeno: false
},
{
    id: 170,
    naziv: "Sjajni ruž za usne – Magenta",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/sjajni-ruz-magenta.jpg",
    opis: "Sjajni ruž intenzivne Magenta nijanse koji usnama pruža bogatu boju i blistav završni izgled.",
    izdvojeno: false
},
{
    id: 171,
    naziv: "Sjajni ruž za usne – Strawberry",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/sjajni-ruz-strawberry.jpg",
    opis: "Sjajni ruž za usne u Strawberry nijansi. Kremasta tekstura pruža ugodan osjećaj, intenzivnu boju i sjajan završetak.",
    izdvojeno: false
},
{
    id: 172,
    naziv: "Mat tekući ruž – Cyclamen",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/mat-tekuci-ruz-cyclamen.jpg",
    opis: "Mat tekući ruž intenzivne i izuzetno pokrivne boje. Mekana i lagana formula pruža dugotrajnu boju otpornu na poljupce. Nijansa Cyclamen.",
    izdvojeno: false
},
{
    id: 173,
    naziv: "Mat tekući ruž – Poppy Red",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/mat-tekuci-ruz-poppy-red.jpg",
    opis: "Mat tekući ruž bogate Poppy Red nijanse s intenzivnom pigmentacijom, potpunom pokrivenošću i dugotrajnim završetkom.",
    izdvojeno: false
},
{
    id: 174,
    naziv: "Mat tekući ruž – Peach",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/mat-tekuci-ruz-peach.jpg",
    opis: "Mat tekući ruž u Peach nijansi. Mekana i lagana formula pruža intenzivnu boju, potpunu pokrivenost i dugotrajan rezultat.",
    izdvojeno: false
},
{
    id: 175,
    naziv: "Mat tekući ruž – Rosy Hibiscus",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/mat-tekuci-ruz-rosy-hibiscus.jpg",
    opis: "Mat tekući ruž u Rosy Hibiscus nijansi s intenzivnom bojom i laganom formulom koja pruža potpunu pokrivenost.",
    izdvojeno: false
},
{
    id: 176,
    naziv: "Mat tekući ruž – Rosé Biscuit",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/mat-tekuci-ruz-rose-biscuit.jpg",
    opis: "Mat tekući ruž u elegantnoj Rosé Biscuit nijansi. Pruža intenzivnu, dugotrajnu boju i mekan osjećaj na usnama.",
    izdvojeno: false
},
{
    id: 177,
    naziv: "Mat tekući ruž – Raspberry Red",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/mat-tekuci-ruz-raspberry-red.jpg",
    opis: "Mat tekući ruž u Raspberry Red nijansi s visokom pokrivnom moći i dugotrajnom bojom otpornom na poljupce.",
    izdvojeno: false
},
{
    id: 178,
    naziv: "Mat tekući ruž – Rosy Brown",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/mat-tekuci-ruz-rosy-brown.jpg",
    opis: "Mat tekući ruž u Rosy Brown nijansi. Lagana formula pruža bogatu pigmentaciju, potpunu pokrivenost i dugotrajan završetak.",
    izdvojeno: false
},
{
    id: 179,
    naziv: "Mat tekući ruž – Fire Red",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/mat-tekuci-ruz-fire-red.jpg",
    opis: "Mat tekući ruž u upečatljivoj Fire Red nijansi s intenzivnom bojom i dugotrajnim mat završetkom.",
    izdvojeno: false
},
{
    id: 180,
    naziv: "Mat tekući ruž – Peony",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/mat-tekuci-ruz-peony.jpg",
    opis: "Mat tekući ruž u Peony nijansi s mekanom i laganom formulom koja pruža intenzivnu i dugotrajnu boju.",
    izdvojeno: false
},
{
    id: 181,
    naziv: "Mat tekući ruž – Cherry",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/mat-tekuci-ruz-cherry.jpg",
    opis: "Mat tekući ruž u Cherry nijansi. Intenzivna pigmentacija pruža potpunu pokrivenost i dugotrajan mat završetak.",
    izdvojeno: false
},
{
    id: 182,
    naziv: "Sjajni ruž za usne – Koraljni",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/sjajni-ruz-koraljni.jpg",
    opis: "Intenzivno pigmentirani sjajni ruž koji se lako nanosi i ostavlja prirodan, blistav i postojan sloj na usnama. Kremasta formula pruža ugodu i hidrataciju. 5 g.",
    izdvojeno: false
},
{
    id: 183,
    naziv: "Sjajni ruž za usne – Svijetlo Nude",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/sjajni-ruz-svijetlo-nude.jpg",
    opis: "Sjajni ruž u elegantnoj Svijetlo Nude nijansi. Kremasta tekstura topi se na usnama te pruža glatku boju, hidrataciju i blistav završetak. 5 g.",
    izdvojeno: false
},
{
    id: 184,
    naziv: "Sjajni ruž za usne – Trešnja",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/sjajni-ruz-tresnja.jpg",
    opis: "Intenzivno pigmentirani sjajni ruž u nijansi Trešnja. Lagana i kremasta formula pruža precizno nanošenje, ugodu i sjajan završni izgled. 5 g.",
    izdvojeno: false
},
{
    id: 185,
    naziv: "Sjajni ruž za usne – Candy Pink",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/sjajni-ruz-candy-pink.jpg",
    opis: "Sjajni ruž u Candy Pink nijansi koji usnama daje prirodan i blistav izgled. Kremasta formula pruža ugodu, hidrataciju i glatku boju.",
    izdvojeno: false
},
{
    id: 186,
    naziv: "MoniAmori Juicy Oil – Grožđe",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/moniamori-juicy-oil-grozde.png",
    opis: "Hranjivo ulje za usne s mirisom grožđa koje pruža intenzivan sjaj, udobnost i hidrataciju. Lagana i neljepljiva formula njeguje usne i daje im sočan, sjajan izgled.",
    izdvojeno: false
},
{
    id: 187,
    naziv: "MoniAmori Juicy Oil – Crna trešnja",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/moniamori-juicy-oil-crna-tresnja.png",
    opis: "Hranjivo ulje za usne s mirisom crne trešnje. Pruža sjaj i hidrataciju uz laganu, neljepljivu teksturu koja usne ostavlja mekanima i njegovanima.",
    izdvojeno: false
},
{
    id: 188,
    naziv: "MoniAmori Juicy Oil – Liči",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/moniamori-juicy-oil-lici.png",
    opis: "Hidratantno ulje za usne s mirisom ličija. Njegujuća formula daje usnama sjajan i sočan izgled te pomaže održati njihovu mekoću i hidrataciju.",
    izdvojeno: false
},
{
    id: 189,
    naziv: "MoniAmori Juicy Oil – Kokos",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/moniamori-juicy-oil-kokos.png",
    opis: "Hranjivo ulje za usne s mirisom kokosa. Lagana formula pruža intenzivan sjaj, ugodan osjećaj i njegu bez ljepljivog završetka.",
    izdvojeno: false
},
{
    id: 190,
    naziv: "MoniAmori Juicy Oil – Lubenica",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/moniamori-juicy-oil-lubenica.png",
    opis: "Hidratantno ulje za usne s mirisom lubenice. Njegujuća i neljepljiva formula pruža sjaj, mekoću i hidrataciju te naglašava prirodnu ljepotu usana.",
    izdvojeno: false
},
{
    id: 191,
    naziv: "Chogan Extra Plumping sjajilo za usne – Maxi format",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/chogan-extra-plumping-sjajilo.jpg",
    opis: "Kremasti i lagani gel-balzam koji naglašava prirodnu ljepotu usana. Njeguje, omekšava i revitalizira suhe usne te pruža trenutačni efekt punijeg izgleda i intenzivan sjaj. 7 ml.",
    izdvojeno: false
},
{
    id: 192,
    naziv: "MoniAmori MyLip Secret – Peel Off ruž",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/moniamori-mylip-secret.jpg",
    opis: "Dugotrajna peel-off tinta za usne s efektom tetovaže. Visokoučinkoviti pigmenti pružaju intenzivnu boju otpornu na razmazivanje, dok Aloe Vera i Pantenol pomažu hidratizirati i umiriti usne.",
    izdvojeno: false
},
{
    id: 193,
    naziv: "Olovka za oči – Wild Magenta",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/olovka-za-oci-wild-magenta.jpg",
    opis: "Olovka za oči u upečatljivoj Wild Magenta nijansi, idealna za naglašavanje očiju i kreiranje izražajnog make-up izgleda.",
    izdvojeno: false
},
{
    id: 194,
    naziv: "Olovka za oči – Soft Butter",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/olovka-za-oci-soft-butter.jpg",
    opis: "Olovka za oči u nježnoj Soft Butter nijansi, idealna za svijetle detalje i sofisticiran make-up izgled.",
    izdvojeno: false
},
{
    id: 195,
    naziv: "Olovka za oči – Crystal Blue",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/olovka-za-oci-crystal-blue.jpg",
    opis: "Olovka za oči u upečatljivoj Crystal Blue nijansi koja očima daje izražajan i moderan izgled.",
    izdvojeno: false
},
{
    id: 196,
    naziv: "Olovka za oči – Green Jungle",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/olovka-za-oci-green-jungle.jpg",
    opis: "Olovka za oči u intenzivnoj Green Jungle nijansi za naglašavanje pogleda i kreiranje kreativnih make-up kombinacija.",
    izdvojeno: false
},
{
    id: 197,
    naziv: "Olovka za oči – Midnight Blue",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/olovka-za-oci-midnight-blue.jpg",
    opis: "Olovka za oči u dubokoj Midnight Blue nijansi koja pruža elegantnu alternativu klasičnim tamnim tonovima.",
    izdvojeno: false
},
{
    id: 198,
    naziv: "Olovka za oči – Dark Truffle",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/olovka-za-oci-dark-truffle.jpg",
    opis: "Olovka za oči u elegantnoj Dark Truffle nijansi, prikladna za svakodnevni i večernji make-up.",
    izdvojeno: false
},
{
    id: 199,
    naziv: "Olovka za oči – Silver Moon",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/olovka-za-oci-silver-moon.jpg",
    opis: "Olovka za oči u Silver Moon nijansi za svjetlucave detalje i efektno naglašavanje pogleda.",
    izdvojeno: false
},
{
    id: 200,
    naziv: "Olovka za oči – Bold Orchid",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/olovka-za-oci-bold-orchid.jpg",
    opis: "Olovka za oči u odvažnoj Bold Orchid nijansi za intenzivan, moderan i upečatljiv make-up izgled.",
    izdvojeno: false
},
{
    id: 201,
    naziv: "Paleta sjenila za oči – Summer Breeze",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/paleta-sjenila-summer-breeze.jpg",
    opis: "Paleta s 9 sjenila za oči intenzivnih boja i efektnog završetka. Visoko pigmentirana kremasta tekstura stapa se s kapcima i pruža dugotrajnu boju te profesionalan rezultat već pri prvom nanošenju. 18 g.",
    izdvojeno: false
},
{
    id: 202,
    naziv: "SHINY kompaktno sjenilo – Black",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/shiny-sjenilo-black.jpg",
    opis: "Visoko pigmentirano kompaktno sjenilo svilenkaste i lagane teksture. Pruža čistu, ujednačenu i dugotrajnu boju s blistavim reflektirajućim završetkom. 3 g.",
    izdvojeno: false
},
{
    id: 203,
    naziv: "SHINY kompaktno sjenilo – Pearl Tiffany",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/shiny-sjenilo-pearl-tiffany.jpg",
    opis: "Visoko pigmentirano kompaktno sjenilo svilenkaste teksture koje pruža ravnomjernu i dugotrajnu boju s blistavim reflektirajućim završetkom. 3 g.",
    izdvojeno: false
},
{
    id: 204,
    naziv: "SHINY kompaktno sjenilo – Pearl Lilac",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/shiny-sjenilo-pearl-lilac.jpg",
    opis: "Kompaktno sjenilo visoke pigmentacije u Pearl Lilac nijansi. Lagana i svilenkasta tekstura pruža dugotrajnu pokrivenost i blistav završetak. 3 g.",
    izdvojeno: false
},
{
    id: 205,
    naziv: "SHINY kompaktno sjenilo – Teal",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/shiny-sjenilo-teal.jpg",
    opis: "Visoko pigmentirano kompaktno sjenilo u Teal nijansi koje pruža čistu i ujednačenu boju te blistav, reflektirajući završetak. 3 g.",
    izdvojeno: false
},
{
    id: 206,
    naziv: "SHINY kompaktno sjenilo – Pearl Grey",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/shiny-sjenilo-pearl-grey.jpg",
    opis: "Svilenkasto kompaktno sjenilo u Pearl Grey nijansi s visokom pigmentacijom i dugotrajnom pokrivenošću. Stvara elegantan blistavi završetak. 3 g.",
    izdvojeno: false
},
{
    id: 207,
    naziv: "SHINY kompaktno sjenilo – White",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/shiny-sjenilo-white.jpg",
    opis: "Visoko pigmentirano SHINY sjenilo u White nijansi. Lagana tekstura dobro prianja uz kapak i pruža blistav, reflektirajući završetak. 3 g.",
    izdvojeno: false
},
{
    id: 208,
    naziv: "SHINY kompaktno sjenilo – Dark Brown",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/shiny-sjenilo-dark-brown.jpg",
    opis: "Kompaktno sjenilo u Dark Brown nijansi s visokom pigmentacijom, svilenkastom teksturom i dugotrajnom pokrivenošću. 3 g.",
    izdvojeno: false
},
{
    id: 209,
    naziv: "SHINY kompaktno sjenilo – Sand",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/shiny-sjenilo-sand.jpg",
    opis: "Visoko pigmentirano kompaktno sjenilo u Sand nijansi. Svilenkasta i lagana tekstura pruža čistu, ujednačenu i dugotrajnu boju s blistavim reflektirajućim završetkom. 3 g.",
    izdvojeno: false
},
{
    id: 210,
    naziv: "SHINY kompaktno sjenilo – Bronze",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/shiny-sjenilo-bronze.jpg",
    opis: "Visoko pigmentirano kompaktno sjenilo u Bronze nijansi. Lagana i svilenkasta tekstura savršeno prianja uz kapak i pruža dugotrajnu boju s blistavim završetkom. 3 g.",
    izdvojeno: false
},
{
    id: 211,
    naziv: "SHINY kompaktno sjenilo – Ice Rose",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/shiny-sjenilo-ice-rose.jpg",
    opis: "Kompaktno sjenilo u Ice Rose nijansi s visokom pigmentacijom i svilenkastom teksturom. Pruža dugotrajnu pokrivenost i blistav reflektirajući završetak. 3 g.",
    izdvojeno: false
},
{
    id: 212,
    naziv: "SHIMMER kompaktno sjenilo – Pearly Peach",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/shimmer-sjenilo-pearly-peach.jpg",
    opis: "Pudrasto SHIMMER sjenilo intenzivne boje i izrazito blistavog završetka. Kremasta i visoko pokrivna tekstura stapa se s kapkom i pruža dugotrajnu boju. 3,5 g.",
    izdvojeno: false
},
{
    id: 213,
    naziv: "SHIMMER kompaktno sjenilo – Pearl Ivory",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/shimmer-sjenilo-pearl-ivory.jpg",
    opis: "SHIMMER kompaktno sjenilo u Pearl Ivory nijansi. Visoko pokrivna kremasta tekstura pruža intenzivnu, dugotrajnu boju i sjajan završetak već pri prvom nanošenju. 3,5 g.",
    izdvojeno: false
},
{
    id: 214,
    naziv: "SHIMMER kompaktno sjenilo – Copper",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/shimmer-sjenilo-copper.jpg",
    opis: "Pudrasto sjenilo u Copper nijansi s intenzivnim sjajnim završetkom. Kremasta tekstura pruža bogatu, čistu i dugotrajnu boju. 3,5 g.",
    izdvojeno: false
},
{
    id: 215,
    naziv: "SHIMMER kompaktno sjenilo – Metallic Rose",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/shimmer-sjenilo-metallic-rose.jpg",
    opis: "SHIMMER sjenilo u Metallic Rose nijansi s bogatom pigmentacijom i blistavim završetkom. Kremasta tekstura stapa se s kapkom i pruža dugotrajnu boju. 3,5 g.",
    izdvojeno: false
},
{
    id: 216,
    naziv: "SHIMMER kompaktno sjenilo – Bronze",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/shimmer-sjenilo-bronze.jpg",
    opis: "Visoko pokrivno SHIMMER sjenilo u Bronze nijansi. Kremasta tekstura pruža intenzivnu, dugotrajnu boju i upečatljiv sjajni završetak. 3,5 g.",
    izdvojeno: false
},
{
    id: 217,
    naziv: "SHIMMER kompaktno sjenilo – Antique Pink",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/shimmer-sjenilo-antique-pink.jpg",
    opis: "SHIMMER kompaktno sjenilo u Antique Pink nijansi s intenzivnom pigmentacijom i izrazitim sjajem. Kremasta tekstura pruža dugotrajnu boju i blistav izgled. 3,5 g.",
    izdvojeno: false
},
{
    id: 218,
    naziv: "MATTE kompaktno sjenilo – Brick",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/matte-sjenilo-brick.jpg",
    opis: "Kompaktno sjenilo izuzetno meke teksture s intenzivnom pigmentacijom i izrazito mat završetkom. Visoko pokrivni pigmenti omogućuju jednostavno nanošenje. 3 g.",
    izdvojeno: false
},
{
    id: 219,
    naziv: "MATTE kompaktno sjenilo – Ivy",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/matte-sjenilo-ivy.jpg",
    opis: "MATTE sjenilo u Ivy nijansi s mekanom i ugodnom teksturom. Pruža intenzivnu pigmentaciju, visoku pokrivnost i izražen mat završetak. 3 g.",
    izdvojeno: false
},
{
    id: 220,
    naziv: "MATTE kompaktno sjenilo – Azure",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/matte-sjenilo-azure.jpg",
    opis: "Kompaktno sjenilo u Azure nijansi s mekom i bogatom teksturom. Pruža trenutnu intenzivnu boju i izražen mat efekt. 3 g.",
    izdvojeno: false
},
{
    id: 221,
    naziv: "MATTE kompaktno sjenilo – Light Coral",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/matte-sjenilo-light-coral.jpg",
    opis: "MATTE kompaktno sjenilo u Light Coral nijansi. Mekana tekstura i visoko pokrivni pigmenti pružaju intenzivnu boju i precizno nanošenje. 3 g.",
    izdvojeno: false
},
{
    id: 222,
    naziv: "MATTE kompaktno sjenilo – Green Tiffany",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/matte-sjenilo-green-tiffany.jpg",
    opis: "Kompaktno MATTE sjenilo u Green Tiffany nijansi s intenzivnom pigmentacijom i mat završetkom. Mekana tekstura omogućuje jednostavno i ugodno nanošenje. 3 g.",
    izdvojeno: false
},
{
    id: 223,
    naziv: "MATTE kompaktno sjenilo – Elegant Rose",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/matte-sjenilo-elegant-rose.jpg",
    opis: "MATTE sjenilo u Elegant Rose nijansi s izuzetno mekanom teksturom, intenzivnom pigmentacijom i dodatnim mat završetkom. 3 g.",
    izdvojeno: false
},
{
    id: 224,
    naziv: "MATTE kompaktno sjenilo – Crna",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/matte-sjenilo-crna.jpg",
    opis: "Intenzivno crno MATTE kompaktno sjenilo s mekanom teksturom i snažnom pigmentacijom. Pruža izražen mat efekt i jednostavno nanošenje. 3 g.",
    izdvojeno: false
},
{
    id: 225,
    naziv: "MATTE kompaktno sjenilo – Ljubičasta",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/matte-sjenilo-ljubicasta.jpg",
    opis: "MATTE kompaktno sjenilo u ljubičastoj nijansi s izuzetno mekanom teksturom. Pruža trenutnu intenzivnu boju i ekstra mat završetak. 3 g.",
    izdvojeno: false
},
{
    id: 226,
    naziv: "MATTE kompaktno sjenilo – Chocolate",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/matte-sjenilo-chocolate.jpg",
    opis: "MATTE sjenilo u Chocolate nijansi s mekanom i nježnom teksturom. Intenzivna pigmentacija pruža bogatu boju i mat završetak. 3 g.",
    izdvojeno: false
},
{
    id: 227,
    naziv: "MATTE kompaktno sjenilo – Chalk White",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/matte-sjenilo-chalk-white.jpg",
    opis: "Kompaktno MATTE sjenilo u Chalk White nijansi s mekanom teksturom, intenzivnom pigmentacijom i ekstra mat završetkom. 3 g.",
    izdvojeno: false
},
{
    id: 228,
    naziv: "Kompaktno sjenilo – Bright Bronze",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/kompaktno-sjenilo-bright-bronze.jpg",
    opis: "Visoko pigmentirano kompaktno sjenilo sa svilenkastom teksturom i sjajnim završetkom. Sadrži biserne čestice za bogatu refleksiju svjetlosti, a formula je obogaćena Aloe Verom i vitaminom E. 3 g.",
    izdvojeno: false
},
{
    id: 229,
    naziv: "Paleta s 9 sjenila – Autumn Vibes",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/paleta-sjenila-autumn-vibes.jpg",
    opis: "Paleta s 9 sjenila intenzivnih boja i efektnog završetka. Visoko pokrivna kremasta tekstura stapa se s kapcima i pruža dugotrajnu boju te profesionalan rezultat. 18 g.",
    izdvojeno: false
},
{
    id: 230,
    naziv: "Paleta s 9 sjenila – Winter Queen",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/paleta-sjenila-winter-queen.jpg",
    opis: "Paleta Winter Queen s 9 intenzivnih nijansi za blistav i upečatljiv pogled. Kremasta i visoko pokrivna tekstura pruža dugotrajnu boju i profesionalan rezultat. 18 g.",
    izdvojeno: false
},
{
    id: 231,
    naziv: "Paleta s 9 sjenila – Proljetno cvijeće",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
   slika: "slike/paleta-sjenila-proljetno-cvijece.jpg",
    opis: "Paleta s 9 sjenila intenzivnih boja i upečatljivog završetka. Kremasta, visoko pokrivna tekstura stapa se s kapcima i pruža čistu dugotrajnu boju. 18 g.",
    izdvojeno: false
},
{
    id: 232,
    naziv: "DIAMOND CREAM sjenilo za oči – Bronze",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/diamond-cream-bronze.jpg",
    opis: "Tekuće sjenilo za oči s reflektirajućim pigmentima koji stvaraju intenzivne svjetlucave naglaske. Mekana i bogata tekstura pruža sjajan i dugotrajan završetak te jednostavno nanošenje. 5 g.",
    izdvojeno: false
},
{
    id: 233,
    naziv: "DIAMOND CREAM sjenilo za oči – Metallic Copper",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/diamond-cream-metallic-copper.jpg",
    opis: "Tekuće sjenilo u Metallic Copper nijansi s reflektirajućim pigmentima. Izuzetno mekana i bogata tekstura pruža intenzivan sjaj, dugotrajan završetak i jednostavno nanošenje. 5 g.",
    izdvojeno: false
},
{
    id: 234,
    naziv: "DIAMOND CREAM sjenilo za oči – Šampanjac",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/diamond-cream-sampanjac.jpg",
    opis: "Tekuće sjenilo u elegantnoj nijansi šampanjca s reflektirajućim pigmentima. Pruža intenzivne svjetlucave naglaske, bogatu teksturu i dugotrajan sjajni završetak. 5 g.",
    izdvojeno: false
},
{
    id: 235,
    naziv: "Chogan Extra Volume maskara",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/chogan-extra-volume-maskara.jpg",
    opis: "Maskara za duže, uvijene i voluminozne trepavice već nakon jednog poteza. Formula s prirodnim voskovima i pantenolom pruža punoću i sjaj, dok posebna četkica ravnomjerno raspoređuje proizvod i doseže čak i najkraće trepavice. 9 ml.",
    izdvojeno: false
},
{
    id: 236,
    naziv: "MoniAmori Solar Defence SPF 30 – Tiramisu",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/solar-defence-tiramisu.jpg",
    opis: "Kompaktni puder sa SPF 30 za sve tipove kože. Kremasta tekstura pretvara se u mekani puder, ujednačava ten i štiti od UVA i UVB zraka. Veganska formula bez talka i parabena ostavlja kožu mekom i hidratiziranom.",
    izdvojeno: false
},
{
    id: 237,
    naziv: "MoniAmori Solar Defence SPF 30 – Creme Caramel",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/solar-defence-creme-caramel.jpg",
    opis: "Kompaktni puder sa SPF 30 u nijansi Creme Caramel. Ujednačava ten, pruža dugotrajan završetak i pomaže zaštititi kožu od UVA i UVB zraka. Veganska formula bez talka i parabena.",
    izdvojeno: false
},
{
    id: 238,
    naziv: "MoniAmori Solar Defence SPF 30 – Cinnamon Roll",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/solar-defence-cinnamon-roll.jpg",
    opis: "Kompaktni puder sa SPF 30 u nijansi Cinnamon Roll. Kremasta i ugodna tekstura pruža ujednačen završetak, zaglađuje izgled nesavršenosti te štiti od UVA i UVB zraka.",
    izdvojeno: false
},
{
    id: 239,
    naziv: "MoniAmori Solar Defence SPF 30 – Amaretto",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/solar-defence-amaretto.jpg",
    opis: "Kompaktni puder sa SPF 30 u nijansi Amaretto. Formula ujednačava ten, zaglađuje izgled nesavršenosti i pruža zaštitu od UVA i UVB zraka, ostavljajući kožu mekom i hidratiziranom.",
    izdvojeno: false
},
{
    id: 240,
    naziv: "MoniAmori Solar Defence SPF 30 – Meringa",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/solar-defence-meringa.jpg",
    opis: "Kompaktni puder sa SPF 30 u nijansi Meringa. Kremasta tekstura pretvara se u mekani puder i pruža dugotrajan, ujednačen završetak uz zaštitu od UVA i UVB zraka.",
    izdvojeno: false
},
{
    id: 241,
    naziv: "Prešano rumenilo – Warm Beige",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Prešano rumenilo meke i kremaste teksture koje se lako nanosi i stapa s kožom. Pruža blistav i prirodan završetak, a formula s vitaminom E doprinosi ugodnom osjećaju na koži.",
    izdvojeno: false
},
{
    id: 242,
    naziv: "Prešano rumenilo – Peach",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Prešano rumenilo u Peach nijansi s mekanom i kremastom teksturom. Omogućuje ravnomjerno nanošenje i prirodan završetak bez puderastih ostataka.",
    izdvojeno: false
},
{
    id: 243,
    naziv: "Prešano rumenilo – Strawberry",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Prešano rumenilo u Strawberry nijansi s mekanom i kremastom teksturom. Lako se nanosi, dobro prianja uz kožu i pruža prirodan efekt rumenila.",
    izdvojeno: false
},
{
    id: 244,
    naziv: "Prešano rumenilo – Raspberry",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Prešano rumenilo u Raspberry nijansi s ugodnom kremastom teksturom. Pruža ravnomjerno prekrivanje, prirodan izgled i jednostavno nanošenje.",
    izdvojeno: false
},
{
    id: 245,
    naziv: "Prešani bronzer – Terracotta",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Prešani bronzer u Terracotta nijansi s mekanom i kremastom teksturom. Stapa se s kožom i pruža prirodan efekt osunčanog tena. Formula bez talka omogućuje ravnomjerno i slojevito nanošenje.",
    izdvojeno: false
},
{
    id: 246,
    naziv: "Prešani bronzer – First Ten",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Prešani bronzer u First Ten nijansi koji pruža prirodan efekt osunčanog tena. Mekana kremasta tekstura lako se nanosi i stapa s kožom, a formula ne sadrži talk.",
    izdvojeno: false
},
{
    id: 247,
    naziv: "Prešani bronzer – Biscuit",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Prešani bronzer u Biscuit nijansi s mekanom i kremastom teksturom. Omogućuje slojevito i ravnomjerno nanošenje bez puderastih ostataka te pruža prirodan osunčani izgled.",
    izdvojeno: false
},
{
    id: 248,
    naziv: "Korektor – Light Beige",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Korektor u Light Beige nijansi za ujednačavanje tena i prikrivanje nepravilnosti na koži.",
    izdvojeno: false
},
{
    id: 249,
    naziv: "Korektor – Ivory Green",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Korektor u Ivory Green nijansi za korekciju izgleda nepravilnosti i ujednačavanje izgleda tena.",
    izdvojeno: false
},
{
    id: 250,
    naziv: "Korektor – Honey",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Korektor u Honey nijansi za prikrivanje nepravilnosti i postizanje ujednačenijeg izgleda kože.",
    izdvojeno: false
},
{
    id: 251,
    naziv: "Korektor – Warm Rose",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Korektor u Warm Rose nijansi za korekciju i ujednačavanje izgleda tena.",
    izdvojeno: false
},
{
    id: 252,
    naziv: "Korektor – Ivory",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Korektor u Ivory nijansi namijenjen prikrivanju nepravilnosti i stvaranju ujednačenog izgleda tena.",
    izdvojeno: false
},
{
    id: 253,
    naziv: "Korektor – Cool Rose",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Korektor u Cool Rose nijansi za korekciju izgleda kože i postizanje ujednačenijeg tena.",
    izdvojeno: false
},
{
    id: 254,
    naziv: "Jumbo korektor u olovci – Ivory",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Jumbo korektor u olovci u Ivory nijansi. Praktičan format olovke omogućuje jednostavno i precizno nanošenje na željena područja lica.",
    izdvojeno: false
},
{
    id: 255,
    naziv: "Jumbo korektor u olovci – Light Beige",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Jumbo korektor u olovci u Light Beige nijansi. Praktičan format omogućuje precizno nanošenje i jednostavnu korekciju izgleda nepravilnosti.",
    izdvojeno: false
},
{
    id: 256,
    naziv: "Jumbo korektor u olovci – Light Rose",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Jumbo korektor u olovci u Light Rose nijansi. Jednostavan je za ciljano i precizno nanošenje na željena područja lica.",
    izdvojeno: false
},
{
    id: 257,
    naziv: "Perfect Hydra Foundation – Caramel",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Tekući puder lagane teksture i baršunastog završetka koji ujednačava ten i optički prikriva nepravilnosti. Veganska formula bez parabena obogaćena je zelenim čajem, sastojcima za hidrataciju i uljem maka.",
    izdvojeno: false
},
{
    id: 258,
    naziv: "Perfect Hydra Foundation – Peach",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Tekući puder lagane teksture u Peach nijansi. Pruža baršunast završetak, ujednačava ten i pomaže optički prikriti nepravilnosti. Formula s hidratantnim, zaštitnim i anti-age sastojcima.",
    izdvojeno: false
},
{
    id: 259,
    naziv: "Perfect Hydra Foundation – Beige",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Tekući puder u Beige nijansi s laganom teksturom i baršunastim završetkom. Ujednačava izgled tena, a formula sa zelenim čajem, hidratantnim sastojcima i uljem maka njeguje kožu.",
    izdvojeno: false
},
{
    id: 260,
    naziv: "Perfect Hydra Foundation – Neutral",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Perfect Hydra tekući puder u Neutral nijansi za ujednačen i zaglađen izgled tena. Lagana formula pruža baršunast završetak te sadrži hidratantne, zaštitne i anti-age sastojke.",
    izdvojeno: false
},
{
    id: 261,
    naziv: "Perfect Hydra Foundation – Ivory",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Tekući puder u Ivory nijansi s laganom teksturom i baršunastim završetkom. Ujednačava ten i optički prikriva nepravilnosti, dok formula sa zelenim čajem i uljem maka pruža njegu kože.",
    izdvojeno: false
},
{
    id: 262,
    naziv: "Instant Matte Foundation – Nude Beige",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Dugotrajna tekuća podloga s izvrsnim prekrivanjem koja prikriva nepravilnosti i pruža ujednačen, prirodan ten. Brzo se suši i ostavlja baršunasto mat završetak. Veganska formula bez parabena obogaćena je ekstraktima crne ruže, ginsenga i perunike te uljem sjemenki kave.",
    izdvojeno: false
},
{
    id: 263,
    naziv: "Instant Matte Foundation – Dark Beige",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Dugotrajna tekuća podloga u Dark Beige nijansi s visokom moći prekrivanja. Pruža ujednačen i prirodan izgled tena te baršunasto mat završetak. Formula je veganska i bez parabena.",
    izdvojeno: false
},
{
    id: 264,
    naziv: "Instant Matte Foundation – Pink Nude",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Tekuća podloga u Pink Nude nijansi koja pruža izvrsno prekrivanje i dugotrajan ujednačen izgled tena. Brzo se suši i pruža baršunasto mat završetak, uz vegansku formulu bez parabena.",
    izdvojeno: false
},
{
    id: 265,
    naziv: "Instant Matte Foundation – Medium Beige",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Dugotrajna tekuća podloga u Medium Beige nijansi s izvrsnim prekrivanjem. Pomaže prikriti nepravilnosti, ujednačava izgled tena i pruža prirodan baršunasto mat završetak.",
    izdvojeno: false
},
{
    id: 266,
    naziv: "MoniAmori Blush & Kiss Stick – Lubenica",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "2-u-1 stick za lice i usne s mat završetkom i nadogradivom pokrivenošću. Kremasta tekstura lako se nanosi i blenda, a veganska formula bez parabena obogaćena je uljem i brašnom zobi te Aloe Verom.",
    izdvojeno: false
},
{
    id: 267,
    naziv: "MoniAmori Blush & Kiss Stick – Breskva",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "2-u-1 stick u nijansi Breskva namijenjen licu i usnama. Pruža mat završetak i nadogradivu pokrivenost, dok kremasta tekstura omogućuje glatko i precizno nanošenje.",
    izdvojeno: false
},
{
    id: 268,
    naziv: "MoniAmori Blush & Kiss Stick – Jagodičasto voće",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "2-u-1 stick za lice i usne u nijansi Jagodičasto voće. Kremasta tekstura pruža jednostavno blendanje, mat završetak i svjež izgled. Veganska formula sadrži zob i Aloe Veru.",
    izdvojeno: false
},
{
    id: 269,
    naziv: "MoniAmori Sculpt & Lift – Stone",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Stick za konturiranje s mat završetkom i nadogradivom pokrivenošću, namijenjen oblikovanju lica i naglašavanju kontura. Kremasta tekstura omogućuje glatko i precizno nanošenje. Veganska formula bez parabena obogaćena je zobi i Aloe Verom.",
    izdvojeno: false
},
{
    id: 270,
    naziv: "MoniAmori Sculpt & Lift – Ebony",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Sculpt & Lift stick u Ebony nijansi za oblikovanje lica i redefiniranje kontura. Pruža mat završetak i nadogradivu pokrivenost, dok kremasta tekstura omogućuje jednostavno blendanje i precizno nanošenje.",
    izdvojeno: false
},
{
    id: 271,
    naziv: "MoniAmori Sculpt & Lift – Clay",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Sculpt & Lift stick u Clay nijansi s mat završetkom i nadogradivom pokrivenošću. Kremasta tekstura olakšava oblikovanje i naglašavanje kontura lica, a formula je veganska i bez parabena.",
    izdvojeno: false
},
{
    id: 272,
    naziv: "MoniAmori Light & Go – Šampanjac",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Highlighter stick mekog i svilenkastog dodira za osvjetljavanje lica i dekoltea. Kremasta tekstura lako se blenda i pruža trenutan sjaj. Veganska formula bez parabena obogaćena je arganovim uljem, vitaminom E i ekstraktom ginsenga.",
    izdvojeno: false
},
{
    id: 273,
    naziv: "MoniAmori Light & Go – Rose Gold",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Highlighter stick u Rose Gold nijansi za naglašavanje i osvjetljavanje lica i dekoltea. Kremasta i lako blendabilna tekstura pruža trenutan sjaj, a formula sadrži arganovo ulje, vitamin E i ekstrakt ginsenga.",
    izdvojeno: false
},
{
    id: 274,
    naziv: "MoniAmori Light & Go – Bronze",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Highlighter stick u Bronze nijansi s mekim i svilenkastim dodirom. Jednostavno se nanosi i blenda te pruža trenutan sjaj. Veganska formula bez parabena obogaćena je arganovim uljem, vitaminom E i ekstraktom ginsenga.",
    izdvojeno: false
},
{
    id: 275,
    naziv: "Umjetne trepavice – Doe Gaze",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Umjetne trepavice za intenzivan Bambi pogled, idealne za romantičan i sofisticiran stil. Prikladne su za svakodnevno nošenje i posebne prilike te se uz pravilno čišćenje i čuvanje mogu ponovno koristiti. Ljepilo nije uključeno.",
    izdvojeno: false
},
{
    id: 276,
    naziv: "Umjetne trepavice – Extreme Gaze",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Umjetne trepavice za intenzivan i izražajan pogled. Prikladne su za svakodnevno nošenje ili posebne prilike, a uz pravilno čišćenje i čuvanje mogu se ponovno koristiti. Ljepilo nije uključeno.",
    izdvojeno: false
},
{
    id: 277,
    naziv: "Umjetne trepavice – Baby Doll Gaze",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Umjetne trepavice za intenzivan i senzualan pogled te elegantan i besprijekoran izgled. Mogu se koristiti svakodnevno ili za posebne prilike i ponovno koristiti uz pravilno održavanje. Ljepilo nije uključeno.",
    izdvojeno: false
},
{
    id: 278,
    naziv: "Umjetne trepavice – Iconic Gaze",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Umjetne trepavice za intenzivan i zanosan pogled, namijenjene upečatljivom izgledu. Mogu se koristiti svakodnevno ili za posebne prilike te ponovno koristiti uz pravilno čišćenje i čuvanje. Ljepilo nije uključeno.",
    izdvojeno: false
},
{
    id: 279,
    naziv: "Umjetne trepavice – Classic Gaze",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Umjetne trepavice za intenzivan, ali prirodan pogled. Odgovaraju klasičnom i elegantnom stilu te se mogu koristiti svakodnevno ili za posebne prilike. Uz pravilno održavanje mogu se ponovno koristiti. Ljepilo nije uključeno.",
    izdvojeno: false
},
{
    id: 280,
    naziv: "Umjetne trepavice – Čuperci",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Umjetne trepavice u čupercima dostupne u tri različite dužine za personaliziran i prirodan izgled. Omogućuju prilagođavanje željenog efekta i prikladne su za različite stilove. Ljepilo nije uključeno.",
    izdvojeno: false
},
{
    id: 281,
    naziv: "Ljepilo za umjetne trepavice – 3 ml",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Ljepilo za umjetne trepavice koje osigurava čvrsto prianjanje i brzo se suši. Praktična četkica omogućuje precizno nanošenje za uredan i besprijekoran izgled trepavica.",
    izdvojeno: false
},
{
    id: 282,
    naziv: "Aplikator za trepavice",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Praktičan aplikator koji omogućuje precizno i jednostavno postavljanje umjetnih trepavica. Pogodan je za trakaste trepavice i čuperke te olakšava nanošenje i pozicioniranje trepavica.",
    izdvojeno: false
},
{
    id: 283,
    naziv: "Chogan maskara za maksimalnu dužinu i definiciju",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Maskara za maksimalnu dužinu i definiciju koja zahvaljujući mješavini voskova pruža slojeviti volumen i panoramski efekt. Fleksibilni aplikator hvata, razdvaja i produžuje svaku trepavicu. Kremasta tekstura intenzivne crne boje brzo se suši te ostaje mekana i fleksibilna tijekom nošenja.",
    izdvojeno: false
},
{
    id: 284,
    naziv: "Chogan vodootporna maskara za zavodljive trepavice – 10,5 g",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Vodootporna uvijajuća maskara koja definira i razdvaja trepavice zahvaljujući anatomskoj četkici. Pruža efekt volumena te je otporna na vodu, trljanje i visoke temperature bez razmazivanja. Formula s karnauba voskom daje volumen bez stvaranja grudica i pruža odličnu fiksaciju.",
    izdvojeno: false
}

];