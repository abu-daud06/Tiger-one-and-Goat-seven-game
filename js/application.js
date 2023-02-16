var game_set=0;
var who_move=0;
var store='b.jpg';
var pre_id='';
var current_action='';
var eat_count=0;
var game_end='off';
var tiger_id='';
var name_1='';
var name_2='';
var name_3='';
var name_4='';
var name_5='';
var name_6='';
var name_7='';
var name_8='';
var name_9='';
var name_10='';
var name_11='';
var name_12='';
var name_13='';
var tiger_move_count=0;
var goat_move_count=0;
function game_reset()
{
	document.getElementById("img_1").src="img/g.jpg";	
	document.getElementById("img_2").src="img/g.jpg";	
	document.getElementById("img_3").src="img/g.jpg";	
	document.getElementById("img_4").src="img/g.jpg";	
	document.getElementById("img_5").src="img/g.jpg";	
	document.getElementById("img_6").src="img/g.jpg";	
	document.getElementById("img_7").src="img/g.jpg";
	document.getElementById("img_8").src="img/b.jpg";	
	document.getElementById("img_9").src="img/b.jpg";	
	document.getElementById("img_10").src="img/b.jpg";	
	document.getElementById("img_11").src="img/b.jpg";	
	document.getElementById("img_12").src="img/b.jpg";	
	document.getElementById("img_13").src="img/b.jpg";	
	game_set=0;
	current_action='set';
	who_move=0;
	store='b.jpg';
	pre_id='';
	eat_count=0;
	game_end='off';
	tiger_id='';
	name_1='';
	name_2='';
	name_3='';
	name_4='';
	name_5='';
	name_6='';
	name_7='';
	name_8='';
	name_9='';
	name_10='';
	name_11='';
	name_12='';
	name_13='';
	tiger_move_count=0;
	goat_move_count=0;
		
}


