
/* Laboratorium 7 */
/* Generowanie zawartości strony */

function article_borówka() {
    /* usunięcie elementów znajdujących się na stronie */
    document.getElementById("strona_główna").innerHTML = " ";
    document.getElementById("more").innerHTML = " ";
    /* wypełnienie div id artukul trescią */
    document.getElementById("artykul").innerHTML = "<h2>Dlaczego borówka amerykańska nie owocuje?</h2>" +
            "<a href=\"images/borówka.jpg\"><img src=\"images/borówka.jpg\" alt=\"Borówka\" title=\"Borówka\"></a>" +
            "<p>Z każdym rokiem rośnie zainteresowanie ogrodników bliską krewniaczką naszych leśnych jagód – borówką amerykańską. Jagody tego krzewu są nie tylko smaczne, ale i zawierają ogromną ilość pożytecznych substancji. Pomagają regulować poziom cholesterolu, wchłaniają substancje toksyczne, działają korzystnie na wzrok. A na dodatek krzewy są odporne na mróz, choroby i szkodniki.</p>" +
            "<p>Zdarza się jednak, że ogrodnik-amator, pełen entuzjazmu, sadzi w ogrodzie borówkę amerykańską, a potem przeżywa rozczarowanie. Okazuje się bowiem, że borówka nie tylko nie owocuje, ale źle rośnie i często usycha. Przyczyną są pewne błędy popełniane przez początkujących ogrodników. Zasady uprawy borówki amerykańskiej znajdziesz tutaj. A poniżej opisujemy 6 najczęstszych błędów.</p>" +
            "<h3>Błąd pierwszy: Nieodpowiednie przygotowanie gleby</h3>" +
            "<p>Gleba dla borówki amerykańskiej musi być koniecznie kwaśna. Nie wystarczy stwierdzenie, że w ogrodzie rośnie szczaw polny albo fiołek trójbarwny. Te i inne rośliny wskaźnikowe rosną przy pH 6,0-6,5, podczas gdy borówka potrzebuje bardziej kwaśnej gleby o pH 3,5-4,5. Dlatego przed sadzeniem trzeba w dołku umieścić torf, kompost oraz ściółkę sosnową i świerkową.</p>" +
            "<p>Sadząc świeżo zakupioną borówkę w ogrodzie trzeba zwracać uwagę, aby umieścić ją w przygotowanym dołku razem z całą bryłą ziemi, w której rosła. Sadzonki z odkrytym systemem korzeniowym z reguły obumierają po pewnym czasie z braku na ich korzeniach grzybów symbiotycznych. Dla absolutnej większości roślin współpraca z grzybami ma pierwszorzędne znaczenie, a dla niektórych jest wręcz sprawą życia i śmierci.</p>" +
            "<p>Rośliny z rodziny wrzosowatych (Ericaceae), czyli właśnie wszystkie borówki, wrzosy, gruszyczki i wiele innych, wypracowały sobie specyficzną formę symbiozy z grzybami, nazywaną mikoryzą erikoidalną. To dzięki mikoryzie rośliny mogą utrzymać się i rozwijać na glebach mocno kwaśnych albo ubogich. Powszechne i niezwykle stare (ok. 500 mln lat) zjawisko mikoryzy polega w największym skrócie na tym, że grzyb zaopatruje roślinę składniki mineralne, a sam korzysta ze związków organicznych powstałych w wyniku fotosyntezy.</p>" +
            "<h3>Błąd drugi: Niewłaściwe miejsce</h3>" +
            "<p>Dla borówki amerykańskiej trzeba wybrać w ogrodzie miejsce słoneczne, albo przynajmniej w półcieniu. W miejscu sadzenia nie może się gromadzić woda z wiosennych roztopów. Poziom wód gruntowych również nie może być wysoki. Z faktu, że w swojej ojczyźnie borówka amerykańska występuje na bagnistych łąkach i w podmokłych lasach nie wynika, że jej odmiany hodowlane lubią stać w wodzie. Wręcz przeciwnie: borówka ogrodowa musi mieć podłoże przepuszczalne, pulchne i w miarę wilgotne. Żadnego zastoju wody! Korzenie muszą oddychać.</p>" +
            "<h3>Błąd trzeci: Pozostawienie bez podlewania</h3>" +
            "<p>Zdarza się, że posadzona wiosną borówka amerykańska jest pozostawiona sama sobie na całe lato. A tymczasem wymaga ona w czasie suchej pogody podlewania od późnej wiosny do późnej jesieni. Pulchna gleba szybko wysycha, zwłaszcza jeśli zawiera torf. Źle wymieszane składniki w dołku na sadzonkę mogą wyschnąć na kamień. Młode korzenie w takich warunkach muszą zginać.</p>" +
            "<h3>Błąd czwarty: Niedostatek pożywienia</h3>" +
            "<p>Borówka może cierpieć na niedobór składników pokarmowych na skutek naturalnego odkwaszenia gleby poprzez opady deszczu, dopływu wilgoci z dolnych warstw gruntu, podlewania. Jeśli współczynnik pH wody, którą podlewa się rośliny jest powyżej 5,5, to z czasem podłoże wypełniające dołek sadzonki także osiągnie podobną wartość. Dlatego raz w tygodniu, od kwietnia do września, zaleca się podlewanie borówki amerykańskiej wodą zakwaszoną. Można użyć do tego celu octu (200 ml 9% octu na 10 l wody) albo kwasu cytrynowego (2 łyżeczki na 3 l wody).</p>" +
            "<p><b>Borówka może cierpieć na niedobór składników pokarmowych na skutek naturalnego odkwaszenia gleby poprzez opady deszczu, dopływu wilgoci z dolnych warstw gruntu, podlewania.</b></p>" +
            "<p>Borówka nie powinna być posadzona w miejscu, gdzie rosły ziemniaki albo inne warzywa. Jej poprzednikami mogą być tylko wieloletnie trawy, a grunt nie powinien być nawożony organicznie przez pięć ostatnich lat. Do nawożenia borówki nie używa się kompostu ani obornika, tylko nawóz mineralny</p>" +
            "<h3>Błąd piąty: Głębokie spulchnianie gleby wokół borówki</h3>" +
            "<p>System korzeniowy borówki amerykańskiej jest położony płytko, prawie cały w wierzchniej warstwie gleby na głębokości do 25 cm. Przy pieleniu nie należy posługiwać się motyką, ani innymi narzędziami, które nieodwracalnie uszkadzają korzenie. Spulchniać glebę wokół krzewu można na głębokość nie większą, niż 5 cm. Za to warto przykryć wierzchnią warstwę gleby trocinami (5-8 cm). To pozwoli rozwiązać problem chwastów, a poza tym pomoże dłużej zachować wilgoć i ciepło w strefie korzeni.</p>" +
            "<h3>Błąd szósty: Brak przycinania krzewu</h3>" +
            "<p>Spadek kwitnienia i owocowania borówki może wynikać z nieprawidłowego formowania krzewu albo raczej z jego braku. Roślina powinna mieć nie mnij niż 6-7 mocnych pędów. Słabe pędy, jak i te rosnące do wewnątrz, trzeba koniecznie usuwać, aby prześwietlić krzew. Zdarza się, ze końcówki pędów, które nie zdążyły jesienią zdrewnieć, zimą przemarzają. Na wiosnę trzeba je przed rozwojem pąków odciąć. Stare krzewy borówki, podobnie jak na przykład czarnej porzeczki, odmładza się. Najlepiej stopniowo, nie w jednym roku, usuwa się pędy powyżej 7 lat i pozostawia młode i silne.</p>" +
            "<p>Zawartość pochodzi ze strony:<a href=\"https://twojogrodek.pl/Dlaczego-borowka-amerykanska-nie-owocuje\">https://twojogrodek.pl/Dlaczego-borowka-amerykanska-nie-owocuje</a></p> <h2>Czytaj więcej</h2>";

    /* utworzenie elementów box2 podobnych jak w stronie głównej, które będą znajdować się pod artykułem, staram się aby pod każdym artykułem pojawiały się różne inne i aby artykuł nie powtarzał się u dołu strony */
    const box1 = document.createElement("div");
    box1.classList.add("box2");
    box1.id = "box_dodany1";
    box1.innerHTML = "<button onclick=\"article_czerwiec()\"><img src=\"images/czerwiec.jpg\" alt=\"Czerwiec w ogrodzie\"></button>";
    /* utworzenie elementu tekst, które będzie się znajdować w box2 tak jak w stronie głównej*/
    const tresc1 = document.createElement("div");
    tresc1.classList.add("tekst");
    tresc1.innerHTML = "<h3><button onclick=\"article_czerwiec()\">Czerwiec w ogrodzie - co robić?</button></h3> <br>Czerwiec to miesiąc intensywnego wzrostu roślin i pierwszych plonów w ogrodzie użytkowym. Wysokie temperatury i długi dzień pozwalają ... <button onclick=\"article_czerwiec()\">Czytaj dalej</button>";

    /* dodanie tych elementów do dokumentu, append - dopisanie w elemencie podanym w getelementbyid (na koniec jego tresci) */
    document.getElementById("more").append(box1);
    document.getElementById("box_dodany1").append(tresc1);

    /* to samo co wyżej tylko dla innej treści */
    const box2 = document.createElement("div");
    box2.classList.add("box2");
    box2.id = "box_dodany2";
    box2.innerHTML = "<button onclick=\"article_storczyk()\"><img src=\"images/storczyk.jpg\" alt=\"Storczyk\"></button>";
    const tresc2 = document.createElement("div");
    tresc2.classList.add("tekst");
    tresc2.innerHTML = "<h3><button onclick=\"article_storczyk()\">Dlaczego storczyk nie kwitnie?</button></h3> <br>Storczyki to jedne z najpiękniejszych roślin świata, które mamy okazję uprawiać w naszych mieszkaniach. Bogactwo gatunkowe storczyków zadziwia, ... <button onclick=\"article_storczyk()\">Czytaj dalej</button>";

    document.getElementById("more").append(box2);
    document.getElementById("box_dodany2").append(tresc2);

    const box3 = document.createElement("div");
    box3.classList.add("box2");
    box3.id = "box_dodany3";
    box3.innerHTML = "<button onclick=\"article_lilie()\"><img src=\"images/lilia.jpg\" alt=\"Lilia\"></button>";
    const tresc3 = document.createElement("div");
    tresc3.classList.add("tekst");
    tresc3.innerHTML = "<h3><button onclick=\"article_lilie()\">Kiedy i jak sadzić lilie do ogrodu?</button></h3> <br>Lilie są czarującymi kwiatami i słynne są ze swojego intensywnego zapachu. Wybór jest ogromny, ponieważ istnieje ponad sto gatunków i tysiące odmian tej rośliny ... <button onclick=\"article_lilie()\">Czytaj dalej</button>";

    document.getElementById("more").append(box3);
    document.getElementById("box_dodany3").append(tresc3);

    const box4 = document.createElement("div");
    box4.classList.add("box2");
    box4.id = "box_dodany4";
    box4.innerHTML = "<button onclick=\"article_ślimaki()\"><img src=\"images/ślimaki.jpg\" alt=\"Ślimaki\"></button>";
    const tresc4 = document.createElement("div");
    tresc4.classList.add("tekst");
    tresc4.innerHTML = "<h3><button onclick=\"article_ślimaki()\">Sposób na ślimaki</button></h3> <br>Śimaki mogą stanowić poważny problem, gdyż są to prawdopodobnie najbardziej żarłoczne szkodniki w naszych ogrodach. Mogą powodować ... <button onclick=\"article_ślimaki()\">Czytaj dalej</button>";

    document.getElementById("more").append(box4);
    document.getElementById("box_dodany4").append(tresc4);
}

