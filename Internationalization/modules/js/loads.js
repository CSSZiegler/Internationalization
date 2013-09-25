/******************************************************************
*	Name    : getCurrentLocale
*	Author  : Kony
*	Purpose : Get the current locale of the application 
*****************************************************************
*/
function getCurrentLocale()
{
	var currentLocale = kony.i18n.getCurrentLocale();
	//#ifdef desktopweb
		frmLocale.lblGetLocale.text="Current Locale :"+currentLocale;
		frmLocale.lblGetLocale.isVisible=true;
	//#else
		frmLocale.tabPaneContent.lblGetLocale.text="Current Locale :"+currentLocale;
		frmLocale.tabPaneContent.lblGetLocale.isVisible=true;	
	//#endif
}

/******************************************************************
*	Name    : getSupportedLocales
*	Author  : Kony
*	Purpose : Get the supported locales of the application 
******************************************************************/
function getSupportedLocales()
{
	var list = kony.i18n.getSupportedLocales();
	var languageList=" ";
	if(kony.os.deviceInfo().name == "blackberry")
	{
		for(i=0; i<list.length; i++)
		{
			if(i!=list.length-1)
				languageList= languageList+" "+list[i]["name"]+",";
			else
				languageList= languageList+" "+list[i]["name"];
		}
		frmLocale.tabPaneContent.lblSupLocale.isVisible=true;
		frmLocale.tabPaneContent.lblSupLocale.text="Supported Locales :"+languageList;
	}
	else{		
		//#ifdef desktopweb
		frmLocale.lblSupLocale.text="Supported Locales :"+list;
		frmLocale.lblSupLocale.isVisible=true;	
		//#else
		for(i=0;i<5;i++)
		{
			languageList=languageList+" "+kony.table.get(list,i)+",";
		}
		frmLocale.tabPaneContent.lblSupLocale.text="Supported Locales :"+languageList+"...";
		frmLocale.tabPaneContent.lblSupLocale.isVisible=true;
		//#endif		
	}
}


/******************************************************************
*	Name    : getCurrentDeviceLocale
*	Author  : Kony
*	Purpose : Get the current locale of the device 
*****************************************************************
*/
function getCurrentDeviceLocale()
{
	var locale =kony.i18n.getCurrentDeviceLocale();
	//#ifdef desktopweb
	frmLocale.lblDevLocale.isVisible=true;
	frmLocale.lblDevLocale.text="Device Locale :"+JSON.stringify(locale);	
	//#else
	frmLocale.tabPaneContent.lblDevLocale.isVisible=true;
	frmLocale.tabPaneContent.lblDevLocale.text="Device Locale :"+JSON.stringify(locale);	
	//#endif
}


/******************************************************************
*	Name    : setResourceBundle
*	Author  : Kony
*	Purpose : Set the resource bundle for different locales 
*****************************************************************
*/
function setResourceBundle()
{
	kony.i18n.setResourceBundle({key1:"us key1",key2:"us key2"}, "en_US");
	kony.i18n.setResourceBundle({key1:"fr key1",key2:"fr key2"}, "fr_FR");
	//#ifdef desktopweb
		frmLocale.lblSetBundle.text="Resource Bundle Set for en_US:{key1:'us key1', key2:'us key2'} and fr_FR:{key1:'fr key1', key2:'fr key2'} ";
		frmLocale.btnSetBundle.text = "Resource Bundle is Set";
		frmLocale.lblSetBundle.isVisible=true;
	//#else
		frmLocale.tabPaneContent.lblSetBundle.text="Resource Bundle Set for en_US:{key1:'us key1', key2:'us key2'} and fr_FR:{key1:'fr key1', key2:'fr key2'} ";
		frmLocale.tabPaneContent.btnSetBundle.text = "Resource Bundle is Set";
		frmLocale.tabPaneContent.lblSetBundle.isVisible=true;
	//#endif
}

