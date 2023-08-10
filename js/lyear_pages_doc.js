$("#savebt").click(function(){
	
	let bianhao =$("#in-bianhao").val();
	let duimin =$("#in-duimin").val();
	let jiancheng=$("#in-jiancheng").val();
	let duizhang=$("#in-duizhang").val();
	let renqi=$("#in-renqi").val();
	let zhuangtai=$("#in-duizhang").val();
	
	
	console.log(zhuangtai);

	if(!bianhao||!duimin||!jiancheng||!duizhang||!renqi||!zhuangtai){
		alert("输入的信息不能为空");
		return;
	}
	else alert("添加成功");
	
	let trtag =`<tr>
			<td>${bianhao}</td>
			<td>${duimin}</td>
			<td>${jiancheng}</td>
			<td>${duizhang}</td>
			<td>${renqi}</td>
			<td><font class="text-success">${zhuangtai}</font></td>
			<td>
				<div class="btn-group">
				  <a class="btn btn-xs btn-default" href="#!" title="编辑" data-toggle="tooltip"><i class="mdi mdi-pencil"></i></a>
				  <a class="btn btn-xs btn-default" href="#!" title="查看" data-toggle="tooltip"><i class="mdi mdi-eye"></i></a>
				  <a class="btn btn-xs btn-default" href="#!" title="删除" data-toggle="tooltip"><i class="mdi mdi-window-close"></i></a>
				</div>
			</td>
		</tr>`;
		// document.getElementById('tbody').insertAdjacentHTML(str);
		$('#tbody').html(str);
		$("#tbody").append(trtag);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});








// $("#myModal").css('display','none');