/* to samo co wyżej tylko dla innej treści */
function article_czerwiec() {
    document.getElementById("strona_główna").innerHTML = " ";
    document.getElementById("more").innerHTML = " ";
    document.getElementById("artykul").innerHTML = "<h2>Czerwiec w ogrodzie - co robić?</h2>" +
            "<a href=\"images/czerwiec.jpg\"><img src=\"images/czerwiec.jpg\" alt=\"Czerwiec w ogrodzie\" title=\"Czerwiec w ogrodzie\"></a>" +
            "<p>Czerwiec to miesiąc intensywnego wzrostu roślin i pierwszych plonów w ogrodzie użytkowym. Wysokie temperatury i długi dzień pozwalają już na coraz dłuższe przebywanie w ogrodzie, organizowanie letnich spotkań pod chmurką. Dowiedz się, co jeszcze musisz zrobić w ogrodzie w czerwcu.</p>" +
            "<p>Praca w ogrodzie to dla ogrodnika największa radość, pod warunkiem że przebiega szybko i przyjemnie. Wiosną, latem, jesienią i zimą – przez cały rok – wokół domu i w ogrodzie zawsze jest coś do zrobienia. Nie wystarczą tylko dobre chęci i ręce gotowe do pracy! Odpowiednie narzędzie pomogą Ci zadbać o glebę, rośliny i porządek! Skompletuj taki zestaw narzędzi, aby móc wykonać różnorodne prace bez większego, niż jest to konieczne, wysiłku!</p>" +
            "<p>Jeżeli ogrodnictwo jest Twoją pasją, wybierz narzędzia FISKARS , które ułatwią wykonywanie każdej czynności w ogrodzie. Niezależnie od tego, czy pielisz, rąbiesz, zamiatasz czy tniesz, nasze narzędzia uczynią każdą pracę łatwiejszą i wydajniejszą o każdej porze roku.</p>" +
            "<h2>Co zrobić w ogrodzie w czerwcu?</h2>" +
            "<h3>Rośliny ozdobne</h3>" +
            "<ul>" +
            "<li>Wykopujemy rośliny cebulowe kwitnące wiosną, których liście już uschły.</li>" +
            "<li>Systematycznie podlewamy (wczesnym rankiem lub wieczorem) i nawozimy kwiaty sezonowe uprawiane w pojemnikach (pelargonie, lobelie, surfinie), byliny, krzewy i trawnik. Pamiętajmy, że lepiej podlewać nieco rzadziej, ale dużą ilością wody. Przy podlewaniu roślin starajmy się nie moczyć ich liści; strumień wody kierujmy bezpośrednio pod roślinę.</li>" +
            "<li>Po przekwitnieniu przycinamy gatunki kwitnące wiosną (wczesne gatunki tawuł, jaśminowiec, żarnowiec, krzewuszka) i usuwamy przekwitłe kwiatostany krzewów oraz bylin.</li>" +
            "<li>Jeśli nie zrobiliśmy tego w maju, wyłamujemy zasychające kwiaty różaneczników, aby nie dopuścić do zawiązania się nasion.</li>" +
            "<li>Przycinamy i formujemy żywopłoty z krzewów liściastych (np. z bukszpanów, ligustru, grabu, pęcherznicy) oraz zielone rzeźby.</li>" +
            "<li>Sadzimy nowe okazy bylin, drzew i krzewów uprawiane w pojemnikach. Nie kupujmy roślin z gołym korzeniem! Pamiętajmy, aby nowym roślinom zapewnić podłoże i stanowisko odpowiednie do gatunku i zadbajmy o to, by roślina miała odpowiednią ilość miejsca (sprawdzajmy na jaką szerokość może się rozrosnąć). Zbyt gęste sadzenie roślin sprawia, że będą one w przyszłości konkurować o wodę i składniki mineralne, a także częściej chorować.</li>" +
            "<li>Dzielimy i rozmnażamy byliny, które zakończyły kwitnienie (np. barwinek, skalnice, rojniki, pierwiosnki, funkie, zawciąg nadmorski).</li>" +
            "<li>Rozmnażamy bluszcz odcinając i ukorzeniając fragmenty pędów.</li>" +
            "<li>Regularnie odchwaszczamy rabaty z roślinami ozdobnymi, podłoże pod żywopłotami oraz grządki z warzywami i ziołami.</li>" +
            "<li>Szybko rosnące pnącza przywiązujemy do podpór.</li>" +
            "<li>Obserwujemy rośliny pod kątem chorób i szkodników roślin. W razie potrzeby w pierwszej kolejności stosujemy ekologiczne środki ochrony roślin. Gdy te nie pomogą, sięgamy po środki chemiczne.</li>" +
            "</ul>" +
            "<h3>Rośliny użytkowe</h3>" +
            "<ul>" +
            "<li>Zbieramy dojrzałe owoce (truskawki, poziomki, wczesne odmiany malin, agrest, porzeczki, czereśnie).</li>" +
            "<li>Aby ptaki nie zjadły dojrzewających owoców (czereśnie, borówki amerykańskie) na rośliny zakładamy ażurowe siatki ochronne.</li>" +
            "<li>Przycinamy rozrośnięte kępy ziół, aby je odmłodzić (szałwia, tymianek, rozmaryn, mięta). Po przycięciu rośliny zagęszczą się.</li>" +
            "<li>Wysiewamy na odchwaszczonych grządkach nasiona szpinaku, kopru, szczawiu, botwinki, ogórków i ziół.</li>" +
            "<li>Przerywamy zbyt gęsto rozrośnięte warzywa.</li>" +
            "<li>Sadzimy rozsadę warzyw.</li>" +
            "<li>Regularnie odchwaszczamy, podlewamy i spulchniamy grządki. W szczególności pamiętajmy o regularnym podlewaniu nowo posadzonych drzewek i krzewów owocowych.</li>" +
            "<li>Przeprowadzamy nawożenie warzyw.</li>" +
            "<li>Podwiązujemy pędy pomidorów. Opryskujemy pomidory (najlepiej wyciągiem z cebuli lub z czosnku), aby zabezpieczyć rośliny przed zarazą ziemniaczaną. </li>" +
            "<li>Szklarnie i tunele foliowe wietrzymy w ciągu dnia, aby uprawiane w nich rośliny się nie zaparzyły.</li>" +
            "<li>Uprawy pod osłonami regularnie podlewamy, odchwaszczamy i nawozimy.</li>" +
            "<li>Warzywa i zioła regularnie przeglądamy pod kątem chorób (mączniak rzekomy i prawdziwy, kanciasta plamistość ogórka, szara pleśń) i szkodników roślin (mszyce).</li>" +
            "<li>Ściółkujemy podłoże pod krzewami owocowymi ścięta trawą lub słomą, aby zapobiec parowaniu wody i rozwojowi chwastów.</li>" +
            "<li>Przeglądamy drzewa i krzewy owocowe i w razie potrzeby usuwamy odrosty z pni oraz tzw. wilki.</li>" +
            "<li>Po opadzie zawiązków, jeśli istnieje taka potrzeba, przerzedzamy pozostałe, usuwając te skarłowaciałe i pozostawiając jedynie te najładniejsze.</li>" +
            "</ul>" +
            "<h3>Trawnik</h3>" +
            "<ul>" +
            "<li>Systematycznie kosimy (co ok. 7 dni, nie za krótko), podlewamy i nawozimy. Pamiętajmy, by zabiegi na trawniku przeprowadzać rano lub wieczorem, a nigdy w południe, gdy mocno świeci słońce. Ściętą trawę grabimy lub zbieramy do kosza w kosiarce i przeznaczamy na kompost.</li>" +
            "<li>Trawnik, w którym rosną wczesnowiosenne kwiaty cebulowe (np. krokusy, przebiśniegi, cebulice, narcyzy) kosimy pierwszy raz dopiero wtedy, gdy liście roślin cebulowych zaschną.</li>" +
            "<li>W razie potrzeby usuwamy (najlepiej mechanicznie) chwasty. Jeśli to nie poskutkujemy, sięgamy po herbicydy.</li>" +
            "</ul>" +
            "<h3>Oczko wodne</h3>" +
            "<ul>" +
            "<li>W razie potrzeby wyławiamy z wody glony. Jeśli glony rozrastają się nadmiernie i nie jesteśmy w stanie usunąć ich za pomocą grabi, możemy użyć przeznaczonych do tego preparatów.</li>" +
            "<li>Uzupełniamy wodę, jeśli wyparowała z oczka.</li>" +
            "<li>Pamiętajmy o napowietrzaniu zbiornika wodnego, jeśli znajdują się w nim ryby.</li>" +
            "</ul>" +
            "<h3>Rośliny w mieszkaniu</h3>" +
            "<ul>" +
            "<li>Podlewamy i nawozimy roślin doniczkowe stosując preparaty do roślin kwitnących lub ozdobnych z liści. Pamiętajmy, że w sprzedaży znajdują się środki w różnej postaci (płynna, granulat, żel). Podczas nawożenia roślin zawsze czytajmy etykietę zamieszczoną przez producenta. Nie zwiększajmy dawki, aby nie zaszkodzić roślinom.</li>" +
            "<li>Dzielimy i przesadzamy rośliny doniczkowe uprawiane w domu.</li>" +
            "<li>Regularnie przeglądamy rośliny pod kątem chorób i szkodników roślin.</li>" +
            "<li>Po zahartowaniu wystawiamy na balkon, taras i do ogrodu rośliny uprawiane w domu w pojemnikach. Cytrusy, agawy, oliwki, datury to wspaniała, oryginalna dekoracja.</li>" +
            "</ul>" +
            "<p>Zawartość pochodzi ze strony: <a href=\"https://zielonyogrodek.pl/pielegnacja/prace-w-ogrodzie/7685-czerwiec-w-ogrodzie-co-robic\">https://zielonyogrodek.pl/pielegnacja/prace-w-ogrodzie/7685-czerwiec-w-ogrodzie-co-robic</a></p> <h2>Czytaj więcej</h2>";

    const box1 = document.createElement("div");
    box1.classList.add("box2");
    box1.id = "box_dodany1";
    box1.innerHTML = "<button onclick=\"article_maj()\"><img src=\"images/maj.jpg\" alt=\"Maj w ogrodzie\"></button>";
    const tresc1 = document.createElement("div");
    tresc1.classList.add("tekst");
    tresc1.innerHTML = "<h3><button onclick=\"article_maj()\">Maj w ogrodzie - co robić?</button></h3> <br>Maj to najpiękniejszy, najbardziej kolorowy miesiąc w naszym klimacie. Kwitną wonne lilaki, konwalie i tulipany. W ogrodzie ... <button onclick=\"article_maj()\">Czytaj dalej</button>";

    document.getElementById("more").append(box1);
    document.getElementById("box_dodany1").append(tresc1);

    const box2 = document.createElement("div");
    box2.classList.add("box2");
    box2.id = "box_dodany2";
    box2.innerHTML = "<button onclick=\"article_podłoża()\"><img src=\"images/podłoże.jpg\" alt=\"Podłoże\"></button>";
    const tresc2 = document.createElement("div");
    tresc2.classList.add("tekst");
    tresc2.innerHTML = "<h3><button onclick=\"article_podłoża()\">Podłoża ogrodnicze – jak poprawić ich jakość</button></h3> <br>Perlit i wermikulit to naturalne kruszywa mineralne (nieorganiczne), które doskonale sprawdzają się jako ... <button onclick=\"article_podłoża()\">Czytaj dalej</button>";

    document.getElementById("more").append(box2);
    document.getElementById("box_dodany2").append(tresc2);

    const box3 = document.createElement("div");
    box3.classList.add("box2");
    box3.id = "box_dodany3";
    box3.innerHTML = "<button onclick=\"article_ślimaki()\"><img src=\"images/ślimaki.jpg\" alt=\"Ślimaki\"></button>";
    const tresc3 = document.createElement("div");
    tresc3.classList.add("tekst");
    tresc3.innerHTML = "<h3><button onclick=\"article_ślimaki()\">Sposób na ślimaki</button></h3> <br>Śimaki mogą stanowić poważny problem, gdyż są to prawdopodobnie najbardziej żarłoczne szkodniki w naszych ogrodach. Mogą powodować ... <button onclick=\"article_ślimaki()\">Czytaj dalej</button>";

    document.getElementById("more").append(box3);
    document.getElementById("box_dodany3").append(tresc3);

    const box4 = document.createElement("div");
    box4.classList.add("box2");
    box4.id = "box_dodany4";
    box4.innerHTML = "<button onclick=\"article_mech()\"><img src=\"images/mech.jpg\" alt=\"Mech\"></button>";
    const tresc4 = document.createElement("div");
    tresc4.classList.add("tekst");
    tresc4.innerHTML = "<h3><button onclick=\"article_mech()\">Mech na trawniku - skuteczne zwalczanie</button></h3> <br>Piękny i zadbany trawnik to wizytówka każdego ogrodu. Aby jednak mógł dobrze spełniać swoje zadanie, wymaga wielu zabiegów ... <button onclick=\"article_mech()\">Czytaj dalej</button>";

    document.getElementById("more").append(box4);
    document.getElementById("box_dodany4").append(tresc4);
}

/* to samo co wyżej tylko dla innej treści */
function article_kret() {
    document.getElementById("strona_główna").innerHTML = " ";
    document.getElementById("more").innerHTML = " ";
    document.getElementById("artykul").innerHTML = "<h2>Jak pozbyć się kreta?</h2>"+
                    "<a href=\"images/kret.jpg\"><img src=\"images/kret.jpg\" alt=\"Kret\" title=\"Kret\"></a>"+
                    "<p>Mimo iż kret jest niezwykle pożytecznym, niegroźnym, a przy tym naprawdę ładnym stworzeniem, kiedy pojawia się w naszym ogrodzie, często wpadamy w panikę. Oczywiście jej przyczyną nie jest lęk przed zwierzęciem, które przecież żyje pod ziemią i skrzętnie unika człowieka, lecz jego nieco dla nas uciążliwe zwyczaje.</p>"+
                    "<p>Kret jest z natury drapieżnikiem, a jego podstawowym daniem są rozmaite pędraki, larwy owadów i niewielkie kręgowce. Aby więc je zdobyć, drąży pod ziemią długie korytarze. Przy tej okazji co jakiś czas musi pozbyć się nagromadzonej ziemi, dlatego wypycha ją na powierzchnię, tworząc przy tym dobrze nam znane i znienawidzone przez ogrodników kopce. W krótkim czasie może wykonać wiele takich usypisk, co jest szczególnie uciążliwe, jeśli teren jego żerowania obejmuje nasz trawnik.</p>"+
                    "<h3>Chwila refleksji przed walką</h3>"+
                    "<p>Zanim jednak rozpoczniemy z kretem zaciekłą walkę, warto pamiętać o kilku sprawach. Po pierwsze, krety w naszym kraju są objęte częściową ochroną gatunkową, a więc nie należy ich zabijać. Po drugie pamiętajmy, że krety odżywiają się między innymi licznymi szkodnikami (np. rolnice, pędraki, turkucie, drutowce), niszczącymi nasze uprawy, dlatego nie traktujmy ich jak wrogów. Po trzecie krecie korytarze dobrze napowietrzają glebę, a ziemia z kretowisk jest znakomitym materiałem do wykorzystania w ogrodzie. Mimo to, najprawdopodobniej ciężko nam będzie zaakceptować zniszczony kretowiskami trawnik, dlatego należy poszukać sposobów, aby wyprosić zwierze z trawiastego terenu, bez pozbawiania go życia. Jest to co prawda zadanie dość trudne i nieco uciążliwe, ale jeśli będziemy konsekwentni i skorzystamy z kilku metod jednocześnie, niechciany gość w końcu opuści niegościnny teren.</p>"+
                    "<h3>Dlaczego u nas zagościł?</h3>"+
                    "<p>Zacznijmy jednak od tego, że jeśli na naszym trawniku pojawiło się nagle sporo kretowisk, powinien być to dla nas sygnał, że pod murawą nie wszystko jest w porządku. Jeśli do tego trawa miejscami żółknie i zasycha, a powodem takiej sytuacji nie jest susza, możemy być niemal pewni, że w ziemi masowo grasują pędraki czyli larwy chrabąszczy, rolnice (gąsienice pewnego motyla) lub inne podobne im szkodniki. Żywią się one korzeniami roślin i powodują wiele strat w ogrodnictwie. Kiedy kret je wywęszy, zjada z apetytem, stąd prawdopodobnie nagromadzenie w takim miejscu sporej ilości kretowisk. Dlatego warto pomyśleć o zlikwidowaniu przyczyny kłopotów, a nie samego kreta. W tym celu powinniśmy użyć odpowiedniego środka ochrony roślin, przeznaczonego do likwidacji pędraków i rolnic, ściśle stosując się do zaleceń zawartych w opisie preparatu. Niekiedy wystarczy jedynie pozbyć się szkodników, aby w kolejnym sezonie kret nie zbudował już na trawniku żadnego kretowiska, ponieważ teren przestanie być dla niego atrakcyjnym miejscem do żerowania.</p>"+
                    "<h3>Sposoby na kreta</h3>"+
                    "<p>Aby jednak problemu pozbyć się szybciej, spróbujmy dodatkowo wykorzystać inne dostępne metody.</p>"+
                    "<p>Odstraszanie – polega na uprzykrzeniu kretowi życia dźwiękiem lub zapachem, przez co zwierze będzie unikać przebywania w pobliżu danego terenu. Do odstraszania dźwiękiem, można użyć rozmaitych kołatek, elektrycznych odstraszaczy (emitujących rozmaite dźwięki lub wibracje), wiatraczków lub metalowych puszek i butelek, zainstalowanych nad kretowiskiem (poruszane wiatrem, wydają drażniący zwierzę dźwięk). Nie tylko zaniepokoją kreta, ale również utrudnią mu zdobywanie pokarmu. Inną metodą odstraszania jest zapach. Można użyć specjalnych preparatów chemicznych lub wykorzystać do tego celu rośliny. Krety nie znoszą aromatu aksamitek, bazylii, komosy i wilczomlecza, więc warto posadzić je na obrzeżach trawnika. Do kretowiska dobrze też włożyć pędy mięty lub gałązki tui. Dość intensywnie pachną również naturalne olejki, które po rozcieńczeniu należy wlać do otworów kretowisk (np. lawendowy). Dobrym pomysłem jest też przygotowanie „aromatycznej”, roślinnej gnojówki na bazie czosnku, wrotyczu i liści czarnego bzu, którą także możemy wlać do wnętrza kretowiska. Można też powkładać do otworów szmatki, nasączone naftą, benzyną ekstrakcyjną lub olejem napędowym. Na rynku jest też dostępny preparat na bazie oleju rycynowego i palmowego („Pożegnanie z kretem”), który pokrywa ofiary kreta powłoką, powodującą u drapieżnika niestrawność. Dzięki temu kret uznaje, iż posiłek na tym terenie nie nadaje się do jedzenia i zaczyna szukać pożywienia gdzieś indziej. Jednak jest to raczej metoda do wykorzystania na trawniku niż na grządce warzywnej.</p>"+
                    "<p>Wyłapywanie – za pomocą pułapek, umieszczanych w korytarzach kreta. Takiego delikwenta można później wywieźć na pobliską łąkę, gdzie będzie miał dużo lepsze warunki do żerowania i nie będzie miał powodu, by do nas wracać.</p>"+
                    "<p>Profilaktyka – najlepszym sposobem uniknięcia kretowisk na trawniku jest siatka rozłożona pod murawą. Jednak ta metoda jest możliwa do wykorzystania jedynie na etapie zakładania trawnika, bo gotowy trudno byłoby zrywać, aby umieścić pod nim siatkę. Można natomiast w każdej chwili uniemożliwić kretowi wejście na naszą działkę, wkopując wzdłuż ogrodzenia siatkę (na głębokość ok. 0,5m.) lub wykonując rów, zasypany kamieniami. </p>"+
                    "<h3>Kilka uwag dodatkowych</h3>"+
                    "<p>Aby skutecznie wyprosić kreta z trawnika, najlepiej zastosować kilka metod jednocześnie, co da nam większą szansę powodzenia. Do tuneli nie wlewajmy jednak wody, gdyż później może się okazać, że będziemy mieli labirynt zapadniętej ziemi, a z takim kłopotem naprawdę trudno będzie sobie poradzić. Usuwajmy też regularnie nagromadzoną ziemię, rozgrabiając ją na powierzchni trawnika lub wywożąc na rabaty bądź kompost.</p>"+
                    "<p>Autor: Katarzyna Józefowicz</p>"+
                    "<p>Źródła: 1.    „Działkowiec” 6/06 porady mgr E. Sikora str. 75</p>"+
                    "<p>Zawartość pochodzi ze strony: <a href=\"https://www.swiatkwiatow.pl/poradnik-ogrodniczy/jak-pozbyc-sie-kreta-id966,2.html\">https://www.swiatkwiatow.pl/poradnik-ogrodniczy/jak-pozbyc-sie-kreta-id966,2.html</a></p> <h2>Czytaj więcej</h2>";
    
    const box1 = document.createElement("div");
    box1.classList.add("box2");
    box1.id = "box_dodany1";
    box1.innerHTML = "<button onclick=\"article_ślimaki()\"><img src=\"images/ślimaki.jpg\" alt=\"Ślimaki\"></button>";
    const tresc1 = document.createElement("div");
    tresc1.classList.add("tekst");
    tresc1.innerHTML = "<h3><button onclick=\"article_ślimaki()\">Sposób na ślimaki</button></h3> <br>Śimaki mogą stanowić poważny problem, gdyż są to prawdopodobnie najbardziej żarłoczne szkodniki w naszych ogrodach. Mogą powodować ... <button onclick=\"article_ślimaki()\">Czytaj dalej</button>";

    document.getElementById("more").append(box1);
    document.getElementById("box_dodany1").append(tresc1);

    const box2 = document.createElement("div");
    box2.classList.add("box2");
    box2.id = "box_dodany2";
    box2.innerHTML = "<button onclick=\"article_mrówki()\"><img src=\"images/mrówki.jpg\" alt=\"Mrówki\"></button>";
    const tresc2 = document.createElement("div");
    tresc2.classList.add("tekst");
    tresc2.innerHTML = "<h3><button onclick=\"article_mrówki()\">Jak zwalczać mrówki w ogrodzie?</button></h3> <br>Mrówek w ogrodzie, nikt nie lubi. Jedzą resztki roślin, oblepiają kwiaty. Szczególnie lubią te, które przy kwitnieniu wypuszczają na zewnątrz słodki sok ... <button onclick=\"article_mrówki()\">Czytaj dalej</button>";

    document.getElementById("more").append(box2);
    document.getElementById("box_dodany2").append(tresc2);

    const box3 = document.createElement("div");
    box3.classList.add("box2");
    box3.id = "box_dodany3";
    box3.innerHTML = "<button onclick=\"article_podłoża()\"><img src=\"images/podłoże.jpg\" alt=\"Podłoże\"></button>";
    const tresc3 = document.createElement("div");
    tresc3.classList.add("tekst");
    tresc3.innerHTML = "<h3><button onclick=\"article_podłoża()\">Podłoża ogrodnicze – jak poprawić ich jakość</button></h3> <br>Perlit i wermikulit to naturalne kruszywa mineralne (nieorganiczne), które doskonale sprawdzają się jako podłoża ogrodnicze ... <button onclick=\"article_podłoża()\">Czytaj dalej</button>";

    document.getElementById("more").append(box3);
    document.getElementById("box_dodany3").append(tresc3);

    const box4 = document.createElement("div");
    box4.classList.add("box2");
    box4.id = "box_dodany4";
    box4.innerHTML = "<button onclick=\"article_mech()\"><img src=\"images/mech.jpg\" alt=\"Mech\"></button>";
    const tresc4 = document.createElement("div");
    tresc4.classList.add("tekst");
    tresc4.innerHTML = "<h3><button onclick=\"article_mech()\">Mech na trawniku - skuteczne zwalczanie</button></h3> <br>Piękny i zadbany trawnik to wizytówka każdego ogrodu. Aby jednak mógł dobrze spełniać swoje zadanie, wymaga wielu zabiegów ... <button onclick=\"article_mech()\">Czytaj dalej</button>";

    document.getElementById("more").append(box4);
    document.getElementById("box_dodany4").append(tresc4);
}