/******************************************************************
*	Name    : updateResourceBundle
*	Author  : Kony
*	Purpose : Update the resource bundle
*****************************************************************
*/
function updateResourceBundle()
{
	kony.i18n.updateResourceBundle({key3:"us key3",key4:"us key4",key5:"us key5"}, "en_US");
	kony.i18n.updateResourceBundle({key3:"fr key3",key4:"fr key4",key5:"fr key5"}, "fr_FR");
	//#ifdef desktopweb
		frmLocale.lblUpBundle.text="Resource Bundle Updated for en_US:{key3:'us key3', key4:'us key4', key5:'us key5'} and fr_FR:{key3:'fr key3', key4:'fr key4', key5:'fr key5'}"
		frmLocale.btnUpBundle.text = "Resource Bundle is updated";
		frmLocale.lblUpBundle.isVisible=true;
	//#else
		frmLocale.tabPaneContent.lblUpBundle.text="Resource Bundle Updated for en_US:{key3:'us key3', key4:'us key4', key5:'us key5'} and fr_FR:{key3:'fr key3', key4:'fr key4', key5:'fr key5'}"
		frmLocale.tabPaneContent.btnUpBundle.text = "Resource Bundle is updated";
		frmLocale.tabPaneContent.lblUpBundle.isVisible=true;
	//#endif
}

/******************************************************************
*	Name    : isResourceBundlePresent
*	Author  : Kony
*	Purpose : Checks whether the resource bundle is present or not
*****************************************************************
*/
function isResourceBundlePresent()
{
	var exists1 = kony.i18n.isResourceBundlePresent("en_US");
	var exists2 = kony.i18n.isResourceBundlePresent("fr_FR");
	var exists3 = kony.i18n.isResourceBundlePresent("en_CA");
	//#ifdef desktopweb
		frmLocale.lblBundlePresent.text="Resource bundle exists for en_US:"+exists1+", fr_FR:"+exists2+", en_CA:"+exists3;
		frmLocale.lblBundlePresent.isVisible=true;
	//#else
		frmLocale.tabPaneContent.lblBundlePresent.text="Resource bundle exists for en_US:"+exists1+", fr_FR:"+exists2+", en_CA:"+exists3;
		frmLocale.tabPaneContent.lblBundlePresent.isVisible=true;
	//#endif
	
	
}


/******************************************************************
*	Name    : isLocaleSupportedByDevice
*	Author  : Kony
*	Purpose : Checks whether the locale is supported by device
*****************************************************************
*/
function isLocaleSupportedByDevice()
{
	var isPresent =kony.i18n.isLocaleSupportedByDevice("zh_CN");
	//#ifdef desktopweb
		frmLocale.lblLocaleSup.text="Is locale zh_CN supported by device? : "+isPresent;
		frmLocale.lblLocaleSup.isVisible=true;
	//#else
		frmLocale.tabPaneContent.lblLocaleSup.text="Is locale zh_CN supported by device? : "+isPresent;
		frmLocale.tabPaneContent.lblLocaleSup.isVisible=true;
	//#endif
}


/******************************************************************
*	Name    : getLocalizedString
*	Author  : Kony
*	Purpose : Get the localized string for a particular key
*****************************************************************
*/
function getLocalizedString()
{
	var currentLocales = kony.i18n.getLocalizedString("key2");
	var currentLocales1 = kony.i18n.getLocalizedString("key5");
	//#ifdef desktopweb
		frmLocale.lblLocString.text=" LocalizedString for key2 : "+currentLocales+", for key5: "+currentLocales1;
		frmLocale.lblLocString.isVisible=true;
	//#else
		frmLocale.tabPaneContent.lblLocString.text=" LocalizedString for key2 : "+currentLocales+", for key5: "+currentLocales1;
		frmLocale.tabPaneContent.lblLocString.isVisible=true;	
	//#endif
}


