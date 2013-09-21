/******************************************************************
*	Name    : navigateToFrmLocale
*	Author  : Kony
*	Purpose : Navigate to frmLocale form
*****************************************************************
*/

function navigateToFrmLocale(){
	frmLocalPreShow();
	frmLocale.show();
}

/******************************************************************
*	Name    : frmLocalPreShow
*	Author  : Kony
*	Purpose : To Initialize labels before frmLocal is rendered
*****************************************************************
*/

function frmLocalPreShow(){
	//#ifdef desktopweb
	try{
		
		frmLocale.lblCurAsync.text= "";
		frmLocale.lblLocString.text= "";
    	frmLocale.lblSetBundle.text= "";
    	frmLocale.lblSupLocale.text= "";
    	frmLocale.lblUpBundle.text= "";
    	frmLocale.lblDelBundle.text= "";
		frmLocale.lblDevLocale.text= "";
		frmLocale.lblGetLocale.text= "";
		frmLocale.lblLocaleSup.text= "";
    	frmLocale.lblBundlePresent.text= "";
    	frmLocale.lblDefAsync.text= "";
    	frmLocale.btnUpBundle.text = "Update";
		frmLocale.btnSetBundle.text = "Set";
		frmLocale.btnDelBundle.text="Delete";
		frmLocale.btnDefAsync.text ="Set";
		frmLocale.btnCurAsync.text = "Set";
		}catch(err)
		{alert(err.message);
		}
	//#else
	try{
		frmLocale.tabPaneContent.lblBundlePresent.text="";
		frmLocale.tabPaneContent.lblCurAsync.text= "";
		frmLocale.tabPaneContent.lblDefAsync.text= "";
		frmLocale.tabPaneContent.lblDelBundle.text= "";
		frmLocale.tabPaneContent.lblDevLocale.text= "";
		frmLocale.tabPaneContent.lblGetLocale.text= "";
		frmLocale.tabPaneContent.lblLocaleSup.text= "";
		frmLocale.tabPaneContent.lblLocString.text= "";
		frmLocale.tabPaneContent.lblSetBundle.text= "";
		frmLocale.tabPaneContent.lblSupLocale.text= "";
		frmLocale.tabPaneContent.lblUpBundle.text= "";
		frmLocale.tabPaneContent.btnUpBundle.text = "Update";
		frmLocale.tabPaneContent.btnSetBundle.text = "Set";
		frmLocale.tabPaneContent.btnDelBundle.text="Delete";
		frmLocale.tabPaneContent.btnDefAsync.text ="Set";
		frmLocale.tabPaneContent.btnCurAsync.text = "Set";
		}catch(err)
		{alert(err.message);}
	//#endif

	getCurrentLocale();
}

/*****************************************************************************************************************
*	Name    : frmLocalTabPreShow
*	Author  : Kony
*	Purpose : To initialize navigation pane and set visibility of widgets before frmLocal is rendered on Tablet
****************************************************************************************************************
*/

function frmLocalTabPreShow(){
	
frmLocale.segNavigation.data=[	{"lblNavigation":"Current Locale"},
								{"lblNavigation":"Supported Locales"},
								{"lblNavigation":"Current Device Locale"},
								{"lblNavigation":"Set Resource Bundle"},
								{"lblNavigation":"Update Resource Bundle"},
								{"lblNavigation":"Resource Bundle Presence"},
								{"lblNavigation":"Locale Supported by Device"},
								{"lblNavigation":"Get Localized String"},
								{"lblNavigation":"Remove Resource Bundle"},
								{"lblNavigation":"Default Locale Async"},
								{"lblNavigation":"Current Locale Async"}
							 ];
		ClearContentTab();
		frmLocale.hbxGetLocale.setVisibility(true);	
	
}

/**************************************************************************************
*	Name    : segClickEvent
*	Author  : Kony
*	Purpose : To set the visibility of widgets based on selection in navigation pane
*************************************************************************************
*/
		
function segClickEvent(seguiWidget, sectionIndex, rowIndex){
		ClearContentTab();
		switch(rowIndex){
		case 0:
			getCurrentLocale();
			frmLocale.hbxGetLocale.setVisibility(true);
		break;
		case 1:
			getSupportedLocales();
			frmLocale.hbxSupLocale.setVisibility(true);
		break;
		case 2:
			getCurrentDeviceLocale();
			frmLocale.hbxDevLocale.setVisibility(true);
		break;
		case 3:
			frmLocale.hbxSetBundle.setVisibility(true);
		break;
		case 4:
			frmLocale.hbxUpBundle.setVisibility(true);
		break;
		case 5:
			isResourceBundlePresent();
			frmLocale.hbxBundlePresent.setVisibility(true);
		break;
		case 6:
			isLocaleSupportedByDevice();
			frmLocale.hbxLocaleSetup.setVisibility(true);
		break;
		case 7:
			getLocalizedString();
			frmLocale.hbxLocString.setVisibility(true);
		break;
		case 8:
			frmLocale.hbxDelBundle.setVisibility(true);
		break;
		case 9:
			frmLocale.hbxDefAsync.setVisibility(true);
		break;
		case 10:
			frmLocale.hbxCurAsync.setVisibility(true);
		break;
		default:
		}
	
}

/**************************************************************************************
*	Name    : segClickEvent
*	Author  : Kony
*	Purpose : To set the visibility of widgets based on selection in navigation pane
*************************************************************************************
*/	
function tabClickEvent(tabPane,tabIndex){
		switch(tabIndex){
		case 0:
			getCurrentLocale();
		break;
		case 1:
			getSupportedLocales();
		break;
		case 2:
			getCurrentDeviceLocale();
		break;
		case 3:
		break;
		case 4:
		break;
		case 5:
			isResourceBundlePresent();
		break;
		case 6:
			isLocaleSupportedByDevice();
		break;
		case 7:
			getLocalizedString();
		break;
		case 8:
		break;
		case 9:
		break;
		case 10:
		break;
		default:
		}
}

/***************************************************************************************
*	Name    : ClearContentTab
*	Author  : Kony
*	Purpose : To make all the widgets on frmLocale (except Navigation Pane) invisible
**************************************************************************************
*/

function ClearContentTab(){
	frmLocale.hbxBundlePresent.setVisibility(false);
	frmLocale.hbxCurAsync.setVisibility(false);
	frmLocale.hbxDefAsync.setVisibility(false);
	frmLocale.hbxDelBundle.setVisibility(false);
	frmLocale.hbxDevLocale.setVisibility(false);
	frmLocale.hbxGetLocale.setVisibility(false);
	frmLocale.hbxLocaleSetup.setVisibility(false);
	frmLocale.hbxLocString.setVisibility(false);
	frmLocale.hbxSetBundle.setVisibility(false);
	frmLocale.hbxSupLocale.setVisibility(false);
	frmLocale.hbxUpBundle.setVisibility(false);
}