window.TETELEK.push({
    num: 16,
    id: "tetel-16",
    title: "16. Tétel: A somatomotoros beidegzés: a mozgató pályák demonstrálása a rágóizmok és a nyelvcsont alatti izmok beidegzésén keresztül szemléltetve. A masseter reflex ívének alkotói.",
    shortName: "Somatomotoros beidegzés & Masseter-reflex",
    summaryHtml: `
        <ul>
            <li><strong>1. Motoros rendszerek hierarchiája &amp; Pyramispálya:</strong> Kéreg (gyrus precentralis [Br 4], praemotoros [Br 6], supplementer) &rarr; felső motoneuron (<em>tractus corticospinalis, corticobulbaris, corticomesencephalicus</em>) &rarr; <em>capsula interna</em> (<em>crus posterius</em>) &rarr; <em>decussatio pyramidum</em> (98% kereszteződik &rarr; <em>tr. corticospinalis cruciatus</em>; 2% egyenes &rarr; <em>tr. corticospinalis directus</em>, végződésnél kereszteződik) &rarr; gerincvelői interneuronok (kivéve ujjak: direkt) &rarr; &alpha;- és &gamma;-motoneuronok (végső közös út).</li>
            <li><strong>2. Extrapyramidalis rendszer, Kisagy &amp; Törzsdúcok:</strong> <em>Tractus reticulospinalis</em> (gátló), <em>vestibulospinalis</em> (extensor serkentő, egyensúly), <em>fasciculus longitudinalis medialis</em> (szem- és nyakizmok összehangolása) &rarr; <em>Cerebellum</em> (összehasonlítja a kiadott parancsot a proprioceptív visszajelzéssel &rarr; mozgáskorrekció) &rarr; <em>Törzsdúcok</em> (direkt út serkenti, indirekt út gátolja a <em>thalamus VA/VL</em>-t; <em>substantia nigra</em> dopaminerg hatása a direkt utat D<sub>1</sub>-en serkenti, az indirektet D<sub>2</sub>-n gátolja &rarr; hiánya: Parkinson-kór).</li>
            <li><strong>3. Rágóizmok &amp; Nyelvcsont alatti izmok mozgató pályái:</strong> Nyelvcsont alatti izmok: <em>cortex</em> &rarr; <em>tr. corticospinalis</em> &rarr; C<sub>1</sub>–C<sub>4</sub> motoneuronok &rarr; <em>plexus cervicalis</em> &rarr; <em>ansa cervicalis</em> &rarr; izmok. Rágóizmok: <em>cortex</em> (Br 4) &rarr; <em>tr. corticobulbaris / frontopontinus</em> (<em>capsula interna</em>) &rarr; <em>nucl. motorius n. trigemini</em> (híd) &rarr; <em>n. mandibularis (V/3) truncus anterior</em> &rarr; 4 rágóizom.</li>
            <li><strong>4. Gerincvelő somatomotoros működése &amp; Proprioceptív reflexív:</strong> Motoneuron-szomatotópia (flexorok dorsalis, extensorok ventralis; törzs medialis, végtagok lateralis) &rarr; izomorsó (Ia-rost: gyors/dinamikus, II-rost: lassú/statikus) + Golgi-ínorsó (Ib) &rarr; monoszinaptikus nyújtási reflex (<em>&alpha;-MN</em> serkentése) + reciprok gátlás (antagonista flexor gátlása) + <em>&gamma;-hurok</em> (izomorsó érzékenységének beállítása).</li>
            <li><strong>5. Masseter-reflex (rágóizmok proprioceptív reflexíve):</strong> Rágóizmok izomorsói (anulospirális idegvégződés) &rarr; <em>n. mandibularis (V/3)</em> &rarr; <strong>kivétel:</strong> az elsődleges érző pseudounipolaris neuronok nem a <em>ggl. trigeminale</em>-ban, hanem a középagyi <em>nucleus mesencephalicus n. trigemini</em>-ben ülnek &rarr; <em>tractus mesencephalicus n. V</em> lefelé haladva T/Y alakban elágazik &rarr; egyik szár szinaptizál a hídban lévő <em>nucleus motorius n. trigemini</em>-n &rarr; <em>radix motoria n. V</em> &rarr; rágóizmok összehúzódása (kétneuronon monoszinaptikus reflexív).</li>
        </ul>
`,
    html: `
        <h3>1. A motoros rendszerek hierarchikus felépítése és a pyramispálya</h3>
        <p>A vázizomzat (<strong>harántcsíkolt izomzat</strong>) működését egy szigorúan <strong>hierarchikus motoros rendszer</strong> irányítja. A hierarchia legalsó fokán a gerincvelő elülső szarvában (<em>cornu anterius</em>) és az agytörzs motoros agyidegmagvaiban elhelyezkedő alsó motoneuronok állnak: ezek képezik Sherrington klasszikus fogalmával a <strong>„végső közös utat” (final common pathway)</strong>, mivel minden központi idegrendszeri motoros parancsnak rajtuk keresztül kell eljutnia a perifériás izomrostokhoz.</p>
        <ul>
            <li><strong>Felső motoneuronok (upper motor neurons):</strong> A központi idegrendszeren (agykéreg és agytörzs) belül futó leszálló pályarendszerek neuronjai, amelyek az agytörzsi és gerincvelői mozgató idegsejteket befolyásolják (serkentik vagy gátolják).</li>
            <li><strong>Alsó motoneuronok (lower motor neurons):</strong> A gerincvelő elülső szarvában és a motoros agyidegmagvakban található <strong>&alpha;-motoneuronok</strong> (a munkaizomrostokat, vagyis az extrafusalis rostokat idegzik be) és <strong>&gamma;-motoneuronok</strong> (az izomorsó intrafusalis rostjait idegzik be).</li>
            <li><strong>A mozgásszabályozás fő résztvevői:</strong> <strong>Cortex cerebri</strong> (agykéreg), <strong>striatum</strong> és <strong>pallidum</strong> (törzsdúcok), <strong>nucleus subthalamicus</strong>, <strong>nucleus ruber</strong>, <strong>substantia nigra</strong>, <strong>formatio reticularis</strong>, <strong>nuclei vestibulares</strong>, <strong>oliva inferior</strong> és a <strong>cerebellum</strong> (kisagy).</li>
        </ul>

        <h4>A pyramispálya (tractus pyramidalis) eredete és kérgi szomatotópiája</h4>
        <p>A <strong>pyramispálya</strong> az akaratlagos, finom, célzott mozgások szabályozásáért felelős közvetlen leszálló pályarendszer (elnevezését a nyúltvelő elülső felszínén látható piramis alakú kiemelkedésről, a <em>pyramis medullae oblongatae</em>-ról kapta, amelyen rostjai áthaladnak). Rostjai több kérgi mezőből erednek:</p>
        <ul>
            <li><strong>Gyrus precentralis (primer motoros kéreg, Brodmann 4):</strong> A mozgástervezés <strong>végső integrációs központja</strong>; itt találhatók az óriás Betz-féle piramissejtek is.</li>
            <li><strong>Supplementer motoros area (SMA – a gyrus precentralis előtt, medialisan):</strong> Az <strong>összetett, szekvenciális mozgások megtervezéséért</strong> felelős.</li>
            <li><strong>Praemotoros cortex (Brodmann 6):</strong> A mozgási reakciók előkészítése, a mozgás kezdeti fázisa, valamint a <strong>távolabbi (proximalis), illetve a törzsizmok koordinálása</strong> tartozik hozzá.</li>
            <li><strong>Primer szenzoros area (gyrus postcentralis, Brodmann 3, 1, 2):</strong> Szenzoros visszacsatolással segíti a mozgás pontosságát (a pyramispálya rostjainak jelentős része innen is ered!).</li>
        </ul>
        <p>A pyramispálya közvetlenül vezet az agytörzs és a gerincvelő motoneuronjaihoz (<strong>tractus corticospinalis</strong>, <strong>tractus corticobulbaris</strong>, <strong>tractus corticomesencephalicus</strong>). Ezzel párhuzamosan két fontos közvetett leszálló pálya halad a <em>nucleus ruber</em>-hez és a <em>formatio reticularis</em>-hoz: a <strong>tractus rubrospinalis</strong> és a <strong>tractus reticulospinalis</strong>.</p>
        <p>A primer mozgatókérgen szigorú <strong>szomatotópiás lokalizáció</strong> (motoros homunculus) érvényesül: minden testtájék meghatározott területen reprezentálódik, de a kérgi terület nagysága <strong>nem arányos a testtájék anatómiai méretével</strong>, hanem a mozgások finomságától és a motoros egységek sűrűségétől függ:</p>
        <ul>
            <li><strong>Alsó végtagok:</strong> A középvonalhoz közel, a <em>lobulus paracentralis</em> területén (a fissura longitudinalis cerebri medialis felszínén).</li>
            <li><strong>Törzs:</strong> A középvonaltól lateralisan, a hemisphaerium felső-domború felszínén.</li>
            <li><strong>Felső végtagok:</strong> Még lateralisabban (itt <strong>aránytalanul nagy kérgi területet</strong> foglal el az <strong>öregujj, hüvelykujj, mutatóujj</strong>).</li>
            <li><strong>Fej és arc:</strong> Leglateralisabban, a <em>sulcus lateralis (Sylvii)</em> felett; itt szintén hatalmas terület jut az <strong>ajak</strong> és a <strong>nyelv</strong> finom artikulációs és rágómozgásainak.</li>
        </ul>

        <h4>A pyramispálya lefutása és átkapcsolódása</h4>
        <p>A rostok a kéregből legyezőszerűen összetartva a <strong>corona radiata</strong>-n keresztül haladnak lefelé, miközben pontosan <strong>megtartják a szomatotópiás rendet</strong>, majd belépnek a <strong>capsula interna hátsó szárába (crus posterius capsulae internae)</strong> (a fejhez/agyidegekhez futó <em>tr. corticobulbaris</em> rostok a térdben, a <em>genu capsulae internae</em>-ben haladnak!). Innen az út az alábbi állomásokon át vezet:</p>
        <ul>
            <li><strong>Mesencephalon (középagy):</strong> A <strong>pedunculus cerebri (crus cerebri) középső háromötödében</strong> haladnak.</li>
            <li><strong>Pons (híd):</strong> Itt a pálya a <strong>nuclei pontis</strong> sejtcsoportjai között kis kötegekre fellazulva halad át.</li>
            <li><strong>Medulla oblongata (nyúltvelő):</strong> Újra tömör köteggé rendeződik a <strong>pyramis</strong>-ban.</li>
            <li><strong>Decussatio pyramidum (piramiskereszteződés):</strong> A nyúltvelő és a gerincvelő határán a rostok <strong>kb. 98%-a (klasszikusan 85–90%-a) kereszteződik</strong> az ellenoldalra, és a gerincvelő oldalsó kötegében mint <strong>tractus corticospinalis cruciatus (lateralis)</strong> száll le. A <strong>keresztezetlen rész (kb. 2%)</strong> az elülső kötegben mint <strong>tractus corticospinalis directus (anterior)</strong> halad lefelé, majd közvetlenül a <strong>végződési szelvény szintjén kereszteződik</strong> az ellenoldalra (a <em>commissura alba anterior</em>-on keresztül) a törzsizmok bilaterális stabilizálása érdekében.</li>
            <li><strong>Végződés:</strong> A rostok túlnyomó többsége a <strong>gerincvelő interneuronjain</strong> végződik (innen jut el az információ az &alpha;- és &gamma;-motoneuronokhoz). <strong>Fontos kivétel:</strong> azon rostok, amelyek az <strong>ujjak finom mozgatásában részt vevő izmok motoneuronjait</strong> látják el, közvetlen (monoszinaptikus) kapcsolatot létesítenek az &alpha;-motoneuronokkal!</li>
        </ul>

        <h4>Agytörzsi motoros magvak beidegzése (Tractus corticomesencephalicus et corticobulbaris)</h4>
        <p>A középagytól kezdve a pyramispályáról leváló rostok (részben a <em>formatio reticularis</em>-on keresztül) érik el a somatomotoros agyidegmagvakat (<strong>n. III, IV, V, VI, VII, IX, X, XI, XII</strong>). Alapszabály, hogy <strong>ezen magvak kétoldali (bilaterális) kérgi rostokat kapnak</strong> (így egyoldali kérgi/capsula interna vérzésnél például a rágóizmok, a garatizmok vagy a szemizmok nem bénulnak le!), <strong>két kritikus kivétellel</strong>:</p>
        <ul>
            <li><strong>1. Nervus facialis (VII.) – a száj körüli izmokat beidegző alsó motoneuron-csoport:</strong> Csak az ellenoldali kéregből kap rostokat (míg a homlok- és szemkörüli izmok magrésze kétoldali beidegzésű). Következmény: jobb oldali <em>capsula interna</em> vérzés esetén a <strong>homlok- és szemizmok épek maradnak</strong>, de az <strong>ellenoldali (bal) szájzug lebénul</strong> (centrális facialis paresis).</li>
            <li><strong>2. Nervus hypoglossus (XII.) – a musculus genioglossus-t beidegző neuronok:</strong> Szintén túlnyomórészt ellenoldali kérgi irányítás alatt állnak (centrális léziónál a kinyújtott nyelv az ép <em>m. genioglossus</em> túlsúlya miatt a <strong>bénult oldal felé deviál</strong>).</li>
        </ul>

        <div class="mnemonic-box">
            <strong>💡 Klinikai &amp; Fogorvosi aranyszabály – Centrális vs. Perifériás facialis bénulás:</strong> Ha a beteg a fogászati székben az egyik oldalon nem tudja sem ráncolni a homlokát, sem becsukni a szemét, sem elhúzni a szájzugát, akkor a <strong>perifériás ideg (n. VII) vagy a magja</strong> sérült (pl. Bell-paresis, parotis műtét vagy rosszul beadott <em>n. alveolaris inferior</em> vezetéses érzéstelenítés, amikor az érzéstelenítő a <em>glandula parotis</em> tokjába jut!). Ha azonban a homlokráncolás és a szemzárás ép, és csak az ellenoldali szájzug lóg, a lézió <strong>centrális</strong> (pl. <em>capsula interna</em> stroke).
        </div>

        <div style="display:flex; flex-wrap:wrap; gap:0.5rem; margin:0.9rem 0 1.3rem 0;">
            <a href="https://www.google.com/search?tbm=isch&q=corticospinal+tract+decussation+of+pyramids+diagram" target="_blank" rel="noopener noreferrer" style="display:inline-flex; align-items:center; gap:0.35rem; background:var(--card-bg); border:1.5px solid var(--primary-light); color:var(--primary); padding:0.35rem 0.75rem; border-radius:20px; font-size:0.82rem; font-weight:700; text-decoration:none;">
                🔍 Atlasz: Tractus corticospinalis lefutása diagram
            </a>
            <a href="https://www.google.com/search?tbm=isch&q=motor+homunculus+gyrus+precentralis+somatotopy+diagram" target="_blank" rel="noopener noreferrer" style="display:inline-flex; align-items:center; gap:0.35rem; background:var(--card-bg); border:1.5px solid var(--primary-light); color:var(--primary); padding:0.35rem 0.75rem; border-radius:20px; font-size:0.82rem; font-weight:700; text-decoration:none;">
                🔍 Atlasz: Motoros homunculus (Br 4) diagram
            </a>
            <a href="https://www.google.com/search?tbm=isch&q=central+vs+peripheral+facial+nerve+palsy+corticobulbar+diagram" target="_blank" rel="noopener noreferrer" style="display:inline-flex; align-items:center; gap:0.35rem; background:var(--card-bg); border:1.5px solid var(--primary-light); color:var(--primary); padding:0.35rem 0.75rem; border-radius:20px; font-size:0.82rem; font-weight:700; text-decoration:none;">
                🔍 Atlasz: Centrális vs. perifériás n. facialis bénulás diagram
            </a>
        </div>

        <h3>2. Extrapyramidalis rendszer, Kisagy (Cerebellum) és Törzsdúcok</h3>
        <p>Az <strong>extrapyramidalis rendszer</strong> (szó szerint: a piramispályán kívüli leszálló mozgató rendszerek összessége) az <strong>automatizált mozgások biztosításáért</strong>, az <strong>izomtónus eloszlásának</strong> szabályozásáért, az <strong>antagonista izomcsoportok egyensúlyáért</strong>, az izmok ízületekre történő rögzítéséért, valamint az érzelmeket kísérő mimikai/gesztikulációs mozgásokért felelős. A központi idegrendszer különböző területein elhelyezkedő több központból származó kimenetek érik el a motoneuronokat, és szerepe különösen jelentősebb az agykérgi aktiválódás területén.</p>
        <ul>
            <li><strong>Tractus reticulospinalis:</strong> A <em>supplementer motoros mezőből</em> induló <em>tr. corticoreticularis</em> átkapcsol a <strong>híd–nyúltvelői formatio reticularis</strong>-ban &rarr; innen a <em>tr. reticulospinalis</em> a gerincvelő <strong>&alpha;- és &gamma;-motoneuronjait GÁTOLJA</strong> (ezért felső motoneuron / <em>capsula interna</em> lézió esetén kiesik a kérgi aktiválás a gátló reticulospinalis rendszer felett &rarr; kialakul a spasztikus tónusfokozódás!).</li>
            <li><strong>Tractus vestibulospinalis:</strong> A <strong>nucleus vestibularis lateralis (Deiters-mag – belső fülből kap információt)</strong> sejtjeiből indul &rarr; a gerincvelő <em>funiculus anterior</em>-ában haladva az <strong>extensor (feszítő, antigravitációs) motoneuronokat aktiválja</strong> &rarr; a vestibularis beállító és testtartási reakciók összekötője.</li>
            <li><strong>Fasciculus longitudinalis medialis (FLM – agytörzsi leszálló és összekötő pálya):</strong> A <strong>nucleus vestibularis medialis (belső fül)</strong> és a középagyi <strong>nucleus interstitialis Cajal</strong> rostjait vezeti a <strong>nyakizmokat</strong> és a <strong>külső szemizmokat</strong> ellátó motoneuronokhoz &rarr; biztosítja a fejmozgások és a szemmozgások villámgyors összehangolását (vestibulo-ocularis reflex).</li>
        </ul>

        <h4>A kisagy (Cerebellum) mozgáskoordinációs szerepe</h4>
        <p>A <strong>cerebellum</strong> (etimológia: <em>cerebrum</em> kicsinyítő képzős alakja = „kisagy”) fő feladata a <strong>mozgáskoordináció</strong> – különösen a gyors, ballisztikus mozgások korrekciója –, az <strong>egyensúly megtartása</strong>, a <strong>motoros tanulás</strong> és egyes kognitív funkciók támogatása. Fontos élettani sajátosság, hogy a kisagy elektromos ingerlése <strong>nem vált ki tudatosuló érzéseket és nem követi figyelemre méltó motoros aktivitás</strong>, illetve a mozgások tényleges kivitelezésében közvetlen módon nem vesz részt.</p>
        <ul>
            <li><strong>Afferentáció (bemenetek):</strong> Az ellenoldali <em>cortex cerebri</em>-ből (<strong>tractus corticopontinus &rarr; nuclei pontis &rarr; tractus pontocerebellaris</strong>); azonos és ellenoldali proprioceptív rostok az izmok, inak és ízületek receptoraiból (<strong>tractus spinocerebellaris anterior, posterior, cuneocerebellaris, spinocerebellaris rostralis</strong>); valamint a vestibularis rendszerből (<strong>tractus vestibulocerebellaris</strong>). Emellett látó és halló ingerek is eljutnak hozzá.</li>
            <li><strong>Efferentáció (kimenetek):</strong> A kisagykéregből a mély kisagyi magvakon át (és a <em>tr. cerebellovestibularis</em> útján) az ellenoldali <strong>thalamus (VL)</strong>-hoz, a <strong>nucleus ruber</strong>-hez, mindkét oldali <strong>formatio reticularis</strong>-hoz és az azonos oldali <strong>vestibularis magvakhoz</strong> futnak.</li>
            <li><strong>A koordináció 3 alaplépése:</strong> (1) Értesül a kéregből <strong>kiadott mozgási parancsról</strong> (efferens kópia) &rarr; (2) összeveti a perifériáról (izmok, ízületek, egyensúlyszerv) <strong>végrehajtásról érkezett visszajelzéssel</strong> &rarr; (3) eltérés esetén a pyramispálya (<em>cerebellothalamocorticalis</em> út) és az extrapyramidalis pályák befolyásolásával elindítja, illetve <strong>módosítja / korrigálja a folyamatban lévő mozgást</strong>. (Sérülésekor ataxia, intenciós tremor, dysdiadochokinesis lép fel.)</li>
        </ul>

        <h4>Törzsdúcok (Basal ganglia) és a mozgásszabályozó körök</h4>
        <p>A <strong>törzsdúcok</strong> (<strong>striatum</strong> = <em>nucleus caudatus + putamen</em>; <strong>globus pallidus</strong> = <em>pallidum externum + internum</em>; funkcionálisan szorosan kapcsolódó: <strong>nucleus subthalamicus</strong> és <strong>substantia nigra</strong>) szerepe a <strong>mozgások tervezése és indítása, valamint a begyakorolt mozgási programok tárolása</strong>.</p>
        <p>A szabályozás kulcsa a <strong>thalamus (VA, VL magvak)</strong> aktivitásának finomhangolása, mivel a <em>thalamus VA/VL</em> serkentő (<strong>glutamáterg, Glu</strong>) hatást fejt ki a <em>praemotoros és supplementer motoros kéregre</em>, ezzel indítva el a mozgást. Ezt két ellentétes hatású kör szabályozza:</p>
        <ul>
            <li><strong>Direkt útvonal (mozgásindító / serkentő):</strong> Cortex (Glu, +) &rarr; <strong>Striatum</strong> (GABA, –) &rarr; <strong>Pallidum internum</strong> (gátlás alá kerül!) &rarr; megszűnik a pallidum internum tónusos GABA-erg gátlása a <strong>Thalamus VA/VL</strong> felett („gátlás gátlása” = felszabadítás) &rarr; a <em>Thalamus VA/VL</em> aktiválja a motoros kérget &rarr; <strong>MOZGÁS INDUL</strong>.</li>
            <li><strong>Indirekt útvonal (mozgásfékező / gátló):</strong> Cortex (Glu, +) &rarr; <strong>Striatum</strong> (GABA, –) &rarr; <strong>Pallidum externum</strong> (gátlódik) &rarr; felszabadul a <strong>Nucleus subthalamicus</strong> (Glu, +) &rarr; erősen serkenti a <strong>Pallidum internum</strong>-ot (GABA, –) &rarr; a pallidum internum fokozottan gátolja a <strong>Thalamus VA/VL</strong>-t (az <em>ansa lenticularis</em>-on át) &rarr; <strong>MOZGÁS GÁTLÓDIK</strong>.</li>
            <li><strong>A Substantia nigra (pars compacta) dopaminerg kettős kapcsolója:</strong> A <em>substantia nigra</em> dopaminerg rostjai a direkt utat (<strong>D<sub>1</sub>-receptorokon</strong> keresztül) <strong>serkentik</strong>, míg az indirekt utat (<strong>D<sub>2</sub>-receptorokon</strong> keresztül) <strong>gátolják</strong>. Így a dopamin összességében <strong>elősegíti a mozgásindítást</strong>!</li>
            <li><strong>Klinikai összefüggés – Parkinson-kór:</strong> A <em>substantia nigra</em> dopaminerg neuronjainak pusztulásakor elmarad a direkt út serkentése és az indirekt út gátlása &rarr; az indirekt út túlsúlyba kerül, a <em>thalamus VA/VL</em> tartós gátlás alá esik &rarr; <strong>hypokinesis / akinesis</strong> (mozgásindítási nehézség), <strong>rigor</strong> (ólomcső-/fogaskerék-tünet) és nyugalmi tremor alakul ki.</li>
        </ul>

        <!-- 1. INTERAKTÍV SVG ÁBRA: TÖRZS-DÚC KÖRÖK (DIREKT ÉS INDIREKT ÚTVONAL) -->
        <div class="visual-aid-box" style="background:var(--bg); border:1.5px solid var(--border); border-radius:10px; padding:1.2rem; margin:1.3rem 0;">
            <div style="font-weight:800; font-size:0.95rem; color:var(--primary); margin-bottom:0.7rem;">
                🗺️ Interaktív kapcsolási séma: A törzsdúcok direkt és indirekt mozgásszabályozó körei
            </div>
            <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:0.5rem; background:var(--card-bg); border:1px solid var(--border); border-radius:8px; padding:0.6rem 0.9rem; margin-bottom:0.8rem; font-size:0.82rem; font-weight:700; color:var(--text);">
                <span>⬆️ <strong>FELÜL: Cortex cerebri (Motoros kéreg)</strong></span>
                <span>⬇️ <strong>ALUL: Thalamus (VA, VL) &amp; Substantia nigra</strong></span>
                <span>🟢 <strong>Zöld = Serkentő (Glu / D1)</strong> &harr; 🔴 <strong>Piros = Gátló (GABA / D2)</strong></span>
            </div>
            <div style="text-align:center; overflow-x:auto;">
                <svg viewBox="0 0 760 400" style="max-width:100%; height:auto; font-family:system-ui, sans-serif;">
                    <defs>
                        <marker id="arrow-green" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                            <path d="M 0 1 L 10 5 L 0 9 z" fill="#16a34a"/>
                        </marker>
                        <marker id="arrow-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                            <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626"/>
                        </marker>
                        <marker id="arrow-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                            <path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb"/>
                        </marker>
                    </defs>

                    <!-- Cortex -->
                    <g style="cursor:pointer;" onmouseenter="document.getElementById('readout-t16-1').innerHTML='🧠 <strong>Motoros Cortex (Br 4, 6, SMA):</strong> Glutamáterg (+) serkentő jelet küld a Striatumba a mozgás tervezésekor, majd fogadja a Thalamus VA/VL visszacsatolását.'" onclick="document.getElementById('readout-t16-1').innerHTML='🧠 <strong>Motoros Cortex (Br 4, 6, SMA):</strong> Glutamáterg (+) serkentő jelet küld a Striatumba a mozgás tervezésekor, majd fogadja a Thalamus VA/VL visszacsatolását.'">
                        <rect x="240" y="15" width="280" height="46" rx="10" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
                        <text x="380" y="36" text-anchor="middle" font-size="13" font-weight="800" fill="#1e3a8a">MOTOROS KÉREG (Br 4, 6, SMA)</text>
                        <text x="380" y="52" text-anchor="middle" font-size="11" fill="#1e40af">Mozgás tervezése &amp; kivitelezése</text>
                    </g>

                    <!-- Striatum -->
                    <g style="cursor:pointer;" onmouseenter="document.getElementById('readout-t16-1').innerHTML='🎯 <strong>Striatum (Nucl. caudatus + Putamen):</strong> A törzsdúcok fő bemeneti állomása. GABA-erg (-) gátló rostokat küld mind a Pallidum internum (direkt út), mind a Pallidum externum (indirekt út) felé.'" onclick="document.getElementById('readout-t16-1').innerHTML='🎯 <strong>Striatum (Nucl. caudatus + Putamen):</strong> A törzsdúcok fő bemeneti állomása. GABA-erg (-) gátló rostokat küld mind a Pallidum internum (direkt út), mind a Pallidum externum (indirekt út) felé.'">
                        <rect x="275" y="105" width="210" height="46" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
                        <text x="380" y="126" text-anchor="middle" font-size="13" font-weight="800" fill="#92400e">STRIATUM (Caudatus + Putamen)</text>
                        <text x="380" y="142" text-anchor="middle" font-size="11" fill="#b45309">Fő bemeneti mag (GABA-erg kimenet)</text>
                    </g>

                    <!-- Substantia nigra -->
                    <g style="cursor:pointer;" onmouseenter="document.getElementById('readout-t16-1').innerHTML='⚫ <strong>Substantia nigra (pars compacta):</strong> Dopaminerg rostokkal a direkt utat D1-receptoron serkenti (+), az indirekt utat D2-receptoron gátolja (-). Pusztulása: Parkinson-kór!'" onclick="document.getElementById('readout-t16-1').innerHTML='⚫ <strong>Substantia nigra (pars compacta):</strong> Dopaminerg rostokkal a direkt utat D1-receptoron serkenti (+), az indirekt utat D2-receptoron gátolja (-). Pusztulása: Parkinson-kór!'">
                        <rect x="20" y="175" width="185" height="54" rx="10" fill="#f3e8ff" stroke="#7e22ce" stroke-width="2"/>
                        <text x="112" y="198" text-anchor="middle" font-size="12.5" font-weight="800" fill="#581c87">SUBSTANTIA NIGRA</text>
                        <text x="112" y="215" text-anchor="middle" font-size="10.5" fill="#6b21a8">Dopamin: D1 (+) | D2 (-)</text>
                    </g>

                    <!-- Pallidum internum (Direkt út) -->
                    <g style="cursor:pointer;" onmouseenter="document.getElementById('readout-t16-1').innerHTML='🟢 <strong>Pallidum internum (Direkt út):</strong> Nyugalomban tónusosan gátolja (GABA) a Thalamus VA/VL-t. Ha a Striatum gátolja a Pallidum internumot, a Thalamus felszabadul &rarr; MOZGÁS INDUL!'" onclick="document.getElementById('readout-t16-1').innerHTML='🟢 <strong>Pallidum internum (Direkt út):</strong> Nyugalomban tónusosan gátolja (GABA) a Thalamus VA/VL-t. Ha a Striatum gátolja a Pallidum internumot, a Thalamus felszabadul &rarr; MOZGÁS INDUL!'">
                        <rect x="235" y="215" width="180" height="48" rx="10" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
                        <text x="325" y="236" text-anchor="middle" font-size="12" font-weight="800" fill="#14532d">PALLIDUM INTERNUM</text>
                        <text x="325" y="252" text-anchor="middle" font-size="10.5" fill="#166534">Direkt út (GABA &rarr; Thalamus)</text>
                    </g>

                    <!-- Pallidum externum (Indirekt út) -->
                    <g style="cursor:pointer;" onmouseenter="document.getElementById('readout-t16-1').innerHTML='🔴 <strong>Pallidum externum (Indirekt út):</strong> GABA-erg gátlást fejt ki a Nucleus subthalamicusra. Ha a Striatum gátolja, a Nucl. subthalamicus felszabadul és fékezi a mozgást!'" onclick="document.getElementById('readout-t16-1').innerHTML='🔴 <strong>Pallidum externum (Indirekt út):</strong> GABA-erg gátlást fejt ki a Nucleus subthalamicusra. Ha a Striatum gátolja, a Nucl. subthalamicus felszabadul és fékezi a mozgást!'">
                        <rect x="520" y="165" width="210" height="46" rx="10" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
                        <text x="625" y="186" text-anchor="middle" font-size="12" font-weight="800" fill="#7f1d1d">PALLIDUM EXTERNUM</text>
                        <text x="625" y="201" text-anchor="middle" font-size="10.5" fill="#991b1b">Indirekt út (GABA &rarr; Subthalamicus)</text>
                    </g>

                    <!-- Nucleus subthalamicus -->
                    <g style="cursor:pointer;" onmouseenter="document.getElementById('readout-t16-1').innerHTML='⚡ <strong>Nucleus subthalamicus:</strong> Az egyetlen glutamáterg (+) serkentő mag a törzsdúc-körön belül! Serkenti a Pallidum internumot, ami ezáltal erősebben gátolja a Thalamust (mozgásfékezés).'" onclick="document.getElementById('readout-t16-1').innerHTML='⚡ <strong>Nucleus subthalamicus:</strong> Az egyetlen glutamáterg (+) serkentő mag a törzsdúc-körön belül! Serkenti a Pallidum internumot, ami ezáltal erősebben gátolja a Thalamust (mozgásfékezés).'">
                        <rect x="520" y="255" width="210" height="48" rx="10" fill="#ffedd5" stroke="#ea580c" stroke-width="2"/>
                        <text x="625" y="276" text-anchor="middle" font-size="12" font-weight="800" fill="#7c2d12">NUCL. SUBTHALAMICUS</text>
                        <text x="625" y="292" text-anchor="middle" font-size="10.5" fill="#9a3412">Glutamáterg (+) serkentő mag</text>
                    </g>

                    <!-- Thalamus VA/VL -->
                    <g style="cursor:pointer;" onmouseenter="document.getElementById('readout-t16-1').innerHTML='🚦 <strong>Thalamus (VA, VL magvak):</strong> A mozgásindítás kapuja! Az ansa lenticularis-on át kapja a Pallidum internum jelét, és glutamáterg (+) rostokkal aktiválja a kérget.'" onclick="document.getElementById('readout-t16-1').innerHTML='🚦 <strong>Thalamus (VA, VL magvak):</strong> A mozgásindítás kapuja! Az ansa lenticularis-on át kapja a Pallidum internum jelét, és glutamáterg (+) rostokkal aktiválja a kérget.'">
                        <rect x="240" y="325" width="220" height="50" rx="10" fill="#e0f2fe" stroke="#0284c7" stroke-width="2.5"/>
                        <text x="350" y="347" text-anchor="middle" font-size="13" font-weight="800" fill="#0c4a6e">THALAMUS (VA, VL)</text>
                        <text x="350" y="363" text-anchor="middle" font-size="11" fill="#0369a1">Ansa lenticularis &rarr; Kéreg (+)</text>
                    </g>

                    <!-- Nyilak -->
                    <!-- Cortex -> Striatum (Glu +) -->
                    <line x1="380" y1="61" x2="380" y2="100" stroke="#16a34a" stroke-width="2.5" marker-end="url(#arrow-green)"/>
                    <text x="415" y="85" font-size="11" font-weight="700" fill="#16a34a">Glu (+)</text>

                    <!-- Striatum -> Pallidum int (GABA -) -->
                    <line x1="345" y1="151" x2="330" y2="210" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arrow-red)"/>
                    <text x="292" y="182" font-size="10.5" font-weight="700" fill="#dc2626">GABA (-)</text>

                    <!-- Striatum -> Pallidum ext (GABA -) -->
                    <line x1="460" y1="151" x2="520" y2="175" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arrow-red)"/>
                    <text x="505" y="156" font-size="10.5" font-weight="700" fill="#dc2626">GABA (-)</text>

                    <!-- Pallidum ext -> Subthalamicus (GABA -) -->
                    <line x1="625" y1="211" x2="625" y2="250" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arrow-red)"/>
                    <text x="662" y="235" font-size="10.5" font-weight="700" fill="#dc2626">GABA (-)</text>

                    <!-- Subthalamicus -> Pallidum int (Glu +) -->
                    <line x1="520" y1="275" x2="420" y2="248" stroke="#16a34a" stroke-width="2.5" marker-end="url(#arrow-green)"/>
                    <text x="470" y="276" font-size="10.5" font-weight="700" fill="#16a34a">Glu (+)</text>

                    <!-- Pallidum int -> Thalamus (GABA -) -->
                    <line x1="335" y1="263" x2="345" y2="320" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arrow-red)"/>
                    <text x="285" y="298" font-size="10.5" font-weight="700" fill="#dc2626">GABA (-)</text>

                    <!-- Thalamus -> Cortex (Glu +) -->
                    <path d="M 240 350 L 215 350 L 215 38 L 235 38" fill="none" stroke="#16a34a" stroke-width="2.5" marker-end="url(#arrow-green)"/>
                    <text x="165" y="345" font-size="11" font-weight="700" fill="#16a34a">Glu (+)</text>

                    <!-- Substantia nigra -> Striatum (D1+, D2-) -->
                    <path d="M 112 175 L 112 128 L 270 128" fill="none" stroke="#7e22ce" stroke-width="2.2" stroke-dasharray="4,3" marker-end="url(#arrow-blue)"/>
                    <text x="185" y="120" font-size="10.5" font-weight="700" fill="#7e22ce">Dopamin (D1+ / D2-)</text>
                </svg>
            </div>
            <div id="readout-t16-1" style="margin-top:0.75rem; padding:0.65rem 0.95rem; background:var(--card-bg); border:1.5px solid var(--accent); border-radius:8px; font-size:0.9rem; color:var(--text);">
                💡 <strong>Kikérdező tipp:</strong> Vidd az egeret (vagy koppints) a törzsdúc-kör egyes magvaira, és azonnal megjelenik a neurotranszmitter és a funkció!
            </div>
            <div style="display:flex; flex-wrap:wrap; gap:0.5rem; margin-top:0.85rem;">
                <a href="https://www.google.com/search?tbm=isch&q=basal+ganglia+direct+and+indirect+pathway+diagram" target="_blank" rel="noopener noreferrer" style="display:inline-flex; align-items:center; gap:0.35rem; background:var(--card-bg); border:1.5px solid var(--primary-light); color:var(--primary); padding:0.35rem 0.75rem; border-radius:20px; font-size:0.82rem; font-weight:700; text-decoration:none;">
                    🔍 Atlasz: Törzsdúcok direkt és indirekt útvonala diagram
                </a>
                <a href="https://www.google.com/search?tbm=isch&q=cerebellum+afferent+efferent+pathways+peduncles+diagram" target="_blank" rel="noopener noreferrer" style="display:inline-flex; align-items:center; gap:0.35rem; background:var(--card-bg); border:1.5px solid var(--primary-light); color:var(--primary); padding:0.35rem 0.75rem; border-radius:20px; font-size:0.82rem; font-weight:700; text-decoration:none;">
                    🔍 Atlasz: Kisagyi pályák és pedunculusok diagram
                </a>
                <a href="https://www.google.com/search?tbm=isch&q=extrapyramidal+tracts+vestibulospinal+reticulospinal+diagram" target="_blank" rel="noopener noreferrer" style="display:inline-flex; align-items:center; gap:0.35rem; background:var(--card-bg); border:1.5px solid var(--primary-light); color:var(--primary); padding:0.35rem 0.75rem; border-radius:20px; font-size:0.82rem; font-weight:700; text-decoration:none;">
                    🔍 Atlasz: Extrapyramidalis leszálló pályák diagram
                </a>
            </div>
        </div>

        <h3>3. A mozgató pályák demonstrálása a rágóizmok és a nyelvcsont alatti izmok beidegzésén keresztül</h3>
        <p>A tétel második kulcskérdése, hogy két konkrét izomcsoporton keresztül vezessük le a mozgató pálya teljes lefutását a kérgi motoneuronoktól egészen az izomrostokig. Figyeljünk a nyilak irányára: ez egy <strong>leszálló (efferens) pálya</strong>, tehát a parancs mindig az agykéregtől indul és az izmok felé fut!</p>

        <h4>A) A nyelvcsont alatti izmok (musculi infrahyoidei) mozgató pályája</h4>
        <p>A nyelvcsont alatti izmok (<em>m. sternohyoideus, m. sternothyroideus, m. thyrohyoideus, m. omohyoideus</em> – a <em>m. thyrohyoideus</em> kivételével, amely a C<sub>1</sub> rostokat a <em>n. hypoglossus</em>-hoz csatlakozva kapja, a többi az <em>ansa cervicalis</em>-ból idegződik be) somatomotoros (<strong>SM</strong>) beidegzése a következő láncolaton át valósul meg:</p>
        <ul>
            <li><strong>1. Felső motoneuron:</strong> <strong>Primer motoros kéreg</strong> (<em>gyrus precentralis</em>, Br 4) &rarr; <strong>tractus corticospinalis</strong> (<em>corona radiata &rarr; capsula interna crus posterius &rarr; pedunculus cerebri &rarr; pons &rarr; decussatio pyramidum</em>) &rarr; leszállás a nyaki gerincvelőig.</li>
            <li><strong>2. Gerincvelői átkapcsolás:</strong> A gerincvelő elülső szarvában (<strong>cornu anterius</strong>) lévő <strong>interneuronokon</strong> keresztül eléri a <strong>C<sub>1</sub>–C<sub>4</sub> szelvények &alpha;-motoneuronjait</strong> (alsó motoneuron).</li>
            <li><strong>3. Perifériás idegfonat és hurok:</strong> A <strong>C<sub>1</sub>–C<sub>4</sub> gerincvelői idegek rami ventrales</strong>-ából kialakul a <strong>plexus cervicalis</strong>, amelynek motoros hurka az <strong>ansa cervicalis</strong> (<em>radix superior</em>: C<sub>1</sub>–C<sub>2</sub>; <em>radix inferior</em>: C<sub>2</sub>–C<sub>3</sub>) &rarr; idegzi be somatomotorosan (<strong>SM</strong>) a <strong>nyelvcsont alatti izmokat</strong>.</li>
        </ul>

        <h4>B) A négy rágóizom (musculi masticatorii) mozgató pályája</h4>
        <p>A rágóizmok az <strong>1. garatívből (arcus pharyngeus primus)</strong> származnak, ezért szigorú terminológia szerint speciális visceromotoros (branchiomotoros, <strong>SVM</strong>) beidegzésűek, amelyet a <strong>nervus trigeminus (V.)</strong> harmadik ága, a <strong>nervus mandibularis (V/3)</strong> lát el. A mozgató parancs útja a kéregtől az izmokig:</p>
        <ul>
            <li><strong>1. Felső motoneuron:</strong> <strong>Primer motoros area</strong> (<em>gyrus precentralis</em> alsó-lateralis része, <strong>Br 4</strong>) &rarr; a rostok a <strong>tractus corticobulbaris</strong> (a jegyzetben említett <strong>tractus frontopontinus</strong>-szal együtt a <strong>capsula interna – genu / crus anterius-posterius határ</strong> területén át) útján szállnak le a hídba. (Mivel kétoldali a beidegzés, egyoldali stroke nem bénítja le a rágóizmokat!)</li>
            <li><strong>2. Agytörzsi átkapcsolás (Alsó motoneuron):</strong> A hídban (<em>pons</em>) elhelyezkedő <strong>nucleus motorius nervi trigemini</strong> multipolaris motoneuronjain kapcsolódik át.</li>
            <li><strong>3. Perifériás kilépés és ágak:</strong> A motoros rostok mint <strong>radix motoria nervi trigemini</strong> lépnek ki a hídból, elhaladnak a <strong>ganglion trigeminale (Gasseri)</strong> alatt (<strong>NEM kapcsolódnak át benne!</strong>), csatlakoznak a <strong>nervus mandibularis (V/3)</strong> törzséhez, majd annak elülső főágából (<strong>truncus anterior nervi mandibularis</strong>) ágaznak el a négy rágóizomhoz:
                <ul>
                    <li><strong>Musculus temporalis</strong> &larr; <em>nervi temporales profundi</em> (anterior et posterior)</li>
                    <li><strong>Musculus masseter</strong> &larr; <em>nervus massetericus</em></li>
                    <li><strong>Musculus pterygoideus medialis</strong> &larr; <em>nervus pterygoideus medialis</em> (még a V/3 oszlása előtt, a törzsből ered!)</li>
                    <li><strong>Musculus pterygoideus lateralis</strong> &larr; <em>nervus pterygoideus lateralis</em></li>
                </ul>
            </li>
        </ul>

        <div class="mnemonic-box">
            <strong>💡 Emlékeztető &amp; Garatív-szabály:</strong> Minden 1. garatív-származék (a 4 rágóizom + <em>m. mylohyoideus</em> + <em>m. digastricus venter anterior</em> + <em>m. tensor veli palatini</em> + <em>m. tensor tympani</em>) motoros rostjait a <strong>n. mandibularis (V/3)</strong> szállítja. A <strong>ganglion trigeminale (Gasseri)</strong> tisztán érző dúc (csak pseudounipolaris érző perikaryonokat tartalmaz) – a motoros gyökér (<em>portio minor</em>) érintetlenül halad el alatta!
        </div>

        <div style="display:flex; flex-wrap:wrap; gap:0.5rem; margin:0.9rem 0 1.3rem 0;">
            <a href="https://www.google.com/search?tbm=isch&q=ansa+cervicalis+infrahyoid+muscles+innervation+diagram" target="_blank" rel="noopener noreferrer" style="display:inline-flex; align-items:center; gap:0.35rem; background:var(--card-bg); border:1.5px solid var(--primary-light); color:var(--primary); padding:0.35rem 0.75rem; border-radius:20px; font-size:0.82rem; font-weight:700; text-decoration:none;">
                🔍 Atlasz: Ansa cervicalis és nyelvcsont alatti izmok diagram
            </a>
            <a href="https://www.google.com/search?tbm=isch&q=mandibular+nerve+V3+muscles+of+mastication+innervation+diagram" target="_blank" rel="noopener noreferrer" style="display:inline-flex; align-items:center; gap:0.35rem; background:var(--card-bg); border:1.5px solid var(--primary-light); color:var(--primary); padding:0.35rem 0.75rem; border-radius:20px; font-size:0.82rem; font-weight:700; text-decoration:none;">
                🔍 Atlasz: N. mandibularis (V/3) és rágóizmok beidegzése diagram
            </a>
        </div>

        <h3>4. A gerincvelő somatomotoros működése és a proprioceptív reflexív</h3>
        <p>A gerincvelő elülső szarvában (<strong>cornu anterius</strong>, Rexed IX. lamina) a motoneuronok szigorú térbeli és funkcionális rend szerint szerveződnek:</p>
        <ul>
            <li><strong>Tónusfenntartás:</strong> Egy motoneuron-csoporton belül mindig vannak egyszerre aktív és gátolt sejtek &rarr; ez biztosítja az állandó, nyugalmi <strong>izomtónust</strong>.</li>
            <li><strong>Motoneuronok szomatotópiás elrendeződése az elülső szarvban:</strong>
                <ul>
                    <li><strong>Flexor izmok</strong> motoneuronjai &rarr; <strong>dorsalisan</strong> (hátul) helyezkednek el.</li>
                    <li><strong>Extensor izmok</strong> motoneuronjai &rarr; <strong>ventralisan</strong> (elöl) helyezkednek el.</li>
                    <li><strong>Törzs izmait</strong> beidegző motoneuronok &rarr; <strong>medialisan</strong> (belül) ülnek.</li>
                    <li><strong>Végtagizmokat</strong> beidegző motoneuronok &rarr; <strong>lateralisan</strong> (kívül) ülnek (a törzstől a distalis ujjak felé egyre lateralisabban: <em>proximodistalis</em> rend).</li>
                </ul>
            </li>
            <li><strong>Működés szempontjából eltérő gerincvelői szakaszok:</strong>
                <ul>
                    <li><strong>C<sub>1</sub>–C<sub>3</sub> (első 3 nyaki szelvény):</strong> Felső nyaki terület beidegzése (pl. nyelvcsont alatti izmok).</li>
                    <li><strong>C<sub>4</sub> (4. nyaki szelvény):</strong> Rekeszizom (<em>diaphragma</em>) fő beidegzése (<em>n. phrenicus</em>: C<sub>3</sub>–C<sub>5</sub>, dominánsan C<sub>4</sub>).</li>
                    <li><strong>C<sub>5</sub>–Th<sub>1</sub> (utolsó 4 nyaki + 1 thoracalis szelvény – <em>intumescentia cervicalis</em>):</strong> <strong>Brachialis szakasz</strong> – a felső végtag beidegzése.</li>
                    <li><strong>Th<sub>2</sub>–L<sub>3</sub> (thoracolumbalis terület):</strong> A <strong>törzs</strong> (mellkas- és hasfal, hátizmok) beidegzése.</li>
                    <li><strong>L<sub>4</sub>–S<sub>2</sub> (lumbosacralis terület – <em>intumescentia lumbosacralis</em>):</strong> Az <strong>alsó végtagok</strong> beidegzése.</li>
                    <li><strong>S<sub>3</sub>–Co<sub>1</sub> (conus terminalis-nál):</strong> <strong>Nucleus pudendohaemorrhoidalis</strong> – a gátizmok és a harántcsíkolt záróizmok (<em>m. sphincter ani externus, m. sphincter urethrae externus</em>) beidegzése.</li>
                </ul>
            </li>
            <li><strong>Motoros egység (motor unit):</strong> Egyetlen &alpha;-motoneuron és az általa beidegzett összes munkaizomrost együttese. A <strong>motoneuron–izomrost arány</strong> meghatározza a mozgás finomságát: minél kisebb a szám, annál finomabb a mozgáskoordináció (pl. <strong>külső szemmozgató izmok</strong>: 1 MN – kb. 10 izomrost; <strong>nagy törzsizmok</strong>: 1 MN – több mint 1000 izomrost).</li>
        </ul>

        <h4>A proprioceptív (nyújtási) reflexív (pl. patella-reflex)</h4>
        <p>A <strong>proprioceptív reflexív</strong> védi az izmot a rá ható passzív nyújtó erőktől, és biztosítja az izom hosszának, valamint az ízületek állandóságának fenntartását a mindenkori testtartásnak megfelelően. Különösen fejlett azokban az izmokban, amelyek a <strong>gravitáció ellen dolgoznak</strong> (pl. <strong>légzőizmok, extensor izmok</strong>).</p>

        <table style="width:100%; border-collapse:collapse; margin:1rem 0; font-size:0.88rem; border:1px solid var(--border);">
            <thead>
                <tr style="background:var(--primary); color:#fff;">
                    <th style="padding:0.6rem; text-align:left; border:1px solid var(--border);">Elhelyezkedés</th>
                    <th style="padding:0.6rem; text-align:left; border:1px solid var(--border);">Receptor típusa</th>
                    <th style="padding:0.6rem; text-align:left; border:1px solid var(--border);">Érzékenység</th>
                    <th style="padding:0.6rem; text-align:left; border:1px solid var(--border);">Funkció (mit jelez)</th>
                    <th style="padding:0.6rem; text-align:center; border:1px solid var(--border);">Afferens rost</th>
                </tr>
            </thead>
            <tbody>
                <tr style="background:var(--card-bg);">
                    <td rowspan="2" style="padding:0.6rem; font-weight:700; border:1px solid var(--border);">Izomorsó receptorai</td>
                    <td style="padding:0.6rem; border:1px solid var(--border);"><strong>Magzsák rost (Ia – elsődleges, anulospirális végződés)</strong></td>
                    <td style="padding:0.6rem; border:1px solid var(--border);">Nagy dinamikai érzékenység</td>
                    <td style="padding:0.6rem; border:1px solid var(--border);">Hossz és a változás mértéke: <strong>hossz és sebesség</strong> (gyors nyúlás)</td>
                    <td style="padding:0.6rem; text-align:center; font-weight:700; border:1px solid var(--border);">Ia</td>
                </tr>
                <tr style="background:var(--bg);">
                    <td style="padding:0.6rem; border:1px solid var(--border);"><strong>Maglánc rost (II – másodlagos, virágcsokor végződés)</strong></td>
                    <td style="padding:0.6rem; border:1px solid var(--border);">Alacsony dinamikai, magas statikus érzékenység</td>
                    <td style="padding:0.6rem; border:1px solid var(--border);"><strong>Hossz, feszülés</strong> (tartós helyzet)</td>
                    <td style="padding:0.6rem; text-align:center; font-weight:700; border:1px solid var(--border);">II</td>
                </tr>
                <tr style="background:var(--card-bg);">
                    <td rowspan="2" style="padding:0.6rem; font-weight:700; border:1px solid var(--border);">Ínorsó &amp; ízületi receptorok</td>
                    <td style="padding:0.6rem; border:1px solid var(--border);"><strong>Golgi-ínorsó (Ib)</strong></td>
                    <td style="padding:0.6rem; border:1px solid var(--border);">Feszülés</td>
                    <td style="padding:0.6rem; border:1px solid var(--border);"><strong>Izomerő, feszülés</strong> (túlfeszülés elleni védelem – inverz nyújtási reflex)</td>
                    <td style="padding:0.6rem; text-align:center; font-weight:700; border:1px solid var(--border);">Ib</td>
                </tr>
                <tr style="background:var(--bg);">
                    <td style="padding:0.6rem; border:1px solid var(--border);"><strong>Ruffini-végtestek (II)</strong></td>
                    <td style="padding:0.6rem; border:1px solid var(--border);">Végtag helyzet</td>
                    <td style="padding:0.6rem; border:1px solid var(--border);"><strong>Ízület mozgása és nyomás</strong></td>
                    <td style="padding:0.6rem; text-align:center; font-weight:700; border:1px solid var(--border);">II</td>
                </tr>
            </tbody>
        </table>

        <ul>
            <li><strong>A reflexív elemei:</strong>
                <ul>
                    <li><strong>Inger:</strong> Az izom hirtelen megnyúlása.</li>
                    <li><strong>Afferens szár:</strong> Az izomorsóból induló <strong>Ia rostok</strong> a <em>ganglion spinale</em> pseudounipolaris sejtjein át a hátsó gyökéren lépnek be a gerincvelőbe &rarr; fő águk a hátsó kötegi felszállópályákba (<em>fasciculus gracilis / cuneatus</em>) fut a tudatosulás felé, míg <strong>rostcollateralisuk</strong> belép a szürkeállományba, és közvetlenül a <em>cornu anterius</em> <strong>&alpha;-motoneuronján</strong> végződik &rarr; <strong>1 db szinapszis</strong> a reflexívben = <strong>monoszinaptikus reflexív</strong>!</li>
                    <li><strong>Efferens szár:</strong> Az <strong>&alpha;-motoneuron axonja</strong> visszafut ahhoz az izomhoz, ahonnan az afferens szál elindult &rarr; <strong>effektor rész:</strong> a feszítőizom összehúzódással védi az izmot a megnyúlás ellen és biztosítja az ízületek stabilitását (a motoros véglemezen az elágazódásokból <strong>acetilkolin</strong> szabadul fel).</li>
                </ul>
            </li>
            <li><strong>Kiegészítő kapcsolatok a normális működéshez:</strong>
                <ul>
                    <li><strong>1. Reciprok beidegzés (gátlás):</strong> Az extensor izom összehúzódásakor az antagonista flexor izmoknak el kell ernyedniük. Az izomorsó Ia afferense collateralist ad egy <strong>gátló interneuronhoz (Ia-gátló neuron)</strong> &rarr; amely a flexor izmokat beidegző &alpha;-motoneuronon végződik és gátolja azt.</li>
                    <li><strong>2. Gamma-hurok (co-aktiváció):</strong> Lehetővé teszi, hogy a magasabb központokból érkező utasítások az izmok mindenkori összehúzódási állapotától függetlenül kerüljenek végrehajtásra. Ha csak az &alpha;-neuron aktiválódik, az extrafusalis rostok megrövidülnek, az izomorsó meglazul („néma” lesz) és elveszíti érzékenységét. Ezért a leszálló pályák egyszerre ingerlik az &alpha;- és a <strong>&gamma;-motoneuronokat</strong>: a &gamma;-neuronok összehúzzák az izomorsó két poláris végét &rarr; középen az anulospirális receptorok megfeszülnek és aktívak maradnak &rarr; fenntartják az izomorsó érzékenységét és ingerületbe hozzák az &alpha;-motoneuronokat!</li>
                </ul>
            </li>
        </ul>

        <div style="display:flex; flex-wrap:wrap; gap:0.5rem; margin:0.9rem 0 1.3rem 0;">
            <a href="https://www.google.com/search?tbm=isch&q=spinal+cord+anterior+horn+somatotopy+flexor+extensor+diagram" target="_blank" rel="noopener noreferrer" style="display:inline-flex; align-items:center; gap:0.35rem; background:var(--card-bg); border:1.5px solid var(--primary-light); color:var(--primary); padding:0.35rem 0.75rem; border-radius:20px; font-size:0.82rem; font-weight:700; text-decoration:none;">
                🔍 Atlasz: Gerincvelő elülső szarv szomatotópiája diagram
            </a>
            <a href="https://www.google.com/search?tbm=isch&q=muscle+spindle+gamma+motor+neuron+loop+stretch+reflex+diagram" target="_blank" rel="noopener noreferrer" style="display:inline-flex; align-items:center; gap:0.35rem; background:var(--card-bg); border:1.5px solid var(--primary-light); color:var(--primary); padding:0.35rem 0.75rem; border-radius:20px; font-size:0.82rem; font-weight:700; text-decoration:none;">
                🔍 Atlasz: Izomorsó, gamma-hurok és nyújtási reflex diagram
            </a>
        </div>

        <h3>5. A rágóizmok proprioceptív reflexíve (Masseter-reflex)</h3>
        <p>A <strong>rágóizmok proprioceptív reflexíve</strong> (klinikailag: <strong>masseter-reflex</strong> vagy <em>jaw-jerk reflex</em>, amelyet a kissé nyitott szájú páciens állcsúcsára helyezett ujjra mért reflexkalapács-ütéssel váltunk ki, és válaszul a rágóizmok hirtelen összehúzódnak, becsukva a szájat) működésében <strong>teljesen analóg a gerincvelői proprioceptív reflexívvel</strong> – egyetlen, az egész emberi szervezetben egyedülálló anatómiai kivétellel!</p>
        <ul>
            <li><strong>Az anatómiai különlegesség (Vizsgakérdés!):</strong> Az <strong>elsődleges érző (pseudounipolaris) neuronok</strong> sejttestjei <strong>NEM</strong> a megfelelő perifériás érződúcban – azaz nem a <em>ganglion trigeminale (Gasseri)</em>-ban! – ülnek, hanem bevándoroltak a központi idegrendszerbe, a középagyban (<em>mesencephalon</em>) elhelyezkedő <strong>nucleus mesencephalicus nervi trigemini</strong>-be! (Ez az egyetlen eset a szervezetben, amikor elsődleges érző pseudounipolaris neuronok perikaryonjai a központi idegrendszeren belül találhatók!)</li>
            <li><strong>A reflexív pontos lefutása lépésről lépésre:</strong>
                <ol>
                    <li><strong>Receptor &amp; Perifériás nyúlvány:</strong> Az állkapocs hirtelen lefelé mozdításakor a rágóizmok (különösen a <em>m. masseter</em> és <em>m. temporalis</em>) izomorsóinak <strong>anulospirális idegvégződései</strong> ingerületbe jönnek &rarr; a proprioceptív rostok a <strong>nervus mandibularis (V/3)</strong> ágain keresztül belépnek az agytörzsbe (a <em>ganglion trigeminale</em>-n átkapcsolás nélkül haladnak át).</li>
                    <li><strong>Központi sejt és elágazás:</strong> A rostok felszállnak a középagyi <strong>nucleus mesencephalicus nervi trigemini</strong> nagy, <strong>pseudounipolaris neuronjaihoz</strong>. A sejttestből induló lefelé irányuló nyúlvány, a <strong>tractus mesencephalicus nervi trigemini</strong> a hídban haladva <strong>T / Y alakban kettéágazik</strong>:
                        <ul>
                            <li>Az <strong>egyik szár</strong> közvetlenül a hídban elhelyezkedő <strong>nucleus motorius nervi trigemini</strong> motoneuronjain végződik (monoszinaptikus átkapcsolás!).</li>
                            <li>A <strong>másik szár</strong> további szinapszisokkal a felsőbb központok (pl. kisagy, thalamus/kéreg) felé továbbítja a rágóerő és az állkapocs helyzetének proprioceptív információit.</li>
                        </ul>
                    </li>
                    <li><strong>Efferens szár &amp; Válasz:</strong> A <strong>nucleus motorius nervi trigemini</strong> &alpha;-motoneuronjainak axonjai mint <strong>radix motoria nervi trigemini</strong> lépnek ki a hídból &rarr; a <em>nervus mandibularis (V/3)</em> motoros ágain keresztül elérik a <strong>rágóizmokat</strong> &rarr; a fogsorok erőteljes összezárása (<strong>kétneuronon, monoszinaptikus reflexív</strong>).</li>
                </ol>
            </li>
        </ul>

        <!-- 2. INTERAKTÍV SVG ÁBRA: MASSETER REFLEX (NUCLEUS MESENCEPHALICUS -> NUCLEUS MOTORIUS N. V) -->
        <div class="visual-aid-box" style="background:var(--bg); border:1.5px solid var(--border); border-radius:10px; padding:1.2rem; margin:1.3rem 0;">
            <div style="font-weight:800; font-size:0.95rem; color:var(--primary); margin-bottom:0.7rem;">
                🗺️ Interaktív anatómiai séma: A rágóizmok proprioceptív reflexíve (Masseter-reflex)
            </div>
            <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:0.5rem; background:var(--card-bg); border:1px solid var(--border); border-radius:8px; padding:0.6rem 0.9rem; margin-bottom:0.8rem; font-size:0.82rem; font-weight:700; color:var(--text);">
                <span>⬆️ <strong>FELÜL: Mesencephalon (Középagy)</strong></span>
                <span>⬇️ <strong>ALUL: Pons (Híd) &amp; Rágóizmok</strong></span>
                <span>🔵 <strong>Kék = Afferens (Proprioceptív Ia)</strong> &harr; 🔴 <strong>Piros = Efferens (Motoros V/3)</strong></span>
            </div>
            <div style="text-align:center; overflow-x:auto;">
                <svg viewBox="0 0 740 360" style="max-width:100%; height:auto; font-family:system-ui, sans-serif;">
                    <defs>
                        <marker id="m-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                            <path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb"/>
                        </marker>
                        <marker id="m-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                            <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626"/>
                        </marker>
                    </defs>

                    <!-- Agytörzs kontúr -->
                    <rect x="370" y="15" width="340" height="325" rx="18" fill="#f8fafc" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6,4"/>
                    <text x="540" y="38" text-anchor="middle" font-size="12" font-weight="800" fill="#475569">AGYTÖRZS (Mesencephalon &amp; Pons)</text>
                    <line x1="370" y1="165" x2="710" y2="165" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="4,4"/>
                    <text x="698" y="158" text-anchor="end" font-size="10.5" font-weight="700" fill="#64748b">Mesencephalon</text>
                    <text x="698" y="180" text-anchor="end" font-size="10.5" font-weight="700" fill="#64748b">Pons (Híd)</text>

                    <!-- Nucleus mesencephalicus n. V -->
                    <g style="cursor:pointer;" onmouseenter="document.getElementById('readout-t16-2').innerHTML='🔵 <strong>Nucleus mesencephalicus nervi trigemini (Középagy):</strong> Az 1. érző pseudounipolaris neuron sejttestje! Az egyetlen érződúc-homológ, amely a központi idegrendszeren belül helyezkedik el.'" onclick="document.getElementById('readout-t16-2').innerHTML='🔵 <strong>Nucleus mesencephalicus nervi trigemini (Középagy):</strong> Az 1. érző pseudounipolaris neuron sejttestje! Az egyetlen érződúc-homológ, amely a központi idegrendszeren belül helyezkedik el.'">
                        <rect x="415" y="55" width="250" height="58" rx="12" fill="#dbeafe" stroke="#2563eb" stroke-width="2.5"/>
                        <circle cx="445" cy="84" r="14" fill="#2563eb"/>
                        <text x="445" y="88" text-anchor="middle" font-size="11" font-weight="800" fill="#fff">1.</text>
                        <text x="552" y="80" text-anchor="middle" font-size="12" font-weight="800" fill="#1e3a8a">Nucl. mesencephalicus n. V</text>
                        <text x="552" y="96" text-anchor="middle" font-size="10.5" fill="#1e40af">Pseudounipolaris érző neuron</text>
                    </g>

                    <!-- Nucleus motorius n. V -->
                    <g style="cursor:pointer;" onmouseenter="document.getElementById('readout-t16-2').innerHTML='🔴 <strong>Nucleus motorius nervi trigemini (Pons):</strong> A reflexív 2. neuronja (alsó &alpha;-motoneuron). Innen indul a radix motoria n. V a rágóizmokhoz.'" onclick="document.getElementById('readout-t16-2').innerHTML='🔴 <strong>Nucleus motorius nervi trigemini (Pons):</strong> A reflexív 2. neuronja (alsó &alpha;-motoneuron). Innen indul a radix motoria n. V a rágóizmokhoz.'">
                        <rect x="415" y="245" width="250" height="58" rx="12" fill="#fee2e2" stroke="#dc2626" stroke-width="2.5"/>
                        <circle cx="445" cy="274" r="14" fill="#dc2626"/>
                        <text x="445" y="278" text-anchor="middle" font-size="11" font-weight="800" fill="#fff">2.</text>
                        <text x="552" y="270" text-anchor="middle" font-size="12" font-weight="800" fill="#7f1d1d">Nucl. motorius n. V (Pons)</text>
                        <text x="552" y="286" text-anchor="middle" font-size="10.5" fill="#991b1b">Alsó motoneuron &rarr; Radix motoria</text>
                    </g>

                    <!-- Ganglion trigeminale (átkapcsolás nélkül) -->
                    <g style="cursor:pointer;" onmouseenter="document.getElementById('readout-t16-2').innerHTML='⚪ <strong>Ganglion trigeminale (Gasseri):</strong> A proprioceptív rostok és a radix motoria is ÁTKAPCSOLÁS NÉLKÜL haladnak át rajta/alatta!'" onclick="document.getElementById('readout-t16-2').innerHTML='⚪ <strong>Ganglion trigeminale (Gasseri):</strong> A proprioceptív rostok és a radix motoria is ÁTKAPCSOLÁS NÉLKÜL haladnak át rajta/alatta!'">
                        <rect x="205" y="155" width="135" height="48" rx="10" fill="#f1f5f9" stroke="#64748b" stroke-width="1.8"/>
                        <text x="272" y="176" text-anchor="middle" font-size="11" font-weight="800" fill="#334155">Ggl. trigeminale</text>
                        <text x="272" y="191" text-anchor="middle" font-size="9.5" fill="#475569">(Átkapcsolás nélkül!)</text>
                    </g>

                    <!-- Rágóizmok (M. masseter / M. temporalis) -->
                    <g style="cursor:pointer;" onmouseenter="document.getElementById('readout-t16-2').innerHTML='💪 <strong>Rágóizmok (pl. M. masseter, M. temporalis):</strong> Az izomorsók anulospirális végződéseiből indul az afferens Ia rost (V/3), és ide érkezik vissza a motoros parancs (fogsorok összezárása).'" onclick="document.getElementById('readout-t16-2').innerHTML='💪 <strong>Rágóizmok (pl. M. masseter, M. temporalis):</strong> Az izomorsók anulospirális végződéseiből indul az afferens Ia rost (V/3), és ide érkezik vissza a motoros parancs (fogsorok összezárása).'">
                        <rect x="20" y="140" width="155" height="80" rx="12" fill="#fef3c7" stroke="#d97706" stroke-width="2.5"/>
                        <text x="97" y="166" text-anchor="middle" font-size="12.5" font-weight="800" fill="#92400e">RÁGÓIZMOK</text>
                        <text x="97" y="183" text-anchor="middle" font-size="10.5" fill="#b45309">Izomorsó (anulospirális)</text>
                        <text x="97" y="199" text-anchor="middle" font-size="10.5" font-weight="700" fill="#78350f">&rarr; Fogsorok összezárása</text>
                    </g>

                    <!-- Afferens pálya (kék) -->
                    <path d="M 97 140 L 97 84 L 410 84" fill="none" stroke="#2563eb" stroke-width="3" marker-end="url(#m-blue)"/>
                    <text x="245" y="75" text-anchor="middle" font-size="11" font-weight="700" fill="#2563eb">Afferens: N. mandibularis (V/3) &rarr; Tr. mesencephalicus n. V</text>

                    <!-- T/Y elágazás a középagyi neuronból -->
                    <path d="M 445 98 L 445 195 L 445 240" fill="none" stroke="#2563eb" stroke-width="3" marker-end="url(#m-blue)"/>
                    <path d="M 445 185 L 560 185 L 560 205" fill="none" stroke="#2563eb" stroke-width="2" stroke-dasharray="4,3" marker-end="url(#m-blue)"/>
                    <text x="565" y="218" text-anchor="middle" font-size="10" font-weight="700" fill="#1d4ed8">T/Y elágazás (felsőbb központok felé)</text>

                    <!-- Efferens pálya (piros) -->
                    <path d="M 415 274 L 97 274 L 97 225" fill="none" stroke="#dc2626" stroke-width="3" marker-end="url(#m-red)"/>
                    <text x="255" y="293" text-anchor="middle" font-size="11" font-weight="700" fill="#dc2626">Efferens: Radix motoria n. V &rarr; N. mandibularis (V/3)</text>
                </svg>
            </div>
            <div id="readout-t16-2" style="margin-top:0.75rem; padding:0.65rem 0.95rem; background:var(--card-bg); border:1.5px solid var(--accent); border-radius:8px; font-size:0.9rem; color:var(--text);">
                💡 <strong>Kikérdező tipp:</strong> Vidd az egeret (vagy koppints) a rágóizmokra vagy az agytörzsi magvakra, és ellenőrizd a kétneuronon reflexív állomásait!
            </div>
            <div style="display:flex; flex-wrap:wrap; gap:0.5rem; margin-top:0.85rem;">
                <a href="https://www.google.com/search?tbm=isch&q=jaw+jerk+reflex+mesencephalic+nucleus+trigeminal+nerve+diagram" target="_blank" rel="noopener noreferrer" style="display:inline-flex; align-items:center; gap:0.35rem; background:var(--card-bg); border:1.5px solid var(--primary-light); color:var(--primary); padding:0.35rem 0.75rem; border-radius:20px; font-size:0.82rem; font-weight:700; text-decoration:none;">
                    🔍 Atlasz: Masseter-reflex (Nucl. mesencephalicus n. V) diagram
                </a>
                <a href="https://www.google.com/search?tbm=isch&q=trigeminal+nerve+nuclei+brainstem+mesencephalic+motor+diagram" target="_blank" rel="noopener noreferrer" style="display:inline-flex; align-items:center; gap:0.35rem; background:var(--card-bg); border:1.5px solid var(--primary-light); color:var(--primary); padding:0.35rem 0.75rem; border-radius:20px; font-size:0.82rem; font-weight:700; text-decoration:none;">
                    🔍 Atlasz: N. trigeminus agytörzsi magvai diagram
                </a>
            </div>
        </div>
`
});
