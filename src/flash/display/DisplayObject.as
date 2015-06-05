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
import flash.events.EventDispatcher;
import flash.geom.Point;
import flash.geom.Rectangle;
import flash.geom.Transform;
import flash.utils.FlashTimingEngine;

import randori.webkit.dom.Element;

public dynamic class DisplayObject extends EventDispatcher implements IBitmapDrawable
{
	
	
	
	// HTML Properties
	public var domElement:Element;
	
	//public static var stageInstance:Stage;

	public function get visible():Boolean
	{
		return _visible;
	}

	public function set visible(value:Boolean):void
	{
		_visible = value;
	}

	public static var instanceCounter:int = 0;
	public function DisplayObject()
	{
		name = "Instance" + DisplayObject.instanceCounter++;
		
		transform = new Transform();
		transform.target = this;
	}
	public var alpha : Number = 1.0;
	public var cacheAsBitmap : Boolean = false;
	public var name:String = "";
	public var mask:DisplayObject;
	public var filters:Array = [];
	public var transform:Transform;
	private var _visible:Boolean = true;
	public var loaderInfo:LoaderInfo = new LoaderInfo();
	
	public var root:DisplayObject = null;
	
	private var _mouseX:Number = 0;
	private var _mouseY:Number = 0;
	
	public var _parent2:DisplayObjectContainer;

	public function get mouseY():Number
	{
		return _mouseY;
	}

	public function set mouseY(value:Number):void
	{
		_mouseY = value;
	}

	public function get mouseX():Number
	{
		return _mouseX;
	}

	public function set mouseX(value:Number):void
	{
		_mouseX = value;
	}

	public function get parent():DisplayObjectContainer
	{
		return _parent2;
	}
	
	private var _rotation:Number = 0;

	public function get rotation():Number
	{
		return _rotation;
	}

	public function set rotation(value:Number):void
	{
		_rotation = value;
	}

	
	//[Inject]
	//private var injectedStage:Stage;
	
	public function get stage():Stage
	{
		//if (!injectedStage)
		//	injectedStage = builder.buildClass("flash.display.Stage") as Stage;
		return FlashTimingEngine.stageInstance;
	}
	
	private var _width:Number = 0;

	public function get width():Number
	{
		return _width;
	}

	public function set width(value:Number):void
	{
		_width = value;
	}

	private var _height:Number = 0;

	public function get height():Number
	{
		return _height;
	}

	public function set height(value:Number):void
	{
		_height = value;
	}

		
	private var _x:Number = 0;

	public function get x():Number
	{
		return _x;
	}

	public function set x(value:Number):void
	{
		_x = value;
	}

	private var _y:Number = 0;

	public function get y():Number
	{
		return _y;
	}

	public function set y(value:Number):void
	{
		_y = value;
	}

	public var scaleX:Number = 1;
	public var scaleY:Number = 1;
	
	public function getRect(targetCoordinateSpace:DisplayObject):Rectangle
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: DisplayObject.getRect() $$$$");
		return new Rectangle(0,0, 10,10);
	}
	private var p:Point = new Point(0, 0);
	public function localToGlobal(point:Point):Point 
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: DisplayObject.localToGlobal() $$$$");
		return p; 
	}
	private var rect:Rectangle = new Rectangle(0, 0, 0, 0);
	
	public function getBounds(targetCoordinateSpace:DisplayObject):Rectangle 
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: DisplayObject.getBounds() $$$$");
		return rect; 
	}
	
	public function hitTestPoint(x:Number, y:Number, shapeFlag:Boolean = false):Boolean
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: DisplayObject.hitTestPoint() $$$$");
		return true;
	}
	
	override public function toString():String
	{
		return name;
	}
	
	public function updateGraphics():void {
		transform.matrix.identity();
		transform.matrix.scale(this.scaleX,this.scaleY);
		transform.matrix.rotate(this.rotation*Math.PI/180);
		transform.matrix.translate(this.x,this.y);
		
		if(this.parent){
			transform.worldMatrix.copyFrom(this.parent.transform.worldMatrix);
			transform.worldMatrix.concat(transform.matrix);
		}else {
			transform.worldMatrix.copyFrom(this.transform.matrix);
		}
	}
	
}
}