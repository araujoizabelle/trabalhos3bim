$(function(){
	function Ocorrencia(palavra){
		this.palavra=palavra;
		this.numOcorrencia=1;
	}
	var x;
	var palavrArray;
	var y=0;
	var a=0;
	var pa=0;
	var ocorrencia=[];
	$("#num-caracc").text(y+" caracteres com espaço");
	$("#num-caracs").text(a+" caracteres sem espaço");
	$("#num-pal").text(pa+" palavras adicionadas");
	$("#texto").keyup(function(){
		x= $(this).val();
		palavrArray=x.split(" ");
		pa=palavrArray.length;
		y=x.length;
		a=x.length-pa;
		$("#num-caracc").text(y+" caracteres com espaço");
		$("#num-caracs").text(a+" caracteres sem espaço");
		$("#num-pal").text(pa+" palavras adicionadas");
		if(y<=0){
			$("#num-carac").text("Quantidade de caracteres máxima atingida!!");
		}
	});
	$("#bt").click(function(){
		$.each(palavrArray,function(ind,palavra){
		var isNovaOcorrencia=true;
		$.each(ocorrencia,function(ind,ocorrencia){
			if(palavra==ocorrencia.palavra){
				ocorrencia.numOcorrencia++;
				isNovaOcorrencia=false;
			}
		});
		if(isNovaOcorrencia){
			ocorrencia.push(new Ocorrencia(palavra));
		}
	});
		var maior=0;
		var pal="";
		$.each(ocorrencia,function(ind,ocorrencia){
			if(ocorrencia.numOcorrencia>maior){
				maior=ocorrencia.numOcorrencia;
				pal=ocorrencia.palavra;
			}
		});
		$("#comum").text("A palavra que mais apareceu foi: "+pal);
	});	
});