
$(document).ready(function() {

    $(document).on("click", "#idBtConsulta", function () {
        
        if( $("#idNome").val() == ""){            
            alert("Preenche esse trem!!!!");
            return 0;
        }

        $.ajax({ 
            type: "GET",
            url: "consulta.php",
            data: "user=" + $("#idUser").val() +  "&pass=" + $("#idPass").val() ,
            async: false,
            success: function (ret) {
                if (ret==1){
                    window.location.href = "sistemaLogado.php";
                }else{
                    alert("Nome ou senha não encontrado!")
                }
            }
        });

    });

});