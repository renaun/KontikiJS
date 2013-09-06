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

import randori.webkit.html.HTMLCanvasElement;
import randori.webkit.html.canvas.CanvasRenderingContext2D;
import randori.webkit.page.Window;

import renaun.html.stub.JSImage;

public final class Graphics
{
	public function Graphics()
	{
	}
	
	// WebGL / HTML Specific
	public var canvas:HTMLCanvasElement;
	public var hasStrokeStlye:Boolean = false;
	
	private function getCanvas():CanvasRenderingContext2D
	{
		if (!canvas)
		{
			// TODO opitmize resizing canvas based on drawing?
			canvas = Window.document.createElement("canvas") as HTMLCanvasElement;
			canvas.width = 600;
			canvas.height = 600;
		}
		return canvas.getContext("2d");
	}
	
	public function beginFill(color:uint, alpha:Number = 1.0):void 
	{
		var ctx:CanvasRenderingContext2D = getCanvas();
		ctx.fillStyle = "rgba(" + ((color >> 16) & 0xFF) +"," 
			+ ((color >> 8) & 0xFF) + "," 
			+ (color & 0xFF) + "," + alpha + ")";
		//FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: Graphics.beginFill() $$$$");
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
		if (!canvas)
			return;
		var ctx:CanvasRenderingContext2D = getCanvas();
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	}
	public function drawCircle(x:Number, y:Number, radius:Number):void 
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: Graphics.drawCircle() $$$$");
	}
	public function drawRect(x:Number, y:Number, width:Number, height:Number):void 
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: Graphics.drawRect() $$$$");
	}
	public function drawRoundRect(x:Number, y:Number, width:Number, height:Number, ellipseWidth:Number, ellipseHeight:Number = NaN):void 
	{
		if (isNaN(ellipseHeight))
			ellipseHeight = ellipseWidth;
		var ctx:CanvasRenderingContext2D = getCanvas();
		ctx.beginPath();
		ctx.moveTo(x + ellipseWidth, y);
		ctx.lineTo(x + width - ellipseWidth, y);
		ctx.quadraticCurveTo(x + width, y, x + width, y + ellipseHeight);
		ctx.lineTo(x + width, y + height - ellipseHeight);
		ctx.quadraticCurveTo(x + width, y + height, x + width - ellipseWidth, y + height);
		ctx.lineTo(x + ellipseWidth, y + height);
		ctx.quadraticCurveTo(x, y + height, x, y + height - ellipseHeight);
		ctx.lineTo(x, y + ellipseHeight);
		ctx.quadraticCurveTo(x, y, x + ellipseWidth, y);
		ctx.closePath();
		if (hasStrokeStlye) ctx.stroke();
	}
	public function drawGraphicsData(graphicsData:Vector.<IGraphicsData>):void 
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: Graphics.drawGraphicsData() $$$$");
	}
	public function endFill():void 
	{
		var ctx:CanvasRenderingContext2D = getCanvas();
		(ctx as Object).fill();
	}
	public function lineStyle(thickness:Number = NaN, color:uint = 0, alpha:Number = 1.0, pixelHinting:Boolean = false, scaleMode:String = "normal", caps:String = null, joints:String = null, miterLimit:Number = 3):void
	{
		hasStrokeStlye = true;
		var ctx:CanvasRenderingContext2D = getCanvas();
		ctx.lineWidth = thickness;
		if (color != 0)
		{
			ctx.strokeStyle = "rgba(" + ((color >> 16) & 0xFF) +"," 
				+ ((color >> 8) & 0xFF) + "," 
				+ (color & 0xFF) + "," + alpha + ")";
		}
	}
	public function lineGradientStyle(type:String, colors:Array, alphas:Array, ratios:Array, matrix:Matrix = null, spreadMethod:String = "pad", interpolationMethod:String = "rgb", focalPointRatio:Number = 0):void 
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: Graphics.lineGradientStyle() $$$$");
	}
	public function lineTo(x:Number, y:Number):void 
	{
		var ctx:CanvasRenderingContext2D = getCanvas();
		ctx.lineTo(x, y);
		if (hasStrokeStlye) ctx.stroke();
	}
	public function moveTo(x:Number, y:Number):void 
	{
		var ctx:CanvasRenderingContext2D = getCanvas();
		ctx.moveTo(x, y);
		
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