/* to samo co wyżej tylko dla innej treści */
function article_lilie() {
    document.getElementById("strona_główna").innerHTML = " ";
    document.getElementById("more").innerHTML = " ";
    document.getElementById("artykul").innerHTML = "<h2>Kiedy i jak sadzić lilie do ogrodu?</h2>"+
                    "<a href=\"images/lilia.jpg\"><img src=\"images/lilia.jpg\" alt=\"Lilia\" title=\"Lilia\"></a>"+
                    "<p>Lilie są czarującymi kwiatami i słynne są ze swojego intensywnego zapachu. Wybór jest ogromny, ponieważ istnieje ponad sto gatunków i tysiące odmian tej rośliny. Sadząc różne odmiany lilii można podziwiać ich urodę od maja do sierpnia i września.</p>"+
                    "<p>Kiedy, przykładowo, przekwitnie lilia złotogłów, kwiaty rozwinie lilia Henry’ego. Najpóźniej kwitnące odmiany tworzą bardzo oryginalne akcenty w ogrodzie. Chińskie przysłowie mówi: „Jeśli masz dwa chleby, sprzedaj jeden i kup lilię”. Chodzi o to, że szczęście znajdujemy nie tylko w zaspokajaniu podstawowych potrzeb życiowych, ale też w pięknie przyrody.</p>"+
                    "<p>Wysokie albo niskie, kolorowe albo jednobarwne – lilie mają zasadniczo podobne wymagania uprawne. Należą do najstarszych roślin ogrodowych w ogóle i uprawiano je już w starożytnych ogrodach greckich i rzymskich. Do dzisiaj nie straciły nic ze swojej popularności. Z równym wdziękiem prezentują swoją urodę w małych grupach między niskimi różami albo krzewami, przed zimozielonym żywopłotem jak i na rabatach albo w doniczkach. Niezmiennie przyciągają spojrzenia obserwatorów swoją doskonałością i mocnym efektem dużych kwiatów.</p>"+
                    "<h3>Najlepszy czas sadzenia lilii</h3>"+
                    "<p>Często dyskutuje się o właściwym terminie sadzenia cebuli lilii, ale sprawa jest prosta: większość gatunków i odmian można – według uznania – sadzić jesienią (wrzesień do listopada) albo wiosną (koniec marca do maja). Wyjątek stanowią przede wszystkim dwa gatunki: lilia biała oraz lilia złotogłów. Te sadzi się dopiero późnym latem w sierpniu. Zarówno cebule, jak i wyhodowane sadzonki, mogą być w tym czasie przesadzone do gruntu albo do pojemnika.</p>"+
                    "<p><b>Wysokie albo niskie, kolorowe albo jednobarwne – lilie mają zasadniczo podobne wymagania. Należą do najstarszych roślin ogrodowych w ogóle i uprawiano je już w starożytnych ogrodach greckich i rzymskich.</b></p>"+
                    "<p>Chociaż właściwie wszystkie lilie w przepuszczalnym gruncie są wystarczająco zimoodporne, przeważnie sadzi się je na wiosnę. Wynika to głownie z tego, że w tym okresie istnieje w sklepach większy wybór cebulek. Jeśli okres sadzenia od marca do maja podzieli się na kilka terminów w odstępach dziesięciodniowych, lilie będą stopniowo wyrastać z ziemi i rozwijać się, i przez całe lato prezentować piękne kwiaty.</p>"+
                    "<h3>Wybór stanowiska dla lilii w ogrodzie</h3>"+
                    "<p>Lilie są dziećmi słońca. Potrzebują jednak chłodnych stóp do dobrego samopoczucia. Ich korzenie powinny najlepiej pozostawać w cieniu. Aby to zapewnić, dobrze jest obszar nad bryłą korzeniową przykryć ściółką albo obsadzić roślinami okrywowymi. Do okrycia można użyć rozdrobnioną korę drzew.</p>"+
                    "<p>Kwiaty lilii garną się do słońca. Stąd potrzeba dla nich miejsca w pełnym słońcu albo dobrze nasłonecznionym i najlepiej osłoniętym od wiatru. Posadzone w półcieniu wytworzą mniej kwiatów. Szczególnie godne polecenia jest stanowisko, na którym lilie mają kontakt ze słońcem zarówno przed południem, jak i po południu. W południe powinny być chronione przed bezpośrednim promieniowaniem.</p>"+
                    "<h3>Jak przygotować glebę do sadzenia lilii?</h3>"+
                    "Ogólnie biorąc lilie nie mają specjalnych wymagań, co do podłoża. Rosną wszędzie, gdzie nie ma zbyt dużo wilgoci. Dlatego też potrzebny jest grunt dobrze przepuszczalny. Ziemię przed sadzeniem trzeba dokładnie spulchnić. Poza tym substrat powinien być:"+
                    "<ul>"+
                        "<li>żyzny i bogaty w próchnicę;</li>"+
                        "<li>o umiarkowanej zawartości piasku;</li>"+
                        "<li>lekko alkaliczny do lekko kwaśnego;</li>"+
                        "<li>wilgotny, ale nie mokry.</li>"+
                    "</ul>"+
                    "<h3>Sadzenie lilii w ogrodzie</h3>"+
                    "<p>Cebule lilii ze względu na swoją specjalną budowę są łatwe do rozpoznania. Składają się z licznych łusek bez dodatkowej łupiny zewnętrznej. Dołek do sadzenia powinien mieć głębokość – w zależności od wielkości cebuli – od 15 cm do 20 cm. Jeśli cebula będzie posadzona za płytko, łodyga łatwo się wywróci. Na ciężkich, wilgotnych glebach zaleca się wykonanie na dole dołka kilkucentymetrowej warstwy drenażowej, ponieważ cebule nie znoszą stojącej wody.</p>"+
                    "<p>Charakterystyczna dla lilii jest jej cebula, która może mieć łuski duże i przylegające albo małe i rozpierzchłe, w kolorze białym, żółtym, różowym, czerwonym do brązowego. W przeciwieństwie do tulipanów, allium, narcyzów i innych roślin cebulowych, lilie są pozbawione mocnej łupiny ochronnej.</p>"+
                    "<p>W zależności od wielkości rośliny, należy przewidzieć odpowiednie odstępy między liliami oraz właściwą odległość od innych roślin. Wbrew mniemaniu, że uroda często idzie parze z kapryśnością, lilie są stosunkowo łatwe w pielęgnowaniu.</p>"+
                    "<h3>Jak i kiedy wysiewać lilie w ogrodzie?</h3>"+
                    "Nasiona dojrzewają jesienią. Jeśli chce się uniknąć samosiewu, należy przekwitłe kwiatostany usuwać. Kontrolowany wysiew prowadzi się następująco:"+
                    "<ul>"+
                        "<li>w okresie od lutego do marca nasiona moczy się przez trzy dni w wodzie;</li>"+
                        "<li>sieje się płytko na głębokość ok. 0,5 cm;</li>"+
                        "<li>podłoże utrzymuje się w stanie wilgotnym;</li>"+
                        "<li>temperatura powietrza powinna być na poziomie 20-23ºC;</li>"+
                        "<li>czas kiełkowania wynosi, w zależności od gatunku, od 4 do 30 dni.</li>"+
                    "</ul>"+
                    "<h3>Jakie sąsiedztwo odpowiada liliom w ogrodzie?</h3>"+
                    "Jako towarzystwo dla lilii może służyć wiele bylin i kwiatów jednorocznych. Przede wszystkim należy brać pod uwagę ocieniające glebę rośliny okrywowe. Te utrzymują „stopy” lilii w cieniu i chłodzie. Poza tym nadają się też niskie byliny i kwiaty, jak np.:"+
                    "<ul>"+
                        "<li>goździk brodaty;</li>"+
                        "<li>penstemon;</li>"+
                        "<li>stokrotka;</li>"+
                        "<li>werbena;</li>"+
                        "<li>nasturcja;</li>"+
                        "<li>nagietek;</li>"+
                        "<li>niezapominajka;</li>"+
                        "<li>scewola;</li>"+
                        "<li>chaber;</li>"+
                        "<li>bratek.</li>"+
                    "</ul>"+
                    "<h3>Kiedy zakwitają lilie?</h3>"+
                    "<p>W zależności od gatunku lilie zakwitają w różnym okresie. Niektóre rozwijają swoje kwiaty już w maju. Większość lilii kwitnie w lipcu, a nieliczne odmiany w sierpniu i wrześniu.</p>"+
                    "<p>Zawartość pochodzi ze strony: <a href=\"https://twojogrodek.pl/Kiedy-i-jak-sadzic-lilie-do-ogrodu\">https://twojogrodek.pl/Kiedy-i-jak-sadzic-lilie-do-ogrodu</a> </p> <h2>Czytaj więcej</h2>";
    
    const box1 = document.createElement("div");
    box1.classList.add("box2");
    box1.id = "box_dodany1";
    box1.innerHTML = "<button onclick=\"article_czerwiec()\"><img src=\"images/czerwiec.jpg\" alt=\"Czerwiec w ogrodzie\"></button>";
    const tresc1 = document.createElement("div");
    tresc1.classList.add("tekst");
    tresc1.innerHTML = "<h3><button onclick=\"article_czerwiec()\">Czerwiec w ogrodzie - co robić?</button></h3> <br>Czerwiec to miesiąc intensywnego wzrostu roślin i pierwszych plonów w ogrodzie użytkowym. Wysokie temperatury i długi dzień pozwalają ... <button onclick=\"article_czerwiec()\">Czytaj dalej</button>";

    document.getElementById("more").append(box1);
    document.getElementById("box_dodany1").append(tresc1);

    const box2 = document.createElement("div");
    box2.classList.add("box2");
    box2.id = "box_dodany2";
    box2.innerHTML = "<button onclick=\"article_storczyk()\"><img src=\"images/storczyk.jpg\" alt=\"Storczyk\"></button>";
    const tresc2 = document.createElement("div");
    tresc2.classList.add("tekst");
    tresc2.innerHTML = "<h3><button onclick=\"article_storczyk()\">Dlaczego storczyk nie kwitnie?</button></h3> <br>Storczyki to jedne z najpiękniejszych roślin świata, które mamy okazję uprawiać w naszych mieszkaniach. Bogactwo gatunkowe storczyków zadziwia, ... <button onclick=\"article_storczyk()\">Czytaj dalej</button>";

    document.getElementById("more").append(box2);
    document.getElementById("box_dodany2").append(tresc2);

    const box3 = document.createElement("div");
    box3.classList.add("box2");
    box3.id = "box_dodany3";
    box3.innerHTML = "<button onclick=\"article_borówka()\"><img src=\"images/borówka.jpg\" alt=\"Borówka\"></button>";
    const tresc3 = document.createElement("div");
    tresc3.classList.add("tekst");
    tresc3.innerHTML = "<h3><button onclick=\"article_borówka()\">Dlaczego borówka amerykańska nie owocuje?</button></h3> <br>Z każdym rokiem rośnie zainteresowanie ogrodników bliską krewniaczką naszych leśnych jagód – borówką ... <button onclick=\"article_borówka()\">Czytaj dalej</button>";

    document.getElementById("more").append(box3);
    document.getElementById("box_dodany3").append(tresc3);

    const box4 = document.createElement("div");
    box4.classList.add("box2");
    box4.id = "box_dodany4";
    box4.innerHTML = "<button onclick=\"article_podłoża()\"><img src=\"images/podłoże.jpg\" alt=\"Podłoże\"></button>";
    const tresc4 = document.createElement("div");
    tresc4.classList.add("tekst");
    tresc4.innerHTML = "<h3><button onclick=\"article_podłoża()\">Podłoża ogrodnicze – jak poprawić ich jakość</button></h3> <br>Perlit i wermikulit to naturalne kruszywa mineralne (nieorganiczne), które doskonale sprawdzają się jako ... <button onclick=\"article_podłoża()\">Czytaj dalej</button>";

    document.getElementById("more").append(box4);
    document.getElementById("box_dodany4").append(tresc4);
}

/* to samo co wyżej tylko dla innej treści */
function article_maj() {
    document.getElementById("strona_główna").innerHTML = " ";
    document.getElementById("more").innerHTML = " ";
    document.getElementById("artykul").innerHTML = "<h2>Maj w ogrodzie – co robić?</h2>"+
                    "<a href=\"images/maj.jpg\"><img src=\"images/maj.jpg\" alt=\"Maj w ogrodzie\" title=\"Maj w ogrodzie\"></a>"+
                    "<p>Maj to najpiękniejszy, najbardziej kolorowy miesiąc w naszym klimacie. Kwitną wonne lilaki, konwalie i tulipany. W ogrodzie pracy jest bardzo dużo, gdyż wszystko rośnie niezwykle intensywnie. Dowiedz się, co musisz zrobić w ogrodzie w maju.</p>"+
                    "<p>Praca w ogrodzie to dla ogrodnika największa radość, pod warunkiem że przebiega szybko i przyjemnie. Wiosną, latem, jesienią i zimą – przez cały rok – wokół domu i w ogrodzie zawsze jest coś do zrobienia. Nie wystarczą tylko dobre chęci i ręce gotowe do pracy! Odpowiednie narzędzie pomogą Ci zadbać o glebę, rośliny i porządek! Skompletuj taki zestaw narzędzi, aby móc wykonać różnorodne prace bez większego, niż jest to konieczne, wysiłku!</p>"+
                    "<p>Jeżeli ogrodnictwo jest Twoją pasją, wybierz narzędzia FISKARS , które ułatwią wykonywanie każdej czynności w ogrodzie. Niezależnie od tego, czy pielisz, rąbiesz, zamiatasz czy tniesz, nasze narzędzia uczynią każdą pracę łatwiejszą i wydajniejszą o każdej porze roku.</p>"+
                    "<h2>Co zrobić w ogrodzie w maju?</h2>"+
                    "<h3>Rośliny ozdobne</h3>"+
                    "<ul>"+
                        "<li>Sadzimy drzewa, krzewy, pnącza i byliny uprawiane w pojemnikach. Pamiętajmy, by dobierać rośliny do warunków panujących w ogrodzie – gleby i stanowiska, a także brać pod uwagę osiągane przez nie wielkości (wysokość i szerokość). Nie sadźmy roślin zbyt gęsto, gdyż będą gorzej się rozwijać konkurując o wodę i składniki pokarmowe, a także częściej chorować.</li>"+
                        "<li>Po posadzeniu wokół drzew, krzewów i pnączy formujemy misę i obficie je podlewamy.</li>"+
                        "<li>Przycinamy mocno żywopłoty, aby się zagęściły. Pamiętajmy, żeby sekatory do dobrze zaostrzone i czyste.</li>"+
                        "<li>Ścinamy przekwitłe kwiaty roślin cebulowych, aby nie dopuścić do zawiązania się owoców. Pozostawiamy łodygi i liście aż do zaschnięcia. Niektóre gatunki potrafią zakwitnąć drugi raz (np. szafirki).Ścinamy przekwitłe kwiaty roślin cebulowych, aby nie dopuścić do zawiązania się owoców. Pozostawiamy łodygi i liście aż do zaschnięcia. Niektóre gatunki potrafią zakwitnąć drugi raz (np. szafirki).</li>"+
                        "<li>Wyłamujemy ostrożnie palcami przekwitłe kwiaty różaneczników uważając na młode liście, znajdujące się poniżej.</li>"+
                        "<li>Jeśli nie zrobiliśmy tego w poprzednim miesiącu, przycinamy po przekwitnięciu wcześnie kwitnące krzewy (forsycje, wczesne tawuły, wierzby, migdałki).</li>"+
                        "<li>Jeżeli jest sucho podlewamy kwitnące na rabatach byliny.</li>"+
                        "<li>Do gruntu siejemy kwitnące rośliny jednoroczne, takie jak nagietki, nasturcje, słoneczniki, maciejka.</li>"+
                        "<li>Po tzw. zimnej Zośce i zimnych ogrodnikach (po 15 maja), gdy minie już niebezpieczeństwo wiosennych przymrozków możemy sadzić do gruntu cebule i bulwy bylin nie zimujących w gruncie. Są to: acidantera, agapant, babiana, dalia, galtonia, ismena, krokosmia (montbrecja), mieczyk, paciorecznik (kanna), nerina, tygrysówka, zawilec wieńcowy, zefirant.</li>"+
                        "<li>Po 15 maja do skrzynek balkonowych i donic na tarasach możemy sadzić rozsadę kwiatów sezonowych, takich jak pelargonie, petunie, lobelie, aksamitki, begonie, fuksje, celozje, gazanie, niecierpki i żeniszki.</li>"+
                        "<li>Regularnie usuwamy chwasty z rabat i miejsc pod krzewami.</li>"+
                    "</ul>"+
                    "<h3>Rośliny użytkowe</h3>"+
                    "<ul>"+
                        "<li>Na początku miesiąca możemy spodziewać się jeszcze przymrozków, dlatego warto mieć pod ręką włókninę do przykrycia wrażliwych warzyw i kwitnących gatunków owocowych.</li>"+
                        "<li>Po 15 maja sadzimy w warzywniku rozsadę gatunków wrażliwych na mrozy: pomidorów, papryki, bakłażanów, ogórków, bazylii, majeranku.</li>"+
                        "<li>W drugiej połowie maja do gruntu wysiewamy nasiona słoneczników, kukurydzy, dyni, cukinii, kabaczków.</li>"+
                        "<li>Przy sadzeniu warzyw stosujmy się do zasad uprawy współrzędnej (tzw. zmianowanie). Unikajmy monokultur, które zubożają glebę i przyciągają szkodniki roślin.</li>"+
                        "<li>Obok warzyw wysiewajmy gatunki ozdobne odstraszające szkodniki (np. nagietki, aksamitki, lawendę). Poza względami praktycznymi, wpływają one na poprawę</li>"+
                        "<li>Zbieramy pierwsze plony warzyw: szparagi, szczypiorek, rzodkiewki, sałatę, koper, szpinak.</li>"+
                        "<li>Regularnie pielimy grządki z warzywami i ziołami.</li>"+
                        "<li>Przeglądamy gatunki owocowe pod kątem szkodników i chorób.</li>"+
                        "<li>Podwiązujemy do podpór wyrośnięte pędy jeżyn bezkolcowych i malin.</li>"+
                        "<li>Zasilamy krzewy owocowe kompostem, gatunki kwasolubne ściółkujemy korą sosnową.</li>"+
                        "<li>Formujemy młode drzewka owocowe zawieszając na giętkich gałęziach ciężarki.</li>"+
                        "<li>Usuwamy odrosty pojawiające się poniżej miejsca szczepienia na krzewach i drzewach owocowych.</li>"+
                    "</ul>"+
                    "<h3>Trawnik</h3>"+
                    "<ul>"+
                        "<li>Regularnie (co najmniej raz w tygodniu) kosimy trawnik, gdyż to czas najintensywniejszego wzrostu.</li>"+
                        "<li>Przeprowadzamy nawożenie stosując preparaty nawozowe. Jeśli mamy mało czasu na pielęgnację roślin, warto sięgnąć po nawozy o przedłużonym działaniu. Pamiętajmy o podlaniu trawnika po zastosowaniu nawozów, aby nie \"spalić\" trawy.</li>"+
                        "<li>Usuwamy chwasty stosując metody mechaniczne (np. wyrywacze do chwastów na długim drążku). Starajmy się nie dopuścić do zawiązania przez chwasty nasion (np. mniszka lekarskiego).</li>"+
                    "</ul>"+
                    "<h3>Oczko wodne</h3>"+
                    "<ul>"+
                        "<li>Karmimy ryby, wsypując tyle pokarmu, by nie opadał na dno zbiornika wodnego.</li>"+
                        "<li>Po 15 maja umieszczamy w oczku egzotyczne gatunki roślin, takie jak pistia (sałata wodna), hiacynt wodny, salwinia pływająca, azola karolińska.</li>"+
                        "<li>Dzielimy zbyt mocno rozrośnięte rośliny wodne i sadzimy nowe gatunki.</li>"+
                        "<li>Jeśli pod wpływem wysokiej temperatury rozwinęły się w wodzie glony, wyławiamy je nawijając np. na grabie.</li>"+
                    "</ul>"+
                    "<h3>Rośliny doniczkowe</h3>"+
                    "<ul>"+
                        "<li>Regularnie podlewamy i nawozimy.</li>"+
                        "<li>Sprawdzamy, czy nie pojawiły się oznaki chorób lub szkodniki.</li>"+
                        "<li>Przed wystawieniem na balkon lub taras roślin doniczkowych (np. cytrusy, agawy, oliwki) najpierw trzeba je zahartować, wystawiając przez tydzień na dzień ma zewnątrz i chowając na noc do domu. Po 15 maja można je już zostawić na dworze pamiętając, by zapewnić im stabilne donice (ochrona przed wiatrem).</li>"+
                    "</ul>"+
                    "<p>Zawartość pochodzi ze strony: <a href=\"https://zielonyogrodek.pl/pielegnacja/prace-w-ogrodzie/7684-maj-w-ogrodzie-co-robic\">https://zielonyogrodek.pl/pielegnacja/prace-w-ogrodzie/7684-maj-w-ogrodzie-co-robic</a></p><h2>Czytaj więcej</h2>";
    
    const box1 = document.createElement("div");
    box1.classList.add("box2");
    box1.id = "box_dodany1";
    box1.innerHTML = "<button onclick=\"article_czerwiec()\"><img src=\"images/czerwiec.jpg\" alt=\"Czerwiec w ogrodzie\"></button>";
    const tresc1 = document.createElement("div");
    tresc1.classList.add("tekst");
    tresc1.innerHTML = "<h3><button onclick=\"article_czerwiec()\">Czerwiec w ogrodzie - co robić?</button></h3> <br>Czerwiec to miesiąc intensywnego wzrostu roślin i pierwszych plonów w ogrodzie użytkowym. Wysokie temperatury i długi dzień pozwalają ... <button onclick=\"article_czerwiec()\">Czytaj dalej</button>";

    document.getElementById("more").append(box1);
    document.getElementById("box_dodany1").append(tresc1);

    const box2 = document.createElement("div");
    box2.classList.add("box2");
    box2.id = "box_dodany2";
    box2.innerHTML = "<button onclick=\"article_podłoża()\"><img src=\"images/podłoże.jpg\" alt=\"Podłoże\"></button>";
    const tresc2 = document.createElement("div");
    tresc2.classList.add("tekst");
    tresc2.innerHTML = "<h3><button onclick=\"article_podłoża()\">Podłoża ogrodnicze – jak poprawić ich jakość</button></h3> <br>Perlit i wermikulit to naturalne kruszywa mineralne (nieorganiczne), które doskonale sprawdzają się jako ... <button onclick=\"article_podłoża()\">Czytaj dalej</button>";

    document.getElementById("more").append(box2);
    document.getElementById("box_dodany2").append(tresc2);

    const box3 = document.createElement("div");
    box3.classList.add("box2");
    box3.id = "box_dodany3";
    box3.innerHTML = "<button onclick=\"article_ślimaki()\"><img src=\"images/ślimaki.jpg\" alt=\"Ślimaki\"></button>";
    const tresc3 = document.createElement("div");
    tresc3.classList.add("tekst");
    tresc3.innerHTML = "<h3><button onclick=\"article_ślimaki()\">Sposób na ślimaki</button></h3> <br>Śimaki mogą stanowić poważny problem, gdyż są to prawdopodobnie najbardziej żarłoczne szkodniki w naszych ogrodach. Mogą powodować ... <button onclick=\"article_ślimaki()\">Czytaj dalej</button>";

    document.getElementById("more").append(box3);
    document.getElementById("box_dodany3").append(tresc3);

    const box4 = document.createElement("div");
    box4.classList.add("box2");
    box4.id = "box_dodany4";
    box4.innerHTML = "<button onclick=\"article_mech()\"><img src=\"images/mech.jpg\" alt=\"Mech\"></button>";
    const tresc4 = document.createElement("div");
    tresc4.classList.add("tekst");
    tresc4.innerHTML = "<h3><button onclick=\"article_mech()\">Mech na trawniku - skuteczne zwalczanie</button></h3> <br>Piękny i zadbany trawnik to wizytówka każdego ogrodu. Aby jednak mógł dobrze spełniać swoje zadanie, wymaga wielu zabiegów ...  <button onclick=\"article_mech()\">Czytaj dalej</button>";

    document.getElementById("more").append(box4);
    document.getElementById("box_dodany4").append(tresc4);
}

