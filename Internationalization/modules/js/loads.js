/******************************************************************
*	Name    : getCurrentLocale
*	Author  : Kony Solutions
*	Purpose : Get the current locale of the application 
*****************************************************************
*/
function getCurrentLocale()
{
	var currentLocale = kony.i18n.getCurrentLocale();
	kony.print("@@@@@@@@@@"+currentLocale);
	frmLocale.lblGetLocale.isVisible=true;
	frmLocale.lblGetLocale.text="Current Locale :"+currentLocale
}


/******************************************************************
*	Name    : getSupportedLocales
*	Author  : Kony Solutions
*	Purpose : Get the supported locales of the application 
*****************************************************************
*/
function getSupportedLocales()
{
	var list = kony.i18n.getSupportedLocales();
	var languageList=" ";
	if(kony.os.deviceInfo().name == "blackberry"){
		for(i=0; i<list.length; i++){
			if(i!=list.length-1)
				languageList= languageList+" "+list[i]["name"]+",";
			else
				languageList= languageList+" "+list[i]["name"];
		}
		kony.print("@@@@@@@@@@"+languageList);
		frmLocale.lblSupLocale.isVisible=true;
		frmLocale.lblSupLocale.text="Supported Locales :"+languageList;
	}
	
	else{
		kony.print("@@@@@@@@@@"+list);
		
		//frmLocale.lblSupLocale.text="Supported Locales :"+JSON.stringify(list);
		frmLocale.lblSupLocale.isVisible=true;
		frmLocale.lblSupLocale.text="Supported Locales :"+list;
		
	}
}


/******************************************************************
*	Name    : getCurrentDeviceLocale
*	Author  : Kony Solutions
*	Purpose : Get the current locale of the device 
*****************************************************************
*/
function getCurrentDeviceLocale()
{
	var locale =kony.i18n.getCurrentDeviceLocale();
	kony.print("@@@@@@@@@@"+locale);
	frmLocale.lblDevLocale.isVisible=true;
	frmLocale.lblDevLocale.text="Device Locale :"+JSON.stringify(locale);
}


/******************************************************************
*	Name    : setResourceBundle
*	Author  : Kony Solutions
*	Purpose : Set the resource bundle for different locales 
*****************************************************************
*/
function setResourceBundle()
{
	kony.i18n.setResourceBundle({key1:"us key1",key2:"us key2"}, "en_US");
	kony.i18n.setResourceBundle({key1:"fr key1",key2:"fr key2"}, "fr_FR");
	kony.print("@@@@@@@@@@SET");
	frmLocale.lblSetBundle.isVisible=true;
	frmLocale.lblSetBundle.text="Resource Bundle Set for en_US:{key1:'us key1', key2:'us key2'} and fr_FR:{key1:'fr key1', key2:'fr key2'} ";
	frmLocale.btnSetBundle.text = "Resource Bundle is Set";
}

/******************************************************************
*	Name    : updateResourceBundle
*	Author  : Kony Solutions
*	Purpose : Update the resource bundle
*****************************************************************
*/
function updateResourceBundle()
{
	kony.i18n.updateResourceBundle({key3:"us key3",key4:"us key4",key5:"us key5"}, "en_US");
	kony.i18n.updateResourceBundle({key3:"fr key3",key4:"fr key4",key5:"fr key5"}, "fr_FR");
	kony.print("@@@@@@@@@@UPDATE");
	frmLocale.lblUpBundle.isVisible=true;
	frmLocale.lblUpBundle.text="Resource Bundle Updated for en_US:{key3:'us key3', key4:'us key4', key5:'us key5'} and fr_FR:{key3:'fr key3', key4:'fr key4', key5:'fr key5'}"
	frmLocale.btnUpBundle.text = "Resource Bundle is updated";
}


/******************************************************************
*	Name    : isResourceBundlePresent
*	Author  : Kony Solutions
*	Purpose : Checks whether the resource bundle is present or not
*****************************************************************
*/
function isResourceBundlePresent()
{
	var exists1 = kony.i18n.isResourceBundlePresent("en_US");
	var exists2 = kony.i18n.isResourceBundlePresent("fr_FR");
	var exists3 = kony.i18n.isResourceBundlePresent("en_CA");
	kony.print("@@@@@@@@@@"+exists1+exists2+exists3);
	frmLocale.lblBundlePresent.isVisible=true;
	frmLocale.lblBundlePresent.text="Resource bundle exists for en_US:"+exists1+", fr_FR:"+exists2+", en_CA:"+exists3
}


