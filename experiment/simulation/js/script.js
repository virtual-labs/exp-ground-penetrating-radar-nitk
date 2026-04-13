let inputLeftY = 0;
let inputRightY = 0;

function navNext()
{
	for(temp=0;temp<8;temp++)
	{
		 //alert(p);
		document.getElementById('canvas'+temp).style.visibility="hidden";
	}
	simsubscreennum+=1;
	document.getElementById('canvas'+simsubscreennum).style.visibility="visible";
	document.getElementById('nextButton').style.visibility="hidden";
	magic();
}

function animatearrow()
{
	if(document.getElementById('arrow1').style.visibility=="hidden")
		document.getElementById('arrow1').style.visibility="visible";
	else
		document.getElementById('arrow1').style.visibility="hidden";
}
function myStopFunction()
{
	clearInterval(myInt);
	document.getElementById('arrow1').style.visibility="hidden";
}
function magic()
{
	if(simsubscreennum==1){
			myInt=setInterval(function(){animatearrow();},500);	
			document.getElementById('arrow1').style="visibility:visible; left:302px; top:314px; position:absolute;height:30px;";
			document.getElementById('arrow1').style.WebkitTransform="rotate(-180deg)";
			document.getElementById('arrow1').style.msTransform="rotate(-180deg)";
			document.getElementById('arrow1').style.transform="rotate(-180deg)";
			document.getElementById('GPR_machine').onclick=function(){
				myStopFunction();
				document.getElementById('GPR_machine').onclick="";
				document.getElementById('arrowA').style.visibility="visible";
				document.getElementById('arrow_Atext').style.visibility="visible";
				document.getElementById('arrowB').style.visibility="visible";
				document.getElementById('arrow_Btext').style.visibility="visible";
				document.getElementById('arrowC').style.visibility="visible";
				document.getElementById('arrow_Ctext').style.visibility="visible";
				document.getElementById('arrowD').style.visibility="visible";
				document.getElementById('arrow_Dtext').style.visibility="visible";
				document.getElementById('arrowE').style.visibility="visible";
				document.getElementById('arrow_Etext').style.visibility="visible";
				setTimeout(function(){
					document.getElementById('nextButton').style.visibility="visible";
				},1500);
			}
	}

	else if (simsubscreennum == 2) {
				document.getElementById('arrowA').style.visibility="hidden";
				document.getElementById('arrow_Atext').style.visibility="hidden";
				document.getElementById('arrowB').style.visibility="hidden";
				document.getElementById('arrow_Btext').style.visibility="hidden";
				document.getElementById('arrowC').style.visibility="hidden";
				document.getElementById('arrow_Ctext').style.visibility="hidden";
				document.getElementById('arrowD').style.visibility="hidden";
				document.getElementById('arrow_Dtext').style.visibility="hidden";
				document.getElementById('arrowE').style.visibility="hidden";
				document.getElementById('arrow_Etext').style.visibility="hidden";
				document.getElementById('5-1').style.visibility="visible";
				document.getElementById('dialog').style.visibility="visible";
				document.getElementById('divp').style.visibility="visible";
				document.getElementById("GPRset_withoutconnect").style.visibility="visible";
				document.getElementById("laptop_connector").style.visibility="visible";
				document.getElementById("odometer_connector").style.visibility="visible";
			
	}

else if (simsubscreennum == 3) {
	document.getElementById('fullsetup').style.visibility="hidden";
	 document.getElementById('arrowsuspend').style.visibility="hidden";
	 document.getElementById('arrow_suspendtext').style.visibility="hidden";
	 document.getElementById("GPR_setup").style.visibility = "visible";
	 document.getElementById("closelapset").style.visibility = "visible";
	 document.getElementById("device_clip").style.visibility = "visible";
	 myInt=setInterval(function(){animatearrow();},500);	
			document.getElementById('arrow1').style="visibility:visible; left:308px; top:139px; position:absolute;height:30px;";
			document.getElementById('arrow1').style.WebkitTransform="rotate(-180deg)";
			document.getElementById('arrow1').style.msTransform="rotate(-180deg)";
			document.getElementById('arrow1').style.transform="rotate(-180deg)";
			document.getElementById('device_clip').onclick=function(){
				myStopFunction();
				document.getElementById('device_clip').onclick="";
				document.getElementById('device_clip').style.visibility="hidden";
				document.getElementById('device_clip1').style.visibility="visible";
				setTimeout(function(){
					myInt=setInterval(function(){animatearrow();},500);	
			document.getElementById('arrow1').style="visibility:visible; left:269px; top:142px; position:absolute;height:30px;";
			document.getElementById('arrow1').style.WebkitTransform="rotate(-180deg)";
			document.getElementById('arrow1').style.msTransform="rotate(-180deg)";
			document.getElementById('arrow1').style.transform="rotate(-180deg)";
			document.getElementById('closelapset').onclick=function(){
				myStopFunction();
				document.getElementById('closelapset').style.visibility="hidden";
				document.getElementById('device_clip').style.visibility="hidden";
				document.getElementById('device_clip1').style.visibility="hidden";
				document.getElementById('open_lap').style.visibility="visible";
				document.getElementById('on_hand').style.visibility="visible";
					document.getElementById("on_hand").style.animation = "moveHand 1s forwards";
					setTimeout(function(){
						document.getElementById("GPR_setup").style.visibility = "hidden";
						document.getElementById("ipad").style.visibility = "visible";
						document.getElementById("on_hand").style.visibility = "hidden";
						document.getElementById("open_lap").style.visibility = "hidden";
          				document.getElementById("ipad").style.animation = "zoomin 1s forwards";
          				document.getElementById("ipad").style.animation = "zoominipad 1s forwards";
						setTimeout(function(){
							document.getElementById("app").style.visibility = "visible";
							document.getElementById("gas_xp").style.visibility = "visible";
							myInt=setInterval(function(){animatearrow();},500);	
							document.getElementById('arrow1').style="visibility:visible; left:56px; top:365px; position:absolute;height:30px;";
							document.getElementById('arrow1').style.WebkitTransform="rotate(-180deg)";
							document.getElementById('arrow1').style.msTransform="rotate(-180deg)";
							document.getElementById('arrow1').style.transform="rotate(-180deg)";	
							document.getElementById('gas_xp').onclick=function(){
								myStopFunction();
								document.getElementById("app").style.visibility = "hidden";
								document.getElementById("gas_xp").style.visibility = "hidden";
								document.getElementById("tab_screen").style.visibility = "visible";
								document.getElementById("play").style.visibility = "visible";
								document.getElementById("traced_setting").style.visibility = "visible";
								document.getElementById("general_setting").style.visibility = "visible";
								myInt=setInterval(function(){animatearrow();},500);	
							document.getElementById('arrow1').style="visibility:visible; left:120px; top:184px; position:absolute;height:30px;";
							document.getElementById('arrow1').style.WebkitTransform="rotate(-270deg)";
							document.getElementById('arrow1').style.msTransform="rotate(-270deg)";
							document.getElementById('arrow1').style.transform="rotate(-270deg)";
							document.getElementById('play').onclick=function(){
								myStopFunction();
								document.getElementById("play").style.visibility = "hidden";
								document.getElementById("pause").style.visibility = "visible";
								document.getElementById("graph1").style.visibility = "visible";
								document.getElementById("curve1").style.visibility = "visible";
								document.getElementById("graph1").style.animation = "graph11 6s forwards";
								document.getElementById("curve1").style.animation = "curve1 2.5s forwards";
								setTimeout(function(){
									myInt=setInterval(function(){animatearrow();},500);	
									document.getElementById('arrow1').style="visibility:visible; left:150px; top:184px; position:absolute;height:30px;";
									document.getElementById('arrow1').style.WebkitTransform="rotate(-270deg)";
									document.getElementById('arrow1').style.msTransform="rotate(-270deg)";
									document.getElementById('arrow1').style.transform="rotate(-270deg)";
									document.getElementById('traced_setting').onclick=function(){
										myStopFunction();
										document.getElementById('dialog_radio').style.visibility="visible";
										document.getElementById('text_radio').style.visibility="visible";
										document.getElementById('divp_radio').style.visibility="visible";
										setTimeout(function(){
												const timeRadio = document.getElementById('timeRadio');
												const distanceRadio = document.getElementById('distanceRadio');
												const oneShotRadio = document.getElementById('oneShotRadio');
												const applyButton = document.getElementById('apply');

												// Event listeners for radio button changes
												timeRadio.addEventListener('change', handleRadioChange);
												distanceRadio.addEventListener('change', handleRadioChange);
												oneShotRadio.addEventListener('change', handleRadioChange);

												function handleRadioChange() {
												if (distanceRadio.checked) {
													applyButton.disabled = false;
													// console.log('enable')
													
													myInt=setInterval(function(){animatearrow();},500);	
									document.getElementById('arrow1').style="visibility:visible; left:471px; top:511px; position:absolute;height:30px;";
									document.getElementById('arrow1').style.WebkitTransform="rotate(-270deg)";
									document.getElementById('arrow1').style.msTransform="rotate(-270deg)";
									document.getElementById('arrow1').style.transform="rotate(-270deg)";
									document.getElementById('apply').onclick=function(){
										myStopFunction();
										document.getElementById("timeRadio").disabled = true;
										document.getElementById("distanceRadio").disabled = true;
										document.getElementById("oneShotRadio").disabled = true;

										document.getElementById('33-1').style.visibility="visible";
										document.getElementById('dialog_tracenote').style.visibility="visible";
										document.getElementById('divp_tracenote').style.visibility="visible";
									}

												} else {
													applyButton.disabled = true;
													// console.log('disable')
													myStopFunction();
													// document.getElementById('arrow1').style="visibility:hidden";
												}
												}
												document.getElementById('timeRadio').style.visibility="visible";
												document.getElementById('distanceRadio').style.visibility="visible";
												document.getElementById('oneShotRadio').style.visibility="visible";

												document.getElementById('mode').style.visibility="visible";
												document.getElementById('apply').style.visibility="visible";
												document.getElementById('timemode').style.visibility="visible";
												document.getElementById('Distanceemode').style.visibility="visible";
												document.getElementById('OneShotmode').style.visibility="visible";

											document.getElementById("traced_settingscreen").style.visibility = "visible";
											document.getElementById("backpaper").style.visibility = "visible";
											document.getElementById("backpaper1").style.visibility = "visible";
											
											document.getElementById("subButton").style.visibility = "visible";
											document.getElementById("myChart").style.visibility = "visible";
											document.getElementById("inputs").style.visibility = "visible";
											createChart(initialData);
											// document.getElementById('nextButton').style.visibility="visible";
										})
										setTimeout(function(){
										},7000);
									}

								},6000);
							}	
							}
						},1000);
					},1000);	
			}})}}

else if (simsubscreennum == 4) {
									document.getElementById("ipad").style.visibility="visible";		
									document.getElementById("record").style.visibility = "visible";
									myInt=setInterval(function(){animatearrow();},500);	
									document.getElementById('arrow1').style="visibility:visible; left:89px; top:183px; position:absolute;height:30px;";
									document.getElementById('arrow1').style.WebkitTransform="rotate(-270deg)";
									document.getElementById('arrow1').style.msTransform="rotate(-270deg)";
									document.getElementById('arrow1').style.transform="rotate(-270deg)";
									document.getElementById('record').onclick=function(){
										myStopFunction();
										document.getElementById("record").onclick = "";
										document.getElementById('record').style.visibility="hidden";
										document.getElementById("graphcurve").style.visibility = "hidden";
										document.getElementById("record").style.visibility = "hidden";
										document.getElementById("traced_setting").style.visibility = "hidden";
										document.getElementById("pause").style.visibility = "hidden";
										document.getElementById("general_setting5").style.visibility = "hidden";
										document.getElementById("blackgraph1").style.visibility = "hidden";
										document.getElementById("tab_screen").style.visibility = "hidden";
										document.getElementById("graph2_slide").style.visibility = "visible";
										document.getElementById("setupmode_button").style.visibility = "visible";
						
										myInt=setInterval(function(){animatearrow();},500);	
									document.getElementById('arrow1').style="visibility:visible; left:70px; top:183px; position:absolute;height:30px;";
									document.getElementById('arrow1').style.WebkitTransform="rotate(-270deg)";
									document.getElementById('arrow1').style.msTransform="rotate(-270deg)";
									document.getElementById('arrow1').style.transform="rotate(-270deg)";
									document.getElementById('setupmode_button').onclick=function(){
										myStopFunction();
										document.getElementById("setupmode_button").onclick = "";
										document.getElementById('grass').style.visibility="visible";
										document.getElementById('setupmode_button').style.visibility="hidden";
										move();
										document.getElementById("ipad").style.animation = "zoominipad44 1s forwards";
										document.getElementById("graph2_slide").style.animation = "zoominipad41 1s forwards";
										setTimeout(function(){
											document.getElementById('black_image').style.visibility="visible";
											document.getElementById('blackgraph2').style.visibility="visible";
											document.getElementById("blackgraph2").style.animation = "graph1 6s forwards";
											setTimeout(function(){
											document.getElementById("grass").style.visibility = "visible";
											document.getElementById('zoom1').style.visibility="visible";
											document.getElementById('source_text').style.visibility="visible"
											document.getElementById('rightleg').style.visibility="visible";
											document.getElementById('GPR').style.visibility="visible";
											document.getElementById('ring1').style.visibility="visible";
											document.getElementById('ring2').style.visibility="visible";
										document.getElementById("rightleg").style.animation = "Radarmen 1s forwards";
										document.getElementById("GPR").style.animation = "gpr1 1s forwards";
										document.getElementById("ring1").style.animation = "ring1a 1s forwards";
										document.getElementById("ring2").style.animation = "ring2a 1s forwards";
							setTimeout(function(){
										document.getElementById('leftleg').style.visibility="visible";
										document.getElementById('rightleg').style.visibility="hidden";
										document.getElementById("leftleg").style.animation = "Radarmen1 1s forwards";
										document.getElementById("GPR").style.animation = "gpr2 1s forwards";
										document.getElementById("ring1").style.animation = "ring1b 1s forwards";
										document.getElementById("ring2").style.animation = "ring2b 1s forwards";
									setTimeout(function(){
											document.getElementById('leftleg').style.visibility="hidden";
											document.getElementById('rightleg').style.visibility="visible";
											document.getElementById("rightleg").style.animation = "Radarmen2 1s forwards";
											document.getElementById("GPR").style.animation = "gpr3 1s forwards";
											document.getElementById("ring1").style.animation = "ring1c 1s forwards";
											document.getElementById("ring2").style.animation = "ring2c 1s forwards";
										setTimeout(function(){
												document.getElementById('leftleg').style.visibility="visible";
												document.getElementById('rightleg').style.visibility="hidden";
												document.getElementById("leftleg").style.animation = "Radarmen3 1s forwards";
												document.getElementById("GPR").style.animation = "gpr4 1s forwards";
											document.getElementById("ring1").style.animation = "ring1d 1s forwards";
											document.getElementById("ring2").style.animation = "ring2d 1s forwards";
											setTimeout(function(){
													document.getElementById('rightleg').style.visibility="visible";
													document.getElementById('leftleg').style.visibility="hidden";
													document.getElementById("rightleg").style.animation = "Radarmen4 1s forwards";
													document.getElementById("GPR").style.animation = "gpr5 1s forwards";
													document.getElementById("ring1").style.animation = "ring1e 1s forwards";
													document.getElementById("ring2").style.animation = "ring2e 1s forwards";
												setTimeout(function(){
													document.getElementById('leftleg').style.visibility="visible";
													document.getElementById('rightleg').style.visibility="hidden";
													document.getElementById("leftleg").style.animation = "Radarmen5 1s forwards";
													document.getElementById("GPR").style.animation = "gpr6 1s forwards";
													document.getElementById("ring1").style.animation = "ring1f 1s forwards";
													document.getElementById("ring2").style.animation = "ring2f 1s forwards";
												setTimeout(function(){
														document.getElementById('rightleg').style.visibility="visible";
														document.getElementById('leftleg').style.visibility="hidden";
														document.getElementById("rightleg").style.animation = "Radarmen6 1s forwards";
														document.getElementById("GPR").style.animation = "gpr7 1s forwards";
													document.getElementById("ring1").style.animation = "ring1g 1s forwards";
													document.getElementById("ring2").style.animation = "ring2g 1s forwards";
												setTimeout(function(){
															document.getElementById('leftleg').style.visibility="visible";
															document.getElementById('rightleg').style.visibility="hidden";
															document.getElementById("leftleg").style.animation = "Radarmen7 1s forwards";
															document.getElementById("GPR").style.animation = "gpr8 1s forwards";
													document.getElementById("ring1").style.animation = "ring1h 1s forwards";
													document.getElementById("ring2").style.animation = "ring2h 1s forwards";
														setTimeout(function(){
																document.getElementById('rightleg').style.visibility="visible";
																document.getElementById('leftleg').style.visibility="hidden";
																document.getElementById("rightleg").style.animation = "Radarmen8 1s forwards";
																document.getElementById("GPR").style.animation = "gpr9 1s forwards";
																document.getElementById("ring1").style.animation = "ring1i 1s forwards";
																document.getElementById("ring2").style.animation = "ring2i 1s forwards";
															setTimeout(function(){
																	document.getElementById('leftleg').style.visibility="visible";
																	document.getElementById('rightleg').style.visibility="hidden";
																	document.getElementById("leftleg").style.animation = "Radarmen9 1s forwards";
																	document.getElementById("GPR").style.animation = "gpr10 1s forwards";
																	document.getElementById("ring1").style.animation = "ring1j 1s forwards";
																	document.getElementById("ring2").style.animation = "ring2j 1s forwards";
																	setTimeout(function(){
																		document.getElementById('grass').style.visibility="hidden";
																		document.getElementById('zoom1').style.visibility="hidden";
											document.getElementById('source_text').style.visibility="hidden"
											document.getElementById('rightleg').style.visibility="hidden";
											document.getElementById('leftleg').style.visibility="hidden";
											document.getElementById('blackgraph2').style.visibility="hidden";
											document.getElementById('black_image').style.visibility="hidden";
										
											document.getElementById('GPR').style.visibility="hidden";
											document.getElementById('ring1').style.visibility="hidden";
											document.getElementById('ring2').style.visibility="hidden";
											document.getElementById("ipad").style.animation = "zoominipad55 1s forwards";
											document.getElementById("graph2_slide").style.animation = "zoominipad51 1s forwards";
											setTimeout(function(){
												document.getElementById('black_image1').style.visibility="visible";
												document.getElementById("white_paper").style.visibility = "visible";	
												document.getElementById("into_button").style.visibility = "visible";
												document.getElementById('blackgraph2').style.visibility="hidden";
												document.getElementById('blackgraph21').style.visibility="visible";
												setTimeout(function(){
													myInt=setInterval(function(){animatearrow();},500);	
									document.getElementById('arrow1').style="visibility:visible; left:118px; top:171px; position:absolute;height:30px;";
									document.getElementById('arrow1').style.WebkitTransform="rotate(-270deg)";
									document.getElementById('arrow1').style.msTransform="rotate(-270deg)";
									document.getElementById('arrow1').style.transform="rotate(-270deg)";
									document.getElementById('into_button').onclick=function(){
										myStopFunction();
										document.getElementById("into_button").style.visibility = "hidden";
										
										document.getElementById("stop").style.visibility = "visible";	
										document.getElementById("file_save").style.visibility = "visible";
										document.getElementById("savetext").style.visibility = "visible";
									document.getElementById("filesave_ok").style.visibility = "visible";
									myInt=setInterval(function(){animatearrow();},500);	
									document.getElementById('arrow1').style="visibility:visible; left:479px; top:330px; position:absolute;height:30px;";
									document.getElementById('arrow1').style.WebkitTransform="rotate(-90deg)";
									document.getElementById('arrow1').style.msTransform="rotate(-90deg)";
									document.getElementById('arrow1').style.transform="rotate(-90deg)";
									document.getElementById('filesave_ok').onclick=function(){
										myStopFunction();
										document.getElementById("file_save").style.visibility = "hidden";
										document.getElementById("savetext").style.visibility = "hidden";
									document.getElementById("filesave_ok").style.visibility = "hidden";
									document.getElementById('nextButton').style.visibility="visible";
									}
									}
												})
											},500);
											
																	},500);
										
																},500);
															},500);
														},500);
													},500);
												},500);
											},500);
										},500);
									},500);
								},100);
							},100);


										},1000)
									
								setTimeout(function(){
									
									document.getElementById('into_button').onclick=function(){
										myStopFunction();
										document.getElementById("into_button").style.visibility = "hidden";
										document.getElementById("stop").style.visibility = "visible";	
										document.getElementById("file_save").style.visibility = "visible";
										document.getElementById("savetext").style.visibility = "visible";
									document.getElementById("filesave_ok").style.visibility = "visible";
									myInt=setInterval(function(){animatearrow();},500);	
									document.getElementById('arrow1').style="visibility:visible; left:479px; top:330px; position:absolute;height:30px;";
									document.getElementById('arrow1').style.WebkitTransform="rotate(-90deg)";
									document.getElementById('arrow1').style.msTransform="rotate(-90deg)";
									document.getElementById('arrow1').style.transform="rotate(-90deg)";
									document.getElementById('filesave_ok').onclick=function(){
										myStopFunction();
										document.getElementById("file_save").style.visibility = "hidden";
										document.getElementById("savetext").style.visibility = "hidden";
									document.getElementById("filesave_ok").style.visibility = "hidden";
									document.getElementById('nextButton').style.visibility="visible";
									}
									}},8700);
									}
									}
									// },8000)
								// }}
								// })
									// }
									// }
}

else if (simsubscreennum == 5) {
	document.getElementById("stop").style.visibility = "hidden";	
	document.getElementById("setupmode_button").style.visibility = "hidden";
	document.getElementById("black_image1").style.visibility="hidden";
	document.getElementById("blackgraph21").style.visibility="hidden";
	document.getElementById("graph2_slide").style.visibility="hidden";
	document.getElementById("white_paper").style.visibility="hidden";

document.getElementById("blackgraph2").style.visibility = "hidden";
document.getElementById("black_image").style.visibility = "hidden";
document.getElementById("handleCount").style.visibility = "hidden";
document.getElementById("appset2").style.visibility = "visible";
document.getElementById("Gprsoft_pro").style.visibility = "visible";
	myInt=setInterval(function(){animatearrow();},500);	
	document.getElementById('arrow1').style="visibility:visible; left:59px; top:459px; position:absolute;height:30px;";
	document.getElementById('arrow1').style.WebkitTransform="rotate(-180deg)";
	document.getElementById('arrow1').style.msTransform="rotate(-180deg)";
	document.getElementById('arrow1').style.transform="rotate(-180deg)";
	document.getElementById('Gprsoft_pro').onclick=function(){
		myStopFunction();
		document.getElementById("appset2").style.visibility = "hidden";
		document.getElementById("Gprsoft_pro").style.visibility = "hidden";
		document.getElementById("file_screen").style.visibility = "visible";
		document.getElementById("file").style.visibility = "visible";
		document.getElementById("background_app").style.visibility = "visible";
		document.getElementById("gain_app").style.visibility = "visible";
		
		myInt=setInterval(function(){animatearrow();},500);	
	document.getElementById('arrow1').style="visibility:visible; left:47px; top:126px; position:absolute;height:30px;";
	document.getElementById('arrow1').style.WebkitTransform="rotate(-180deg)";
	document.getElementById('arrow1').style.msTransform="rotate(-180deg)";
	document.getElementById('arrow1').style.transform="rotate(-180deg)";
	document.getElementById('file').onclick=function(){
		myStopFunction();
		document.getElementById('6-6').style.visibility="visible";
		document.getElementById('dialog6').style.visibility="visible";
		document.getElementById('divp6').style.visibility="visible";
		// showProgressBar();
	}

									}
}
else if (simsubscreennum == 6) {
	document.getElementById("gprpro_curve").style.visibility = "hidden";
	document.getElementById("gprpro_curve1").style.visibility = "hidden";
	document.getElementById('image_graph').style.visibility="hidden";
	document.getElementById("surface_app").style.visibility = "visible";
	document.getElementById("file_screen7").style.visibility = "visible";
		document.getElementById("file7").style.visibility = "visible";
		document.getElementById("background_app7").style.visibility = "visible";
		document.getElementById("gain_app7").style.visibility = "visible";
		document.getElementById("finding_graph").style.visibility = "visible";
		document.getElementById('square7').style.visibility="visible";
	document.getElementById('gprpro_curve7').style.visibility="visible";
	myInt=setInterval(function(){animatearrow();},500);
		document.getElementById('arrow1').style="visibility:visible; left:168px; top:193px; position:absolute; height:30px;";
		document.getElementById('arrow1').style.WebkitTransform="rotate(90deg)";
		document.getElementById('arrow1').style.msTransform="rotate(90deg)";
		document.getElementById('arrow1').style.transform="rotate(90deg)";
		document.getElementById("round2").style.visibility="visible";
		document.getElementById("surface_app").onclick= function(){
		myStopFunction();
		document.getElementById("measure_arrow").style.visibility="visible";
		document.getElementById("measure_arrow").style.animation = "measurearrow 2s forwards";
		setTimeout(function(){
			document.getElementById("surface_screen").style.visibility="visible";
			document.getElementById("surface_ok").style.visibility="visible";
			myInt=setInterval(function(){animatearrow();},500);
			document.getElementById('arrow1').style="visibility:visible; left:320px; top:435px; position:absolute; height:30px;";
		document.getElementById('arrow1').style.WebkitTransform="rotate(90deg)";
		document.getElementById('arrow1').style.msTransform="rotate(90deg)";
		document.getElementById('arrow1').style.transform="rotate(90deg)";
		document.getElementById("round2").style.visibility="visible";
		document.getElementById("surface_ok").onclick= function(){
		myStopFunction();
		document.getElementById("green_box").style.visibility="visible";
		document.getElementById("green_box").style.animation = "greenbox 2s forwards";
		setTimeout(function(){
			document.getElementById("surface_screen").style.visibility="hidden";
			document.getElementById("surface_curve").style.visibility="visible";
			document.getElementById("surface_ok").style.visibility="hidden";
			document.getElementById("green_box").style.visibility="hidden";
			document.getElementById("gprpro_curve7").style.visibility = "hidden";
			document.getElementById("measure_arrow").style.visibility="hidden";
			document.getElementById("surface_app").style.visibility = "hidden";

			myInt=setInterval(function(){animatearrow();},500);
				document.getElementById('arrow1').style="visibility:visible; left:251px; top:243px; position:absolute; height:30px;";
				document.getElementById('arrow1').style.WebkitTransform="rotate(-90deg)";
				document.getElementById('arrow1').style.msTransform="rotate(-90deg)";
				document.getElementById('arrow1').style.transform="rotate(-90deg)";
				document.getElementById("round2").style.visibility="visible";
				document.getElementById("round2").onclick= function(){
					myStopFunction();
							document.getElementById("data2").style.visibility="visible";
							document.getElementById("surface_curve").style.visibility="visible";
							
							document.getElementById("round2").style.visibility="hidden";
							document.getElementById('nextButton').style.visibility="visible";
				}
			// 		
		},2000);
		}
			// document.getElementById("load_square").style.visibility="visible";
		},2000);
		}


}
else if(simsubscreennum==7){
	document.getElementById('nextButton').style.visibility="hidden";
	document.getElementById("ipad").style.visibility="hidden";
	
	document.getElementById("surface_curve").style.visibility="hidden";
	document.getElementById("inputValueLeft").style.visibility="hidden";
	document.getElementById("inputValueRight").style.visibility="hidden";
	document.getElementById("ipad").style.visibility="hidden";
		document.getElementById("ipad7").style.visibility = "hidden";
		document.getElementById("gain_app7").style.visibility = "hidden";
		document.getElementById("finding_graph").style.visibility = "hidden";
		document.getElementById('square7').style.visibility="hidden";
	document.getElementById('gprpro_curve7').style.visibility="hidden";
	document.getElementById("file_screen").style.visibility = "hidden";
	document.getElementById("file").style.visibility = "hidden";
	document.getElementById("full_graph").style.visibility = "hidden";
	document.getElementById("square").style.visibility = "hidden";
	document.getElementById("background_app").style.visibility = "hidden";
	document.getElementById("gain_app").style.visibility = "hidden";
	document.getElementById("graph_background").style.visibility = "hidden";
	document.getElementById('1').style.visibility="hidden";	
				document.getElementById('2').style.visibility="hidden";	
				document.getElementById('3').style.visibility="hidden";	
				document.getElementById('4').style.visibility="hidden";		
				document.getElementById('5').style.visibility="hidden";	
				document.getElementById('6').style.visibility="hidden";	
				document.getElementById('7').style.visibility="hidden";	
				document.getElementById('8').style.visibility="hidden";	
				document.getElementById('9').style.visibility="hidden";	
				document.getElementById('10').style.visibility="hidden";
				document.getElementById('okButton1').style.visibility="hidden";
				// document.getElementById('wavegraph1').style.visibility="hidden";
				// document.getElementById('straightline2').style.visibility="hidden";
				document.getElementById('gprpro_curve7').style.visibility="hidden";
				
				
	document.getElementById("file_screen7").style.visibility = "hidden";
	document.getElementById("data2").style.visibility="hidden";
		document.getElementById("file7").style.visibility = "hidden";
		document.getElementById("background_app7").style.visibility = "hidden";
		document.getElementById("gain_app7").style.visibility = "hidden";
		document.getElementById("finding_graph").style.visibility = "hidden";
		document.getElementById('square7').style.visibility="hidden";
	document.getElementById('gprpro_curve7').style.visibility="hidden";
	// document.getElementById('pot').style.visibility="hidden";
				document.getElementById('inputValueLeft').style.visibility="hidden";
				document.getElementById('inputValueRight').style.visibility="hidden";
				// document.getElementById('inputValueLeft').style.visibility="visible";
				// document.getElementById('inputValueRight').style.visibility="visible";

}

}			
function hidedialog1(){
	document.getElementById('5-1').style.visibility="hidden";
	document.getElementById('dialog').style.visibility="hidden";
	
	
	myInt=setInterval(function(){animatearrow();},500);	
		document.getElementById('arrow1').style="visibility:visible; left:316px; top:148px; position:absolute;height:30px;";
		document.getElementById('arrow1').style.WebkitTransform="rotate(-180deg)";
		document.getElementById('arrow1').style.msTransform="rotate(-180deg)";
		document.getElementById('arrow1').style.transform="rotate(-180deg)";
		
		document.getElementById('laptop_connector').onclick=function(){
			myStopFunction();
			document.getElementById('laptop_connector').onclick="";
			document.getElementById('lapwire1_connecthand').style.visibility="visible";
			document.getElementById('lapwire1_connecthand').style.animation="movehandlap 2s forwards";
			
		  setTimeout(function(){
			document.getElementById("laptop_connector").style.animation = "lapconnector 2s forwards";

			setTimeout(function(){
				document.getElementById('lapwire1_connecthand').style.visibility="hidden";
				setTimeout(function(){
					document.getElementById('lapwire1_connecthand').style.visibility="hidden";
						document.getElementById('5-2').style.visibility="visible";
				document.getElementById('dialog2').style.visibility="visible";
				document.getElementById('divp2').style.visibility="visible";
				
					
				},1500);
			},2000);
		  },700);
	
		}
}


