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

package flash.display
{
import flash.events.Event;
import flash.net.URLRequest;
import flash.system.LoaderContext;
import flash.utils.ByteArray;
import renaun.html.stub.JSImage;

public class Loader extends DisplayObjectContainer
{
	private var image:JSImage;
	public function Loader()
	{
		this.contentLoaderInfo = new LoaderInfo();
		super();
	}
	
	public var contentLoaderInfo : LoaderInfo;
	public var content : DisplayObject;
	
	public function close():void {}
	public function load(request:URLRequest, context:LoaderContext = null):void {
		contentLoaderInfo.url = request.url;
		image = new JSImage;
		image.addEventListener("load", onload);
		image.src = request.url;
	}
	
	private function onload(e:Event):void 
	{
		var bitmap:Bitmap = new Bitmap(new BitmapData(0, 9, true));
		bitmap.width = image.width;
		bitmap.height = image.height;
		bitmap.bitmapData.image = image;
		bitmap.bitmapData.width = image.width;
		bitmap.bitmapData.height = image.height;
		bitmap.bitmapData.updatePatern();
		content = bitmap;
		
		contentLoaderInfo.dispatchEvent(new Event(Event.COMPLETE));
	}
	public function loadBytes(bytes:ByteArray, context:LoaderContext = null):void {}
	public function unload():void {}
	public function unloadAndStop(gc:Boolean = true):void {}
}
}