/******************************************************************
*	Name    : isLocaleSupportedByDevice
*	Author  : Kony Solutions
*	Purpose : Checks whether the locale is supported by device
*****************************************************************
*/
function isLocaleSupportedByDevice()
{
	var isPresent =kony.i18n.isLocaleSupportedByDevice("zh_CN");
	kony.print("@@@@@@@@@@"+isPresent);
	frmLocale.lblLocaleSup.isVisible=true;
	frmLocale.lblLocaleSup.text="Is locale zh_CN supported by device? : "+isPresent
}


/******************************************************************
*	Name    : getLocalizedString
*	Author  : Kony Solutions
*	Purpose : Get the localized string for a particular key
*****************************************************************
*/
function getLocalizedString()
{
	var currentLocales = kony.i18n.getLocalizedString("key2");
	var currentLocales1 = kony.i18n.getLocalizedString("key5");
	kony.print("@@@@@@@@@@"+currentLocales+currentLocales1);
	frmLocale.lblLocString.isVisible=true;
	frmLocale.lblLocString.text=" LocalizedString for key2 : "+currentLocales+", for key5: "+currentLocales1
}


/******************************************************************
*	Name    : deleteResourceBundle
*	Author  : Kony Solutions
*	Purpose : Deletes the resource bundle 
*****************************************************************
*/
function deleteResourceBundle()
{
	kony.i18n.deleteResourceBundle("en_US");
	kony.print("@@@@@@@@@@DELETE");
	frmLocale.lblDelBundle.isVisible=true;
	frmLocale.lblDelBundle.text="Resources bundle for en_US has been deleted.";
	frmLocale.btnDelBundle.text = "Resource Bundle Deleted";
}

/******************************************************************
*	Name    : onsuccesscallbackDef
*	Author  : Kony Solutions
*	Purpose : Success callback for setting default locale
*****************************************************************
*/
function onsuccesscallbackDef()
{
	frmLocale.lblDefAsync.isVisible=true;
	frmLocale.lblDefAsync.text="Default Locale Set : fr_FR";
	frmLocale.btnDefAsync.text ="Default Locale is Set";
	kony.print("@@@@@@@@@@@@@@@@SUCCESS")
}

/******************************************************************
*	Name    : onfailurecallbackDef
*	Author  : Kony Solutions
*	Purpose : Failure callback for setting default locale
*****************************************************************
*/
function onfailurecallbackDef()
{
	frmLocale.lblDefAsync.isVisible=true;
	frmLocale.lblDefAsync.text="Locale Setting Failed";
	kony.print("@@@@@@@@@@@@@@@@FAILURE")
}

/******************************************************************
*	Name    : setDefaultLocaleAsync
*	Author  : Kony Solutions
*	Purpose : Sets the default locale Asynchronously
*****************************************************************
*/
function setDefaultLocaleAsync()
{
	kony.i18n.setDefaultLocaleAsync("fr_FR", onsuccesscallbackDef, onfailurecallbackDef);
}

/******************************************************************
*	Name    : onsuccesscallbackCur
*	Author  : Kony Solutions
*	Purpose : Success callback for setting current locale
*****************************************************************
*/
function onsuccesscallbackCur()
{
	frmLocale.lblCurAsync.isVisible=true;
	frmLocale.lblCurAsync.text="Current Locale Set :" + kony.i18n.getCurrentLocale();
	frmLocale.btnCurAsync.text = "Current Locale is Set";
}

/******************************************************************
*	Name    : onfailurecallbackCur
*	Author  : Kony Solutions
*	Purpose : Failure callback for current default locale
*****************************************************************
*/
function onfailurecallbackCur()
{
	frmLocale.lblCurAsync.isVisible=true;
	frmLocale.lblCurAsync.text="Locale Setting Failed";
}

/******************************************************************
*	Name    : setCurrentLocaleAsync
*	Author  : Kony Solutions
*	Purpose : Sets the current locale Asynchronously
*****************************************************************
*/
function setCurrentLocaleAsync()
{
	kony.i18n.setCurrentLocaleAsync("en_GB", onsuccesscallbackCur, onfailurecallbackCur);

}