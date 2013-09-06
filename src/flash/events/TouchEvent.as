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

package flash.events
{
	import flash.display.InteractiveObject;
	import flash.utils.ByteArray;

public class TouchEvent extends Event
{
	
	public static const TOUCH_BEGIN:String = "touchBegin";
	public static const TOUCH_END:String = "touchEnd";
	public static const TOUCH_MOVE:String = "touchMove";
	
	public function TouchEvent(type:String, bubbles:Boolean = true, 
				cancelable:Boolean = false, touchPointID:int = 0, 
				isPrimaryTouchPoint:Boolean = false, localX:Number = NaN, 
				localY:Number = NaN, sizeX:Number = NaN, 
				sizeY:Number = NaN, pressure:Number = NaN, 
				relatedObject:InteractiveObject = null, 
				ctrlKey:Boolean = false, altKey:Boolean = false, 
				shiftKey:Boolean = false, commandKey:Boolean = false, 
				controlKey:Boolean = false, timestamp:Number = NaN, 
				touchIntent:String = "unknown", samples:ByteArray = null, 
				isTouchPointCanceled:Boolean = false)
	{
		super(type, bubbles, cancelable);
		this.pressure = pressure;
		this.sizeX = sizeX;
		this.sizeY = sizeY;
		this.touchPointID = touchPointID;
		this.isPrimaryTouchPoint = isPrimaryTouchPoint;
	}
	
	public var pressure:Number;
	public var sizeX:Number;
	public var sizeY:Number;
	public var stageX:Number;
	public var stageY:Number;
	public var touchPointID:int;
	public var isPrimaryTouchPoint:Boolean;
}
}