/* to samo co wyżej tylko dla innej treści */
function article_mech() {
    document.getElementById("strona_główna").innerHTML = " ";
    document.getElementById("more").innerHTML = " ";
    document.getElementById("artykul").innerHTML = "<h2>Mech na trawniku skuteczne zwalczanie</h2>"+
                    "<a href=\"images/mech.jpg\"><img src=\"images/mech.jpg\" alt=\"Mech\" title=\"Mech na trawniku\"></a>"+
                    "<p>Piękny i zadbany trawnik to wizytówka każdego ogrodu. Aby jednak mógł dobrze spełniać swoje zadanie, wymaga wielu zabiegów pielęgnacyjnych. Murawa pozostawiona sama sobie szybko zaczyna sprawiać problemy, a jej wygląd coraz bardziej odbiega od idealnego.</p>"+
                    "<h3>Mech w trawniku</h3>"+
                    "<p>Jednym z problemów, jakie mogą wystąpić się na nieodpowiednio pielęgnowanym trawniku jest pojawienie się w nim mchów. Te proste w budowie i stosunkowo prymitywne organizmy, są wbrew pozorom niezwykle sprawne i doskonale przystosowane do życia w różnych środowiskach. Bardzo szybko kolonizują miejsca, które dla wielu roślin nie nadają się do życia. Łatwo się rozmnażają i rozsiewają swoje zarodniki przy pomocy wiatru, co pomaga im szybko się rozprzestrzeniać. Właściwie jedynym środowiskiem, w którym ciężko jest się im utrzymać to stanowisko nasłonecznione i suche, gdyż mchy nie posiadają typowych korzeni ani tkanki przewodzącej, a wodę i składniki pokarmowe pobierają całym ciałem wprost z otoczenia. Na zadbanym i dobrze pielęgnowanym trawniku nie mają szans się pojawić, gdyż nie znajdą tam dla siebie miejsca, dlatego jeśli tylko zauważymy ich kolonie w trawie, możemy być pewni, że z murawą dzieje się coś niepokojącego. Musimy też mieć świadomość, że jeden oprysk preparatem chemicznym z pewnością nie załatwi problemu, gdyż bez poznania i usunięcia przyczyny kłopotów, nie zlikwidujemy mchów w trawniku, a z czasem doczekamy się również kolejnych problemów.</p>"+
                    "<h3>Kiedy mech zasiedla trawnik</h3>"+
                    "Mech najchętniej zamieszkuje trawnik, kiedy ma do tego odpowiednie warunki, czyli wysoką wilgotność, zbitą, nienapowietrzoną i jałową glebę, najlepiej o kwaśnym odczynie pH, spore zacienienie i znaczną ilość „filcu” z obumarłej trawy. Wprawdzie czynniki te bezpośrednio nie są odpowiedzialne za pojawienie się mchu, ale są bardzo niekorzystne dla roślin tworzących trawnik, przez co ich wzrost i rozwój jest zahamowany. W ten sposób w murawie zaczynają pojawiać się brzydkie, puste place, które z pewnością szybko zostaną wykorzystane właśnie przez mchy.Dobrze odżywiona, regularnie przycinana i odpowiednio nawodniona oraz oświetlona słońcem trawa jest silna i szybko rośnie, zajmując wszelkie wolne przestrzenie. Dla jej właściwego rozwoju bardzo ważne są również wiosenne zabiegi pielęgnacyjne polegające na rozluźnieniu podłoża (areacja, wertykulacja) oraz usuwaniu zalegającego po zimie filcu. Tak zadbany trawnik, zwykle jest na tyle gęsty, że nie pozostawia już miejsca ani dla mchu ani dla innych roślin inwazyjnych (np. chwastów)."+
                    "<table><caption><h3>Metody</h3></caption><thead><tr><th>Tradycyjne</th><th>Chemiczne</th></tr></thead><tbody><tr>"+
                    "<td>Kiedy więc nasz trawnik zaczynają zajmować mchy, musimy zadziałać kompleksowo. Czasami może wystarczyć właściwa opieka nad trawnikiem, który już po roku odpowiedniej pielęgnacji będzie w stanie samodzielnie poradzić sobie z mchami, jednak przy wieloletnich zaniedbaniach takie działania nie wystarczą. W pierwszej kolejności należy wtedy sięgnąć po tradycyjne metody zwalczania mchów, które nie przyniosą takiej szkody środowisku, jak użycie chemii. Dobrym sposobem jest między innymi odpowiednie zwapnowanie trawnika, zmieniające zbyt kwaśny odczyn podłoża. Przed zabiegiem należy jednak sprawdzić pH gleby, aby nie wyrządzić trawnikowi więcej szkody niż pożytku i aby móc dobrać odpowiednią dawkę nawozu. Przy niewielkiej inwazji mchów wystarczy czasem ręczne usunięcie ich kolonii z trawnika i napowietrzenie gleby za pomocą nakłuwania jej widłami, butami wyposażonymi w kolce lub areatorem.</td>"+
                    "<td>Metody tradycyjne nie zawsze poradzą sobie z dużą inwazją mchów, dlatego czasem musimy sięgnąć po preparaty chemiczne. Jednak nawet wtedy musimy pamiętać, że jeśli nie przywrócimy trawnikowi właściwych parametrów środowiskowych, po niedługim czasie mchy znów pojawią się w murawie. Przed zastosowaniem oprysku lub nawozu, powinniśmy krótko przystrzyc i zagrabić trawnik, aby umożliwić dotarcie substancji czynnej do rosnących przy ziemi mchów. Najlepszym terminem na wykonanie zabiegu jest wczesna wiosna (jedynie preparaty oparte na siarczanie żelaza, gdyż pozostałe wymagają niekiedy dość wysokiej temperatury – ok. 20°C do prawidłowego zadziałania np. Mogeton 25 WP) czyli okres wzmożonego rozwoju mchów. Po oprysku, kiedy rośliny już zaschną (wystarczy kilka dni), mech należy usunąć z trawnika, a następnie zastosować wszystkie niezbędne zabiegi pielęgnacyjne, poprawiające stan trawy (areacja, wertykulacja, usuwanie filcu, nawożenie).</td></tr></tbody></table>"+
                    "<p>Obecnie na rynku dostępnych jest wiele środków do zwalczania mchu (np. Mogeton 25 WP, Floranid Quattro GR ) jednak niektóre z nich obarczone są szczególnym ryzykiem. Substancje oparte na siarczanie żelaza są wprawdzie niezwykle skuteczne w likwidowaniu mchu (np. Compo Antymech do Trawników GR), jednak zawarte w nich żelazo z czasem się utlenia i powoduje rdzawe wykwity na różnych elementach architektury ogrodowej np. murkach, płytach chodnikowych, kostce brukowej lub innych chropowatych powierzchniach. Aby uniknąć podobnych problemów, po użyciu takiego środka, narażone na uszkodzenia powierzchnie należy dokładnie oczyścić np. spłukując je wodą. Kiedy plamy się już pojawiły (np. po wcześniej wykonanym zabiegu), trzeba je usunąć preparatami przeznaczonymi do czyszczenia powierzchni kamiennych lub betonowych, zawsze stosując się do zaleceń producenta umieszczonych na opakowaniu.</p>"+
                    "<p>Autor: Katarzyna Józefowicz</p>"+
                    "<p>Źródła: 1.    „Działkowiec” 05/09 „Sposoby zwalczania mchu” str. 56/57 dr Z. Jarosz</p>"+
                    "<p>Zawartość pochodzi ze strony: <a href=\"https://www.swiatkwiatow.pl/poradnik-ogrodniczy/mech-na-trawniku--skuteczne-zwalczanie-id1390.html\">https://www.swiatkwiatow.pl/poradnik-ogrodniczy/mech-na-trawniku--skuteczne-zwalczanie-id1390.html</a></p><h2>Czytaj więcej</h2>";
    
    const box1 = document.createElement("div");
    box1.classList.add("box2");
    box1.id = "box_dodany1";
    box1.innerHTML = "<button onclick=\"article_ślimaki()\"><img src=\"images/ślimaki.jpg\" alt=\"Ślimaki\"></button>";
    const tresc1 = document.createElement("div");
    tresc1.classList.add("tekst");
    tresc1.innerHTML = "<h3><button onclick=\"article_ślimaki()\">Sposób na ślimaki</button></h3> <br>Śimaki mogą stanowić poważny problem, gdyż są to prawdopodobnie najbardziej żarłoczne szkodniki w naszych ogrodach. Mogą powodować ... <button onclick=\"article_ślimaki()\">Czytaj dalej</button>";

    document.getElementById("more").append(box1);
    document.getElementById("box_dodany1").append(tresc1);

    const box2 = document.createElement("div");
    box2.classList.add("box2");
    box2.id = "box_dodany2";
    box2.innerHTML = "<button onclick=\"article_mrówki()\"><img src=\"images/mrówki.jpg\" alt=\"Mrówki\"></button>";
    const tresc2 = document.createElement("div");
    tresc2.classList.add("tekst");
    tresc2.innerHTML = "<h3><button onclick=\"article_mrówki()\">Jak zwalczać mrówki w ogrodzie?</button></h3> <br>Mrówek w ogrodzie, nikt nie lubi. Jedzą resztki roślin, oblepiają kwiaty. Szczególnie lubią te, które przy kwitnieniu wypuszczają na zewnątrz słodki sok ... <button onclick=\"article_mrówki()\">Czytaj dalej</button>";

    document.getElementById("more").append(box2);
    document.getElementById("box_dodany2").append(tresc2);

    const box3 = document.createElement("div");
    box3.classList.add("box2");
    box3.id = "box_dodany3";
    box3.innerHTML = "<button onclick=\"article_maj()\"><img src=\"images/maj.jpg\" alt=\"Maj w ogrodzie\"></button>";
    const tresc3 = document.createElement("div");
    tresc3.classList.add("tekst");
    tresc3.innerHTML = "<h3><button onclick=\"article_maj()\">Maj w ogrodzie - co robić?</button></h3> <br>Maj to najpiękniejszy, najbardziej kolorowy miesiąc w naszym klimacie. Kwitną wonne lilaki, konwalie i tulipany. W ogrodzie ... <button onclick=\"article_maj()\">Czytaj dalej</button>";

    document.getElementById("more").append(box3);
    document.getElementById("box_dodany3").append(tresc3);

    const box4 = document.createElement("div");
    box4.classList.add("box2");
    box4.id = "box_dodany4";
    box4.innerHTML = "<button onclick=\"article_podłoża()\"><img src=\"images/podłoże.jpg\" alt=\"Podłoże\"></button>";
    const tresc4 = document.createElement("div");
    tresc4.classList.add("tekst");
    tresc4.innerHTML = "<h3><button onclick=\"article_podłoża()\">Podłoża ogrodnicze – jak poprawić ich jakość</button></h3> <br>Perlit i wermikulit to naturalne kruszywa mineralne (nieorganiczne), które doskonale sprawdzają się jako podłoża ogrodnicze ... <button onclick=\"article_podłoża()\">Czytaj dalej</button>";

    document.getElementById("more").append(box4);
    document.getElementById("box_dodany4").append(tresc4);
}

