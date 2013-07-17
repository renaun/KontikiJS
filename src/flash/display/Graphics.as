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
import flash.geom.Matrix;
import flash.utils.FlashTimingEngine;

public final class Graphics
{
	public function Graphics()
	{
	}
	
	public function beginFill(color:uint, alpha:Number = 1.0):void 
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: Graphics.beginFill() $$$$");
	}
	public function beginBitmapFill(bitmap:BitmapData, matrix:Matrix = null, repeat:Boolean = true, smooth:Boolean = false):void 
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: Graphics.beginBitmapFill() $$$$");
	}
	public function beginGradientFill(type:String, colors:Array, alphas:Array, ratios:Array, matrix:* = null, spreadMethod:String = "pad", interpolationMethod:String = "rgb", focalPointRatio:Number = 0):void 
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: Graphics.beginGradientFill() $$$$");
	}
	public function clear():void 
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: Graphics.clear() $$$$");
	}
	public function drawCircle(x:Number, y:Number, radius:Number):void 
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: Graphics.clear() $$$$");
	}
	public function drawRect(x:Number, y:Number, width:Number, height:Number):void 
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: Graphics.drawRect() $$$$");
	}
	public function drawRoundRect(x:Number, y:Number, width:Number, height:Number, ellipseWidth:Number, ellipseHeight:Number = NaN):void 
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: Graphics.drawRoundRect() $$$$");
	}
	public function drawGraphicsData(graphicsData:Vector.<IGraphicsData>):void 
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: Graphics.drawGraphicsData() $$$$");
	}
	public function endFill():void 
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: Graphics.endFill() $$$$");
	}
	public function lineStyle(thickness:Number = NaN, color:uint = 0, alpha:Number = 1.0, pixelHinting:Boolean = false, scaleMode:String = "normal", caps:String = null, joints:String = null, miterLimit:Number = 3):void
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: Graphics.lineStyle() $$$$");
	}
	public function lineGradientStyle(type:String, colors:Array, alphas:Array, ratios:Array, matrix:Matrix = null, spreadMethod:String = "pad", interpolationMethod:String = "rgb", focalPointRatio:Number = 0):void 
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: Graphics.lineGradientStyle() $$$$");
	}
	public function lineTo(x:Number, y:Number):void 
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: Graphics.lineTo() $$$$");
	}
	public function moveTo(x:Number, y:Number):void 
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: Graphics.moveTo() $$$$");
	}
	public function drawEllipse(x:Number, y:Number, width:Number, height:Number):void 
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: Graphics.drawEllipse() $$$$");
	}
	public function copyFrom(g:Graphics):void 
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: Graphics.copyFrom() $$$$");
	}
}
}