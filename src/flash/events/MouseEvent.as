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

public dynamic class MouseEvent extends Event
{
	public static const CLICK : String = "click";
	public static const MOUSE_DOWN : String = "mouseDown";
	public static const MOUSE_MOVE : String = "mouseMove";
	public static const MOUSE_UP : String = "mouseUp";
	public static const MOUSE_OVER : String = "mouseOver";
	public static const MOUSE_OUT : String = "mouseOut";
	public static const ROLL_OVER : String = "rollOver";
	public static const ROLL_OUT : String = "rollOut";
	public static const MOUSE_WHEEL : String = "mouseWheel";
	
	public function MouseEvent(type:String, bubbles:Boolean = true, cancelable:Boolean = false, localX:Number = NaN, localY:Number = NaN, relatedObject:InteractiveObject = null, ctrlKey:Boolean = false, altKey:Boolean = false, shiftKey:Boolean = false, buttonDown:Boolean = false, delta:int = 0, commandKey:Boolean = false, controlKey:Boolean = false, clickCount:int = 0)
	{
		
		super(type, bubbles, cancelable);
		this.localX = localX;
		this.localY = localY;
	}
	public var localX:Number = 0;
	public var localY:Number = 0;
	public function get stageX():Number { return localX; }
	public function get stageY():Number { return localY; }
}
}