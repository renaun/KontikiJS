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
	
	import flash.geom.ColorTransform;
	import flash.geom.Matrix;
	import flash.geom.Point;
	import flash.geom.Rectangle;
	import flash.text.TextField;
	import flash.text.TextFormat;
	import flash.utils.ByteArray;
	import flash.utils.Dictionary;
	import flash.utils.FlashTimingEngine;
	import randori.webkit.html.canvas.CanvasPattern;
	
	import randori.webkit.html.HTMLCanvasElement;
	import randori.webkit.html.HTMLImageElement;
	import randori.webkit.html.canvas.CanvasRenderingContext2D;
	import randori.webkit.page.Window;
	import randori.webkit.xml.XMLHttpRequest;
	
	import renaun.html.stub.JSImage;

public class BitmapData implements IBitmapDrawable
{
	
	public var noRepeatPatern:CanvasPattern;
	public var repeatPatern:CanvasPattern;
	public function BitmapData(width:int, height:int, transparent:Boolean = true, fillColor:uint = 0xFFFFFFFF)
	{
		this.width = width;
		this.height = height;
		this.transparent = transparent;
		this.fillColor = fillColor;
		
		var len:int = width * height;
		if (len > 0)
		{
			var canvas:HTMLCanvasElement = Window.document.createElement("canvas") as HTMLCanvasElement;
			canvas.width = width;
			canvas.height = height;
			var ctx:CanvasRenderingContext2D = canvas.getContext("2d");
			//ctx.drawImage(sourceBitmapData.image as HTMLImageElement, 0, 0, sourceBitmapData.image.width, sourceBitmapData.image.height, 0, 0, sourceBitmapData.image.width, sourceBitmapData.image.height);
			imageData = ctx.createImageData2(width, height) as JSImage;
			if (transparent && fillColor == 0) // By default createImageData creates a black alpha image
				len = 0;
			for (var i:int = 0; i < len; i++)
			{
				var index:int = i * 4;
				imageData.data[index+0] = fillColor >> 16 & 0xFF;;
				imageData.data[index+1] = fillColor >> 8 & 0xFF;
				imageData.data[index+2] = fillColor >> 0 & 0xFF;
				imageData.data[index+3] = (transparent) ? (fillColor >> 24 & 0xFF) : 0xFF;
			}
			(ctx as Object).putImageData(imageData, 0, 0);
			image = canvas as JSImage;
			updatePatern();
		}
		_rect = new Rectangle(0, 0, width, height);
	}
	
	public function updatePatern():void {
		var g:Graphics = new Graphics;
		var ctx:CanvasRenderingContext2D = g.getCanvas();
		repeatPatern=ctx.createPattern2(image as HTMLImageElement, "repeat");
		noRepeatPatern=ctx.createPattern2(image as HTMLImageElement, "no-repeat");
	}
	
	// WebGL Specific
	public var image:JSImage;
	public var imageData:JSImage; // Really is a ImageData
	public var isLoaded:Boolean = false;
	public function embedImage(source:String):void
	{
		image = new JSImage();
		var request:XMLHttpRequest = new XMLHttpRequest();
		request.open("get", source, false );
		request.overrideMimeType('text/plain; charset=x-user-defined');
		request.send();
		
		var byteMe:String ="";
		var len:int = request.responseText.length;
		for (var i:int=0; i<=len-1; i++)
			byteMe += String.fromCharCode(request.responseText.charCodeAt(i) & 0xff);
		
		image.onerror = function():void {
			trace("ImageError");
		};
		var that:Object = this;
		image.onload = function():void {
			trace("ONLOAD Here: " + this.width + " - " + this.height + " - " + this.complete + " - " + that.image.width);
			
			that.width = that.image.width;
			that.height = that.image.height;
			that.isLoaded = true;
		};
		image.src="data:image/png;base64,"+ window.btoa(byteMe);
		trace("ImageLoaded Here: " + image.width + " - " + image.height + " source:" + source + " - " + this.image.complete);
		if (this.image.complete)
		{
			width = image.width;
			height = image.height;
		}
		else
		{
			isLoaded = false;
			FlashTimingEngine.embedLoadingObjects.push(this);
		}
	}
	
