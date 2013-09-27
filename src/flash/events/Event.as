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
public dynamic class Event
{
	public static const ACTIVATE : String = "activate";
	public static const ADDED_TO_STAGE : String = "addedToStage";
	public static const CLOSE : String = "close";
	public static const OPEN : String = "open";
	public static const COMPLETE : String = "complete";
	public static const CONNECT : String = "connect";
	public static const CHANGE : String = "change";
	public static const ADDED : String = "added";
	public static const ENTER_FRAME : String = "enterFrame";
	public static const FULLSCREEN : String = "fullScreen";
	public static const REMOVED_FROM_STAGE : String = "removedFromStage";
	public static const REMOVED : String = "removed";
	public static const RENDER : String = "render";
	public static const RESIZE : String = "resize";
	public static const MOUSE_LEAVE : String = "mouseLeave";
	public static const SOUND_COMPLETE : String = "soundComplete";
    public static const CONTEXT3D_CREATE : String = "context3DCreate";
    
	
	public function Event(type:String, bubbles:Boolean = false, cancelable:Boolean = false)
	{
		_type = type;
		_bubbles = bubbles;
		_cancelable = cancelable;
	}
	
	public var target:Object;
	public var currentTarget:Object;
	
	protected var _type:String = "";
	protected var _bubbles:Boolean;
	protected var _cancelable:Boolean;
	
	public function get type():String
	{
		return _type;
	}
	public function get bubbles():Boolean
	{
		return _bubbles;
	}
	public function get cancelable():Boolean
	{
		return _cancelable;
	}
	
	public function clone():Event
	{
		return new Event(type);
	}
	
	
	public function preventDefault():void {}
		
	
	
	public function toString():String
	{
		return "";
	}
}
}