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


import flash.display.BitmapData;
import flash.display.DisplayObjectContainer;
import flash.display.Stage;
import flash.events.Event;
import flash.events.EventDispatcher;
import flash.events.MouseEvent;
import flash.events.TimerEvent;
import flash.media.Sound;
import flash.net.URLRequest;

import randori.webkit.dom.MouseEvent;
import randori.webkit.dom.TouchEvent;
import randori.webkit.html.HTMLCanvasElement;
import randori.webkit.page.Window;

public class FlashTimingEngine
{
	
	public static var stageInstance:Stage;
	public static var frameHandler:RequestAnimationFrame;
	public static var embedLoadingObjects:Array = [];
	public static var embedBitmapDatas:Array = [];
	public static var embedSounds:Array = [];
	
	public static function getEmbed(source:String):BitmapData
	{
		if (!embedBitmapDatas[source])
		{
			var bitmapData:BitmapData = new BitmapData(0, 0, true, 0);
			bitmapData.embedImage(source);  
			embedBitmapDatas[source] = bitmapData;
		}
		return embedBitmapDatas[source];
	}
	
	public static function getSoundEmbed(source:String):Sound
	{
		if (!embedSounds[source])
		{
			var snd:Sound = new Sound(new URLRequest(source));
			FlashTimingEngine.embedLoadingObjects.push(snd);
			embedSounds[source] = snd;
		}
		return embedSounds[source];
	}
	
	public static function setupStageInteractionEvents(canvas:HTMLCanvasElement):void
	{
		canvas.addEventListener("mousedown", FlashTimingEngine.captureEventHandler, true);
		canvas.addEventListener("mousemove", FlashTimingEngine.captureEventHandler, true);
		canvas.addEventListener("mouseup", FlashTimingEngine.captureEventHandler, true);
		
		if ('ontouchstart' in Window.document.documentElement) {
			
			canvas.addEventListener("touchstart", FlashTimingEngine.captureTouchEventHandler, true);
			canvas.addEventListener("touchmove", FlashTimingEngine.captureTouchEventHandler, true);
			canvas.addEventListener("touchend", FlashTimingEngine.captureTouchEventHandler, true);
		}
	}
	
	public static function captureEventHandler(event:randori.webkit.dom.MouseEvent):void
	{
		if (!stageInstance)
			return;
		var type:String = "mouseDown";// THIS ERRORS IN RANDORI flash.events.MouseEvent.MOUSE_DOWN;
		if (event.type == "mousedown")
			type = "mouseDown";
		else if (event.type == "mousemove")
			type = "mouseMove";//flash.events.MouseEvent.MOUSE_MOVE;
		else if (event.type == "mouseup")
			type = "mouseUp";//flash.events.MouseEvent.MOUSE_UP;
		var me:flash.events.MouseEvent = new flash.events.MouseEvent(type, false, false, event.offsetX, event.offsetY);
		stageInstance.dispatchEvent(me);
	}
	
	public static function captureTouchEventHandler(event:randori.webkit.dom.TouchEvent):void
	{
		if (!stageInstance)
			return;
		var type:String = "touchBegin";// THIS ERRORS IN RANDORI flash.events.TouchEvent.TOUCH_BEGIN;
		if (event.type == "touchstart")
			type = "touchBegin";
		else if (event.type == "touchmove")
			type = "touchMove";
		else if (event.type == "touchend")
			type = "touchEnd";
// TODO go through event.changedTouches and figure out sizeX if it equals raidusX
		//var te:flash.events.TouchEvent = new flash.events.TouchEvent(type, false, false, 0, false, event.layerX, event.layerY, event.
		//stageInstance.dispatchEvent(te);
	}
	
	/**
	 * 
	 * 	@param root 
	 * 	@param framePerSecond
	 */
	public static function start(root:DisplayObjectContainer, framePerSecond:int, stageWidth:int = 0, stageHeight:int = 0, color:uint = 0xcccccc):void
	{
		try
		{
			frameHandler = new RequestAnimationFrame();
		}
		catch (error:Error)
		{
			
		}
		
		if (!stageInstance)
			stageInstance = new Stage();
		stageInstance.stageWidth = stageWidth;
		stageInstance.stageHeight = stageHeight;
		stageInstance.color = color;
		FlashTimingEngine.root = root;
		stopFlag = false;
		FlashTimingEngine.framePerSecond = framePerSecond
		frameTime = int(1000/framePerSecond);
		//var run:Boolean = true;
		//while (run)
		//{
		//	run = tick();
		//}
		currentTime = new Date().getTime();
		if (embedLoadingObjects.length == 0)
		{
			tick();
			root.dispatchEvent(new Event(Event.ADDED_TO_STAGE));
		}
		else
			embedWait();
	}
	