/* to samo co wyżej tylko dla innej treści */
function article_mrówki() {
    document.getElementById("strona_główna").innerHTML = " ";
    document.getElementById("more").innerHTML = " ";
    document.getElementById("artykul").innerHTML = "<h2>Jak zwalczać mrówki w ogrodzie?</h2>"+
                "<a href=\"images/mrówki.jpg\"><img src=\"images/mrówki.jpg\" alt=\"Mrówki\" title=\"Mrówki\"></a>"+
                "<p>Mrówek w ogrodzie, nikt nie lubi. Jedzą resztki roślin, oblepiają kwiaty. Szczególnie lubią te, które przy kwitnieniu wypuszczają na zewnątrz słodki sok, na przykład Peonie. Najgorzej  jednak jest, gdy z ogrodu wchodzą do domu i spacerują sobie przy oknie balkonowym w salonie czy przy kuchennym  stole.</p>"+
                "<p>Naturalnych sposobów na pozbycie się mrówek jest kilka:</p>"+
                "<p><b>Mąka kukurydziana</b> –  sypiemy ją w każde miejsce, gdzie pojawiają się szkodniki, zarówno w domu, jak i w ogrodzie. Mrówki najadają się mąki, pęcznieją i giną.</p>"+
                "<p><b>Proszek do pieczenia</b> – posypujemy nim miejsca, które najczęściej szkodniki odwiedzają, jest to najprostszy sposób na pozbycie się mrówek.</p>"+
                "<p><b>Polewanie wrzątkiem</b> –  polewamy mrowisko wrzącą wodą prosto z czajnika, co skutkuje jego znaczącym zniszczeniem.</p>"+
                "<p><b>Spodek z miodem</b> – na spodek lub inną podstawkę nakładamy miód, mrówki bardzo go lubią, przylepiają się do niego i giną.</p>"+
                "<p><b>Spleśniała cytryna</b> – eliminuje szkodniki z szafek.</p>"+
                "<p><b>Liście pomidora</b> – jejku jak one uciekają od tego zapachu, można jeszcze rozetrzeć liście w ręku przed rozłożeniem ich w miejscach najczęstszych spacerów niepożądanych gości.</p>"+
                "<p><b>Cynamon</b> – obsypujemy nim na przykład warzywnik, na około, wtedy mrówki zostawią go w spokoju.</p>"+
                "<p><b>Woda z pokrzywami i czosnkiem</b> – moczymy w wodzie czosnek i pokrzywy przynajmniej dwa dni, potem polewamy tą wodą szkodniki. Mrówki szybko giną.</p>"+
                "<p>Poza tym mrówkom przeszkadzają też niektóre zapachy, na przykład wyciąg z majeranku, czy lekko sfermentowana mieszanka pokrzyw z piołunem, którą podlewa się ścieżki, którymi chodzą  szkodniki.</p>"+
                "<p>Mrówki nie podejdą, również tam, gdzie rosną takie rośliny jak lawenda, tymianek czy polna mięta.</p>"+
                "<p>Czasami, trzeba też skorzystać ze środków chemicznych, jednak tyko wtedy, gdy zawiodą naturalne metody. Do zwalczania owadów możemy, wtedy użyć środków w postaci: granulatu, aerozolu czy trutki pokarmowej.</p>"+
                "<p>Przy całkowitym pozbyciu się szkodników będzie nam przeszkadzał tryb życia jaki prowadzą szkodniki, chodzi tutaj głównie o możliwość dotarcia do ich kryjówek.</p>"+
                "<p>Gdy użyjemy preparatów do opryskiwania to wytrują one przede wszystkim mrówki robotnice, zabieg ten nie zniszczy całego gniazda, tylko ograniczy liczbę szkodników. Najlepiej zastosować takie działanie, gdy mrówek jest niewiele. Jeżeli zdecydujemy się na preparaty aerozolowe, to służą one do zwalczania owadów, które pozostają w ruchu.  Działają szybko i bezpośrednio na poruszające się mrówki.</p>"+
                "<p>Następnym elementem walki ze szkodnikami jest zastosowanie trutki pokarmowej, którą charakteryzuje powolne działanie owadobójcze. Mrówki robotnice rozprowadzą ją po gnieździe, karmiąc larwy i „królową” znoszącą jaja, doprowadzi to do zniszczenia gniazda. Trutkę umiejscawia się tam, gdzie „spacerują” owady. </p>"+
                "<p>Polecane środki niszczące szkodniki to Faratox oraz Mrówkofon Bros.</p>"+
                "<p>Autor: Agnieszka Krakowiak</p>"+
                "<p>Zawartość pochodzi ze strony: <a href=\"https://www.swiatkwiatow.pl/poradnik-ogrodniczy/jak-zwalczac-mrowki-w-ogrodzie-id60,g1.html\">https://www.swiatkwiatow.pl/poradnik-ogrodniczy/jak-zwalczac-mrowki-w-ogrodzie-id60,g1.html</a></p> <h2>Czytaj więcej</h2>";
    
    const box1 = document.createElement("div");
    box1.classList.add("box2");
    box1.id = "box_dodany1";
    box1.innerHTML = "<button onclick=\"article_kret()\"><img src=\"images/kret.jpg\" alt=\"Kret\"></button>";
    const tresc1 = document.createElement("div");
    tresc1.classList.add("tekst");
    tresc1.innerHTML = "<h3><button onclick=\"article_kret()\">Jak pozbyć się kreta?</button></h3> <br>Mimo iż kret jest niezwykle pożytecznym, niegroźnym, a przy tym naprawdę ładnym stworzeniem, kiedy pojawia się w naszym ogrodzie, często wpadamy ... <button onclick=\"article_kret()\">Czytaj dalej</button>";

    document.getElementById("more").append(box1);
    document.getElementById("box_dodany1").append(tresc1);

    const box2 = document.createElement("div");
    box2.classList.add("box2");
    box2.id = "box_dodany2";
    box2.innerHTML = "<button onclick=\"article_maj()\"><img src=\"images/maj.jpg\" alt=\"Maj w ogrodzie\"></button>";
    const tresc2 = document.createElement("div");
    tresc2.classList.add("tekst");
    tresc2.innerHTML = "<h3><button onclick=\"article_maj()\">Maj w ogrodzie - co robić?</button></h3> <br>Maj to najpiękniejszy, najbardziej kolorowy miesiąc w naszym klimacie. Kwitną wonne lilaki, konwalie i tulipany. W ogrodzie ... <button onclick=\"article_maj()\">Czytaj dalej</button>";

    document.getElementById("more").append(box2);
    document.getElementById("box_dodany2").append(tresc2);

    const box3 = document.createElement("div");
    box3.classList.add("box2");
    box3.id = "box_dodany3";
    box3.innerHTML = "<button onclick=\"article_()\"><img src=\"images/mech.jpg\" alt=\"Mech\"></button>";
    const tresc3 = document.createElement("div");
    tresc3.classList.add("tekst");
    tresc3.innerHTML = "<h3><button onclick=\"article_mech()\">Mech na trawniku - skuteczne zwalczanie</button></h3> <br>Piękny i zadbany trawnik to wizytówka każdego ogrodu. Aby jednak mógł dobrze spełniać swoje zadanie, wymaga wielu zabiegów ... <button onclick=\"article_mech()\">Czytaj dalej</button>";

    document.getElementById("more").append(box3);
    document.getElementById("box_dodany3").append(tresc3);

    const box4 = document.createElement("div");
    box4.classList.add("box2");
    box4.id = "box_dodany4";
    box4.innerHTML = "<button onclick=\"article_ślimaki()\"><img src=\"images/ślimaki.jpg\" alt=\"Ślimaki\"></button>";
    const tresc4 = document.createElement("div");
    tresc4.classList.add("tekst");
    tresc4.innerHTML = "<h3><button onclick=\"article_ślimaki()\">Sposób na ślimaki</button></h3> <br>Piękny i zadbany trawnik to wizytówka każdego ogrodu. Aby jednak mógł dobrze spełniać swoje zadanie, wymaga wielu zabiegów ... <button onclick=\"article_ślimaki()\">Czytaj dalej</button>";

    document.getElementById("more").append(box4);
    document.getElementById("box_dodany4").append(tresc4);
}

/* to samo co wyżej tylko dla innej treści */
function article_podłoża() {
    document.getElementById("strona_główna").innerHTML = " ";
    document.getElementById("more").innerHTML = " ";
    document.getElementById("artykul").innerHTML = "<h2>Podłoża ogrodnicze – jak poprawić ich jakość</h2>"+
                    "<a href=\"images/podłoże.jpg\"><img src=\"images/podłoże.jpg\" alt=\"Podłoże\" title=\"Podłoże\"></a>"+
                    "<p>Perlit i wermikulit to naturalne kruszywa mineralne (nieorganiczne), które doskonale sprawdzają się jako podłoża ogrodnicze lub dodatki, poprawiające ich właściwości. Mają  szerokie zastosowanie w ogrodnictwie: od wysiewania nasion i produkcji rozsady, po uprawę roślin doniczkowych i ogrodowych. Sprawdź, jak wyglądają, jakie mają właściwości i dlaczego warto je stosować!</p>"+
                    "<h3>Jakie powinno być idealne podłoże dla roślin?</h3>"+
                    "<p>Idealna ziemia dla większości roślin jest żyzna: bogata w składniki mineralna i próchnicę oraz posiada odpowiednią strukturę: luźną, by mogły w niej rozwijać się korzenie. Musi jednak zatrzymywać odpowiednią ilość wody dla roślin, jednak jej nadmiar odprowadzać do głębszych warstw – aby korzenie dobrze się rozwijały i nie gniły!</p>"+
                    "<p>Niestety bardzo często gleba w naszych ogrodach nie odpowiada temu opisowi. Niedobór składników pokarmowych można łatwo uzupełnić odpowiednimi nawozami, próchnicę dostarczyć w postaci kompostu, a właściwości fizyczne poprawić odpowiednimi dodatkami. Tu z pomocą przychodzą nam dwa naturalne, nieorganiczne (mineralne) kruszywa: perlit i wermikulit. Warto przyjrzeć im się bliżej i stosować częściej!</p>"+
                    "<h3>Zalety perlitu i wermikulitu</h3>"+
                    "<ul>"+
                        "<li>Regulują stosunki powietrzno-wodne</li>"+
                        "<li>Ograniczają nadmierne parowanie wody</li>"+
                        "<li>Napowietrzają i spulchniają glebę</li>"+
                        "<li>Są odporne na działanie szkodników, pleśni i grzybów</li>"+
                        "<li>Przyspieszają tempo wzrostu roślin</li>"+
                        "<li>Nie zawierają sztucznych substancji</li>"+
                        "<li>Są uniwersalne i nadają się do uprawy roślin ogrodowych i doniczkowych!</li>"+
                        "<li>Są skałami i nie ulegają biodegradacji</li>"+
                        "<li>Są naturalne i w pełni ekologiczne! </li>"+
                    "</ul>"+
                    "<h3>Do czego wykorzystać perlit i wermikulit?</h3>"+
                    "<p>Niezależnie od tego, czy dopiero zakładasz ogród i sadzisz rośliny do gruntu lub doniczek, czy chcesz poprawić glebę dotychczasowych upraw, warto zastosować naturalne, mineralne kruszywa, które korzystnie wpływają na właściwości fizyko-chemiczne podłoża.</p>"+
                    "<p>Kruszywa korzystnie wpływają na rozwój roślin, przyspieszając szybkość ich wzrostu poprzez lepsze dotlenienie korzeni. Utrzymując stałą wilgotność ziemi, zapobiegają nadmiernemu wysuszeniu gleby, zatrzymując w niej wodę i zmniejszając częstotliwość podlewania roślin. Nie wydzielają żadnego zapachu, a do tego są trwałe i odporne na działanie czynników atmosferycznych. </p>"+
                    "<p>Perlit i wermikulit mogą stanowić samodzielne podłoże we wszystkich uprawach ogrodniczych (w gruncie, w doniczce, a nawet w fertygacji) lub być stosowane w postaci mieszanek z różnymi podłożami ogrodniczymi: włóknami kokosowymi, kompostem lub torfowym podłożem uniwersalnym. Otrzymana wieloskładnikowa mieszanka ma szerokie zastosowanie w ogrodnictwie.</p>"+
                    "<p><b>Perlit i wermikulit to produkty naturalne, mineralne produkty, nie uwalniające żadnych związków chemicznych w trakcie wieloletniej uprawy roślin! Dzięki zastosowaniu w podłożach ogrodniczych, poprawiają się ich właściwości fizyko-chemiczne. Napowietrzają i spulchniają glebę, zapewniając korzeniom roślin wilgoć i tlen; zmniejszają także jej kwasowość i zasolenie! Zwiększają również efektywność stosowania nawozów jako nośnik mikro i makroelementów.</b></p>"+
                    "<h3>Dodatek do ziemi ogrodowej</h3>"+
                    "<p>Dodanie kruszyw do ziemi ogrodowej jest szczególnie zalecane w uprawie na glebach ciężkich, gliniastych o niskiej przepuszczalności jako składnik podłoża służący do spulchniania ziemi, a także na podłożach nadmiernie przepuszczalnych, lekkich i piaszczystych, gdyż granulki w swoich szczelinach magazynują wodę wraz z substancjami mineralnymi, przyczyniając się do właściwego odżywiania rośliny. Wzmacniają ukorzenienie, utrzymując roślinę we właściwym położeniu.</p>"+
                    "<p>Są także doskonałym komponentem do przygotowywania podłoży pod trawniki, boiska piłkarskie, pola golfowe, skutecznie ograniczając przeprowadzanie częstej aeracji. Stanowią także świetny składnik podłoży w ogrodach zakładanych na dachach budynków – dzięki niskiemu ciężarowi nasypowemu i właściwościom magazynowania i oddawania wody. Wermikulit można stosować przy produkcji kompostu, jako dodatek \"napowietrzający\", poprawiający strukturę pryzmy oraz redukujący nieprzyjemny zapach.</p>"+
                    "<p>Wykorzystuje się je także jako dodatek do podłoża w uprawie roślin ozdobnych oraz ziół i warzyw (zarówno tych uprawianych w gruncie, jak i pod osłonami). Z uwagi na łatwość stosowania, wystarczy je tylko wymieszać z podłożem przed sadzeniem i powstałą mieszanką wypełnić dołek pod roślinę, a następnie zasypać. Nic prostszego!</p>"+
                    "<h3>Dodatek do podłoża doniczkowego</h3>"+
                    "<p>Podłoże powstałe na bazie ziemi torfowej oraz dodatku kruszyw (perlitu i wermikulitu) to doskonała ziemia uniwersalna do uprawy większości roślin domowych i kwiatów balkonowych. Poziom pH jest neutralny dla obu dodatków – należy to wziąć pod uwagę przy przygotowywaniu mieszanek dla roślin o określonych wymaganiach glebowych.</p>"+
                    "<p>Unikalne właściwości wermikulitu powodują, że przechowywana w jego szczelinach woda wraz ze składnikami mineralnymi dostarczana jest w dokładnie takiej ilości, jaką potrzebuje roślina. Perlit natomiast doskonale napowietrza glebę, rozluźnia jej strukturę i pełni funkcję materiału drenażowego. </p>"+
                    "<p>Kruszywa stanowią także świetny dodatek do podłoża oraz mogą być stosowane jako warstwa drenażowa na dnie pojemników uprawowych: doniczek, skrzynek na rośliny domowe i balkonowe. Przedłużają nawodnienie podłoża, ograniczają potrzebę częstego podlewania oraz zapobiegają gniciu korzeni przy nadmiarze wody.</p>"+
                    "<h3>Podłoże do uprawy hydroponicznej </h3>"+
                    "<p>Perlit stosowany jest jako jednorodne podłoże (maty perlitowe) w uprawach hydroponicznych warzyw i kwiatów. Wermikulit dzięki swojej zdolności zatrzymywania i stopniowego oddawania wody wraz z niezbędnymi dla rozwoju rośliny minerałami także z powodzeniem stosowany jest w uprawach hydroponicznych. Roślina rozwija swój system korzeniowy w ekologicznym podłożu z wermikulitu, a tradycyjna ziemia staje się zbędna.</p>"+
                    "<h3>Podłoże do rozmnażania roślin</h3>"+
                    "<p>Perlit i wermikulit to najlepsze dodatki do podłoża przeznaczonego do rozmnażania roślin: wysiewania nasion czy ukorzeniania sadzonek. Można je wymieszać z ziemią do wysiewu, wysypać warstwę na dnie lub powierzchni pojemnika lub rozmnażać rośliny bezpośrednio w kruszywie (perlicie lub wermikulicie) bez żadnych domieszek. Kruszywa wspomagają kiełkowanie nasion, wzrost korzeni, utrzymując optymalne nawodnienie podłoża, nie doprowadzając do przesuszenia i gnicia siewek.</p>"+
                    "<h3>Ściółkowania</h3>"+
                    "<p>Złoto-brązowy kolor wermikulitu i jego właściwości estetyczne powodują, że doskonale nadaje się on jako materiał upiększający ogród czy działkę. Połyskująca złotym kolorem powierzchnia ziemi sprawia wrażenie szlachetniejszej, rośliny zaś zyskują na uroku i atrakcyjności. Należy również zwrócić uwagę, że właściwości termoizolacyjne i fakt, że wermikulit jest sterylny powodują, iż roślina jest dodatkowo zabezpieczona przed niesprzyjającymi warunkami atmosferycznymi oraz chorobami czy pleśnią. Wermikulit nie rozpuszcza się w wodzie, nie rozmaka i doskonale zabezpiecza przed nagłymi skokami temperatur.</p>"+
                    "<h3>Przechowywania owoców, warzyw i cebulek kwiatowych</h3>"+
                    "<p>Właściwości termoizolacyjne wermikulitu powodują, że doskonale sprawdza się on w przechowywaniu plonów oraz cebulek kwiatowych. Stosowanie wermikulitu jako izolacji może wydłużyć okres przechowywania nawet o 30% i znacznie zmniejszy odpady gnilne. </p>"+
                    "<p>Zawartość pochodzi ze strony: <a href=\"https://zielonyogrodek.pl/pielegnacja/uprawa-roslin/12371-podloza-ogrodnicze-jak-poprawic-ich-jakosc\">https://zielonyogrodek.pl/pielegnacja/uprawa-roslin/12371-podloza-ogrodnicze-jak-poprawic-ich-jakosc</a></p><h2>Czytaj więcej</h2>";
    
    const box1 = document.createElement("div");
    box1.classList.add("box2");
    box1.id = "box_dodany1";
    box1.innerHTML = "<button onclick=\"article_storczyk()\"><img src=\"images/storczyk.jpg\" alt=\"Storczyk\"></button>";
    const tresc1 = document.createElement("div");
    tresc1.classList.add("tekst");
    tresc1.innerHTML = "<h3><button onclick=\"article_storczyk()\">Dlaczego storczyk nie kwitnie?</button></h3> <br>Storczyki to jedne z najpiękniejszych roślin świata, które mamy okazję uprawiać w naszych mieszkaniach. Bogactwo gatunkowe storczyków zadziwia, ... <button onclick=\"article_storczyk()\">Czytaj dalej</button>";

    document.getElementById("more").append(box1);
    document.getElementById("box_dodany1").append(tresc1);

    const box2 = document.createElement("div");
    box2.classList.add("box2");
    box2.id = "box_dodany2";
    box2.innerHTML = "<button onclick=\"article_lilie()\"><img src=\"images/lilia.jpg\" alt=\"Lilia\"></button>";
    const tresc2 = document.createElement("div");
    tresc2.classList.add("tekst");
    tresc2.innerHTML = "<h3><button onclick=\"article_lilie()\">Kiedy i jak sadzić lilie do ogrodu?</button></h3> <br>Lilie są czarującymi kwiatami i słynne są ze swojego intensywnego zapachu. Wybór jest ogromny, ponieważ istnieje ponad sto gatunków i tysiące odmian tej rośliny ... <button onclick=\"article_lilie()\">Czytaj dalej</button>";

    document.getElementById("more").append(box2);
    document.getElementById("box_dodany2").append(tresc2);

    const box3 = document.createElement("div");
    box3.classList.add("box2");
    box3.id = "box_dodany3";
    box3.innerHTML = "<button onclick=\"article_borówka()\"><img src=\"images/borówka.jpg\" alt=\"Borówka\"></button>";
    const tresc3 = document.createElement("div");
    tresc3.classList.add("tekst");
    tresc3.innerHTML = "<h3><button onclick=\"article_borówka()\">Dlaczego borówka amerykańska nie owocuje?</button></h3> <br>Z każdym rokiem rośnie zainteresowanie ogrodników bliską krewniaczką naszych leśnych jagód – borówką ... <button onclick=\"article_borówka()\">Czytaj dalej</button>";

    document.getElementById("more").append(box3);
    document.getElementById("box_dodany3").append(tresc3);

    const box4 = document.createElement("div");
    box4.classList.add("box2");
    box4.id = "box_dodany4";
    box4.innerHTML = "<button onclick=\"article_czerwiec()\"><img src=\"images/czerwiec.jpg\" alt=\"Czerwiec w ogrodzie\"></button>";
    const tresc4 = document.createElement("div");
    tresc4.classList.add("tekst");
    tresc4.innerHTML = "<h3><button onclick=\"article_czerwiec()\">Czerwiec w ogrodzie - co robić?</button></h3> <br>Czerwiec to miesiąc intensywnego wzrostu roślin i pierwszych plonów w ogrodzie użytkowym. Wysokie temperatury i długi dzień pozwalają ... <button onclick=\"article_czerwiec()\">Czytaj dalej</button>";

    document.getElementById("more").append(box4);
    document.getElementById("box_dodany4").append(tresc4);
}

