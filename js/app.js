const CatalogItems = [
    {
        title: "Иван-чай с малиной",
        img_thumb: "img/catalog/ph-0001-small.jpg",
        img: "img/catalog/ph-0001.jpg",
        description: "Описание"
    },
    {
        title: "Иван-чай с липой",
        img_thumb: "img/catalog/ph-0002-small.jpg",
        img: "img/catalog/ph-0002.jpg",
        description: "Описание"
    },
    {
        title: "Иван-чай с голубикой и васильком",
        img_thumb: "img/catalog/ph-0003-small.jpg",
        img: "img/catalog/ph-0003.jpg",
        description: "Описание"
    },
    {
        title: "Иван-чай ромашковый",
        img_thumb: "img/catalog/ph-0004-small.jpg",
        img: "img/catalog/ph-0004.jpg",
        description: "Описание"
    },
    {
        title: "Иван-чай черничный",
        img_thumb: "img/catalog/ph-0005-small.jpg",
        img: "img/catalog/ph-0005.jpg",
        description: "Описание"
    },
    {
        title: "Благо (Иван-чай с курильским чаем и черникой)",
        img_thumb: "img/catalog/ph-0006-small.jpg",
        img: "img/catalog/ph-0006.jpg",
        description: "Описание"
    },
    {
        title: "Иван-чай с яблоком",
        img_thumb: "img/catalog/ph-0007-small.jpg",
        img: "img/catalog/ph-0007.jpg",
        description: "Описание"
    },
    {
        title: "Иван-чай с сабельником",
        img_thumb: "img/catalog/ph-0008-small.jpg",
        img: "img/catalog/ph-0008.jpg",
        description: "Описание"
    },
    {
        title: "Иван-чай со зверобоем",
        img_thumb: "img/catalog/ph-0009-small.jpg",
        img: "img/catalog/ph-0009.jpg",
        description: "Описание"
    },
    {
        title: "Иван-чай с кедровым орехом и брусникой",
        img_thumb: "img/catalog/ph-0010-small.jpg",
        img: "img/catalog/ph-0010.jpg",
        description: "Описание"
    },
    {
        title: "Иван-чай смородиновый",
        img_thumb: "img/catalog/ph-0011-small.jpg",
        img: "img/catalog/ph-0011.jpg",
        description: "Описание"
    },
    {
        title: "Иван-чай с цетрарией (исландский мох)",
        img_thumb: "img/catalog/ph-0012-small.jpg",
        img: "img/catalog/ph-0012.jpg",
        description: "Описание"
    },
    {
        title: "Иван-чай с лепестками розы",
        img_thumb: "img/catalog/ph-0013-small.jpg",
        img: "img/catalog/ph-0013.jpg",
        description: "Описание"
    },
    {
        title: "Иван-чай Разнотравие",
        img_thumb: "img/catalog/ph-0014-small.jpg",
        img: "img/catalog/ph-0014.jpg",
        description: "Описание"
    },
    {
        title: "Иван-чай с девясилом",
        img_thumb: "img/catalog/ph-0015-small.jpg",
        img: "img/catalog/ph-0015.jpg",
        description: "Описание"
    },
]

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
    var template = $("#catalog-item-template").html();
    var catalogRow = $("#catalog-row");
    for (var i = 0; i < CatalogItems.length; i++) {
        var v = CatalogItems[i];
        catalogRow.append(nano(template, v));
    }
}