function hidedialog2(){
document.getElementById('5-2').style.visibility="hidden";
		document.getElementById('dialog2').style.visibility="hidden";
		document.getElementById('divp2').style.visibility="hidden";
		myInt=setInterval(function(){animatearrow();},500);	
			document.getElementById('arrow1').style="visibility:visible; left:289px; top:339px; position:absolute;height:30px;";
			document.getElementById('arrow1').style.WebkitTransform="rotate(-90deg)";
			document.getElementById('arrow1').style.msTransform="rotate(-90deg)";
			document.getElementById('arrow1').style.transform="rotate(-90deg)";
			document.getElementById('odometer_connector').onclick=function(){
				myStopFunction();
				document.getElementById('odometer_connector').onclick="";
				document.getElementById("backpage").style.visibility = "visible";
				document.getElementById("backpage").style.animation = "moveBg 2s forwards";
				document.getElementById("cropGPR_with2wire").style.visibility = "visible";
				document.getElementById("cropGPR_with2wire").style.animation = "cropgpr 2s forwards";
				setTimeout(function(){
					document.getElementById('odowire1_connecthand').style.visibility="visible";
					document.getElementById('odowire1_connecthand').style.transformOrigin="13% 9%";
				document.getElementById('odowire1_connecthand').style.animation="movehandodo 2s forwards";
				setTimeout(function(){
					document.getElementById("cropGPR_with2wire").style.visibility = "hidden";
					document.getElementById("withoutodometerconnection").style.visibility = "visible";
					document.getElementById("connect_odometer").style.visibility = "visible";
					document.getElementById("connect_odometer").style.animation = "odometerconnect 2s forwards";
					setTimeout(function(){
						document.getElementById('odowire1_connecthand').style.visibility="hidden";
						document.getElementById('odometer_connector').style.visibility="hidden";
						document.getElementById('laptop_connector').style.visibility="hidden";
						document.getElementById("GPRset_withoutconnect").style.visibility="hidden";
						document.getElementById('after_connectodo').style.visibility="visible";
						document.getElementById('connect_odometer').style.visibility="hidden";
					document.getElementById('withoutodometerconnection').style.visibility="hidden";
						document.getElementById('withoutbatteryconnection').style.visibility="visible";
						document.getElementById('battery_wireconnect').style.visibility="visible";
						document.getElementById('5-3').style.visibility="visible";
						document.getElementById('dialog3').style.visibility="visible";
						document.getElementById('divp3').style.visibility="visible";
					},2000);
				},900);
					// document.getElementById("zoomodometer_connector").style.visibility = "visible";
				},1750);
			//   document.getElementById("highlight_connection1").style.animation = "highlight_connection1 2s forwards";

}}