/* to samo co wyżej tylko dla innej treści */
function article_storczyk() {
    document.getElementById("strona_główna").innerHTML = " ";
    document.getElementById("more").innerHTML = " ";
    document.getElementById("artykul").innerHTML = "<h2>Dlaczego storczyk nie kwitnie ?</h2>"+
                "<a href=\"images/storczyk.jpg\"><img src=\"images/storczyk.jpg\" alt=\"Storczyk\" title=\"Storczyk\"></a>"+
                "<p>Storczyki to jedne z najpiękniejszych roślin świata, które mamy okazję uprawiać w naszych mieszkaniach. Bogactwo gatunkowe storczyków zadziwia, sprawiając, że mamy możliwość uprawy gatunków charakterystycznych dla bardzo zróżnicowanych środowisk. Należy wiedzieć, że storczyki opanowały niemalże cały świat, wykazując się doskonałymi możliwościami przystosowawczymi do jakże odmiennych środowisk. Rozpoczynając przygodę z tym bogactwem zacznijmy ją od popularnego i łatwiejszego w uprawie storczyka Phalaenopsis. Przy wyborze roślin starajmy się dopasować dane gatunki do warunków panujących w naszych mieszkaniach. Chcąc uprawiać bardziej wymagające storczyki należy zapewnić im specjalne miejsce, w których w sposób sztuczny zapewnimy im optymalne warunki do rozwoju. Przykładem takiego miejsca jest orchidarium, które możemy zrobić we własnym zakresie bądź zakupić.</p>"+
                "<h3>Przy uprawie storczyków przede wszystkim zwracamy uwagę na takie czynniki jak:</h3>"+
                "<ul>"+
                    "<li>światło</li>"+
                    "<li>temperatura</li>"+
                    "<li>wilgotność</li>"+
                    "<li>podlewanie</li>"+
                    "<li>nawożenie</li>"+
                    "<li>podłoże</li>"+
                "</ul>"+
                "<p>Przy uprawie storczyków należy przede wszystkim dostosować wymagania konkretnego osobnika do wspomnianych powyżej czynników, warunkujących prawidłowy rozwój rośliny. I w tym przypadku obowiązuje zasada, że warunki jakie należy zapewnić danej roślinie powinny być jak najbliższe tym, jakie panują w miejscach, w których dany gatunek występuje w stanie dzikim. Nie zawsze można w pełni odzwierciedlić w mieszkaniu warunki charakterystyczne dla dzikich siedlisk, jednak im będą bliższe optymalnym, tym większe prawdopodobieństwo sukcesu w uprawie danej rośliny. Pamiętajmy także, że rośliny potrafią aklimatyzować się do środowisk nieco odmiennych.</p>"+
                "<p>W przypadku znaczących odstępstw w zakresie wymagań danej rośliny dochodzi do problemów. Osłabiona roślina staje się bardziej podatna na choroby i szkodniki, a poza tym zostaje zakłócony jej prawidłowy rozwój, objawiający się także brakiem kwitnienia.</p>"+
                "<p>Jeżeli nasz storczyk nie kwitnie to najczęściej przyczyną braku kwitnienia są błędy w jego uprawie. Przede wszystkim należy zapoznać się z podstawowymi wymaganiami danej rośliny biorąc pod uwagę wspomniane wcześniej czynniki. Eliminując koleje błędy , wreszcie będziemy mogli doszukać się przyczyny braku kwitnienia. Storczyki należą do bogatej rodziny i bardzo często są zróżnicowane pod względem uprawy. Cześć z nich wymaga np. wyraźnego okresu spoczynku tak jak Dendrobium nobile inne znów nie np. Phalaenopsis. Koniecznie należy dostosować się do tych wszystkich różnic.</p>"+
                "<p>Brak kwitnienia najczęściej spowodowany jest zbyt niską temperaturą, która ogranicza także wzrost rośliny. Poza brakiem kwiatów zaobserwujemy także zbyt małe jak dla danego gatunku liście. Podobnie może stać się w przypadku zbyt wysokiej temperatury oraz zbyt ciemnego stanowiska. Nadmierne nawożenie powoduje uszkodzenie korzeni jak również może prowadzić do braku kwitnienia. Brak kwitnienia może być spowodowany także zbyt skąpym nawożeniem, albo  całkowitym zlekceważeniem potrzeb rośliny na tej płaszczyźnie. W przypadku, kiedy dojdzie do wytworzenia pędu kwiatowego, jednak dojdzie do jego uschnięcia, przyczyny należy doszukiwać się w zbyt niskiej wilgotności oraz wahaniach temperatury wynikłej np. z przeciągów. Kolejne przyczyny to m.in. brak okresu spoczynku, zły okres przesadzenia oraz szkodniki korzeni. Należy pamiętać, że przy uszkodzonych korzeniach roślina nie ma możliwości wytworzenia tak okazałych kwiatów.</p>"+
                "<p>Tytułowe pytanie, jest jednym z najczęstszych pytań odnoszących się do uprawy storczyków. Warto więc zagłębić się w tematykę związaną z potrzebami konkretnych gatunków storczyków, aby mieć świadomość tego, czego tak naprawdę one potrzebują, jakie czynniki najbardziej warunkują ich odpowiedni rozwój. Z pozyskaną wiedzą, będziemy w stanie zapobiegać takiej sytuacji, a jeżeli stanie się ona faktem, trafniej diagnozować. </p>"+
                "<p>Zawartość pochodzi ze strony: <a href=\"https://www.swiatkwiatow.pl/poradnik-ogrodniczy/dlaczego-storczyk-nie-kwitnie--id482.html\">https://www.swiatkwiatow.pl/poradnik-ogrodniczy/dlaczego-storczyk-nie-kwitnie--id482.html</a></p><h2>Czytaj więcej</h2>";
    
    const box1 = document.createElement("div");
    box1.classList.add("box2");
    box1.id = "box_dodany1";
    box1.innerHTML = "<button onclick=\"article_lilie()\"><img src=\"images/lilia.jpg\" alt=\"Lilia\"></button>";
    const tresc1 = document.createElement("div");
    tresc1.classList.add("tekst");
    tresc1.innerHTML = "<h3><button onclick=\"article_lilie()\">Kiedy i jak sadzić lilie do ogrodu?</button></h3> <br>Lilie są czarującymi kwiatami i słynne są ze swojego intensywnego zapachu. Wybór jest ogromny, ponieważ istnieje ponad sto gatunków i tysiące odmian tej rośliny ... <button onclick=\"article_lilie()\">Czytaj dalej</button>";

    document.getElementById("more").append(box1);
    document.getElementById("box_dodany1").append(tresc1);

    const box2 = document.createElement("div");
    box2.classList.add("box2");
    box2.id = "box_dodany2";
    box2.innerHTML = "<button onclick=\"article_borówka()\"><img src=\"images/borówka.jpg\" alt=\"Borówka\"></button>";
    const tresc2 = document.createElement("div");
    tresc2.classList.add("tekst");
    tresc2.innerHTML = "<h3><button onclick=\"article_borówka()\">Dlaczego borówka amerykańska nie owocuje?</button></h3> <br>Z każdym rokiem rośnie zainteresowanie ogrodników bliską krewniaczką naszych leśnych jagód – borówką ... <button onclick=\"article_borówka()\">Czytaj dalej</button>";

    document.getElementById("more").append(box2);
    document.getElementById("box_dodany2").append(tresc2);

    const box3 = document.createElement("div");
    box3.classList.add("box2");
    box3.id = "box_dodany3";
    box3.innerHTML = "<button onclick=\"article_maj()\"><img src=\"images/maj.jpg\" alt=\"Maj w ogrodzie\"></button>";
    const tresc3 = document.createElement("div");
    tresc3.classList.add("tekst");
    tresc3.innerHTML = "<h3><button onclick=\"article_maj()\">Maj w ogrodzie - co robić?</button></h3> <br>Maj to najpiękniejszy, najbardziej kolorowy miesiąc w naszym klimacie. Kwitną wonne lilaki, konwalie i tulipany. W ogrodzie ... <button onclick=\"article_maj()\">Czytaj dalej</button>";

    document.getElementById("more").append(box3);
    document.getElementById("box_dodany3").append(tresc3);

    const box4 = document.createElement("div");
    box4.classList.add("box2");
    box4.id = "box_dodany4";
    box4.innerHTML = "<button onclick=\"article_czerwiec()\"><img src=\"images/czerwiec.jpg\" alt=\"Czerwiec w ogrodzie\"></button>";
    const tresc4 = document.createElement("div");
    tresc4.classList.add("tekst");
    tresc4.innerHTML = "<h3><button onclick=\"article_czerwiec()\">Czerwiec w ogrodzie - co robić?</button></h3> <br>Czerwiec to miesiąc intensywnego wzrostu roślin i pierwszych plonów w ogrodzie użytkowym. Wysokie temperatury i długi dzień pozwalają ... <button onclick=\"article_czerwiec()\">Czytaj dalej</button>";

    document.getElementById("more").append(box4);
    document.getElementById("box_dodany4").append(tresc4);
}

