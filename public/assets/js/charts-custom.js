(function() {
	"use strict";

    // Basic Line Chart
    const basicLineChart = document.getElementById("basicLineChart");
    if (basicLineChart) {
        var options = {
            series: [
                {
                    name: "Desktops",
                    data: [0, 41, 35, 51, 49, 62, 69, 91, 148]
                }
            ],
            chart: {
                height: 350,
                type: "line",
                zoom: {
                    enabled: false
                },
                toolbar: {
                    show: true
                }
            },
            dataLabels: {
                enabled: false
            },
            colors: [
                "#605DFF"
            ],
            stroke: {
                curve: "straight"
            },
            title: {
                text: "Product Trends by Month",
                align: "left",
                offsetX: -9,
                style: {
                    fontWeight: '500',
                    fontSize: '14px',
                    color: '#64748B'
                }
            },
            grid: {
                show: true,
                borderColor: "#ECEEF2"
            },
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
                    "Sep"
                ],
                axisTicks: {
                    show: false,
                    color: '#ECEEF2'
                },
                axisBorder: {
                    show: false,
                    color: '#ECEEF2'
                },
                labels: {
                    show: true,
                    style: {
                        colors: "#8695AA",
                        fontSize: "12px"
                    }
                }
            },
            yaxis: {
                tickAmount: 5,
                max: 150,
                min: 0,
                labels: {
                    show: true,
                    style: {
                        colors: "#64748B",
                        fontSize: "12px"
                    }
                },
                axisBorder: {
                    show: false,
                    color: '#ECEEF2'
                },
                axisTicks: {
                    show: false,
                    color: '#ECEEF2'
                }
            },
            legend: {
                show: true,
                position: 'top',
                fontSize: '12px',
                horizontalAlign: 'center',
                itemMargin: {
                    horizontal: 8,
                    vertical: 0
                },
                labels: {
                    colors: '#64748B'
                },
                markers: {
                    size: 6,
                    offsetX: -2,
                    offsetY: -.5,
                    shape: 'circle'
                }
            }
        };
        var chart = new ApexCharts(document.querySelector("#basicLineChart"), options);
        chart.render();
    }

    // Gradient Line Chart
    const gradientLineChart = document.getElementById("gradientLineChart");
    if (gradientLineChart) {
        var options = {
            series: [
                {
                    name: "Likes",
                    data: [0, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
                }
            ],
            chart: {
                height: 350,
                type: "line",
                toolbar: {
                    show: true
                }
            },
            stroke: {
                width: 7,
                curve: "smooth"
            },
            xaxis: {
                type: "datetime",
                categories: [
                    "1/11/2000",
                    "2/11/2000",
                    "3/11/2000",
                    "4/11/2000",
                    "5/11/2000",
                    "6/11/2000",
                    "7/11/2000",
                    "8/11/2000",
                    "9/11/2000",
                    "10/11/2000",
                    "11/11/2000",
                    "12/11/2000",
                    "1/11/2001",
                    "2/11/2001",
                    "3/11/2001",
                    "4/11/2001",
                    "5/11/2001",
                    "6/11/2001"
                ],
                axisTicks: {
                    show: false,
                    color: '#ECEEF2'
                },
                axisBorder: {
                    show: false,
                    color: '#ECEEF2'
                },
                labels: {
                    show: true,
                    style: {
                        colors: "#8695AA",
                        fontSize: "12px"
                    }
                }
            },
            grid: {
                show: true,
                borderColor: "#ECEEF2"
            },
            title: {
                text: "Social Media",
                align: "left",
                offsetX: -9,
                style: {
                    fontWeight: '500',
                    fontSize: '14px',
                    color: '#64748B'
                }
            },
            fill: {
                type: "gradient",
                gradient: {
                    shade: "dark",
                    gradientToColors: ["#FDD835"],
                    shadeIntensity: 1,
                    type: "horizontal",
                    opacityFrom: 1,
                    opacityTo: 1,
                    // stops: [0, 100, 100, 100]
                }
            },
            markers: {
                size: 4,
                colors: ["#FFA41B"],
                strokeColors: "#fff",
                strokeWidth: 2,
                hover: {
                    size: 7
                }
            },
            yaxis: {
                labels: {
                    show: true,
                    style: {
                        colors: "#64748B",
                        fontSize: "12px"
                    }
                },
                axisBorder: {
                    show: false,
                    color: '#ECEEF2'
                },
                axisTicks: {
                    show: false,
                    color: '#ECEEF2'
                }
            }
        };
        var chart = new ApexCharts(document.querySelector("#gradientLineChart"), options);
        chart.render();
    }

    // Dashed Line Chart
    const dashedLineChart = document.getElementById("dashedLineChart");
    if (dashedLineChart) {
        var options = {
            series: [
                {
                    name: "Session Duration",
                    data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
                },
                {
                    name: "Page Views",
                    data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
                },
                {
                    name: "Total Visits",
                    data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
                }
            ],
            chart: {
                height: 350,
                type: "line",
                toolbar: {
                    show: true
                }
            },
            colors: [
                "#796df6", "#00cae3", "#605DFF"
            ],
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: 5,
                curve: "straight",
                dashArray: [0, 8, 5]
            },
            title: {
                // text: "Page Statistics",
                // align: "left",
                // offsetX: -9,
                // style: {
                //     fontWeight: '500',
                //     fontSize: '14px',
                //     color: '#64748B'
                // }
            },
            legend: {
                show: true,
                position: 'top',
                fontSize: '12px',
                horizontalAlign: 'left',
                itemMargin: {
                    horizontal: 8,
                    vertical: 0
                },
                labels: {
                    colors: '#64748B'
                },
                markers: {
                    size: 6,
                    offsetX: -2,
                    offsetY: -.5,
                    shape: 'circle'
                }
            },
            markers: {
                size: 0,
                hover: {
                    sizeOffset: 6
                }
            },
            xaxis: {
                axisTicks: {
                    show: false,
                    color: '#ECEEF2'
                },
                axisBorder: {
                    show: false,
                    color: '#ECEEF2'
                },
                labels: {
                    show: true,
                    style: {
                        colors: "#8695AA",
                        fontSize: "12px"
                    }
                },
                categories: [
                    "01 Jan",
                    "02 Jan",
                    "03 Jan",
                    "04 Jan",
                    "05 Jan",
                    "06 Jan",
                    "07 Jan",
                    "08 Jan",
                    "09 Jan",
                    "10 Jan",
                    "11 Jan",
                    "12 Jan"
                ]
            },
            tooltip: {
                y: [
                    {
                        title: {
                            formatter: function(val) {
                                return val + " (mins) ";
                            }
                        }
                    },
                    {
                        title: {
                            formatter: function(val) {
                                return val + " per session ";
                            }
                        }
                    },
                    {
                        title: {
                            formatter: function(val) {
                                return val + " ";
                            }
                        }
                    }
                ]
            },
            grid: {
                show: true,
                borderColor: "#ECEEF2"
            },
            yaxis: {
                tickAmount: 5,
                max: 110,
                min: 0,
                labels: {
                    show: true,
                    style: {
                        colors: "#64748B",
                        fontSize: "12px"
                    }
                },
                axisBorder: {
                    show: false,
                    color: '#ECEEF2'
                },
                axisTicks: {
                    show: false,
                    color: '#ECEEF2'
                }
            }
        };
        var chart = new ApexCharts(document.querySelector("#dashedLineChart"), options);
        chart.render();
    }

    // Stepline Line Chart
    const steplineLineChart = document.getElementById("steplineLineChart");
    if (steplineLineChart) {
        var options = {
            series: [
                {
                    name: "Stepline Series",
                    data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58]
                }
            ],
            chart: {
                type: "line",
                height: 345
            },
            stroke: {
                curve: "stepline"
            },
            colors: [
                "#605DFF"
            ],
            dataLabels: {
                enabled: false
            },
            title: {
                text: "Stepline Chart",
                align: "left",
                offsetX: -9,
                style: {
                    fontWeight: '500',
                    fontSize: '14px',
                    color: '#64748B'
                }
            },
            markers: {
                hover: {
                    sizeOffset: 4
                }
            },
            xaxis: {
                axisTicks: {
                    show: false,
                    color: '#ECEEF2'
                },
                axisBorder: {
                    show: false,
                    color: '#ECEEF2'
                },
                labels: {
                    show: true,
                    style: {
                        colors: "#8695AA",
                        fontSize: "12px"
                    }
                }
            },
            yaxis: {
                labels: {
                    show: true,
                    style: {
                        colors: "#64748B",
                        fontSize: "12px"
                    }
                },
                axisBorder: {
                    show: false,
                    color: '#ECEEF2'
                },
                axisTicks: {
                    show: false,
                    color: '#ECEEF2'
                }
            },
            grid: {
                show: true,
                borderColor: "#ECEEF2"
            }
        };
        var chart = new ApexCharts(document.querySelector("#steplineLineChart"), options);
        chart.render();
    }

    // Basic Area Chart
    const basicAreaChart = document.getElementById("basicAreaChart");
    if (basicAreaChart) {
        var options = {
            series: [
                {
                    name: "STOCK ABC",
                    data: [
                        8107.85,
                        8128.0,
                        8122.9,
                        8165.5,
                        8340.7,
                        8423.7,
                        8423.5,
                        8514.3,
                        8481.85,
                        8487.7,
                        8506.9,
                        8626.2,
                        8668.95,
                        8602.3,
                        8607.55,
                        8512.9,
                        8496.25,
                        8600.65,
                        8881.1,
                        9340.85
                    ]
                }
            ],
            chart: {
                type: "area",
                height: 350,
                zoom: {
                    enabled: false
                },
                toolbar: {
                    show: true
                }
            },
            dataLabels: {
                enabled: false
            },
            colors: [
                "#605DFF"
            ],
            stroke: {
                curve: "straight"
            },
            title: {
                text: "Fundamental Analysis of Stocks",
                align: "left",
                offsetX: -9,
                style: {
                    fontWeight: '500',
                    fontSize: '14px',
                    color: '#64748B'
                }
            },
            subtitle: {
                text: "Price Movements",
                align: "left",
                offsetX: -9,
                style: {
                    fontWeight: 'normal',
                    fontSize: '13px',
                    color: '#64748B'
                }
            },
            labels: [
                "13 Nov 2024",
                "14 Nov 2024",
                "15 Nov 2024",
                "16 Nov 2024",
                "17 Nov 2024",
                "20 Nov 2024",
                "21 Nov 2024",
                "22 Nov 2024",
                "23 Nov 2024",
                "24 Nov 2024",
                "27 Nov 2024",
                "28 Nov 2024",
                "29 Nov 2024",
                "30 Nov 2024",
                "01 Dec 2024",
                "04 Dec 2024",
                "05 Dec 2024",
                "06 Dec 2024",
                "07 Dec 2024",
                "08 Dec 2024"
            ],
            xaxis: {
                type: "datetime",
                axisTicks: {
                    show: false,
                    color: '#ECEEF2'
                },
                axisBorder: {
                    show: false,
                    color: '#ECEEF2'
                },
                labels: {
                    show: true,
                    style: {
                        colors: "#8695AA",
                        fontSize: "12px"
                    }
                }
            },
            grid: {
                show: true,
                borderColor: "#ECEEF2"
            },
            yaxis: {
                opposite: true,
                labels: {
                    show: true,
                    style: {
                        colors: "#64748B",
                        fontSize: "12px"
                    }
                },
                axisBorder: {
                    show: false,
                    color: '#ECEEF2'
                },
                axisTicks: {
                    show: false,
                    color: '#ECEEF2'
                }
            }
        };
        var chart = new ApexCharts(document.querySelector("#basicAreaChart"), options);
        chart.render();
    }

    // Spline Area Chart
    const splineAreaChart = document.getElementById("splineAreaChart");
    if (splineAreaChart) {
        var options = {
            series: [
                {
                    name: "Trezo",
                    data: [31, 40, 28, 51, 42, 109, 100]
                },
                {
                    name: "Social",
                    data: [11, 32, 45, 32, 34, 52, 41]
                }
            ],
            chart: {
                height: 350,
                type: "area",
                toolbar: {
                    show: true
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: "smooth"
            },
            colors: [
                "#605DFF", "#0f79f3"
            ],
            xaxis: {
                type: "datetime",
                categories: [
                    "2018-09-19T00:00:00.000Z",
                    "2018-09-19T01:30:00.000Z",
                    "2018-09-19T02:30:00.000Z",
                    "2018-09-19T03:30:00.000Z",
                    "2018-09-19T04:30:00.000Z",
                    "2018-09-19T05:30:00.000Z",
                    "2018-09-19T06:30:00.000Z"
                ],
                axisTicks: {
                    show: false,
                    color: '#ECEEF2'
                },
                axisBorder: {
                    show: false,
                    color: '#ECEEF2'
                },
                labels: {
                    show: true,
                    style: {
                        colors: "#8695AA",
                        fontSize: "12px"
                    }
                }
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm"
                }
            },
            yaxis: {
                tickAmount: 5,
                max: 110,
                min: 0,
                labels: {
                    show: true,
                    style: {
                        colors: "#64748B",
                        fontSize: "12px"
                    }
                },
                axisBorder: {
                    show: false,
                    color: '#ECEEF2'
                },
                axisTicks: {
                    show: false,
                    color: '#ECEEF2'
                }
            },
            legend: {
                show: true,
                position: 'top',
                fontSize: '12px',
                horizontalAlign: 'left',
                itemMargin: {
                    horizontal: 8,
                    vertical: 0
                },
                labels: {
                    colors: '#64748B'
                },
                markers: {
                    size: 6,
                    offsetX: -2,
                    offsetY: -.5,
                    shape: 'circle'
                }
            },
            grid: {
                show: true,
                borderColor: "#ECEEF2"
            }
        };
        var chart = new ApexCharts(document.querySelector("#splineAreaChart"), options);
        chart.render();
    }

    // Datetime Area Chart
    const datetimeAreaChart = document.getElementById("datetimeAreaChart");
    if (datetimeAreaChart) {
        var options = {
            series: [
                {
                    name: "Trezo",
                    data: [
                        [1327359600000, 30.95],
                        [1327446000000, 31.34],
                        [1327532400000, 31.18],
                        [1327618800000, 31.05],
                        [1327878000000, 31.0],
                        [1327964400000, 30.95],
                        [1328050800000, 31.24],
                        [1328137200000, 31.29],
                        [1328223600000, 31.85],
                        [1328482800000, 31.86],
                        [1328569200000, 32.28],
                        [1328655600000, 32.1],
                        [1328742000000, 32.65],
                        [1328828400000, 32.21],
                        [1329087600000, 32.35],
                        [1329174000000, 32.44],
                        [1329260400000, 32.46],
                        [1329346800000, 32.86],
                        [1329433200000, 32.75],
                        [1329778800000, 32.54],
                        [1329865200000, 32.33],
                        [1329951600000, 32.97],
                        [1330038000000, 33.41],
                        [1330297200000, 33.27],
                        [1330383600000, 33.27],
                        [1330470000000, 32.89],
                        [1330556400000, 33.1],
                        [1330642800000, 33.73],
                        [1330902000000, 33.22],
                        [1330988400000, 31.99],
                        [1331074800000, 32.41],
                        [1331161200000, 33.05],
                        [1331247600000, 33.64],
                        [1331506800000, 33.56],
                        [1331593200000, 34.22],
                        [1331679600000, 33.77],
                        [1331766000000, 34.17],
                        [1331852400000, 33.82],
                        [1332111600000, 34.51],
                        [1332198000000, 33.16],
                        [1332284400000, 33.56],
                        [1332370800000, 33.71],
                        [1332457200000, 33.81],
                        [1332712800000, 34.4],
                        [1332799200000, 34.63],
                        [1332885600000, 34.46],
                        [1332972000000, 34.48],
                        [1333058400000, 34.31],
                        [1333317600000, 34.7],
                        [1333404000000, 34.31],
                        [1333490400000, 33.46],
                        [1333576800000, 33.59],
                        [1333922400000, 33.22],
                        [1334008800000, 32.61],
                        [1334095200000, 33.01],
                        [1334181600000, 33.55],
                        [1334268000000, 33.18],
                        [1334527200000, 32.84],
                        [1334613600000, 33.84],
                        [1334700000000, 33.39],
                        [1334786400000, 32.91],
                        [1334872800000, 33.06],
                        [1335132000000, 32.62],
                        [1335218400000, 32.4],
                        [1335304800000, 33.13],
                        [1335391200000, 33.26],
                        [1335477600000, 33.58],
                        [1335736800000, 33.55],
                        [1335823200000, 33.77],
                        [1335909600000, 33.76],
                        [1335996000000, 33.32],
                        [1336082400000, 32.61],
                        [1336341600000, 32.52],
                        [1336428000000, 32.67],
                        [1336514400000, 32.52],
                        [1336600800000, 31.92],
                        [1336687200000, 32.2],
                        [1336946400000, 32.23],
                        [1337032800000, 32.33],
                        [1337119200000, 32.36],
                        [1337205600000, 32.01],
                        [1337292000000, 31.31],
                        [1337551200000, 32.01],
                        [1337637600000, 32.01],
                        [1337724000000, 32.18],
                        [1337810400000, 31.54],
                        [1337896800000, 31.6],
                        [1338242400000, 32.05],
                        [1338328800000, 31.29],
                        [1338415200000, 31.05],
                        [1338501600000, 29.82],
                        [1338760800000, 30.31],
                        [1338847200000, 30.7],
                        [1338933600000, 31.69],
                        [1339020000000, 31.32],
                        [1339106400000, 31.65],
                        [1339365600000, 31.13],
                        [1339452000000, 31.77],
                        [1339538400000, 31.79],
                        [1339624800000, 31.67],
                        [1339711200000, 32.39],
                        [1339970400000, 32.63],
                        [1340056800000, 32.89],
                        [1340143200000, 31.99],
                        [1340229600000, 31.23],
                        [1340316000000, 31.57],
                        [1340575200000, 30.84],
                        [1340661600000, 31.07],
                        [1340748000000, 31.41],
                        [1340834400000, 31.17],
                        [1340920800000, 32.37],
                        [1341180000000, 32.19],
                        [1341266400000, 32.51],
                        [1341439200000, 32.53],
                        [1341525600000, 31.37],
                        [1341784800000, 30.43],
                        [1341871200000, 30.44],
                        [1341957600000, 30.2],
                        [1342044000000, 30.14],
                        [1342130400000, 30.65],
                        [1342389600000, 30.4],
                        [1342476000000, 30.65],
                        [1342562400000, 31.43],
                        [1342648800000, 31.89],
                        [1342735200000, 31.38],
                        [1342994400000, 30.64],
                        [1343080800000, 30.02],
                        [1343167200000, 30.33],
                        [1343253600000, 30.95],
                        [1343340000000, 31.89],
                        [1343599200000, 31.01],
                        [1343685600000, 30.88],
                        [1343772000000, 30.69],
                        [1343858400000, 30.58],
                        [1343944800000, 32.02],
                        [1344204000000, 32.14],
                        [1344290400000, 32.37],
                        [1344376800000, 32.51],
                        [1344463200000, 32.65],
                        [1344549600000, 32.64],
                        [1344808800000, 32.27],
                        [1344895200000, 32.1],
                        [1344981600000, 32.91],
                        [1345068000000, 33.65],
                        [1345154400000, 33.8],
                        [1345413600000, 33.92],
                        [1345500000000, 33.75],
                        [1345586400000, 33.84],
                        [1345672800000, 33.5],
                        [1345759200000, 32.26],
                        [1346018400000, 32.32],
                        [1346104800000, 32.06],
                        [1346191200000, 31.96],
                        [1346277600000, 31.46],
                        [1346364000000, 31.27],
                        [1346709600000, 31.43],
                        [1346796000000, 32.26],
                        [1346882400000, 32.79],
                        [1346968800000, 32.46],
                        [1347228000000, 32.13],
                        [1347314400000, 32.43],
                        [1347400800000, 32.42],
                        [1347487200000, 32.81],
                        [1347573600000, 33.34],
                        [1347832800000, 33.41],
                        [1347919200000, 32.57],
                        [1348005600000, 33.12],
                        [1348092000000, 34.53],
                        [1348178400000, 33.83],
                        [1348437600000, 33.41],
                        [1348524000000, 32.9],
                        [1348610400000, 32.53],
                        [1348696800000, 32.8],
                        [1348783200000, 32.44],
                        [1349042400000, 32.62],
                        [1349128800000, 32.57],
                        [1349215200000, 32.6],
                        [1349301600000, 32.68],
                        [1349388000000, 32.47],
                        [1349647200000, 32.23],
                        [1349733600000, 31.68],
                        [1349820000000, 31.51],
                        [1349906400000, 31.78],
                        [1349992800000, 31.94],
                        [1350252000000, 32.33],
                        [1350338400000, 33.24],
                        [1350424800000, 33.44],
                        [1350511200000, 33.48],
                        [1350597600000, 33.24],
                        [1350856800000, 33.49],
                        [1350943200000, 33.31],
                        [1351029600000, 33.36],
                        [1351116000000, 33.4],
                        [1351202400000, 34.01],
                        [1351638000000, 34.02],
                        [1351724400000, 34.36],
                        [1351810800000, 34.39],
                        [1352070000000, 34.24],
                        [1352156400000, 34.39],
                        [1352242800000, 33.47],
                        [1352329200000, 32.98],
                        [1352415600000, 32.9],
                        [1352674800000, 32.7],
                        [1352761200000, 32.54],
                        [1352847600000, 32.23],
                        [1352934000000, 32.64],
                        [1353020400000, 32.65],
                        [1353279600000, 32.92],
                        [1353366000000, 32.64],
                        [1353452400000, 32.84],
                        [1353625200000, 33.4],
                        [1353884400000, 33.3],
                        [1353970800000, 33.18],
                        [1354057200000, 33.88],
                        [1354143600000, 34.09],
                        [1354230000000, 34.61],
                        [1354489200000, 34.7],
                        [1354575600000, 35.3],
                        [1354662000000, 35.4],
                        [1354748400000, 35.14],
                        [1354834800000, 35.48],
                        [1355094000000, 35.75],
                        [1355180400000, 35.54],
                        [1355266800000, 35.96],
                        [1355353200000, 35.53],
                        [1355439600000, 37.56],
                        [1355698800000, 37.42],
                        [1355785200000, 37.49],
                        [1355871600000, 38.09],
                        [1355958000000, 37.87],
                        [1356044400000, 37.71],
                        [1356303600000, 37.53],
                        [1356476400000, 37.55],
                        [1356562800000, 37.3],
                        [1356649200000, 36.9],
                        [1356908400000, 37.68],
                        [1357081200000, 38.34],
                        [1357167600000, 37.75],
                        [1357254000000, 38.13],
                        [1357513200000, 37.94],
                        [1357599600000, 38.14],
                        [1357686000000, 38.66],
                        [1357772400000, 38.62],
                        [1357858800000, 38.09],
                        [1358118000000, 38.16],
                        [1358204400000, 38.15],
                        [1358290800000, 37.88],
                        [1358377200000, 37.73],
                        [1358463600000, 37.98],
                        [1358809200000, 37.95],
                        [1358895600000, 38.25],
                        [1358982000000, 38.1],
                        [1359068400000, 38.32],
                        [1359327600000, 38.24],
                        [1359414000000, 38.52],
                        [1359500400000, 37.94],
                        [1359586800000, 37.83],
                        [1359673200000, 38.34],
                        [1359932400000, 38.1],
                        [1360018800000, 38.51],
                        [1360105200000, 38.4],
                        [1360191600000, 38.07],
                        [1360278000000, 39.12],
                        [1360537200000, 38.64],
                        [1360623600000, 38.89],
                        [1360710000000, 38.81],
                        [1360796400000, 38.61],
                        [1360882800000, 38.63],
                        [1361228400000, 38.99],
                        [1361314800000, 38.77],
                        [1361401200000, 38.34],
                        [1361487600000, 38.55],
                        [1361746800000, 38.11],
                        [1361833200000, 38.59],
                        [1361919600000, 39.6]
                    ]
                }
            ],
            chart: {
                type: "area",
                height: 350
            },
            annotations: {
                yaxis: [
                    {
                        y: 30,
                        borderColor: "#999",
                        label: {
                            text: "Support",
                            style: {
                                color: "#ffffff",
                                background: "#00E396"
                            }
                        }
                    }
                ],
                xaxis: [
                    {
                        x: new Date("14 Nov 2012").getTime(),
                        borderColor: "#999",
                        label: {
                            text: "Rally",
                            style: {
                                color: "#ffffff",
                                background: "#775DD0"
                            }
                        }
                    }
                ]
            },
            dataLabels: {
                enabled: false
            },
            markers: {
                size: 0
            },
            xaxis: {
                type: "datetime",
                min: new Date("01 Mar 2012").getTime(),
                tickAmount: 6,
                axisTicks: {
                    show: false,
                    color: '#ECEEF2'
                },
                axisBorder: {
                    show: false,
                    color: '#ECEEF2'
                },
                labels: {
                    show: true,
                    style: {
                        colors: "#8695AA",
                        fontSize: "12px"
                    }
                }
            },
            colors: [
                "#605DFF"
            ],
            tooltip: {
                x: {
                    format: "dd MMM yyyy"
                }
            },
            grid: {
                show: true,
                borderColor: "#ECEEF2"
            },
            fill: {
                type: "gradient",
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.7,
                    opacityTo: 0.9,
                    // stops: [0, 100]
                }
            },
            yaxis: {
                labels: {
                    show: true,
                    style: {
                        colors: "#64748B",
                        fontSize: "12px"
                    }
                },
                axisBorder: {
                    show: false,
                    color: '#ECEEF2'
                },
                axisTicks: {
                    show: false,
                    color: '#ECEEF2'
                }
            }
        };
        var chart = new ApexCharts(document.querySelector("#datetimeAreaChart"), options);
        chart.render();
    }

    // Negative Values Area Chart
    const negativeValuesAreaChart = document.getElementById("negativeValuesAreaChart");
    if (negativeValuesAreaChart) {
        var options = {
            series: [
                {
                    name: "North",
                    data: [
                        {
                            x: 1996,
                            y: 322
                        },
                        {
                            x: 1997,
                            y: 324
                        },
                        {
                            x: 1998,
                            y: 329
                        },
                        {
                            x: 1999,
                            y: 342
                        },
                        {
                            x: 2000,
                            y: 348
                        },
                        {
                            x: 2001,
                            y: 334
                        },
                        {
                            x: 2002,
                            y: 325
                        },
                        {
                            x: 2003,
                            y: 316
                        },
                        {
                            x: 2004,
                            y: 318
                        },
                        {
                            x: 2005,
                            y: 330
                        },
                        {
                            x: 2006,
                            y: 355
                        },
                        {
                            x: 2007,
                            y: 366
                        },
                        {
                            x: 2008,
                            y: 337
                        },
                        {
                            x: 2009,
                            y: 352
                        },
                        {
                            x: 2010,
                            y: 377
                        },
                        {
                            x: 2011,
                            y: 383
                        },
                        {
                            x: 2012,
                            y: 344
                        },
                        {
                            x: 2013,
                            y: 366
                        },
                        {
                            x: 2014,
                            y: 389
                        },
                        {
                            x: 2015,
                            y: 334
                        }
                    ]
                },
                {
                    name: "South",
                    data: [
                        {
                            x: 1996,
                            y: 162
                        },
                        {
                            x: 1997,
                            y: 90
                        },
                        {
                            x: 1998,
                            y: 50
                        },
                        {
                            x: 1999,
                            y: 77
                        },
                        {
                            x: 2000,
                            y: 35
                        },
                        {
                            x: 2001,
                            y: -45
                        },
                        {
                            x: 2002,
                            y: -88
                        },
                        {
                            x: 2003,
                            y: -120
                        },
                        {
                            x: 2004,
                            y: -156
                        },
                        {
                            x: 2005,
                            y: -123
                        },
                        {
                            x: 2006,
                            y: -88
                        },
                        {
                            x: 2007,
                            y: -66
                        },
                        {
                            x: 2008,
                            y: -45
                        },
                        {
                            x: 2009,
                            y: -29
                        },
                        {
                            x: 2010,
                            y: -45
                        },
                        {
                            x: 2011,
                            y: -88
                        },
                        {
                            x: 2012,
                            y: -132
                        },
                        {
                            x: 2013,
                            y: -146
                        },
                        {
                            x: 2014,
                            y: -169
                        },
                        {
                            x: 2015,
                            y: -184
                        }
                    ]
                }
            ],
            chart: {
                type: "area",
                height: 375
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: "straight"
            },
            title: {
                text: "Area with Negative Values",
                align: "left",
                offsetX: -9,
                offsetY: 0,
                style: {
                    fontWeight: '500',
                    fontSize: '14px',
                    color: '#64748B'
                }
            },
            colors: [
                "#00cae3", "#605DFF"
            ],
            xaxis: {
                type: "datetime",
                axisTicks: {
                    show: false,
                    color: '#ECEEF2'
                },
                axisBorder: {
                    show: false,
                    color: '#ECEEF2'
                },
                labels: {
                    show: true,
                    style: {
                        colors: "#8695AA",
                        fontSize: "12px"
                    }
                }
            },
            yaxis: {
                tickAmount: 4,
                floating: false,
                labels: {
                    show: true,
                    style: {
                        colors: "#64748B",
                        fontSize: "12px"
                    }
                },
                axisBorder: {
                    show: false,
                    color: '#ECEEF2'
                },
                axisTicks: {
                    show: false,
                    color: '#ECEEF2'
                }
            },
            fill: {
                opacity: 0.5
            },
            tooltip: {
                x: {
                    format: "yyyy"
                },
                fixed: {
                    enabled: false,
                    position: "topRight"
                }
            },
            grid: {
                yaxis: {
                    lines: {
                        offsetX: -30
                    }
                },
                padding: {
                    left: 20
                },
                show: true,
                borderColor: "#ECEEF2"
            },
            legend: {
                show: true,
                position: 'bottom',
                fontSize: '12px',
                horizontalAlign: 'center',
                itemMargin: {
                    horizontal: 8,
                    vertical: 0
                },
                labels: {
                    colors: '#64748B'
                },
                markers: {
                    size: 6,
                    offsetX: -2,
                    offsetY: -.5,
                    shape: 'circle'
                }
            }
        };
        var chart = new ApexCharts(document.querySelector("#negativeValuesAreaChart"), options);
        chart.render();
    }

    // Stacked Area Chart
    const stackedAreaChart = document.getElementById("stackedAreaChart");
    if (stackedAreaChart) {
        var options = {
            series: [
                {
                    name: "South",
                    data: [10, 36, 47, 23, 29, 59, 36, 37, 23, 15]
                },
                {
                    name: "North",
                    data: [15, 19, 18, 10, 15, 19, 15, 15, 14, 12]
                },
                {
                    name: "Central",
                    data: [12, 11, 12, 13, 12, 13, 12, 12, 11, 11]
                }
            ],
            chart: {
                type: "area",
                height: 350,
                stacked: true,
                events: {
                    selection: function(chart, e) {
                        console.log(new Date(e.xaxis.min));
                    }
                },
                toolbar: {
                    show: true
                }
            },
            colors: [
                "#605DFF", "#0f79f3", "#00cae3"
            ],
            dataLabels: {
                enabled: false
            },
            fill: {
                type: "gradient",
                gradient: {
                    opacityFrom: 0.6,
                    opacityTo: 0.8
                }
            },
            legend: {
                show: true,
                position: 'top',
                fontSize: '12px',
                horizontalAlign: 'left',
                itemMargin: {
                    horizontal: 8,
                    vertical: 0
                },
                labels: {
                    colors: '#64748B'
                },
                markers: {
                    size: 6,
                    offsetX: -2,
                    offsetY: -.5,
                    shape: 'circle'
                }
            },
            xaxis: {
                axisTicks: {
                    show: false,
                    color: '#ECEEF2'
                },
                axisBorder: {
                    show: false,
                    color: '#ECEEF2'
                },
                labels: {
                    show: true,
                    style: {
                        colors: "#8695AA",
                        fontSize: "12px"
                    }
                },
                categories: [
                    "11 Feb",
                    "12 Feb",
                    "13 Feb",
                    "14 Feb",
                    "15 Feb",
                    "16 Feb",
                    "17 Feb",
                    "18 Feb",
                    "19 Feb",
                    "20 Feb"
                ]
            },
            yaxis: {
                labels: {
                    show: true,
                    style: {
                        colors: "#64748B",
                        fontSize: "12px"
                    }
                },
                axisBorder: {
                    show: false,
                    color: '#ECEEF2'
                },
                axisTicks: {
                    show: false,
                    color: '#ECEEF2'
                }
            },
            grid: {
                borderColor: "#ECEEF2"
            }
        };
        var chart = new ApexCharts(document.querySelector("#stackedAreaChart"), options);
        chart.render();
    }

    // Missing Null Values Area Chart
    const missingNullValuesAreaChart = document.getElementById("missingNullValuesAreaChart");
    if (missingNullValuesAreaChart) {
        var options = {
            series: [
                {
                    name: "Network",
                    data: [
                        {
                            x: "Dec 23 2017",
                            y: null
                        },
                        {
                            x: "Dec 24 2017",
                            y: 44
                        },
                        {
                            x: "Dec 25 2017",
                            y: 31
                        },
                        {
                            x: "Dec 26 2017",
                            y: 38
                        },
                        {
                            x: "Dec 27 2017",
                            y: null
                        },
                        {
                            x: "Dec 28 2017",
                            y: 32
                        },
                        {
                            x: "Dec 29 2017",
                            y: 55
                        },
                        {
                            x: "Dec 30 2017",
                            y: 51
                        },
                        {
                            x: "Dec 31 2017",
                            y: 67
                        },
                        {
                            x: "Jan 01 2018",
                            y: 22
                        },
                        {
                            x: "Jan 02 2018",
                            y: 34
                        },
                        {
                            x: "Jan 03 2018",
                            y: null
                        },
                        {
                            x: "Jan 04 2018",
                            y: null
                        },
                        {
                            x: "Jan 05 2018",
                            y: 11
                        },
                        {
                            x: "Jan 06 2018",
                            y: 4
                        },
                        {
                            x: "Jan 07 2018",
                            y: 15
                        },
                        {
                            x: "Jan 08 2018",
                            y: null
                        },
                        {
                            x: "Jan 09 2018",
                            y: 9
                        },
                        {
                            x: "Jan 10 2018",
                            y: 34
                        },
                        {
                            x: "Jan 11 2018",
                            y: null
                        },
                        {
                            x: "Jan 12 2018",
                            y: null
                        },
                        {
                            x: "Jan 13 2018",
                            y: 13
                        },
                        {
                            x: "Jan 14 2018",
                            y: null
                        }
                    ]
                }
            ],
            chart: {
                type: "area",
                height: 350,
                animations: {
                    enabled: false
                },
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            colors: [
                "#605DFF"
            ],
            stroke: {
                curve: "straight"
            },
            fill: {
                opacity: 0.8,
                type: "pattern",
                pattern: {
                    style: "horizontalLines",
                    width: 5,
                    height: 5,
                    strokeWidth: 3
                }
            },
            markers: {
                size: 5,
                hover: {
                    size: 9
                }
            },
            title: {
                text: "Network Monitoring",
                align: "left",
                offsetX: -9,
                style: {
                    fontWeight: '500',
                    fontSize: '14px',
                    color: '#64748B'
                }
            },
            tooltip: {
                intersect: true,
                shared: false
            },
            theme: {
                palette: "palette1"
            },
            xaxis: {
                type: "datetime",
                axisTicks: {
                    show: false,
                    color: '#ECEEF2'
                },
                axisBorder: {
                    show: false,
                    color: '#ECEEF2'
                },
                labels: {
                    show: true,
                    style: {
                        colors: "#8695AA",
                        fontSize: "12px"
                    }
                }
            },
            yaxis: {
                title: {
                    text: "Bytes Received",
                    style: {
                        color: "#3A4252",
                        fontSize: "14px",
                        fontWeight: 500
                    }
                },
                labels: {
                    show: true,
                    style: {
                        colors: "#64748B",
                        fontSize: "12px"
                    }
                },
                axisBorder: {
                    show: false,
                    color: '#ECEEF2'
                },
                axisTicks: {
                    show: false,
                    color: '#ECEEF2'
                }
            },
            grid: {
                show: true,
                borderColor: "#ECEEF2"
            }
        };
        var chart = new ApexCharts(document.querySelector("#missingNullValuesAreaChart"), options);
        chart.render();
    }

    // GitHub Style Area Chart
    const githubStyleAreaChart1 = document.getElementById("githubStyleAreaChart1");
    if (githubStyleAreaChart1) {
        var options = {
            dataLabels: {
                enabled: false
            },
            fill: {
                opacity: 1,
                type: "solid"
            },
            xaxis: {
                type: "datetime",
                axisTicks: {
                    show: false,
                    color: '#ECEEF2'
                },
                axisBorder: {
                    show: false,
                    color: '#ECEEF2'
                },
                labels: {
                    show: true,
                    style: {
                        colors: "#8695AA",
                        fontSize: "12px"
                    }
                }
            },
            stroke: {
                width: 0,
                curve: "smooth"
            },
            grid: {
                show: true,
                borderColor: "#ECEEF2"
            },
            series: [
                {
                    name: "commits",
                    data: [
                        {
                            x: 1352592000000,
                            a: 306,
                            d: 33,
                            y: 13
                        },
                        {
                            x: 1353196800000,
                            a: 77,
                            d: 41,
                            y: 11
                        },
                        {
                            x: 1353801600000,
                            a: 97,
                            d: 52,
                            y: 13
                        },
                        {
                            x: 1354406400000,
                            a: 349,
                            d: 231,
                            y: 27
                        },
                        {
                            x: 1355011200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1355616000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1356220800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1356825600000,
                            a: 93,
                            d: 16,
                            y: 12
                        },
                        {
                            x: 1357430400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1358035200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1358640000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1359244800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1359849600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1360454400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1361059200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1361664000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1362268800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1362873600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1363478400000,
                            a: 47,
                            d: 20,
                            y: 6
                        },
                        {
                            x: 1364083200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1364688000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1365292800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1365897600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1366502400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1367107200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1367712000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1368316800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1368921600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1369526400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1370131200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1370736000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1371340800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1371945600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1372550400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1373155200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1373760000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1374364800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1374969600000,
                            a: 22,
                            d: 16,
                            y: 9
                        },
                        {
                            x: 1375574400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1376179200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1376784000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1377388800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1377993600000,
                            a: 104,
                            d: 79,
                            y: 12
                        },
                        {
                            x: 1378598400000,
                            a: 60,
                            d: 17,
                            y: 9
                        },
                        {
                            x: 1379203200000,
                            a: 27,
                            d: 36,
                            y: 3
                        },
                        {
                            x: 1379808000000,
                            a: 283,
                            d: 199,
                            y: 20
                        },
                        {
                            x: 1380412800000,
                            a: 1,
                            d: 1,
                            y: 1
                        },
                        {
                            x: 1381017600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1381622400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1382227200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1382832000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1383436800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1384041600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1384646400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1385251200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1385856000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1386460800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1387065600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1387670400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1388275200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1388880000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1389484800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1390089600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1390694400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1391299200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1391904000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1392508800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1393113600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1393718400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1394323200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1394928000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1395532800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1396137600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1396742400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1397347200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1397952000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1398556800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1399161600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1399766400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1400371200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1400976000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1401580800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1402185600000,
                            a: 115,
                            d: 38,
                            y: 11
                        },
                        {
                            x: 1402790400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1403395200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1404000000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1404604800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1405209600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1405814400000,
                            a: 598,
                            d: 209,
                            y: 34
                        },
                        {
                            x: 1406419200000,
                            a: 195,
                            d: 119,
                            y: 18
                        },
                        {
                            x: 1407024000000,
                            a: 174,
                            d: 54,
                            y: 13
                        },
                        {
                            x: 1407628800000,
                            a: 1,
                            d: 1,
                            y: 1
                        },
                        {
                            x: 1408233600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1408838400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1409443200000,
                            a: 2,
                            d: 2,
                            y: 1
                        },
                        {
                            x: 1410048000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1410652800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1411257600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1411862400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1412467200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1413072000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1413676800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1414281600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1414886400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1415491200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1416096000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1416700800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1417305600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1417910400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1418515200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1419120000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1419724800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1420329600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1420934400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1421539200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1422144000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1422748800000,
                            a: 46,
                            d: 43,
                            y: 8
                        },
                        {
                            x: 1423353600000,
                            a: 20,
                            d: 4,
                            y: 1
                        },
                        {
                            x: 1423958400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1424563200000,
                            a: 18,
                            d: 11,
                            y: 4
                        },
                        {
                            x: 1425168000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1425772800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1426377600000,
                            a: 54,
                            d: 63,
                            y: 4
                        },
                        {
                            x: 1426982400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1427587200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1428192000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1428796800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1429401600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1430006400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1430611200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1431216000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1431820800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1432425600000,
                            a: 10,
                            d: 11,
                            y: 1
                        },
                        {
                            x: 1433030400000,
                            a: 296,
                            d: 172,
                            y: 18
                        },
                        {
                            x: 1433635200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1434240000000,
                            a: 10,
                            d: 13,
                            y: 2
                        },
                        {
                            x: 1434844800000,
                            a: 20,
                            d: 16,
                            y: 3
                        },
                        {
                            x: 1435449600000,
                            a: 24,
                            d: 10,
                            y: 3
                        },
                        {
                            x: 1436054400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1436659200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1437264000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1437868800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1438473600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1439078400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1439683200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1440288000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1440892800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1441497600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1442102400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1442707200000,
                            a: 275,
                            d: 129,
                            y: 12
                        },
                        {
                            x: 1443312000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1443916800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1444521600000,
                            a: 1213,
                            d: 837,
                            y: 5
                        },
                        {
                            x: 1445126400000,
                            a: 299,
                            d: 54,
                            y: 3
                        },
                        {
                            x: 1445731200000,
                            a: 30,
                            d: 33,
                            y: 1
                        },
                        {
                            x: 1446336000000,
                            a: 202,
                            d: 185,
                            y: 18
                        },
                        {
                            x: 1446940800000,
                            a: 554,
                            d: 292,
                            y: 39
                        },
                        {
                            x: 1447545600000,
                            a: 9030,
                            d: 44,
                            y: 7
                        },
                        {
                            x: 1448150400000,
                            a: 8,
                            d: 1,
                            y: 1
                        },
                        {
                            x: 1448755200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1449360000000,
                            a: 18,
                            d: 12,
                            y: 5
                        },
                        {
                            x: 1449964800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1450569600000,
                            a: 4,
                            d: 3,
                            y: 2
                        },
                        {
                            x: 1451174400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1451779200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1452384000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1452988800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1453593600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1454198400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1454803200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1455408000000,
                            a: 2,
                            d: 2,
                            y: 1
                        },
                        {
                            x: 1456012800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1456617600000,
                            a: 32,
                            d: 43,
                            y: 1
                        },
                        {
                            x: 1457222400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1457827200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1458432000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1459036800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1459641600000,
                            a: 23,
                            d: 13,
                            y: 3
                        },
                        {
                            x: 1460246400000,
                            a: 421,
                            d: 335,
                            y: 9
                        },
                        {
                            x: 1460851200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1461456000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1462060800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1462665600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1463270400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1463875200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1464480000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1465084800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1465689600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1466294400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1466899200000,
                            a: 6,
                            d: 1,
                            y: 1
                        },
                        {
                            x: 1467504000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1468108800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1468713600000,
                            a: 886,
                            d: 49,
                            y: 15
                        },
                        {
                            x: 1469318400000,
                            a: 38,
                            d: 26,
                            y: 4
                        },
                        {
                            x: 1469923200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1470528000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1471132800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1471737600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1472342400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1472947200000,
                            a: 2,
                            d: 2,
                            y: 1
                        },
                        {
                            x: 1473552000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1474156800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1474761600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1475366400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1475971200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1476576000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1477180800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1477785600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1478390400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1478995200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1479600000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1480204800000,
                            a: 8,
                            d: 0,
                            y: 1
                        },
                        {
                            x: 1480809600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1481414400000,
                            a: 1,
                            d: 1,
                            y: 1
                        },
                        {
                            x: 1482019200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1482624000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1483228800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1483833600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1484438400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1485043200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1485648000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1486252800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1486857600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1487462400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1488067200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1488672000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1489276800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1489881600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1490486400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1491091200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1491696000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1492300800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1492905600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1493510400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1494115200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1494720000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1495324800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1495929600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1496534400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1497139200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1497744000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1498348800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1498953600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1499558400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1500163200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1500768000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1501372800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1501977600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1502582400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1503187200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1503792000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1504396800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1505001600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1505606400000,
                            a: 2,
                            d: 2,
                            y: 2
                        },
                        {
                            x: 1506211200000,
                            a: 49,
                            d: 10,
                            y: 4
                        },
                        {
                            x: 1506816000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1507420800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1508025600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1508630400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1509235200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1509840000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1510444800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1511049600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1511654400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1512259200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1512864000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1513468800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1514073600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1514678400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1515283200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1515888000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1516492800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1517097600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1517702400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1518307200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1518912000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1519516800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1520121600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1520726400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1521331200000,
                            a: 768,
                            d: 2125,
                            y: 12
                        },
                        {
                            x: 1521936000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1522540800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1523145600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1523750400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1524355200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1524960000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1525564800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1526169600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1526774400000,
                            a: 1,
                            d: 0,
                            y: 1
                        }
                    ]
                }
            ],
            chart: {
                id: "chartyear",
                type: "area",
                height: 160,
                toolbar: {
                    show: false,
                    autoSelected: "pan"
                }
            },
            colors: [
                "#605DFF"
            ],
            yaxis: {
                show: false,
                tickAmount: 3,
                labels: {
                    show: true,
                    style: {
                        colors: "#64748B",
                        fontSize: "12px"
                    }
                },
                axisBorder: {
                    show: false,
                    color: '#ECEEF2'
                },
                axisTicks: {
                    show: false,
                    color: '#ECEEF2'
                }
            }
        };
        var chart = new ApexCharts(document.querySelector("#githubStyleAreaChart1"), options);
        chart.render();
    }
    const githubStyleAreaChart2 = document.getElementById("githubStyleAreaChart2");
    if (githubStyleAreaChart2) {
        var options = {
            dataLabels: {
                enabled: false
            },
            fill: {
                opacity: 1,
                type: "solid"
            },
            xaxis: {
                type: "datetime",
                axisTicks: {
                    show: false,
                    color: '#ECEEF2'
                },
                axisBorder: {
                    show: false,
                    color: '#ECEEF2'
                },
                labels: {
                    show: true,
                    style: {
                        colors: "#8695AA",
                        fontSize: "12px"
                    }
                }
            },
            stroke: {
                width: 0,
                curve: "smooth"
            },
            grid: {
                show: true,
                borderColor: "#ECEEF2"
            },
            series: [
                {
                    name: "commits",
                    data: [
                        {
                            x: 1352592000000,
                            a: 306,
                            d: 33,
                            y: 13
                        },
                        {
                            x: 1353196800000,
                            a: 77,
                            d: 41,
                            y: 11
                        },
                        {
                            x: 1353801600000,
                            a: 97,
                            d: 52,
                            y: 13
                        },
                        {
                            x: 1354406400000,
                            a: 349,
                            d: 231,
                            y: 27
                        },
                        {
                            x: 1355011200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1355616000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1356220800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1356825600000,
                            a: 93,
                            d: 16,
                            y: 12
                        },
                        {
                            x: 1357430400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1358035200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1358640000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1359244800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1359849600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1360454400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1361059200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1361664000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1362268800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1362873600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1363478400000,
                            a: 47,
                            d: 20,
                            y: 6
                        },
                        {
                            x: 1364083200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1364688000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1365292800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1365897600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1366502400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1367107200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1367712000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1368316800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1368921600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1369526400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1370131200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1370736000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1371340800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1371945600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1372550400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1373155200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1373760000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1374364800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1374969600000,
                            a: 22,
                            d: 16,
                            y: 9
                        },
                        {
                            x: 1375574400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1376179200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1376784000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1377388800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1377993600000,
                            a: 104,
                            d: 79,
                            y: 12
                        },
                        {
                            x: 1378598400000,
                            a: 60,
                            d: 17,
                            y: 9
                        },
                        {
                            x: 1379203200000,
                            a: 27,
                            d: 36,
                            y: 3
                        },
                        {
                            x: 1379808000000,
                            a: 283,
                            d: 199,
                            y: 20
                        },
                        {
                            x: 1380412800000,
                            a: 1,
                            d: 1,
                            y: 1
                        },
                        {
                            x: 1381017600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1381622400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1382227200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1382832000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1383436800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1384041600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1384646400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1385251200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1385856000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1386460800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1387065600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1387670400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1388275200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1388880000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1389484800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1390089600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1390694400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1391299200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1391904000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1392508800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1393113600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1393718400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1394323200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1394928000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1395532800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1396137600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1396742400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1397347200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1397952000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1398556800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1399161600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1399766400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1400371200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1400976000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1401580800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1402185600000,
                            a: 115,
                            d: 38,
                            y: 11
                        },
                        {
                            x: 1402790400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1403395200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1404000000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1404604800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1405209600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1405814400000,
                            a: 598,
                            d: 209,
                            y: 34
                        },
                        {
                            x: 1406419200000,
                            a: 195,
                            d: 119,
                            y: 18
                        },
                        {
                            x: 1407024000000,
                            a: 174,
                            d: 54,
                            y: 13
                        },
                        {
                            x: 1407628800000,
                            a: 1,
                            d: 1,
                            y: 1
                        },
                        {
                            x: 1408233600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1408838400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1409443200000,
                            a: 2,
                            d: 2,
                            y: 1
                        },
                        {
                            x: 1410048000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1410652800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1411257600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1411862400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1412467200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1413072000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1413676800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1414281600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1414886400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1415491200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1416096000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1416700800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1417305600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1417910400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1418515200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1419120000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1419724800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1420329600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1420934400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1421539200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1422144000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1422748800000,
                            a: 46,
                            d: 43,
                            y: 8
                        },
                        {
                            x: 1423353600000,
                            a: 20,
                            d: 4,
                            y: 1
                        },
                        {
                            x: 1423958400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1424563200000,
                            a: 18,
                            d: 11,
                            y: 4
                        },
                        {
                            x: 1425168000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1425772800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1426377600000,
                            a: 54,
                            d: 63,
                            y: 4
                        },
                        {
                            x: 1426982400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1427587200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1428192000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1428796800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1429401600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1430006400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1430611200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1431216000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1431820800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1432425600000,
                            a: 10,
                            d: 11,
                            y: 1
                        },
                        {
                            x: 1433030400000,
                            a: 296,
                            d: 172,
                            y: 18
                        },
                        {
                            x: 1433635200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1434240000000,
                            a: 10,
                            d: 13,
                            y: 2
                        },
                        {
                            x: 1434844800000,
                            a: 20,
                            d: 16,
                            y: 3
                        },
                        {
                            x: 1435449600000,
                            a: 24,
                            d: 10,
                            y: 3
                        },
                        {
                            x: 1436054400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1436659200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1437264000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1437868800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1438473600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1439078400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1439683200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1440288000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1440892800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1441497600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1442102400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1442707200000,
                            a: 275,
                            d: 129,
                            y: 12
                        },
                        {
                            x: 1443312000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1443916800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1444521600000,
                            a: 1213,
                            d: 837,
                            y: 5
                        },
                        {
                            x: 1445126400000,
                            a: 299,
                            d: 54,
                            y: 3
                        },
                        {
                            x: 1445731200000,
                            a: 30,
                            d: 33,
                            y: 1
                        },
                        {
                            x: 1446336000000,
                            a: 202,
                            d: 185,
                            y: 18
                        },
                        {
                            x: 1446940800000,
                            a: 554,
                            d: 292,
                            y: 39
                        },
                        {
                            x: 1447545600000,
                            a: 9030,
                            d: 44,
                            y: 7
                        },
                        {
                            x: 1448150400000,
                            a: 8,
                            d: 1,
                            y: 1
                        },
                        {
                            x: 1448755200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1449360000000,
                            a: 18,
                            d: 12,
                            y: 5
                        },
                        {
                            x: 1449964800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1450569600000,
                            a: 4,
                            d: 3,
                            y: 2
                        },
                        {
                            x: 1451174400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1451779200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1452384000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1452988800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1453593600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1454198400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1454803200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1455408000000,
                            a: 2,
                            d: 2,
                            y: 1
                        },
                        {
                            x: 1456012800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1456617600000,
                            a: 32,
                            d: 43,
                            y: 1
                        },
                        {
                            x: 1457222400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1457827200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1458432000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1459036800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1459641600000,
                            a: 23,
                            d: 13,
                            y: 3
                        },
                        {
                            x: 1460246400000,
                            a: 421,
                            d: 335,
                            y: 9
                        },
                        {
                            x: 1460851200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1461456000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1462060800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1462665600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1463270400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1463875200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1464480000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1465084800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1465689600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1466294400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1466899200000,
                            a: 6,
                            d: 1,
                            y: 1
                        },
                        {
                            x: 1467504000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1468108800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1468713600000,
                            a: 886,
                            d: 49,
                            y: 15
                        },
                        {
                            x: 1469318400000,
                            a: 38,
                            d: 26,
                            y: 4
                        },
                        {
                            x: 1469923200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1470528000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1471132800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1471737600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1472342400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1472947200000,
                            a: 2,
                            d: 2,
                            y: 1
                        },
                        {
                            x: 1473552000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1474156800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1474761600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1475366400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1475971200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1476576000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1477180800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1477785600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1478390400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1478995200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1479600000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1480204800000,
                            a: 8,
                            d: 0,
                            y: 1
                        },
                        {
                            x: 1480809600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1481414400000,
                            a: 1,
                            d: 1,
                            y: 1
                        },
                        {
                            x: 1482019200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1482624000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1483228800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1483833600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1484438400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1485043200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1485648000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1486252800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1486857600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1487462400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1488067200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1488672000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1489276800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1489881600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1490486400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1491091200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1491696000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1492300800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1492905600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1493510400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1494115200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1494720000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1495324800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1495929600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1496534400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1497139200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1497744000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1498348800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1498953600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1499558400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1500163200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1500768000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1501372800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1501977600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1502582400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1503187200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1503792000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1504396800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1505001600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1505606400000,
                            a: 2,
                            d: 2,
                            y: 2
                        },
                        {
                            x: 1506211200000,
                            a: 49,
                            d: 10,
                            y: 4
                        },
                        {
                            x: 1506816000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1507420800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1508025600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1508630400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1509235200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1509840000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1510444800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1511049600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1511654400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1512259200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1512864000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1513468800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1514073600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1514678400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1515283200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1515888000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1516492800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1517097600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1517702400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1518307200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1518912000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1519516800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1520121600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1520726400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1521331200000,
                            a: 768,
                            d: 2125,
                            y: 12
                        },
                        {
                            x: 1521936000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1522540800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1523145600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1523750400000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1524355200000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1524960000000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1525564800000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1526169600000,
                            a: 0,
                            d: 0,
                            y: 0
                        },
                        {
                            x: 1526774400000,
                            a: 1,
                            d: 0,
                            y: 1
                        }
                    ]
                }
            ],
            chart: {
                height: 200,
                type: "area",
                toolbar: {
                    autoSelected: "selection"
                },
                brush: {
                    enabled: true,
                    target: "chartyear"
                },
                selection: {
                    enabled: true,
                    xaxis: {
                        min: new Date("26 Jan 2014").getTime(),
                        max: new Date("29 Mar 2015").getTime()
                    }
                }
            },
            colors: [
                "#7bd39a"
            ],
            legend: {
                show: true,
                position: 'top',
                fontSize: '12px',
                horizontalAlign: 'left',
                itemMargin: {
                    horizontal: 8,
                    vertical: 0
                },
                labels: {
                    colors: '#64748B'
                },
                markers: {
                    size: 6,
                    offsetX: -2,
                    offsetY: -.5,
                    shape: 'circle'
                }
            }
        };
        var chart = new ApexCharts(document.querySelector("#githubStyleAreaChart2"), options);
        chart.render();
    }

    // Basic Column Chart
    const basicColumnChart = document.getElementById("basicColumnChart");
    if (basicColumnChart) {
        var options = {
            series: [
                {
                    name: "Net Profit",
                    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
                },
                {
                    name: "Revenue",
                    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
                },
                {
                    name: "Free Cash Flow",
                    data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
                }
            ],
            chart: {
                type: "bar",
                height: 350,
                toolbar: {
                    show: false
                }
            },
            colors: [
                "#00cae3", "#605DFF", "#ffb264"
            ],
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: "55%",
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: 3,
                show: true,
                colors: ["transparent"]
            },
            xaxis: {
                categories: [
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct"
                ],
                axisTicks: {
                    show: false,
                    color: '#ECEEF2'
                },
                axisBorder: {
                    show: false,
                    color: '#ECEEF2'
                },
                labels: {
                    show: true,
                    style: {
                        colors: "#8695AA",
                        fontSize: "12px"
                    }
                }
            },
            yaxis: {
                title: {
                    text: "$ (thousands)",
                    style: {
                        color: "#3A4252",
                        fontSize: "14px",
                        fontWeight: 500
                    }
                },
                labels: {
                    show: true,
                    style: {
                        colors: "#64748B",
                        fontSize: "12px"
                    }
                },
                axisBorder: {
                    show: false,
                    color: '#ECEEF2'
                },
                axisTicks: {
                    show: false,
                    color: '#ECEEF2'
                }
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                y: {
                    formatter: function(val) {
                        return "$" + val;
                    }
                }
            },
            legend: {
                show: true,
                position: 'top',
                fontSize: '12px',
                horizontalAlign: 'center',
                itemMargin: {
                    horizontal: 8,
                    vertical: 0
                },
                labels: {
                    colors: '#64748B'
                },
                markers: {
                    size: 6,
                    offsetX: -2,
                    offsetY: -.5,
                    shape: 'circle'
                }
            },
            grid: {
                show: true,
                borderColor: "#ECEEF2"
            }
        };
        var chart = new ApexCharts(document.querySelector("#basicColumnChart"), options);
        chart.render();
    }

    // Data Labels Column Chart
    const dataLabelsColumnChart = document.getElementById("dataLabelsColumnChart");
    if (dataLabelsColumnChart) {
        var options = {
            series: [
                {
                    name: "Inflation",
                    data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
                }
            ],
            chart: {
                height: 350,
                type: "bar",
                toolbar: {
                    show: true
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        position: "top" // top, center, bottom
                    }
                }
            },
            dataLabels: {
                enabled: true,
                formatter: function(val) {
                    return val + "%";
                },
                offsetY: -25,
                style: {
                    fontSize: "12px",
                    colors: ["#304758"]
                }
            },
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
                    "Oct",
                    "Nov",
                    "Dec"
                ],
                position: "bottom",
                axisTicks: {
                    show: false,
                    color: '#ECEEF2'
                },
                axisBorder: {
                    show: false,
                    color: '#ECEEF2'
                },
                labels: {
                    show: true,
                    style: {
                        colors: "#8695AA",
                        fontSize: "12px"
                    }
                },
                crosshairs: {
                    fill: {
                        type: "gradient",
                        gradient: {
                            colorFrom: "#D8E3F0",
                            colorTo: "#BED1E6",
                            stops: [0, 100],
                            opacityFrom: 0.4,
                            opacityTo: 0.5
                        }
                    }
                },
                tooltip: {
                    enabled: true,
                    offsetY: -35
                }
            },
            colors: [
                "#605DFF"
            ],
            yaxis: {
                axisBorder: {
                    show: false,
                    color: '#ECEEF2'
                },
                axisTicks: {
                    show: false,
                    color: '#ECEEF2'
                },
                labels: {
                    show: false,
                    formatter: function(val) {
                        return val + "%";
                    },
                    style: {
                        colors: "#64748B",
                        fontSize: "12px"
                    }
                }
            },
            title: {
                text: "Monthly Inflation in Brazil, 2024",
                align: "left",
                offsetX: -9,
                style: {
                    fontWeight: '500',
                    fontSize: '14px',
                    color: '#64748B'
                }
            },
            grid: {
                show: true,
                borderColor: "#ECEEF2"
            }
        };
        var chart = new ApexCharts(document.querySelector("#dataLabelsColumnChart"), options);
        chart.render();
    }

    // Stacked Column Chart
    const stackedColumnChart = document.getElementById("stackedColumnChart");
    if (stackedColumnChart) {
        var options = {
            series: [
                {
                    name: "Product A",
                    data: [44, 55, 41, 67, 22, 43]
                },
                {
                    name: "Product B",
                    data: [13, 23, 20, 8, 13, 27]
                },
                {
                    name: "Product C",
                    data: [11, 17, 15, 15, 21, 14]
                },
                {
                    name: "Product D",
                    data: [21, 7, 25, 13, 22, 8]
                }
            ],
            chart: {
                type: "bar",
                height: 350,
                stacked: true,
                toolbar: {
                    show: true
                },
                zoom: {
                    enabled: true
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false
                }
            },
            colors: [
                "#605DFF", "#00cae3", "#ffb264", "#e74c3c"
            ],
            xaxis: {
                type: "category",
                categories: [
                    "01/2024",
                    "02/2024",
                    "03/2024",
                    "04/2024",
                    "05/2024",
                    "06/2024"
                ],
                axisTicks: {
                    show: false,
                    color: '#ECEEF2'
                },
                axisBorder: {
                    show: false,
                    color: '#ECEEF2'
                },
                labels: {
                    show: true,
                    style: {
                        colors: "#8695AA",
                        fontSize: "12px"
                    }
                }
            },
            legend: {
                position: "right",
                fontSize: '12px',
                offsetY: 40,
                labels: {
                    colors: '#64748B'
                },
                itemMargin: {
                    horizontal: 0,
                    vertical: 5
                },
                markers: {
                    size: 6,
                    offsetX: -2,
                    offsetY: -.5,
                    shape: 'circle'
                }
            },
            fill: {
                opacity: 1
            },
            yaxis: {
                labels: {
                    show: true,
                    style: {
                        colors: "#64748B",
                        fontSize: "12px"
                    }
                },
                axisBorder: {
                    show: false,
                    color: '#ECEEF2'
                },
                axisTicks: {
                    show: false,
                    color: '#ECEEF2'
                }
            },
            grid: {
                show: true,
                borderColor: "#ECEEF2"
            }
        };
        var chart = new ApexCharts(document.querySelector("#stackedColumnChart"), options);
        chart.render();
    }

    // Range Column Chart
    const rangeColumnChart = document.getElementById("rangeColumnChart");
    if (rangeColumnChart) {
        var options = {
            series: [
                {
                    name: "Blue",
                    data: [
                        {
                            x: "Team A",
                            y: [1, 5]
                        },
                        {
                            x: "Team B",
                            y: [4, 6]
                        },
                        {
                            x: "Team C",
                            y: [5, 8]
                        },
                        {
                            x: "Team D",
                            y: [3, 11]
                        }
                    ]
                },
                {
                    name: "Green",
                    data: [
                        {
                            x: "Team A",
                            y: [2, 6]
                        },
                        {
                            x: "Team B",
                            y: [1, 3]
                        },
                        {
                            x: "Team C",
                            y: [7, 8]
                        },
                        {
                            x: "Team D",
                            y: [5, 9]
                        }
                    ]
                }
            ],
            chart: {
                type: "rangeBar",
                height: 370,
                toolbar: {
                    show: true
                }
            },
            colors: [
                "#605DFF", "#FD5812"
            ],
            plotOptions: {
                bar: {
                    horizontal: false
                }
            },
            dataLabels: {
                enabled: true
            },
            legend: {
                show: true,
                position: 'top',
                fontSize: '12px',
                horizontalAlign: 'left',
                itemMargin: {
                    horizontal: 8,
                    vertical: 0
                },
                labels: {
                    colors: '#64748B'
                },
                markers: {
                    size: 6,
                    offsetX: -2,
                    offsetY: -.5,
                    shape: 'circle'
                }
            },
            grid: {
                show: true,
                borderColor: "#ECEEF2"
            },
            xaxis: {
                axisTicks: {
                    show: false,
                    color: '#ECEEF2'
                },
                axisBorder: {
                    show: false,
                    color: '#ECEEF2'
                },
                labels: {
                    show: true,
                    style: {
                        colors: "#8695AA",
                        fontSize: "12px"
                    }
                }
            },
            yaxis: {
                tickAmount: 5,
                labels: {
                    show: true,
                    style: {
                        colors: "#64748B",
                        fontSize: "12px"
                    }
                },
                axisBorder: {
                    show: false,
                    color: '#ECEEF2'
                },
                axisTicks: {
                    show: false,
                    color: '#ECEEF2'
                }
            }
        };
        var chart = new ApexCharts(document.querySelector("#rangeColumnChart"), options);
        chart.render();
    }

    // Rotated Labels Column Chart
    const rotatedLabelsColumnChart = document.getElementById("rotatedLabelsColumnChart");
    if (rotatedLabelsColumnChart) {
        var options = {
            series: [
                {
                    name: "Servings",
                    data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35]
                }
            ],
            annotations: {
                points: [
                    {
                        x: "Bananas",
                        seriesIndex: 0,
                        label: {
                            borderColor: "#605DFF",
                            offsetY: 0,
                            style: {
                                fontSize: '14px',
                                color: "#ffffff",
                                background: "#605DFF"
                            },
                            text: "Bananas are good"
                        }
                    }
                ]
            },
            chart: {
                height: 350,
                type: "bar",
                toolbar: {
                    show: true
                }
            },
            plotOptions: {
                bar: {
                    columnWidth: "50%",
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: 2
            },
            grid: {
                show: true,
                borderColor: "#ECEEF2"
            },
            xaxis: {
                axisBorder: {
                    show: false,
                    color: '#ECEEF2'
                },
                axisTicks: {
                    show: false,
                    color: '#ECEEF2'
                },
                labels: {
                    rotate: -45,
                    show: true,
                    style: {
                        colors: "#64748B",
                        fontSize: "13px"
                    }
                },
                categories: [
                    "Apples",
                    "Oranges",
                    "Strawberries",
                    "Pineapples",
                    "Mangoes",
                    "Bananas",
                    "Blackberries",
                    "Pears",
                    "Watermelons",
                    "Cherries",
                    "Pomegranates",
                    "Tangerines",
                    "Papayas"
                ],
                tickPlacement: "on"
            },
            yaxis: {
                title: {
                    text: "Servings",
                    style: {
                        color: "#3A4252",
                        fontSize: "14px",
                        fontWeight: 500
                    }
                },
                labels: {
                    show: true,
                    style: {
                        colors: "#64748B",
                        fontSize: "12px"
                    }
                },
                axisBorder: {
                    show: false,
                    color: '#ECEEF2'
                },
                axisTicks: {
                    show: false,
                    color: '#ECEEF2'
                }
            },
            fill: {
                type: "gradient",
                gradient: {
                    shade: "light",
                    type: "horizontal",
                    shadeIntensity: 0.25,
                    gradientToColors: undefined,
                    inverseColors: true,
                    opacityFrom: 0.85,
                    opacityTo: 0.85,
                    // stops: [50, 0, 100]
                }
            }
        };
        var chart = new ApexCharts(document.querySelector("#rotatedLabelsColumnChart"), options);
        chart.render();
    }

    // Distributed Column Chart
    const distributedColumnChart = document.getElementById("distributedColumnChart");
    if (distributedColumnChart) {
        var options = {
            series: [
                {
                    name: "distibuted",
                    data: [21, 22, 10, 28, 16, 21, 13, 30]
                }
            ],
            chart: {
                height: 370,
                type: "bar",
                events: {
                    click: function(chart, w, e) {
                        // console.log(chart, w, e)
                    }
                },
                toolbar: {
                    show: false
                }
            },
            colors: [
                "#605DFF",
                "#796df6",
                "#00cae3",
                "#ffb264",
                "#2ed47e",
                "#e74c3c",
                "#26a69a",
                "#d10ce8"
            ],
            plotOptions: {
                bar: {
                    columnWidth: "45%",
                    distributed: true
                }
            },
            dataLabels: {
                enabled: false
            },
            legend: {
                show: false,
                position: 'top',
                fontSize: '12px',
                horizontalAlign: 'center',
                itemMargin: {
                    horizontal: 8,
                    vertical: 0
                },
                labels: {
                    colors: '#64748B'
                },
                markers: {
                    size: 6,
                    offsetX: -2,
                    offsetY: -.5,
                    shape: 'circle'
                }
            },
            grid: {
                show: true,
                borderColor: "#ECEEF2"
            },
            xaxis: {
                categories: [
                    ["John", "Doe"],
                    ["Joe", "Smith"],
                    ["Jake", "Williams"],
                    "Amber",
                    ["Peter", "Brown"],
                    ["Mary", "Evans"],
                    ["David", "Wilson"],
                    ["Lily", "Roberts"]
                ],
                labels: {
                    show: true,
                    style: {
                        colors: [
                            "#605DFF",
                            "#796df6",
                            "#00cae3",
                            "#ffb264",
                            "#2ed47e",
                            "#e74c3c",
                            "#26a69a",
                            "#d10ce8"
                        ],
                        fontSize: "12px"
                    }
                },
                axisTicks: {
                    show: false,
                    color: '#ECEEF2'
                },
                axisBorder: {
                    show: false,
                    color: '#ECEEF2'
                }
            },
            yaxis: {
                labels: {
                    show: true,
                    style: {
                        colors: "#64748B",
                        fontSize: "12px"
                    }
                },
                axisBorder: {
                    show: false,
                    color: '#ECEEF2'
                },
                axisTicks: {
                    show: false,
                    color: '#ECEEF2'
                }
            }
        };
        var chart = new ApexCharts(document.querySelector("#distributedColumnChart"), options);
        chart.render();
    }

    // Line & Column Chart
    const lineColumnChart = document.getElementById("lineColumnChart");
    if (lineColumnChart) {
        var options = {
            series: [
                {
                    name: "Website Blog",
                    type: "column",
                    data: [440, 505, 414, 671, 227, 413, 201, 352, 752]
                },
                {
                    name: "Social Media",
                    type: "line",
                    data: [23, 42, 35, 27, 43, 22, 17, 31, 22]
                }
            ],
            chart: {
                height: 350,
                type: "line",
                toolbar: {
                    show: true
                }
            },
            stroke: {
                width: [0, 4]
            },
            // title: {
            //     text: "Traffic Sources",
            //     align: "left",
            //     offsetX: -9,
            //     style: {
            //         fontWeight: '500',
            //         fontSize: '14px',
            //         color: '#64748B'
            //     }
            // },
            dataLabels: {
                enabled: true,
                enabledOnSeries: [1],
                style: {
                    fontSize: '12px'
                }
            },
            labels: [
                "01 Jan",
                "02 Jan",
                "03 Jan",
                "04 Jan",
                "05 Jan",
                "06 Jan",
                "07 Jan",
                "08 Jan",
                "09 Jan"
            ],
            xaxis: {
                type: "datetime",
                axisTicks: {
                    show: false,
                    color: '#ECEEF2'
                },
                axisBorder: {
                    show: false,
                    color: '#ECEEF2'
                },
                labels: {
                    show: true,
                    style: {
                        colors: "#8695AA",
                        fontSize: "12px"
                    }
                }
            },
            grid: {
                show: true,
                borderColor: "#ECEEF2"
            },
            colors: [
                "#605DFF"
            ],
            legend: {
                show: true,
                position: 'top',
                fontSize: '12px',
                horizontalAlign: 'left',
                itemMargin: {
                    horizontal: 8,
                    vertical: 0
                },
                labels: {
                    colors: '#64748B'
                },
                markers: {
                    size: 6,
                    offsetX: -2,
                    offsetY: -.5,
                    shape: 'circle'
                }
            },
            yaxis: [
                {
                    tickAmount: 5,
                    title: {
                        text: "Website Blog",
                        style: {
                            color: 'transparent'
                        }
                    },
                    labels: {
                        show: true,
                        style: {
                            colors: "#64748B",
                            fontSize: "12px"
                        }
                    },
                    axisBorder: {
                        show: false,
                        color: '#ECEEF2'
                    },
                    axisTicks: {
                        show: false,
                        color: '#ECEEF2'
                    }
                },
                {
                    tickAmount: 5,
                    opposite: true,
                    title: {
                        text: "Social Media",
                        style: {
                            color: 'transparent'
                        }
                    },
                    labels: {
                        show: true,
                        style: {
                            colors: "#64748B",
                            fontSize: "12px"
                        }
                    },
                    axisBorder: {
                        show: false,
                        color: '#ECEEF2'
                    },
                    axisTicks: {
                        show: false,
                        color: '#ECEEF2'
                    }
                }
            ]
        };
        var chart = new ApexCharts(document.querySelector("#lineColumnChart"), options);
        chart.render();
    }

    // Multiple Y-Axis Chart
    const multipleYAxisChart = document.getElementById("multipleYAxisChart");
    if (multipleYAxisChart) {
        var options = {
            series: [
                {
                    name: "Income",
                    type: "column",
                    data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
                },
                {
                    name: "Cashflow",
                    type: "column",
                    data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
                },
                {
                    name: "Revenue",
                    type: "line",
                    data: [20, 29, 37, 36, 44, 45, 50, 58]
                }
            ],
            chart: {
                height: 350,
                type: "line",
                stacked: false
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: [1, 1, 4]
            },
            title: {
                text: "XYZ - Stock Analysis (2009 - 2016)",
                align: "left",
                offsetX: 110,
                style: {
                    fontWeight: '500',
                    fontSize: '14px',
                    color: '#64748B'
                }
            },
            xaxis: {
                categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
                axisTicks: {
                    show: false,
                    color: '#ECEEF2'
                },
                axisBorder: {
                    show: false,
                    color: '#ECEEF2'
                },
                labels: {
                    show: true,
                    style: {
                        colors: "#8695AA",
                        fontSize: "12px"
                    }
                }
            },
            yaxis: [
                {
                    labels: {
                        show: true,
                        style: {
                            colors: "#64748B",
                            fontSize: "12px"
                        }
                    },
                    axisBorder: {
                        show: false,
                        color: '#ECEEF2'
                    },
                    axisTicks: {
                        show: false,
                        color: '#ECEEF2'
                    },
                    title: {
                        text: "Income (thousand crores)",
                        style: {
                            color: "#e74c3c",
                            fontWeight: 400
                        }
                    },
                    tooltip: {
                        enabled: true
                    }
                },
                {
                    seriesName: "Income",
                    opposite: true,
                    labels: {
                        show: true,
                        style: {
                            colors: "#64748B",
                            fontSize: "12px"
                        }
                    },
                    axisBorder: {
                        show: false,
                        color: '#ECEEF2'
                    },
                    axisTicks: {
                        show: false,
                        color: '#ECEEF2'
                    },
                    title: {
                        text: "Operating Cashflow (thousand crores)",
                        style: {
                            color: "#0f79f3",
                            fontWeight: 400
                        }
                    }
                },
                {
                    seriesName: "Revenue",
                    opposite: true,
                    labels: {
                        show: true,
                        style: {
                            colors: "#64748B",
                            fontSize: "12px"
                        }
                    },
                    axisBorder: {
                        show: false,
                        color: '#ECEEF2'
                    },
                    axisTicks: {
                        show: false,
                        color: '#ECEEF2'
                    },
                    title: {
                        text: "Revenue (thousand crores)",
                        style: {
                            color: "#796df6",
                            fontWeight: 400
                        }
                    }
                }
            ],
            tooltip: {
                fixed: {
                    enabled: true,
                    position: "topLeft", // topRight, topLeft, bottomRight, bottomLeft
                    offsetY: 30,
                    offsetX: 60
                }
            },
            grid: {
                show: true,
                borderColor: "#ECEEF2"
            },
            legend: {
                horizontalAlign: "left",
                fontSize: '12px',
                offsetX: 40,
                offsetY: 5,
                show: true,
                labels: {
                    colors: '#64748B'
                },
                itemMargin: {
                    horizontal: 8,
                    vertical: 0
                },
                markers: {
                    size: 6,
                    offsetX: -2,
                    offsetY: -.5,
                    shape: 'circle'
                }
            }
        };
        var chart = new ApexCharts(document.querySelector("#multipleYAxisChart"), options);
        chart.render();
    }

    // Line & Area Chart
    const lineAreaChart = document.getElementById("lineAreaChart");
    if (lineAreaChart) {
        var options = {
            series: [
                {
                    name: "Team A",
                    type: "area",
                    data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47]
                },
                {
                    name: "Team B",
                    type: "line",
                    data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61]
                }
            ],
            chart: {
                height: 350,
                type: "line",
                toolbar: {
                    show: false
                }
            },
            stroke: {
                curve: "smooth"
            },
            colors: [
                "#AD63F6", "#FF4023"
            ],
            fill: {
                type: "solid",
                opacity: [0.35, 1]
            },
            labels: [
                "Dec 01",
                "Dec 02",
                "Dec 03",
                "Dec 04",
                "Dec 05",
                "Dec 06",
                "Dec 07",
                "Dec 08",
                "Dec 09 ",
                "Dec 10"
            ],
            markers: {
                size: 0
            },
            yaxis: [
                {
                    title: {
                        text: "Series A",
                        style: {
                            color: "#3A4252",
                            fontSize: "14px",
                            fontWeight: 500
                        }
                    },
                    labels: {
                        show: true,
                        style: {
                            colors: "#64748B",
                            fontSize: "12px"
                        }
                    },
                    axisBorder: {
                        show: false,
                        color: '#ECEEF2'
                    },
                    axisTicks: {
                        show: false,
                        color: '#ECEEF2'
                    }
                },
                {
                    opposite: true,
                    title: {
                        text: "Series B",
                        style: {
                            color: "#3A4252",
                            fontSize: "14px",
                            fontWeight: 500
                        }
                    },
                    labels: {
                        show: true,
                        style: {
                            colors: "#64748B",
                            fontSize: "12px"
                        }
                    },
                    axisBorder: {
                        show: false,
                        color: '#ECEEF2'
                    },
                    axisTicks: {
                        show: false,
                        color: '#ECEEF2'
                    }
                }
            ],
            xaxis: {
                axisTicks: {
                    show: false,
                    color: '#ECEEF2'
                },
                axisBorder: {
                    show: false,
                    color: '#ECEEF2'
                },
                labels: {
                    show: true,
                    style: {
                        colors: "#8695AA",
                        fontSize: "12px"
                    }
                }
            },
            tooltip: {
                shared: true,
                intersect: false,
                y: {
                    formatter: function(y) {
                        if (typeof y !== "undefined") {
                            return y.toFixed(0) + " points";
                        }
                        return y;
                    }
                }
            },
            legend: {
                show: true,
                position: 'top',
                fontSize: '12px',
                horizontalAlign: 'center',
                itemMargin: {
                    horizontal: 8,
                    vertical: 0
                },
                labels: {
                    colors: '#64748B'
                },
                markers: {
                    size: 6,
                    offsetX: -2,
                    offsetY: -.5,
                    shape: 'circle'
                }
            },
            grid: {
                show: true,
                borderColor: "#ECEEF2"
            }
        };
        var chart = new ApexCharts(document.querySelector("#lineAreaChart"), options);
        chart.render();
    }

    // Line, Column & Area Chart
    const lineColumnAreaChart = document.getElementById("lineColumnAreaChart");
    if (lineColumnAreaChart) {
        var options = {
            series: [
                {
                    name: "Team A",
                    type: "column",
                    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
                },
                {
                    name: "Team B",
                    type: "area",
                    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
                },
                {
                    name: "Team C",
                    type: "line",
                    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
                }
            ],
            chart: {
                height: 350,
                type: "line",
                stacked: false,
                toolbar: {
                    show: false
                }
            },
            colors: [
                "#605DFF", "#00cae3", "#e74c3c"
            ],
            stroke: {
                width: [0, 2, 5],
                curve: "smooth"
            },
            plotOptions: {
                bar: {
                    columnWidth: "50%"
                }
            },
            fill: {
                opacity: [0.85, 0.25, 1],
                gradient: {
                    inverseColors: false,
                    shade: "light",
                    type: "vertical",
                    opacityFrom: 0.85,
                    opacityTo: 0.55,
                    // stops: [0, 100, 100, 100]
                }
            },
            labels: [
                "01/01/2024",
                "02/01/2024",
                "03/01/2024",
                "04/01/2024",
                "05/01/2024",
                "06/01/2024",
                "07/01/2024",
                "08/01/2024",
                "09/01/2024",
                "10/01/2024",
                "11/01/2024"
            ],
            markers: {
                size: 0
            },
            xaxis: {
                type: "datetime",
                axisTicks: {
                    show: false,
                    color: '#ECEEF2'
                },
                axisBorder: {
                    show: false,
                    color: '#ECEEF2'
                },
                labels: {
                    show: true,
                    style: {
                        colors: "#8695AA",
                        fontSize: "12px"
                    }
                }
            },
            yaxis: {
                title: {
                    text: "Points",
                    style: {
                        color: "#3A4252",
                        fontSize: "14px",
                        fontWeight: 500
                    }
                },
                min: 0,
                labels: {
                    show: true,
                    style: {
                        colors: "#64748B",
                        fontSize: "12px"
                    }
                },
                axisBorder: {
                    show: false,
                    color: '#ECEEF2'
                },
                axisTicks: {
                    show: false,
                    color: '#ECEEF2'
                }
            },
            tooltip: {
                shared: true,
                intersect: false,
                y: {
                    formatter: function(y) {
                        if (typeof y !== "undefined") {
                            return y.toFixed(0) + " points";
                        }
                        return y;
                    }
                }
            },
            legend: {
                show: true,
                position: 'top',
                fontSize: '12px',
                horizontalAlign: 'center',
                itemMargin: {
                    horizontal: 8,
                    vertical: 0
                },
                labels: {
                    colors: '#64748B'
                },
                markers: {
                    size: 6,
                    offsetX: -2,
                    offsetY: -.5,
                    shape: 'circle'
                }
            },
            grid: {
                show: true,
                borderColor: "#ECEEF2"
            }
        };
        var chart = new ApexCharts(document.querySelector("#lineColumnAreaChart"), options);
        chart.render();
    }

    // Basic RadialBar Chart
    const basicRadialBarChart = document.getElementById("basicRadialBarChart");
    if (basicRadialBarChart) {
        var options = {
            series: [70],
            chart: {
                height: 350,
                type: "radialBar"
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: "70%"
                    }
                }
            },
            labels: ["Cricket"],
            colors: ["#605DFF"]
        };
        var chart = new ApexCharts(document.querySelector("#basicRadialBarChart"), options);
        chart.render();
    }

    // Multiple RadialBar Chart
    const multipleRadialBarChart = document.getElementById("multipleRadialBarChart");
    if (multipleRadialBarChart) {
        var options = {
            series: [44, 55, 67, 83],
            chart: {
                height: 350,
                type: "radialBar"
            },
            plotOptions: {
                radialBar: {
                    dataLabels: {
                        name: {
                            fontSize: "22px"
                        },
                        value: {
                            fontSize: "16px"
                        },
                        total: {
                            show: true,
                            label: "Total",
                            formatter: function(w) {
                                return "249";
                            }
                        }
                    }
                }
            },
            labels: ["Apples", "Oranges", "Bananas", "Berries"],
            colors: [
                "#3584FC", "#FF4023", "#ffc107", "#605DFF"
            ]
        };
        var chart = new ApexCharts(document.querySelector("#multipleRadialBarChart"), options);
        chart.render();
    }

    // Custom Angle Circle RadialBar Chart
    const customAngleCircleRadialBarChart = document.getElementById("customAngleCircleRadialBarChart");
    if (customAngleCircleRadialBarChart) {
        var options = {
            series: [100, 90, 80, 70],
            chart: {
                height: 350,
                type: "radialBar"
            },
            plotOptions: {
                radialBar: {
                    offsetY: 0,
                    startAngle: 0,
                    endAngle: 270,
                    hollow: {
                        margin: 10,
                        size: "30%",
                        image: undefined,
                        background: "transparent"
                    },
                    dataLabels: {
                        name: {
                            show: false
                        },
                        value: {
                            show: false
                        }
                    }
                }
            },
            colors: [
                "#757FEF", "#9EA5F4", "#C8CCF9", "#F1F2FD"
            ],
            labels: [
                "Completed", "Active", "Assigned", "Pending"
            ],
            legend: {
                show: true,
                offsetY: 0,
                offsetX: -20,
                floating: true,
                position: "left",
                fontSize: "13px",
                labels: {
                    colors: '#64748B'
                },
                formatter: function(seriesName, opts) {
                    return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
                },
                itemMargin: {
                    horizontal: 0,
                    vertical: 4
                }
            }
        };
        var chart = new ApexCharts(document.querySelector("#customAngleCircleRadialBarChart"), options);
        chart.render();
    }

    // Gradient RadialBar Chart
    const gradientRadialBarChart = document.getElementById("gradientRadialBarChart");
    if (gradientRadialBarChart) {
        var options = {
            series: [75],
            chart: {
                height: 350,
                type: "radialBar",
                toolbar: {
                    show: true
                }
            },
            plotOptions: {
                radialBar: {
                    startAngle: -135,
                    endAngle: 225,
                    hollow: {
                        margin: 0,
                        size: "70%",
                        background: "#ffffff",
                        image: undefined,
                        position: "front",
                        dropShadow: {
                            enabled: true,
                            top: 3,
                            left: 0,
                            blur: 4,
                            opacity: 0.24
                        }
                    },
                    track: {
                        background: "#ffffff",
                        strokeWidth: "67%",
                        margin: 0, // margin is in pixels
                        dropShadow: {
                            enabled: true,
                            top: -3,
                            left: 0,
                            blur: 4,
                            opacity: 0.35
                        }
                    },
                    dataLabels: {
                        show: true,
                        name: {
                            offsetY: -10,
                            show: true,
                            color: "#64748B",
                            fontSize: "17px"
                        },
                        value: {
                            formatter: function(val) {
                                return parseInt(val.toString(), 10).toString();
                            },
                            color: "#3A4252",
                            fontSize: "36px",
                            show: true
                        }
                    }
                }
            },
            fill: {
                type: "gradient",
                gradient: {
                    shade: "dark",
                    type: "horizontal",
                    shadeIntensity: 0.5,
                    gradientToColors: ["#ABE5A1"],
                    inverseColors: true,
                    opacityFrom: 1,
                    opacityTo: 1,
                    // stops: [0, 100]
                }
            },
            stroke: {
                lineCap: "round"
            },
            labels: ["Percent"]
        };
        var chart = new ApexCharts(document.querySelector("#gradientRadialBarChart"), options);
        chart.render();
    }

    // Strocked Circular Gauge RadialBar Chart
    const strockedCircularGaugeRadialBarChart = document.getElementById("strockedCircularGaugeRadialBarChart");
    if (strockedCircularGaugeRadialBarChart) {
        var options = {
            series: [67],
            chart: {
                height: 370,
                type: "radialBar",
                offsetY: -10
            },
            plotOptions: {
                radialBar: {
                    startAngle: -135,
                    endAngle: 135,
                    dataLabels: {
                        name: {
                            fontSize: "16px",
                            color: undefined,
                            offsetY: 120
                        },
                        value: {
                            offsetY: 76,
                            fontSize: "22px",
                            color: undefined,
                            formatter: function(val) {
                                return val + "%";
                            }
                        }
                    }
                }
            },
            fill: {
                type: "gradient",
                gradient: {
                    shade: "dark",
                    shadeIntensity: 0.15,
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 1,
                    // stops: [0, 50, 65, 91]
                }
            },
            stroke: {
                dashArray: 4
            },
            labels: ["Median Ratio"],
            colors: ["#605DFF"]
        };
        var chart = new ApexCharts(document.querySelector("#strockedCircularGaugeRadialBarChart"), options);
        chart.render();
    }

    // Semi Circular Gauge RadialBar Chart
    const semiCircularGaugeRadialBarChart = document.getElementById("semiCircularGaugeRadialBarChart");
    if (semiCircularGaugeRadialBarChart) {
        var options = {
            series: [76],
            chart: {
                type: "radialBar",
                offsetY: -20
            },
            plotOptions: {
                radialBar: {
                    startAngle: -90,
                    endAngle: 90,
                    track: {
                        background: "#e7e7e7",
                        strokeWidth: "97%",
                        margin: 5, // margin is in pixels
                        dropShadow: {
                            enabled: true,
                            top: 2,
                            left: 0,
                            opacity: 0.31,
                            blur: 2
                        }
                    },
                    dataLabels: {
                        name: {
                            show: false
                        },
                        value: {
                            offsetY: -2,
                            fontSize: "22px"
                        }
                    }
                }
            },
            fill: {
                type: "gradient",
                gradient: {
                    shade: "light",
                    shadeIntensity: 0.4,
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 1,
                    // stops: [0, 50, 53, 91]
                }
            },
            labels: ["Average Results"],
            colors: ["#605DFF"]
        };
        var chart = new ApexCharts(document.querySelector("#semiCircularGaugeRadialBarChart"), options);
        chart.render();
    }

    // Basic Radar Chart
    const basicRadarChart = document.getElementById("basicRadarChart");
    if (basicRadarChart) {
        var options = {
            series: [
                {
                    name: "Trezo",
                    data: [80, 50, 30, 40, 100, 20]
                }
            ],
            chart: {
                height: 350,
                type: "radar",
                toolbar: {
                    show: true
                }
            },
            title: {
                text: "Basic Radar Chart",
                align: "left",
                offsetX: -9,
                style: {
                    fontWeight: '500',
                    fontSize: '14px',
                    color: '#64748B'
                }
            },
            xaxis: {
                categories: ["January", "February", "March", "April", "May", "June"]
            },
            colors: ["#605DFF"],
            yaxis: {
                show: true,
                tickAmount: 4
            }
        };
        var chart = new ApexCharts(document.querySelector("#basicRadarChart"), options);
        chart.render();
    }

    // Multiple Radar Chart
    const multipleRadarChart = document.getElementById("multipleRadarChart");
    if (multipleRadarChart) {
        var options = {
            series: [
                {
                    name: "Series Blue",
                    data: [80, 50, 30, 40, 100, 20]
                },
                {
                    name: "Series Green",
                    data: [20, 30, 40, 80, 20, 80]
                },
                {
                    name: "Series Orange",
                    data: [44, 76, 78, 13, 43, 10]
                }
            ],
            chart: {
                height: 350,
                type: "radar",
                dropShadow: {
                    enabled: true,
                    blur: 1,
                    left: 1,
                    top: 1
                }
            },
            title: {
                text: "Radar Chart - Multi Series",
                align: "left",
                offsetX: -9,
                style: {
                    fontWeight: '500',
                    fontSize: '14px',
                    color: '#64748B'
                }
            },
            stroke: {
                width: 0
            },
            fill: {
                opacity: 0.4
            },
            markers: {
                size: 0
            },
            xaxis: {
                categories: ["2011", "2012", "2013", "2014", "2015", "2016"],
                labels: {
                    style: {
                        colors: "#8695AA",
                        fontSize: "12px"
                    }
                }
            },
            legend: {
                show: true,
                position: 'bottom',
                fontSize: '12px',
                horizontalAlign: 'center',
                itemMargin: {
                    horizontal: 8,
                    vertical: 0
                },
                labels: {
                    colors: '#64748B'
                },
                markers: {
                    size: 6,
                    offsetX: -2,
                    offsetY: -.5,
                    shape: 'circle'
                }
            }
        };
        var chart = new ApexCharts(document.querySelector("#multipleRadarChart"), options);
        chart.render();
    }

    // Polygon Radar Chart
    const polygonRadarChart = document.getElementById("polygonRadarChart");
    if (polygonRadarChart) {
        var options = {
            series: [
                {
                    name: "Series 1",
                    data: [20, 100, 40, 30, 50, 80, 33]
                }
            ],
            chart: {
                height: 350,
                type: "radar"
            },
            dataLabels: {
                enabled: true
            },
            plotOptions: {
                radar: {
                    size: 140,
                    polygons: {
                        fill: {
                            colors: ["#f8f8f8", "#ffffff"]
                        }
                    }
                }
            },
            title: {
                text: "Radar with Polygon Fill",
                align: "left",
                offsetX: -9,
                style: {
                    fontWeight: '500',
                    fontSize: '14px',
                    color: '#64748B'
                }
            },
            colors: [
                "#605DFF"
            ],
            markers: {
                size: 4,
                colors: ["#ffffff"],
                strokeColors: ["#0f79f3"],
                strokeWidth: 2
            },
            tooltip: {
                y: {
                    formatter: function(val) {
                        return val;
                    }
                }
            },
            xaxis: {
                categories: [
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                ]
            },
            yaxis: {
                tickAmount: 7
            }
        };
        var chart = new ApexCharts(document.querySelector("#polygonRadarChart"), options);
        chart.render();
    }

    // Basic Pie Chart
    const basicPieChart = document.getElementById("basicPieChart");
    if (basicPieChart) {
        var options = {
            series: [60, 30, 10],
            chart: {
                height: 360,
                type: "pie"
            },
            labels: [
                "Completed", "New Order", "Pending"
            ],
            colors: [
                "#37D80A", "#605DFF", "#AD63F6"
            ],
            legend: {
                show: true,
                fontSize: '12px',
                position: 'bottom',
                horizontalAlign: 'center',
                itemMargin: {
                    horizontal: 8,
                    vertical: 0
                },
                labels: {
                    colors: '#64748B'
                },
                markers: {
                    size: 6,
                    offsetX: -2,
                    offsetY: -.5,
                    shape: 'circle'
                }
            },
            dataLabels: {
                enabled: false
            }
        };
        var chart = new ApexCharts(document.querySelector("#basicPieChart"), options);
        chart.render();
    }

    // Pie Donut Chart
    const pieDonutChart = document.getElementById("pieDonutChart");
    if (pieDonutChart) {
        var options = {
            series: [60, 30, 10],
            chart: {
                height: 360,
                type: "donut"
            },
            labels: [
                "Completed", "New Order", "Pending"
            ],
            colors: [
                "#37D80A", "#605DFF", "#AD63F6"
            ],
            legend: {
                show: true,
                fontSize: '12px',
                position: 'bottom',
                horizontalAlign: 'center',
                itemMargin: {
                    horizontal: 8,
                    vertical: 0
                },
                labels: {
                    colors: '#64748B'
                },
                markers: {
                    size: 6,
                    offsetX: -2,
                    offsetY: -.5,
                    shape: 'circle'
                }
            },
            dataLabels: {
                enabled: false
            }
        };
        var chart = new ApexCharts(document.querySelector("#pieDonutChart"), options);
        chart.render();
    }

    // Pie Monochrome Chart
    const pieMonochromeChart = document.getElementById("pieMonochromeChart");
    if (pieMonochromeChart) {
        var options = {
            series: [25, 15, 44, 55, 41, 17],
            chart: {
                type: "pie"
            },
            labels: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ],
            theme: {
                monochrome: {
                    enabled: true
                }
            },
            legend: {
                show: true,
                offsetY: 0,
                fontSize: '12px',
                labels: {
                    colors: '#64748B'
                },
                itemMargin: {
                    horizontal: 0,
                    vertical: 5
                },
                markers: {
                    size: 6,
                    offsetX: -2,
                    offsetY: -.5,
                    shape: 'circle'
                }
            },
            dataLabels: {
                enabled: false
            }
        };
        var chart = new ApexCharts(document.querySelector("#pieMonochromeChart"), options);
        chart.render();
    }

    // Basic Polar Chart
    const basicPolarChart = document.getElementById("basicPolarChart");
    if (basicPolarChart) {
        var options = {
            series: [
                14, 23, 21, 17, 15, 10, 12, 17, 21
            ],
            chart: {
                height: 500,
                type: "polarArea"
            },
            stroke: {
                colors: ["#ffffff"]
            },
            fill: {
                opacity: 0.8
            },
            labels: [
                'Bananas', 'Apples', 'Grapes', 'Papayas', 'Mangos', 'Blueberrys', 'Cherrys', 'Oranges', 'Pineapples'
            ],
            grid: {
                show: true,
                borderColor: "#ECEEF2"
            },
            legend: {
                show: true,
                position: 'bottom',
                fontSize: '12px',
                horizontalAlign: 'center',
                itemMargin: {
                    horizontal: 8,
                    vertical: 0
                },
                labels: {
                    colors: '#64748B'
                },
                markers: {
                    size: 6,
                    offsetX: -2,
                    offsetY: -.5,
                    shape: 'circle'
                }
            }
        };
        var chart = new ApexCharts(document.querySelector("#basicPolarChart"), options);
        chart.render();
    }

    // Monochrome Polar Chart
    const monochromePolarChart = document.getElementById("monochromePolarChart");
    if (monochromePolarChart) {
        var options = {
            series: [
                42, 39, 35, 29, 26
            ],
            chart: {
                height: 500,
                type: 'polarArea'
            },
            labels: [
                'Rose A', 'Rose B', 'Rose C', 'Rose D', 'Rose E'
            ],
            fill: {
                opacity: 1
            },
            stroke: {
                width: 1,
                colors: undefined
            },
            yaxis: {
                show: false
            },
            legend: {
                show: true,
                position: 'bottom',
                fontSize: '12px',
                horizontalAlign: 'center',
                itemMargin: {
                    horizontal: 8,
                    vertical: 0
                },
                labels: {
                    colors: '#64748B'
                },
                markers: {
                    size: 6,
                    offsetX: -2,
                    offsetY: -.5,
                    shape: 'circle'
                }
            },
            plotOptions: {
                polarArea: {
                    rings: {
                        strokeWidth: 0
                    }
                }
            },
            theme: {
                monochrome: {
                    // enabled: true,
                    shadeTo: 'light',
                    shadeIntensity: 0.6
                }
            }
        };
        var chart = new ApexCharts(document.querySelector("#monochromePolarChart"), options);
        chart.render();
    }

    // Basic Range Area Chart
    const basicRangeAreaChart = document.getElementById("basicRangeAreaChart");
    if (basicRangeAreaChart) {
        var options = {
            series: [
                {
                    name: "New York Temperature",
                    data: [
                        {
                            x: "Jan",
                            y: [-2, 4]
                        },
                        {
                            x: "Feb",
                            y: [-1, 6]
                        },
                        {
                            x: "Mar",
                            y: [3, 10]
                        },
                        {
                            x: "Apr",
                            y: [8, 16]
                        },
                        {
                            x: "May",
                            y: [13, 22]
                        },
                        {
                            x: "Jun",
                            y: [18, 26]
                        },
                        {
                            x: "Jul",
                            y: [21, 29]
                        },
                        {
                            x: "Aug",
                            y: [21, 28]
                        },
                        {
                            x: "Sep",
                            y: [17, 24]
                        },
                        {
                            x: "Oct",
                            y: [11, 18]
                        },
                        {
                            x: "Nov",
                            y: [6, 12]
                        },
                        {
                            x: "Dec",
                            y: [1, 7]
                        }
                    ]
                }
            ],
            chart: {
                height: 350,
                type: "rangeArea",
                toolbar: {
                    show: true
                }
            },
            stroke: {
                curve: "straight"
            },
            title: {
                text: "New York Temperature (all year round)",
                align: "left",
                offsetX: -9,
                style: {
                    fontWeight: '500',
                    fontSize: '14px',
                    color: '#64748B'
                }
            },
            colors: [
                "#605DFF"
            ],
            markers: {
                hover: {
                    sizeOffset: 5
                }
            },
            dataLabels: {
                enabled: false
            },
            yaxis: {
                labels: {
                    show: true,
                    formatter: (val) => {
                        return val + "°C";
                    },
                    style: {
                        colors: "#64748B",
                        fontSize: "12px"
                    }
                },
                axisBorder: {
                    show: false,
                    color: '#ECEEF2'
                },
                axisTicks: {
                    show: false,
                    color: '#ECEEF2'
                }
            },
            xaxis: {
                axisTicks: {
                    show: false,
                    color: '#ECEEF2'
                },
                axisBorder: {
                    show: false,
                    color: '#ECEEF2'
                },
                labels: {
                    show: true,
                    style: {
                        colors: "#8695AA",
                        fontSize: "12px"
                    }
                }
            },
            grid: {
                show: true,
                borderColor: "#ECEEF2"
            }
        };
        var chart = new ApexCharts(document.querySelector("#basicRangeAreaChart"), options);
        chart.render();
    }

    // Basic Timeline Chart
    const basicTimelineChart = document.getElementById("basicTimelineChart");
    if (basicTimelineChart) {
        var options = {
            series: [
                {
                    data: [
                        {
                            x: "Code",
                            y: [
                                new Date("2019-03-02").getTime(),
                                new Date("2019-03-04").getTime()
                            ]
                        },
                        {
                            x: "Test",
                            y: [
                                new Date("2019-03-04").getTime(),
                                new Date("2019-03-08").getTime()
                            ]
                        },
                        {
                            x: "Validation",
                            y: [
                                new Date("2019-03-08").getTime(),
                                new Date("2019-03-12").getTime()
                            ]
                        },
                        {
                            x: "Deployment",
                            y: [
                                new Date("2019-03-12").getTime(),
                                new Date("2019-03-18").getTime()
                            ]
                        }
                    ]
                }
            ],
            chart: {
                height: 375,
                type: "rangeBar",
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    horizontal: true
                }
            },
            xaxis: {
                type: "datetime",
                axisTicks: {
                    show: false,
                    color: '#ECEEF2'
                },
                axisBorder: {
                    show: false,
                    color: '#ECEEF2'
                },
                labels: {
                    show: true,
                    style: {
                        colors: "#8695AA",
                        fontSize: "12px"
                    }
                }
            },
            yaxis: {
                labels: {
                    show: true,
                    style: {
                        colors: "#64748B",
                        fontSize: "12px"
                    }
                },
                axisBorder: {
                    show: false,
                    color: '#ECEEF2'
                },
                axisTicks: {
                    show: false,
                    color: '#ECEEF2'
                }
            },
            grid: {
                show: true,
                borderColor: "#ECEEF2"
            },
            colors: [
                "#605DFF"
            ]
        };
        var chart = new ApexCharts(document.querySelector("#basicTimelineChart"), options);
        chart.render();
    }

    // Basic Candlestick Chart
    const basicCandlestickChart = document.getElementById("basicCandlestickChart");
    if (basicCandlestickChart) {
        var options = {
            series: [
                {
                    name: "candle",
                    data: [
                        {
                            x: new Date(1538778600000),
                            y: [6629.81, 6650.5, 6623.04, 6633.33]
                        },
                        {
                            x: new Date(1538780400000),
                            y: [6632.01, 6643.59, 6620, 6630.11]
                        },
                        {
                            x: new Date(1538782200000),
                            y: [6630.71, 6648.95, 6623.34, 6635.65]
                        },
                        {
                            x: new Date(1538784000000),
                            y: [6635.65, 6651, 6629.67, 6638.24]
                        },
                        {
                            x: new Date(1538785800000),
                            y: [6638.24, 6640, 6620, 6624.47]
                        },
                        {
                            x: new Date(1538787600000),
                            y: [6624.53, 6636.03, 6621.68, 6624.31]
                        },
                        {
                            x: new Date(1538789400000),
                            y: [6624.61, 6632.2, 6617, 6626.02]
                        },
                        {
                            x: new Date(1538791200000),
                            y: [6627, 6627.62, 6584.22, 6603.02]
                        },
                        {
                            x: new Date(1538793000000),
                            y: [6605, 6608.03, 6598.95, 6604.01]
                        },
                        {
                            x: new Date(1538794800000),
                            y: [6604.5, 6614.4, 6602.26, 6608.02]
                        },
                        {
                            x: new Date(1538796600000),
                            y: [6608.02, 6610.68, 6601.99, 6608.91]
                        },
                        {
                            x: new Date(1538798400000),
                            y: [6608.91, 6618.99, 6608.01, 6612]
                        },
                        {
                            x: new Date(1538800200000),
                            y: [6612, 6615.13, 6605.09, 6612]
                        },
                        {
                            x: new Date(1538802000000),
                            y: [6612, 6624.12, 6608.43, 6622.95]
                        },
                        {
                            x: new Date(1538803800000),
                            y: [6623.91, 6623.91, 6615, 6615.67]
                        },
                        {
                            x: new Date(1538805600000),
                            y: [6618.69, 6618.74, 6610, 6610.4]
                        },
                        {
                            x: new Date(1538807400000),
                            y: [6611, 6622.78, 6610.4, 6614.9]
                        },
                        {
                            x: new Date(1538809200000),
                            y: [6614.9, 6626.2, 6613.33, 6623.45]
                        },
                        {
                            x: new Date(1538811000000),
                            y: [6623.48, 6627, 6618.38, 6620.35]
                        },
                        {
                            x: new Date(1538812800000),
                            y: [6619.43, 6620.35, 6610.05, 6615.53]
                        },
                        {
                            x: new Date(1538814600000),
                            y: [6615.53, 6617.93, 6610, 6615.19]
                        },
                        {
                            x: new Date(1538816400000),
                            y: [6615.19, 6621.6, 6608.2, 6620]
                        },
                        {
                            x: new Date(1538818200000),
                            y: [6619.54, 6625.17, 6614.15, 6620]
                        },
                        {
                            x: new Date(1538820000000),
                            y: [6620.33, 6634.15, 6617.24, 6624.61]
                        },
                        {
                            x: new Date(1538821800000),
                            y: [6625.95, 6626, 6611.66, 6617.58]
                        },
                        {
                            x: new Date(1538823600000),
                            y: [6619, 6625.97, 6595.27, 6598.86]
                        },
                        {
                            x: new Date(1538825400000),
                            y: [6598.86, 6598.88, 6570, 6587.16]
                        },
                        {
                            x: new Date(1538827200000),
                            y: [6588.86, 6600, 6580, 6593.4]
                        },
                        {
                            x: new Date(1538829000000),
                            y: [6593.99, 6598.89, 6585, 6587.81]
                        },
                        {
                            x: new Date(1538830800000),
                            y: [6587.81, 6592.73, 6567.14, 6578]
                        },
                        {
                            x: new Date(1538832600000),
                            y: [6578.35, 6581.72, 6567.39, 6579]
                        },
                        {
                            x: new Date(1538834400000),
                            y: [6579.38, 6580.92, 6566.77, 6575.96]
                        },
                        {
                            x: new Date(1538836200000),
                            y: [6575.96, 6589, 6571.77, 6588.92]
                        },
                        {
                            x: new Date(1538838000000),
                            y: [6588.92, 6594, 6577.55, 6589.22]
                        },
                        {
                            x: new Date(1538839800000),
                            y: [6589.3, 6598.89, 6589.1, 6596.08]
                        },
                        {
                            x: new Date(1538841600000),
                            y: [6597.5, 6600, 6588.39, 6596.25]
                        },
                        {
                            x: new Date(1538843400000),
                            y: [6598.03, 6600, 6588.73, 6595.97]
                        },
                        {
                            x: new Date(1538845200000),
                            y: [6595.97, 6602.01, 6588.17, 6602]
                        },
                        {
                            x: new Date(1538847000000),
                            y: [6602, 6607, 6596.51, 6599.95]
                        },
                        {
                            x: new Date(1538848800000),
                            y: [6600.63, 6601.21, 6590.39, 6591.02]
                        },
                        {
                            x: new Date(1538850600000),
                            y: [6591.02, 6603.08, 6591, 6591]
                        },
                        {
                            x: new Date(1538852400000),
                            y: [6591, 6601.32, 6585, 6592]
                        },
                        {
                            x: new Date(1538854200000),
                            y: [6593.13, 6596.01, 6590, 6593.34]
                        },
                        {
                            x: new Date(1538856000000),
                            y: [6593.34, 6604.76, 6582.63, 6593.86]
                        },
                        {
                            x: new Date(1538857800000),
                            y: [6593.86, 6604.28, 6586.57, 6600.01]
                        },
                        {
                            x: new Date(1538859600000),
                            y: [6601.81, 6603.21, 6592.78, 6596.25]
                        },
                        {
                            x: new Date(1538861400000),
                            y: [6596.25, 6604.2, 6590, 6602.99]
                        },
                        {
                            x: new Date(1538863200000),
                            y: [6602.99, 6606, 6584.99, 6587.81]
                        },
                        {
                            x: new Date(1538865000000),
                            y: [6587.81, 6595, 6583.27, 6591.96]
                        },
                        {
                            x: new Date(1538866800000),
                            y: [6591.97, 6596.07, 6585, 6588.39]
                        },
                        {
                            x: new Date(1538868600000),
                            y: [6587.6, 6598.21, 6587.6, 6594.27]
                        },
                        {
                            x: new Date(1538870400000),
                            y: [6596.44, 6601, 6590, 6596.55]
                        },
                        {
                            x: new Date(1538872200000),
                            y: [6598.91, 6605, 6596.61, 6600.02]
                        },
                        {
                            x: new Date(1538874000000),
                            y: [6600.55, 6605, 6589.14, 6593.01]
                        },
                        {
                            x: new Date(1538875800000),
                            y: [6593.15, 6605, 6592, 6603.06]
                        },
                        {
                            x: new Date(1538877600000),
                            y: [6603.07, 6604.5, 6599.09, 6603.89]
                        },
                        {
                            x: new Date(1538879400000),
                            y: [6604.44, 6604.44, 6600, 6603.5]
                        },
                        {
                            x: new Date(1538881200000),
                            y: [6603.5, 6603.99, 6597.5, 6603.86]
                        },
                        {
                            x: new Date(1538883000000),
                            y: [6603.85, 6605, 6600, 6604.07]
                        },
                        {
                            x: new Date(1538884800000),
                            y: [6604.98, 6606, 6604.07, 6606]
                        }
                    ]
                }
            ],
            chart: {
                type: "candlestick",
                height: 350,
                toolbar: {
                    show: true
                }
            },
            title: {
                text: "CandleStick Chart",
                align: "left",
                offsetX: -9,
                style: {
                    fontWeight: '500',
                    fontSize: '14px',
                    color: '#64748B'
                }
            },
            xaxis: {
                type: "datetime",
                axisTicks: {
                    show: false,
                    color: '#ECEEF2'
                },
                axisBorder: {
                    show: false,
                    color: '#ECEEF2'
                },
                labels: {
                    show: true,
                    style: {
                        colors: "#8695AA",
                        fontSize: "12px"
                    }
                }
            },
            yaxis: {
                tooltip: {
                    enabled: true
                },
                labels: {
                    show: true,
                    style: {
                        colors: "#64748B",
                        fontSize: "12px"
                    }
                },
                axisBorder: {
                    show: false,
                    color: '#ECEEF2'
                },
                axisTicks: {
                    show: false,
                    color: '#ECEEF2'
                }
            },
            grid: {
                show: true,
                borderColor: "#ECEEF2"
            }
        };
        var chart = new ApexCharts(document.querySelector("#basicCandlestickChart"), options);
        chart.render();
    }

    // Basic Boxplot Chart
    const basicBoxplotChart = document.getElementById("basicBoxplotChart");
    if (basicBoxplotChart) {
        var options = {
            series: [
                {
                    name: 'Box',
                    type: 'boxPlot',
                    data: [
                        {
                            x: new Date('2017-01-01').getTime(),
                            y: [54, 66, 69, 75, 88]
                        },
                        {
                            x: new Date('2018-01-01').getTime(),
                            y: [43, 65, 69, 76, 81]
                        },
                        {
                            x: new Date('2019-01-01').getTime(),
                            y: [31, 39, 45, 51, 59]
                        },
                        {
                            x: new Date('2020-01-01').getTime(),
                            y: [39, 46, 55, 65, 71]
                        },
                        {
                            x: new Date('2021-01-01').getTime(),
                            y: [29, 31, 35, 39, 44]
                        }
                    ]
                },
                {
                    name: 'Outliers',
                    type: 'scatter',
                    data: [
                        {
                            x: new Date('2017-01-01').getTime(),
                            y: 32
                        },
                        {
                            x: new Date('2018-01-01').getTime(),
                            y: 25
                        },
                        {
                            x: new Date('2019-01-01').getTime(),
                            y: 64
                        },
                        {
                            x: new Date('2020-01-01').getTime(),
                            y: 27
                        },
                        {
                            x: new Date('2020-01-01').getTime(),
                            y: 78
                        },
                        {
                            x: new Date('2021-01-01').getTime(),
                            y: 15
                        }
                    ]
                }
            ],
            chart: {
                height: 350,
                type: "boxPlot",
                toolbar: {
                    show: true
                }
            },
            colors: [
                '#605DFF', '#3584FC'
            ],
            title: {
                text: 'BoxPlot - Scatter Chart',
                align: 'left',
                offsetX: -9,
                style: {
                    fontWeight: '500',
                    fontSize: '14px',
                    color: '#64748B'
                }
            },
            xaxis: {
                type: 'datetime',
                axisTicks: {
                    show: false,
                    color: '#ECEEF2'
                },
                axisBorder: {
                    show: false,
                    color: '#ECEEF2'
                },
                labels: {
                    show: true,
                    style: {
                        colors: "#8695AA",
                        fontSize: "12px"
                    }
                }
            },
            tooltip: {
                shared: false,
                intersect: true
            },
            yaxis: {
                labels: {
                    show: true,
                    style: {
                        colors: "#64748B",
                        fontSize: "12px"
                    }
                },
                axisBorder: {
                    show: false,
                    color: '#ECEEF2'
                },
                axisTicks: {
                    show: false,
                    color: '#ECEEF2'
                }
            },
            grid: {
                show: true,
                borderColor: "#ECEEF2"
            },
            legend: {
                show: true,
                position: 'top',
                fontSize: '12px',
                horizontalAlign: 'center',
                itemMargin: {
                    horizontal: 8,
                    vertical: 0
                },
                labels: {
                    colors: '#64748B'
                },
                markers: {
                    size: 6,
                    offsetX: -2,
                    offsetY: -.5,
                    shape: 'circle'
                }
            }
        };
        var chart = new ApexCharts(document.querySelector("#basicBoxplotChart"), options);
        chart.render();
    }

    // Basic Bubble Chart
    const basicBubbleChart = document.getElementById("basicBubbleChart");
    if (basicBubbleChart) {
        function generateData(baseval, count, yrange) {
            var i = 0;
            var series = [];
            while (i < count) {
                var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
                var y =
                    Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
                var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;
                series.push([x, y, z]);
                baseval += 86400000;
                i++;
            }
            return series;
        }
        var options = {
            series: [
                {
                    name: 'Bubble1',
                    data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
                        min: 10,
                        max: 60
                    })
                },
                {
                    name: "Bubble 2",
                    data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
                        min: 10,
                        max: 60
                    })
                },
                {
                    name: "Bubble 3",
                    data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
                        min: 10,
                        max: 60
                    })
                },
                {
                    name: "Bubble 4",
                    data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
                        min: 10,
                        max: 60
                    })
                }
            ],
            chart: {
                height: 350,
                type: "bubble",
                toolbar: {
                    show: false
                }
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                opacity: 0.8
            },
            title: {
                text: undefined
            },
            xaxis: {
                tickAmount: 12,
                type: "category",
                axisTicks: {
                    show: false,
                    color: '#ECEEF2'
                },
                axisBorder: {
                    show: false,
                    color: '#ECEEF2'
                },
                labels: {
                    show: true,
                    style: {
                        colors: "#8695AA",
                        fontSize: "12px"
                    }
                }
            },
            yaxis: {
                max: 70,
                labels: {
                    show: true,
                    style: {
                        colors: "#64748B",
                        fontSize: "12px"
                    }
                },
                axisBorder: {
                    show: false,
                    color: '#ECEEF2'
                },
                axisTicks: {
                    show: false,
                    color: '#ECEEF2'
                }
            },
            grid: {
                show: true,
                borderColor: "#ECEEF2"
            },
            legend: {
                show: true,
                position: 'top',
                fontSize: '12px',
                horizontalAlign: 'center',
                itemMargin: {
                    horizontal: 8,
                    vertical: 0
                },
                labels: {
                    colors: '#64748B'
                },
                markers: {
                    size: 6,
                    offsetX: -2,
                    offsetY: -.5,
                    shape: 'circle'
                }
            }
        };
        var chart = new ApexCharts(document.querySelector("#basicBubbleChart"), options);
        chart.render();
    }

    // Basic Scatter Chart
    const basicScatterChart = document.getElementById("basicScatterChart");
    if (basicScatterChart) {
        var options = {
            series: [{
                name: "Sample A",
                data: [
                [16.4, 5.4], [21.7, 2], [25.4, 3], [19, 2], [10.9, 1], [13.6, 3.2], [10.9, 7.4], [10.9, 0], [10.9, 8.2], [16.4, 0], [16.4, 1.8], [13.6, 0.3], [13.6, 0], [29.9, 0], [27.1, 2.3], [16.4, 0], [13.6, 3.7], [10.9, 5.2], [16.4, 6.5], [10.9, 0], [24.5, 7.1], [10.9, 0], [8.1, 4.7], [19, 0], [21.7, 1.8], [27.1, 0], [24.5, 0], [27.1, 0], [29.9, 1.5], [27.1, 0.8], [22.1, 2]]
            },{
                name: "Sample B",
                data: [
                [36.4, 13.4], [1.7, 11], [5.4, 8], [9, 17], [1.9, 4], [3.6, 12.2], [1.9, 14.4], [1.9, 9], [1.9, 13.2], [1.4, 7], [6.4, 8.8], [3.6, 4.3], [1.6, 10], [9.9, 2], [7.1, 15], [1.4, 0], [3.6, 13.7], [1.9, 15.2], [6.4, 16.5], [0.9, 10], [4.5, 17.1], [10.9, 10], [0.1, 14.7], [9, 10], [12.7, 11.8], [2.1, 10], [2.5, 10], [27.1, 10], [2.9, 11.5], [7.1, 10.8], [2.1, 12]]
            },{
                name: "Sample C",
                data: [
                [21.7, 3], [23.6, 3.5], [24.6, 3], [29.9, 3], [21.7, 20], [23, 2], [10.9, 3], [28, 4], [27.1, 0.3], [16.4, 4], [13.6, 0], [19, 5], [22.4, 3], [24.5, 3], [32.6, 3], [27.1, 4], [29.6, 6], [31.6, 8], [21.6, 5], [20.9, 4], [22.4, 0], [32.6, 10.3], [29.7, 20.8], [24.5, 0.8], [21.4, 0], [21.7, 6.9], [28.6, 7.7], [15.4, 0], [18.1, 0], [33.4, 0], [16.4, 0]]
            }],
            chart: {
                height: 350,
                type: 'scatter',
                zoom: {
                    enabled: true,
                    type: 'xy'
                },
                toolbar: {
                    show: false
                }
            },
            colors: [
                "#ffb264", "#e74c3c", "#00cae3"
            ],
            xaxis: {
                tickAmount: 10,
                labels: {
                    formatter: function(val) {
                        return parseFloat(val).toFixed(1)
                    },
                    show: true,
                    style: {
                        colors: "#8695AA",
                        fontSize: "12px"
                    }
                },
                axisTicks: {
                    show: false,
                    color: '#ECEEF2'
                },
                axisBorder: {
                    show: false,
                    color: '#ECEEF2'
                }
            },
            yaxis: {
                tickAmount: 7,
                labels: {
                    show: true,
                    style: {
                        colors: "#64748B",
                        fontSize: "12px"
                    }
                },
                axisBorder: {
                    show: false,
                    color: '#ECEEF2'
                },
                axisTicks: {
                    show: false,
                    color: '#ECEEF2'
                }
            },
            grid: {
                show: true,
                borderColor: "#ECEEF2"
            },
            legend: {
                show: true,
                position: 'top',
                fontSize: '12px',
                horizontalAlign: 'center',
                itemMargin: {
                    horizontal: 8,
                    vertical: 0
                },
                labels: {
                    colors: '#64748B'
                },
                markers: {
                    size: 6,
                    offsetX: -2,
                    offsetY: -.5,
                    shape: 'circle'
                }
            }
        };
        var chart = new ApexCharts(document.querySelector("#basicScatterChart"), options);
        chart.render();
    }

    // Basic Heatmap Chart
    const basicHeatmapChart = document.getElementById("basicHeatmapChart");
    if (basicHeatmapChart) {
        function generateData(count, yrange) {
			var i = 0;
            var series = [];
            while (i < count) {
            var x = "w" + (i + 1).toString();
            var y =
                Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
                series.push({
                    x: x,
                    y: y
                });
                i++;
            }
            return series;
		}
        var options = {
            series: [
                {
                    name: "Metric 1",
                    data: generateData(18, {
                        min: 0,
                        max: 90
                    })
                },
                {
                    name: "Metric 2",
                    data: generateData(18, {
                        min: 0,
                        max: 90
                    })
                },
                {
                    name: "Metric 3",
                    data: generateData(18, {
                        min: 0,
                        max: 90
                    })
                },
                {
                    name: "Metric 4",
                    data: generateData(18, {
                        min: 0,
                        max: 90
                    })
                },
                {
                    name: "Metric 5",
                    data: generateData(18, {
                        min: 0,
                        max: 90
                    })
                },
                {
                    name: "Metric 6",
                    data: generateData(18, {
                        min: 0,
                        max: 90
                    })
                },
                {
                    name: "Metric 7",
                    data: generateData(18, {
                        min: 0,
                        max: 90
                    })
                },
                {
                    name: "Metric 8",
                    data: generateData(18, {
                        min: 0,
                        max: 90
                    })
                },
                {
                    name: "Metric 9",
                    data: generateData(18, {
                        min: 0,
                        max: 90
                    })
                }
            ],
            chart: {
                height: 350,
                type: "heatmap",
                toolbar: {
                    show: true
                }
            },
            dataLabels: {
                enabled: false
            },
            colors: [
                "#0f79f3"
            ],
            title: {
                text: "HeatMap Chart (Single color)",
                align: "left",
                offsetX: -9,
                style: {
                    fontWeight: '500',
                    fontSize: '14px',
                    color: '#64748B'
                }
            },
            grid: {
                show: true,
                borderColor: "#ECEEF2"
            },
            xaxis: {
                axisTicks: {
                    show: false,
                    color: '#ECEEF2'
                },
                axisBorder: {
                    show: false,
                    color: '#ECEEF2'
                },
                labels: {
                    show: true,
                    style: {
                        colors: "#8695AA",
                        fontSize: "12px"
                    }
                }
            },
            yaxis: {
                labels: {
                    show: true,
                    style: {
                        colors: "#64748B",
                        fontSize: "12px"
                    }
                },
                axisBorder: {
                    show: false,
                    color: '#ECEEF2'
                },
                axisTicks: {
                    show: false,
                    color: '#ECEEF2'
                }
            }
        };
        var chart = new ApexCharts(document.querySelector("#basicHeatmapChart"), options);
        chart.render();
    }

    // Basic Treemap Chart
    const basicTreemapChart = document.getElementById("basicTreemapChart");
    if (basicTreemapChart) {
        var options = {
            series: [
                {
                    data: [
                        {
                            x: "London",
                            y: 218
                        },
                        {
                            x: "New York",
                            y: 149
                        },
                        {
                            x: "Tokyo",
                            y: 184
                        },
                        {
                            x: "Beijing",
                            y: 55
                        },
                        {
                            x: "Paris",
                            y: 84
                        },
                        {
                            x: "Chicago",
                            y: 31
                        },
                        {
                            x: "Osaka",
                            y: 70
                        },
                        {
                            x: "İstanbul",
                            y: 30
                        },
                        {
                            x: "Bangkok",
                            y: 44
                        },
                        {
                            x: "Madrid",
                            y: 68
                        },
                        {
                            x: "Barcelona",
                            y: 28
                        },
                        {
                            x: "Toronto",
                            y: 19
                        },
                        {
                            x: "Shanghai",
                            y: 29
                        }
                    ]
                }
            ],
            chart: {
                height: 350,
                type: "treemap",
                toolbar: {
                    show: true
                }
            },
            title: {
                text: "Basic Treemap",
                align: "left",
                offsetX: -9,
                style: {
                    fontWeight: '500',
                    fontSize: '14px',
                    color: '#64748B'
                }
            }
        };
        var chart = new ApexCharts(document.querySelector("#basicTreemapChart"), options);
        chart.render();
    }
    
})();