function hidedialog3(){
				document.getElementById('5-3').style.visibility="hidden";
				document.getElementById('dialog3').style.visibility="hidden";
				document.getElementById('divp3').style.visibility="hidden";
				document.getElementById('connect_odometer').style.visibility="hidden";
				document.getElementById('withoutodometerconnection').style.visibility="hidden";
						document.getElementById('withoutbatteryconnection').style.visibility="visible";
				myInt=setInterval(function(){animatearrow();},500);	
					document.getElementById('arrow1').style="visibility:visible; left:349px; top:335px; position:absolute;height:30px;";
					document.getElementById('arrow1').style.WebkitTransform="rotate(-90deg)";
					document.getElementById('arrow1').style.msTransform="rotate(-90deg)";
					document.getElementById('arrow1').style.transform="rotate(-90deg)";
					document.getElementById('battery_wire').onclick=function(){
						myStopFunction();
						
						document.getElementById('battery_wire').onclick="";
						document.getElementById("batteryconnection").style.visibility = "visible";
						document.getElementById("battery_wireconnect").style.visibility = "hidden";
						document.getElementById('batterywire1_connecthand').style.visibility="visible";
						document.getElementById('batterywire1_connecthand').style.animation="movehandbattery 2s forwards";
						setTimeout(function(){
						
					document.getElementById("batteryconnection").style.animation = "batteryconnect 2s forwards";
					setTimeout(function(){
						document.getElementById("after_connectodo").style.visibility = "hidden";
						document.getElementById("battery_wire").style.visibility = "hidden";
						document.getElementById("backpage").style.visibility = "hidden";
						document.getElementById("withoutbatteryconnection").style.visibility = "hidden";
						document.getElementById("batteryconnection").style.visibility = "hidden";
						document.getElementById("batterywire1_connecthand").style.visibility = "hidden";
						document.getElementById("fullsetup").style.visibility = "visible";
						document.getElementById("arrowsuspend").style.visibility = "visible";
						document.getElementById("arrow_suspendtext").style.visibility = "visible";
					setTimeout(function(){
							
							document.getElementById('nextButton').style.visibility="visible";
						},500);
				},1800);
							
						},1000);

}}


