function getChartColorsArray(e) {
    if (null !== document.getElementById(e)) {
        var r = document.getElementById(e).getAttribute("data-colors");
        if (r)
            return (r = JSON.parse(r)).map(function (e) {
                var r = e.replace(" ", "");
                return -1 === r.indexOf(",")
                    ? getComputedStyle(document.documentElement).getPropertyValue(r) || r
                    : 2 == (e = e.split(",")).length
                        ? "rgba(" +
                        getComputedStyle(document.documentElement).getPropertyValue(e[0]) +
                        "," +
                        e[1] +
                        ")"
                        : r;
            });
        console.warn("data-colors atributes not found on", e);
    }
}
var options1,
    chart1,
    options,
    chart,
    areachartmini1Colors = getChartColorsArray("mini-chart-1"),
    areachartmini2Colors =
        (areachartmini1Colors &&
            ((options1 = {
                series: [{ data: [25, 66, 41, 89, 63, 25, 44, 12] }],
                chart: {
                    type: "line",
                    width: 80,
                    height: 30,
                    sparkline: { enabled: !0 },
                },
                colors: areachartmini1Colors,
                stroke: { curve: "smooth", width: 2.3 },
                tooltip: {
                    fixed: { enabled: !1 },
                    x: { show: !1 },
                    y: {
                        title: {
                            formatter: function (e) {
                                return "";
                            },
                        },
                    },
                    marker: { show: !1 },
                },
            }),
                (chart1 = new ApexCharts(
                    document.querySelector("#mini-chart-1"),
                    options1
                )).render()),
            getChartColorsArray("mini-chart-2")),
    areachartmini3Colors =
        (areachartmini2Colors &&
            ((options1 = {
                series: [{ data: [50, 15, 35, 62, 23, 56, 44, 12] }],
                chart: {
                    type: "line",
                    width: 80,
                    height: 30,
                    sparkline: { enabled: !0 },
                },
                colors: areachartmini2Colors,
                stroke: { curve: "smooth", width: 2.3 },
                tooltip: {
                    fixed: { enabled: !1 },
                    x: { show: !1 },
                    y: {
                        title: {
                            formatter: function (e) {
                                return "";
                            },
                        },
                    },
                    marker: { show: !1 },
                },
            }),
                (chart1 = new ApexCharts(
                    document.querySelector("#mini-chart-2"),
                    options1
                )).render()),
            getChartColorsArray("mini-chart-3")),
    areachartmini4Colors =
        (areachartmini3Colors &&
            ((options1 = {
                series: [{ data: [25, 35, 35, 89, 63, 25, 44, 12] }],
                chart: {
                    type: "line",
                    width: 80,
                    height: 30,
                    sparkline: { enabled: !0 },
                },
                colors: areachartmini3Colors,
                stroke: { curve: "smooth", width: 2.3 },
                tooltip: {
                    fixed: { enabled: !1 },
                    x: { show: !1 },
                    y: {
                        title: {
                            formatter: function (e) {
                                return "";
                            },
                        },
                    },
                    marker: { show: !1 },
                },
            }),
                (chart1 = new ApexCharts(
                    document.querySelector("#mini-chart-3"),
                    options1
                )).render()),
            getChartColorsArray("mini-chart-4")),
    areachartmini5Colors =
        (areachartmini4Colors &&
            ((options1 = {
                series: [{ data: [50, 15, 20, 34, 23, 56, 65, 41] }],
                chart: {
                    type: "line",
                    width: 80,
                    height: 30,
                    sparkline: { enabled: !0 },
                },
                colors: areachartmini4Colors,
                stroke: { curve: "smooth", width: 2.3 },
                tooltip: {
                    fixed: { enabled: !1 },
                    x: { show: !1 },
                    y: {
                        title: {
                            formatter: function (e) {
                                return "";
                            },
                        },
                    },
                    marker: { show: !1 },
                },
            }),
                (chart1 = new ApexCharts(
                    document.querySelector("#mini-chart-4"),
                    options1
                )).render()),
            getChartColorsArray("mini-chart-5")),
    areachartmini6Colors =
        (areachartmini5Colors &&
            ((options1 = {
                series: [{ data: [45, 53, 24, 89, 63, 60, 36, 50] }],
                chart: {
                    type: "line",
                    width: 80,
                    height: 30,
                    sparkline: { enabled: !0 },
                },
                colors: areachartmini5Colors,
                stroke: { curve: "smooth", width: 2.3 },
                tooltip: {
                    fixed: { enabled: !1 },
                    x: { show: !1 },
                    y: {
                        title: {
                            formatter: function (e) {
                                return "";
                            },
                        },
                    },
                    marker: { show: !1 },
                },
            }),
                (chart1 = new ApexCharts(
                    document.querySelector("#mini-chart-5"),
                    options1
                )).render()),
            getChartColorsArray("mini-chart-6")),
    areachartmini7Colors =
        (areachartmini6Colors &&
            ((options1 = {
                series: [{ data: [50, 15, 35, 62, 23, 56, 44, 12] }],
                chart: {
                    type: "line",
                    width: 80,
                    height: 30,
                    sparkline: { enabled: !0 },
                },
                colors: areachartmini6Colors,
                stroke: { curve: "smooth", width: 2.3 },
                tooltip: {
                    fixed: { enabled: !1 },
                    x: { show: !1 },
                    y: {
                        title: {
                            formatter: function (e) {
                                return "";
                            },
                        },
                    },
                    marker: { show: !1 },
                },
            }),
                (chart1 = new ApexCharts(
                    document.querySelector("#mini-chart-6"),
                    options1
                )).render()),
            getChartColorsArray("mini-chart-7")),
    areachartmini8Colors =
        (areachartmini7Colors &&
            ((options1 = {
                series: [{ data: [50, 15, 20, 34, 23, 56, 65, 41] }],
                chart: {
                    type: "line",
                    width: 80,
                    height: 30,
                    sparkline: { enabled: !0 },
                },
                colors: areachartmini7Colors,
                stroke: { curve: "smooth", width: 2.3 },
                tooltip: {
                    fixed: { enabled: !1 },
                    x: { show: !1 },
                    y: {
                        title: {
                            formatter: function (e) {
                                return "";
                            },
                        },
                    },
                    marker: { show: !1 },
                },
            }),
                (chart1 = new ApexCharts(
                    document.querySelector("#mini-chart-7"),
                    options1
                )).render()),
            getChartColorsArray("mini-chart-8")),
    dealTypeChartsColors =
        (areachartmini8Colors &&
            ((options1 = {
                series: [{ data: [45, 53, 24, 89, 63, 60, 36, 50] }],
                chart: {
                    type: "line",
                    width: 80,
                    height: 30,
                    sparkline: { enabled: !0 },
                },
                colors: areachartmini8Colors,
                stroke: { curve: "smooth", width: 2.3 },
                tooltip: {
                    fixed: { enabled: !1 },
                    x: { show: !1 },
                    y: {
                        title: {
                            formatter: function (e) {
                                return "";
                            },
                        },
                    },
                    marker: { show: !1 },
                },
            }),
                (chart1 = new ApexCharts(
                    document.querySelector("#mini-chart-8"),
                    options1
                )).render()),
            getChartColorsArray("deal-type-charts")),
    swiper =
        (dealTypeChartsColors &&
            ((options = {
                series: [
                    { name: "Ethereum", data: [80, 50, 30, 40, 100, 20] },
                    { name: "Artwork Sold", data: [20, 30, 40, 80, 20, 80] },
                    { name: "Cancelation", data: [44, 76, 78, 13, 43, 10] },
                ],
                chart: {
                    height: 270,
                    type: "radar",
                    dropShadow: { enabled: !0, blur: 1, left: 1, top: 1 },
                    toolbar: { show: !1 },
                },
                stroke: { width: 2 },
                fill: { opacity: 0.2 },
                legend: {
                    show: !1,
                    fontWeight: 500,
                    offsetX: 0,
                    offsetY: -8,
                    markers: { width: 8, height: 8, radius: 6 },
                    itemMargin: { horizontal: 10, vertical: 0 },
                },
                markers: { size: 0 },
                colors: dealTypeChartsColors,
                xaxis: { categories: ["2016", "2017", "2018", "2019", "2020", "2021"] },
            }),
                (chart = new ApexCharts(
                    document.querySelector("#deal-type-charts"),
                    options
                )).render()),
            new Swiper(".marketplace-swiper", {
                loop: !0,
                slidesPerView: 1,
                spaceBetween: 10,
                pagination: { el: ".swiper-pagination", clickable: !0 },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                autoplay: { delay: 2500, disableOnInteraction: !1 },
                breakpoints: {
                    640: { slidesPerView: 2, spaceBetween: 20 },
                    768: { slidesPerView: 2, spaceBetween: 24 },
                    1445: { slidesPerView: 3, spaceBetween: 24 },
                },
            })),
    swiper = new Swiper(".collection-slider", {
        loop: !0,
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: { el: ".swiper-pagination", clickable: !0 },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: { delay: 2500, disableOnInteraction: !1 },
    }),

    barchartColors = getChartColorsArray("market-overview"),
    linechartBasicColors =
        (barchartColors &&
            ((options = {
                series: [
                    {
                        name: "Absents",
                        data: [15.23, 24.15, 14.67, 10.00, 9.00, 1.00, 3.00],
                    },
                    {
                        name: "Presents",
                        data: [84.77, 75.85, 85.33, 90.00, 91.00, 99.00, 97.00],
                    },
                ],
                chart: { type: "bar", height: 260, stacked: !0, toolbar: { show: !1 } },
                stroke: { colors: "#000" },
                plotOptions: { bar: { columnWidth: "20%", borderRadius: [4, 4] } },
                colors: barchartColors,
                fill: { opacity: 1 },
                dataLabels: { enabled: !1, textAnchor: "top" },
                yaxis: {
                    labels: {
                        show: !1,
                        formatter: function (e) {
                            return e.toFixed(0) + "%";
                        },
                    },
                },
                legend: { position: "top", horizontalAlign: "right" },
                xaxis: {
                    categories: ["Effective Teaching Strategies Training", "Technology Integration Workshop", "Research Skills Seminar", "Inclusive Teaching Training", "Communication Skills Workshop", "Leadership and Management Seminar", "Professional Networking Training"],
                    labels: { rotate: -90 },
                },
            }),
                (chart = new ApexCharts(
                    document.querySelector("#market-overview"),
                    options
                )).render()),
            getChartColorsArray("line_chart_basic")),
            
    worldemapmarkers =
        (linechartBasicColors &&
            ((options = {
                series: [
                    { name: "Artwork", data: [10, 41, 35, 51, 49, 62, 69, 91, 148] },
                    { name: "Auction", data: [40, 120, 83, 45, 31, 74, 35, 34, 78] },
                    { name: "Creators", data: [95, 35, 20, 130, 64, 22, 43, 45, 31] },
                ],
                chart: {
                    height: 350,
                    type: "line",
                    zoom: { enabled: !1 },
                    toolbar: { show: !1 },
                },
                dataLabels: { enabled: !1 },
                stroke: { curve: "smooth", width: 3 },
                colors: linechartBasicColors,
                xaxis: {
                    categories: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                    ],
                },
            }),
                (chart = new ApexCharts(
                    document.querySelector("#line_chart_basic"),
                    options
                )).render()),
            "");
