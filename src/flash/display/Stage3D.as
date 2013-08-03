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
import flash.display3D.Context3D;
import flash.events.ErrorEvent;
import flash.events.Event;
import flash.events.EventDispatcher;
import flash.utils.FlashTimingEngine;

import randori.webkit.dom.Document;
import randori.webkit.dom.Element;
import randori.webkit.html.HTMLCanvasElement;
import randori.webkit.html.canvas.CanvasRenderingContext;
import randori.webkit.html.canvas.WebGLRenderingContext;
import randori.webkit.page.Window;

public class Stage3D extends EventDispatcher
{
	public function Stage3D()
	{
		super();
	}
	
	private var _context3D:Context3D = null;


	public function get context3D():Context3D
	{
		return _context3D;
	}
	
	private var _x:Number;
	
	public function get x():Number
	{
		return _x;
	}
	
	public function set x(value:Number):void
	{
		_x = value;
	}
	
	private var _y:Number;
	
	public function get y():Number
	{
		return _y;
	}
	
	public function set y(value:Number):void
	{
		_y = value;
	}
	
	public function requestContext3D(context3DRenderMode:String = "auto", profile:String = "baseline"):void
	{
		trace("Stage3D");
		// Create Canvas
		var canvas:Object = Window.document.createElement("canvas") as HTMLCanvasElement;
		//canvas.width = 200;
		//canvas.height = 200;
		//canvas.background = "#336699";
		//var context = canvas.getContext("webgl", {alpha: false}) || canvas.getContext("experimental-webgl", {alpha: false});

		try
		{
			// Can't put the {alpha: false} in there
			var context:WebGLRenderingContext = canvas.getContext("webgl", {alpha: false}) || canvas.getContext("experimental-webgl", {alpha: false});
		}
		catch (error:Error)	{ }
		
		if (context)
		{
			_context3D = new Context3D();
			_context3D.canvas = canvas as HTMLCanvasElement;
			FlashTimingEngine.setupStageInteractionEvents(canvas as HTMLCanvasElement);
			_context3D.webglContext = context;
			Window.document.body.appendChild(canvas as HTMLCanvasElement);
			Window.setTimeout(sendCreateEvent, 10);
		}
		else
		{
			dispatchEvent(new ErrorEvent(ErrorEvent.ERROR, false, false, "No Context Available"));
		}
		
	}
	
	public function sendCreateEvent():void
	{
		dispatchEvent(new Event(Event.CONTEXT3D_CREATE));
	}
}
}