function hidedialog4(){
	document.getElementById('4-1').style.visibility="hidden";
	document.getElementById('dialog4').style.visibility="hidden";
	document.getElementById('divp4').style.visibility="hidden";
	document.getElementById('nextButton').style.visibility="visible";
}

function hidedialog_tracenote(){
		document.getElementById('dialog_tracenote').style.visibility="hidden";
		document.getElementById('33-1').style.visibility="hidden";
		document.getElementById('divp_tracenote').style.visibility="hidden";
		// document.getElementById("myInput").disabled = false;
		  inputValue1. disabled = false;
		  inputValue2. disabled = false;
		  inputValue3. disabled = false;
		  inputValue4. disabled = false;
		  inputValue5. disabled = false;
		  inputValue6. disabled = false;

}

function hidedialogintial(){
	document.getElementById('initial').style.visibility="hidden";
			document.getElementById('dialog_intial').style.visibility="hidden";
			document.getElementById('divp_initial').style.visibility="hidden";
			document.getElementById("nextButton").style.visibility = "visible";
}


function hidedialog_radio(){
	document.getElementById('dialog_radio').style.visibility="hidden";
	document.getElementById('text_radio').style.visibility="hidden";
	document.getElementById('divp_radio').style.visibility="hidden";

	document.getElementById("timeRadio").disabled = false;
	document.getElementById("distanceRadio").disabled = false;
	document.getElementById("oneShotRadio").disabled = false;

}


