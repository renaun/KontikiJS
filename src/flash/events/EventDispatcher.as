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
import flash.display.DisplayObject;
import flash.display.DisplayObjectContainer;
import flash.utils.Dictionary;

public dynamic class EventDispatcher implements IEventDispatcher
{
	public static function fireGlobalEvent(event:Event):void
	{
		if (!staticListeners)
			staticListeners = new Dictionary(false);
		if (staticListeners[event.type])
		{
			var arr:Array = staticListeners[event.type];
			if (arr == null)
				return;
			for (var i:int = 0; i < arr.length; i++) 
			{
				if (arr[i].listener as Function != null)
				{
					//FlashAPILoggeer.log("fireGlobalEvent["+event.type+"]: " + arr[i].instance);
					(arr[i].listener as Function).apply(arr[i].instance, [event]);
				}
				if (event.bubbles && arr[i].instance is DisplayObjectContainer)
				{
					var doc:DisplayObjectContainer = arr[i].instance as DisplayObjectContainer;
					doc.bubbleEvent(event);
				}
			}
		}
	}
	
	protected static var staticListeners:Dictionary;
	public static var count:int = 1;
	public function EventDispatcher(target:IEventDispatcher = null)
	{
		_target = target;
		_name = "instanceED"+EventDispatcher.count++;
	}
	
	protected var listeners:Dictionary = new Dictionary(false);
	
	private var _target:IEventDispatcher;
	private var queueEvents:Dictionary = new Dictionary();
	
	private var _name:String = "";
	

	public function addEventListener(type:String, listener:Function, useCapture:Boolean = false, priority:int = 0, useWeakReference:Boolean = false):void
	{
		if (!listeners[type])
		{
			listeners[type] = [];
		}
		if (type == Event.ENTER_FRAME)
		{
			if (!EventDispatcher.staticListeners)
				EventDispatcher.staticListeners = new Dictionary(false);
			if (!EventDispatcher.staticListeners[type])
				EventDispatcher.staticListeners[type] = [];	
			EventDispatcher.staticListeners[type].push({instance: this,listener: listener, priority: priority});
		}
		
		
		var l:int;
		var i:int;
		var indexOfPriority:int = 0;
		l = listeners[type].length;
		for (i = 0; i < l; i++) 
		{
			if (listeners[type][i].priority >= priority)
				indexOfPriority = i+1;
			if (listeners[type][i].listener == listener)
				return;
		}
		if (indexOfPriority < l)
			listeners[type].splice(indexOfPriority,0,{listener: listener, priority: priority});
		else
			listeners[type].push({listener: listener, priority: priority});
		
		if (queueEvents[type])
		{
			while (queueEvents[type].length > 0)
				dispatchEvent((queueEvents[type] as Array).shift());
		}
	}
	
	public function hasEventListener(type:String):Boolean
	{
		return listeners[type] && listeners[type].length > 0;
	}
	
	public function willTrigger(type:String):Boolean
	{
		return listeners[type] && listeners[type].length > 0;
	}
	
	public function removeEventListener(type:String, listener:Function, useCapture:Boolean = false):void
	{
		
		if (!EventDispatcher.staticListeners)
			EventDispatcher.staticListeners = new Dictionary(false);
		if (!listeners[type])
		{
			return;
		}
		var l:int;
		var i:int
		if (type == Event.ENTER_FRAME)
		{
			l = EventDispatcher.staticListeners[type].length;
			for (i = 0; i < l; i++) 
			{
				//FlashAPILoggeer.log("EventDispatcher["+i+"][len:"+l+"] : " + EventDispatcher.staticListeners[type][i].instance);
				if (EventDispatcher.staticListeners[type][i].listener == listener)
				{
					//FlashAPILoggeer.log("EventDispatcher["+i+"]2 : " + EventDispatcher.staticListeners[type][i].instance);
					EventDispatcher.staticListeners[type].splice(i,1);
					break;
				}
			}
		}
		l = listeners[type].length;
		for (i = 0; i < l; i++) 
		{
			if (listeners[type][i].listener == listener)
			{
				listeners[type].splice(i,1);
				return;
			}
		}
	}
	
	public function dispatchEvent(event:Event):Boolean
	{
		if (listeners[event.type])
		{
			var arr:Array = listeners[event.type];
			if (arr == null)
				return false;
			
			if (!event.target)
				event.target = this;
			event.currentTarget = this;
			for (var i:int = 0; i < arr.length; i++) 
			{
				if (arr[i].listener as Function != null)
					(arr[i].listener as Function).apply(this, [event]);
				if (event.bubbles && this is DisplayObjectContainer)
				{
					var doc:DisplayObjectContainer = this as DisplayObjectContainer;
					doc.bubbleEvent(event);
				}
			}
		}
		// queue up if its not there for race condition when not using timers
		else
		{
			if (!queueEvents[event.type])
				queueEvents[event.type] = []
			queueEvents[event.type].push(event);
		}
		return true;
	}
	
	
	
	public function toString():String
	{
		return _name;
	}
}
}