	// Not Implemented Correctly
	private var bitmapBytes:ByteArray;
	
	public var width:int = 0;
	public var height:int = 0;
	
	private var transparent:Boolean;
	private var fillColor:uint;
	
	private var _rect:Rectangle;
	public function get rect():Rectangle { return _rect };
	
	public function lock():void {}
	public function unlock():void {}
	
	public function colorTransform(rect:Rectangle, colorTransform:ColorTransform):void {}
	
	public function copyPixels(sourceBitmapData:BitmapData, sourceRect:Rectangle, destPoint:Point, alphaBitmapData:BitmapData = null, alphaPoint:Point = null, mergeAlpha:Boolean = false):void
	{
		if (sourceBitmapData.image)
		{
			// Scale up the texture to the next highest power of two dimensions.
			var canvas:HTMLCanvasElement = Window.document.createElement("canvas") as HTMLCanvasElement;
			canvas.width = width;
			canvas.height = height;
			var ctx:CanvasRenderingContext2D = canvas.getContext("2d");
			ctx.drawImage6(sourceBitmapData.image as HTMLCanvasElement, 0, 0, sourceBitmapData.image.width, sourceBitmapData.image.height, 0, 0, sourceBitmapData.image.width, sourceBitmapData.image.height);
			image = canvas as JSImage;
		}
		else
		{
			
			FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: NON IMAGE BitmapData.copyPixels() $$$$");
		}
	}
	public function getPixel(x:int, y:int):uint 
	{ 
		bitmapBytes.position = (x + (y*width))*4;
		return bitmapBytes.readUnsignedInt(); 
	}
	public function getPixel32(x:int, y:int):uint 
	{ 
		bitmapBytes.position = (x + (y*width))*4;
		return bitmapBytes.readUnsignedInt(); 
	}
	public function getPixels(rect:Rectangle):ByteArray { return new ByteArray() }
	public function setPixel(x:int, y:int, color:uint):void 
	{
		bitmapBytes.position = (x + (y*width))*4;
		bitmapBytes.writeUnsignedInt(color);
	}
	public function setPixel32(x:int, y:int, color:uint):void 
	{ 
		bitmapBytes.position = (x + (y*width))*4;
		bitmapBytes.writeUnsignedInt(color);
	}
	public function setPixels(rect:Rectangle, inputByteArray:ByteArray):void 
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: BitmapData.setPixels() $$$$");
	}
	public function getColorBoundsRect(color1:uint, color2:uint):Rectangle 
	{ 
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: BitmapData.getColorBoundsRect() $$$$");
		return new Rectangle(0, 0, 10, 10); 
	}
	
	public function applyFilter(sourceBitmapData:BitmapData, sourceRect:Rectangle, destPoint:Point, filter:*):void 
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: BitmapData.applyFilter() $$$$");
	}
	public function noise(randomSeed:int, low:uint = 0, high:uint = 255, channelOptions:uint = 7, grayScale:Boolean = false):void 
	{
		// low, high, and randomSeed is ignored
		// Ignoring channel's and grayscale for now and just randomizing all values 0xffffffff
		for (var i:int = 0; i < bitmapBytes.length; i += 4) 
		{
			bitmapBytes.position = i;
			bitmapBytes.writeUnsignedInt(Math.random()*0xffffffff);
		}
		
	}
	public function scroll(x:int, y:int):void 
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: BitmapData.scroll() $$$$");
	}
	
	public function fillRect(rect:Rectangle, color:uint):void  
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: BitmapData.fillRect() $$$$");
	}
	public function floodFill(x:int, y:int, color:uint):void 
	{
		var pos:int = (x + (y*width)); // without * 4 bytes
		var pixelColor:uint = getPixel(x, y);
		
		setPixel(x, y, color); 
		checkTable = new Dictionary();
		checkTable[pos] = true;
		recFloodFill(x, y, color, pixelColor);
	}
	
	private var checkTable:Dictionary;
	private function recFloodFill(x:int, y:int, fillColor:uint, checkColor:uint):void
	{
		var pos:int = (x + (y*width));
		if (pos < 0 || pos > (width*height) || 
			checkTable[pos] == true || getPixel(x, y) != checkColor)
			return;
		if (!checkTable[pos])
		{
			setPixel(x, y, fillColor);
			checkTable[pos] = true;
		}
		recFloodFill(x-1,y-1, fillColor, checkColor);
		recFloodFill(x+0,y-1, fillColor, checkColor);
		recFloodFill(x+1,y-1, fillColor, checkColor);
		recFloodFill(x-1,y+0, fillColor, checkColor);
		recFloodFill(x+1,y+0, fillColor, checkColor);
		recFloodFill(x-1,y+1, fillColor, checkColor);
		recFloodFill(x+0,y+1, fillColor, checkColor);
		recFloodFill(x+1,y+1, fillColor, checkColor);
	}
	
	public function dispose():void  
	{
		if (image)
		{
			imageData = null;
			image = null;
		}
		else
		{
			FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: BitmapData.dispose() $$$$");
		}
	}
	public function draw(source:IBitmapDrawable, matrix:Matrix = null, colorTransform:ColorTransform = null, blendMode:String = null, clipRect:Rectangle = null, smoothing:Boolean = false):void  
	{
		var sourceBitmapData:BitmapData = source as BitmapData;
		if (!sourceBitmapData || !image)
			return;
		var ctx:CanvasRenderingContext2D;
		if ((sourceBitmapData as Object).constructor.className == "flash.text.TextField")
		{
			var text:TextField = sourceBitmapData as TextField;
			var format:TextFormat = text.defaultTextFormat;
			// TODO add rasterizeHTML.js functionality here to render the text
			ctx = image.getContext("2d");
			ctx.font = format.size+"px " + format.font;
			(ctx as Object).fillText(text.text, matrix.tx, matrix.ty);
		}
		try
		{
			var shape:Shape = source as Shape;
			if (shape.graphics && shape.graphics.canvas)
			{
				image = shape.graphics.canvas as JSImage;
			}
		}
		catch (error:Error)
		{
			
		}
		if (!sourceBitmapData.image)
			return;
		ctx = image.getContext("2d");
		(ctx as Object).drawImage(sourceBitmapData.image as HTMLImageElement, 0, 0, sourceBitmapData.image.width * matrix.a, sourceBitmapData.image.height * matrix.d);
		
	}
	public function paletteMap(sourceBitmapData:BitmapData, sourceRect:Rectangle, destPoint:Point, redArray:Array = null, greenArray:Array = null, blueArray:Array = null, alphaArray:Array = null):void  
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: BitmapData.paletteMap() $$$$");
	}
	public function perlinNoise(baseX:Number, baseY:Number, numOctaves:uint, randomSeed:int, stitch:Boolean, fractalNoise:Boolean, channelOptions:uint = 7, grayScale:Boolean = false, offsets:Array = null):void  
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: BitmapData.perlinNoise() $$$$");
	}
	public function threshold(sourceBitmapData:BitmapData, sourceRect:Rectangle, destPoint:Point, operation:String, threshold:uint, color:uint = 0, mask:uint = 0xFFFFFFFF, copySource:Boolean = false):uint  
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: BitmapData.threshold() $$$$");
		return 0 
	}
	
	public function hitTest(firstPoint:Point, firstAlphaThreshold:uint, secondObject:Object, secondBitmapDataPoint:Point = null, secondAlphaThreshold:uint = 1):Boolean
	{
		FlashTimingEngine.logAPIWarning("$$$$ API NOT COMPLETE: NON IMAGE BitmapData.hitTest() $$$$");
		return false;
	}

	
	public function clone():BitmapData
	{
		return new BitmapData(width, height);
	}
}
}