/******************************************************************
*	Name    : deleteResourceBundle
*	Author  : Kony
*	Purpose : Deletes the resource bundle 
*****************************************************************
*/
function deleteResourceBundle()
{
	kony.i18n.deleteResourceBundle("en_US");
	//#ifdef desktopweb
		frmLocale.lblDelBundle.text="Resources bundle for en_US has been deleted.";
		frmLocale.btnDelBundle.text = "Resource Bundle Deleted";
		frmLocale.lblDelBundle.isVisible=true;
	//#else
		frmLocale.tabPaneContent.lblDelBundle.text="Resources bundle for en_US has been deleted.";
		frmLocale.tabPaneContent.btnDelBundle.text = "Resource Bundle Deleted";
		frmLocale.tabPaneContent.lblDelBundle.isVisible=true;
	//#endif
}
/******************************************************************
*	Name    : onsuccesscallbackDef
*	Author  : Kony
*	Purpose : Success callback for setting default locale
******************************************************************/
function onsuccesscallbackDef()
{
	//#ifdef desktopweb
		frmLocale.lblDefAsync.text="Default Locale Set : fr_FR";
		frmLocale.btnDefAsync.text ="Default Locale is Set";
		frmLocale.tabPaneContent.lblDefAsync.isVisible= true;	
	//#else
		frmLocale.tabPaneContent.lblDefAsync.text="Default Locale Set : fr_FR";
		frmLocale.tabPaneContent.btnDefAsync.text ="Default Locale is Set";
		frmLocale.tabPaneContent.lblDefAsync.isVisible= true;
	//#endif
}
/******************************************************************
*	Name    : onfailurecallbackDef
*	Author  : Kony
*	Purpose : Failure callback for setting default locale
*****************************************************************
*/
function onfailurecallbackDef()
{
	//#ifdef desktopweb
		frmLocale.lblDefAsync.text="Locale Setting Failed";
		frmLocale.lblDefAsync.isVisible=true;
	//#else
		frmLocale.tabPaneContent.lblDefAsync.text="Locale Setting Failed";
		frmLocale.tabPaneContent.lblDefAsync.isVisible=true;
	//#endif
}
/******************************************************************
*	Name    : setDefaultLocaleAsync
*	Author  : Kony
*	Purpose : Sets the default locale Asynchronously
*****************************************************************
*/
function setDefaultLocaleAsync()
{
	kony.i18n.setDefaultLocaleAsync("fr_FR", onsuccesscallbackDef, onfailurecallbackDef);
}

/******************************************************************
*	Name    : onsuccesscallbackCur
*	Author  : Kony
*	Purpose : Success callback for setting current locale
*****************************************************************
*/
function onsuccesscallbackCur()
{
	//#ifdef desktopweb
		frmLocale.lblCurAsync.text="Current Locale Set :" + kony.i18n.getCurrentLocale();
		frmLocale.btnCurAsync.text="Current Locale is Set";
		frmLocale.lblCurAsync.isVisible=true;
	//#else
		frmLocale.tabPaneContent.lblCurAsync.text="Current Locale Set :" + kony.i18n.getCurrentLocale();
		frmLocale.tabPaneContent.btnCurAsync.text="Current Locale is Set";
		frmLocale.tabPaneContent.lblCurAsync.isVisible=true;
	//#endif
}	
/******************************************************************
*	Name    : onfailurecallbackCur
*	Author  : Kony
*	Purpose : Failure callback for current default locale
*****************************************************************
*/
function onfailurecallbackCur()
{
	//#ifdef desktopweb
		frmLocale.lblCurAsync.text="Locale Setting Failed";
		frmLocale.lblCurAsync.isVisible= true;
	//#else
		frmLocale.tabPaneContent.lblCurAsync.text="Locale Setting Failed";
		frmLocale.tabPaneContent.lblCurAsync.isVisible= true;
	//#endif
}
/******************************************************************
*	Name    : setCurrentLocaleAsync
*	Author  : Kony
*	Purpose : Sets the current locale Asynchronously
*****************************************************************
*/
function setCurrentLocaleAsync()
{
	kony.i18n.setCurrentLocaleAsync("en_GB", onsuccesscallbackCur, onfailurecallbackCur);
}