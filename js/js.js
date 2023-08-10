$(function() {
	echarts_1();
	echarts_2();
	echarts_3();
	echarts_4();


	function echarts_1() {
		// 基于准备好的dom，初始化echarts实例
		var myChart = echarts.init(document.getElementById('echart1'));

		option = {
			//  backgroundColor: '#00265f',
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'shadow'
				}
			},
			grid: {
				left: '0%',
				top: '10px',
				right: '0%',
				bottom: '4%',
				containLabel: true
			},
			xAxis: [{
				type: 'category',
				// data: ['投篮率', '三分率', '罚球率', '总篮板', '助攻', '失误', '得分'],
				axisLine: {
					show: true,
					lineStyle: {
						color: "rgba(255,255,255,.1)",
						width: 1,
						type: "solid"
					},
				},

				axisTick: {
					show: false,
				},
				axisLabel: {
					interval: 0,
					// rotate:50,
					show: true,
					splitNumber: 15,
					textStyle: {
						color: "rgba(255,255,255,.6)",
						fontSize: '12',
					},
				},
			}],
			yAxis: [{
				type: 'value',
				axisLabel: {
					//formatter: '{value} %'
					show: true,
					textStyle: {
						color: "rgba(255,255,255,.6)",
						fontSize: '12',
					},
				},
				axisTick: {
					show: false,
				},
				axisLine: {
					show: true,
					lineStyle: {
						color: "rgba(255,255,255,.1	)",
						width: 1,
						type: "solid"
					},
				},
				splitLine: {
					lineStyle: {
						color: "rgba(255,255,255,.1)",
					}
				}
			}],
			series: [{
					type: 'bar',
					// data: [200, 300, 300, 900, 1500, 1200, 600],
					barWidth: '35%', //柱子宽度
					// barGap: 1, //柱子之间间距
					itemStyle: {
						normal: {
							color: '#87ffdb',
							opacity: 1,
							barBorderRadius: 5,
						}
					}
				}

			]
		};

		//发送ajax请求，获取服务器端的数据
		$.get("http://101.201.64.226:8090/nba-analysis/top10Score", function(resp) {
			// console.log(resp);
			// console.log(resp.score);
			// console.log(resp.team);
			option = {
				xAxis: [{
					type: 'category',
					data: resp.team,
					axisLine: {
						show: true,
						lineStyle: {
							color: "rgba(255,255,255,.1)",
							width: 1,
							type: "solid"
						},
					},
					axisTick: {
						show: false,
					},
					axisLabel: {
						interval: 0,
						// rotate:50,
						show: true,
						splitNumber: 15,
						textStyle: {
							color: "rgba(255,255,255,.6)",
							fontSize: '12',
						},
					},
				}],
				series: [{
					type: 'bar',
					data: resp.score,
					barWidth: '35%', //柱子宽度
					// barGap: 1, //柱子之间间距
					itemStyle: {
						normal: {
							color: '#87ffdb',
							opacity: 1,
							barBorderRadius: 5,
						}
					}
				}]
			};

			myChart.setOption(option);

		});

		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
		//加载数据
		loadEcharts1(myChart);
		window.addEventListener("resize", function() {
			myChart.resize();
		});
	}
	/**
	 * 查询 TOP7 总分排名
	 */
	function loadEcharts1(myChart) {
		$.getJSON("top10Score", function(data) {
			console.log("top7Score", data);
			option = {
				xAxis: [{
					data: data.team,
				}],
				series: [{
					data: data.score,
				}]
			};
			// 使用刚指定的配置项和数据显示图表。
			myChart.setOption(option);
		});
	}

	function echarts_2() {
			// 基于准备好的dom，初始化echarts实例
			var myChart = echarts.init(document.getElementById('echart2'));
	
			option = {
				//  backgroundColor: '#00265f',
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'shadow'
					}
				},
				grid: {
					left: '0%',
					top: '10px',
					right: '0%',
					bottom: '4%',
					containLabel: true
				},
				xAxis: [{
					type: 'category',
					// data: ['投篮率', '三分率', '罚球率', '总篮板', '助攻', '失误', '得分'],
					axisLine: {
						show: true,
						lineStyle: {
							color: "rgba(255,255,255,.1)",
							width: 1,
							type: "solid"
						},
					},
	
					axisTick: {
						show: false,
					},
					axisLabel: {
						interval: 0,
						// rotate:50,
						show: true,
						splitNumber: 15,
						textStyle: {
							color: "rgba(255,255,255,.6)",
							fontSize: '12',
						},
					},
				}],
				yAxis: [{
					type: 'value',
					axisLabel: {
						//formatter: '{value} %'
						show: true,
						textStyle: {
							color: "rgba(255,255,255,.6)",
							fontSize: '12',
						},
					},
					axisTick: {
						show: false,
					},
					axisLine: {
						show: true,
						lineStyle: {
							color: "rgba(255,255,255,.1	)",
							width: 1,
							type: "solid"
						},
					},
					splitLine: {
						lineStyle: {
							color: "rgba(255,255,255,.1)",
						}
					}
				}],
				series: [{
	
						type: 'bar',
						// data: [1500, 1200, 600, 200, 300, 300, 900],
						barWidth: '35%', //柱子宽度
						// barGap: 1, //柱子之间间距
						itemStyle: {
							normal: {
								color: '#a190ff',
								opacity: 1,
								barBorderRadius: 5,
							}
						}
					}
	
				]
			};
			
			
			$.get("http://101.201.64.226:8090/nba-analysis/top10Rebs",function(resp){
				console.log(resp);
				
				option = {
					//  backgroundColor: '#00265f',
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'shadow'
						}
					},
					grid: {
						left: '0%',
						top: '10px',
						right: '0%',
						bottom: '4%',
						containLabel: true
					},
					xAxis: [{
						type: 'category',
						data:resp.team,
						axisLine: {
							show: true,
							lineStyle: {
								color: "rgba(255,255,255,.1)",
								width: 1,
								type: "solid"
							},
						},
				
						axisTick: {
							show: false,
						},
						axisLabel: {
							interval: 0,
							// rotate:50,
							show: true,
							splitNumber: 15,
							textStyle: {
								color: "rgba(255,255,255,.6)",
								fontSize: '12',
							},
						},
					}],
					yAxis: [{
						type: 'value',
						axisLabel: {
							//formatter: '{value} %'
							show: true,
							textStyle: {
								color: "rgba(255,255,255,.6)",
								fontSize: '12',
							},
						},
						axisTick: {
							show: false,
						},
						axisLine: {
							show: true,
							lineStyle: {
								color: "rgba(255,255,255,.1	)",
								width: 1,
								type: "solid"
							},
						},
						splitLine: {
							lineStyle: {
								color: "rgba(255,255,255,.1)",
							}
						}
					}],
					series: [{
				
							type: 'bar',
							data:resp.rebs,
							barWidth: '35%', //柱子宽度
							// barGap: 1, //柱子之间间距
							itemStyle: {
								normal: {
									color: '#a190ff',
									opacity: 1,
									barBorderRadius: 5,
								}
							}
						}
				
					]
				};
				myChart.setOption(option);
			
			})
		
		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
		//查询 TOP10 总篮板
		loadEcharts2(myChart);
		window.addEventListener("resize", function() {
			myChart.resize();
		});
	}
	/**
	 * 查询 TOP10 总篮板
	 */
	function loadEcharts2(myChart) {
		$.getJSON("top10Rebs", function(data) {
			console.log("top10Rebs", data);
			option = {
				xAxis: [{
					data: data.team,
				}],
				series: [{
					data: data.rebs,
				}]
			};
			// 使用刚指定的配置项和数据显示图表。
			myChart.setOption(option);
		});
	}

	function echarts_3() {
		// 基于准备好的dom，初始化echarts实例
		var myChart = echarts.init(document.getElementById('echart3'));
		option = {
			legend: {
				left: 'auto',
				orient: 'vertical',
				textStyle: {
					color: '#fff'
				}
			},
		};

		$.get("http://101.201.64.226:8090/nba-analysis/top10foul", function(resp) {
			// console.log(resp);
			option = {
				series: [{
					name: 'Nightingale Chart',
					type: 'pie',
					radius: [50, 90],
					center: ['50%', '50%'],
					roseType: 'area',
					itemStyle: {
						borderRadius: 8
					},
					data: resp.arr
				}]
			};
			// 使用刚指定的配置项和数据显示图表。
			myChart.setOption(option);
		})


		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
		loadFoul(myChart);
		window.addEventListener("resize", function() {
			myChart.resize();
		});
	}

	//犯规排名
	function loadFoul(myChart) {

		$.getJSON("top10foul", function(data) {
			console.log("top10foul", data);
			option = {
				series: [{
					data: data.arr
				}]
			};
			// 使用刚指定的配置项和数据显示图表。
			myChart.setOption(option);
		});

	}

	function echarts_4() {
		// 基于准备好的dom，初始化echarts实例
		var myChart = echarts.init(document.getElementById('echart4'));
		option = {
			legend: {
				data: ['一队', '二队', '三队', '四队', '五队'],
				textStyle: {
					color: '#fff',
				},

			},
			radar: {
				// shape: 'circle',
				splitNumber: 6, //设置分隔段
				radius: '80%', //设置雷达图半径
				splitArea: {
					areaStyle: {
						color: ['rgba(201, 255, 251, 0.1)', 'rgba(244, 255, 115, 0.1)']
					}
				},

				splitLine: {
					lineStyle: {
						color: ['rgba(118, 147, 112, 0.5)'],
						width: 2
					}
				},
				indicator: [{
						name: '助攻',
						max: 300
					},
					{
						name: '失误',
						max: 200
					},
					{
						name: '抢断',
						max: 100
					},
					{
						name: '盖帽',
						max: 100
					},
					{
						name: '犯规',
						max: 250
					}
				],


			},
			textStyle: {
				color: '#FFF'
			},
		};
		
		$.get("http://101.201.64.226:8090/nba-analysis/top5Ability",function(resp){
			console.log(resp);
			console.log(resp.ability);
			console.log(resp.team);
			console.log(resp.ability[0]);
			console.log(resp.team[0]);
			
			option = {
				series: [{
					name: 'Budget vs spending',
					type: 'radar',
					data: [{
							value: resp.ability[0],
							name: resp.team[0],
							areaStyle: {
								// 面积渐变色
								color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [{
									color: 'rgba(244, 211, 255, 0.9)',
									offset: 0
								}])
							}
						},
						{
							value: resp.ability[1],
							name: resp.team[1],
							areaStyle: {
								// 面积渐变色
								color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [{
										color: 'rgba(16, 255, 136, 0.1)',
										offset: 0
									},
									{
										color: 'rgba(135, 255, 191, 0.9)',
										offset: 1
									}
								])
							}
						},
						{
							value: resp.ability[2],
							name: resp.team[2],
							areaStyle: {
								// 面积渐变色
								color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [{
										color: 'rgba(20, 232, 255, 0.1)',
										offset: 0
									},
									{
										color: 'rgba(162, 227, 255, 0.9)',
										offset: 1
									}
								])
							}
						},
						{
							value: resp.ability[3],
							name: resp.team[3],
							areaStyle: {
								// 面积渐变色
								color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [{
										color: 'rgba(17, 29, 255, 0.1)',
										offset: 0
									},
									{
										color: 'rgba(170, 182, 255, 0.9)',
										offset: 1
									}
								])
							}
						},
						{
							value: resp.ability[4],
							name: resp.team[4],
							areaStyle: {
								// 面积渐变色
								color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [{
										color: 'rgba(255, 14, 235, 0.1)',
										offset: 0
									},
									{
										color: 'rgba(255, 161, 255, 0.9)',
										offset: 1
									}
								])
							}
						},
					]
				}]
			};
			
			// 使用刚指定的配置项和数据显示图表。
			myChart.setOption(option);
		})
		
		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
		loadRadar(myChart);
		window.addEventListener("resize", function() {
			myChart.resize();
		});
	}

	//加载雷达图
	function loadRadar(myChart) {
		$.getJSON("top5Ability", function(data) {
			console.log("top5Ability", data);
			option = {
				legend: {
					data: data.team
				},
				series: [{
					name: 'Budget vs spending',
					type: 'radar',
					data: [{
							value: data.ability[0],
							name: data.team[0],
							areaStyle: {
								// 面积渐变色
								color: new echarts.graphic.RadialGradient(0.1, 0.6, 1,
									[{
										color: 'rgba(244, 211, 255, 0.9)',
										offset: 0
									}])
							}
						},
						{
							value: data.ability[1],
							name: data.team[1],
							areaStyle: {
								// 面积渐变色
								color: new echarts.graphic.RadialGradient(0.1, 0.6, 1,
									[{
											color: 'rgba(16, 255, 136, 0.1)',
											offset: 0
										},
										{
											color: 'rgba(135, 255, 191, 0.9)',
											offset: 1
										}
									])
							}
						},
						{
							value: data.ability[2],
							name: data.team[2],
							areaStyle: {
								// 面积渐变色
								color: new echarts.graphic.RadialGradient(0.1, 0.6, 1,
									[{
											color: 'rgba(20, 232, 255, 0.1)',
											offset: 0
										},
										{
											color: 'rgba(162, 227, 255, 0.9)',
											offset: 1
										}
									])
							}
						},
						{
							value: data.ability[3],
							name: data.team[3],
							areaStyle: {
								// 面积渐变色
								color: new echarts.graphic.RadialGradient(0.1, 0.6, 1,
									[{
											color: 'rgba(17, 29, 255, 0.1)',
											offset: 0
										},
										{
											color: 'rgba(170, 182, 255, 0.9)',
											offset: 1
										}
									])
							}
						},
						{
							value: data.ability[4],
							name: data.team[4],
							areaStyle: {
								// 面积渐变色
								color: new echarts.graphic.RadialGradient(0.1, 0.6, 1,
									[{
											color: 'rgba(255, 14, 235, 0.1)',
											offset: 0
										},
										{
											color: 'rgba(255, 161, 255, 0.9)',
											offset: 1
										}
									])
							}

						},




					]
				}]
			};
			// 使用刚指定的配置项和数据显示图表。
			myChart.setOption(option);

		})
	}
	//加载top10球队信息
	top10Info();
	//加载总队数
	countTeam();
	//加载总得分
	totalScore();
})

/**
 * 加载TOP 10 信息
 */
function top10Info() {

	$.getJSON("top10team", function(data) {
		console.log("top10team", data)
		if (!data) {
			return;
		}
		$("#infoUl").empty();
		for (i in data.team) {
			let row = `
				<li class="clearfix">
					<span class="pulll_left">${data.team[i]}</span>
					<span class="pulll_right">${data.info[i]} </span>
				</li>
			`;
			$("#infoUl").append(row);
		}
	});
}

/**
 * 加载球队总数
 */
function countTeam() {
	$.getJSON("countTeam", function(data) {
		console.log("countTeam", data);
		$("#countTeam").html(data.countTeam);
	})
}

/**
 * 加载球队总得分
 */
function totalScore() {
	$.getJSON("totalScore", function(data) {
		console.log("totalScore", data);
		$("#totalScore").html(data.totalScore);
	})
}