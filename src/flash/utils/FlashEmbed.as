/*
Copyright 2012-2013 Renaun Erickson

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

@author Renaun Erickson / renaun.com / @renaun
*/

package flash.utils
{
	import flash.display.Bitmap;
	import flash.media.Sound;
	import flash.net.URLRequest;
	
	import guice.utilities.GlobalUtilities;
	
	import randori.webkit.dom.Document;
	import randori.webkit.xml.DOMParser;
	import randori.webkit.xml.XMLHttpRequest;

public class FlashEmbed
{
	public function FlashEmbed()
	{
	}
	
	public static function getEmbed(type:String, properties:Object):Function
	{
		var embedClass:Function;
		if (type == "flash.display.Bitmap")
		{
			FlashTimingEngine.getEmbed(properties.source);
			embedClass = function():void {
				//console.log(properties.source);
				this.source = properties.source;//"media/graphics/mySpritesheet.png";
				this.bitmapData = FlashTimingEngine.getEmbed(this.source); 
			};
		}
		else if (type == "XML")
		{
			embedClass = function():void {
				this.source = properties.source;//"media/graphics/mySpritesheet.xml";
				this.mimeType = properties.mimeType;//"application/octet-stream";
				
				
				var xmlHTTP:XMLHttpRequest = new XMLHttpRequest();
				try
				{
					xmlHTTP.open("GET", this.source, false);
					xmlHTTP.send(null);
				}
				catch (e) {
					window.alert("Unable to load the requested file.");
					return;
				}
				var oParser:DOMParser = new DOMParser();
				var oDOM:Document = oParser.parseFromString(xmlHTTP.responseText, "text/xml");
				
				var jxon:JXONTree = new JXONTree(oDOM.documentElement);
				for (var property:* in jxon)
				{
					if (jxon.hasOwnProperty(property)) {
						// do stuff
						//trace(property + " - " + typeof(jxon[property]));
						//trace(jxon[property]);
						this[property] = jxon[property];
					}
				}	
			};   
			GlobalUtilities.$inherit(embedClass as Class, JXONTree);
		}
		else if (type == "flash.media.Sound")
		{
			FlashTimingEngine.getSoundEmbed(properties.source);
			embedClass = function():void {
				this.source = properties.source;
				//this.source = properties.source;//"media/graphics/mySpritesheet.png";
				//var soundObject = new flash.media.Sound(flash.net.URLRequest(properties.source));
				(Sound as Function).call(this , new URLRequest(properties.source));
			};
			GlobalUtilities.$inherit(embedClass as Class, Sound);
		}
		if (embedClass)
		{
			embedClass.filename = (properties.source as String).match(/[\w\-. ]+$/g)[0].split(".")[0];
			embedClass.classType = type;
		}
		return embedClass;
	}
}
}