function checkOption() {
	const dropdown = document.getElementById('optionsDropdown');
	const okButton = document.getElementById('select_ok');
	if (dropdown.value !== '') {
	  okButton.disabled = false;
	} else {
	  okButton.disabled = true;
	}
  }

function bigImg() {
    document.getElementById("zoom1").style.height = "170px";
	document.getElementById("zoom1").style.width = "268px";
  }
  
  function normalImg() {
	document.getElementById("zoom1").style.height = "163px";
	document.getElementById("zoom1").style.width = "143px";
  }

function toggleOptions() {
	const optionsDiv = document.getElementById('options');
	optionsDiv.style.display = optionsDiv.style.display === 'none' ? 'block' : 'none';
  }

const initialData = [20, 40, 30, 50, 25, 55, 60];
    let myChart;

    // Function to create the initial vertical line chart
    function createChart(data) {
      const ctx = document.getElementById('myChart').getContext('2d');
      myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: data.map(() => ``),
          datasets: [{
            // label: 'Data',
            data: data,
            borderColor: 'red',
            borderWidth: 1,
            fill: false
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        //   scales: {
        //     x: {
        //       suggestedMin: 0,
        //       suggestedMax: 100
        //     }
        //   }
        }
      });

      // Event listeners for input changes
      const inputFields = [
        'inputValue1',
        'inputValue2',
        'inputValue3',
        'inputValue4',
        'inputValue5',
        'inputValue6'
        
      ];

      inputFields.forEach(field => {
        const input = document.getElementById(field);
        input.addEventListener('input', () => {
          updateChart();
		  checkAndDisableButton();
        });
      });
    }

    // Initial chart creation
    createChart(initialData);

	function checkInputs1() {
		const inputFields = [
		  'inputValue1',
		  'inputValue2',
		  'inputValue3',
		  'inputValue4',
		  'inputValue5',
		  'inputValue6',
		 
		];
  
		for (let i = 0; i < inputFields.length; i++) {
		  const value = document.getElementById(inputFields[i]).value;
		  if (value === '' || isNaN(value) || parseInt(value) < 0 || parseInt(value) > 50) {
			return false;
		  } else if (parseInt(value) > 50) {
			alert('Please enter values below 50.'); // Show alert message at the top
			return false;
		  }
		}
		return true;
	  }
  

	  function checkAndDisableButton() {
		const submitButton = document.getElementById('subButton');
		const allInputsValid = checkInputs1();
	  
		if (allInputsValid) {
		  submitButton.disabled = false;
		//   console.log('submit enabled');
		//   showArrow();
		// myInt=setInterval(function(){animatearrow();},500);	
		document.getElementById('arrow1').style="visibility:visible; left:528px; top:510px; position:absolute;height:30px;";
		document.getElementById('arrow1').style.WebkitTransform="rotate(-270deg)";
			document.getElementById('arrow1').style.msTransform="rotate(-270deg)";
			document.getElementById('arrow1').style.transform="rotate(-270deg)";
		// document.getElementById('arrow1').styl?e.visibility="visible";
		document.getElementById('subButton').onclick=function(){
			inputValue1. disabled = true;
		  inputValue2. disabled = true;
		  inputValue3. disabled = true;
		  inputValue4. disabled = true;
		  inputValue5. disabled = true;
		  inputValue6. disabled = true;

			document.getElementById('arrow1').style.visibility="hidden";
			document.getElementById("general_setting").style.visibility = "hidden";
				document.getElementById("general_setting5").style.visibility = "visible";
				// document.getElementById("pause").style.visibility = "hidden";
				document.getElementById("graph1").style.visibility = "hidden";
				document.getElementById("curve1").style.visibility = "hidden";
				document.getElementById("myChart").style.visibility = "hidden";
				document.getElementById("traced_settingscreen").style.visibility = "hidden";
				document.getElementById("backpaper").style.visibility = "hidden";
				document.getElementById("backpaper1").style.visibility = "hidden";
				document.getElementById("inputs").style.visibility = "hidden";
				document.getElementById("subButton").style.visibility = "hidden";

				document.getElementById('timeRadio').style.visibility="hidden";
				document.getElementById('distanceRadio').style.visibility="hidden";
				document.getElementById('oneShotRadio').style.visibility="hidden";
				document.getElementById('mode').style.visibility="hidden";
				document.getElementById('apply').style.visibility="hidden";
				document.getElementById('timemode').style.visibility="hidden";
				document.getElementById('Distanceemode').style.visibility="hidden";
				document.getElementById('OneShotmode').style.visibility="hidden";

				myInt=setInterval(function(){animatearrow();},500);	
					document.getElementById('arrow1').style="visibility:visible; left:185px; top:184px; position:absolute;height:30px;";
					document.getElementById('arrow1').style.WebkitTransform="rotate(-270deg)";
					document.getElementById('arrow1').style.msTransform="rotate(-270deg)";
					document.getElementById('arrow1').style.transform="rotate(-270deg)";
					document.getElementById('general_setting5').onclick=function(){
						myStopFunction();
								document.getElementById("general_settingscreen").style.visibility = "visible";
								document.getElementById("RDP_button").style.visibility = "visible";
								document.getElementById("general_button").style.visibility = "visible";
								document.getElementById("sensors_button").style.visibility = "visible";
								document.getElementById("view_button").style.visibility = "visible";
								document.getElementById("wheel_button").style.visibility = "visible";
								myInt=setInterval(function(){animatearrow();},500);	
							document.getElementById('arrow1').style="visibility:visible; left:548px; top:195px; position:absolute;height:30px;";
							document.getElementById('arrow1').style.WebkitTransform="rotate(-360deg)";
							document.getElementById('arrow1').style.msTransform="rotate(-360deg)";
							document.getElementById('arrow1').style.transform="rotate(-360deg)";
							document.getElementById('RDP_button').onclick=function(){
								myStopFunction();
								document.getElementById("firstDropdown").style.visibility = "visible";
								document.getElementById("secondDropdown").style.visibility = "visible";
								document.getElementById("doneButton").style.visibility = "visible";
								document.getElementById("OK_button").style.visibility="visible";
								document.getElementById("Cancel_button").style.visibility="visible";

								document.getElementById("blank_general").style.visibility = "visible";
								document.getElementById("general_settingscreen").style.visibility = "hidden";
								document.getElementById("material").style.visibility = "visible";
								document.getElementById("type").style.visibility = "visible";
								document.getElementById("RDP").style.visibility = "visible";
								document.getElementById("material").style.visibility="visible"
								
								document.getElementById("OK_button").style.visibility="visible";
								document.getElementById("Cancel_button").style.visibility="visible";
	}}}
			// }
		} else {
		  submitButton.disabled = true;
		//   console.log('submit disabled');
		  // Additional actions or code when inputs are invalid
		}
	  }
	  

    // Function to update the chart based on user input
    function updateChart() {
      const userInput1 = parseInt(document.getElementById('inputValue1').value) || 0;
      const userInput2 = parseInt(document.getElementById('inputValue2').value) || 0;
      const userInput3 = parseInt(document.getElementById('inputValue3').value) || 0;
      const userInput4 = parseInt(document.getElementById('inputValue4').value) || 0;
      const userInput5 = parseInt(document.getElementById('inputValue5').value) || 0;
      const userInput6 = parseInt(document.getElementById('inputValue6').value) || 0;
    //   const userInput7 = parseInt(document.getElementById('inputValue7').value) || 0;

      const inputs = [userInput1, userInput2, userInput3, userInput4, userInput5, userInput6];

      inputs.forEach((value, index) => {
        if (value < 0) {
          alert(`Please enter a positive value for Input ${index + 1}.`);
        } else if (value > 50) {
          alert(`Please enter a value below 50 for Input ${index + 1}.`);
        }
      });

	  const newData = inputs.map(value => Math.min(Math.max(value, 0), 50)); // Restrict values to 0-50 range
      myChart.data.datasets[0].data = newData;
      myChart.update();

      // Check inputs to disable/enable the button
      checkAndDisableButton(inputs);
    }


	var i = 0;
	function move() {
		var elem = document.getElementById("myBar");   
		var width = 1; // Start width from 1 (0.01)
		var id = setInterval(frame, 100); // Adjust speed by changing the interval duration (e.g., 50ms)
		function frame() {
		  if (width >= 81) { // Adjust condition to stop at 0.81
			clearInterval(id);
		  } else {
			width += 1; // Increase width by 1 (0.01 step)
			var currentValue = (width / 100).toFixed(2); // Calculate current value
			elem.style.width = width + '%'; 
			elem.innerHTML = currentValue; // Set current value in the progress bar
		  }
		}
	  }