/* to samo co wyżej tylko dla innej treści */
function article_ślimaki() {
    document.getElementById("strona_główna").innerHTML = " ";
    document.getElementById("more").innerHTML = " ";
    document.getElementById("artykul").innerHTML = "<h2>Sposób na ślimaki</h2>"+
                "<a href=\"images/ślimaki.jpg\"><img src=\"images/ślimaki.jpg\" alt=\"Ślimaki\" title=\"Ślimaki\"></a>"+
                "<p>Śimaki mogą stanowić poważny problem, gdyż są to prawdopodobnie najbardziej żarłoczne szkodniki w naszych ogrodach. Mogą powodować dość duże spustoszenie, szczególnie na grządkach z młodymi roślinami. Zwykle ciężko jest dostrzec ich obecność, ponieważ pogodne dni spędzają w ukryciu, a żerują w nocy. Pozostawiają po sobie uszkodzone rośliny i ślady szybko wysychającego śluzu. Wygryzają w liściach dziury, niekiedy pozostawiając same łodygi. Żywią się wieloma gatunkami warzyw i kwiatów, a także roślinami jagodowymi, ziołami, a nawet trawą. Uszkadzają liście, łodygi, owoce, kwiaty, jak również korzenie, cebule i bulwy.</p>"+
                "<p>W ogrodach pojawiają się zarówno ślimaki ze skorupkami, jak i nagie. Szczególnie inwazyjne są te drugie, ponieważ wyrządzają największe szkody, są bardzo żarłoczne i szybko się rozprzestrzeniają. Ślimaki skorupkowe namnażają się znacznie wolniej, jednak i one nie wzgardzą wieloma przysmakami. Znanych jest wiele sposobów zwalczania tych szkodników. Mają one na celu ograniczenie ich liczebności i zapobiegnięcie szkodom wyrządzanym przez nie w ogrodach.</p>"+
                "<h3>Zabiegi agrotechniczne</h3>"+
                "<p>Ulubionym siedliskiem ślimaków są miejsca zacienione i wilgotne, w których mogą się ukryć. Aby je wypłoszyć, należy systematycznie wykaszać zarośla i trawniki, usuwać chwasty na rabatach, nie zapominając o terenie wokół działki. Resztki roślinne powinny być niezwłocznie grabione, nie można dopuszczać do ich gnicia, gdyż jest to doskonałe miejsce do rozwoju ślimaków. Usuwamy również sterty gałęzi, desek, kamieni i gruzu, które mogą stanowić doskonałą kryjówkę. Jeśli ślimaki na naszej działce występują bardzo licznie, to powinniśmy zastanowić się nad likwidacją kompostownika, gdyż panują w nim idealne warunki do bytowania i składania jaj. Zaleca się też częste przekopywanie, motyczenie, grabienie i ugniatanie gleby, powinno się to robić w ciepły i słoneczny dzień. W ten sposób niszczymy dorosłe ślimaki, wyrzucamy na powierzchnię ziemi jaj i młode osobniki, gdzie szybko wysychają na słońcu.</p>"+
                "<h3>Bariery</h3>"+
                "<p>Jednym ze sposobów ochrony rabaty lub pojedynczej rośliny przed ślimakami jest rozmieszczenie wokół nich barier, przez które nie będą mogły się przedostać. Mogą to być pasy 20 cm szerokości, usypane z trocin, kory, plew zbóż czy igieł sosny. Możemy użyć również gruboziarnistego piasku, żwiru, grysy, mączki dolomitowej i ceglanej oraz popiołu. Metoda ta jest skuteczna dopóki przeszkody pozostają suche. Starym i sprawdzonym sposobem jest posypywanie wieczorem ścieżek i ziemi wokół roślin niegaszonym wapnem lub superfosfatem. Substancje te powodują odwodnienie ślimaków i ich śmierć. Jest to metoda dość drastyczna należy też uważać, aby nie posypać wapnem roślin. Grządki i rabaty kwiatowe możemy otoczyć obrzeżami z miedzi. Metal ten skutecznie zniechęca szkodniki.</p>"+
                "<h3>Dobór roślin</h3>"+
                "<p>Warto tez zwrócić uwagę na rośliny, jakie sadzimy w naszym ogródku. Powinniśmy unikać tych, które są przysmakiem ślimaków. Szczególnie chętnie jedzone są warzywa kapustne, buraki ćwikłowe, marchew oraz sałatę. Z roślin sadowniczych chętnie wybierają maliny, truskawki i poziomki. Lubiane przez nie jest również wiele roślin ozdobnych, w tym aksamitka, astry chińskie, cynie, dalie, lilie, nasturcje i funkie, podgryzają też cebulki tulipanów. Niektóre rośliny mogą nam pomóc odstraszyć mięczaki. Należy do nich mydlnica lekarska, macierzanka i majeranek. W ogrodowe rabaty warto wkomponować  bylice piołun, rumianek, cząber ogrodowy, gorczycę, cebulę, czosnek, szałwię, hyzop, tymianek, nachyłek, krwawnik, krokosomię i przywrotnik. Rośliny te zniechęcą ślimaki do żerowania na rabatach czy grządkach. Coraz częściej w centrach ogrodniczych można kupić rośliny, które są mniej atrakcyjne dla ślimaków, odporne odmiany kapusty czerwonej, niepachnące aksamitki i funkie o znacznie grubszych liściach.</p>"+
                "<h3>Pułapki</h3>"+
                "<p>Najprostszym sposobem pozbywania się ślimaków jest ich ręczne zbieranie i wyroszenie w miejsca oddalone od naszego ogrodu lub niszczenie. Jednak dla właścicieli większych ogrodów może być to bardzo pracochłonne. W takich wypadków warto zastosować pułapki. Do tego celu możemy wykorzystać ich naturalne skłonności do chronienia się w wilgotnych i zacienionych miejscach oraz ogromny apetyt. Najprościej jest ułożyć na wcześniej zwilżone podłoże deski, dachówki, podstawki do doniczek ułożone do góry dnem lub po prostu duże liście łopianu czy kapusty. Dodatkowo możemy użyć przynęty jak licie roślin kapustnych, marchew, ziemniaki, buraki czy sałata.  Ślimaki z chęcią będą gromadzić się w takich miejscach. Przynętę wykładamy wieczorem, a rano będziemy mogli przejrzeć wszystkie pułapki, zebrać dużą ilość szkodników i usunąć z ogrodu. Można też wkopać w ziemię dość głęboki pojemnik, wypełniamy go piwem, za którym ślimaki przepadają. Płynu powinno być sporo, gdyż szkodniki powinny się w nim podtopić.</p>"+
                "<h3>Wrogowie naturalni</h3>"+
                "<p> W walce ze ślimakami mogą nam pomóc ich wrogowie naturalni. Są to nie tylko ptaki i drobne gryzonie, jak jeże, ryjówki i krety, a także gady oraz płazy. Groźne dla ślimaków są również drapieżne owady, szczególnie chrząszcze i muchówki. Należy nie tylko chronić te pożyteczne zwierzęta, ale zapewniać odpowiednie warunki do życia w naszym ogrodzie. Powinniśmy zadbać o budki lęgowe, zapewnić im schronienie w postaci gęstych krzewów lub żywopłotu. Kępa pokrzyw w rogu ogrodu przyciągnie do niego pożyteczne owady.</p>"+
                "<p>W sprzedaży dostępny jest preparat Nemaslug zawierający pasożytnicze nicienie. Występuje on w formie oprysku lub proszku, który mieszamy z ziemią. Ważne jest, aby przez najbliższy tydzień podłoże było stale wilgotne, gdyż pasożyty są wrażliwe na suszę. Zaatakowane mięczaki szybko giną, a nicienie stale się namnażają. Preparat ten jest bezpieczny dla ludzi i zwierząt, nadaje się do zwalczania różnych gatunków ślimaków.</p>"+
                "<table><caption><h3>Preparaty</h3></caption><thead><tr> <th>Naturalne</th> <th>Chemiczne</th></tr></thead><tbody><tr>"+
                "<td>Dobre skutki daje ściółkowanie ziemi liśćmi narecznicy samczej, której zapach odstrasza ślimaki. Poleca się również opryskiwanie zaatakowanych roślin gnojówką z bylicy piołun lub orlicy pospolitej. Przygotowuje się ją ze świeżo zebranych roślin, które zalewamy wodą i mieszamy co trzy dni. Mieszanka będzie gotowa po upływie miesiąca, gdy wszystko dobrze przefermentuje. Możemy również przygotować odwar z papryki. Potrzebny będzie do tego 1 kg świeżych owoców oraz 10 l wody, wszystko gotujemy przez godzinę. Odstawiamy na 48 godzin, następnie dokładnie przecieramy i przecedzamy. Gotowym preparatem opryskujemy rośliny.</td>"+
                "<td>Środki chemiczne powinny być ostatecznością, gdyż większość z nich jest silnie toksyczna. Nie są obojętne dla człowieka i zwierząt, w tym również dla organizmów pożytecznych. Podczas ich stosowania należy zachować dużą ostrożność oraz dawkować je z umiarem, zawsze zgodnie z zaleceniami na etykiecie. Jeśli jednak populacja ślimaków jest bardzo liczna i w żaden sposób nie możemy jej ograniczyć, możemy sięgnąć po gotowe preparaty jak Glanzit, Snacol, Ślimakol, czy Mesurol, Alimax. Najlepiej stosować je późnym południem lub wieczorem, zanim szkodniki opuszczą swe kryjówki. Rozsypujemy je pomiędzy roślinami, trzeba uważać, by nie posypać samych roślin. Większość środków nie jest odporna na deszcz i po opadach lub podlaniu roślin niezbędna będzie ponowna aplikacja.</td></tr></tbody></table>"+
                "<p>Nie ma jednego skutecznego sposobu na ślimaki. Najlepsze wyniki w walce z nimi uzyskamy stosując kilka metod naraz. Zastosowanie się do nich pozwoli na znaczne ograniczenie liczebności populacji i zachowanie jej na nikim poziomie. Ślimaki będą się nadmiernie rozmnażać, a w efekcie nie będą dużym zagrożeniem dla roślin.</p>"+
                "<p>Autor: Justyna Przasnyska</p>"+
                "<p>Zawartość pochodzi ze strony:<a href=\"https://www.swiatkwiatow.pl/poradnik-ogrodniczy/sposob-na-slimaki-id1326.html\">https://www.swiatkwiatow.pl/poradnik-ogrodniczy/sposob-na-slimaki-id1326.html</a></p><h2>Czytaj więcej</h2>";
    
    const box1 = document.createElement("div");
    box1.classList.add("box2");
    box1.id = "box_dodany1";
    box1.innerHTML = "<button onclick=\"article_mrówki()\"><img src=\"images/mrówki.jpg\" alt=\"Mrówki\"></button>";
    const tresc1 = document.createElement("div");
    tresc1.classList.add("tekst");
    tresc1.innerHTML = "<h3><button onclick=\"article_mrówki()\">Jak zwalczać mrówki w ogrodzie?</button></h3> <br>Mrówek w ogrodzie, nikt nie lubi. Jedzą resztki roślin, oblepiają kwiaty. Szczególnie lubią te, które przy kwitnieniu wypuszczają na zewnątrz słodki sok ... <button onclick=\"article_mrówki()\">Czytaj dalej</button>";

    document.getElementById("more").append(box1);
    document.getElementById("box_dodany1").append(tresc1);

    const box2 = document.createElement("div");
    box2.classList.add("box2");
    box2.id = "box_dodany2";
    box2.innerHTML = "<button onclick=\"article_mech()\"><img src=\"images/mech.jpg\" alt=\"Mech\"></button>";
    const tresc2 = document.createElement("div");
    tresc2.classList.add("tekst");
    tresc2.innerHTML = "<h3><button onclick=\"article_mech()\">Mech na trawniku - skuteczne zwalczanie</button></h3> <br>Piękny i zadbany trawnik to wizytówka każdego ogrodu. Aby jednak mógł dobrze spełniać swoje zadanie, wymaga wielu zabiegów ... <button onclick=\"article_mech()\">Czytaj dalej</button>";

    document.getElementById("more").append(box2);
    document.getElementById("box_dodany2").append(tresc2);

    const box3 = document.createElement("div");
    box3.classList.add("box2");
    box3.id = "box_dodany3";
    box3.innerHTML = "<button onclick=\"article_podłoża()\"><img src=\"images/podłoże.jpg\" alt=\"Podłoże\"></button>";
    const tresc3 = document.createElement("div");
    tresc3.classList.add("tekst");
    tresc3.innerHTML = "<h3><button onclick=\"article_podłoża()\">Podłoża ogrodnicze – jak poprawić ich jakość</button></h3> <br>Perlit i wermikulit to naturalne kruszywa mineralne (nieorganiczne), które doskonale sprawdzają się jako ... <button onclick=\"article_podłoża()\">Czytaj dalej</button>";

    document.getElementById("more").append(box3);
    document.getElementById("box_dodany3").append(tresc3);

    const box4 = document.createElement("div");
    box4.classList.add("box2");
    box4.id = "box_dodany4";
    box4.innerHTML = "<button onclick=\"article_kret()\"><img src=\"images/kret.jpg\" alt=\"Kret\"></button>";
    const tresc4 = document.createElement("div");
    tresc4.classList.add("tekst");
    tresc4.innerHTML = "<h3><button onclick=\"article_kret()\">Jak pozbyć się kreta?</button></h3> <br>Mimo iż kret jest niezwykle pożytecznym, niegroźnym, a przy tym naprawdę ładnym stworzeniem, kiedy pojawia się w naszym ogrodzie, często wpadamy ... <button onclick=\"article_kret()\">Czytaj dalej</button>";

    document.getElementById("more").append(box4);
    document.getElementById("box_dodany4").append(tresc4);
}



/* katalogi mają trochę inną formę */
function katalog_drzewa(){
    /* podobnie jak w article usuwa zawartość strony */
    document.getElementById("strona_główna").innerHTML = " ";
    document.getElementById("more").innerHTML = " ";
    /* w elemencie artykul dopisuje jedynie nagłówek */
    document.getElementById("artykul").innerHTML = "<h2>Drzewa i krzewy</h2>";
    
    /* tworzy element div id zdjecia któey będzie przechowywał obrazy */
    const div = document.createElement("div");
    div.id = "zdjecia";
    /* obrazy zawierają atrybuty do lightbox z jquery */
    div.innerHTML = "<a href=\"images/katalog/drzewa/akacja-żółta.jpg\" target=\"_blank\"  data-lightbox=\"galeria\" data-title=\"Akacja żółta\"><img src=\"images/katalog/drzewa/akacja-żółta.jpg\" alt=\"Akacja żółta\" title=\"Akacja żółta\"></a>"+
                "<a href=\"images/katalog/drzewa/berberys.jpg\" target=\"_blank\"  data-lightbox=\"galeria\" data-title=\"Berberys\"><img src=\"images/katalog/drzewa/berberys.jpg\" alt=\"Berberys\" title=\"Berberys\"></a>"+
                "<a href=\"images/katalog/drzewa/berberys-czerwony.jpg\" target=\"_blank\"  data-lightbox=\"galeria\" data-title=\"Berberys czerwony\"><img src=\"images/katalog/drzewa/berberys-czerwony.jpg\" alt=\"Berberys czerwony\" title=\"Berberys czerwony\"></a>"+
                "<a href=\"images/katalog/drzewa/berberys-zielony.jpg\" target=\"_blank\"  data-lightbox=\"galeria\" data-title=\"Berberys zielony\"><img src=\"images/katalog/drzewa/berberys-zielony.jpg\" alt=\"Berberys zielony\" title=\"Berberys zielony\"></a>"+
                "<a href=\"images/katalog/drzewa/bez-biały.jpg\" target=\"_blank\"  data-lightbox=\"galeria\" data-title=\"Bez biały\"><img src=\"images/katalog/drzewa/bez-biały.jpg\" alt=\"Bez biały\" title=\"Bez biały\"></a>"+
                "<a href=\"images/katalog/drzewa/bez-biały-kwiat.jpg\" target=\"_blank\"  data-lightbox=\"galeria\" data-title=\"Bez biały - kwiat\"><img src=\"images/katalog/drzewa/bez-biały-kwiat.jpg\" alt=\"Bez biały - kwiat\" title=\"Bez biały - kwiat\"></a>"+
                "<a href=\"images/katalog/drzewa/bez-fioletowy-kwiat.jpg\" target=\"_blank\"  data-lightbox=\"galeria\" data-title=\"Bez fioletowy - kwiat\"><img src=\"images/katalog/drzewa/bez-fioletowy-kwiat.jpg\" alt=\"Bez fioletowy - kwiat\" title=\"Bez fioletowy - kwiat\"></a>"+
                "<a href=\"images/katalog/drzewa/bukszpan-duży.jpg\" target=\"_blank\"  data-lightbox=\"galeria\" data-title=\"Bukszpan duży\"><img src=\"images/katalog/drzewa/bukszpan-duży.jpg\" alt=\"Bukszpan duży\" title=\"Bukszpan duży\"></a>"+
                "<a href=\"images/katalog/drzewa/bukszpan-mały.jpg\" target=\"_blank\"  data-lightbox=\"galeria\" data-title=\"Bukszpan mały\"><img src=\"images/katalog/drzewa/bukszpan-mały.jpg\" alt=\"Bukszpan mały\" title=\"Bukszpan mały\"></a>"+
                "<a href=\"images/katalog/drzewa/klon-czerwony.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Klon czerwony\"><img src=\"images/katalog/drzewa/klon-czerwony.jpg\" alt=\"Klon czerwony\" title=\"Klon czerwony\"></a>"+
                "<a href=\"images/katalog/drzewa/klon-czerwony-liście.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Klon czerwony - liście\"><img src=\"images/katalog/drzewa/klon-czerwony-liście.jpg\" alt=\"Klon czerwony - liście\" title=\"Klon czerwony - liście\"></a>"+
                "<a href=\"images/katalog/drzewa/orzech-laskowy-czerwony.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Orzech laskowy czerwony\"><img src=\"images/katalog/drzewa/orzech-laskowy-czerwony.jpg\" alt=\"Orzech laskowy czerwony\" title=\"Orzech laskowy czerwony\"></a>"+
                "<a href=\"images/katalog/drzewa/perukowiec.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Perukowiec\"><img src=\"images/katalog/drzewa/perukowiec.jpg\" alt=\"Perukowiec\" title=\"Perukowiec\"></a>"+
                "<a href=\"images/katalog/drzewa/pszczelina.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Pszczelina\"><img src=\"images/katalog/drzewa/pszczelina.jpg\" alt=\"Pszczelina\" title=\"Pszczelina\"></a>"+
                "<a href=\"images/katalog/drzewa/tuja-prostopadłościan.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Tuja - prostopadłościan\"><img src=\"images/katalog/drzewa/tuja-prostopadłościan.jpg\" alt=\"Tuja - prostopadłościan\" title=\"Tuja - prostopadłościan\"></a>"+
                "<a href=\"images/katalog/drzewa/tuja-wąska.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Tuja - wąska\"><img src=\"images/katalog/drzewa/tuja-wąska.jpg\" alt=\"Tuja - wąska\" title=\"Tuja - wąska\"></a>"+
                "<a href=\"images/katalog/drzewa/tuja-wysoka.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Tuja - wysoka\"><img src=\"images/katalog/drzewa/tuja-wysoka.jpg\" alt=\"Tuja - wysoka\" title=\"Tuja - wysoka\"></a>"+
                "<a href=\"images/katalog/drzewa/tuja-zielona-koło.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Tuja zielona - koło\"><img src=\"images/katalog/drzewa/tuja-zielona-koło.jpg\" alt=\"Tuja zielona - koło\" title=\"Tuja zielona - koło\"></a>"+
                "<a href=\"images/katalog/drzewa/tuja-żółta-koło.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Tuja żółta - koło\"><img src=\"images/katalog/drzewa/tuja-żółta-koło.jpg\" alt=\"Tuja żółta - koło\" title=\"Tuja żółta - koło\"></a>";
        
        /* div zdjecia zostaje dodany do div artykul, append - dopisanie w elemencie podanym w getelementbyid (na koniec jego tresci) */
        document.getElementById("artykul").append(div);
}

