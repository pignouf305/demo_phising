function showCustomErrorMsg(message, alertClass) {
	var $customHeader= $('.panel.main.pull-right-responsive div.page-header.row'),
	$customHeaderMsg = $('.panel.main.pull-right-responsive div.page-header.row div.alert h1'),
	$configurationPanel = $('#sidePageContent .panel-body');

	//-- cas speciaux: on a pas d'encart blanc --//
	if($customHeader == null || $customHeader .length ==0)	 {
			//-- cas special 1: on est dans le panel de configuration --//
			if($configurationPanel != null && $configurationPanel.length >0) {
				var $popupConfigurationPanel = $('#sidePageContent .panel-body .msg-conf-error div');
				if($popupConfigurationPanel == null || $popupConfigurationPanel.length ==0) {
					$configurationPanel.prepend('<div  tabindex="0" role="alert" title=" ' + message + '" class=" msg-conf-error row col-md-12 gina-alert-header alert '+alertClass+'  alert-dismissible  show" style="margin:auto;margin-bottom:20px;"><button type="button" class="close" onclick="$(\'div.msg-error\').css(\'margin-top\',\'30px\'); $(\'.msg-conf-error.gina-alert-header\').remove();" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><div class="msg-error">' + message + '</div></div> ');
				}else {
				$popupConfigurationPanel.html(message);
				}
				//-- ferme le(s) popup(s) de message au bout de 2 secondes --//
				setTimeout(function(){
					$('.msg-conf-error.gina-alert-header').remove();
					}, 2000);
				
			}else {
			//-- cas special 2: on est dans les partials d'authentification --//
			//-- l'encart de saisie n'est pas encore affiché par OpenAM -> on affiche le message dans le beandeau gris --//
			$('#messages').append('<div data-msg="' + message + '" data-class="'+alertClass+'" class="dom-msg-display-later" style="display:none;"></div> ');
			}
		return ;
	}
		 	
	if(alertClass == 'alert-danger') {
		//-- reset des input --//
		$($('[id^=idToken]').get().reverse()).val('').focus();
	}
		
	//-- on cree si besoin l'encart d'erreur --//
	if($customHeaderMsg == null || $customHeaderMsg .length ==0) {
		$customHeader.append('<div tabindex="0" role="alert"  style="margin-top: 20px;" title=" ' + message + '" class="alert '+alertClass+'  alert-dismissible  show"><button type="button" class="close" onclick="$(\'h1.title-content\').css(\'margin-top\',\'30px\');" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><h1 class="titleError">' + message + '</h1></div> ');
		$('h1.title-content').css('margin-top','0px');
	}

	//-- on met le message --//
	$customHeaderMsg.html(message);
}

function detectDelayMsgToDisplay() {	
	var $msgToDisplay = $('#messages .dom-msg-display-later:last');
	if($msgToDisplay != null && $msgToDisplay .length >0)	 {
		 var msg = $msgToDisplay.data('msg'),
		 classe = $msgToDisplay.data('class');
		 showCustomErrorMsg(msg, classe);
		 
	}
}

function initLoginPlaceHolder(id) {
	//-- IE placeholder workaround (OPENAM-12035) --//
    if (isIE) {
    	document.getElementById(id).placeholder = "";
    	document.getElementById('loginplaceholder_' + id).className = 'loginplaceholder';
    }
}

function refreshLoginPlaceHolder(id) {
	//-- IE placeholder workaround (OPENAM-12035) --//
	if (isIE) {
		if (document.getElementById(id).value == "") {
			document.getElementById('loginplaceholder_' + id).className = 'loginplaceholder';
		} else {
			document.getElementById('loginplaceholder_' + id).className = 'placeholderHidden';
		}
	}
}