function loadCharts() {
    var e = getChartColorsArray("creators-by-locations");
    e &&
        ((document.getElementById("creators-by-locations").innerHTML = ""),
            (worldemapmarkers = ""),
            (worldemapmarkers = new jsVectorMap({
                map: "world_merc",
                selector: "#creators-by-locations",
                zoomOnScroll: !1,
                zoomButtons: !1,
                selectedMarkers: [0, 5],
                regionStyle: {
                    initial: {
                        stroke: "#9599ad",
                        strokeWidth: 0.25,
                        fill: e[0],
                        fillOpacity: 1,
                    },
                },
                markersSelectable: !0,
                markers: [
                    {
                        name: "United States",
                        coords: [37.0902, 95.7129],
                        style: { image: "assets/images/flags/us.svg" },
                    },
                    {
                        name: "Russia",
                        coords: [61.524, 105.3188],
                        style: { image: "assets/images/flags/russia.svg" },
                    },
                    {
                        name: "Spain",
                        coords: [40.4637, 3.7492],
                        style: { image: "assets/images/flags/spain.svg" },
                    },
                    {
                        name: "Italy",
                        coords: [41.8719, 12.5674],
                        style: { image: "assets/images/flags/italy.svg" },
                    },
                    {
                        name: "Germany",
                        coords: [51.1657, 10.4515],
                        style: { image: "assets/images/flags/germany.svg" },
                    },
                ],
                markerStyle: { initial: { fill: e[1] }, selected: { fill: e[2] } },
                labels: {
                    markers: {
                        render: function (e) {
                            return e.name;
                        },
                    },
                },
            })));
}
(window.onresize = function () {
    setTimeout(() => {
        loadCharts();
    }, 0);
}),
    loadCharts();