/* to samo co wyżej tylko dla innych zdjęć */
function katalog_kwiaty(){
    document.getElementById("strona_główna").innerHTML = " ";
    document.getElementById("more").innerHTML = " ";
    document.getElementById("artykul").innerHTML = "<h2>Kwiaty i rośliny ozdobne</h2>";
    
    const div = document.createElement("div");
    div.id = "zdjecia";
    div.innerHTML = "<a href=\"images/katalog/kwiaty/aksamitka.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Aksamitka\"><img src=\"images/katalog/kwiaty/aksamitka.jpg\" alt=\"Aksamitka\" title=\"Aksamitka\"></a>"+
                    "<a href=\"images/katalog/kwiaty/barwinek.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Barwinek\"><img src=\"images/katalog/kwiaty/barwinek.jpg\" alt=\"Barwinek\" title=\"Barwinek\"></a>"+
                    "<a href=\"images/katalog/kwiaty/bratki.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Bratki\"><img src=\"images/katalog/kwiaty/bratki.jpg\" alt=\"Bratki\" title=\"Bratki\"></a>"+
                    "<a href=\"images/katalog/kwiaty/chaber-bławatek.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Chaber bławatek\"><img src=\"images/katalog/kwiaty/chaber-bławatek.jpg\" alt=\"Chaber bławatek\" title=\"Chaber bławatek\"></a>"+
                    "<a href=\"images/katalog/kwiaty/czosnek-ozdobny.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Czosnek ozdobny\"><img src=\"images/katalog/kwiaty/czosnek-ozdobny.jpg\" alt=\"Czosnek ozdobny\" title=\"Czosnek ozdobny\"></a>"+
                    "<a href=\"images/katalog/kwiaty/czyściec-wełniasty.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Czyściec wełniasty\"><img src=\"images/katalog/kwiaty/czyściec-wełniasty.jpg\" alt=\"Czyściec wełniasty\" title=\"Czyściec wełniasty\"></a>"+
                    "<a href=\"images/katalog/kwiaty/hosta-dwukolorowa.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Hosta dwukolorowa\"><img src=\"images/katalog/kwiaty/hosta-dwukolorowa.jpg\" alt=\"Hosta dwukolorowa\" title=\"Hosta dwukolorowa\"></a>"+
                    "<a href=\"images/katalog/kwiaty/hosta-jasna.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Hosta jasna\"><img src=\"images/katalog/kwiaty/hosta-jasna.jpg\" alt=\"Hosta jasna\" title=\"Hosta jasna\"></a>"+
                    "<a href=\"images/katalog/kwiaty/hosta-zielona.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Hosta zielona\"><img src=\"images/katalog/kwiaty/hosta-zielona.jpg\" alt=\"Hosta zielona\" title=\"Hosta zielona\"></a>"+
                    "<a href=\"images/katalog/kwiaty/irys-biały.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Irys biały\"><img src=\"images/katalog/kwiaty/irys-biały.jpg\" alt=\"Irys biały\" title=\"Irys biały\"></a>"+
                    "<a href=\"images/katalog/kwiaty/irys-bordowy.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Irys bordowy\"><img src=\"images/katalog/kwiaty/irys-bordowy.jpg\" alt=\"Irys bordowy\" title=\"Irys bordowy\"></a>"+
                    "<a href=\"images/katalog/kwiaty/irys-ciemnofioletowy.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Irys ciemnofioletowy\"><img src=\"images/katalog/kwiaty/irys-ciemnofioletowy.jpg\" alt=\"Irys ciemnofioletowy\" title=\"Irys ciemnofioletowy\"></a>"+
                    "<a href=\"images/katalog/kwiaty/irys-fioletowy.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Irys fioletowy\"><img src=\"images/katalog/kwiaty/irys-fioletowy.jpg\" alt=\"Irys fioletowy\" title=\"Irys fioletowy\"></a>"+
                    "<a href=\"images/katalog/kwiaty/irys-fioletowy-syberyjski.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Irys fioletowy syberyjski\"><img src=\"images/katalog/kwiaty/irys-fioletowy-syberyjski.jpg\" alt=\"Irys fioletowy syberyjski\" title=\"Irys fioletowy syberyjski\"></a>"+
                    "<a href=\"images/katalog/kwiaty/irys-żółty.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Irys żółty\"><img src=\"images/katalog/kwiaty/irys-żółty.jpg\" alt=\"Irys żółty\" title=\"Irys żółty\"></a>"+
                    "<a href=\"images/katalog/kwiaty/jaśmin.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Jaśmin\"><img src=\"images/katalog/kwiaty/jaśmin.jpg\" alt=\"Jaśmin\" title=\"Jaśmin\"></a>"+
                    "<a href=\"images/katalog/kwiaty/kalia-biała.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Kalia biała\"><img src=\"images/katalog/kwiaty/kalia-biała.jpg\" alt=\"Kalia biała\" title=\"Kalia biała\"></a>"+
                    "<a href=\"images/katalog/kwiaty/kalia-pomarańczowa.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Kalia pomarańczowa\"><img src=\"images/katalog/kwiaty/kalia-pomarańczowa.jpg\" alt=\"Kalia pomarańczowa\" title=\"Kalia pomarańczowa\"></a>"+
                    "<a href=\"images/katalog/kwiaty/karmnik-ościsty-mech-ozdobny.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Karmnik ościsty - mech ozdobny\"><img src=\"images/katalog/kwiaty/karmnik-ościsty-mech-ozdobny.jpg\" alt=\"Karmnik ościsty - mech ozdobny\" title=\"Karmnik ościsty - mech ozdobny\"></a>"+
                    "<a href=\"images/katalog/kwiaty/lilia.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Lilia\"><img src=\"images/katalog/kwiaty/lilia.jpg\" alt=\"Lilia\" title=\"Lilia\"></a>"+
                    "<a href=\"images/katalog/kwiaty/łubin-bordowy.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Łubin bordowy\"><img src=\"images/katalog/kwiaty/łubin-bordowy.jpg\" alt=\"Łubin bordowy\" title=\"Łubin bordowy\"></a>"+
                    "<a href=\"images/katalog/kwiaty/łubin-fioletowy.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Łubin fioletowy\"><img src=\"images/katalog/kwiaty/łubin-fioletowy.jpg\" alt=\"Łubin fioletowy\" title=\"Łubin fioletowy\"></a>"+
                    "<a href=\"images/katalog/kwiaty/malwa.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Malwa\"><img src=\"images/katalog/kwiaty/malwa.jpg\" alt=\"Malwa\" title=\"Malwa\"></a>"+
                    "<a href=\"images/katalog/kwiaty/nasturcja.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Nasturcja\"><img src=\"images/katalog/kwiaty/nasturcja.jpg\" alt=\"Nasturcja\" title=\"Nasturcja\"></a>"+
                    "<a href=\"images/katalog/kwiaty/niezapominajka-niebieska.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Niezapominajka niebieska\"><img src=\"images/katalog/kwiaty/niezapominajka-niebieska.jpg\" alt=\"Niezapominajka niebieska\" title=\"Niezapominajka niebieska\"></a>"+
                    "<a href=\"images/katalog/kwiaty/niezapominajka-różowa.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Niezapominajka różowa\"><img src=\"images/katalog/kwiaty/niezapominajka-różowa.jpg\" alt=\"Niezapominajka różowa\" title=\"Niezapominajka różowa\"></a>"+
                    "<a href=\"images/katalog/kwiaty/orlik-fioletowy.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Orlik fioletowy\"><img src=\"images/katalog/kwiaty/orlik-fioletowy.jpg\" alt=\"Orlik fioletowy\" title=\"Orlik fioletowy\"></a>"+
                    "<a href=\"images/katalog/kwiaty/orlik-różowy.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Orlik różowy\"><img src=\"images/katalog/kwiaty/orlik-różowy.jpg\" alt=\"Orlik różowy\" title=\"Orlik różowy\"></a>"+
                    "<a href=\"images/katalog/kwiaty/pelargonia.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Pelargonia\"><img src=\"images/katalog/kwiaty/pelargonia.jpg\" alt=\"Pelargonia\" title=\"Pelargonia\"></a>"+
                    "<a href=\"images/katalog/kwiaty/piwonia.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Piwonia\"><img src=\"images/katalog/kwiaty/piwonia.jpg\" alt=\"Piwonia\" title=\"Piwonia\"></a>"+
                    "<a href=\"images/katalog/kwiaty/rojnik-róża-pustyni.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Rojnik - róża pustyni\"><img src=\"images/katalog/kwiaty/rojnik-róża-pustyni.jpg\" alt=\"Rojnik - róża pustyni\" title=\"Rojnik - róża pustyni\"></a>"+
                    "<a href=\"images/katalog/kwiaty/różanecznik-fioletowy.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Różanecznik fioletowy\"><img src=\"images/katalog/kwiaty/różanecznik-fioletowy.jpg\" alt=\"Różanecznik fioletowy\" title=\"Różanecznik fioletowy\"></a>"+
                    "<a href=\"images/katalog/kwiaty/różanecznik-różowy.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Różanecznik różowy\"><img src=\"images/katalog/kwiaty/różanecznik-różowy.jpg\" alt=\"Różanecznik różowy\" title=\"Różanecznik różowy\"></a>"+
                    "<a href=\"images/katalog/kwiaty/trawa-ozdobna.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Trawa ozdobna\"><img src=\"images/katalog/kwiaty/trawa-ozdobna.jpg\" alt=\"Trawa ozdobna\" title=\"Trawa ozdobna\"></a>"+
                    "<a href=\"images/katalog/kwiaty/trawa-ozdobna-zielona.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Trawa ozdobna - zielona\"><img src=\"images/katalog/kwiaty/trawa-ozdobna-zielona.jpg\" alt=\"Trawa ozdobna zielona\" title=\"Trawa ozdobna zielona\"></a>"+
                    "<a href=\"images/katalog/kwiaty/tulipan-biały.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Tulipa biały\"><img src=\"images/katalog/kwiaty/tulipan-biały.jpg\" alt=\"Tulipan biały\" title=\"Tulipan biały\"></a>"+
                    "<a href=\"images/katalog/kwiaty/tulipan-pomarańczowy.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Tulipan pomarańczowy\"><img src=\"images/katalog/kwiaty/tulipan-pomarańczowy.jpg\" alt=\"Tulipan pomarańczowy\" title=\"Tulipan pomarańczowy\"></a>"+
                    "<a href=\"images/katalog/kwiaty/tulipan-żółty.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Tulipan żółty\"><img src=\"images/katalog/kwiaty/tulipan-żółty.jpg\" alt=\"Tulipan żółty\" title=\"Tulipan żółty\"></a>";
    
    document.getElementById("artykul").append(div);
}

/* to samo co wyżej tylko dla innych zdjęć */
function katalog_owoce(){
    document.getElementById("strona_główna").innerHTML = " ";
    document.getElementById("more").innerHTML = " ";
    document.getElementById("artykul").innerHTML = "<h2>Owoce</h2>";
    
    const div = document.createElement("div");
    div.id = "zdjecia";
    div.innerHTML = "<a href=\"images/katalog/owoce/agrest.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Agrest\"><img src=\"images/katalog/owoce/agrest.jpg\" alt=\"Agrest\" title=\"Agrest\"></a>"+
                    "<a href=\"images/katalog/owoce/agrest-owoc.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Agrest - owoc\"><img src=\"images/katalog/owoce/agrest-owoc.jpg\" alt=\"Agrest - owoc\" title=\"Agrest - owoc\"></a>"+
                    "<a href=\"images/katalog/owoce/czereśnia-drzewo.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Czereśnia\"><img src=\"images/katalog/owoce/czereśnia-drzewo.jpg\" alt=\"Czereśnia\" title=\"Czereśnia\"></a>"+
                    "<a href=\"images/katalog/owoce/czereśnia-owoc.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Czereśnia - owoc\"><img src=\"images/katalog/owoce/czereśnia-owoc.jpg\" alt=\"Czereśnia - owoc\" title=\"Czereśnia - owoc\"></a>"+
                    "<a href=\"images/katalog/owoce/gruszka-drzewo.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Gruszka\"><img src=\"images/katalog/owoce/gruszka-drzewo.jpg\" alt=\"Gruszka\" title=\"Gruszka\"></a>"+
                    "<a href=\"images/katalog/owoce/gruszka-kwiat.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Gruszka - kwiat\"><img src=\"images/katalog/owoce/gruszka-kwiat.jpg\" alt=\"Gruszka - kwiat\" title=\"Gruszka - kwiat\"></a>"+
                    "<a href=\"images/katalog/owoce/jabłoń-drzewo.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Jabłoń\"><img src=\"images/katalog/owoce/jabłoń-drzewo.jpg\" alt=\"Jabłoń\" title=\"Jabłoń\"></a>"+
                    "<a href=\"images/katalog/owoce/jabłoń-kwiat.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Jabłoń - kwiat\"><img src=\"images/katalog/owoce/jabłoń-kwiat.jpg\" alt=\"Jabłoń - kwiat\" title=\"Jabłoń - kwiat\"></a>"+
                    "<a href=\"images/katalog/owoce/malina-jesienna.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Malina jesienna\"><img src=\"images/katalog/owoce/malina-jesienna.jpg\" alt=\"Malina jesienna\" title=\"Malina jesienna\"></a>"+
                    "<a href=\"images/katalog/owoce/poziomka.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Poziomka\"><img src=\"images/katalog/owoce/poziomka.jpg\" alt=\"Poziomka\" title=\"Poziomka\"></a>"+
                    "<a href=\"images/katalog/owoce/pożeczka.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Porzeczka\"><img src=\"images/katalog/owoce/porzeczka.jpg\" alt=\"Porzeczka\" title=\"Porzeczka\"></a>"+
                    "<a href=\"images/katalog/owoce/pożeczka-owoc.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Porzeczka - owoc\"><img src=\"images/katalog/owoce/porzeczka-owoc.jpg\" alt=\"Porzeczka - owoc\" title=\"Porzeczka - owoc\"></a>"+
                    "<a href=\"images/katalog/owoce/śliwka.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Śliwka - owoc\"><img src=\"images/katalog/owoce/śliwka.jpg\" alt=\"Śliwka - owoc\" title=\"Śliwka - owoc\"></a>"+
                    "<a href=\"images/katalog/owoce/truskawka.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Truskawka\"><img src=\"images/katalog/owoce/truskawka.jpg\" alt=\"Truskawka\" title=\"Truskawka\"></a>"+
                    "<a href=\"images/katalog/owoce/wiśnia-drzewo.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Wiśnia\"><img src=\"images/katalog/owoce/wiśnia-drzewo.jpg\" alt=\"Wiśnia\" title=\"Wiśnia\"></a>"+
                    "<a href=\"images/katalog/owoce/wiśnia-owoc.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Wiśnia - owoc\"><img src=\"images/katalog/owoce/wiśnia-owoc.jpg\" alt=\"Wiśnia - owoc\" title=\"Wiśnia - owoc\"></a>";
    
    document.getElementById("artykul").append(div);
}

/* to samo co wyżej tylko dla innych zdjęć */
function katalog_warzywa(){
    document.getElementById("strona_główna").innerHTML = " ";
    document.getElementById("more").innerHTML = " ";
    document.getElementById("artykul").innerHTML = "<h2>Warzywa i zioła</h2>";
    
    const div = document.createElement("div");
    div.id = "zdjecia";
    div.innerHTML = "<a href=\"images/katalog/warzywa/bób.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Bób\"><img src=\"images/katalog/warzywa/bób.jpg\" alt=\"Bób\" title=\"Bób\"></a>"+
                    "<a href=\"images/katalog/warzywa/burak-czerwony.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Buraak czerwony\"><img src=\"images/katalog/warzywa/burak-czerwony.jpg\" alt=\"Burak czerwony\" title=\"Burak czerwony\"></a>"+
                    "<a href=\"images/katalog/warzywa/cebula-kwiat.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Cebula - kwiat\"><img src=\"images/katalog/warzywa/cebula-kwiat.jpg\" alt=\"Cebula - kwiat\" title=\"Cebula - kwiat\"></a>"+
                    "<a href=\"images/katalog/warzywa/czosnek.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Czosnek\"><img src=\"images/katalog/warzywa/czosnek.jpg\" alt=\"Czosnek\" title=\"Czosnek\"></a>"+
                    "<a href=\"images/katalog/warzywa/fasola.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Fasola\"><img src=\"images/katalog/warzywa/fasola.jpg\" alt=\"Fasola\" title=\"Fasola\"></a>"+
                    "<a href=\"images/katalog/warzywa/kapusta.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Kapusta\"><img src=\"images/katalog/warzywa/kapusta.jpg\" alt=\"Kapusta\" title=\"Kapusta\"></a>"+
                    "<a href=\"images/katalog/warzywa/koper.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Koper\"><img src=\"images/katalog/warzywa/koper.jpg\" alt=\"Koper\" title=\"Koper\"></a>"+
                    "<a href=\"images/katalog/warzywa/mięta-pieprzowa.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Mięta pieprzowa\"><img src=\"images/katalog/warzywa/mięta-pieprzowa.jpg\" alt=\"Mięta pieprzowa\" title=\"Mięta pieprzowa\"></a>"+
                    "<a href=\"images/katalog/warzywa/ogórek.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Ogórek\"><img src=\"images/katalog/warzywa/ogórek.jpg\" alt=\"Ogórek\" title=\"Ogórek\"></a>"+
                    "<a href=\"images/katalog/warzywa/pietruszka.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Pietruszka\"><img src=\"images/katalog/warzywa/pietruszka.jpg\" alt=\"Pietruszka\" title=\"Pietruszka\"></a>"+
                    "<a href=\"images/katalog/warzywa/pomidor.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Pomidor\"><img src=\"images/katalog/warzywa/pomidor.jpg\" alt=\"Pomidor\" title=\"Pomidor\"></a>"+
                    "<a href=\"images/katalog/warzywa/rabarbar.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Rabarbar\"><img src=\"images/katalog/warzywa/rabarbar.jpg\" alt=\"Rabarbar\" title=\"Rabarbar\"></a>"+
                    "<a href=\"images/katalog/warzywa/rzodkiewka.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Rzodkiewka\"><img src=\"images/katalog/warzywa/rzodkiewka.jpg\" alt=\"Rzodkiewka\" title=\"Rzodkiewka\"></a>"+
                    "<a href=\"images/katalog/warzywa/sałata.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Sałata\"><img src=\"images/katalog/warzywa/sałata.jpg\" alt=\"Sałata\" title=\"Sałata\"></a>"+
                    "<a href=\"images/katalog/warzywa/słonecznik.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Słonecznik\"><img src=\"images/katalog/warzywa/słonecznik.jpg\" alt=\"Słonecznik\" title=\"Słonecznik\"></a>"+
                    "<a href=\"images/katalog/warzywa/szczypiorek.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Szczypiorek\"><img src=\"images/katalog/warzywa/szczypiorek.jpg\" alt=\"Szczypiorek\" title=\"Szczypiorek\"></a>"+
                    "<a href=\"images/katalog/warzywa/ziemniak.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Ziemniak\"><img src=\"images/katalog/warzywa/ziemniak.jpg\" alt=\"Ziemniak\" title=\"Ziemniak\"></a>";
    
    document.getElementById("artykul").append(div);
}

/* to samo co wyżej tylko dla innych zdjęć */
function katalog_chwasty(){
    document.getElementById("strona_główna").innerHTML = " ";
    document.getElementById("more").innerHTML = " ";
    document.getElementById("artykul").innerHTML = "<h2>Chwasty</h2>";
    
    const div = document.createElement("div");
    div.id = "zdjecia";
    div.innerHTML = "<a href=\"images/katalog/chwasty/jaskółcze-ziele.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Jaskółcze ziele\"><img src=\"images/katalog/chwasty/jaskółcze-ziele.jpg\" alt=\"Jaskółcze ziele\" title=\"Jaskółcze ziele\"></a>"+
                    "<a href=\"images/katalog/chwasty/koniczyna.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Koniczyna\"><img src=\"images/katalog/chwasty/koniczyna.jpg\" alt=\"Koniczyna\" title=\"Koniczyna\"></a>"+
                    "<a href=\"images/katalog/chwasty/lebioda.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Lebioda\"><img src=\"images/katalog/chwasty/lebioda.jpg\" alt=\"Lebioda\" title=\"Lebioda\"></a>"+
                    "<a href=\"images/katalog/chwasty/mlecz.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Mlecz\"><img src=\"images/katalog/chwasty/mlecz.jpg\" alt=\"Mlecz\" title=\"Mlecz\"></a>"+
                    "<a href=\"images/katalog/chwasty/oset.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Oset\"><img src=\"images/katalog/chwasty/oset.jpg\" alt=\"Oset\" title=\"Oset\"></a>"+
                    "<a href=\"images/katalog/chwasty/pokrzywa.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Pokrzywa\"><img src=\"images/katalog/chwasty/pokrzywa.jpg\" alt=\"Pokrzywa\" title=\"Pokrzywa\"></a>"+
                    "<a href=\"images/katalog/chwasty/pokrzywa2.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Pokrzywa\"><img src=\"images/katalog/chwasty/pokrzywa2.jpg\" alt=\"Pokrzywa\" title=\"Pokrzywa\"></a>"+
                    "<a href=\"images/katalog/chwasty/stokrotka-biała.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Stokrotka biała\"><img src=\"images/katalog/chwasty/stokrotka-biała.jpg\" alt=\"Stokrotka biała\" title=\"Stokrotka biała\"></a>"+
                    "<a href=\"images/katalog/chwasty/stokrotka-różowa.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Stokrotka różowa\"><img src=\"images/katalog/chwasty/stokrotka-różowa.jpg\" alt=\"Stokrotka różowa\" title=\"Stokrotka różowa\"></a>"+
                    "<a href=\"images/katalog/chwasty/stokrotki.jpg\" target=\"_blank\" data-lightbox=\"galeria\" data-title=\"Stokrotki\"><img src=\"images/katalog/chwasty/stokrotki.jpg\" alt=\"Stokrotki\" title=\"Stokrotki\"></a>";
    
    document.getElementById("artykul").append(div);
}