function hidedialog6(){
	document.getElementById('6-6').style.visibility="hidden";
	document.getElementById('dialog6').style.visibility="hidden";
	document.getElementById('divp6').style.visibility="hidden";
	document.getElementById('full_graph').style.visibility="visible";
	document.getElementById('square').style.visibility="visible";
	document.getElementById('gprpro_curve').style.visibility="visible";
	document.getElementById('background_app').style.visibility="visible";

	myInt=setInterval(function(){animatearrow();},500);	
	document.getElementById('arrow1').style="visibility:visible; left:103px; top:197px; position:absolute;height:30px;";
	document.getElementById('arrow1').style.WebkitTransform="rotate(-270deg)";
	document.getElementById('arrow1').style.msTransform="rotate(-270deg)";
	document.getElementById('arrow1').style.transform="rotate(-270deg)";
	document.getElementById('background_app').onclick=function(){
	myStopFunction();
	document.getElementById('background_removingscreen').style.visibility="visible";
	document.getElementById('textInput').style.visibility="visible";
	document.getElementById('okButton').style.visibility="visible";
	document.getElementsByClassName('progress-bar')[0].style.visibility="visible";
	}
	  }


	  function checkInput() {
		var inputTextElement = document.getElementById("textInput");
		var inputText = document.getElementById("textInput").value;
		var okButton = document.getElementById("okButton");
  
		var onlyNumbers = inputText.replace(/[^0-9]/g, '');

		inputTextElement.value = onlyNumbers;
		// Enable the button if the input field is not empty
		if (onlyNumbers.trim() !== "") {
		  okButton.disabled = false;
		} else {
		  okButton.disabled = true;
		}
	  }
  
	  function showProgressBar() {
		var progressBar = document.getElementById("progressBar");
		var progress = document.getElementById("progress");
		var width = 0;
		var id = setInterval(frame, 50);
  
		// Display the progress bar
		progressBar.style.display = "block";
  
		function frame() {
		  if (width >= 100) {
			clearInterval(id);
			document.getElementById('background_removingscreen').style.visibility="hidden";
			document.getElementById('textInput').style.visibility="hidden";
			document.getElementById('okButton').style.visibility="hidden";
			document.getElementsByClassName('progress-bar')[0].style.visibility="hidden";
			document.getElementById('gprpro_curve').style.visibility="hidden";
			document.getElementById('gprpro_curve1').style.visibility="visible";
			myInt=setInterval(function(){animatearrow();},500);	
			document.getElementById('arrow1').style="visibility:visible; left:128px; top:198px; position:absolute;height:30px;";
			document.getElementById('arrow1').style.WebkitTransform="rotate(-269deg)";
			document.getElementById('arrow1').style.msTransform="rotate(-269deg)";
			document.getElementById('arrow1').style.transform="rotate(-269deg)";
			document.getElementById('gain_app').onclick=function(){
				myStopFunction();
				document.getElementById('graph_background').style.visibility="visible";

				document.getElementById('gain').style.visibility="visible";
				document.getElementById('gainok').style.visibility="visible";
				document.getElementById('gaintext').style.visibility="visible";
				document.getElementById('plot').style.visibility="visible";
				document.getElementById('image_graph').style.visibility="visible";
				// console.log('graph')
				document.getElementById('inputValueLeft').style.visibility="visible";
				document.getElementById('inputValueRight').style.visibility="visible";
				// document.getElementById('nextButton').style.visibility="visible";





				// document.getElementById('1').style.visibility="visible";	
				// document.getElementById('2').style.visibility="visible";	
				document.getElementById('3').style.visibility="visible";	
				document.getElementById('4').style.visibility="visible";		
				document.getElementById('5').style.visibility="visible";	
				document.getElementById('6').style.visibility="visible";	
				document.getElementById('7').style.visibility="visible";	
				document.getElementById('8').style.visibility="visible";	
				document.getElementById('9').style.visibility="visible";	
				document.getElementById('10').style.visibility="visible";
				document.getElementById('okButton1').style.visibility="visible";	
				// document.getElementById('straightline1').style.visibility="visible";
				// document.getElementById('wavegraph1').style.visibility="visible";
	
			}
			
		  } else {
			width++;
			progress.style.width = width + "%";
		  }
		}
	  }
   

	  function checkInputs() {
		let inputs = document.querySelectorAll('.inputField');
		let allFilled = true;
  
		inputs.forEach(input => {
		  if (input.value === '') {
			allFilled = false;
		  }
		});
  
		if (allFilled) {
		  document.getElementById('okButton1').disabled = false;
		  myInt=setInterval(function(){animatearrow();},500);	
			document.getElementById('arrow1').style="visibility:visible; left:609px; top:500px; position:absolute;height:30px;";
			document.getElementById('arrow1').style.WebkitTransform="rotate(-269deg)";
			document.getElementById('arrow1').style.msTransform="rotate(-269deg)";
			document.getElementById('arrow1').style.transform="rotate(-269deg)";
			document.getElementById('okButton1').onclick=function(){
				myStopFunction();
				// document.getElementById('straightline1').style.visibility="hidden";	
				// document.getElementById('straightline2').style.visibility="visible";
				document.getElementById('nextButton').style.visibility="visible";
				}
				
		} else {
		  document.getElementById('okButton1').disabled = true;
		}
	  }
  
	  function information1(){
		document.getElementById('hoverText').style.visibility="visible";
	}
	function  information1a(){
		document.getElementById('hoverText').style.visibility="hidden";
	}
	

