/* Nano Templates - https://github.com/trix/nano */
function nano(template, data) {
    return template.replace(/\{([\w\.]*)\}/g, function (str, key) {
        var keys = key.split("."), v = data[keys.shift()];
        for (var i = 0, l = keys.length; i < l; i++) v = v[keys[i]];
        return (typeof v !== "undefined" && v !== null) ? v : "";
    });
}

// Функция заполнения каталога товарами
function fillCatalogItems() {

    const IvanTeaCatalogItems = [
        {
            title: "Иван-чай",
            img_thumb: "img/catalog/cat-001-small.jpg",
            img: "img/catalog/cat-001.jpg",
            description: "<p><span class='f-bold'>ИВАН-ЧАЙ</span> обладает душистым, цветочно-травяным ароматом с медовыми, чуть терпкими лесными нотами. Рекомендован для поддержания иммунитета, укрепления кровеносных сосудов, повышения уровня гемоглобина. Высокое содержание витаминов А и С делают его средством сохранения молодости. Стабилизирует организм при стрессах, препятствует накоплению активных радикалов, выводит тяжёлые металлы, очищает при интоксикациях. Стимулирует кроветворение и улучшает обмен веществ. Не содержит кофеина, пуриновой, щавелевой кислот. Не вызывает привыкания. Ферментация иван-чая необходима для увеличения объёма полезных веществ и приобретения лучших вкусовых качеств.</p>",
            contra: "индивидуальная непереносимость, с осторожностью при беременности и лактации, а также тромбозе и тромбофлебите"
        },
        {
            title: "Иван-чай с морошкой",
            img_thumb: "img/catalog/cat-002-small.jpg",
            img: "img/catalog/cat-002.jpg",
            description: "<p><span class='f-bold'>МОРОШКА</span> придаёт напитку сильный приятный аромат и пикантный свежий вкус. Это целебное средство от общего упадка сил, депрессий, при отсутствии аппетита, помогает при сильном кашле. Высокое содержание витаминов А и С делают его средством сохранения молодости.</p>",
            contra: "индивидуальная непереносимость"
        },
        {
            title: "Иван-чай черничный",
            img_thumb: "img/catalog/cat-003-small.jpg",
            img: "img/catalog/cat-003.jpg",
            description: "<p><span class='f-bold'>ЧЕРНИКА</span> снимает усталость глаз, улучшает зрение, снижает уровень сахара в крови, богата витаминами В1, С и РР. Повышает уровень гемоглобина, очищает печень, регулирует функцию поджелудочной железы, благотворно влияет на желудок.</p>",
            contra: "индивидуальная непереносимость"
        },
        {
            title: "Иван-чай с голубикой и васильком",
            img_thumb: "img/catalog/cat-004-small.jpg",
            img: "img/catalog/cat-004.jpg",
            description: "<p><span class='f-bold'>ГОЛУБИКА</span> нормализует функцию поджелудочной железы, снижает уровень сахара в крови, снимает напряжение с глаз, выводит радиацию из организма, укрепляет стенки сосудов, способствует расщеплению жиров в организме. Улучшает процесс кроветворения и состав крови; тонизирует стенки капилляров; нормализует давление; предупреждает развитие онкологии.</p>" +
            "<p><span class='f-bold'>ВАСИЛЁК</span> применяется при отёках почечного и сердечного происхождения, при ОРЗ с лихорадкой и головной болью, снимает спазмы гладкой мускулатуры внутренних органов. Полезен при лечении «куриной слепоты» (нарушениях сумеречного зрения).</p>",
            contra: "индивидуальная непереносимость, период беременности, лактации, детям до 2-х лет"
        },
        {
            title: "Иван-чай с малиной",
            img_thumb: "img/catalog/cat-005-small.jpg",
            img: "img/catalog/cat-005.jpg",
            description: "<p><span class='f-bold'>МАЛИНА</span> дарит напитку изумительный вкус и аромат – сладкий с тонкой кислинкой. Ферментированный лист малины – это кладезь полезных веществ, а также незаменимое средство при простуде, эффективно снимает отеки и воспаления.</p>",
            contra: "индивидуальная непереносимость"
        },
        {
            title: "Иван-чай с лесной земляникой",
            img_thumb: "img/catalog/cat-006-small.jpg",
            img: "img/catalog/cat-006.jpg",
            description: "<p><span class='f-bold'>ЗЕМЛЯНИКА</span> содержит: витамины группы В, флавоноиды, аскорбиновую, лимонную и яблочную кислоты, сахара, медь, железо, марганец, кобальт, минеральные соли: кальций, фосфор, калий. Укрепляет стенки кровеносных сосудов, улучшает свертываемость крови, повышает уровень гемоглобина, улучшает деятельность пищеварительной системы, мочегонное средство. Сублимация земляники позволяет сохранить все полезные свойства, естественный вкус и аромат ягоды, не подвергая её термической обработке, без консервантов и красителей.</p>",
            contra: "индивидуальная непереносимость, период беременности, лактации"
        },
        {
            title: "Иван-чай с облепихой",
            img_thumb: "img/catalog/cat-007-small.jpg",
            img: "img/catalog/cat-007.jpg",
            description: "<p><span class='f-bold'>ОБЛЕПИХА</span> содержит рекордное количество витаминов: С, В1, В2, В3, В9, В6, Е, Р, провитамин А-каротин, магний, калий, кальций, фосфор, железо. Улучшает сердечно-сосудистую деятельность, укрепляет иммунитет, поддерживает и восстанавливает репродуктивную функцию. Плоды облепихи обладают противовоспалительными и регенерирующими свойствами, а листья и побеги накапливают дубильные вещества, снижающие вирусную активность, содержат СЕРОТОНИН – «гормон счастья».</p>",
            contra: "индивидуальная непереносимость"
        },
        {
            title: "Иван-чай смородиновый",
            img_thumb: "img/catalog/cat-008-small.jpg",
            img: "img/catalog/cat-008.jpg",
            description: "<p><span class='f-bold'>СМОРОДИНА</span> – природный концентрат витаминов, микро- и макроэлементов. Стабилизирует кровяное давление, предупреждает болезнь Альцгеймера. Полезна при проблемах со зрением, сахарном диабете, болезнях почек и верхних дыхательных путей.</p>",
            contra: "индивидуальная непереносимость"
        },
        {
            title: "Иван-чай рябиновый",
            img_thumb: "img/catalog/cat-009-small.jpg",
            img: "img/catalog/cat-009.jpg",
            description: "<p><span class='f-bold'>РЯБИНА</span> – это поливитаминное средство при авитаминозе. Предотвращает стрессы, депрессии, раздражительность, бессонницу. Рекомендуется при атеросклерозе. Содержит дубильные вещества, органические кислоты, витамины, эфирные масла, благотворно влияет на деятельность ЖКТ.</p>",
            contra: "индивидуальная непереносимость"
        },
        {
            title: "Иван-чай c брусникой",
            img_thumb: "img/catalog/cat-010-small.jpg",
            img: "img/catalog/cat-010.jpg",
            description: "<p><span class='f-bold'>БРУСНИКА</span> повышает защитные силы организма, укрепляет сосуды, обладает мочегонным и антибактериальным эффектом, устраняет отечность. Содержит аскорбиновую кислоту, каротин, соли калия и марганца, дубильные вещества, флавоноиды, кумарины.</p>",
            contra: "индивидуальная непереносимость"
        },
        {
            title: "Иван-чай с кедровым орехом и брусникой",
            img_thumb: "img/catalog/cat-011-small.jpg",
            img: "img/catalog/cat-011.jpg",
            description: "<p><span class='f-bold'>КЕДРОВЫЕ ОРЕШКИ</span> – это ценный источник йода, фосфора, магния, железа, витаминов В1, В2, В3, А, Е, минералов. Содержат практически все незаменимые аминокислоты, полиненасыщенные жирные кислоты, сбалансированный растительный белок, который усваивается организмом на 99%. Повышают работоспособность человека, активно участвуют в росте и развитии организма.</p>" +
            "<p><span class='f-bold'>БРУСНИКА</span> содержит витамины С, А, В1, В2, РР, калий, магний, фосфор, железо. Поднимает общий тонус, укрепляет сосуды, капилляры, сердце.</p>",
            contra: "индивидуальная непереносимость"
        },
        {
            title: "Иван-чай черёмуховый",
            img_thumb: "img/catalog/cat-012-small.jpg",
            img: "img/catalog/cat-012.jpg",
            description: "<p><span class='f-bold'>ЧЕРЁМУХА</span> укрепляет стенки кровеносных сосудов, нормализует нервную деятельность, замедляет процессы старения организма. Обладает вяжущим действием. Очищает организм от шлаков, токсических и канцерогенных веществ.</p>",
            contra: "индивидуальная непереносимость, период беременности и лактации"
        },
        {
            title: "Иван-чай с аронией",
            img_thumb: "img/catalog/cat-013-small.jpg",
            img: "img/catalog/cat-013.jpg",
            description: "<p><span class='f-bold'>ЧЕРНОПЛОДНАЯ РЯБИНА</span> избавляет организм от тяжёлых металлов, радиоактивных веществ, продуктов распада. Поэтому полезна людям, проживающим в экологически неблагоприятных районах. Пектиновые вещества тонизируют стенки кишечника и способствуют очищению организма. Регулирует уровень сахара и холестерина в крови, снижает проницаемость капилляров, укрепляет стенки сосудов, стимулирует иммунную систему, оказывает мочегонное действие; повышает уровень кислотности желудочного сока, нейтрализует воздействие радиационного облучения; обладает успокаивающим действием; оказывает гепапротекторное действие; уменьшает токсикозы в первом триместре беременности; тормозит процессы старения глаз.</p>",
            contra: "индивидуальная непереносимость, возраст до 2-х лет"
        },
        {
            title: "Иван-чай ольховый",
            img_thumb: "img/catalog/cat-014-small.jpg",
            img: "img/catalog/cat-014.jpg",
            description: "<p>Полезные вещества в листьях <span class='f-bold'>ОЛЬХИ</span> помогают справиться с аллергией, стоматитом, кровоточивостью дёсен, болями в желудке, простудными заболеваниями.</p>" +
            "<p>Используется как заменитель чёрного чая.</p>",
            contra: "при индивидуальной непереносимости фитосредству. Не применять в период беременности и лактации, детям до 12 лет"
        },
        {
            title: "Иван-чай вишнёвый",
            img_thumb: "img/catalog/cat-015-small.jpg",
            img: "img/catalog/cat-015.jpg",
            description: "<p><span class='f-bold'>ВИШНЯ</span> придаёт напитку яркий аромат и мягкий древеснопряный вкус. Бодрит и поднимает настроение. Это отличный витаминный напиток, который понижает артериальное давление и облегчает симптомы простуды.</p>",
            contra: "индивидуальная непереносимость"
        },
        {
            title: "Иван-чай с яблоком",
            img_thumb: "img/catalog/cat-016-small.jpg",
            img: "img/catalog/cat-016.jpg",
            description: "<p><span class='f-bold'>ЯБЛОКИ</span> благотворно влияют на нервную систему, иммунитет, работу памяти и интеллектуальные способности, понижают давление и помогают при тромбофлебите.</p>",
            contra: "индивидуальная непереносимость"
        },
        {
            title: "Иван-чай имбирный",
            img_thumb: "img/catalog/cat-017-small.jpg",
            img: "img/catalog/cat-017.jpg",
            description: "<p><span class='f-bold'>ИМБИРЬ</span> - натуральный источник витаминов, минералов и всех незаменимых аминокислот. Наполняет свежей энергией, повышает жизненный тонус. Регулирует вес. Укрепляет память, иммунитет, суставы и сердце. Восстанавливает желудок, кишечник, печень. Пряный аромат и чуть терпкий вкус имбиря подарят хорошее самочувствие.</p>",
            contra: "индивидуальная непереносимость, период беременности и лактации"
        },
        {
            title: "Иван-чай ромашковый",
            img_thumb: "img/catalog/cat-018-small.jpg",
            img: "img/catalog/cat-018.jpg",
            description: "<p>Напиток чайный с <span class='f-bold'>РОМАШКОЙ АПТЕЧНОЙ</span> обладает насыщенным медовым ароматом. Успокаивает, расслабляет и устраняет беспокойство. Восстанавливает микрофлору кишечника. Полезен при простудных и вирусных заболеваниях, улучшает аппетит, снимает спазмы, укрепляет нервную и пищеварительную системы. Стимулирует работу головного мозга, препятствует развитию аллергических реакций, расслабляет гладкую мускулатуру, снимает спазм, активирует мозговой кровоток.</p>",
            contra: "индивидуальная непереносимость, период беременности, лактации, младенческий возраст"
        },
        {
            title: "Иван-чай мятный",
            img_thumb: "img/catalog/cat-019-small.jpg",
            img: "img/catalog/cat-019.jpg",
            description: "<p><span class='f-bold'>МЯТА</span> – освежает, расслабляет и одновременно восстанавливает силы. Снимает спазмы, нормализует деятельность сердечно-сосудистой системы. А также стимулирует работу мозга и улучшает аппетит. Мягкий ментоловый вкус доставит особое удовольствие всем любителям отдохнуть за чашкой чая.</p>",
            contra: "индивидуальная непереносимость, период беременности, лактации, при варикозе, пониженном давлении, водителям, детский возраст"
        },
        {
            title: "Иван-чай с шиповником",
            img_thumb: "img/catalog/cat-020-small.jpg",
            img: "img/catalog/cat-020.jpg",
            description: "<p><span class='f-bold'>ШИПОВНИК</span> – настоящий поливитаминный комплекс, а также набор микро- и макроэлементов. Понижает уровень холестерина и регулирует уровень сахара в организме. Является антидепрессантом (за счет содержания магния и витаминов группы В). При тромбозах разжижает кровь и укрепляет капилляры. Обладает общеукрепляющим, желчегонным, иммуностимулирующим действием. Оказывает целебное воздействие на весь ЖКТ.</p>",
            contra: "индивидуальная непереносимость, с осторожностью в период беременности"
        },
        {
            title: "Иван-чай с боярышником",
            img_thumb: "img/catalog/cat-021-small.jpg",
            img: "img/catalog/cat-021.jpg",
            description: "<p><span class='f-bold'>БОЯРЫШНИК</span> применяется для профилактики и лечения заболеваний сердца, сосудов, нормализации давления и пищеварения, преодоления переутомления, бессонницы, нервного перенапряжения. Усиливает кровоснабжение сердца и головного мозга. Оказывает противоопухолевое и антиоксидантное действие. Не имеет противопоказаний и может потребляться в любом возрасте старше 3-х лет.</p>",
            contra: "индивидуальная непереносимость"
        },
        {
            title: "Иван-чай с лепестками розы",
            img_thumb: "img/catalog/cat-022-small.jpg",
            img: "img/catalog/cat-022.jpg",
            description: "<p>«Однажды ты встретишь кого-то, кто будет любить тебя так, как Маленький Принц любит свою розу».</p> <p>Роза – символ любви, а <span class='f-bold'>ИВАН ЧАЙ С ЛЕПЕСТКАМИ САДОВОЙ РОЗЫ</span> – само воплощение нежности, которая достигается благодаря эфирным маслам, которые придают напитку тонкий аромат и приятный вкус. Лепестки розы также обладают вяжущими, бактерицидными, противовоспалительными свойствами.</p>",
            contra: "индивидуальная непереносимость"
        },
        {
            title: "Иван-чай с липой",
            img_thumb: "img/catalog/cat-023-small.jpg",
            img: "img/catalog/cat-023.jpg",
            description: "<p><span class='f-bold'>ЛИПОВЫЙ ЦВЕТ</span> – первое средство при гриппе и простудных заболеваниях. Выводит из организма токсины. Противовоспалительное средство. Снимает отеки и спазмы. Придает чаю мягкий сладковатый вкус и дивный аромат. Не является лекарственным средством, не имеет противопоказаний, но не предназначен для частого употребления.</p>",
            contra: "индивидуальная непереносимость"
        },
        {
            title: "Иван-чай с душицей",
            img_thumb: "img/catalog/cat-024-small.jpg",
            img: "img/catalog/cat-024.jpg",
            description: "<p><span class='f-bold'>ДУШИЦА</span> расслабляет, успокаивает нервную систему, понижает кровяное давление, обладает тёплым медовым ароматом. Стимулирует секрецию пищеварительных желез и бронхов, благотворно влияет на женское здоровье, улучшает аппетит.</p>",
            contra: "индивидуальная непереносимость, период беременности, лактации"
        },
        {
            title: "Иван-чай с душицей и чабрецом",
            img_thumb: "img/catalog/cat-025-small.jpg",
            img: "img/catalog/cat-025.jpg",
            description: "<p><span class='f-bold'>ЧАБРЕЦ</span> обладает тонизирующими свойствами, хорошо пить такой чай в сезон простуд и эпидемий гриппа. Снимает усталость, успокаивает нервную систему, уменьшает мышечные и суставные боли, улучшает работу желудка и кишечника.</p>" +
            "<p><span class='f-bold'>ДУШИЦА</span> помогает справиться с бессонницей, улучшает аппетит, ускоряет обмен веществ, мягко снижает артериальное давление.</p>",
            contra: "индивидуальная непереносимость, период беременности, лактации"
        },
        {
            title: "Иван-чай с клевером",
            img_thumb: "img/catalog/cat-026-small.jpg",
            img: "img/catalog/cat-026.jpg",
            description: "<p><span class='f-bold'>КЛЕВЕР</span> обладает медово-сладким ароматом. Способен понижать вязкость крови, восстанавливать работу дыхательной системы, уменьшать уровень холестерина в крови. Благотворно влияет на сердечно-сосудистую систему. Содержит витаминный комплекс группы В, витамины С, А, Р, Е, К, микроэлементы, гликозиды, изофлавоноиды.</p>",
            contra: "индивидуальная непереносимость, период беременности, лактации"
        },
        {
            title: "Иван-чай со зверобоем",
            img_thumb: "img/catalog/cat-027-small.jpg",
            img: "img/catalog/cat-027.jpg",
            description: "<p><span class='f-bold'>ЗВЕРОБОЙ</span> издавна народ Коми использовал как тонизирующее и иммуностимулирующее средство для повышения защитных сил организма, нормализации обмена веществ. Не подходит для частого применения.</p>" +
            "<p>Увеличивает серотонин в крови, а следовательно, регулирует кровяное давление и приток крови через почки. Ответственен за правильное протекание защитной реакции в организме на внешнее воздействие и воспалительные процессы. Помогает преодолеть угнетённое настроение, оказывает расслабляющее действие, создаёт ощущение сытости, увеличивает умственные и психологические возможности человека, даёт уверенность в себе.</p>",
            contra: "индивидуальная непереносимость, период беременности, лактации"
        },
        {
            title: "Иван-чай c гинкго билоба",
            img_thumb: "img/catalog/cat-028-small.jpg",
            img: "img/catalog/cat-028.jpg",
            description: "<p><span class='f-bold'>ГИНКГО БИЛОБА</span> расширяет кровеносные сосуды, повышая прочность и эластичность их стенок. Снижает уровень холестерина, избавляет от отеков, нормализует метаболические процессы. Благоприятно воздействует на мышление и память человека. Снижает тромбообразование. Является сильным антиоксидантом.</p>",
            contra: "индивидуальная непереносимость, период беременности, лактации, детям до 12-ти лет"
        },
        {
            title: "Иван-чай с цетрарией (исландский мох)",
            img_thumb: "img/catalog/cat-029-small.jpg",
            img: "img/catalog/cat-029.jpg",
            description: "<p><span class='f-bold'>ИСЛАНДСКИЙ МОХ (цетрария исландская)</span> – одно из наиболее эффективных натуральных средств для лечения кашля, простуды, повышения иммунитета, лечения воспалительных заболеваний. Обладает противовоспалительным, иммуномодулирующим, антиоксидантным, противовирусным, антимикробным, желчегонным, обволакивающим, онкопротекторным действием.</p>" +
            "<p>Рекомендована при истощении организма для восстановления тонуса.</p>",
            contra: "Не имеет возрастных ограничений и противопоказаний"
        },
        {
            title: "Иван-чай с сабельником",
            img_thumb: "img/catalog/cat-030-small.jpg",
            img: "img/catalog/cat-030.jpg",
            description: "<p><span class='f-bold'>САБЕЛЬНИК</span> обладает противовоспалительным, болеутоляющим и регенерирующим действием. Используется в качестве общеукрепляющего средства при повышенных нагрузках на опорно-двигательный аппарат. Применяется в комплексном лечении костно-суставных заболеваний (артриты, артрозы, подагра, остеохондроз и др.)</p>",
            contra: "индивидуальная непереносимость, период беременности, лактации, детям до 12-ти лет"
        },
        {
            title: "Иван-чай с девясилом",
            img_thumb: "img/catalog/cat-031-small.jpg",
            img: "img/catalog/cat-031.jpg",
            description: "<p><span class='f-bold'>ДЕВЯСИЛ</span> используется как средство, снимающее воспалительные процессы, убивающее грибковые, бактериальные инфекции. Девясил способен остановить кровотечение и аллергические реакции. Обладает отхаркивающим, мочегонным и вяжущим действием. Признанное антигельминтное средство. Применяется и при болезнях дыхательных путей.</p>",
            contra: "индивидуальная непереносимость, период беременности, лактации"
        },
        {
            title: "Иван-чай с эстрагоном",
            img_thumb: "img/catalog/cat-032-small.jpg",
            img: "img/catalog/cat-032.jpg",
            description: "<p><span class='f-bold'>ЭСТРАГОН</span> улучшает образование желудочного сока, нормализует аппетит. Обладает общеукрепляющим и мочегонным действием; нормализует сон, обладает антигельминтным действием.</p>",
            contra: "индивидуальная непереносимость, период беременности, лактации"
        },
        {
            title: "Иван-чай с таволгой",
            img_thumb: "img/catalog/cat-033-small.jpg",
            img: "img/catalog/cat-033.jpg",
            description: "<p><span class='f-bold'>ТАВОЛГА</span> (лабазник вязолистый) применяется при лечении простуды, язвы желудка, для снятия усталости и нормализации ночного сна. Уменьшает хронические боли и воспаления суставов, улучшает пищеварение.</p>" +
            "<p>Снижает артериальное давление, стимулирует мозговое кровообращение, улучшает память и внимание. Повышает работоспособность. Способна уменьшать размер и количество опухолей.</p>",
            contra: "индивидуальная непереносимость, период беременности, лактации"
        },
        {
            title: "Иван-чай Троицкий",
            img_thumb: "img/catalog/cat-034-small.jpg",
            img: "img/catalog/cat-034.jpg",
            description: "<p><span class='f-bold'>Молодые листья берёзы</span> препятствуют солеотложению в суставах. Используют при воспалительных заболеваниях почек и мочевого пузыря. Являются самым доступным и эффективным мочегонным средством, снижая отёки, уменьшая одышку. Улучшают кровообращение, растворяют тромбы. Помогают при простуде, заболевании верхних дыхательных путей. Антигельминтное средство.</p>",
            contra: "индивидуальная непереносимость, период беременности, лактации"
        },
        {
            title: "Иван-чай Рождественский",
            img_thumb: "img/catalog/cat-035-small.jpg",
            img: "img/catalog/cat-035.jpg",
            description: "<span style='color: red'>«В этот светлый праздник»</span><br><br>" +
            "В этот светлый праздник –<br>" +
            "Праздник Рождества<br>" +
            "Мы друг другу скажем<br>" +
            "Теплые слова.<br><br>" +
            "Тихо снег ложится:<br>" +
            "За окном зима,<br>" +
            "Чудо здесь свершится<br>"+
            "И зажжёт сердца.<br><br>" +
            "Пусть улыбки ваши<br>" +
            "В этот дивный день<br>" +
            "Будут счастьем нашим<br>" +
            "И подарком всем.<br><br>" +
            "Льются звуки жизни,<br>" +
            "Счастья и добра,<br>" +
            "Озаряя мысли<br>" +
            "Светом Рождества.<br><br>" +
            "Автор: Алексей Хомяков",
            contra: "индивидуальная непереносимость, период беременности, лактации"
        },
        {
            title: "Иван-чай Пасхальный",
            img_thumb: "img/catalog/cat-036-small.jpg",
            img: "img/catalog/cat-036.jpg",
            description: "<span style='color: red'>Под напев молитв пасхальных...</span><br><br>" +
            "Под напев молитв пасхальных<br>" +
            "И под звон колоколов<br>" +
            "К нам летит весна из дальних,<br>" +
            "Из полуденных краев.<br>" +
            "В зеленеющем уборе<br>" +
            "Млеют темные леса.<br>" +
            "Небо блещет – точно море,<br>" +
            "Море – точно небеса.<br>" +
            "Сосны в бархате зеленом,<br>" +
            "И душистая смола<br>" +
            "По чешуйчатым колоннам<br>" +
            "Янтарями потекла.<br>" +
            "И в саду у нас сегодня<br>" +
            "Я заметил, как тайком<br>" +
            "Похристосовался ландыш<br>" +
            "С белокрылым мотыльком!<br><br>" +
            "Автор: К. М. Фофанов <br>1878 г.",
            contra: "индивидуальная непереносимость, период беременности, лактации"
        },
        {
            title: "Благо (Иван-чай с курильским чаем и черникой)",
            img_thumb: "img/catalog/cat-037-small.jpg",
            img: "img/catalog/cat-037.jpg",
            description: "<p><span class='f-bold'>КУРИЛЬСКИЙ ЧАЙ</span> используют вместо обычного чая. Применение напитка помогает при расстройствах нервной системы (депрессии, неврозы, нервные истощения), желудочно-кишечных инфекциях, дисбактериозе, сахарном диабете, гинекологических заболеваниях. Снижает, стабилизирует кровяное давление.</p>" +
            "<p><span class='f-bold'>ЧЕРНИКА</span> снимает усталость глаз, улучшает зрение, снижает уровень сахара в крови, богата витаминами В1, С и РР. Повышает уровень гемоглобина, очищает печень, регулирует функцию поджелудочной железы, благотворно влияет на желудок.</p>",
            contra: "индивидуальная непереносимость, период беременности, лактации"
        },
        {
            title: "Иван-чай Разнотравие",
            img_thumb: "img/catalog/cat-038-small.jpg",
            img: "img/catalog/cat-038.jpg",
            description: "<p><span class='f-bold'>РАЗНОТРАВИЕ</span> – это лето севера в одной чайной упаковке. Разнотравие – это объединение для иммунитета и ярких дней Иван чая с: листом малины, шиповником, клевером, рябиной, чёрной смородиной, ромашкой, зверобоем, душицей, черёмухой, таволгой, лепестками садовой розы и молодых листьев берёзы (освященных на Троицын день).</p>" +
            "<p><span class='f-bold'>ЛИСТ МАЛИНЫ</span> незаменимое средство при простуде. <span class='f-bold'>ШИПОВНИК</span> - кладезь витаминов. <span class='f-bold'>КЛЕВЕР</span> благотворно влияет на сердечно–сосудистую систему. <span class='f-bold'>ЛИСТ БЕРЁЗЫ</span> снимает отёки, улучшает кровообращение. <span class='f-bold'>РЯБИНА</span> предотвращает стрессы. <span class='f-bold'>СМОРОДИНА</span> стабилизирует давление. <span class='f-bold'>РОМАШКА</span> расслабляет. <span class='f-bold'>ДУШИЦА</span> успокаивает нервную систему. <span class='f-bold'>ЧЕРЁМУХА</span> замедляет процессы старения организма. <span class='f-bold'>ТАВОЛГА</span> помогает снять усталость. <span class='f-bold'>ИВАН-ЧАЙ</span> улучшает обмен веществ. <span class='f-bold'>ЛЕПЕСТКИ РОЗЫ</span> богаты эфирными маслами, которые придают напитку тонкий аромат и приятный вкус.</p>",
            contra: "индивидуальная непереносимость, период беременности, лактации"
        },
        {
            title: "Иван-чай Любимый",
            img_thumb: "img/catalog/cat-039-small.jpg",
            img: "img/catalog/cat-039.jpg",
            description: "<p><span class='f-bold'>МЕЛИССА</span> и <span class='f-bold'>МЯТА</span> успокаивают, <span class='f-bold'>РОМАШКА</span> расслабляет, <span class='f-bold'>ШИПОВНИК</span> наполняет витаминами, <span class='f-bold'>СМОРОДИНА</span> стабилизирует давление, нормализует работу почек и повышает гемоглобин, <span class='f-bold'>ЛИПОВЫЙ ЦВЕТ</span> помогает бороться с инфекциями, а также придает дивный аромат. Великолепно укрепляет и оздоравливает весь организм, не вызывая при этом негативных побочных явлений.</p>" +
            "<p>Чай укрепляет иммунитет, является вкусной профилактикой простудных заболеваний и незаменим в осенне-весенний период. Высокое содержание витаминов А и С делают его средством сохранения молодости.</p>",
            contra: "индивидуальная непереносимость, период беременности, лактации"
        },
        {
            title: "Иван-чай Соловьиный сад",
            img_thumb: "img/catalog/cat-040-small.jpg",
            img: "img/catalog/cat-040.jpg",
            description: "<p><span class='f-bold'>ВИШНЯ</span> – природный антиоксидант с противовоспалительными свойствами, препятствует образованию тромбов, нормализует деятельность сердечно-сосудистой системы, придает тонкий аромат. <span class='f-bold'>ЧЕРЕМУХА</span> содержит витамины С и Е, эфирные масла, органические кислоты. <span class='f-bold'>КОРИЦА</span> способствует похудению, снижает уровень холестерина и риск образования тромбов, улучшает мозговую деятельность.</p>",
            contra: "индивидуальная непереносимость, период беременности, лактации"
        },
        {
            title: "Иван-чай Яблочный спас",
            img_thumb: "img/catalog/cat-041-small.jpg",
            img: "img/catalog/cat-041.jpg",
            description: "<p>Пряный напиток с оригинальным ароматом и пикантным вкусом. <span class='f-bold'>МЯТА</span> успокаивает. <span class='f-bold'>ГВОЗДИКА</span> одновременно тонизирует и снимает спазмы, содержит провитамин А (бета-каротин), витамины группы В (В1, В2, В3 или РР, В4, В6, В9), витамин С (аскорбиновая кислота), витамин Е и витамин К, полезные минералы: калий, кальций, натрий, магний, фосфор, железо, марганец, медь, селен, цинк. <span class='f-bold'>КОРИЦА</span> снижает аппетит. <span class='f-bold'>ЯБЛОКИ</span> благотворно влияют на нервную систему, иммунитет, работу памяти и интеллектуальные способности, понижают давление и помогают при тромбофлебите.</p>",
            contra: "индивидуальная непереносимость, период беременности, лактации"
        },
        {
            title: "Иван-чай Согревающий",
            img_thumb: "img/catalog/cat-042-small.jpg",
            img: "img/catalog/cat-042.jpg",
            description: "<p>Чай с <span class='f-bold'>чабрецом, имбирем и лимоном</span> – чай, способный дарить тепло и объединять сердца в холодной период сказки, сказки жизни, и не важно зима это или ветреный летний вечер. Такое сочетание ускоряет метаболизм, тонизирует и стимулирует кровообращение, способствует очищению крови, помогает избавится от токсинов и шлаков. Яркая нота — лимон.</p>",
            contra: "индивидуальная непереносимость, период беременности, лактации"
        },
        {
            title: "Иван-чай Праздничный",
            img_thumb: "img/catalog/cat-043-small.jpg",
            img: "img/catalog/cat-043.jpg",
            description: "<p><span class='f-bold'>ЯБЛОКИ</span> положительно влияют на обменные процессы в организме, улучшают пищеварение, благотворно влияют на нервную систему и работу памяти. <span class='f-bold'>ИМБИРЬ</span>, натуральный источник витаминов и минералов. Регулирует вес, наполняет энергией, повышает жизненный тонус, укрепляет память. <span class='f-bold'>КОРИЦА</span> в напитке ускоряет метаболизм, тонизирует.</p>",
            contra: "индивидуальная непереносимость, период беременности, лактации"
        },    ];

    const tbodyTemplate = "        <tr>\n" +
        "            <td>\n" +
        "                <a class=\"d-block\" data-toggle=\"collapse\" href=\"#{id}\" role=\"button\" aria-expanded=\"false\" aria-controls=\"{id}\">\n" +
        "                    {title}\n" +
        "                </a>\n" +
        "                <div class=\"collapse\" id=\"{id}\">\n" +
        "                    <div class=\"card card-body\">\n" +
        "                        <div class=\"row\">\n" +
        "                            <div class=\"col-12 col-lg-2\">\n" +
        "                                <a href=\"{img}\" data-toggle=\"lightbox\" class=\"d-block p-10px\">\n" +
        "                                    <img class=\"catalog-item-thumbnale img-thumbnail d-block mx-auto\" src=\"{img_thumb}\" alt=\"{title}\">\n" +
        "                                </a>\n" +
        "                            </div>\n" +
        "                            <div class=\"col-12 col-lg-10\">\n" +
        "                                {description}\n" +
        "                                <span class=\"catalog-text-contra\"><span class=\"f-bold\">Противопоказания</span>: {contra}</span>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </td>\n" +
        "        </tr>\n"

    const teaTable = $("#teaTable");
    for (let i = 0; i < IvanTeaCatalogItems.length; i++) {
        const v = IvanTeaCatalogItems[i];
        v.id = "tea" + i;
        teaTable.append(nano(tbodyTemplate, v));
    }
}