	public static function embedWait():void
	{
		var allComplete:Boolean = true;
		for (var i:int = 0; i < embedLoadingObjects.length; i++)
		{
			allComplete = allComplete && embedLoadingObjects[i].isLoaded;
		}
		trace("allComplete: " + allComplete);
		if (allComplete)
		{
			tick();
			root.dispatchEvent(new Event(Event.ADDED_TO_STAGE));
		}
		else
			Window.setTimeout(FlashTimingEngine.embedWait, 50);
	}
	
	public static function tick():void
	{	
		startFrameTime = new Date().getTime();
		EventDispatcher.fireGlobalEvent(ENTER_EVENT);
		var timerObject:TimerObject;
		for each (timerObject in currentTimers) 
		{
			//FlashAPILoggeer.log("FlashTimingEngine::Loop: " + timerObject.time + "/"+timerObject.timeLeft+"/"+timerObject.repeat);
			//timerObject = currentTimers[key];
			if (!timerObject)
				continue;
			if (timerObject.timeLeft-lastFrameTime < 0)
			{
				if (timerObject.repeat >= 0)
					timerObject.repeat--;
				timerObject.timeLeft = timerObject.time;
				timerObject.callBack.dispatchEvent(TIMER_EVENT);
				if (timerObject.repeat == -1)
				{
					timerObject.callBack.dispatchEvent(TIMER_COMPLETE_EVENT);
					//addToPool(currentTimers[key]);
					//currentTimers[key] = null;
					//delete currentTimers[key];
					addToPool(timerObject);
					currentTimers[timerObject.id] = null;
					delete currentTimers[timerObject.id];
				}
			}
			else
			{
				timerObject.timeLeft -= lastFrameTime;
			}
		}
		
		lastFrameTime = (new Date().getTime() - startFrameTime);

		if (frameTime - lastFrameTime > 0)
		{
			Window.setTimeout(FlashTimingEngine.tick, (frameTime - lastFrameTime));
			return;
		}
		
		//FlashAPILoggeer.log("FlashTimingEngine::Frame:["+stopFlag+"] " + lastFrameTime+"/" +frameTime);
		
		if (lastFrameTime < frameTime)
			lastFrameTime = frameTime;
		//return !stopFlag;
		if (!stopFlag)
			frameHandler.request(FlashTimingEngine.tick);
	}
	
	public static function stop():void
	{
		stopFlag = true;
	}
	
	public static function createTimer(time:int, repeat:int, callBack:EventDispatcher):int
	{
		lastID++;
		// TODO pool timerObjects
		if (availableObjects.length == 0)
			availableObjects.push(new TimerObject(lastID, time, repeat, callBack));
		var t:TimerObject = availableObjects.pop();
		t.id = lastID;
		t.time = time;
		t.timeLeft = time;
		t.repeat = repeat;
		t.callBack = callBack;
		currentTimers[lastID] = t;
		return lastID;
	}
	
	public static function addToPool(timerObject:TimerObject):void
	{
		availableObjects.push(timerObject);
	}
	public static function stopTimer(key:int):void
	{
		addToPool(currentTimers[key]);
		currentTimers[key] = null;
		delete currentTimers[key];
	}
	
	public static function logAPIWarning(msg:String):void
	{
		if (showAPIWarnings)
			Window.console.log(msg);
	}
	
	private static var ENTER_EVENT:Event = new Event(Event.ENTER_FRAME, false);
	private static var TIMER_EVENT:Event = new TimerEvent(TimerEvent.TIMER);
	private static var TIMER_COMPLETE_EVENT:Event = new TimerEvent(TimerEvent.TIMER_COMPLETE);
	
	private static var root:DisplayObjectContainer;
	private static var frameTime:int;
	private static var framePerSecond:int;
	private static var startFrameTime:int = 0;
	private static var lastFrameTime:int = 0;
	private static var currentTimers:Dictionary = new Dictionary();
	
	private static var stopFlag:Boolean = false;

	private static var lastID:int = 0;

	private static var availableObjects:Array = [];
	public static var currentTime:Number = 0;
	public static var showAPIWarnings:Boolean = true;
	
}

}
import flash.events.EventDispatcher;

class TimerObject
{
	public var id:int = 0;
	public var time:int = 0;
	public var timeLeft:int = 0;
	public var repeat:int = 1;
	public var callBack:EventDispatcher;
	
	public function TimerObject(id:int, time:int, repeat:int, callBack:EventDispatcher)
	{
		this.time = time;
		timeLeft = time;
		this.repeat = repeat;
		this.callBack = callBack;
	}
}