function on_click(id)
{
	if(game_set==0)
	{
		if(id=='img_8' || id=='img_9' || id=='img_10' || id=='img_11' || id=='img_12' || id=='img_13')
		{
			document.getElementById(id).src="img/t.jpg";
			game_set=1;
			who_move=1;
			tiger_id=id;
		}
		else
		{
			alert("Tiger Position Invalid");	
		}
	}
	else if(game_end=='on')
	{
			
	}
	else
	{
		var img_url=document.getElementById(id).src;
		var img_array_1 = img_url.split('/');
		var img_len=img_array_1.length-1;
		var img_name=img_array_1[img_len];
		if(img_name=='t.jpg')
		{
			if(current_action=='set')
			{
				if(who_move==0)
				{
					who_move=1;
					set_img(id, img_name)
				}
				else
				{
					alert("Now Move Goat");	
				}
			}
			else
			{
				alert("It is Not Blank");	
			}
		}
		else if(img_name=='g.jpg')
		{
			if(current_action=='set')
			{
				if(who_move==1)
				{
					who_move=0;
					set_img(id, img_name)
				}
				else
				{
					alert("Now Move Tiger");	
				}
			}
			else
			{
				alert("It is Not Blank");	
			}
		}
		else if(img_name=='b.jpg')
		{
			reset_img(id)
		}
	}
	
	function set_img(id, img_name)
	{
		if(current_action=='set')
		{
			store=img_name;
			pre_id=id;
			current_action='reset';
		}
	}

	
	function reset_img(id)
	{
		if(current_action=='reset')
		{
			if(store=='g.jpg')
			{
				var move_valid=goat_valid(id, pre_id)
				if(move_valid==true)
				{
					document.getElementById(id).src="img/"+store;
					document.getElementById(pre_id).src="img/b.jpg";
					current_action='set';
					goat_move_count++;
				}
				else
				{
					alert("It is not valid");	
				}

			}
			else if(store=='t.jpg')
			{
				var move_valid=goat_valid(id, pre_id);
				var eat=tiger_eat(id, pre_id);
				if(move_valid==true)
				{
					document.getElementById(id).src="img/"+store;
					document.getElementById(pre_id).src="img/b.jpg";
					current_action='set';
					tiger_move_count++;
					tiger_id=id;
				}
				else if(eat!=false)
				{
					document.getElementById(eat).src="img/b.jpg";
					document.getElementById(id).src="img/"+store;
					document.getElementById(pre_id).src="img/b.jpg";
					current_action='set';
					tiger_move_count++;
					eat_count=eat_count+1;
					tiger_id=id;
				}
				else 
				{
					alert("It is not valid");	
				}

			}
			
		}
		
		game_status();
		
	}
	
	function game_status()
	{
		if(eat_count>3)
		{
			game_end='on';
			alert("Tiger Won The Game \n Total Move="+tiger_move_count);
			
			var again=confirm("Play Again?");
			if(again==true)
			{
				game_reset();
			}
		}
		else
		{
			set_img_name();
			var off_no=check_tiger();
			if(off_no=='off')
			{
				game_end='on';
				alert("Goat Won The Game \n Total Move="+goat_move_count);
				var again=confirm("Play Again?");
				if(again==true)
				{
					game_reset();
				}
			}
			else
			{
			}
		}
	}
	
	function check_tiger()
	{
		if(tiger_id=='img_1')
		{
			if(name_2=='b.jpg' || name_3=='b.jpg' || name_4=='b.jpg' || name_7=='b.jpg')
			{
				return 'on';	
			}
			else
			{
				return 'off';	
			}
				
		}
		else if(tiger_id=='img_2')
		{
			if(name_1=='b.jpg' || name_3=='b.jpg' || name_5=='b.jpg' || name_7=='b.jpg')
			{
				return 'on';	
			}
			else
			{
				return 'off';	
			}
				
		}
		else if(tiger_id=='img_3')
		{
			if(name_1=='b.jpg' || name_2=='b.jpg' || name_6=='b.jpg' || name_7=='b.jpg')
			{
				return 'on';	
			}
			else
			{
				return 'off';	
			}
				
		}
		else if(tiger_id=='img_4')
		{
			if(name_1=='b.jpg' || name_5=='b.jpg' || name_6=='b.jpg' || name_7=='b.jpg' || name_10=='b.jpg')
			{
				return 'on';	
			}
			else
			{
				return 'off';	
			}
				
		}
		else if(tiger_id=='img_5')
		{
			if(name_2=='b.jpg' || name_4=='b.jpg' || name_6=='b.jpg' || name_7=='b.jpg' || name_9=='b.jpg')
			{
				return 'on';	
			}
			else
			{
				return 'off';	
			}
				
		}
		else if(tiger_id=='img_6')
		{
			if(name_3=='b.jpg' || name_4=='b.jpg' || name_5=='b.jpg' || name_7=='b.jpg' || name_8=='b.jpg')
			{
				return 'on';	
			}
			else
			{
				return 'off';	
			}
				
		}
		else if(tiger_id=='img_7')
		{
			if(name_1=='b.jpg' || name_2=='b.jpg' || name_3=='b.jpg' || name_4=='b.jpg' || name_5=='b.jpg' || name_6=='b.jpg' || name_8=='b.jpg' || name_9=='b.jpg' || name_10=='b.jpg' || name_11=='b.jpg' || name_12=='b.jpg' || name_13=='b.jpg')
			{
				return 'on';	
			}
			else
			{
				return 'off';	
			}
				
		}
		else if(tiger_id=='img_8')
		{
			if(name_6=='b.jpg' || name_7=='b.jpg' || name_9=='b.jpg' || name_10=='b.jpg' || name_11=='b.jpg')
			{
				return 'on';	
			}
			else
			{
				return 'off';	
			}
				
		}
		else if(tiger_id=='img_9')
		{
			if(name_5=='b.jpg' || name_7=='b.jpg' || name_8=='b.jpg' || name_10=='b.jpg' || name_12=='b.jpg')
			{
				return 'on';	
			}
			else
			{
				return 'off';	
			}
				
		}
		else if(tiger_id=='img_10')
		{
			if(name_4=='b.jpg' || name_7=='b.jpg' || name_8=='b.jpg' || name_9=='b.jpg' || name_13=='b.jpg')
			{
				return 'on';	
			}
			else
			{
				return 'off';	
			}
				
		}
		else if(tiger_id=='img_11')
		{
			if(name_7=='b.jpg' || name_8=='b.jpg' || name_12=='b.jpg' || name_13=='b.jpg')
			{
				return 'on';	
			}
			else
			{
				return 'off';	
			}
				
		}
		else if(tiger_id=='img_12')
		{
			if(name_7=='b.jpg' || name_9=='b.jpg' || name_11=='b.jpg' || name_13=='b.jpg')
			{
				return 'on';	
			}
			else
			{
				return 'off';	
			}
				
		}
		else if(tiger_id=='img_13')
		{
			if(name_7=='b.jpg' || name_10=='b.jpg' || name_11=='b.jpg' || name_12=='b.jpg')
			{
				return 'on';	
			}
			else
			{
				return 'off';	
			}
				
		}
	}
	
	
	function tiger_eat(id, pre_id)
	{	
		if(pre_id=='img_1')
		{
			if(id=='img_3')
			{
				return 'img_2';	
			}
			else if(id=='img_7')
			{
				return 'img_4';	
			}
			else
			{
				return false;	
			}
		}
		else if(pre_id=='img_2')
		{
			if(id=='img_7')
			{
				return 'img_5';	
			}
			else
			{
				return false;	
			}
		}
		else if(pre_id=='img_3')
		{
			if(id=='img_1')
			{
				return 'img_2';	
			}
			else if(id=='img_7')
			{
				return 'img_6';	
			}
			else
			{
				return false;	
			}
		}
		else if(pre_id=='img_4')
		{
			if(id=='img_6')
			{
				return 'img_5';	
			}
			else if(id=='img_10')
			{
				return 'img_7';	
			}
			else
			{
				return false;	
			}
		}
		else if(pre_id=='img_5')
		{
			if(id=='img_9')
			{
				return 'img_9';	
			}
			else
			{
				return false;	
			}
		}
		else if(pre_id=='img_6')
		{
			if(id=='img_4')
			{
				return 'img_5';	
			}
			else if(id=='img_8')
			{
				return 'img_7';	
			}
			else
			{
				return false;	
			}
		}
		else if(pre_id=='img_7')
		{
			if(id=='img_1')
			{
				return 'img_4';	
			}
			else if(id=='img_2')
			{
				return 'img_5'	
			}
			else if(id=='img_3')
			{
				return 'img_6';
			}
			else if(id=='img_11')
			{
				return 'img_8';
			}
			else if(id=='img_12')
			{
				return 'img_9';
			}
			else if(id=='img_13')
			{
				return 'img_10';
			}
			
			else
			{
				return false;	
			}
		}
		else if(pre_id=='img_8')
		{
			if(id=='img_6')
			{
				return 'img_7';	
			}
			else if(id=='img_10')
			{
				return 'img_9';	
			}
			else
			{
				return false;	
			}
		}
		else if(pre_id=='img_9')
		{
			if(id=='img_5')
			{
				return 'img_7';	
			}
			else
			{
				return false;	
			}
		}
		else if(pre_id=='img_10')
		{
			if(id=='img_4')
			{
				return 'img_7';	
			}
			else if(id=='img_8')
			{
				return 'img_9';	
			}
			else
			{
				return false;	
			}
		}
		else if(pre_id=='img_11')
		{
			if(id=='img_7')
			{
				return 'img_8';	
			}
			else if(id=='img_13')
			{
				return 'img_12';	
			}
			else
			{
				return false;	
			}
		}
		else if(pre_id=='img_12')
		{
			if(id=='img_7')
			{
				return 'img_9';	
			}
			else
			{
				return false;	
			}
		}
		else if(pre_id=='img_13')
		{
			if(id=='img_7')
			{
				return 'img_10';	
			}
			else if(id=='img_11')
			{
				return 'img_12';	
			}
			else
			{
				return false;	
			}
		}
							
	}
	
	
	
	
	
	function goat_valid(id, pre_id)
	{
		if(pre_id=='img_1')
		{
			if(id=='img_2' || id=='img_4')
			{
				return true;	
			}
			else
			{
				return false;	
			}
		}
		else if(pre_id=='img_2')
		{
			if(id=='img_1' || id=='img_3' || id=='img_5')
			{
				return true;	
			}
			else
			{
				return false;	
			}
		}
		else if(pre_id=='img_3')
		{
			if(id=='img_2' || id=='img_6')
			{
				return true;	
			}
			else
			{
				return false;	
			}
		}
		else if(pre_id=='img_4')
		{
			if(id=='img_1' || id=='img_5' || id=='img_7')
			{
				return true;	
			}
			else
			{
				return false;	
			}
		}
		else if(pre_id=='img_5')
		{
			if(id=='img_2' || id=='img_4' || id=='img_6' || id=='img_7')
			{
				return true;	
			}
			else
			{
				return false;	
			}
		}
		else if(pre_id=='img_6')
		{
			if(id=='img_3' || id=='img_5' || id=='img_7')
			{
				return true;	
			}
			else
			{
				return false;	
			}
		}
		else if(pre_id=='img_7')
		{
			if(id=='img_4' || id=='img_5' || id=='img_6' || id=='img_8' || id=='img_9' || id=='img_10')
			{
				return true;	
			}
			else
			{
				return false;	
			}
		}
		else if(pre_id=='img_8')
		{
			if(id=='img_7' || id=='img_9' || id=='img_11')
			{
				return true;	
			}
			else
			{
				return false;	
			}
		}
		else if(pre_id=='img_9')
		{
			if(id=='img_7' || id=='img_8' || id=='img_10' || id=='img_12')
			{
				return true;	
			}
			else
			{
				return false;	
			}
		}
		else if(pre_id=='img_10')
		{
			if(id=='img_7' || id=='img_9' || id=='img_13')
			{
				return true;	
			}
			else
			{
				return false;	
			}
		}
		else if(pre_id=='img_11')
		{
			if(id=='img_8' || id=='img_12')
			{
				return true;	
			}
			else
			{
				return false;	
			}
		}
		else if(pre_id=='img_12')
		{
			if(id=='img_9' || id=='img_11' || id=='img_13')
			{
				return true;	
			}
			else
			{
				return false;	
			}
		}
		else if(pre_id=='img_13')
		{
			if(id=='img_10' || id=='img_12')
			{
				return true;	
			}
			else
			{
				return false;	
			}
		}
	}
	function set_img_name()
	{
		var img_name_1=document.getElementById("img_1").src;
		var array_1=img_name_1.split("/");
		var len_1=array_1.length-1;
		name_1=array_1[len_1];

		var img_name_2=document.getElementById("img_2").src;
		var array_2=img_name_2.split("/");
		var len_2=array_2.length-1;
		name_2=array_2[len_2];

		var img_name_3=document.getElementById("img_3").src;
		var array_3=img_name_3.split("/");
		var len_3=array_3.length-1;
		name_3=array_3[len_3];

		var img_name_4=document.getElementById("img_4").src;
		var array_4=img_name_4.split("/");
		var len_4=array_4.length-1;
		name_4=array_4[len_4];

		var img_name_5=document.getElementById("img_1").src;
		var array_5=img_name_5.split("/");
		var len_5=array_5.length-1;
		name_5=array_5[len_5];

		var img_name_6=document.getElementById("img_6").src;
		var array_6=img_name_6.split("/");
		var len_6=array_6.length-1;
		name_6=array_6[len_6];

		var img_name_7=document.getElementById("img_7").src;
		var array_7=img_name_7.split("/");
		var len_7=array_7.length-1;
		name_7=array_7[len_7];

		var img_name_8=document.getElementById("img_8").src;
		var array_8=img_name_8.split("/");
		var len_8=array_8.length-1;
		name_8=array_8[len_8];

		var img_name_9=document.getElementById("img_9").src;
		var array_9=img_name_9.split("/");
		var len_9=array_9.length-1;
		name_9=array_9[len_9];

		var img_name_10=document.getElementById("img_10").src;
		var array_10=img_name_10.split("/");
		var len_10=array_10.length-1;
		name_10=array_10[len_10];

		var img_name_11=document.getElementById("img_11").src;
		var array_11=img_name_11.split("/");
		var len_11=array_11.length-1;
		name_11=array_11[len_11];

		var img_name_12=document.getElementById("img_12").src;
		var array_12=img_name_12.split("/");
		var len_12=array_12.length-1;
		name_12=array_12[len_12];

		var img_name_13=document.getElementById("img_13").src;
		var array_13=img_name_13.split("/");
		var len_13=array_13.length-1;
		name_13=array_13[len_13];

	}
}