document.addEventListener('DOMContentLoaded', function () {
  drawGraph();
});



function handleInput(inputId, axis) {
  let inputValue = document.getElementById(inputId).value.trim();

  if (inputValue === '0' || inputValue === '0.') {
	document.getElementById(inputId).value = '0';
	if (axis === 'left') {
	  inputLeftY = 0;
	} else if (axis === 'right') {
	  inputRightY = 0;
	}
	drawGraph(true);
	return;
  }

  inputValue = inputValue.replace(/^0+/, '');
  if (inputValue === '-') {
	document.getElementById(inputId).value = inputValue;
	return;
  }

  if (/^(-?\d*\.\d+|-?\d+|0)$/.test(inputValue)) {
	let numericValue = parseFloat(inputValue);
	numericValue = Math.max(-10, Math.min(10, numericValue));
	document.getElementById(inputId).value = numericValue;
	updateAxisValue(numericValue, axis);
  } else {
	document.getElementById(inputId).value = '';
  }
}

function updateAxisValue(value, axis) {
  if (axis === 'left') {
	document.getElementById('inputValueLeft').value = value;
	inputLeftY = value;
  } else if (axis === 'right') {
	document.getElementById('inputValueRight').value = value;
	inputRightY = value;
  }

  drawGraph();
}

