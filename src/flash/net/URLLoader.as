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

package flash.net
{
//import avmplus.FileSystem;
//import avmplus.System;

import flash.events.ErrorEvent;
import flash.events.Event;
import flash.events.EventDispatcher;
import flash.events.IOErrorEvent;

public dynamic class URLLoader extends EventDispatcher
{
	public function URLLoader(request:URLRequest = null)
	{
		super();
		if (request)
			load(request);
	}
	
	 public var data:*;
	 
	 public function load(request:URLRequest):void
	 {
		 FlashAPILoggeer.log("URLLoader::load["+request.method+"] - url: " + request.url);
		 //FlashAPILoggeer.log("URLLoader::load - data: " + request.data);
		 
		 FlashAPILoggeer.log("URLLoader::load - vars: " + request.data);
		 
		 //FlashAPILoggeer.log("URLLoader::load - method: " + request.method);
		 var event:Event = new Event(Event.COMPLETE);
		 event.target = this;
		 var sent:Boolean = false;
		 if (request.url.indexOf("http:") == -1)
		 {
			// sent = verifyAndLoadFile(request.url);
			 try
			 {
				 //data = System.popen("cat "+request.url);
			 }
			 catch (error:Error)
			 {
				 FlashAPILoggeer.log("URLLoader::cat error: " + error.message);
			 }
			 if (String(data).length > 50)
				 FlashAPILoggeer.log("URLLoader::load - output: " + String(data).substr(0, 50));
			 else
				 FlashAPILoggeer.log("URLLoader::load - output: " + data);
			 sent = (data != null);
		 }
		 else
		 {
			 var args:String = "";
			 if (request.method == URLRequestMethod.GET)
				 args = "-G";
			 
			 //if (request.url == "http://bp-fb-wm0.stage.kixeye.com/getMapObjects3.php")
			 //	 FlashAPILoggeer.log("URLLoader::load - vars: " + vars);
			 //FlashAPILoggeer.log("URLLoader::curl "+args+" --data \""+vars+"\" \""+request.url+"\"");
			 try
			 {
			 	//data = System.popen("curl "+args+" --data \""+request.data+"\" \""+request.url+"\"");
			 }
			 catch (error:Error)
			 {
				 FlashAPILoggeer.log("URLLoader::curl error: " + error.message);
			 }
			 if (String(data).length > 50)
				 FlashAPILoggeer.log("URLLoader::load - output: " + String(data).substr(0, 50));
			 else
			 	FlashAPILoggeer.log("URLLoader::load - output: " + data);
			 sent = (data != null);
		 }
		 if (sent)
		 	dispatchEvent(event);
	 }
	 
	 private function verifyAndLoadFile(file:String):Boolean 
	 {
		 /*
		 // TODO this is not brittle for relative
		 var absolute:String = FileSystem.absolutePath(file);
		 
		 if( !FileSystem.exists( absolute ) )
		 {
			 FlashAPILoggeer.log("file \"" + file + "\" does not exists.");
			 //trace( "file \"" + file + "\" does not exists." );
			 var event:IOErrorEvent = new IOErrorEvent(IOErrorEvent.IO_ERROR, false, false, "File no found");
			 event.target = this;
			 dispatchEvent(event);
			 return false;
		 }
		 
		 data = FileSystem.read( absolute );
		 
		 FlashAPILoggeer.log("URLLoader::Found Data: " + (data as String).length);
		 */
		 return true;
	 }
	
}
}