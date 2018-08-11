$(function () {
  
    var myCharts = echarts.init($('.k-charts')[0], {
        renderer: 'canvas',
        width: $(document).width(),
        height: 'auto'
    })
    // var option;


    var base = +new Date(1968, 9, 3);
    var oneDay = 24 * 3600 * 1000;
    var date = [];

    var data = [Math.random() * 300];

    for (var i = 1; i < 20000; i++) {
        var now = new Date(base += oneDay);
        date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
        data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
    }

    var option = {
    //     tooltip: {
    //         trigger: 'axis',
    //         position: function (pt) {
    //             return [pt[0], '10%'];
    //         }
    //     },
    //     title: {
    //         left: 'center',
    //         text: '大数据量面积图',
    //     },
    //     toolbox: {
    //         feature: {
    //             dataZoom: {
    //                 yAxisIndex: 'none'
    //             },
    //             restore: {},
    //             saveAsImage: {}
    //         }
    //     },
    //     xAxis: {
    //         type: 'category',
    //         boundaryGap: false,
    //         data: date
    //     },
    //     yAxis: {
    //         type: 'value',
    //         boundaryGap: [0, '100%']
    //     },
    //     dataZoom: [{
    //         type: 'inside',
    //         start: 0,
    //         end: 10
    //     }, {
    //         start: 0,
    //         end: 10,
    //         handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
    //         handleSize: '80%',
    //         handleStyle: {
    //             color: '#fff',
    //             shadowBlur: 3,
    //             shadowColor: 'rgba(0, 0, 0, 0.6)',
    //             shadowOffsetX: 2,
    //             shadowOffsetY: 2
    //         }
    //     }],
    //     series: [{
    //         name: '模拟数据',
    //         type: 'line',
    //         smooth: true,
    //         symbol: 'none',
    //         sampling: 'average',
    //         itemStyle: {
    //             normal: {
    //                 color: 'rgb(72, 192, 252)'
    //             }
    //         },
    //         areaStyle: {
    //             normal: {
    //                 color: 'rgb(180, 230, 255)'
    //             }
    //         },
    //         data: data
    //     }],
    //     grid: {
    //         // left:'0',
    //         // right:'0',
    //         // bottom:'0',
    //         containLabel: true
    //     },
    

    
    title: {
        show: !1
    },
    toolbox: {
        show: !1
    },
    legend: {
        show: !0
    },
    xAxis: [{
        type: "category",
        boundaryGap: !1,
        data: data,
        axisTick: {
            show: !1
        },
        splitLine: {
            show: !1
        }
    }],
    yAxis: [{
        position: "right",
        type: "value",
        axisLabel: {
            formatter: "{value}"
        },
        axisTick: {
            show: !1
        },
        axisLine: {
            show: !1
        },
        scale: !0,
        splitNumber: 2
    }],
    grid: {
        top: "10%",
        left: "1%",
        right: "1%",
        bottom: "0%",
        containLabel: !0
    },
    series: [{
        type: "line",
        data: data,
        smooth: !0,
        symbol: "none",
        sampling: "average",
        itemStyle: {
            normal: {
                color: "rgb(72, 192, 252)"
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: "rgb(72, 192, 252)"
                }, {
                    offset: 1,
                    color: "rgb(255, 255, 255)"
                }])
            }
        }
    }]
    };
    myCharts.setOption(option);




 function setChart(t, e, n) {
    var a = this.$echarts.init(document.getElementById("chartCanvas")),
        i = {
            title: {
                show: !1
            },
            toolbox: {
                show: !1
            },
            legend: {
                show: !0
            },
            xAxis: [{
                type: "category",
                boundaryGap: !1,
                data: e,
                axisTick: {
                    show: !1
                },
                splitLine: {
                    show: !1
                }
            }],
            yAxis: [{
                position: "right",
                type: "value",
                axisLabel: {
                    formatter: "{value}"
                },
                axisTick: {
                    show: !1
                },
                axisLine: {
                    show: !1
                },
                scale: !0,
                splitNumber: 2
            }],
            grid: {
                top: "1%",
                left: "1%",
                right: "1%",
                bottom: "1%",
                containLabel: !0
            },
            series: [{
                type: "line",
                data: n,
                smooth: !0,
                symbol: "none",
                sampling: "average",
                itemStyle: {
                    normal: {
                        color: "rgb(255, 70, 131)"
                    }
                },
                areaStyle: {
                    normal: {
                        color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "rgb(255, 158, 68)"
                        }, {
                            offset: 1,
                            color: "rgb(255, 70, 131)"
                        }])
                    }
                }
            }]
        },
        s = {
            legend: {
                show: !0
            },
            xAxis: {
                type: "category",
                data: e
            },
            yAxis: {
                position: "right",
                scale: !0,
                axisLine: {
                    lineStyle: {
                        color: "#8392A5"
                    }
                },
                splitLine: {
                    show: !1
                }
            },
            grid: {
                top: "18%",
                left: "1%",
                right: "4%",
                bottom: "0%",
                containLabel: !0
            },
            series: [{
                type: "candlestick",
                data: n,
                smooth: !0,
                itemStyle: {
                    normal: {
                        color: "#FA322B",
                        color0: "#04BE01",
                        borderColor: "#FA322B",
                        borderColor0: "#04BE01"
                    }
                }
            }]
        };
    a.setOption("k" !== t ? i : s)
}

})