function drawGraph(zeroInput = false) {
  const commonRange = [-10, 10];
  const tickValues = Array.from({ length: 21 }, (_, index) => -10 + index);

  const layout = {
	title: 'Gain',
	yaxis: {
	  title: 'Amplitude(bits)',
	  range: commonRange,
	  side: 'left',
	  ticksuffix: '',
	//   tickvals: tickValues,
	  tickmode: 'array',
	//   tickcolor: 'black',
	//   tickwidth: 2,
	  ticklen: 10
	},
	yaxis2: {
	  title: 'Gain(dB)',
	  range: commonRange,
	  overlaying: 'y',
	  side: 'right',
	  ticksuffix: '',
	//   tickvals: tickValues,
	  tickmode: 'array',
	//   tickcolor: 'black',
	//   tickwidth: 2,
	  ticklen: 10
	},
	width: 500,
	  		height: 317,
	xaxis: {
	  showgrid: false,
	  zeroline: false,
	  showline: true,
	  showticklabels: false
	},
	shapes: [
	  {
		type: 'line',
		xref: 'x',
		yref: 'y',
		x0: zeroInput ? 0 : 0.1,
		y0: commonRange[0],
		x1: zeroInput ? 0 : 0.1,
		y1: commonRange[1],
		line: {
		  color: 'black',
		  width: 2
		}
	  },
	  {
		type: 'line',
		xref: 'x',
		yref: 'y2',
		x0: zeroInput ? 1 : 1.1,
		y0: commonRange[0],
		x1: zeroInput ? 1 : 1.1,
		y1: commonRange[1],
		line: {
		  color: 'black',
		  width: 2
		}
	  }
	],
	annotations: [
	  {
		xref: 'paper',
		yref: 'y2',
		x: 1.7,
		y: (commonRange[1] + commonRange[2]) / 2,
		text: '',
		showarrow: false,
		font: {
		  size: 12,
		  color: 'black'
		}
	  }
	]
  };

  if (document.getElementById('plot').data) {
	Plotly.react('plot', [{
	  x: zeroInput ? [0, 1] : [0.1, 1.1],
	  y: [inputLeftY, inputRightY],
	  mode: 'lines+markers',
	  type: 'scattergl',
	  line: {
		color: 'red'
	  },
	  yaxis: 'y'
	}], layout);
  } else {
	Plotly.newPlot('plot', [{
	  x: zeroInput ? [0, 1] : [0.1, 1.1],
	  y: [inputLeftY, inputRightY],
	  mode: 'lines+markers',
	  type: 'scattergl',
	  line: {
		color: 'red'
	  },
	  yaxis: 'y'
	}], layout);
  }

  showHideImages();
}

function showHideImages() {
  const gain = inputLeftY + inputRightY;

  document.getElementById('image1').style.display = 'none';
  document.getElementById('image2').style.display = 'none';
  document.getElementById('image3').style.display = 'none';
  document.getElementById('image4').style.display = 'none';

  if (gain === 0) {
	document.getElementById('image1').style.display = 'block';
	// console.log('00')
  } else if (gain < 0) {
	document.getElementById('image2').style.display = 'block';
	// console.log('39')
  } else if (gain > 0 && gain <= 10) {
	document.getElementById('image3').style.display = 'block';
	// console.log('51')
  } else if (gain > 10) {
	document.getElementById('image4').style.display = 'block';
	// console.log('94')
  }
}

function backgroundshowtext(){
document.getElementById('backgroundremove_text').style.visibility="visible"
}

function backgroundremovetext(){
	document.getElementById('backgroundremove_text').style.visibility="hidden"
	}

function gainnote(){
		document.getElementById('gain').style.visibility="hidden";
		document.getElementById('gainok').style.visibility="hidden";
		document.getElementById('gaintext').style.visibility="hidden";
		document.getElementById("okButton1").disabled = false;
		document.getElementById("inputValueLeft").disabled = false;
		document.getElementById("inputValueRight").disabled = false;
	}

function gain(){
	document.getElementById('nextButton').style.visibility="visible";
	
				// console.log('graph')
				
}

function graphinfo(){
	document.getElementById('graphtext').style.visibility="visible"
}
function graphinfo1(){
	document.getElementById('graphtext').style.visibility="hidden"
}

function enableButton() {
	var dropdown = document.getElementById("optionsDropdown");
	var okButton = document.getElementById("select_ok");
  
	if (dropdown.value !== "") {
	  okButton.disabled = false;
	} else {
	  okButton.disabled = true;
	}
  }
  

  document.getElementById('firstDropdown').addEventListener('change', populateSecondDropdown);
document.getElementById('secondDropdown').addEventListener('change', enableDoneButton);

function populateSecondDropdown() {
  const firstDropdown = document.getElementById('firstDropdown');
  const secondDropdown = document.getElementById('secondDropdown');

  // Clear the options in the second dropdown
  secondDropdown.innerHTML = '';

  // Get the selected value from the first dropdown
  const selectedValue = firstDropdown.value;

  // Populate the second dropdown based on the selection
  switch (selectedValue) {
    case 'a':
      addOptions(secondDropdown, ['5']);
      break;
    case 'b':
      addOptions(secondDropdown, ['5']);
      break;
    case 'c':
      addOptions(secondDropdown, ['14']);
      break;
    case 'd':
      addOptions(secondDropdown, ['5.5']);
      break;
    case 'e':
      addOptions(secondDropdown, ['5.5']);
      break;
    case 'f':
      addOptions(secondDropdown, ['15']);
      break;
	  case 'g':
      addOptions(secondDropdown, ['3.15']);
      break;
    default:
      // If no selection or unexpected value, keep the second dropdown empty
      break;
  }

  enableDoneButton(); // Check if the "Done" button should be enabled
}

function addOptions(selectElement, options) {
  // Add options to the second dropdown based on the selection
  options.forEach(option => {
    const optionElement = document.createElement('option');
    optionElement.value = option;
    optionElement.textContent = option;
    selectElement.appendChild(optionElement);
  });
}

function enableDoneButton() {
  const firstDropdown = document.getElementById('firstDropdown');
  const secondDropdown = document.getElementById('secondDropdown');
  const doneButton = document.getElementById('doneButton');

  // Check if both dropdowns have selected values
  const firstValue = firstDropdown.value;
  const secondValue = secondDropdown.value;

  if (firstValue && secondValue) {
    doneButton.disabled = false; // Enable the Done button

	document.getElementById('doneButton').onclick=function(){
	myInt=setInterval(function(){animatearrow();},500);	
	document.getElementById('arrow1').style="visibility:visible; left:405px; top:473px; position:absolute;height:30px;";
	document.getElementById('arrow1').style.WebkitTransform="rotate(-90deg)";
	document.getElementById('arrow1').style.msTransform="rotate(-90deg)";
	document.getElementById('arrow1').style.transform="rotate(-90deg)";
	document.getElementById('OK_button').onclick=function(){
		myStopFunction();	
		document.getElementById("blank_general").style.visibility = "hidden";
											document.getElementById("material").style.visibility = "hidden";
											document.getElementById("type").style.visibility = "hidden";
											document.getElementById("RDP").style.visibility = "hidden";
											document.getElementById("material").style.visibility="hidden"
											document.getElementById("firstDropdown").style.visibility = "hidden";
								document.getElementById("secondDropdown").style.visibility = "hidden";
								document.getElementById("doneButton").style.visibility = "hidden";
											document.getElementById("OK_button").style.visibility="hidden";
											document.getElementById("Cancel_button").style.visibility="hidden";
											// document.getElementById("select_ok").style.visibility="hidden";
											document.getElementById("RDP_button").style.visibility = "hidden";
											document.getElementById("general_button").style.visibility = "hidden";
											document.getElementById("sensors_button").style.visibility = "hidden";
											document.getElementById("view_button").style.visibility = "hidden";
											document.getElementById("wheel_button").style.visibility = "hidden";
											document.getElementById("graphcurve").style.visibility = "visible";
									document.getElementById("blackgraph1").style.visibility = "visible";
									document.getElementById("graphcurve").style.animation = "graph2 6s forwards";
									document.getElementById("blackgraph1").style.animation = "curve2 8.5s forwards";
									setTimeout(function(){
													document.getElementById('initial').style.visibility="visible";
													document.getElementById('dialog_intial').style.visibility="visible";
													document.getElementById('divp_initial').style.visibility="visible";
											
										
											},8000)
									
	}}
	
  } else {
    doneButton.disabled = true; // Keep the Done button disabled
  }
}


  