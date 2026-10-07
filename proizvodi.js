let sljedeciId = 1;

function napraviParfem(broj, kategorija, opis, izdvojeno = false) {
    return {
        id: sljedeciId++,
        naziv: `Olfazeta ${broj}`,
        kategorija: kategorija,
        kategorijaNaziv:
            kategorija === "zenski" ? "Ženski parfemi" :
            kategorija === "muski" ? "Muški parfemi" :
            kategorija === "unisex" ? "Unisex parfemi" :
            kategorija === "luksuzni" ? "Luksuzni parfemi" : "Parfemi",
        slika:
            kategorija === "zenski" ? "slike/zenski-parfem.png" :
            kategorija === "muski" ? "slike/muski-parfem.png" :
            kategorija === "unisex" ? "slike/unisex-parfem.png" :
            "slike/luksuzni-parfem.png",
        opis: opis,
        izdvojeno: izdvojeno
    };
}

const proizvodi = [

{
    id: 1,
    naziv: "Olfazeta 306",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfemi",
    slika: "slike/zenski-parfem.png",
    opis: "Elegantan ženski parfem s profinjenim i zavodljivim mirisnim karakterom.",
    izdvojeno: true
},
{
    id: 2,
    naziv: "Olfazeta 388",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfemi",
    slika: "slike/muski-parfem.png",
    opis: "Karakterističan muški parfem snažnog, elegantnog i modernog mirisnog potpisa.",
    izdvojeno: true
},
{
    id: 3,
    naziv: "Olfazeta 3114",
    kategorija: "unisex",
    kategorijaNaziv: "Unisex parfemi",
    slika: "slike/unisex-parfem.png",
    opis: "Profinjen unisex parfem stvoren za ljubitelje upečatljivih i modernih mirisa.",
    izdvojeno: true
},

{
    id: 4,
    naziv: "Olfazeta 001",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfemi",
    slika: "slike/zenski-parfem.png",
    opis: "Ženski parfem elegantnog i profinjenog mirisnog karaktera.",
    izdvojeno: false
},
{
    id: 5,
    naziv: "Olfazeta 002",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfemi",
    slika: "slike/zenski-parfem.png",
    opis: "Ženski parfem stvoren za svakodnevne i posebne trenutke.",
    izdvojeno: false
},
{
    id: 6,
    naziv: "Olfazeta 003",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfemi",
    slika: "slike/zenski-parfem.png",
    opis: "Profinjen ženski miris s elegantnim i ženstvenim karakterom.",
    izdvojeno: false
},
{
    id: 7,
    naziv: "Olfazeta 004",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfemi",
    slika: "slike/zenski-parfem.png",
    opis: "Elegantan ženski parfem za upečatljiv i sofisticiran dojam.",
    izdvojeno: false
},
{
    id: 8,
    naziv: "Olfazeta 005",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfemi",
    slika: "slike/zenski-parfem.png",
    opis: "Ženski miris profinjenog karaktera i elegantnog mirisnog potpisa.",
    izdvojeno: false
},
{
    id: 9,
    naziv: "Olfazeta 006",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfemi",
    slika: "slike/zenski-parfem.png",
    opis: "Ženski parfem za ljubiteljice elegantnih i izražajnih mirisa.",
    izdvojeno: false
},
{
    id: 10,
    naziv: "Olfazeta 007",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfemi",
    slika: "slike/zenski-parfem.png",
    opis: "Profinjen ženski parfem za moderan i elegantan mirisni dojam.",
    izdvojeno: false
},
{
    id: 11,
    naziv: "Olfazeta 008",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfemi",
    slika: "slike/zenski-parfem.png",
    opis: "Elegantan ženski miris prikladan za različite prilike.",
    izdvojeno: false
},
{
    id: 12,
    naziv: "Olfazeta 009",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfemi",
    slika: "slike/zenski-parfem.png",
    opis: "Ženski parfem sofisticiranog i prepoznatljivog mirisnog karaktera.",
    izdvojeno: false
},
{
    id: 13,
    naziv: "Olfazeta 010",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfemi",
    slika: "slike/zenski-parfem.png",
    opis: "Ženski miris koji spaja eleganciju i moderan karakter.",
    izdvojeno: false
},
{
    id: 14,
    naziv: "Olfazeta 011",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfemi",
    slika: "slike/zenski-parfem.png",
    opis: "Profinjen ženski parfem za elegantan svakodnevni dojam.",
    izdvojeno: false
},
{
    id: 15,
    naziv: "Olfazeta 012",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfemi",
    slika: "slike/zenski-parfem.png",
    opis: "Elegantan i ženstven parfem izražajnog mirisnog karaktera.",
    izdvojeno: false
},
{
    id: 16,
    naziv: "Olfazeta 013",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfemi",
    slika: "slike/zenski-parfem.png",
    opis: "Ženski parfem profinjenog i modernog mirisnog potpisa.",
    izdvojeno: false
},
{
    id: 17,
    naziv: "Olfazeta 014",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfemi",
    slika: "slike/zenski-parfem.png",
    opis: "Ženski miris za ljubiteljice elegantnih i upečatljivih parfema.",
    izdvojeno: false
},
{
    id: 18,
    naziv: "Olfazeta 015",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfemi",
    slika: "slike/zenski-parfem.png",
    opis: "Elegantan ženski parfem s profinjenim mirisnim karakterom.",
    izdvojeno: false
},
{
    id: 19,
    naziv: "Olfazeta 016",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfemi",
    slika: "slike/zenski-parfem.png",
    opis: "Profinjen ženski miris za poseban i elegantan dojam.",
    izdvojeno: false
},
{
    id: 20,
    naziv: "Olfazeta 017",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfemi",
    slika: "slike/zenski-parfem.png",
    opis: "Ženski parfem modernog i sofisticiranog mirisnog potpisa.",
    izdvojeno: false
},
{
    id: 21,
    naziv: "Olfazeta 018",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfemi",
    slika: "slike/zenski-parfem.png",
    opis: "Elegantan ženski miris namijenjen svakodnevnim i posebnim prilikama.",
    izdvojeno: false
},
{
    id: 22,
    naziv: "Olfazeta 019",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfemi",
    slika: "slike/zenski-parfem.png",
    opis: "Ženski parfem izražajnog i profinjenog mirisnog karaktera.",
    izdvojeno: false
},
{
    id: 23,
    naziv: "Olfazeta 020",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfemi",
    slika: "slike/zenski-parfem.png",
    opis: "Profinjen ženski parfem za elegantan i moderan dojam.",
    izdvojeno: false
},
{
    id: 24,
    naziv: "Olfazeta 021",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfemi",
    slika: "slike/zenski-parfem.png",
    opis: "Elegantan ženski miris s prepoznatljivim karakterom.",
    izdvojeno: false
},
{
    id: 25,
    naziv: "Olfazeta 022",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfemi",
    slika: "slike/zenski-parfem.png",
    opis: "Ženski parfem za ljubiteljice profinjenih i modernih mirisa.",
    izdvojeno: false
},
{
    id: 26,
    naziv: "Olfazeta 023",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfemi",
    slika: "slike/zenski-parfem.png",
    opis: "Ženski miris elegantnog i sofisticiranog karaktera.",
    izdvojeno: false
},
{
    id: 27,
    naziv: "Olfazeta 024",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfemi",
    slika: "slike/zenski-parfem.png",
    opis: "Profinjen ženski parfem za upečatljiv mirisni dojam.",
    izdvojeno: false
},
{
    id: 28,
    naziv: "Olfazeta 025",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfemi",
    slika: "slike/zenski-parfem.png",
    opis: "Elegantan ženski parfem prikladan za različite prilike.",
    izdvojeno: false
},
{
    id: 29,
    naziv: "Olfazeta 026",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfemi",
    slika: "slike/zenski-parfem.png",
    opis: "Ženski parfem profinjenog i izražajnog mirisnog potpisa.",
    izdvojeno: false
},
{
    id: 30,
    naziv: "Olfazeta 027",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfemi",
    slika: "slike/zenski-parfem.png",
    opis: "Ženski miris koji pruža elegantan i moderan dojam.",
    izdvojeno: false
},
{
    id: 31,
    naziv: "Olfazeta 028",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfemi",
    slika: "slike/zenski-parfem.png",
    opis: "Profinjen ženski parfem s elegantnim karakterom.",
    izdvojeno: false
},
{
    id: 32,
    naziv: "Olfazeta 029",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfemi",
    slika: "slike/zenski-parfem.png",
    opis: "Elegantan ženski parfem za poseban mirisni dojam.",
    izdvojeno: false
},
{
    id: 33,
    naziv: "Olfazeta 030",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfemi",
    slika: "slike/zenski-parfem.png",
    opis: "Ženski parfem modernog i sofisticiranog karaktera.",
    izdvojeno: false
},
{
    id: 34,
    naziv: "Olfazeta 031",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfemi",
    slika: "slike/zenski-parfem.png",
    opis: "Profinjen ženski miris za svakodnevnu eleganciju.",
    izdvojeno: false
},
{
    id: 35,
    naziv: "Olfazeta 032",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfemi",
    slika: "slike/zenski-parfem.png",
    opis: "Elegantan ženski parfem izražajnog mirisnog karaktera.",
    izdvojeno: false
},
{
    id: 36,
    naziv: "Olfazeta 033",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfemi",
    slika: "slike/zenski-parfem.png",
    opis: "Ženski parfem profinjenog i modernog mirisnog potpisa.",
    izdvojeno: false
},
{
    id: 37,
    naziv: "Olfazeta 034",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfemi",
    slika: "slike/zenski-parfem.png",
    opis: "Ženski miris stvoren za elegantan i upečatljiv dojam.",
    izdvojeno: false
},
{
    id: 38,
    naziv: "Olfazeta 035",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfemi",
    slika: "slike/zenski-parfem.png",
    opis: "Profinjen ženski parfem elegantnog karaktera.",
    izdvojeno: false
},
{
    id: 39,
    naziv: "Olfazeta 036",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfemi",
    slika: "slike/zenski-parfem.png",
    opis: "Elegantan ženski miris za ljubiteljice sofisticiranih parfema.",
    izdvojeno: false
},
{
    id: 40,
    naziv: "Olfazeta 037",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfemi",
    slika: "slike/zenski-parfem.png",
    opis: "Ženski parfem modernog i profinjenog mirisnog karaktera.",
    izdvojeno: false
},
{
    id: 41,
    naziv: "Olfazeta 038",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfemi",
    slika: "slike/zenski-parfem.png",
    opis: "Ženski miris za elegantan i prepoznatljiv dojam.",
    izdvojeno: false
},
{
    id: 42,
    naziv: "Olfazeta 039",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfemi",
    slika: "slike/zenski-parfem.png",
    opis: "Profinjen ženski parfem s modernim mirisnim potpisom.",
    izdvojeno: false
},
{
    id: 43,
    naziv: "Olfazeta 040",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfemi",
    slika: "slike/zenski-parfem.png",
    opis: "Elegantan ženski parfem za svakodnevne i posebne trenutke.",
    izdvojeno: false
},
{
    id: 44,
    naziv: "Olfazeta 041",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfemi",
    slika: "slike/zenski-parfem.png",
    opis: "Ženski parfem profinjenog i sofisticiranog karaktera.",
    izdvojeno: false
},
{
    id: 45,
    naziv: "Olfazeta 042",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfemi",
    slika: "slike/zenski-parfem.png",
    opis: "Ženski miris elegantnog i izražajnog mirisnog potpisa.",
    izdvojeno: false
},
{
    id: 46,
    naziv: "Olfazeta 043",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfemi",
    slika: "slike/zenski-parfem.png",
    opis: "Profinjen ženski parfem za moderan i elegantan dojam.",
    izdvojeno: false
},
{
    id: 47,
    naziv: "Olfazeta 044",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfemi",
    slika: "slike/zenski-parfem.png",
    opis: "Elegantan ženski parfem prepoznatljivog karaktera.",
    izdvojeno: false
},
{
    id: 48,
    naziv: "Olfazeta 045",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfemi",
    slika: "slike/zenski-parfem.png",
    opis: "Ženski parfem za ljubiteljice profinjenih i upečatljivih mirisa.",
    izdvojeno: false
},
{
    id: 49,
    naziv: "Olfazeta 046",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfemi",
    slika: "slike/zenski-parfem.png",
    opis: "Ženski miris modernog i elegantnog karaktera.",
    izdvojeno: false
},
{
    id: 50,
    naziv: "Olfazeta 047",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfemi",
    slika: "slike/zenski-parfem.png",
    opis: "Profinjen ženski parfem za sofisticiran mirisni dojam.",
    izdvojeno: false
},
{
    id: 51,
    naziv: "Olfazeta 048",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfemi",
    slika: "slike/zenski-parfem.png",
    opis: "Elegantan ženski miris prikladan za različite prilike.",
    izdvojeno: false
},
{
    id: 52,
    naziv: "Olfazeta 049",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfemi",
    slika: "slike/zenski-parfem.png",
    opis: "Ženski parfem profinjenog i prepoznatljivog karaktera.",
    izdvojeno: false
},
{
    id: 53,
    naziv: "Olfazeta 050",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfemi",
    slika: "slike/zenski-parfem.png",
    opis: "Ženski miris za elegantan i moderan mirisni dojam.",
    izdvojeno: false
},
{
    id: 54,
    naziv: "Olfazeta 051",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfemi",
    slika: "slike/zenski-parfem.png",
    opis: "Profinjen ženski parfem elegantnog mirisnog karaktera.",
    izdvojeno: false
},
{
    id: 55,
    naziv: "Olfazeta 052",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfemi",
    slika: "slike/zenski-parfem.png",
    opis: "Elegantan ženski parfem za upečatljiv i sofisticiran dojam.",
    izdvojeno: false
},
{
    id: 56,
    naziv: "Olfazeta 053",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfemi",
    slika: "slike/zenski-parfem.png",
    opis: "Ženski parfem modernog i profinjenog karaktera.",
    izdvojeno: false
},
{
    id: 57,
    naziv: "Olfazeta 054",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfemi",
    slika: "slike/zenski-parfem.png",
    opis: "Ženski miris za ljubiteljice elegantnih i izražajnih parfema.",
    izdvojeno: false
},
{
    id: 58,
    naziv: "Olfazeta 055",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfemi",
    slika: "slike/zenski-parfem.png",
    opis: "Profinjen ženski parfem s elegantnim mirisnim potpisom.",
    izdvojeno: false
},
{
    id: 59,
    naziv: "Olfazeta 056",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfemi",
    slika: "slike/zenski-parfem.png",
    opis: "Elegantan ženski miris za svakodnevne i posebne trenutke.",
    izdvojeno: false
},
{
    id: 60,
    naziv: "Olfazeta 057",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfemi",
    slika: "slike/zenski-parfem.png",
    opis: "Ženski parfem sofisticiranog i modernog mirisnog karaktera.",
    izdvojeno: false
},
{
    id: 61,
    naziv: "Olfazeta 058",
    kategorija: "zenski",
    kategorijaNaziv: "Ženski parfemi",
    slika: "slike/zenski-parfem.png",
    opis: "Profinjen ženski parfem za elegantan i upečatljiv završni dojam.",
    izdvojeno: false
},
{
    id: 62,
    naziv: "Olfazeta 061",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfemi",
    slika: "slike/muski-parfem.png",
    opis: "Muški parfem snažnog i elegantnog mirisnog karaktera.",
    izdvojeno: false
},
{
    id: 63,
    naziv: "Olfazeta 062",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfemi",
    slika: "slike/muski-parfem.png",
    opis: "Moderan muški parfem za upečatljiv i profinjen dojam.",
    izdvojeno: false
},
{
    id: 64,
    naziv: "Olfazeta 063",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfemi",
    slika: "slike/muski-parfem.png",
    opis: "Elegantan muški miris izražajnog i sofisticiranog karaktera.",
    izdvojeno: false
},
{
    id: 65,
    naziv: "Olfazeta 064",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfemi",
    slika: "slike/muski-parfem.png",
    opis: "Muški parfem modernog i prepoznatljivog mirisnog potpisa.",
    izdvojeno: false
},
{
    id: 66,
    naziv: "Olfazeta 065",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfemi",
    slika: "slike/muski-parfem.png",
    opis: "Profinjen muški parfem za svakodnevne i posebne prilike.",
    izdvojeno: false
},
{
    id: 67,
    naziv: "Olfazeta 066",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfemi",
    slika: "slike/muski-parfem.png",
    opis: "Elegantan muški miris snažnog i modernog karaktera.",
    izdvojeno: false
},
{
    id: 68,
    naziv: "Olfazeta 067",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfemi",
    slika: "slike/muski-parfem.png",
    opis: "Muški parfem za ljubitelje profinjenih i izražajnih mirisa.",
    izdvojeno: false
},
{
    id: 69,
    naziv: "Olfazeta 068",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfemi",
    slika: "slike/muski-parfem.png",
    opis: "Moderan muški parfem s elegantnim mirisnim karakterom.",
    izdvojeno: false
},
{
    id: 70,
    naziv: "Olfazeta 069",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfemi",
    slika: "slike/muski-parfem.png",
    opis: "Muški miris sofisticiranog i upečatljivog karaktera.",
    izdvojeno: false
},
{
    id: 71,
    naziv: "Olfazeta 070",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfemi",
    slika: "slike/muski-parfem.png",
    opis: "Elegantan muški parfem za moderan i prepoznatljiv dojam.",
    izdvojeno: false
},
{
    id: 72,
    naziv: "Olfazeta 071",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfemi",
    slika: "slike/muski-parfem.png",
    opis: "Profinjen muški miris snažnog i elegantnog karaktera.",
    izdvojeno: false
},
{
    id: 73,
    naziv: "Olfazeta 072",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfemi",
    slika: "slike/muski-parfem.png",
    opis: "Muški parfem modernog i sofisticiranog mirisnog potpisa.",
    izdvojeno: false
},
{
    id: 74,
    naziv: "Olfazeta 073",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfemi",
    slika: "slike/muski-parfem.png",
    opis: "Elegantan muški parfem za upečatljiv mirisni dojam.",
    izdvojeno: false
},
{
    id: 75,
    naziv: "Olfazeta 074",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfemi",
    slika: "slike/muski-parfem.png",
    opis: "Muški miris profinjenog i izražajnog karaktera.",
    izdvojeno: false
},
{
    id: 76,
    naziv: "Olfazeta 075",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfemi",
    slika: "slike/muski-parfem.png",
    opis: "Moderan muški parfem elegantnog i snažnog mirisnog karaktera.",
    izdvojeno: false
},
{
    id: 77,
    naziv: "Olfazeta 076",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfemi",
    slika: "slike/muski-parfem.png",
    opis: "Muški parfem za ljubitelje sofisticiranih i upečatljivih mirisa.",
    izdvojeno: false
},
{
    id: 78,
    naziv: "Olfazeta 077",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfemi",
    slika: "slike/muski-parfem.png",
    opis: "Elegantan muški miris s modernim mirisnim potpisom.",
    izdvojeno: false
},
{
    id: 79,
    naziv: "Olfazeta 078",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfemi",
    slika: "slike/muski-parfem.png",
    opis: "Profinjen muški parfem za svakodnevnu eleganciju.",
    izdvojeno: false
},
{
    id: 80,
    naziv: "Olfazeta 079",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfemi",
    slika: "slike/muski-parfem.png",
    opis: "Muški parfem snažnog i sofisticiranog karaktera.",
    izdvojeno: false
},
{
    id: 81,
    naziv: "Olfazeta 080",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfemi",
    slika: "slike/muski-parfem.png",
    opis: "Moderan muški miris za elegantan i upečatljiv dojam.",
    izdvojeno: false
},
{
    id: 82,
    naziv: "Olfazeta 081",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfemi",
    slika: "slike/muski-parfem.png",
    opis: "Elegantan muški parfem profinjenog mirisnog karaktera.",
    izdvojeno: false
},
{
    id: 83,
    naziv: "Olfazeta 082",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfemi",
    slika: "slike/muski-parfem.png",
    opis: "Muški parfem modernog i izražajnog mirisnog potpisa.",
    izdvojeno: false
},
{
    id: 84,
    naziv: "Olfazeta 083",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfemi",
    slika: "slike/muski-parfem.png",
    opis: "Profinjen muški miris za poseban i elegantan dojam.",
    izdvojeno: false
},
{
    id: 85,
    naziv: "Olfazeta 084",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfemi",
    slika: "slike/muski-parfem.png",
    opis: "Elegantan muški parfem snažnog i prepoznatljivog karaktera.",
    izdvojeno: false
},
{
    id: 86,
    naziv: "Olfazeta 085",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfemi",
    slika: "slike/muski-parfem.png",
    opis: "Muški parfem za ljubitelje modernih i sofisticiranih mirisa.",
    izdvojeno: false
},
{
    id: 87,
    naziv: "Olfazeta 086",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfemi",
    slika: "slike/muski-parfem.png",
    opis: "Moderan muški parfem elegantnog mirisnog karaktera.",
    izdvojeno: false
},
{
    id: 88,
    naziv: "Olfazeta 087",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfemi",
    slika: "slike/muski-parfem.png",
    opis: "Muški miris snažnog i profinjenog mirisnog potpisa.",
    izdvojeno: false
},
{
    id: 89,
    naziv: "Olfazeta 088",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfemi",
    slika: "slike/muski-parfem.png",
    opis: "Elegantan muški parfem za svakodnevne i posebne trenutke.",
    izdvojeno: false
},
{
    id: 90,
    naziv: "Olfazeta 089",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfemi",
    slika: "slike/muski-parfem.png",
    opis: "Profinjen muški parfem modernog i izražajnog karaktera.",
    izdvojeno: false
},
{
    id: 91,
    naziv: "Olfazeta 090",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfemi",
    slika: "slike/muski-parfem.png",
    opis: "Muški parfem elegantnog i sofisticiranog mirisnog potpisa.",
    izdvojeno: false
},
{
    id: 92,
    naziv: "Olfazeta 091",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfemi",
    slika: "slike/muski-parfem.png",
    opis: "Moderan muški miris za upečatljiv i profinjen dojam.",
    izdvojeno: false
},
{
    id: 93,
    naziv: "Olfazeta 092",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfemi",
    slika: "slike/muski-parfem.png",
    opis: "Elegantan muški parfem snažnog i modernog karaktera.",
    izdvojeno: false
},
{
    id: 94,
    naziv: "Olfazeta 093",
    kategorija: "muski",
    kategorijaNaziv: "Muški parfemi",
    slika: "slike/muski-parfem.png",
    opis: "Muški parfem profinjenog i prepoznatljivog mirisnog karaktera.",
    izdvojeno: false
},

{
    id: 95,
    naziv: "Olfazeta 3101",
    kategorija: "unisex",
    kategorijaNaziv: "Unisex parfemi",
    slika: "slike/unisex-parfem.png",
    opis: "Unisex parfem modernog i profinjenog mirisnog karaktera.",
    izdvojeno: false
},
{
    id: 96,
    naziv: "Olfazeta 3102",
    kategorija: "unisex",
    kategorijaNaziv: "Unisex parfemi",
    slika: "slike/unisex-parfem.png",
    opis: "Elegantan unisex miris za upečatljiv i sofisticiran dojam.",
    izdvojeno: false
},
{
    id: 97,
    naziv: "Olfazeta 3103",
    kategorija: "unisex",
    kategorijaNaziv: "Unisex parfemi",
    slika: "slike/unisex-parfem.png",
    opis: "Profinjen unisex parfem za ljubitelje modernih mirisa.",
    izdvojeno: false
},
{
    id: 98,
    naziv: "Olfazeta 3104",
    kategorija: "unisex",
    kategorijaNaziv: "Unisex parfemi",
    slika: "slike/unisex-parfem.png",
    opis: "Unisex parfem elegantnog i izražajnog mirisnog potpisa.",
    izdvojeno: false
},
{
    id: 99,
    naziv: "Olfazeta 3105",
    kategorija: "unisex",
    kategorijaNaziv: "Unisex parfemi",
    slika: "slike/unisex-parfem.png",
    opis: "Moderan unisex miris profinjenog i prepoznatljivog karaktera.",
    izdvojeno: false
},
{
    id: 100,
    naziv: "Olfazeta 3106",
    kategorija: "unisex",
    kategorijaNaziv: "Unisex parfemi",
    slika: "slike/unisex-parfem.png",
    opis: "Elegantan unisex parfem za svakodnevne i posebne prilike.",
    izdvojeno: false
},
{
    id: 101,
    naziv: "Olfazeta 3107",
    kategorija: "unisex",
    kategorijaNaziv: "Unisex parfemi",
    slika: "slike/unisex-parfem.png",
    opis: "Unisex parfem modernog i sofisticiranog mirisnog karaktera.",
    izdvojeno: false
},
{
    id: 102,
    naziv: "Olfazeta 3108",
    kategorija: "unisex",
    kategorijaNaziv: "Unisex parfemi",
    slika: "slike/unisex-parfem.png",
    opis: "Profinjen unisex miris za elegantan i upečatljiv dojam.",
    izdvojeno: false
},
{
    id: 103,
    naziv: "Olfazeta 3109",
    kategorija: "unisex",
    kategorijaNaziv: "Unisex parfemi",
    slika: "slike/unisex-parfem.png",
    opis: "Unisex parfem izražajnog i modernog mirisnog potpisa.",
    izdvojeno: false
},
{
    id: 104,
    naziv: "Olfazeta 3110",
    kategorija: "unisex",
    kategorijaNaziv: "Unisex parfemi",
    slika: "slike/unisex-parfem.png",
    opis: "Elegantan unisex parfem profinjenog karaktera.",
    izdvojeno: false
},
{
    id: 105,
    naziv: "Olfazeta 3111",
    kategorija: "unisex",
    kategorijaNaziv: "Unisex parfemi",
    slika: "slike/unisex-parfem.png",
    opis: "Moderan unisex miris za sofisticiran i prepoznatljiv dojam.",
    izdvojeno: false
},

{
    id: 106,
    naziv: "Olfazeta Luxury 074",
    kategorija: "luksuzni",
    kategorijaNaziv: "Luksuzni parfemi",
    slika: "slike/luksuzni-parfem.png",
    opis: "Luksuzni parfem elegantnog i profinjenog mirisnog karaktera.",
    izdvojeno: false
},
{
    id: 106,
    naziv: "Olfazeta Luxury 074",
    kategorija: "luksuzni",
    kategorijaNaziv: "Luksuzni parfemi",
    slika: "slike/luksuzni-parfem.png",
    opis: "Luksuzni parfem elegantnog i profinjenog mirisnog karaktera.",
    izdvojeno: false
},
{
    id: 107,
    naziv: "Olfazeta Luxury 075",
    kategorija: "luksuzni",
    kategorijaNaziv: "Luksuzni parfemi",
    slika: "slike/luksuzni-parfem.png",
    opis: "Ekskluzivan parfem sofisticiranog i upečatljivog karaktera.",
    izdvojeno: false
},
{
    id: 108,
    naziv: "Olfazeta Luxury 076",
    kategorija: "luksuzni",
    kategorijaNaziv: "Luksuzni parfemi",
    slika: "slike/luksuzni-parfem.png",
    opis: "Luksuzni miris stvoren za elegantan i poseban dojam.",
    izdvojeno: false
},
{
    id: 109,
    naziv: "Olfazeta Luxury 077",
    kategorija: "luksuzni",
    kategorijaNaziv: "Luksuzni parfemi",
    slika: "slike/luksuzni-parfem.png",
    opis: "Profinjen luksuzni parfem izražajnog mirisnog potpisa.",
    izdvojeno: false
},
{
    id: 110,
    naziv: "Olfazeta Luxury 078",
    kategorija: "luksuzni",
    kategorijaNaziv: "Luksuzni parfemi",
    slika: "slike/luksuzni-parfem.png",
    opis: "Ekskluzivan miris modernog i sofisticiranog karaktera.",
    izdvojeno: false
},
{
    id: 111,
    naziv: "Olfazeta Luxury 079",
    kategorija: "luksuzni",
    kategorijaNaziv: "Luksuzni parfemi",
    slika: "slike/luksuzni-parfem.png",
    opis: "Luksuzni parfem za profinjen i upečatljiv mirisni dojam.",
    izdvojeno: false
},
{
    id: 113,
    naziv: "Olfazeta Luxury 081",
    kategorija: "luksuzni",
    kategorijaNaziv: "Luksuzni parfemi",
    slika: "slike/luksuzni-parfem.png",
    opis: "Elegantan luksuzni miris sofisticiranog karaktera.",
    izdvojeno: false
},
{
    id: 114,
    naziv: "Olfazeta Luxury 082",
    kategorija: "luksuzni",
    kategorijaNaziv: "Luksuzni parfemi",
    slika: "slike/luksuzni-parfem.png",
    opis: "Ekskluzivan parfem modernog i profinjenog mirisnog potpisa.",
    izdvojeno: false
},
{
    id: 115,
    naziv: "Olfazeta Luxury 083",
    kategorija: "luksuzni",
    kategorijaNaziv: "Luksuzni parfemi",
    slika: "slike/luksuzni-parfem.png",
    opis: "Luksuzni parfem za elegantan i prepoznatljiv dojam.",
    izdvojeno: false
},
{
    id: 116,
    naziv: "Olfazeta Luxury 084",
    kategorija: "luksuzni",
    kategorijaNaziv: "Luksuzni parfemi",
    slika: "slike/luksuzni-parfem.png",
    opis: "Profinjen luksuzni miris izražajnog karaktera.",
    izdvojeno: false
},
{
    id: 117,
    naziv: "Olfazeta Luxury 085",
    kategorija: "luksuzni",
    kategorijaNaziv: "Luksuzni parfemi",
    slika: "slike/luksuzni-parfem.png",
    opis: "Ekskluzivan parfem za sofisticiran i upečatljiv dojam.",
    izdvojeno: false
},
{
    id: 118,
    naziv: "Olfazeta Luxury 086",
    kategorija: "luksuzni",
    kategorijaNaziv: "Luksuzni parfemi",
    slika: "slike/luksuzni-parfem.png",
    opis: "Luksuzni miris modernog i elegantnog mirisnog potpisa.",
    izdvojeno: false
},
{
    id: 119,
    naziv: "Olfazeta Luxury 087",
    kategorija: "luksuzni",
    kategorijaNaziv: "Luksuzni parfemi",
    slika: "slike/luksuzni-parfem.png",
    opis: "Profinjen luksuzni parfem za poseban mirisni dojam.",
    izdvojeno: false
},
{
    id: 120,
    naziv: "Olfazeta Luxury 088",
    kategorija: "luksuzni",
    kategorijaNaziv: "Luksuzni parfemi",
    slika: "slike/luksuzni-parfem.png",
    opis: "Elegantan luksuzni parfem sofisticiranog karaktera.",
    izdvojeno: false
},
{
    id: 121,
    naziv: "Olfazeta Luxury 089",
    kategorija: "luksuzni",
    kategorijaNaziv: "Luksuzni parfemi",
    slika: "slike/luksuzni-parfem.png",
    opis: "Ekskluzivan miris za elegantan i upečatljiv dojam.",
    izdvojeno: false
},
{
    id: 122,
    naziv: "Olfazeta Luxury 090",
    kategorija: "luksuzni",
    kategorijaNaziv: "Luksuzni parfemi",
    slika: "slike/luksuzni-parfem.png",
    opis: "Luksuzni parfem modernog i profinjenog karaktera.",
    izdvojeno: false
},
{
    id: 123,
    naziv: "Olfazeta Luxury 091",
    kategorija: "luksuzni",
    kategorijaNaziv: "Luksuzni parfemi",
    slika: "slike/luksuzni-parfem.png",
    opis: "Profinjen luksuzni miris prepoznatljivog mirisnog potpisa.",
    izdvojeno: false
},
{
    id: 124,
    naziv: "Olfazeta Luxury 092",
    kategorija: "luksuzni",
    kategorijaNaziv: "Luksuzni parfemi",
    slika: "slike/luksuzni-parfem.png",
    opis: "Ekskluzivan parfem sofisticiranog i elegantnog karaktera.",
    izdvojeno: false
},
{
    id: 125,
    naziv: "Olfazeta Luxury 093",
    kategorija: "luksuzni",
    kategorijaNaziv: "Luksuzni parfemi",
    slika: "slike/luksuzni-parfem.png",
    opis: "Luksuzni parfem za moderan i upečatljiv mirisni dojam.",
    izdvojeno: false
},
{
    id: 126,
    naziv: "Olfazeta Luxury 094",
    kategorija: "luksuzni",
    kategorijaNaziv: "Luksuzni parfemi",
    slika: "slike/luksuzni-parfem.png",
    opis: "Elegantan luksuzni miris profinjenog karaktera.",
    izdvojeno: false
},
{
    id: 127,
    naziv: "Olfazeta Luxury 095",
    kategorija: "luksuzni",
    kategorijaNaziv: "Luksuzni parfemi",
    slika: "slike/luksuzni-parfem.png",
    opis: "Ekskluzivan parfem modernog i sofisticiranog mirisnog potpisa.",
    izdvojeno: false
},
{
    id: 128,
    naziv: "Olfazeta Luxury 096",
    kategorija: "luksuzni",
    kategorijaNaziv: "Luksuzni parfemi",
    slika: "slike/luksuzni-parfem.png",
    opis: "Luksuzni parfem elegantnog i izražajnog karaktera.",
    izdvojeno: false
},
{
    id: 129,
    naziv: "Olfazeta Luxury 097",
    kategorija: "luksuzni",
    kategorijaNaziv: "Luksuzni parfemi",
    slika: "slike/luksuzni-parfem.png",
    opis: "Profinjen luksuzni miris za poseban i prepoznatljiv dojam.",
    izdvojeno: false
},
{
    id: 130,
    naziv: "Olfazeta Luxury 098",
    kategorija: "luksuzni",
    kategorijaNaziv: "Luksuzni parfemi",
    slika: "slike/luksuzni-parfem.png",
    opis: "Ekskluzivan parfem elegantnog i modernog karaktera.",
    izdvojeno: false
},
{
    id: 131,
    naziv: "Olfazeta Luxury 099",
    kategorija: "luksuzni",
    kategorijaNaziv: "Luksuzni parfemi",
    slika: "slike/luksuzni-parfem.png",
    opis: "Luksuzni parfem sofisticiranog i upečatljivog mirisnog potpisa.",
    izdvojeno: false
},

{
    id: 132,
    naziv: "ROSÉA – Ruža i cimet",
    kategorija: "svijece",
    kategorijaNaziv: "Mirisne svijeće",
    slika: "slike/svijeca-rosea.jpg",
    opis: "Mirisna svijeća s elegantnom kombinacijom ruže i cimeta za toplu i ugodnu atmosferu.",
    izdvojeno: false
},
{
    id: 133,
    naziv: "MUSKÉ – Bijeli mošus",
    kategorija: "svijece",
    kategorijaNaziv: "Mirisne svijeće",
    slika: "slike/svijeca-muske.jfif",
    opis: "Mirisna svijeća s nježnim i profinjenim karakterom bijelog mošusa.",
    izdvojeno: false
},
{
    id: 134,
    naziv: "LAVÉA – Baršunasta lavanda",
    kategorija: "svijece",
    kategorijaNaziv: "Mirisne svijeće",
    slika: "slike/svijeca-lavea.jpg",
    opis: "Mirisna svijeća s umirujućim i elegantnim mirisom baršunaste lavande.",
    izdvojeno: false
},
{
    id: 135,
    naziv: "MÉLIA – Med i jasmin",
    kategorija: "svijece",
    kategorijaNaziv: "Mirisne svijeće",
    slika: "slike/svijeca-melia.jpg",
    opis: "Mirisna svijeća koja spaja toplinu meda s profinjenim cvjetnim karakterom jasmina.",
    izdvojeno: false
},
{
    id: 136,
    naziv: "NOIRÉ – Slatko drvo",
    kategorija: "svijece",
    kategorijaNaziv: "Mirisne svijeće",
    slika: "slike/svijeca-noire.jpg",
    opis: "Mirisna svijeća toplog i elegantnog karaktera sa slatkim drvenastim mirisnim dojmom.",
    izdvojeno: false
},

    
{
    id: 137,
    naziv: "Extra-LipStay – Purple Mocha",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "extra-lipstay-purple-mocha.jpg",
    opis: "Dugotrajni proizvod za usne u nijansi Purple Mocha.",
    izdvojeno: false
},
{
    id: 138,
    naziv: "Extra-LipStay – Berry Kiss",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "extra-lipstay-berry-kiss.jpg",
    opis: "Dugotrajni proizvod za usne u nijansi Berry Kiss.",
    izdvojeno: false
},
{
    id: 139,
    naziv: "Extra-LipStay – Royal Mauve",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "extra-lipstay-royal-mauve.png",
    opis: "Dugotrajni proizvod za usne u nijansi Royal Mauve.",
    izdvojeno: false
},
{
    id: 140,
    naziv: "Extra-LipStay – Dark Cocoa",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "extra-lipstay-dark-cocoa.jpg",
    opis: "Dugotrajni proizvod za usne u nijansi Dark Cocoa.",
    izdvojeno: false
},
{
    id: 141,
    naziv: "Extra-LipStay – Chili Love",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "extra-lipstay-chili-love.jpg",
    opis: "Dugotrajni proizvod za usne u nijansi Chili Love.",
    izdvojeno: false
},
{
    id: 142,
    naziv: "Extra-LipStay – Chic Peach",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "extra-lipstay-chic-peach.jpg",
    opis: "Dugotrajni proizvod za usne u nijansi Chic Peach.",
    izdvojeno: false
},
{
    id: 143,
    naziv: "Extra-LipStay – Pinky Doll",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "extra-lipstay-pinky-doll.jpg",
    opis: "Dugotrajni proizvod za usne u nijansi Pinky Doll.",
    izdvojeno: false
},
{
    id: 144,
    naziv: "Extra-LipStay – Ruby Flame",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "extra-lipstay-ruby-flame.jpg",
    opis: "Dugotrajni proizvod za usne u nijansi Ruby Flame.",
    izdvojeno: false
},
{
    id: 145,
    naziv: "Extra-LipStay – Toffee Nude",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "extra-lipstay-toffee-nude.jpg",
    opis: "Dugotrajni proizvod za usne u nijansi Toffee Nude.",
    izdvojeno: false
},
{
    id: 146,
    naziv: "Extra-LipStay – Blush Sand",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "extra-lipstay-blush-sand.jpg",
    opis: "Dugotrajni proizvod za usne u nijansi Blush Sand.",
    izdvojeno: false
},
{
    id: 147,
    naziv: "Extra-LipStay – Dusty Rose",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "extra-lipstay-dusty-rose.jpg",
    opis: "Dugotrajni proizvod za usne u nijansi Dusty Rose.",
    izdvojeno: false
},
{
    id: 148,
    naziv: "Extra-LipStay – Velvet Taupe",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "extra-lipstay-velvet-taupe.jpg",
    opis: "Dugotrajni proizvod za usne u nijansi Velvet Taupe.",
    izdvojeno: false
},
{
    id: 149,
    naziv: "MoniAmori Supreme Lip Treatment – Malina",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "supreme-lip-treatment-malina.jpg",
    opis: "Njegujući tretman za usne s mirisom maline.",
    izdvojeno: false
},
{
    id: 150,
    naziv: "MoniAmori Supreme Lip Treatment – Jagoda",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "supreme-lip-treatment-jagoda.jpg",
    opis: "Njegujući tretman za usne s mirisom jagode.",
    izdvojeno: false
},
{
    id: 151,
    naziv: "MoniAmori Supreme Lip Treatment – Vanilija",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "supreme-lip-treatment-vanilija.jpg",
    opis: "Njegujući tretman za usne s mirisom vanilije.",
    izdvojeno: false
},
{
    id: 152,
    naziv: "Neutralni balzam za usne",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "neutralni-balzam-za-usne.jpg",
    opis: "Neutralni balzam namijenjen njezi i ugodnom osjećaju usana.",
    izdvojeno: false
},
{
    id: 153,
    naziv: "LOLLILIP – Salty Caramel",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "lollilip-salty-caramel.jpg",
    opis: "Proizvod za usne u varijanti Salty Caramel.",
    izdvojeno: false
},
{
    id: 154,
    naziv: "LOLLILIP – Spiced Cookie",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "lollilip-spiced-cookie.jpg",
    opis: "Proizvod za usne u varijanti Spiced Cookie.",
    izdvojeno: false
},
{
    id: 155,
    naziv: "Spicy Gloss – Extra Volume",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "spicy-gloss-extra-volume.jpg",
    opis: "Sjajilo za usne osmišljeno za naglašen sjaj i efekt dodatnog volumena.",
    izdvojeno: false
},
{
    id: 156,
    naziv: "Mat tekući ruž – Red Velvet",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "mat-tekuci-ruz-red-velvet.jpg",
    opis: "Mat tekući ruž u nijansi Red Velvet.",
    izdvojeno: false
},
{
    id: 157,
    naziv: "Mat tekući ruž – Ruby",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "mat-tekuci-ruz-ruby.jpg",
    opis: "Mat tekući ruž u Ruby nijansi.",
    izdvojeno: false
},
{
    id: 158,
    naziv: "Mat tekući ruž – Magenta",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "mat-tekuci-ruz-magenta.jpg",
    opis: "Mat tekući ruž u Magenta nijansi.",
    izdvojeno: false
},
{
    id: 159,
    naziv: "Mat tekući ruž – Dark Plum",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "mat-tekuci-ruz-dark-plum.jpg",
    opis: "Mat tekući ruž u nijansi Dark Plum.",
    izdvojeno: false
},
{
    id: 160,
    naziv: "Dugotrajni mat tekući ruž – Bold Pink",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "mat-tekuci-ruz-bold-pink.jpg",
    opis: "Dugotrajni mat tekući ruž u nijansi Bold Pink.",
    izdvojeno: false
},
{
    id: 161,
    naziv: "Mat tekući ruž – First Magenta",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "mat-tekuci-ruz-first-magenta.jpg",
    opis: "Mat tekući ruž u nijansi First Magenta.",
    izdvojeno: false
},
{
    id: 162,
    naziv: "Mat tekući ruž – Coral Red",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "mat-tekuci-ruz-coral-red.jpg",
    opis: "Mat tekući ruž u nijansi Coral Red.",
    izdvojeno: false
},
{
    id: 163,
    naziv: "Mat tekući ruž – Dark Mauve",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "mat-tekuci-ruz-dark-mauve.jpg",
    opis: "Mat tekući ruž u nijansi Dark Mauve.",
    izdvojeno: false
},
{
    id: 164,
    naziv: "Mat tekući ruž – Light Rose",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "mat-tekuci-ruz-light-rose.jpg",
    opis: "Mat tekući ruž u nijansi Light Rose.",
    izdvojeno: false
},
{
    id: 165,
    naziv: "Mat ruž za usne – Unique Rose",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "mat-ruz-unique-rose.jpg",
    opis: "Mat ruž za usne u nijansi Unique Rose.",
    izdvojeno: false
},
{
    id: 166,
    naziv: "Mat ruž za usne – Raspberry",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "mat-ruz-raspberry.jpg",
    opis: "Mat ruž za usne u Raspberry nijansi.",
    izdvojeno: false
},
{
    id: 167,
    naziv: "Mat ruž za usne – Watermelon",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "mat-ruz-watermelon.jpg",
    opis: "Mat ruž za usne u Watermelon nijansi.",
    izdvojeno: false
},
{
    id: 168,
    naziv: "Sjajni ruž za usne – Azalea",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "sjajni-ruz-azalea.jpg",
    opis: "Sjajni ruž za usne u Azalea nijansi.",
    izdvojeno: false
},
{
    id: 169,
    naziv: "Sjajni ruž za usne – Dark Nude",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "sjajni-ruz-dark-nude.jpg",
    opis: "Sjajni ruž za usne u nijansi Dark Nude.",
    izdvojeno: false
},
{
    id: 170,
    naziv: "Sjajni ruž za usne – Magenta",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "sjajni-ruz-magenta.jpg",
    opis: "Sjajni ruž za usne u Magenta nijansi.",
    izdvojeno: false
},
{
    id: 171,
    naziv: "Sjajni ruž za usne – Strawberry",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "sjajni-ruz-strawberry.jpg",
    opis: "Sjajni ruž za usne u Strawberry nijansi.",
    izdvojeno: false
},
{
    id: 172,
    naziv: "Mat tekući ruž – Cyclamen",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "mat-tekuci-ruz-cyclamen.jpg",
    opis: "Mat tekući ruž u Cyclamen nijansi.",
    izdvojeno: false
},
{
    id: 173,
    naziv: "Mat tekući ruž – Poppy Red",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "mat-tekuci-ruz-poppy-red.jpg",
    opis: "Mat tekući ruž u nijansi Poppy Red.",
    izdvojeno: false
},
{
    id: 174,
    naziv: "Mat tekući ruž – Peach",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "mat-tekuci-ruz-peach.jpg",
    opis: "Mat tekući ruž u Peach nijansi.",
    izdvojeno: false
},
{
    id: 175,
    naziv: "Mat tekući ruž – Rosy Hibiscus",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "mat-tekuci-ruz-rosy-hibiscus.jpg",
    opis: "Mat tekući ruž u nijansi Rosy Hibiscus.",
    izdvojeno: false
},
{
    id: 176,
    naziv: "Mat tekući ruž – Rosé Biscuit",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "mat-tekuci-ruz-rose-biscuit.jpg",
    opis: "Mat tekući ruž u nijansi Rosé Biscuit.",
    izdvojeno: false
},
{
    id: 177,
    naziv: "Mat tekući ruž – Raspberry Red",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "mat-tekuci-ruz-raspberry-red.jpg",
    opis: "Mat tekući ruž u nijansi Raspberry Red.",
    izdvojeno: false
},
{
    id: 178,
    naziv: "Mat tekući ruž – Rosy Brown",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "mat-tekuci-ruz-rosy-brown.jpg",
    opis: "Mat tekući ruž u nijansi Rosy Brown.",
    izdvojeno: false
},
{
    id: 179,
    naziv: "Mat tekući ruž – Fire Red",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "mat-tekuci-ruz-fire-red.jpg",
    opis: "Mat tekući ruž u nijansi Fire Red.",
    izdvojeno: false
},
{
    id: 180,
    naziv: "Mat tekući ruž – Peony",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "mat-tekuci-ruz-peony.jpg",
    opis: "Mat tekući ruž u Peony nijansi.",
    izdvojeno: false
},
{
    id: 181,
    naziv: "Mat tekući ruž – Cherry",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "mat-tekuci-ruz-cherry.jpg",
    opis: "Mat tekući ruž u Cherry nijansi.",
    izdvojeno: false
},
{
    id: 182,
    naziv: "Sjajni ruž za usne – Koraljni",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "sjajni-ruz-koraljni.jpg",
    opis: "Sjajni ruž za usne u koraljnoj nijansi.",
    izdvojeno: false
},
{
    id: 183,
    naziv: "Sjajni ruž za usne – Svijetlo Nude",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "sjajni-ruz-svijetlo-nude.jpg",
    opis: "Sjajni ruž za usne u svijetloj Nude nijansi.",
    izdvojeno: false
},
{
    id: 184,
    naziv: "Sjajni ruž za usne – Trešnja",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "sjajni-ruz-tresnja.jpg",
    opis: "Sjajni ruž za usne u nijansi trešnje.",
    izdvojeno: false
},
{
    id: 185,
    naziv: "Sjajni ruž za usne – Candy Pink",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "sjajni-ruz-candy-pink.jpg",
    opis: "Sjajni ruž za usne u nijansi Candy Pink.",
    izdvojeno: false
},
{
    id: 186,
    naziv: "MoniAmori Juicy Oil – Grožđe",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "moniamori-juicy-oil-grozde.png",
    opis: "Juicy Oil za usne u varijanti Grožđe.",
    izdvojeno: false
},
{
    id: 187,
    naziv: "MoniAmori Juicy Oil – Crna trešnja",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "moniamori-juicy-oil-crna-tresnja.png",
    opis: "Juicy Oil za usne u varijanti Crna trešnja.",
    izdvojeno: false
},
{
    id: 188,
    naziv: "MoniAmori Juicy Oil – Liči",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "moniamori-juicy-oil-lici.png",
    opis: "Juicy Oil za usne u varijanti Liči.",
    izdvojeno: false
},
{
    id: 189,
    naziv: "MoniAmori Juicy Oil – Kokos",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "moniamori-juicy-oil-kokos.png",
    opis: "Juicy Oil za usne u varijanti Kokos.",
    izdvojeno: false
},
{
    id: 190,
    naziv: "MoniAmori Juicy Oil – Lubenica",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "moniamori-juicy-oil-lubenica.png",
    opis: "Juicy Oil za usne u varijanti Lubenica.",
    izdvojeno: false
},
{
    id: 191,
    naziv: "Chogan Extra Plumping sjajilo za usne – Maxi format",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "chogan-extra-plumping-sjajilo.jpg",
    opis: "Kremasti gel-balzam za usne s Maxi-Lipom, ekstraktom đumbira i oleorezinom paprike. Osmišljen za sjaj i efekt punijih usana. 7 ml.",
    izdvojeno: false
},
{
    id: 192,
    naziv: "MoniAmori MyLip Secret – Peel Off ruž",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "moniamori-mylip-secret.jpg",
    opis: "Peel Off proizvod za usne iz linije MoniAmori MyLip Secret.",
    izdvojeno: false
},
{
    id: 193,
    naziv: "Olovka za oči – Wild Magenta",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "olovka-za-oci-wild-magenta.jpg",
    opis: "Olovka za oči u nijansi Wild Magenta.",
    izdvojeno: false
},
{
    id: 194,
    naziv: "Olovka za oči – Soft Butter",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "olovka-za-oci-soft-butter.jpg",
    opis: "Olovka za oči u nijansi Soft Butter.",
    izdvojeno: false
},
{
    id: 195,
    naziv: "Olovka za oči – Crystal Blue",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "olovka-za-oci-crystal-blue.jpg",
    opis: "Olovka za oči u nijansi Crystal Blue.",
    izdvojeno: false
},
{
    id: 196,
    naziv: "Olovka za oči – Green Jungle",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "olovka-za-oci-green-jungle.jpg",
    opis: "Olovka za oči u nijansi Green Jungle.",
    izdvojeno: false
},
{
    id: 197,
    naziv: "Olovka za oči – Midnight Blue",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "olovka-za-oci-midnight-blue.jpg",
    opis: "Olovka za oči u nijansi Midnight Blue.",
    izdvojeno: false
},
{
    id: 198,
    naziv: "Olovka za oči – Dark Truffle",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "olovka-za-oci-dark-truffle.jpg",
    opis: "Olovka za oči u nijansi Dark Truffle.",
    izdvojeno: false
},
{
    id: 199,
    naziv: "Olovka za oči – Silver Moon",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "olovka-za-oci-silver-moon.jpg",
    opis: "Olovka za oči u nijansi Silver Moon.",
    izdvojeno: false
},
{
    id: 200,
    naziv: "Olovka za oči – Bold Orchid",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "olovka-za-oci-bold-orchid.jpg",
    opis: "Olovka za oči u nijansi Bold Orchid.",
    izdvojeno: false
},
{
    id: 201,
    naziv: "Paleta sjenila za oči – Summer Breeze",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "paleta-sjenila-summer-breeze.jpg",
    opis: "Paleta sjenila Summer Breeze za kreiranje različitih make-up izgleda.",
    izdvojeno: false
},
{
    id: 202,
    naziv: "SHINY kompaktno sjenilo – Black",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "shiny-sjenilo-black.jpg",
    opis: "SHINY kompaktno sjenilo u Black nijansi.",
    izdvojeno: false
},
{
    id: 203,
    naziv: "SHINY kompaktno sjenilo – Pearl Tiffany",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "shiny-sjenilo-pearl-tiffany.jpg",
    opis: "SHINY kompaktno sjenilo u Pearl Tiffany nijansi.",
    izdvojeno: false
},
{
    id: 204,
    naziv: "SHINY kompaktno sjenilo – Pearl Lilac",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "shiny-sjenilo-pearl-lilac.jpg",
    opis: "SHINY kompaktno sjenilo u Pearl Lilac nijansi.",
    izdvojeno: false
},
{
    id: 205,
    naziv: "SHINY kompaktno sjenilo – Teal",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "shiny-sjenilo-teal.jpg",
    opis: "SHINY kompaktno sjenilo u Teal nijansi.",
    izdvojeno: false
},
{
    id: 206,
    naziv: "SHINY kompaktno sjenilo – Pearl Grey",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "shiny-sjenilo-pearl-grey.jpg",
    opis: "SHINY kompaktno sjenilo u Pearl Grey nijansi.",
    izdvojeno: false
},
{
    id: 207,
    naziv: "SHINY kompaktno sjenilo – White",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "shiny-sjenilo-white.jpg",
    opis: "SHINY kompaktno sjenilo u White nijansi.",
    izdvojeno: false
},
{
    id: 208,
    naziv: "SHINY kompaktno sjenilo – Dark Brown",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "shiny-sjenilo-dark-brown.jpg",
    opis: "SHINY kompaktno sjenilo u Dark Brown nijansi.",
    izdvojeno: false
},
{
    id: 209,
    naziv: "SHINY kompaktno sjenilo – Sand",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "shiny-sjenilo-sand.jpg",
    opis: "SHINY kompaktno sjenilo u Sand nijansi.",
    izdvojeno: false
},
{
    id: 210,
    naziv: "SHINY kompaktno sjenilo – Bronze",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "shiny-sjenilo-bronze.jpg",
    opis: "SHINY kompaktno sjenilo u Bronze nijansi.",
    izdvojeno: false
},
{
    id: 211,
    naziv: "SHINY kompaktno sjenilo – Ice Rose",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "shiny-sjenilo-ice-rose.jpg",
    opis: "SHINY kompaktno sjenilo u Ice Rose nijansi.",
    izdvojeno: false
},
{
    id: 212,
    naziv: "SHIMMER kompaktno sjenilo – Pearly Peach",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "shimmer-sjenilo-pearly-peach.jpg",
    opis: "SHIMMER kompaktno sjenilo u Pearly Peach nijansi.",
    izdvojeno: false
},
{
    id: 213,
    naziv: "SHIMMER kompaktno sjenilo – Pearl Ivory",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "shimmer-sjenilo-pearl-ivory.jpg",
    opis: "SHIMMER kompaktno sjenilo u Pearl Ivory nijansi.",
    izdvojeno: false
},
{
    id: 214,
    naziv: "SHIMMER kompaktno sjenilo – Copper",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "shimmer-sjenilo-copper.jpg",
    opis: "SHIMMER kompaktno sjenilo u Copper nijansi.",
    izdvojeno: false
},
{
    id: 215,
    naziv: "SHIMMER kompaktno sjenilo – Metallic Rose",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "shimmer-sjenilo-metallic-rose.jpg",
    opis: "SHIMMER kompaktno sjenilo u Metallic Rose nijansi.",
    izdvojeno: false
},
{
    id: 216,
    naziv: "SHIMMER kompaktno sjenilo – Bronze",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "shimmer-sjenilo-bronze.jpg",
    opis: "SHIMMER kompaktno sjenilo u Bronze nijansi.",
    izdvojeno: false
},
{
    id: 217,
    naziv: "SHIMMER kompaktno sjenilo – Antique Pink",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "shimmer-sjenilo-antique-pink.jpg",
    opis: "SHIMMER kompaktno sjenilo u Antique Pink nijansi.",
    izdvojeno: false
},
{
    id: 218,
    naziv: "MATTE kompaktno sjenilo – Brick",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "matte-sjenilo-brick.jpg",
    opis: "Kompaktno sjenilo izuzetno meke teksture s intenzivnom pigmentacijom i izrazito mat završetkom. Visoko pokrivni pigmenti omogućuju jednostavno nanošenje. 3 g.",
    izdvojeno: false
},
{
    id: 219,
    naziv: "MATTE kompaktno sjenilo – Ivy",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "matte-sjenilo-ivy.jpg",
    opis: "MATTE sjenilo u Ivy nijansi s mekanom i ugodnom teksturom. Pruža intenzivnu pigmentaciju, visoku pokrivnost i izražen mat završetak. 3 g.",
    izdvojeno: false
},
{
    id: 220,
    naziv: "MATTE kompaktno sjenilo – Azure",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "matte-sjenilo-azure.jpg",
    opis: "Kompaktno sjenilo u Azure nijansi s mekom i bogatom teksturom. Pruža trenutnu intenzivnu boju i izražen mat efekt. 3 g.",
    izdvojeno: false
},
{
    id: 221,
    naziv: "MATTE kompaktno sjenilo – Light Coral",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "matte-sjenilo-light-coral.jpg",
    opis: "MATTE kompaktno sjenilo u Light Coral nijansi. Mekana tekstura i visoko pokrivni pigmenti pružaju intenzivnu boju i precizno nanošenje. 3 g.",
    izdvojeno: false
},
{
    id: 222,
    naziv: "MATTE kompaktno sjenilo – Green Tiffany",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "matte-sjenilo-green-tiffany.jpg",
    opis: "Kompaktno MATTE sjenilo u Green Tiffany nijansi s intenzivnom pigmentacijom i mat završetkom. Mekana tekstura omogućuje jednostavno i ugodno nanošenje. 3 g.",
    izdvojeno: false
},
{
    id: 223,
    naziv: "MATTE kompaktno sjenilo – Elegant Rose",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "matte-sjenilo-elegant-rose.jpg",
    opis: "MATTE sjenilo u Elegant Rose nijansi s izuzetno mekanom teksturom, intenzivnom pigmentacijom i dodatnim mat završetkom. 3 g.",
    izdvojeno: false
},
{
    id: 224,
    naziv: "MATTE kompaktno sjenilo – Crna",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "matte-sjenilo-crna.jpg",
    opis: "Intenzivno crno MATTE kompaktno sjenilo s mekanom teksturom i snažnom pigmentacijom. Pruža izražen mat efekt i jednostavno nanošenje. 3 g.",
    izdvojeno: false
},
{
    id: 225,
    naziv: "MATTE kompaktno sjenilo – Ljubičasta",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "matte-sjenilo-ljubicasta.jpg",
    opis: "MATTE kompaktno sjenilo u ljubičastoj nijansi s izuzetno mekanom teksturom. Pruža trenutnu intenzivnu boju i ekstra mat završetak. 3 g.",
    izdvojeno: false
},
{
    id: 226,
    naziv: "MATTE kompaktno sjenilo – Chocolate",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "matte-sjenilo-chocolate.jpg",
    opis: "MATTE sjenilo u Chocolate nijansi s mekanom i nježnom teksturom. Intenzivna pigmentacija pruža bogatu boju i mat završetak. 3 g.",
    izdvojeno: false
},
{
    id: 227,
    naziv: "MATTE kompaktno sjenilo – Chalk White",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "matte-sjenilo-chalk-white.jpg",
    opis: "Kompaktno MATTE sjenilo u Chalk White nijansi s mekanom teksturom, intenzivnom pigmentacijom i ekstra mat završetkom. 3 g.",
    izdvojeno: false
},
{
    id: 228,
    naziv: "Kompaktno sjenilo – Bright Bronze",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "kompaktno-sjenilo-bright-bronze.jpg",
    opis: "Visoko pigmentirano kompaktno sjenilo sa svilenkastom teksturom i sjajnim završetkom. Sadrži biserne čestice za bogatu refleksiju svjetlosti, a formula je obogaćena Aloe Verom i vitaminom E. 3 g.",
    izdvojeno: false
},
{
    id: 229,
    naziv: "Paleta s 9 sjenila – Autumn Vibes",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "paleta-sjenila-autumn-vibes.jpg",
    opis: "Paleta s 9 sjenila intenzivnih boja i efektnog završetka. Visoko pokrivna kremasta tekstura stapa se s kapcima i pruža dugotrajnu boju te profesionalan rezultat. 18 g.",
    izdvojeno: false
},
{
    id: 230,
    naziv: "Paleta s 9 sjenila – Winter Queen",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "paleta-sjenila-winter-queen.jpg",
    opis: "Paleta Winter Queen s 9 intenzivnih nijansi za blistav i upečatljiv pogled. Kremasta i visoko pokrivna tekstura pruža dugotrajnu boju i profesionalan rezultat. 18 g.",
    izdvojeno: false
},
{
    id: 231,
    naziv: "Paleta s 9 sjenila – Proljetno cvijeće",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "paleta-sjenila-proljetno-cvijece.jpg",
    opis: "Paleta s 9 sjenila intenzivnih boja i upečatljivog završetka. Kremasta, visoko pokrivna tekstura stapa se s kapcima i pruža čistu dugotrajnu boju. 18 g.",
    izdvojeno: false
},
{
    id: 232,
    naziv: "DIAMOND CREAM sjenilo za oči – Bronze",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "diamond-cream-bronze.jpg",
    opis: "Tekuće sjenilo za oči s reflektirajućim pigmentima koji stvaraju intenzivne svjetlucave naglaske. Mekana i bogata tekstura pruža sjajan i dugotrajan završetak te jednostavno nanošenje. 5 g.",
    izdvojeno: false
},
{
    id: 233,
    naziv: "DIAMOND CREAM sjenilo za oči – Metallic Copper",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "diamond-cream-metallic-copper.jpg",
    opis: "Tekuće sjenilo u Metallic Copper nijansi s reflektirajućim pigmentima. Izuzetno mekana i bogata tekstura pruža intenzivan sjaj, dugotrajan završetak i jednostavno nanošenje. 5 g.",
    izdvojeno: false
},
{
    id: 234,
    naziv: "DIAMOND CREAM sjenilo za oči – Šampanjac",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "diamond-cream-sampanjac.jpg",
    opis: "Tekuće sjenilo u elegantnoj nijansi šampanjca s reflektirajućim pigmentima. Pruža intenzivne svjetlucave naglaske, bogatu teksturu i dugotrajan sjajni završetak. 5 g.",
    izdvojeno: false
},
{
    id: 235,
    naziv: "Chogan Extra Volume maskara",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "chogan-extra-volume-maskara.jpg",
    opis: "Maskara za duže, uvijene i voluminozne trepavice već nakon jednog poteza. Formula s prirodnim voskovima i pantenolom pruža punoću i sjaj, dok posebna četkica ravnomjerno raspoređuje proizvod i doseže čak i najkraće trepavice. 9 ml.",
    izdvojeno: false
},
{
    id: 236,
    naziv: "MoniAmori Solar Defence SPF 30 – Tiramisu",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "solar-defence-tiramisu.jpg",
    opis: "Kompaktni puder sa SPF 30 za sve tipove kože. Kremasta tekstura pretvara se u mekani puder, ujednačava ten i štiti od UVA i UVB zraka. Veganska formula bez talka i parabena ostavlja kožu mekom i hidratiziranom.",
    izdvojeno: false
},
{
    id: 237,
    naziv: "MoniAmori Solar Defence SPF 30 – Creme Caramel",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "solar-defence-creme-caramel.jpg",
    opis: "Kompaktni puder sa SPF 30 u nijansi Creme Caramel. Ujednačava ten, pruža dugotrajan završetak i pomaže zaštititi kožu od UVA i UVB zraka.",
    izdvojeno: false
},
{
    id: 238,
    naziv: "MoniAmori Solar Defence SPF 30 – Cinnamon Roll",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "solar-defence-cinnamon-roll.jpg",
    opis: "Kompaktni puder sa SPF 30 u nijansi Cinnamon Roll. Kremasta tekstura pruža ujednačen završetak i zaštitu od UVA i UVB zraka.",
    izdvojeno: false
},
{
    id: 239,
    naziv: "MoniAmori Solar Defence SPF 30 – Amaretto",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "solar-defence-amaretto.jpg",
    opis: "Kompaktni puder sa SPF 30 u nijansi Amaretto. Formula ujednačava ten i pruža zaštitu od UVA i UVB zraka.",
    izdvojeno: false
},
{
    id: 240,
    naziv: "MoniAmori Solar Defence SPF 30 – Meringa",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "solar-defence-meringa.jpg",
    opis: "Kompaktni puder sa SPF 30 u nijansi Meringa. Kremasta tekstura pruža dugotrajan i ujednačen završetak uz zaštitu od UVA i UVB zraka.",
    izdvojeno: false
},
{
    id: 241,
    naziv: "Prešano rumenilo – Warm Beige",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "presano-rumenilo-warm-beige.jpg",
    opis: "Prešano rumenilo meke i kremaste teksture koje se lako nanosi i stapa s kožom.",
    izdvojeno: false
},
{
    id: 242,
    naziv: "Prešano rumenilo – Peach",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "presano-rumenilo-peach.jpg",
    opis: "Prešano rumenilo u Peach nijansi s mekanom i kremastom teksturom.",
    izdvojeno: false
},
{
    id: 243,
    naziv: "Prešano rumenilo – Strawberry",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "presano-rumenilo-strawberry.jpg",
    opis: "Prešano rumenilo u Strawberry nijansi za svjež i prirodan izgled.",
    izdvojeno: false
},
{
    id: 244,
    naziv: "Prešano rumenilo – Raspberry",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "presano-rumenilo-raspberry.jpg",
    opis: "Prešano rumenilo u Raspberry nijansi s ugodnom kremastom teksturom.",
    izdvojeno: false
},
{
    id: 245,
    naziv: "Prešani bronzer – Terracotta",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "presani-bronzer-terracotta.jpg",
    opis: "Prešani bronzer u Terracotta nijansi za prirodan efekt osunčanog tena.",
    izdvojeno: false
},
{
    id: 246,
    naziv: "Prešani bronzer – First Ten",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "presani-bronzer-first-ten.jpg",
    opis: "Prešani bronzer u First Ten nijansi s mekanom teksturom i prirodnim završetkom.",
    izdvojeno: false
},
{
    id: 247,
    naziv: "Prešani bronzer – Biscuit",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "presani-bronzer-biscuit.jpg",
    opis: "Prešani bronzer u Biscuit nijansi za prirodan osunčani izgled.",
    izdvojeno: false
},
{
    id: 248,
    naziv: "Korektor – Light Beige",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "korektor-light-beige.jpg",
    opis: "Korektor u Light Beige nijansi za ujednačavanje tena i prikrivanje nepravilnosti.",
    izdvojeno: false
},
{
    id: 249,
    naziv: "Korektor – Ivory Green",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "korektor-ivory-green.jpg",
    opis: "Korektor u Ivory Green nijansi za korekciju izgleda nepravilnosti.",
    izdvojeno: false
},
{
    id: 250,
    naziv: "Korektor – Honey",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "korektor-honey.jpg",
    opis: "Korektor u Honey nijansi za prikrivanje nepravilnosti i ujednačavanje tena.",
    izdvojeno: false
},
{
    id: 251,
    naziv: "Korektor – Warm Rose",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "korektor-warm-rose.jpg",
    opis: "Korektor u Warm Rose nijansi za korekciju i ujednačavanje izgleda tena.",
    izdvojeno: false
},
{
    id: 252,
    naziv: "Korektor – Ivory",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "korektor-ivory.jpg",
    opis: "Korektor u Ivory nijansi namijenjen prikrivanju nepravilnosti.",
    izdvojeno: false
},
{
    id: 253,
    naziv: "Korektor – Cool Rose",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "korektor-cool-rose.jpg",
    opis: "Korektor u Cool Rose nijansi za korekciju izgleda kože.",
    izdvojeno: false
},
{
    id: 254,
    naziv: "Jumbo korektor u olovci – Ivory",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "jumbo-korektor-ivory.jpg",
    opis: "Jumbo korektor u olovci u Ivory nijansi za jednostavno i precizno nanošenje.",
    izdvojeno: false
},
{
    id: 255,
    naziv: "Jumbo korektor u olovci – Light Beige",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "jumbo-korektor-light-beige.jpg",
    opis: "Jumbo korektor u olovci u Light Beige nijansi za precizno nanošenje.",
    izdvojeno: false
},
{
    id: 256,
    naziv: "Jumbo korektor u olovci – Light Rose",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "jumbo-korektor-light-rose.jpg",
    opis: "Jumbo korektor u olovci u Light Rose nijansi za ciljano nanošenje.",
    izdvojeno: false
},

// Od ID 257 nadalje pojedinačne slike još nismo dodali,
// zato privremeno koriste slike/makeup.png.

{
    id: 257,
    naziv: "Perfect Hydra Foundation – Caramel",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Tekući puder lagane teksture i baršunastog završetka koji ujednačava ten i optički prikriva nepravilnosti.",
    izdvojeno: false
},
{
    id: 258,
    naziv: "Perfect Hydra Foundation – Peach",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Tekući puder lagane teksture u Peach nijansi s baršunastim završetkom.",
    izdvojeno: false
},
{
    id: 259,
    naziv: "Perfect Hydra Foundation – Beige",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Tekući puder u Beige nijansi koji ujednačava izgled tena i pruža baršunast završetak.",
    izdvojeno: false
},
{
    id: 260,
    naziv: "Perfect Hydra Foundation – Neutral",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Perfect Hydra tekući puder u Neutral nijansi za ujednačen i zaglađen izgled tena.",
    izdvojeno: false
},
{
    id: 261,
    naziv: "Perfect Hydra Foundation – Ivory",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Tekući puder u Ivory nijansi s laganom teksturom i baršunastim završetkom.",
    izdvojeno: false
},
{
    id: 262,
    naziv: "Instant Matte Foundation – Nude Beige",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Dugotrajna tekuća podloga s izvrsnim prekrivanjem i baršunasto mat završetkom.",
    izdvojeno: false
},
{
    id: 263,
    naziv: "Instant Matte Foundation – Dark Beige",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Dugotrajna tekuća podloga u Dark Beige nijansi s visokom moći prekrivanja.",
    izdvojeno: false
},
{
    id: 264,
    naziv: "Instant Matte Foundation – Pink Nude",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Tekuća podloga u Pink Nude nijansi koja pruža dobro prekrivanje i mat završetak.",
    izdvojeno: false
},
{
    id: 265,
    naziv: "Instant Matte Foundation – Medium Beige",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Dugotrajna tekuća podloga u Medium Beige nijansi s ujednačenim mat završetkom.",
    izdvojeno: false
},
{
    id: 266,
    naziv: "MoniAmori Blush & Kiss Stick – Lubenica",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "2-u-1 stick za lice i usne s mat završetkom i nadogradivom pokrivenošću.",
    izdvojeno: false
},
{
    id: 267,
    naziv: "MoniAmori Blush & Kiss Stick – Breskva",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "2-u-1 stick u nijansi Breskva namijenjen licu i usnama.",
    izdvojeno: false
},
{
    id: 268,
    naziv: "MoniAmori Blush & Kiss Stick – Jagodičasto voće",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "2-u-1 stick za lice i usne u nijansi Jagodičasto voće.",
    izdvojeno: false
},
{
    id: 269,
    naziv: "MoniAmori Sculpt & Lift – Stone",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Stick za konturiranje s mat završetkom i nadogradivom pokrivenošću.",
    izdvojeno: false
},
{
    id: 270,
    naziv: "MoniAmori Sculpt & Lift – Ebony",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Sculpt & Lift stick u Ebony nijansi za oblikovanje i naglašavanje kontura lica.",
    izdvojeno: false
},
{
    id: 271,
    naziv: "MoniAmori Sculpt & Lift – Clay",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Sculpt & Lift stick u Clay nijansi s mat završetkom.",
    izdvojeno: false
},
{
    id: 272,
    naziv: "MoniAmori Light & Go – Šampanjac",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Highlighter stick mekog i svilenkastog dodira za osvjetljavanje lica i dekoltea.",
    izdvojeno: false
},
{
    id: 273,
    naziv: "MoniAmori Light & Go – Rose Gold",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Highlighter stick u Rose Gold nijansi za naglašavanje i osvjetljavanje lica.",
    izdvojeno: false
},
{
    id: 274,
    naziv: "MoniAmori Light & Go – Bronze",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Highlighter stick u Bronze nijansi s mekim i svilenkastim dodirom.",
    izdvojeno: false
},
{
    id: 275,
    naziv: "Umjetne trepavice – Doe Gaze",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Umjetne trepavice za intenzivan Bambi pogled. Uz pravilno održavanje mogu se ponovno koristiti. Ljepilo nije uključeno.",
    izdvojeno: false
},
{
    id: 276,
    naziv: "Umjetne trepavice – Extreme Gaze",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Umjetne trepavice za intenzivan i izražajan pogled. Ljepilo nije uključeno.",
    izdvojeno: false
},
{
    id: 277,
    naziv: "Umjetne trepavice – Baby Doll Gaze",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Umjetne trepavice za intenzivan i senzualan pogled. Ljepilo nije uključeno.",
    izdvojeno: false
},
{
    id: 278,
    naziv: "Umjetne trepavice – Iconic Gaze",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Umjetne trepavice za intenzivan i upečatljiv pogled. Ljepilo nije uključeno.",
    izdvojeno: false
},
{
    id: 279,
    naziv: "Umjetne trepavice – Classic Gaze",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Umjetne trepavice za intenzivan, ali prirodan i elegantan izgled. Ljepilo nije uključeno.",
    izdvojeno: false
},
{
    id: 280,
    naziv: "Umjetne trepavice – Čuperci",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Umjetne trepavice u čupercima u tri različite dužine za personaliziran i prirodan izgled. Ljepilo nije uključeno.",
    izdvojeno: false
},
{
    id: 281,
    naziv: "Ljepilo za umjetne trepavice – 3 ml",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Ljepilo za umjetne trepavice s praktičnom četkicom za precizno nanošenje.",
    izdvojeno: false
},
{
    id: 282,
    naziv: "Aplikator za trepavice",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Praktičan aplikator za precizno i jednostavno postavljanje umjetnih trepavica.",
    izdvojeno: false
},
{
    id: 283,
    naziv: "Chogan maskara za maksimalnu dužinu i definiciju",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Maskara za maksimalnu dužinu i definiciju koja pruža slojeviti volumen i panoramski efekt.",
    izdvojeno: false
},
{
    id: 284,
    naziv: "Chogan vodootporna maskara za zavodljive trepavice – 10,5 g",
    kategorija: "makeup",
    kategorijaNaziv: "Make Up",
    slika: "slike/makeup.png",
    opis: "Vodootporna uvijajuća maskara koja definira i razdvaja trepavice te pruža efekt volumena.",
    izdvojeno: false
}

];