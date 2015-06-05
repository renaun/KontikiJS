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
	import flash.text.TextField;
	import flash.utils.FlashTimingEngine;
	
import randori.webkit.html.canvas.CanvasRenderingContext2D;
public dynamic class Stage extends DisplayObjectContainer
{
	public function Stage()
	{
		super();
		addEventListener(Event.ENTER_FRAME, enterFrame);
	}
	
	private function enterFrame(e:Event):void 
	{
		var c:CanvasRenderingContext2D = (FlashTimingEngine.root as Sprite).graphics.getCanvas();
		c.clearRect(0, 0, 1000, 1000);
		FlashTimingEngine.root.updateGraphics();
	}
	
	
	
	public var stageWidth:Number;
	public var stageHeight:Number;
	
	private var _stage3Ds:Vector.<Stage3D>;
	public function get stage3Ds():Vector.<Stage3D>
	{
		if (!_stage3Ds)
		{
			_stage3Ds = new Vector.<Stage3D>();
			_stage3Ds.push(new Stage3D());
		}
		return _stage3Ds;
	}
}
}