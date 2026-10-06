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
}

];
   